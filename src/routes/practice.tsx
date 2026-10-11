import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EXAMS } from "@/lib/exams";
import { TRACKS } from "@/lib/engine/patterns";
import { MASTERY_THRESHOLD } from "@/lib/engine/state";
import { PageHeader } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice - Study at Bangalore" },
      { name: "description", content: "Level-by-level mastery practice: Easy, Medium, Hard, Expert with a 90% unlock rule." },
      { property: "og:title", content: "Practice - Study at Bangalore" },
      { property: "og:description", content: "Level-by-level mastery practice: Easy, Medium, Hard, Expert with a 90% unlock rule." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PracticePage,
});

function PracticePage() {
  const { user, ready } = useAuth();

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  return (
    <div>
      <PageHeader eyebrow="Practice" title="Mastery practice by exam">
        Easy → Medium → Hard → Expert. Score {MASTERY_THRESHOLD}% or more to unlock each next level and earn the mastery certificate.
      </PageHeader>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {EXAMS.map((e) => (
          <Link key={e.id} to="/mastery/$examId" params={{ examId: e.id }} className="surface lift group flex flex-col p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{e.group}</span>
            <span className="mt-1 text-lg font-bold">{e.name}</span>
            <span className="mt-2 flex-1 text-sm text-muted-foreground">{(TRACKS[e.id] ?? []).map((t) => t.name).join(" · ")}</span>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Open mastery path <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
