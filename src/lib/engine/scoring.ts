import type { Marking, QType } from "./patterns";

export type Correct = string | string[] | { value: number; tolerance?: number };
export type Response = string | string[] | null | undefined;
export type Outcome = "correct" | "incorrect" | "partial" | "unanswered";

export function hasAnswer(r: Response): boolean {
  if (r == null) return false;
  if (Array.isArray(r)) return r.length > 0;
  return String(r).trim() !== "";
}

/** Deterministic marking for one response. */
export function scoreResponse(qtype: QType, correct: Correct, response: Response, m: Marking): { outcome: Outcome; marks: number } {
  if (!hasAnswer(response)) return { outcome: "unanswered", marks: m.unanswered };
  if (qtype === "numerical") {
    const c = correct as { value: number; tolerance?: number };
    const v = Number(String(response).trim());
    if (!Number.isFinite(v)) return { outcome: "incorrect", marks: m.incorrect };
    const ok = Math.abs(v - c.value) <= (c.tolerance ?? 0) + 1e-9;
    return ok ? { outcome: "correct", marks: m.correct } : { outcome: "incorrect", marks: m.incorrect };
  }
  if (qtype === "multiple") {
    const key = new Set(correct as string[]);
    const chosen = [...new Set(response as string[])];
    if (chosen.some((c) => !key.has(c))) return { outcome: "incorrect", marks: m.incorrect };
    if (chosen.length === key.size) return { outcome: "correct", marks: m.correct };
    const per = m.partialPerCorrectOption ?? 0;
    return { outcome: "partial", marks: per * chosen.length };
  }
  const ok = String(response) === String(correct);
  return ok ? { outcome: "correct", marks: m.correct } : { outcome: "incorrect", marks: m.incorrect };
}

export type KeyedQuestion = { id: string; qtype: QType; correct: Correct; subject: string; chapter: string };

export type AttemptResult = {
  score: number; maxScore: number; percent: number;
  correct: number; incorrect: number; partial: number; unanswered: number;
  bySubject: Record<string, { correct: number; total: number; score: number }>;
  byChapter: Record<string, { correct: number; total: number }>;
  outcomes: Record<string, { outcome: Outcome; marks: number }>;
  weakChapters: string[];
};

const round2 = (n: number) => Math.round(n * 100) / 100;

export function computeResult(questions: KeyedQuestion[], answers: Record<string, Response>, markingFor: (t: QType) => Marking, weakBelow = 0.9): AttemptResult {
  const r: AttemptResult = { score: 0, maxScore: 0, percent: 0, correct: 0, incorrect: 0, partial: 0, unanswered: 0, bySubject: {}, byChapter: {}, outcomes: {}, weakChapters: [] };
  for (const q of questions) {
    const m = markingFor(q.qtype);
    const s = scoreResponse(q.qtype, q.correct, answers[q.id], m);
    r.outcomes[q.id] = s;
    r.score += s.marks;
    r.maxScore += m.correct;
    r[s.outcome] += 1;
    const sub = (r.bySubject[q.subject] ??= { correct: 0, total: 0, score: 0 });
    sub.total += 1; sub.score += s.marks; if (s.outcome === "correct") sub.correct += 1;
    const ch = (r.byChapter[q.chapter] ??= { correct: 0, total: 0 });
    ch.total += 1; if (s.outcome === "correct") ch.correct += 1;
  }
  r.score = round2(r.score);
  r.percent = r.maxScore > 0 ? round2((Math.max(0, r.score) / r.maxScore) * 100) : 0;
  r.weakChapters = Object.entries(r.byChapter).filter(([, v]) => v.correct / v.total < weakBelow).map(([k]) => k);
  return r;
}

/** Duplicate-submission guard: only an in-progress attempt may be scored. */
export function submissionDecision(status: string): "score" | "already_submitted" {
  return status === "in_progress" ? "score" : "already_submitted";
}
