import { supabaseAdmin } from "../src/integrations/supabase/client.server";

async function checkRpc() {
  const rpcs = ["exec_sql", "execute_sql", "run_sql", "has_role"];
  for (const r of rpcs) {
    const { data, error } = await supabaseAdmin.rpc(r as any, {} as any);
    console.log(`RPC [${r}]:`, error ? `error (${error.code}): ${error.message}` : "exists!");
  }
}

checkRpc().catch((e) => {
  console.error(e);
  process.exit(1);
});
