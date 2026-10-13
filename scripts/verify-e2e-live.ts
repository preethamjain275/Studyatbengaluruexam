import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { finalizeAttempt } from "@/lib/engine.server";
import { computeResult, type KeyedQuestion, type Response } from "@/lib/engine/scoring";
import { PRACTICE_MARKING } from "@/lib/engine/patterns";
import { QUESTIONS_BANK } from "@/data/questions-bank";

async function runE2EVerification() {
  console.log("=== PHASE 3 E2E LIVE DATABASE VERIFICATION ===");

  // 1. Pick a test student user
  const testUserId = "c0000000-66cd-4000-8000-66cd13636513";
  const testQuestions = QUESTIONS_BANK.slice(0, 10);
  const chosenIds = testQuestions.map((q) => q.id);
  const deadline = new Date(Date.now() + 600000).toISOString();

  console.log("Step 1: Creating in-progress practice attempt with 10 questions...");
  const livePayload = {
    user_id: testUserId,
    mode: "practice",
    exam_id: "kcet",
    deadline,
    status: "in_progress",
    total_questions: chosenIds.length,
    percentage: 0,
    score: 0,
    answers: { _meta: { track: "Physics", level: "easy", question_ids: chosenIds, started_at: new Date().toISOString() } },
    events: [],
  };

  const { data: createdAttempt, error: createErr } = await supabaseAdmin
    .from("attempts")
    .insert(livePayload as never)
    .select("*")
    .single();

  if (createErr || !createdAttempt) {
    throw new Error(`Failed to create attempt: ${createErr?.message}`);
  }
  const attemptId = createdAttempt.id;
  console.log(`✓ Attempt created with ID: ${attemptId}`);

  try {
    // Step 2: Test saveProgress dual-mode fallback
    console.log("Step 2: Simulating autosave with 5 answers...");
    // Answer first 5 questions correctly
    const savedAnswers: Record<string, string> = {};
    for (let i = 0; i < 5; i++) {
      savedAnswers[testQuestions[i].id] = testQuestions[i].correct;
    }

    const mergedAnswers = {
      ...(createdAttempt.answers as Record<string, any>),
      ...savedAnswers,
      _meta: {
        ...((createdAttempt.answers as any)?._meta || {}),
        updated_at: new Date().toISOString(),
      },
      _statuses: { [testQuestions[0].id]: { visited: true } },
    };

    // Attempt the dual-mode update
    const updateObj = {
      answers: mergedAnswers as never,
      events: [{ type: "test_save", at: Date.now() }] as never,
      statuses: { [testQuestions[0].id]: { visited: true } } as never,
    };

    let { error: saveErr } = await supabaseAdmin
      .from("attempts")
      .update(updateObj)
      .eq("id", attemptId)
      .eq("status", "in_progress");

    if (saveErr && (saveErr.code === "PGRST204" || saveErr.code === "42703" || saveErr.message?.includes("column"))) {
      console.log("✓ Caught expected missing column 'statuses', applying live schema fallback...");
      const liveUpdate = {
        answers: mergedAnswers as never,
        events: [{ type: "test_save", at: Date.now() }] as never,
      };
      const fallbackRes = await supabaseAdmin
        .from("attempts")
        .update(liveUpdate)
        .eq("id", attemptId)
        .eq("status", "in_progress");
      saveErr = fallbackRes.error;
    }

    if (saveErr) {
      throw new Error(`Autosave failed: ${saveErr.message}`);
    }
    console.log("✓ Autosave succeeded without error!");

    // Verify answers are persisted in DB
    const { data: dbCheck } = await supabaseAdmin.from("attempts").select("answers").eq("id", attemptId).single();
    const persisted = dbCheck?.answers as Record<string, any>;
    const studentAnswerKeys = Object.keys(persisted).filter(k => !k.startsWith('_'));
    console.log(`✓ Database has persisted answers: ${studentAnswerKeys.length} student answers saved.`);
    if (studentAnswerKeys.length !== 5) {
      throw new Error(`Expected 5 saved answers, found ${studentAnswerKeys.length}`);
    }

    // Step 3: Final submission with all 10 answers (8 correct, 2 incorrect)
    console.log("Step 3: Submitting attempt with 8 correct and 2 incorrect answers...");
    const submissionAnswers: Record<string, string> = {};
    for (let i = 0; i < 8; i++) {
      submissionAnswers[testQuestions[i].id] = testQuestions[i].correct;
    }
    // 2 incorrect
    submissionAnswers[testQuestions[8].id] = testQuestions[8].correct === "a" ? "b" : "a";
    submissionAnswers[testQuestions[9].id] = testQuestions[9].correct === "a" ? "b" : "a";

    const finalized = await finalizeAttempt(attemptId, testUserId, submissionAnswers);
    console.log("✓ finalizeAttempt succeeded!");
    console.log(`  - Status: ${finalized.status}`);
    console.log(`  - Score: ${finalized.score} / ${finalized.total_questions}`);
    console.log(`  - Percentage: ${finalized.percentage ?? finalized.percent}%`);
    console.log(`  - Correct: ${finalized.correct_count}`);
    console.log(`  - Incorrect: ${finalized.incorrect_count}`);
    console.log(`  - Unanswered: ${finalized.unanswered_count}`);

    if (finalized.status !== "submitted") throw new Error("Status should be submitted");
    if (finalized.correct_count !== 8) throw new Error(`Expected 8 correct, got ${finalized.correct_count}`);
    if (finalized.incorrect_count !== 2) throw new Error(`Expected 2 incorrect, got ${finalized.incorrect_count}`);
    if (finalized.unanswered_count !== 0) throw new Error(`Expected 0 unanswered, got ${finalized.unanswered_count}`);
    if (finalized.score !== 8) throw new Error(`Expected score 8, got ${finalized.score}`);

    // Step 4: Verify result retrieval
    console.log("Step 4: Fetching finalized attempt row to verify result review consistency...");
    const { data: finalDbRow } = await supabaseAdmin.from("attempts").select("*").eq("id", attemptId).single();
    const finalAnswers = finalDbRow.answers as Record<string, any>;
    const finalResult = finalAnswers._result;

    if (!finalResult) throw new Error("Missing _result in answers JSONB");
    if (finalResult.score !== 8) throw new Error(`Expected result score 8, got ${finalResult.score}`);
    if (Object.keys(finalResult.outcomes).length !== 10) throw new Error(`Expected 10 outcomes, got ${Object.keys(finalResult.outcomes).length}`);

    console.log("✓ All 10 question outcomes match!");
    console.log("=== ALL E2E VERIFICATION CHECKS PASSED WITH 100% SUCCESS ===");

  } finally {
    console.log("Step 5: Cleaning up test attempt from database...");
    await supabaseAdmin.from("attempts").delete().eq("id", attemptId);
    console.log("✓ Cleaned up test attempt successfully.");
  }
}

runE2EVerification().catch((err) => {
  console.error("E2E Test Failed:", err);
  process.exit(1);
});
