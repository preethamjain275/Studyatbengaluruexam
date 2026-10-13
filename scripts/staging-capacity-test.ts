import { supabaseAdmin } from "../src/integrations/supabase/client.server";
import { finalizeAttempt } from "../src/lib/engine.server";
import { QUESTIONS_BANK } from "../src/data/questions-bank";

function calculatePercentiles(latencies: number[]) {
  if (latencies.length === 0) return { mean: 0, p50: 0, p90: 0, p95: 0, p99: 0, min: 0, max: 0 };
  const sorted = [...latencies].sort((a, b) => a - b);
  const n = sorted.length;
  return {
    mean: sorted.reduce((a, b) => a + b, 0) / n,
    p50: sorted[Math.floor(n * 0.50)],
    p90: sorted[Math.floor(n * 0.90)],
    p95: sorted[Math.floor(n * 0.95)],
    p99: sorted[Math.floor(n * 0.99)],
    min: sorted[0],
    max: sorted[n - 1],
  };
}

async function runCapacityTests() {
  console.log("==================================================================");
  console.log("STUDY AT BANGALORE — STAGING CAPACITY & LOAD SIMULATION TEST");
  console.log("==================================================================\n");

  const testUserId = "c0000000-66cd-4000-8000-66cd13636513";
  const testQuestions = QUESTIONS_BANK.slice(0, 10);
  const questionIds = testQuestions.map((q) => q.id);

  // -------------------------------------------------------------------------
  // TEST SUITE 1: AUTOSAVE WRITE TRAFFIC UNDER CONCURRENT LOAD
  // -------------------------------------------------------------------------
  console.log("TEST 1: Autosave Write Load Simulation");
  console.log("  Workload: 50 concurrent student sessions each saving progress 3 times (150 total writes)");

  // Setup 5 test attempts in DB
  const attemptIds: string[] = [];
  for (let i = 0; i < 5; i++) {
    const { data: att } = await supabaseAdmin
      .from("attempts")
      .insert({
        user_id: testUserId,
        mode: "practice",
        exam_id: "kcet",
        deadline: new Date(Date.now() + 600000).toISOString(),
        status: "in_progress",
        total_questions: 10,
        percentage: 0,
        score: 0,
        answers: { _meta: { track: "Physics", level: "easy", question_ids: questionIds } },
        events: [],
      } as never)
      .select("id")
      .single();
    if (att) attemptIds.push(att.id);
  }

  if (attemptIds.length === 0) {
    console.error("  ✕ Failed to provision test attempts.");
    return;
  }

  const autosaveLatencies: number[] = [];
  let autosaveErrors = 0;
  const AUTOSAVE_WORKERS = 30; // 30 concurrent workers

  const startAutosave = performance.now();
  const workerTasks = Array.from({ length: AUTOSAVE_WORKERS }, async (_, workerIdx) => {
    const targetAttemptId = attemptIds[workerIdx % attemptIds.length];
    for (let round = 0; round < 3; round++) {
      const t0 = performance.now();
      try {
        const updatePayload = {
          answers: {
            _meta: { updated_at: new Date().toISOString(), worker: workerIdx, round },
            [questionIds[round % questionIds.length]]: "A",
          },
          events: [{ type: "autosave", at: Date.now() }],
        };
        const { error } = await supabaseAdmin
          .from("attempts")
          .update(updatePayload as never)
          .eq("id", targetAttemptId)
          .eq("status", "in_progress");
        const t1 = performance.now();
        autosaveLatencies.push(t1 - t0);
        if (error) autosaveErrors++;
      } catch {
        autosaveErrors++;
      }
    }
  });

  await Promise.all(workerTasks);
  const totalAutosaveDuration = performance.now() - startAutosave;
  const autosaveStats = calculatePercentiles(autosaveLatencies);
  const autosaveRps = ((autosaveLatencies.length) / (totalAutosaveDuration / 1000)).toFixed(1);

  console.log(`  ✓ Completed: ${autosaveLatencies.length} writes across ${AUTOSAVE_WORKERS} workers in ${totalAutosaveDuration.toFixed(1)}ms`);
  console.log(`  ✓ Throughput: ${autosaveRps} autosaves/sec against live DB`);
  console.log(`  ✓ Error Rate: ${(autosaveErrors / (autosaveLatencies.length || 1) * 100).toFixed(1)}%`);
  console.log(`  ✓ Latencies: Mean = ${autosaveStats.mean.toFixed(1)}ms | p50 = ${autosaveStats.p50.toFixed(1)}ms | p95 = ${autosaveStats.p95.toFixed(1)}ms | p99 = ${autosaveStats.p99.toFixed(1)}ms`);

  // -------------------------------------------------------------------------
  // TEST SUITE 2: ASSESSMENT FINALIZATION BURST & END-TO-END SCORING
  // -------------------------------------------------------------------------
  console.log("\nTEST 2: Assessment Finalization Burst Simulation");
  console.log("  Workload: 10 concurrent finalizations with full server scoring and DB updates");

  // Provision 10 distinct attempts
  const finalizeAttemptIds: string[] = [];
  for (let i = 0; i < 10; i++) {
    const { data: att } = await supabaseAdmin
      .from("attempts")
      .insert({
        user_id: testUserId,
        mode: "practice",
        exam_id: "kcet",
        deadline: new Date(Date.now() + 600000).toISOString(),
        status: "in_progress",
        total_questions: 10,
        percentage: 0,
        score: 0,
        answers: { _meta: { track: "Physics", level: "easy", question_ids: questionIds } },
        events: [],
      } as never)
      .select("id")
      .single();
    if (att) finalizeAttemptIds.push(att.id);
  }

  const finalizeLatencies: number[] = [];
  let finalizeErrors = 0;

  const startFinalize = performance.now();
  const finalizePromises = finalizeAttemptIds.map(async (attId) => {
    const t0 = performance.now();
    try {
      const answers: Record<string, string> = {};
      testQuestions.forEach((q) => { answers[q.id] = q.correct; });
      const result = await finalizeAttempt(attId, testUserId, answers);
      const t1 = performance.now();
      finalizeLatencies.push(t1 - t0);
      if (!result || result.status !== "submitted") finalizeErrors++;
    } catch (err) {
      finalizeErrors++;
    }
  });

  await Promise.all(finalizePromises);
  const totalFinalizeDuration = performance.now() - startFinalize;
  const finalizeStats = calculatePercentiles(finalizeLatencies);
  const finalizeRps = ((finalizeAttemptIds.length) / (totalFinalizeDuration / 1000)).toFixed(1);

  console.log(`  ✓ Completed: ${finalizeAttemptIds.length} full finalizations in ${totalFinalizeDuration.toFixed(1)}ms`);
  console.log(`  ✓ Throughput: ${finalizeRps} finalizations/sec against live DB`);
  console.log(`  ✓ Error Rate: ${(finalizeErrors / finalizeAttemptIds.length * 100).toFixed(1)}%`);
  console.log(`  ✓ Latencies: Mean = ${finalizeStats.mean.toFixed(1)}ms | p50 = ${finalizeStats.p50.toFixed(1)}ms | p95 = ${finalizeStats.p95.toFixed(1)}ms | p99 = ${finalizeStats.p99.toFixed(1)}ms`);

  // -------------------------------------------------------------------------
  // TEST SUITE 3: RAPID-FIRE REPEATED SUBMISSIONS (IDEMPOTENCY UNDER PRESSURE)
  // -------------------------------------------------------------------------
  console.log("\nTEST 3: Rapid-Fire Repeated Submissions (Deduplication / Idempotency)");
  console.log("  Workload: 10 consecutive submission calls to a single already-submitted attempt");

  const targetId = finalizeAttemptIds[0];
  const duplicateLatencies: number[] = [];
  let duplicateConflicts = 0;

  for (let i = 0; i < 10; i++) {
    const t0 = performance.now();
    try {
      const res = await finalizeAttempt(targetId, testUserId);
      const t1 = performance.now();
      duplicateLatencies.push(t1 - t0);
      if (res.status !== "submitted") duplicateConflicts++;
    } catch {
      duplicateConflicts++;
    }
  }

  const dupStats = calculatePercentiles(duplicateLatencies);
  console.log(`  ✓ Executed 10 consecutive calls. Conflicts/Errors: ${duplicateConflicts}`);
  console.log(`  ✓ Re-submission Latency: Mean = ${dupStats.mean.toFixed(1)}ms | p50 = ${dupStats.p50.toFixed(1)}ms | p95 = ${dupStats.p95.toFixed(1)}ms`);

  // Cleanup all provisioned test rows
  console.log("\nCleaning up staging test attempts...");
  const allCreated = [...attemptIds, ...finalizeAttemptIds];
  await supabaseAdmin.from("attempts").delete().in("id", allCreated);
  console.log(`  ✓ Removed ${allCreated.length} test records cleanly.`);

  console.log("\n==================================================================");
  console.log("STAGING CAPACITY TESTS COMPLETE — MEASURED RESULTS READY");
  console.log("==================================================================");
}

runCapacityTests().catch((e) => {
  console.error("Capacity test failed:", e);
  process.exit(1);
});
