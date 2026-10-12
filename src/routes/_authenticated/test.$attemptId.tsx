import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bookmark, ChevronLeft, ChevronRight, Eraser, Flag, Maximize, Send, ShieldAlert } from "lucide-react";
import { getAttempt, saveProgress, submitAttempt } from "@/lib/engine.functions";
import { getPreset, LEVEL_LABEL, type Level } from "@/lib/engine/patterns";
import { formatClock, isFinalWarning, paletteStatus, remainingMs, STATUS_LABEL, type QMeta, type QStatus } from "@/lib/engine/state";
import { hasAnswer } from "@/lib/engine/scoring";
import { getExam } from "@/lib/exams";
import { btnGhost, btnPrimary } from "@/components/site/ui";
import { TutorContext } from "@/components/site/Tutor";

const attemptQuery = (id: string) => queryOptions({ queryKey: ["attempt", id], queryFn: () => getAttempt({ data: { id } }), staleTime: 0 });

export const Route = createFileRoute("/_authenticated/test/$attemptId")({
  head: () => ({ meta: [{ title: "Test in progress - Study at Bangalore" }, { name: "description", content: "Computer-based test." }, { name: "robots", content: "noindex" }] }),
  loader: ({ context, params }) => context.queryClient.ensureQueryData(attemptQuery(params.attemptId)),
  component: TestPage,
  errorComponent: ({ error }) => <p className="surface p-6 text-sm">{(error as Error).message}</p>,
});

const STATUS_STYLE: Record<QStatus, string> = {
  not_visited: "bg-muted text-muted-foreground border-border",
  not_answered: "bg-destructive text-destructive-foreground border-destructive",
  answered: "bg-success text-success-foreground border-success",
  marked: "bg-review text-review-foreground border-review",
  answered_marked: "bg-review text-review-foreground border-success ring-2 ring-success ring-offset-1 ring-offset-background",
};

type Ans = string | string[];

