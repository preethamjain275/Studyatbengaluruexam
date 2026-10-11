import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, FileText } from "lucide-react";
import { EXAMS } from "@/lib/exams";
import { presetsFor } from "@/lib/engine/patterns";
import { PageHeader } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";

export const Route = createFileRoute("/mock-tests")({
  head: () => ({
    meta: [
      { title: "Mock Tests - Study at Bangalore" },
      { name: "description", content: "Timed mock tests that follow each exam's own pattern, duration and marking scheme." },
      { property: "og:title", content: "Mock Tests - Study at Bangalore" },
      { property: "og:description", content: "Timed mock tests that follow each exam's own pattern, duration and marking scheme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MockTestsPage,
});

function MockTestsPage() {
  const { user, ready } = useAuth();

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  return (
    <div>
      <PageHeader eyebrow="Mock Tests" title="Exam-pattern mock tests">
        Each test uses its exam's own duration, sections and marking. Mocks are open to everyone - they are never locked by practice levels. All mocks are practice simulations, not official examinations.
      </PageHeader>
      <div className="space-y-6">
        {EXAMS.map((e) => (
          <section key={e.id}>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{e.name}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {presetsFor(e.id).map((p) => (
                <Link key={p.id} to="/mock/$presetId" params={{ presetId: p.id }} className="surface lift p-4">
                  <p className="font-semibold">{p.name}</p>
                  <p className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.durationMin} min</span>
                    <span className="inline-flex items-center gap-1"><FileText className="h-3.5 w-3.5" />{p.sections.reduce((a, s) => a + s.questions, 0)} questions</span>
                    <span className="rounded-full bg-accent px-2 py-0.5">{p.kind === "simulation" ? "Simulation" : "Official pattern"}</span>
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
