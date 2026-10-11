import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { EmptyState, PageHeader, btnPrimary } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard - Study at Bangalore" },
      { name: "description", content: "Top performers across the Scholarship Exam and mock tests." },
      { property: "og:title", content: "Leaderboard - Study at Bangalore" },
      { property: "og:description", content: "Top performers across the Scholarship Exam and mock tests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeaderboardPage,
});

function LeaderboardPage() {
  const { user, ready } = useAuth();

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  return (
    <div>
      <PageHeader eyebrow="Leaderboard" title="Global Leaderboard">
        Top performers across the Scholarship Exam and mock tests. Your personal rank will be calculated upon completion.
      </PageHeader>
      <EmptyState icon={Trophy} title="Leaderboard opens with the first exam window" action={<Link to="/practice" className={btnPrimary}>Go to practice</Link>}>
        Rankings appear once the first Scholarship Exam window closes.
      </EmptyState>
    </div>
  );
}
