import { createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { getMockAvailability, startMock } from "@/lib/engine.functions";
import { getPreset, type QType } from "@/lib/engine/patterns";
import { btnPrimary, Card, PageHeader } from "@/components/site/ui";

const availQuery = (presetId: string) => queryOptions({ queryKey: ["mock-avail", presetId], queryFn: () => getMockAvailability({ data: { presetId } }) });
const TYPE_LABEL: Record<QType, string> = { single: "Single-correct MCQ", multiple: "Multiple-correct", numerical: "Numerical value", assertion_reason: "Assertion-Reason" };

export const Route = createFileRoute("/_authenticated/mock/$presetId")({
  head: () => ({ meta: [{ title: "Mock test instructions - Study at Bangalore" }, { name: "description", content: "Read the duration, marking scheme and rules before starting." }] }),
  loader: ({ context, params }) => {
    if (!getPreset(params.presetId)) throw notFound();
    return context.queryClient.ensureQueryData(availQuery(params.presetId));
  },
  component: MockInstructions,
  errorComponent: ({ error }) => <p className="surface p-6 text-sm">{(error as Error).message}</p>,
});

function MockInstructions() {
  const { presetId } = Route.useParams();
  const p = getPreset(presetId)!;
  const { data: plan } = useSuspenseQuery(availQuery(presetId));
  const start = useServerFn(startMock);
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function go() {
    setBusy(true); setErr(null);
    try {
      if (p.fullscreen && document.fullscreenEnabled) await document.documentElement.requestFullscreen().catch(() => null);
      const r = await start({ data: { presetId } });
      navigate({ to: "/test/$attemptId", params: { attemptId: r.attemptId } });
    } catch (e) { setErr((e as Error).message); setBusy(false); }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader eyebrow={p.kind === "simulation" ? "Simulation - not an official exam" : "Official-pattern mock - not an official exam"} title={p.name}>
        Read every instruction before you start. The timer begins only when you press Start test.
      </PageHeader>
      {!plan.full && (
        <div role="note" className="rounded-xl border border-sky/50 bg-sky/10 p-4 text-sm">
          The verified question bank currently has {plan.planned} of the {plan.official} questions this paper needs, so this runs as a <b>sectional simulation</b> with the same marking and a proportional {plan.durationMin}-minute timer.
        </div>
      )}
      <Card title="Paper structure">
        <ul className="space-y-1 text-sm">
          <li>Duration: <b>{plan.durationMin} minutes</b>{!plan.full && ` (full paper: ${p.durationMin} minutes)`}</li>
          <li>Questions: <b>{plan.planned}</b>{!plan.full && ` (full paper: ${plan.official})`}</li>
          {plan.sections.map((s) => <li key={s.name}>· {s.name}: {s.planned} questions - {s.types.map((t) => TYPE_LABEL[t]).join(", ")}</li>)}
        </ul>
      </Card>
      <Card title="Marking scheme">
        <ul className="space-y-1 text-sm">
          {(Object.entries(p.marking) as [QType, NonNullable<(typeof p.marking)[QType]>][]).map(([t, m]) => (
            <li key={t}>{TYPE_LABEL[t]}: +{m.correct} correct, {m.incorrect} incorrect, {m.unanswered} unanswered{m.partialPerCorrectOption ? `, +${m.partialPerCorrectOption} per correct option chosen (partial, when no wrong option is chosen)` : ""}</li>
          ))}
        </ul>
      </Card>
      <Card title="Rules and navigation">
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {p.instructions.map((i) => <li key={i}>{i}</li>)}
          <li>{p.backtracking ? "You may move back and forth between questions." : "You cannot return to earlier questions."}</li>
          <li>Calculator: {p.calculator}. Language: {p.language}.</li>
          <li>Mark for review, clear response and the question palette are available. Answers save automatically and survive a refresh.</li>
          <li>Submission: confirm manually any time, or the test submits automatically when the timer reaches zero. Scores are calculated on our server.</li>
          <li>Supervision: {p.fullscreen ? "full-screen mode is requested; " : ""}leaving the window, exiting full screen and copy attempts are recorded. This website cannot block system shortcuts, screenshots or browser extensions. Screen readers and other assistive tools are never penalised.</li>
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">Pattern reference: <a href={p.source.url} target="_blank" rel="noreferrer" className="text-primary underline">{p.source.label}</a>. Always check the current year's bulletin.</p>
      </Card>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="h-4 w-4" />I have read the instructions.</label>
      {err && <p className="text-sm text-destructive">{err}</p>}
      <button onClick={go} disabled={!agree || busy || plan.planned === 0} className={btnPrimary}>{busy ? "Starting…" : plan.planned === 0 ? "No verified questions yet" : "Start test"}</button>
    </div>
  );
}
