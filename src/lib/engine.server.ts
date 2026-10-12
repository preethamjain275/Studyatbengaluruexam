import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { computeResult, submissionDecision, type Correct, type KeyedQuestion, type Response } from "@/lib/engine/scoring";
import { getPreset, PRACTICE_MARKING, type QType } from "@/lib/engine/patterns";
import { QUESTIONS_BY_ID } from "@/data/questions-bank";

/** Scores an attempt on the server exactly once. Safe to call repeatedly. */
export async function finalizeAttempt(
  attemptId: string,
  userId?: string,
  clientAnswers?: Record<string, any>,
  clientStatuses?: Record<string, any>
) {
  let query = supabaseAdmin.from("attempts").select("*").eq("id", attemptId);
  if (userId) query = query.eq("user_id", userId);
  let { data: att } = await query.maybeSingle();
  if (!att) {
    const res = await supabaseAdmin.from("attempts").select("*").eq("id", attemptId).maybeSingle();
    att = res.data;
  }
  if (!att) throw new Error("Attempt not found");
  if (submissionDecision(att.status) === "already_submitted") return att;

  const rawAnswers = (att.answers ?? {}) as Record<string, any>;

  // Merge client-provided answers directly if submitted at finalization
  if (clientAnswers && typeof clientAnswers === "object") {
    for (const [k, v] of Object.entries(clientAnswers)) {
      if (!k.startsWith("_") && v != null) {
        rawAnswers[k] = v;
      }
    }
  }

  let questionIds: string[] = att.question_ids || rawAnswers?.['_meta']?.['question_ids'] || [];
  const presetId = att.preset_id || rawAnswers?.['_meta']?.['preset_id'];

  if (questionIds.length === 0) {
    const answeredKeys = Object.keys(rawAnswers).filter((k) => !k.startsWith('_'));
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

  // Clean answers removing internal meta key
  const cleanAnswers = { ...rawAnswers };
  delete cleanAnswers['_meta'];
  delete cleanAnswers['_result'];
  const result = computeResult(qs, cleanAnswers as Record<string, Response>, markingFor);
  const now = new Date();
  const submittedAt = now > new Date(att.deadline || now) ? (att.deadline || now.toISOString()) : now.toISOString();

  const updatePayload: Record<string, any> = {
    status: "submitted",
    score: result.score,
    percentage: result.percent,
    percent: result.percent,
    correct_count: result.correct,
    incorrect_count: result.incorrect,
    unanswered_count: result.unanswered,
    total_questions: qs.length,
    answers: {
      ...rawAnswers,
      _meta: {
        ...(rawAnswers?.['_meta'] || {}),
        submitted_at: submittedAt,
        max_score: result.maxScore,
        percent: result.percent,
      },
      _result: result,
    },
    result,
  };

  if (clientStatuses && typeof clientStatuses === "object") {
    updatePayload['statuses'] = clientStatuses;
  }

  const { data: updated, error: updateErr } = await supabaseAdmin
    .from("attempts")
    .update(updatePayload as any)
    .eq("id", attemptId)
    .select("*")
    .maybeSingle();

  if (updated) return updated;
  if (updateErr) console.error("Error finalizing attempt:", updateErr);
  const { data: again } = await supabaseAdmin.from("attempts").select("*").eq("id", attemptId).single();
  return again!;
}
