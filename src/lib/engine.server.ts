import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { computeResult, submissionDecision, type Correct, type KeyedQuestion, type Response } from "@/lib/engine/scoring";
import { getPreset, PRACTICE_MARKING, type QType } from "@/lib/engine/patterns";
import { QUESTIONS_BY_ID } from "@/data/questions-bank";

/** Scores an attempt on the server exactly once. Safe to call repeatedly. */
export async function finalizeAttempt(
  attemptId: string,
  userId?: string,
  clientAnswers?: Record<string, string | string[]>,
  clientStatuses?: Record<string, { visited?: boolean; marked?: boolean }>
) {
  const { data: att } = await supabaseAdmin.from("attempts").select("*").eq("id", attemptId).maybeSingle();
  if (!att) throw new Error("Attempt not found");

  // Enforce ownership: owner or administrator only
  if (userId && att.user_id !== userId) {
    const { data: roleRow } = await supabaseAdmin
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .maybeSingle();
    const isAdmin = (roleRow?.role as string) === "super_admin" || roleRow?.role === "admin";
    if (!isAdmin) {
      throw new Error("Unauthorized: You do not have permission to finalize this attempt");
    }
  }

  if (submissionDecision(att.status) === "already_submitted") return att;

  const rawAnswers = (att.answers ?? {}) as Record<string, any>;

  // Extract student answers from stored answers
  const studentAnswers: Record<string, any> = {};
  for (const [k, v] of Object.entries(rawAnswers)) {
    if (!k.startsWith("_") && v != null) {
      studentAnswers[k] = v;
    }
  }

  // Merge in fresh clientAnswers if supplied during submission
  if (clientAnswers) {
    for (const [k, v] of Object.entries(clientAnswers)) {
      if (!k.startsWith("_") && v != null) {
        studentAnswers[k] = v;
      }
    }
  }

  let questionIds: string[] = att.question_ids || rawAnswers?.["_meta"]?.["question_ids"] || [];
  const presetId = att.preset_id || rawAnswers?.["_meta"]?.["preset_id"];

  if (questionIds.length === 0) {
    const answeredKeys = Object.keys(studentAnswers);
    if (answeredKeys.length > 0) questionIds = answeredKeys;
  }

  // Look up questions from in-code question bank
  let qs: KeyedQuestion[] = questionIds
    .map((id) => {
      const q = QUESTIONS_BY_ID.get(id);
      if (q) return { id: q.id, qtype: q.qtype as QType, correct: q.correct as unknown as Correct, subject: q.subject, chapter: q.chapter };
      return null;
    })
    .filter(Boolean) as KeyedQuestion[];

  // Fallback to Supabase if any IDs not in local bank
  if (qs.length === 0 && questionIds.length > 0) {
    const { data: keys } = await supabaseAdmin.from("questions").select("id, qtype, correct, subject, chapter").in("id", questionIds);
    qs = (keys ?? []).map((k) => ({ id: k.id, qtype: k.qtype as QType, correct: k.correct as unknown as Correct, subject: k.subject, chapter: k.chapter }));
  }
  const preset = att.mode === "mock" ? getPreset(presetId) : undefined;
  const markingFor = (t: QType) => (preset ? preset.marking[t] ?? preset.marking.single ?? PRACTICE_MARKING : PRACTICE_MARKING);

  const result = computeResult(qs, studentAnswers as Record<string, Response>, markingFor);
  const now = new Date();
  const submittedAt = now > new Date(att.deadline || now) ? (att.deadline || now.toISOString()) : now.toISOString();

  const finalAnswers: Record<string, any> = {
    ...rawAnswers,
    ...studentAnswers,
    _meta: {
      ...(rawAnswers?.["_meta"] || {}),
      submitted_at: submittedAt,
      max_score: result.maxScore,
      percent: result.percent,
      score: result.score,
      correct: result.correct,
      incorrect: result.incorrect,
      unanswered: result.unanswered,
      total_questions: qs.length,
    },
    _result: result,
  };

  if (clientStatuses) {
    finalAnswers["_statuses"] = clientStatuses;
  }

  const baseUpdatePayload = {
    status: "submitted",
    score: result.score,
    percentage: result.percent,
    correct_count: result.correct,
    incorrect_count: result.incorrect,
    unanswered_count: result.unanswered,
    total_questions: qs.length,
    answers: finalAnswers,
  };

  // Try updating with full columns first (in case percent/result/etc. exist), fallback to base payload
  const fullUpdatePayload = {
    ...baseUpdatePayload,
    percent: result.percent,
    max_score: result.maxScore,
    submitted_at: submittedAt,
    result: result,
  };

  const { data: updatedFull, error: errFull } = await supabaseAdmin
    .from("attempts")
    .update(fullUpdatePayload as any)
    .eq("id", attemptId)
    .select("*")
    .maybeSingle();

  if (updatedFull && !errFull) return updatedFull;

  // Fallback to base columns that always exist in PostgreSQL
  const { data: updatedBase, error: errBase } = await supabaseAdmin
    .from("attempts")
    .update(baseUpdatePayload as any)
    .eq("id", attemptId)
    .select("*")
    .maybeSingle();

  if (updatedBase && !errBase) return updatedBase;
  if (errBase) console.error("Error finalizing attempt:", errBase);

  const { data: again } = await supabaseAdmin.from("attempts").select("*").eq("id", attemptId).single();
  return again!;
}
