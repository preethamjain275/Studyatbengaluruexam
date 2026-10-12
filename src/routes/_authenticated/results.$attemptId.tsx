import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Award, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { getResult, startPractice, submitAttempt } from "@/lib/engine.functions";
import { getPreset, LEVEL_LABEL, LEVELS, type Level } from "@/lib/engine/patterns";
import { MASTERY_THRESHOLD, formatClock } from "@/lib/engine/state";
import { getExam } from "@/lib/exams";
import { btnGhost, btnPrimary, Card } from "@/components/site/ui";

import { computeResult } from "@/lib/engine/scoring";
import { PRACTICE_MARKING } from "@/lib/engine/patterns";
import { AttemptProgression } from "@/components/site/AttemptProgression";
import { getMasteryThreshold } from "@/lib/engine/state";

const resultQuery = (id: string) =>
  queryOptions({
    queryKey: ["result", id],
    queryFn: () => getResult({ data: { id } }),
    staleTime: 0,
    gcTime: 0,
  });

export const Route = createFileRoute("/_authenticated/results/$attemptId")({
  head: () => ({ meta: [{ title: "Your result - Study at Bangalore" }, { name: "description", content: "Score, subject-wise analysis and solutions." }, { name: "robots", content: "noindex" }] }),
  loader: ({ context, params }) => context.queryClient.ensureQueryData(resultQuery(params.attemptId)),
  component: ResultPage,
  errorComponent: ({ error }) => <p className="surface p-6 text-sm">{(error as Error).message}</p>,
});

function fmtAns(a: unknown) {
  if (a == null || a === "") return "-";
  if (Array.isArray(a)) return a.join(", ").toUpperCase();
  if (typeof a === "object" && "value" in (a as object)) return String((a as { value: number }).value);
  return String(a).toUpperCase();
}

