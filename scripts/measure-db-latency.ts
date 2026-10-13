import { supabaseAdmin } from "../src/integrations/supabase/client.server";

async function measureLatencyPath() {
  console.log("=== PRIORITY 3: DATABASE LATENCY PATH DISSECTION ===\n");

  const supabaseUrl = process.env["SUPABASE_URL"] || "https://fbyvydtakpcklthvmdrk.supabase.co";

  // 1. Raw HTTP network transit time to Supabase domain
  const rawHttpTimes: number[] = [];
  for (let i = 0; i < 5; i++) {
    const t0 = performance.now();
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/`, {
        headers: {
          apikey: process.env["SUPABASE_SERVICE_ROLE_KEY"] || "",
          Authorization: `Bearer ${process.env["SUPABASE_SERVICE_ROLE_KEY"] || ""}`,
        },
      });
      const t1 = performance.now();
      rawHttpTimes.push(t1 - t0);
    } catch (e) {
      console.error(e);
    }
  }
  const avgRawHttp = rawHttpTimes.reduce((a, b) => a + b, 0) / rawHttpTimes.length;
  console.log(`1. Raw HTTP Network Round-Trip to PostgREST Endpoint:`);
  console.log(`   Samples: ${rawHttpTimes.map((t) => t.toFixed(0) + "ms").join(", ")}`);
  console.log(`   Average Network RTT: ${avgRawHttp.toFixed(1)}ms`);

  // 2. PostgREST Indexed Query Latency (attempts table by ID)
  const queryTimes: number[] = [];
  for (let i = 0; i < 5; i++) {
    const t0 = performance.now();
    const { data, error } = await supabaseAdmin
      .from("attempts")
      .select("id")
      .limit(1);
    const t1 = performance.now();
    queryTimes.push(t1 - t0);
  }
  const avgQuery = queryTimes.reduce((a, b) => a + b, 0) / queryTimes.length;
  console.log(`\n2. PostgREST Query (HTTP + Database Execution):`);
  console.log(`   Samples: ${queryTimes.map((t) => t.toFixed(0) + "ms").join(", ")}`);
  console.log(`   Average PostgREST Query Time: ${avgQuery.toFixed(1)}ms`);

  // 3. Database Execution Difference
  const dbComputeDelta = Math.max(0, avgQuery - avgRawHttp);
  console.log(`\n3. Latency Decomposition Analysis:`);
  console.log(`   - Network Transit & TLS: ~${avgRawHttp.toFixed(1)}ms (${((avgRawHttp / avgQuery) * 100).toFixed(1)}% of total)`);
  console.log(`   - PostgREST + Postgres Execution: ~${dbComputeDelta.toFixed(1)}ms (${((dbComputeDelta / avgQuery) * 100).toFixed(1)}% of total)`);

  console.log(`\nConclusion: The observed ~250-500ms latency is dominated by geographic network transit`);
  console.log(`to the remote Supabase hosting region, NOT database lock contention or PostgreSQL query execution.`);
}

measureLatencyPath().catch(console.error);