function TestPage() {
  const { attemptId } = Route.useParams();
  const { data } = useSuspenseQuery(attemptQuery(attemptId));
  const navigate = useNavigate();
  const save = useServerFn(saveProgress);
  const submit = useServerFn(submitAttempt);
  const { attempt, questions } = data;
  const preset = attempt.presetId ? getPreset(attempt.presetId) : undefined;
  const isMock = attempt.mode === "mock";
  const examName = getExam(attempt.examId)?.name ?? attempt.examId;
  const title = preset ? preset.name : `${examName} · ${attempt.track} · ${LEVEL_LABEL[attempt.level as Level]} practice`;
  const backKey = `attempt-backup:${attemptId}`;

  const [answers, setAnswers] = useState<Record<string, Ans>>(() => {
    const init: Record<string, Ans> = {};
    if (attempt.answers) {
      for (const [k, v] of Object.entries(attempt.answers)) {
        if (!k.startsWith("_") && v != null) {
          init[k] = v;
        }
      }
    }
    return init;
  });
  const [meta, setMeta] = useState<Record<string, QMeta>>(attempt.statuses ?? {});
  const [idx, setIdx] = useState(0);
  const [now, setNow] = useState(Date.now());
  const [confirm, setConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [saveState, setSaveState] = useState<"saved" | "saving" | "offline">("saved");
  const [warning, setWarning] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const offset = useRef(data.serverNow - Date.now());
  const events = useRef<{ type: string; at: number }[]>([]);
  const dirty = useRef(false);
  const submittedRef = useRef(false);

  // Restore local backup (survives refresh / connection loss) and bookmarks.
  useEffect(() => {
    try {
      const b = JSON.parse(localStorage.getItem(backKey) ?? "null");
      if (b?.answers) {
        const cleanBAnswers: Record<string, Ans> = {};
        for (const [k, v] of Object.entries(b.answers)) {
          if (!k.startsWith("_") && v != null) {
            cleanBAnswers[k] = v as Ans;
          }
        }
        setAnswers((a) => ({ ...a, ...cleanBAnswers }));
        if (b.meta) setMeta((m) => ({ ...m, ...b.meta }));
        dirty.current = true;
      }
      setBookmarks(JSON.parse(localStorage.getItem("bookmarks") ?? "[]"));
    } catch { /* ignore corrupt backup */ }
  }, [backKey]);

  useEffect(() => {
    if (attempt.status === "submitted") navigate({ to: "/results/$attemptId", params: { attemptId }, replace: true });
  }, [attempt.status, attemptId, navigate]);

  const q = questions[idx];
  // Mark the current question visited.
  useEffect(() => {
    if (q && !meta[q.id]?.visited) { setMeta((m) => ({ ...m, [q.id]: { ...m[q.id], visited: true } })); dirty.current = true; }
  }, [q, meta]);

  useEffect(() => {
    const cleanToStore = Object.fromEntries(
      Object.entries(answers).filter(([k, v]) => !k.startsWith("_") && v != null)
    );
    localStorage.setItem(backKey, JSON.stringify({ answers: cleanToStore, meta }));
    dirty.current = true;
  }, [answers, meta, backKey]);

  const flush = useCallback(async () => {
    if (!dirty.current || submittedRef.current) return;
    dirty.current = false;
    const ev = events.current.splice(0);
    setSaveState("saving");
    try {
      const cleanAnswers = Object.fromEntries(
        Object.entries(answers).filter(([k, v]) => !k.startsWith("_") && v != null)
      );
      const r = await save({ data: { id: attemptId, answers: cleanAnswers, statuses: meta, events: ev } });
      setSaveState("saved");
      if (r.status === "submitted") { submittedRef.current = true; navigate({ to: "/results/$attemptId", params: { attemptId } }); }
    } catch {
      dirty.current = true; events.current.unshift(...ev); setSaveState("offline");
    }
  }, [answers, meta, attemptId, save, navigate]);

  useEffect(() => { const t = setInterval(flush, 5000); return () => clearInterval(t); }, [flush]);

  const doSubmit = useCallback(async () => {
    if (submittedRef.current) return;
    submittedRef.current = true; setSubmitting(true);
    try {
      const cleanAnswers = Object.fromEntries(
        Object.entries(answers).filter(([k, v]) => !k.startsWith("_") && v != null)
      );
      // Submit atomically with the latest answer snapshot so answers are never lost
      await submit({ data: { id: attemptId, answers: cleanAnswers, statuses: meta } });
      localStorage.removeItem(backKey);
      navigate({ to: "/results/$attemptId", params: { attemptId } });
    } catch {
      submittedRef.current = false; setSubmitting(false); setWarning("Submission failed - check your connection and try again. Your answers are kept on this device.");
    }
  }, [answers, meta, attemptId, submit, navigate, backKey]);

  // Authoritative countdown using server deadline.
  const left = remainingMs(attempt.deadline, now + offset.current);
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  useEffect(() => { if (left <= 0 && attempt.status === "in_progress") doSubmit(); }, [left, attempt.status, doSubmit]);

  // Supervision & Anti-cheating: focus / full-screen exit / blur detection, copy restrictions (mocks).
  useEffect(() => {
    const log = (type: string, msg?: string) => {
      events.current.push({ type, at: Date.now() });
      dirty.current = true;
      if (msg) setWarning(msg);
    };
    const vis = () => document.hidden && log("tab_hidden", "Warning: You navigated away from the exam tab. This suspicious activity has been recorded.");
    const fs = () => !document.fullscreenElement && log("fullscreen_exit", "Full-screen mode was exited. Please remain in full screen for timed exam integrity.");
    const blur = () => log("window_blur", "Exam window lost focus. Please keep your focus on the test screen.");

    document.addEventListener("visibilitychange", vis);
    document.addEventListener("fullscreenchange", fs);
    window.addEventListener("blur", blur);
    return () => {
      document.removeEventListener("visibilitychange", vis);
      document.removeEventListener("fullscreenchange", fs);
      window.removeEventListener("blur", blur);
    };
  }, []);
  const blockCopy = (e: React.ClipboardEvent | React.MouseEvent) => {
    if (isMock) {
      e.preventDefault();
      events.current.push({ type: "copy_blocked", at: Date.now() });
      setWarning("Copying text is restricted during timed mock examinations.");
    }
  };

  const statuses = useMemo(() => questions.map((qq) => paletteStatus(meta[qq.id], answers[qq.id])), [questions, meta, answers]);
  const answeredCount = questions.filter((qq) => hasAnswer(answers[qq.id])).length;
  const counts = statuses.reduce((a, s) => ({ ...a, [s]: (a[s] ?? 0) + 1 }), {} as Record<QStatus, number>);
  const canBack = !preset || preset.backtracking;
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  if (!q) {
    return (
      <div className="surface mx-auto my-8 max-w-lg p-8 text-center">
        <h2 className="text-lg font-bold">This attempt has no questions</h2>
        <p className="mt-2 text-sm text-muted-foreground">This session has completed or needs a fresh set of questions.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => navigate({ to: "/practice" })} className={btnPrimary}>Start Practice Test</button>
          <button onClick={() => navigate({ to: "/mock-tests" })} className={btnGhost}>Go to Mock Tests</button>
        </div>
      </div>
    );
  }

  const setAns = (v: Ans | null) => setAnswers((a) => { const n = { ...a }; if (v == null || (Array.isArray(v) && !v.length)) delete n[q.id]; else n[q.id] = v; return n; });
  const toggleMark = () => setMeta((m) => ({ ...m, [q.id]: { ...m[q.id], visited: true, marked: !m[q.id]?.marked } }));
  const toggleBookmark = () => {
    const n = bookmarks.includes(q.id) ? bookmarks.filter((b) => b !== q.id) : [...bookmarks, q.id];
    setBookmarks(n); localStorage.setItem("bookmarks", JSON.stringify(n));
  };
  const warn = isFinalWarning(left);

  return (
    <div className="-mt-8" onCopy={blockCopy} onCut={blockCopy} onContextMenu={blockCopy}>
      {/* Full-Screen Gatekeeper Modal: Exam must be taken in full-screen mode */}
      {!isFullscreen && typeof document !== "undefined" && document.fullscreenEnabled && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4" role="dialog" aria-modal="true">
          <div className="surface max-w-md w-full p-6 text-center space-y-4 shadow-2xl border-2 border-primary/30 rounded-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Maximize className="h-7 w-7" />
            </div>
            <h2 className="text-xl font-bold">Full-Screen Mode Required</h2>
            <p className="text-sm text-muted-foreground">
              To maintain exam integrity and provide a distraction-free testing environment, this test must be taken in full-screen mode.
            </p>
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => document.documentElement.requestFullscreen().catch(() => null)}
                className={`${btnPrimary} w-full justify-center py-3 text-base font-semibold shadow-md`}
              >
                <Maximize className="h-4 w-4 mr-1.5" />
                Allow Full-Screen & Start Test
              </button>
              <button
                onClick={() => navigate({ to: "/practice" })}
                className={`${btnGhost} w-full justify-center text-sm text-muted-foreground`}
              >
                Cancel and Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky test bar */}
      <div className="sticky top-16 z-30 -mx-4 mb-4 border-b bg-background/95 backdrop-blur-md px-4 py-3 shadow-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{title}</p>
            <div className="mt-1.5 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-brand transition-all" style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
            </div>
          </div>
          <span className="text-sm font-medium tabular-nums" aria-label="Answered">{answeredCount}/{questions.length} answered</span>
          <span role="timer" aria-live={warn ? "assertive" : "off"} className={`rounded-lg px-3 py-1.5 font-mono text-sm font-semibold tabular-nums ${warn ? "animate-pulse bg-destructive text-destructive-foreground" : "bg-accent"}`}>
            {warn && <span className="sr-only">Less than five minutes left: </span>}{formatClock(left)}
          </span>
          {!isFullscreen && typeof document !== "undefined" && document.fullscreenEnabled && (
            <button
              onClick={() => document.documentElement.requestFullscreen().catch(() => null)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
              aria-label="Enter full screen"
            >
              <Maximize className="h-3.5 w-3.5" /> Full Screen
            </button>
          )}
          <button onClick={() => setConfirm(true)} disabled={submitting} className={btnPrimary}><Send className="h-4 w-4" />Submit</button>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{saveState === "saving" ? "Saving…" : saveState === "offline" ? "Connection issue - answers kept on this device, retrying" : "All answers saved"}</p>
      </div>

      {warning && (
        <div role="alert" className="mb-4 flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-destructive" /><span className="flex-1">{warning}</span>
          <button onClick={() => setWarning(null)} className="text-xs underline">Dismiss</button>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
        <section className="surface select-none p-5 sm:p-6" aria-labelledby="qhead">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 id="qhead" className="text-lg font-bold">Question {idx + 1}</h2>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium">{q.subject} · {q.chapter}</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {q.qtype === "multiple" ? "One or more options correct" : q.qtype === "numerical" ? "Enter a numerical value" : q.qtype === "assertion_reason" ? "Assertion–Reason" : "Single correct option"}
            {q.is_previous_year ? ` · Previous-year question (${q.source}, ${q.source_year})` : " · Original practice question"}
          </p>
          <p className="mt-4 whitespace-pre-line text-base leading-relaxed">{q.body}</p>
          {!isMock && <TutorContext attemptId={attemptId} q={q} level={attempt.level} />}

          <div className="mt-5 space-y-2.5">
            {q.qtype === "numerical" ? (
              <input inputMode="decimal" value={(answers[q.id] as string) ?? ""} onChange={(e) => setAns(e.target.value.replace(/[^0-9.\-]/g, "") || null)}
                aria-label="Your numerical answer" placeholder="Type your answer" className="w-48 rounded-xl border bg-background px-3 py-2.5 font-mono outline-none focus:ring-2 focus:ring-ring" />
            ) : (
              q.options.map((o: any, oi: number) => {
                const multi = q.qtype === "multiple";
                const cur = answers[q.id];
                const sel = multi ? Array.isArray(cur) && cur.includes(o.id) : cur === o.id;
                return (
                  <button key={o.id} role={multi ? "checkbox" : "radio"} aria-checked={sel}
                    onClick={() => {
                      if (multi) { const arr = Array.isArray(cur) ? cur : []; setAns(sel ? arr.filter((x) => x !== o.id) : [...arr, o.id].sort()); }
                      else setAns(o.id);
                    }}
                    className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${sel ? "border-primary bg-primary/10 font-medium" : "hover:bg-accent"}`}>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center border text-xs font-bold uppercase ${multi ? "rounded-md" : "rounded-full"} ${sel ? "border-primary bg-primary text-primary-foreground" : ""}`}>{"abcdefgh"[oi]}</span>
                    <span className="pt-0.5">{o.text}</span>
                  </button>
                );
              })
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t pt-4">
            <button disabled={idx === 0 || !canBack} onClick={() => setIdx(idx - 1)} className={btnGhost}><ChevronLeft className="h-4 w-4" />Previous</button>
            <button onClick={toggleMark} className={btnGhost} aria-pressed={!!meta[q.id]?.marked}><Flag className="h-4 w-4" />{meta[q.id]?.marked ? "Unmark review" : "Mark for review"}</button>
            <button onClick={() => setAns(null)} className={btnGhost}><Eraser className="h-4 w-4" />Clear response</button>
            {!isMock && <button onClick={toggleBookmark} className={btnGhost} aria-pressed={bookmarks.includes(q.id)}><Bookmark className="h-4 w-4" />{bookmarks.includes(q.id) ? "Saved" : "Save"}</button>}
            <button disabled={idx === questions.length - 1} onClick={() => setIdx(idx + 1)} className={`${btnPrimary} ml-auto`}>Save & next<ChevronRight className="h-4 w-4" /></button>
          </div>
        </section>

        <aside className="surface h-fit p-4 lg:sticky lg:top-40">
          <p className="text-sm font-semibold">Question palette</p>
          <div className="mt-3 grid grid-cols-6 gap-1.5 sm:grid-cols-10 lg:grid-cols-6">
            {questions.map((qq, i) => (
              <button key={qq.id} onClick={() => (canBack || i > idx) && setIdx(i)} aria-label={`Question ${i + 1}: ${STATUS_LABEL[statuses[i] ?? "not_visited"]}`}
                className={`h-9 rounded-lg border text-xs font-semibold ${STATUS_STYLE[statuses[i] ?? "not_visited"]} ${i === idx ? "outline outline-2 outline-offset-2 outline-primary" : ""}`}>{i + 1}</button>
            ))}
          </div>
          <ul className="mt-4 space-y-1.5 text-xs" aria-label="Palette legend">
            {(Object.keys(STATUS_LABEL) as QStatus[]).map((s) => (
              <li key={s} className="flex items-center gap-2"><span className={`h-4 w-4 rounded border ${STATUS_STYLE[s]}`} />{STATUS_LABEL[s]}<span className="ml-auto tabular-nums text-muted-foreground">{counts[s] ?? 0}</span></li>
            ))}
          </ul>
        </aside>
      </div>

      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" role="dialog" aria-modal="true" aria-labelledby="sub-title">
          <div className="surface w-full max-w-sm p-6">
            <h3 id="sub-title" className="text-lg font-bold">Submit test?</h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Answered: <b>{answeredCount}</b></li>
              <li>Unanswered: <b>{questions.length - answeredCount}</b></li>
              <li>Marked for review: <b>{(counts.marked ?? 0) + (counts.answered_marked ?? 0)}</b></li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">You can't change answers after submitting.</p>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setConfirm(false)} className={btnGhost}>Keep working</button>
              <button onClick={() => { setConfirm(false); doSubmit(); }} disabled={submitting} className={btnPrimary}>{submitting ? "Submitting…" : "Submit"}</button>
            </div>
          </div>
        </div>
      )}
      {submitting && <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 text-sm font-medium" role="status">Submitting and scoring your test…</div>}
    </div>
  );
}