function ResultPage() {
  const { attemptId } = Route.useParams();
  const { data } = useSuspenseQuery(resultQuery(attemptId));
  const navigate = useNavigate();
  const start = useServerFn(startPractice);
  const [err, setErr] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const attempt = data.attempt;
  const questions = data.questions || [];
  const showSolutions = data.showSolutions ?? true;
  const cleanAnswers = Object.fromEntries(
    Object.entries(attempt?.answers || {}).filter(([k]) => !k.startsWith('_'))
  );
  const result = (data.result && data.result.outcomes) ? data.result : computeResult(
    questions.map((q: any) => ({ id: q.id, qtype: q.qtype, correct: q.correct, subject: q.subject, chapter: q.chapter })),
    cleanAnswers,
    () => PRACTICE_MARKING
  );
  const outcomes = result?.outcomes || {};
  const bySubject = result?.bySubject || {};
  const byChapter = result?.byChapter || {};
  const exam = getExam(attempt?.examId);
  const preset = attempt?.presetId ? getPreset(attempt.presetId) : undefined;
  const practice = attempt.mode === "practice";
  const level = attempt.level as Level;
  const targetThreshold = getMasteryThreshold();
  const passed = practice && (attempt.percent ?? 0) >= targetThreshold;
  const isEasyPass = (attempt.percent ?? 0) >= 60;
  const nextLevel = LEVELS[LEVELS.indexOf(level) + 1];
  const spent = attempt.submittedAt ? new Date(attempt.submittedAt).getTime() - new Date(attempt.startedAt).getTime() : 0;
  const needRevision = questions.filter((q) => outcomes[q.id]?.outcome !== "correct");
  const gap = targetThreshold - (attempt.percent ?? 0);

  // Distinct NCERT chapters needing revision
  const weakChaptersList = Array.from(new Set(needRevision.map((q) => q.chapter || "General Revision")));

  async function retry(lvl: Level) {
    setErr(null);
    try { const r = await start({ data: { examId: attempt.examId, track: attempt.track, level: lvl } }); navigate({ to: "/test/$attemptId", params: { attemptId: r.attemptId } }); }
    catch (e) { setErr((e as Error).message); }
  }

  return (
    <div className="space-y-6">
      {/* Student Scorecard & Status Banner */}
      <div className="surface p-6 shadow-sm border rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {practice ? `${exam?.short} · ${attempt.track} · ${LEVEL_LABEL[level]} practice` : preset?.name}
          </p>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            isEasyPass ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/30" : "bg-amber-500/15 text-amber-700 border border-amber-500/30"
          }`}>
            {isEasyPass ? "Easy Pass 🎉" : "Still Need to Improve 📚"}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-end gap-6">
          <div><p className="text-4xl font-bold">{attempt.score} <span className="text-lg text-muted-foreground">/ {attempt.maxScore}</span></p><p className="text-sm text-muted-foreground">Total Score</p></div>
          <div><p className="text-4xl font-bold">{attempt.percent}%</p><p className="text-sm text-muted-foreground">Percentage</p></div>
          <div className="text-sm">
            <p>Correct: <b className="text-emerald-600">{result.correct}</b> · Incorrect: <b className="text-destructive">{result.incorrect}</b>{result.partial ? <> · Partial: <b>{result.partial}</b></> : null} · Unanswered: <b className="text-muted-foreground">{result.unanswered}</b></p>
            <p className="text-muted-foreground">Time spent: {formatClock(spent)}</p>
          </div>
        </div>

        <div className={`mt-5 rounded-xl border p-4 text-sm ${
          isEasyPass ? "border-emerald-500/30 bg-emerald-500/5" : "border-amber-500/30 bg-amber-500/5"
        }`}>
          <p className="font-semibold text-base mb-1">
            {isEasyPass ? "Great Performance! You have cleared this test." : "Still Need to Improve — Keep Going!"}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {isEasyPass
              ? (passed && nextLevel
                  ? `You scored ${attempt.percent}%, clearing the ${targetThreshold}% unlock target! You can now advance to ${LEVEL_LABEL[nextLevel]}.`
                  : `You scored ${attempt.percent}%. Congratulations on demonstrating strong mastery of these concepts!`)
              : (gap > 0 && gap <= 10
                  ? `You scored ${attempt.percent}%. You can do it! Just ${gap}% to go to unlock ${nextLevel ? LEVEL_LABEL[nextLevel] : "the next level"}! Review the formulas below and retry.`
                  : `You scored ${attempt.percent}%. Don't worry — test practice is the best way to grow! Review the NCERT lessons and highlighted formulas below, then retry.`)
            }
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={() => retry(level)} className={btnPrimary}><RotateCcw className="h-4 w-4" />Retry with New Questions</button>
            {passed && nextLevel && <button onClick={() => retry(nextLevel)} className={btnGhost}>Start {LEVEL_LABEL[nextLevel]}</button>}
            <Link to="/practice" className={btnGhost}>Practice Another Subject</Link>
          </div>
          {err && <p className="mt-2 text-destructive">{err}</p>}
        </div>
      </div>

      {/* Oval Attempt Progression Curve & Motivational Stepper */}
      <AttemptProgression
        paperName={practice ? `${exam?.short || "Exam"} · ${attempt.track}` : preset?.name}
        level={level}
        targetThreshold={targetThreshold}
        attempts={[
          {
            id: attempt.id,
            level: level,
            percent: attempt.percent ?? 0,
            score: attempt.score ?? 0,
            maxScore: attempt.maxScore ?? 10,
          }
        ]}
      />

      {/* NCERT Formula & Chapter Preparation Guide (Always available, especially when needing improvement) */}
      <Card title={`NCERT Preparation & Formula Guide (${weakChaptersList.length} chapter${weakChaptersList.length === 1 ? "" : "s"} to focus on)`}>
        {weakChaptersList.length === 0 ? (
          <p className="text-sm text-emerald-600 font-medium">All questions were answered correctly! Your NCERT conceptual foundations are solid for this paper.</p>
        ) : (
          <div className="space-y-4 text-sm">
            <p className="text-muted-foreground">
              Based on your test attempt, here are the exact NCERT lessons and important formulas to prepare:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {weakChaptersList.map((ch) => (
                <div key={ch} className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{ch}</span>
                    <span className="text-xs bg-background/80 px-2 py-0.5 rounded border">NCERT Class 11-12</span>
                  </div>
                  <div className="text-xs space-y-1 text-muted-foreground">
                    <p className="font-semibold text-foreground">Important Formulas & Concepts to Revise:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Revise standard NCERT textbook definitions and solved exemplar problems for <i>{ch}</i>.</li>
                      <li>Highlight key SI units, dimensional formulas, and conditions for applying the relevant laws.</li>
                      <li>Double check negative signs, boundary values, and algebraic simplifications.</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Subject-wise breakdown">
          <ul className="space-y-2 text-sm">{Object.entries(bySubject).map(([s, v]) => (
            <li key={s} className="flex justify-between"><span>{s}</span><span className="tabular-nums font-semibold">{v.correct}/{v.total} correct · {Math.round(v.score * 100) / 100} marks</span></li>
          ))}</ul>
        </Card>
        <Card title="Chapter-wise accuracy">
          <ul className="space-y-2 text-sm">{Object.entries(byChapter).map(([c, v]) => (
            <li key={c}><div className="flex justify-between"><span>{c}</span><span className="tabular-nums font-semibold">{Math.round((v.correct / v.total) * 100)}%</span></div>
              <div className="mt-1 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-brand" style={{ width: `${(v.correct / v.total) * 100}%` }} /></div></li>
          ))}</ul>
        </Card>
      </div>

      {/* Pointwise NCERT Solutions with Highlighted Formulas */}
      <Card title="Question Bank Review & Pointwise NCERT Solutions">
        {!showSolutions ? <p className="text-sm text-muted-foreground">This test's settings don't allow solution review.</p> : (
          <ol className="space-y-4">
            {questions.map((q, i) => {
              const o = outcomes[q.id]?.outcome ?? "unanswered";
              return (
                <li key={q.id} className="rounded-xl border p-4 shadow-sm bg-card">
                  <button className="flex w-full items-start gap-3 text-left" onClick={() => setOpen(open === q.id ? null : q.id)} aria-expanded={open === q.id}>
                    {o === "correct" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />}
                    <div className="flex-1">
                      <span className="text-sm font-semibold">Q{i + 1}. {q.body}</span>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="bg-muted px-2 py-0.5 rounded">{q.subject}</span>
                        <span className="bg-muted px-2 py-0.5 rounded">{q.chapter}</span>
                        <span className="bg-muted px-2 py-0.5 rounded capitalize">{q.difficulty}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold uppercase px-2 py-0.5 rounded ${o === "correct" ? "bg-emerald-500/10 text-emerald-600" : "bg-destructive/10 text-destructive"}`}>{o}</span>
                  </button>
                  {open === q.id && (
                    <div className="mt-4 space-y-3 border-t pt-4 text-sm animate-in fade-in">
                      {q.options && q.options.length > 0 && (
                        <div className="space-y-1.5 bg-muted/30 p-3 rounded-lg border">
                          <p className="text-xs font-semibold uppercase text-muted-foreground">Options:</p>
                          <ul className="space-y-1">
                            {q.options.map((op: any) => {
                              const userAns = attempt?.answers?.[q.id];
                              const isUserChosen = Array.isArray(userAns)
                                ? userAns.map(String).map((s: string) => s.trim().toLowerCase()).includes(String(op.id).trim().toLowerCase())
                                : userAns != null && String(userAns).trim().toLowerCase() === String(op.id).trim().toLowerCase();

                              const isCorrectOpt = Array.isArray(q.correct)
                                ? q.correct.map(String).map((s: string) => s.trim().toLowerCase()).includes(String(op.id).trim().toLowerCase())
                                : q.correct != null && String(q.correct).trim().toLowerCase() === String(op.id).trim().toLowerCase();
                              return (
                                <li key={op.id} className={`p-1.5 rounded text-xs flex items-center justify-between ${
                                  isCorrectOpt ? "bg-emerald-500/15 font-semibold text-emerald-700 border border-emerald-500/30" : isUserChosen ? "bg-destructive/15 text-destructive font-medium border border-destructive/30" : ""
                                }`}>
                                  <span><b className="uppercase mr-1.5">{op.id}.</b> {op.text}</span>
                                  {isCorrectOpt && <span className="text-[10px] uppercase font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded">Correct Key</span>}
                                  {!isCorrectOpt && isUserChosen && <span className="text-[10px] uppercase font-bold bg-destructive text-white px-1.5 py-0.5 rounded">Your Answer</span>}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-4 text-xs font-medium bg-background p-2.5 rounded-lg border">
                        <p>Your Response: <b className="uppercase text-foreground">{fmtAns(attempt.answers[q.id])}</b></p>
                        <p>Correct Answer: <b className="uppercase text-emerald-600">{fmtAns(q.correct)}</b></p>
                      </div>

                      {/* Pointwise NCERT Concept & Formula Highlight Box */}
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 space-y-2 text-xs">
                        <p className="font-bold text-primary flex items-center gap-1.5">
                          📌 Pointwise NCERT Explanation:
                        </p>
                        {q.explanation && (
                          <div className="space-y-1 text-foreground">
                            {q.explanation.split(".").filter((s: string) => s.trim().length > 0).map((step: string, idx: number) => (
                              <p key={idx} className="flex items-start gap-1.5">
                                <span className="text-primary font-bold">•</span>
                                <span>{step.trim()}.</span>
                              </p>
                            ))}
                          </div>
                        )}
                      </div>

                      <p className="text-[11px] text-muted-foreground">Source: {q.source} {q.is_previous_year ? `(PYQ ${q.source_year})` : "(NCERT-aligned practice question)"}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        )}
      </Card>
    </div>
  );
}
