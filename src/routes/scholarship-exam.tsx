import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, BarChart3, Bookmark, CalendarDays, Flame, Gauge, NotebookPen, PlayCircle, Trophy, TrendingDown, User, Zap,
} from "lucide-react";
import { EXAMS } from "@/lib/exams";
import { ExamCard } from "@/components/site/ExamCard";
import { Card, EmptyState, PageHeader, btnGhost, btnPrimary } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";

export const Route = createFileRoute("/scholarship-exam")({
  head: () => ({
    meta: [
      { title: "Scholarship Exam Portal - Study at Bangalore" },
      { name: "description", content: "Your Study at Bangalore scholarship dashboard: practice, mock tests, progress and leaderboard." },
      { property: "og:title", content: "Scholarship Exam Portal - Study at Bangalore" },
      { property: "og:description", content: "Practice, take mock tests and track progress toward your scholarship." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portal,
});

function Streak() {
  const days = Array.from({ length: 28 });
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {days.map((_, i) => <div key={i} className="aspect-square rounded-md bg-muted" />)}
    </div>
  );
}

function Portal() {
  const { user, ready } = useAuth();
  const meta = (user?.user_metadata || {}) as Record<string, any>;
  const displayName = meta['full_name'] || user?.email?.split("@")[0] || "Student";

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  return (
    <div>
      <PageHeader eyebrow="Scholarship Exam" title={`Welcome to your dashboard, ${displayName}`}>
        Your personal dashboard: practice levels, mock test progress, weak chapters and scholarship standing.
      </PageHeader>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Student Profile" icon={User}>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-bold text-primary-foreground">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold">{displayName}</p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </Card>

        <Card title="Continue learning" icon={PlayCircle} className="lg:col-span-2">
          <EmptyState icon={NotebookPen} title="No active sessions" action={<Link to="/practice" className={btnPrimary}>Start practice</Link>}>
            Pick an exam and chapter to begin. Your practice sessions will save automatically.
          </EmptyState>
        </Card>

        <Card title="Current difficulty level" icon={Gauge}>
          <p className="text-3xl font-bold text-brand">Easy</p>
          <p className="mt-2 text-sm text-muted-foreground">Score 90%+ on practice sets to unlock Medium & Hard levels.</p>
        </Card>

        <Card title="Daily practice" icon={Zap}>
          <p className="text-sm text-muted-foreground">Fresh 10-question set tailored for your selected exam.</p>
          <Link to="/practice" className={`${btnGhost} mt-4 w-full`}>Choose an exam</Link>
        </Card>

        <Card title="Study streak" icon={Flame}>
          <Streak />
          <p className="mt-3 text-sm text-muted-foreground">0-day streak. Practise today to start one.</p>
        </Card>

        <Card title="Recent scores" icon={BarChart3}>
          <EmptyState icon={BarChart3} title="No test attempts yet">Complete a practice set or mock test to view scores.</EmptyState>
        </Card>

        <Card title="Subject-wise progress" icon={CalendarDays}>
          <EmptyState icon={CalendarDays} title="No progress yet">Subject stats update as you solve questions.</EmptyState>
        </Card>

        <Card title="Weak chapters" icon={TrendingDown}>
          <EmptyState icon={TrendingDown} title="Nothing flagged">We'll highlight chapters where accuracy drops below 60%.</EmptyState>
        </Card>

        <Card title="Bookmarked questions" icon={Bookmark}>
          <EmptyState icon={Bookmark} title="No bookmarks" action={<Link to="/bookmarks" className="text-sm font-semibold text-primary">View bookmarks →</Link>} />
        </Card>

        <Card title="Certificates earned" icon={Award}>
          <EmptyState icon={Award} title="No certificates yet">Clear the Expert level on any exam path to earn a certificate.</EmptyState>
        </Card>

        <Card title="Global leaderboard" icon={Trophy} className="lg:col-span-2">
          <EmptyState icon={Trophy} title="Leaderboard opens with the first exam window" action={<Link to="/leaderboard" className="text-sm font-semibold text-primary">Open leaderboard →</Link>} />
        </Card>
      </div>

      <h2 className="mb-5 mt-12 text-2xl font-bold">Exam categories</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {EXAMS.map((e) => <ExamCard key={e.id} exam={e} />)}
      </div>
    </div>
  );
}
