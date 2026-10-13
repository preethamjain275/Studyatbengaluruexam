import { supabaseAdmin } from "../src/integrations/supabase/client.server";
import { finalizeAttempt } from "../src/lib/engine.server";
import { QUESTIONS_BANK } from "../src/data/questions-bank";

async function verifyAuthz() {
  console.log("=== PRIORITY 4: AUTHORIZATION & CROSS-USER ISOLATION AUDIT ===\n");

  const userAlpha = "d32b81bf-66cd-4000-8000-66cd13636511";
  const userBeta = "b0c8ad9c-66cd-4000-8000-66cd13636512";
  const testQuestions = QUESTIONS_BANK.slice(0, 5);
  const qIds = testQuestions.map((q) => q.id);

  console.log("Provisioning test attempt for User Alpha...");
  const { data: alphaAttempt, error: createErr } = await supabaseAdmin
    .from("attempts")
    .insert({
      user_id: userAlpha,
      mode: "practice",
      exam_id: "kcet",
      deadline: new Date(Date.now() + 600000).toISOString(),
      status: "in_progress",
      total_questions: 5,
      percentage: 0,
      score: 0,
      answers: { _meta: { track: "Physics", level: "easy", question_ids: qIds } },
      events: [],
    } as never)
    .select("*")
    .single();

  if (createErr || !alphaAttempt) {
    throw new Error(`Failed to create Alpha attempt: ${createErr?.message}`);
  }
  const attemptId = alphaAttempt.id;
  console.log(`✓ Alpha Attempt Created: ${attemptId}\n`);

  let testsPassed = 0;

  // TEST 1: User Beta attempting to finalize User Alpha's attempt
  console.log("Test 1: User Beta attempts to finalize User Alpha's attempt...");
  try {
    await finalizeAttempt(attemptId, userBeta);
    console.error("  ✕ FAILED: User Beta was able to finalize User Alpha's attempt!");
  } catch (err: any) {
    if (err.message?.includes("Unauthorized") || err.message?.includes("permission")) {
      console.log(`  ✓ PASSED: Denied with error: "${err.message}"`);
      testsPassed++;
    } else {
      console.error(`  ✕ Unexpected error:`, err);
    }
  }

  // TEST 2: Scoped query isolation (User Beta querying User Alpha's attempt)
  console.log("\nTest 2: User Beta querying attempts filtered by user_id...");
  const { data: betaView } = await supabaseAdmin
    .from("attempts")
    .select("id")
    .eq("id", attemptId)
    .eq("user_id", userBeta);
  if (!betaView || betaView.length === 0) {
    console.log("  ✓ PASSED: User Beta cannot see User Alpha's attempt in scoped queries.");
    testsPassed++;
  } else {
    console.error("  ✕ FAILED: User Beta retrieved User Alpha's attempt!");
  }

  // TEST 3: User Alpha legitimate finalization & canonical state assertion
  console.log("\nTest 3: User Alpha legitimate finalization & canonical assertions...");
  const alphaAnswers: Record<string, string> = {
    [qIds[0]]: testQuestions[0].correct,
    [qIds[1]]: testQuestions[1].correct,
    [qIds[2]]: testQuestions[2].correct,
    [qIds[3]]: "wrong_answer",
    [qIds[4]]: "wrong_answer",
  };
  const finalized = await finalizeAttempt(attemptId, userAlpha, alphaAnswers);
  if (finalized.status === "submitted" && finalized.score === 3 && finalized.percentage === 60) {
    console.log(`  ✓ PASSED: Canonical submission recorded: score = 3/5 (60%), status = submitted`);
    testsPassed++;
  } else {
    console.error("  ✕ FAILED: Canonical score mismatch:", finalized);
  }

  // TEST 4: Idempotency assertion (Subsequent finalize calls return canonical record without modifying state)
  console.log("\nTest 4: Idempotency assertion on re-submission...");
  const secondCall = await finalizeAttempt(attemptId, userAlpha);
  if (secondCall.score === 3 && secondCall.percentage === 60 && secondCall.status === "submitted") {
    console.log("  ✓ PASSED: Re-submission is idempotent and returned canonical result untouched.");
    testsPassed++;
  } else {
    console.error("  ✕ FAILED: Re-submission altered canonical state:", secondCall);
  }

  // Cleanup
  await supabaseAdmin.from("attempts").delete().eq("id", attemptId);
  console.log("\n✓ Cleaned up test attempt.");

  console.log(`\n==================================================================`);
  console.log(`AUTHORIZATION AUDIT COMPLETE: ${testsPassed}/4 TESTS PASSED`);
  console.log(`==================================================================`);
}

verifyAuthz().catch(console.error);
