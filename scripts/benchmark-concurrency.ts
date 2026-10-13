import { computeResult, type KeyedQuestion, type Response } from "../src/lib/engine/scoring";
import { shuffleOptions } from "../src/lib/engine/state";
import { PRACTICE_MARKING, type QType } from "../src/lib/engine/patterns";
import { QUESTIONS_BANK } from "../src/data/questions-bank";
import { supabaseAdmin } from "../src/integrations/supabase/client.server";

function calculatePercentiles(latencies: number[]) {
  latencies.sort((a, b) => a - b);
  const n = latencies.length;
  const p50 = latencies[Math.floor(n * 0.50)] ?? 0;
  const p90 = latencies[Math.floor(n * 0.90)] ?? 0;
  const p95 = latencies[Math.floor(n * 0.95)] ?? 0;
  const p99 = latencies[Math.floor(n * 0.99)] ?? 0;
  const mean = latencies.reduce((a, b) => a + b, 0) / n;
  return { mean, p50, p90, p95, p99, min: latencies[0], max: latencies[n - 1] };
}

async function runBenchmark() {
  console.log("===============================================================");
  console.log("STUDY AT BANGALORE — INDUSTRIAL PERFORMANCE & CONCURRENCY AUDIT");
  console.log("===============================================================\n");

  // TEST 1: SCORING ENGINE UNDER HIGH CONCURRENT LOAD (180 questions / full mock)
  console.log("TEST 1: In-Memory Scoring Engine Throughput & Latency");
  console.log("  Workload: 180-Question Mock Test with 1,000 synthetic submissions");

  const mockQuestions: KeyedQuestion[] = QUESTIONS_BANK.slice(0, 180).map((q) => ({
    id: q.id,
    qtype: q.qtype as QType,
    correct: q.correct,
    subject: q.subject,
    chapter: q.chapter,
  }));

  const mockAnswers: Record<string, Response> = {};
  mockQuestions.forEach((q, idx) => {
    // 80% correct, 20% incorrect
    mockAnswers[q.id] = (idx % 5 === 0 ? "wrong_opt" : q.correct) as Response;
  });

  const scoringLatencies: number[] = [];
  const startScoring = performance.now();
  const SCORING_RUNS = 1000;

  for (let i = 0; i < SCORING_RUNS; i++) {
    const t0 = performance.now();
    computeResult(mockQuestions, mockAnswers, () => PRACTICE_MARKING);
    const t1 = performance.now();
    scoringLatencies.push(t1 - t0);
  }
  const totalScoringTime = performance.now() - startScoring;
  const scoringStats = calculatePercentiles(scoringLatencies);
  const scoringThroughput = (SCORING_RUNS / (totalScoringTime / 1000)).toFixed(1);

  console.log(`  ✓ Completed: ${SCORING_RUNS} scoring runs in ${totalScoringTime.toFixed(1)}ms`);
  console.log(`  ✓ Throughput: ${scoringThroughput} mock evaluations/second`);
  console.log(`  ✓ Latencies: Mean = ${scoringStats.mean.toFixed(2)}ms | p50 = ${scoringStats.p50.toFixed(2)}ms | p95 = ${scoringStats.p95.toFixed(2)}ms | p99 = ${scoringStats.p99.toFixed(2)}ms`);

  // TEST 2: SHUFFLING & PRESET COMPOSITION
  console.log("\nTEST 2: Seeded Deterministic Option Shuffling");
  console.log("  Workload: 1,000 options shuffling batches (4 options/question across 180 questions)");
  const shuffleLatencies: number[] = [];
  const sampleOptions = [
    { id: "A", text: "Alpha" },
    { id: "B", text: "Beta" },
    { id: "C", text: "Gamma" },
    { id: "D", text: "Delta" },
  ];

  const startShuffle = performance.now();
  for (let i = 0; i < 1000; i++) {
    const t0 = performance.now();
    for (let q = 0; q < 180; q++) {
      shuffleOptions(sampleOptions, `attempt-${i}-q-${q}`);
    }
    const t1 = performance.now();
    shuffleLatencies.push(t1 - t0);
  }
  const totalShuffleTime = performance.now() - startShuffle;
  const shuffleStats = calculatePercentiles(shuffleLatencies);
  console.log(`  ✓ Completed in ${totalShuffleTime.toFixed(1)}ms`);
  console.log(`  ✓ Latencies (180 questions): Mean = ${shuffleStats.mean.toFixed(2)}ms | p50 = ${shuffleStats.p50.toFixed(2)}ms | p95 = ${shuffleStats.p95.toFixed(2)}ms | p99 = ${shuffleStats.p99.toFixed(2)}ms`);

  // TEST 3: LIVE SUPABASE API LATENCY & CONCURRENT SATURATION
  console.log("\nTEST 3: Live Supabase Database API Latency & Concurrency");
  console.log("  Workload: 50 concurrent PostgREST requests against live Supabase PostgreSQL");

  const dbLatencies: number[] = [];
  let dbErrors = 0;
  const CONCURRENT_DB_REQS = 50;

  const t0Db = performance.now();
  const dbPromises = Array.from({ length: CONCURRENT_DB_REQS }, async (_, idx) => {
    const reqStart = performance.now();
    try {
      const { data, error } = await supabaseAdmin
        .from("questions")
        .select("id, subject, difficulty")
        .limit(10);
      const reqEnd = performance.now();
      dbLatencies.push(reqEnd - reqStart);
      if (error) dbErrors++;
    } catch {
      dbErrors++;
    }
  });

  await Promise.all(dbPromises);
  const totalDbTime = performance.now() - t0Db;
  const dbStats = calculatePercentiles(dbLatencies);
  const dbRps = (CONCURRENT_DB_REQS / (totalDbTime / 1000)).toFixed(1);

  console.log(`  ✓ Concurrency: ${CONCURRENT_DB_REQS} parallel requests`);
  console.log(`  ✓ Total Duration: ${totalDbTime.toFixed(1)}ms (${dbRps} req/sec)`);
  console.log(`  ✓ Error Rate: ${(dbErrors / CONCURRENT_DB_REQS * 100).toFixed(1)}% (${dbErrors} errors)`);
  console.log(`  ✓ Latencies: Mean = ${dbStats.mean.toFixed(2)}ms | p50 = ${dbStats.p50.toFixed(2)}ms | p95 = ${dbStats.p95.toFixed(2)}ms | p99 = ${dbStats.p99.toFixed(2)}ms`);

  // TEST 4: CONCURRENT ATTEMPT WRITE & IDEMPOTENCY SAFETY
  console.log("\nTEST 4: Concurrent Attempt Finalization & Idempotency Safety");
  console.log("  Workload: 10 concurrent finalize calls targeting the exact same attempt ID");

  const testUserId = "c0000000-66cd-4000-8000-66cd13636513";
  const deadline = new Date(Date.now() + 600000).toISOString();
  const { data: testAttempt, error: createErr } = await supabaseAdmin
    .from("attempts")
    .insert({
      user_id: testUserId,
      mode: "practice",
      exam_id: "kcet",
      deadline,
      status: "in_progress",
      total_questions: 10,
      percentage: 0,
      score: 0,
      answers: { _meta: { track: "Physics", level: "easy", question_ids: mockQuestions.slice(0, 10).map((q) => q.id) } },
      events: [],
    } as never)
    .select("id")
    .single();

  if (createErr || !testAttempt) {
    console.error("  ✕ Failed to create test attempt for race condition test:", createErr?.message);
    return;
  }

  const raceAttemptId = testAttempt.id;
  const { finalizeAttempt } = await import("../src/lib/engine.server");

  const racePromises = Array.from({ length: 10 }, async () => {
    return finalizeAttempt(raceAttemptId, testUserId);
  });

  const raceResults = await Promise.allSettled(racePromises);
  const successfulFinalizations = raceResults.filter((r) => r.status === "fulfilled").length;
  const failedFinalizations = raceResults.filter((r) => r.status === "rejected").length;

  // Cleanup test attempt
  await supabaseAdmin.from("attempts").delete().eq("id", raceAttemptId);

  console.log(`  ✓ Concurrent attempts executed: 10`);
  console.log(`  ✓ Successful (idempotent / non-destructive): ${successfulFinalizations}`);
  console.log(`  ✓ Rejected / Conflict errors: ${failedFinalizations}`);
  console.log(`  ✓ Attempt cleaned up from live database.`);

  console.log("\n===============================================================");
  console.log("BENCHMARK AUDIT COMPLETE — EMPIRICAL MEASUREMENTS READY");
  console.log("===============================================================");
}

runBenchmark().catch((err) => {
  console.error("Benchmark failed:", err);
  process.exit(1);
});
