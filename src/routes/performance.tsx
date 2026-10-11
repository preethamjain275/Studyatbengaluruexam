import { createFileRoute, Link } from "@tanstack/react-router";
import { LineChart } from "lucide-react";
import { EmptyState, PageHeader, btnPrimary } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Performance - Study at Bangalore" },
      { name: "description", content: "Scores, accuracy and subject-wise trends from your attempts." },
      { property: "og:title", content: "Performance - Study at Bangalore" },
      { property: "og:description", content: "Scores, accuracy and subject-wise trends from your attempts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerformancePage,
});

function PerformancePage() {
  const { user, ready } = useAuth();

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  return (
    <div>
      <PageHeader eyebrow="Performance" title="Your performance">
        Personal scores, accuracy and subject-wise trends for {user?.email}.
      </PageHeader>
      <EmptyState icon={LineChart} title="No attempts yet" action={<Link to="/practice" className={btnPrimary}>Go to practice</Link>}>
        Complete a practice set or mock test to see your performance metrics.
      </EmptyState>
    </div>
  );
}
