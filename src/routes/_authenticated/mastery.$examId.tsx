import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { AlertTriangle, Award, CheckCircle2, Lock, Play } from "lucide-react";
import { getMastery, startPractice } from "@/lib/engine.functions";
import { LEVEL_LABEL, LEVELS, PRACTICE_SECONDS_PER_Q, PRACTICE_SET_SIZE, type Level } from "@/lib/engine/patterns";
import { MASTERY_THRESHOLD } from "@/lib/engine/state";
import { getExam } from "@/lib/exams";
import { btnGhost, btnPrimary, PageHeader } from "@/components/site/ui";

const masteryQuery = (examId: string) => queryOptions({ queryKey: ["mastery", examId], queryFn: () => getMastery({ data: { examId } }), retry: false });

export const Route = createFileRoute("/_authenticated/mastery/$examId")({
  head: () => ({ meta: [{ title: "Mastery practice - Study at Bangalore" }, { name: "description", content: "Level-by-level practice with a 90% unlock rule." }] }),
  loader: ({ context, params }) => {
    if (!getExam(params.examId)) throw notFound();
    return context.queryClient.ensureQueryData(masteryQuery(params.examId));
  },
  component: MasteryPage,
  errorComponent: MasteryError,
});

function MasteryError({ error }: { error: unknown }) {
  const msg = (error as Error)?.message || "Something went wrong";
  const isAuthError = msg.toLowerCase().includes("unauthorized") || msg.toLowerCase().includes("no authorization");
  return (
    <div className="surface mx-auto my-8 max-w-lg p-8 text-center">
      <AlertTriangle className="mx-auto h-10 w-10 text-amber-500" />
      <h2 className="mt-4 text-lg font-bold">{isAuthError ? "Questions are loading…" : "Could not load practice data"}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {isAuthError
          ? "Questions require a verified database connection. The question bank is being set up — please check back shortly, or contact support if this persists."
          : msg}
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link to="/practice" className={btnGhost}>← Back to Practice</Link>
        <button onClick={() => window.location.reload()} className={btnPrimary}>Try again</button>
      </div>
    </div>
  );
}

function MasteryPage() {
  const { examId } = Route.useParams();
  const exam = getExam(examId)!;
  const { data } = useSuspenseQuery(masteryQuery(examId));
  const start = useServerFn(startPractice);
  const navigate = useNavigate();
  const [pending, setPending] = useState<{ track: string; level: Level } | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [count, setCount] = useState(20);

  const poolSize = pending ? ((data as any[]).find((t: any) => t.track === pending.track)?.pool[pending.level] ?? PRACTICE_SET_SIZE) : PRACTICE_SET_SIZE;
  const n = Math.min(count, poolSize);
  async function go() {
    if (!pending) return;
    setBusy(true); setErr(null);
    try { const r = await start({ data: { examId, ...pending, count: Math.min(count, poolSize) } }); navigate({ to: "/test/$attemptId", params: { attemptId: r.attemptId } }); }
    catch (e) { setErr((e as Error).message); setBusy(false); }
  }

  return (
    <div>
      <PageHeader eyebrow={`${exam.short} · Mastery practice`} title={`${exam.name} mastery path`}>
        Start at Easy. Score at least {MASTERY_THRESHOLD}% on a set of {PRACTICE_SET_SIZE}+ questions to unlock the next level. Pick a single subject or a mixed paper (PCB / PCM), choose how many questions, and keep retrying - every retake reshuffles questions and options. Full mock tests are never locked by this path.
      </PageHeader>
      <div className="grid gap-4 md:grid-cols-2">
        {(data as any[]).map((t: any) => (
          <section key={t.track} className="surface p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">{t.track}</h2>
              {t.state.mastered && <span className="flex items-center gap-1 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success"><Award className="h-3.5 w-3.5" />Certificate-eligible</span>}
            </div>
            <ol className="mt-4 space-y-2">
              {LEVELS.map((lvl) => {
                const unlocked = t.state.unlocked.includes(lvl);
                const passed = t.state.passed.includes(lvl);
                const best = t.state.best[lvl];
                const open = (t.open as any[]).find((o: any) => o.level === lvl);
                const enough = (t.pool[lvl] ?? 0) >= PRACTICE_SET_SIZE;
                return (
                  <li key={lvl} className={`flex items-center gap-3 rounded-xl border p-3 ${unlocked ? "" : "opacity-60"}`}>
                    {passed ? <CheckCircle2 className="h-5 w-5 text-success" /> : unlocked ? <Play className="h-5 w-5 text-primary" /> : <Lock className="h-5 w-5 text-muted-foreground" />}
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{LEVEL_LABEL[lvl]}</p>
                      <p className="text-xs text-muted-foreground">
                        {best != null ? `Best ${best}%` : "Not attempted"} · {t.pool[lvl]} verified questions{!enough && " - more being reviewed"}
                      </p>
                    </div>
                    {open ? <Link to="/test/$attemptId" params={{ attemptId: open.id }} className={btnGhost}>Resume</Link>
                      : unlocked && enough ? <button onClick={() => setPending({ track: t.track, level: lvl })} className={btnPrimary}>{best != null ? "Retry" : "Start"}</button>
                      : null}
                  </li>
                );
              })}
            </ol>
            {t.lastResult && t.lastResult.weakChapters.length > 0 && (
              <p className="mt-3 text-xs text-muted-foreground">Last set ({LEVEL_LABEL[t.lastResult.level as Level]}, {t.lastResult.percent}%) - weak chapters: {t.lastResult.weakChapters.join(", ")}. <Link to="/results/$attemptId" params={{ attemptId: t.lastResult.id }} className="text-primary underline">View result</Link></p>
            )}
          </section>
        ))}
      </div>

      {pending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" role="dialog" aria-modal="true" aria-labelledby="ins">
          <div className="surface w-full max-w-md p-6">
            <h3 id="ins" className="text-lg font-bold">{pending.track} · {LEVEL_LABEL[pending.level]} - instructions</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
              <li>{n} questions · {Math.round((n * PRACTICE_SECONDS_PER_Q[pending.level]) / 60)} minutes. The timer starts when you press Start. Questions and options are shuffled every time.</li>
              <li>Practice scoring: 1 mark per correct answer, no negative marks. You need {MASTERY_THRESHOLD}% to unlock the next level.</li>
              <li>Move freely between questions, mark for review, clear responses. Answers save automatically.</li>
              <li>When time runs out your answers are submitted automatically.</li>
            </ul>
            <fieldset className="mt-4">
              <legend className="text-sm font-semibold">How many questions?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {[10, 20, 40, 60, 90].filter((c) => c < poolSize).concat([poolSize]).map((c) => (
                  <button key={c} type="button" onClick={() => setCount(c)} aria-pressed={n === c}
                    className={`rounded-full border px-3 py-1.5 text-sm ${n === c ? "border-primary bg-primary text-primary-foreground" : "hover:bg-accent"}`}>
                    {c === poolSize ? `Max (${c})` : c}
                  </button>
                ))}
              </div>
            </fieldset>
            {err && <p className="mt-3 text-sm text-destructive">{err}</p>}
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => { setPending(null); setErr(null); }} className={btnGhost}>Cancel</button>
              <button onClick={go} disabled={busy} className={btnPrimary}>{busy ? "Starting…" : "Start"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
