import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Trophy,
  Medal,
  Award,
  Crown,
  Filter,
  User,
  Loader2,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { EmptyState, PageHeader, btnPrimary, btnGhost, Card } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";
import { getLeaderboard } from "@/lib/engine.functions";
import { EXAMS } from "@/lib/exams";
import { getInitials } from "@/lib/avatar";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Global Leaderboard - Study at Bangalore" },
      { name: "description", content: "Top performers across Scholarship Exams, mock tests and practice sets." },
      { property: "og:title", content: "Global Leaderboard - Study at Bangalore" },
      { property: "og:description", content: "Top performers across Scholarship Exams, mock tests and practice sets." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeaderboardPage,
});

function LeaderboardPage() {
  const { user, ready } = useAuth();
  const [selectedExam, setSelectedExam] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [leaderboardData, setLeaderboardData] = useState<{
    entries: any[];
    currentUserRank: any | null;
    totalParticipants: number;
  }>({ entries: [], currentUserRank: null, totalParticipants: 0 });

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await getLeaderboard({
          data: { examId: selectedExam, limit: 50, userId: user?.id },
        });
        setLeaderboardData(res);
      } catch {
        setLeaderboardData({ entries: [], currentUserRank: null, totalParticipants: 0 });
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [selectedExam, user?.id]);

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  const examTabs = [
    { id: "all", label: "All Examinations" },
    { id: "scholarship", label: "Scholarship Exam" },
    ...EXAMS.map((e) => ({ id: e.id, label: e.name })),
  ];

  const { entries, currentUserRank, totalParticipants } = leaderboardData;
  const hasEntries = entries.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader eyebrow="Leaderboard" title="Global Leaderboard">
          Verified top performers across tests and assessments. Deterministic scoring based on accuracy, score, and completion speed.
        </PageHeader>
      </div>

      {/* Exam Selection Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto border-b pb-3">
        <Filter className="h-4 w-4 text-muted-foreground shrink-0 mr-1" />
        {examTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedExam(tab.id)}
            className={`whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
              selectedExam === tab.id
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="surface p-12 text-center space-y-3 rounded-2xl">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="text-sm text-muted-foreground">Compiling leaderboard rankings…</p>
        </div>
      ) : !hasEntries ? (
        <EmptyState
          icon={Trophy}
          title="No submitted test attempts yet"
          action={
            <Link to="/practice" className={btnPrimary}>
              Take the first test
            </Link>
          }
        >
          Be the first student to complete a test in this category and secure the #1 rank on the leaderboard!
        </EmptyState>
      ) : (
        <div className="space-y-6">
          {/* CURRENT USER RANK HIGHLIGHT BANNER */}
          {currentUserRank ? (
            <div className="rounded-2xl border-2 border-primary/40 bg-gradient-to-r from-primary/10 via-primary/5 to-background p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-xl shadow-xs">
                    #{currentUserRank.rank}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-foreground">Your Standing</span>
                      <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        Top {Math.max(1, Math.round((currentUserRank.rank / totalParticipants) * 100))}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ranked #{currentUserRank.rank} of {totalParticipants} participating student{totalParticipants === 1 ? "" : "s"}.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">{currentUserRank.percentage}%</p>
                    <p className="text-[11px] text-muted-foreground">{currentUserRank.score} Marks</p>
                  </div>
                  <Link to="/practice" className={`${btnGhost} text-xs py-1.5`}>
                    Improve Rank
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="surface p-4 rounded-xl border flex items-center justify-between gap-3 text-xs">
              <p className="text-muted-foreground">
                You haven't completed a test in this examination category yet.
              </p>
              <Link to="/practice" className="font-semibold text-primary hover:underline">
                Take a test to get ranked →
              </Link>
            </div>
          )}

          {/* TOP 3 PODIUM */}
          {entries.length >= 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* RANK 2 */}
              <div className="surface p-5 rounded-2xl border text-center space-y-2 order-2 md:order-1 relative">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                  <Medal className="h-5 w-5 text-slate-400" />
                </div>
                <span className="inline-block rounded-full bg-slate-500/10 px-2.5 py-0.5 text-[11px] font-bold text-slate-600 dark:text-slate-400">
                  Rank #2 · Silver
                </span>
                <p className="font-bold text-foreground text-sm truncate">{entries[1].displayName}</p>
                <p className="text-lg font-extrabold text-primary">{entries[1].percentage}%</p>
                <p className="text-[10px] text-muted-foreground uppercase">{entries[1].examId}</p>
              </div>

              {/* RANK 1 */}
              <div className="surface p-6 rounded-2xl border-2 border-amber-500/40 bg-amber-500/5 text-center space-y-2 order-1 md:order-2 relative shadow-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-black shadow-sm">
                  <Crown className="h-6 w-6" />
                </div>
                <span className="inline-block rounded-full bg-amber-500/20 px-3 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                  Rank #1 · Gold
                </span>
                <p className="font-bold text-foreground text-base truncate">{entries[0].displayName}</p>
                <p className="text-2xl font-black text-amber-600 dark:text-amber-400">{entries[0].percentage}%</p>
                <p className="text-[11px] text-muted-foreground uppercase">{entries[0].examId}</p>
              </div>

              {/* RANK 3 */}
              <div className="surface p-5 rounded-2xl border text-center space-y-2 order-3 relative">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-800/10 text-amber-700 font-bold">
                  <Award className="h-5 w-5 text-amber-700" />
                </div>
                <span className="inline-block rounded-full bg-amber-800/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 dark:text-amber-600">
                  Rank #3 · Bronze
                </span>
                <p className="font-bold text-foreground text-sm truncate">{entries[2].displayName}</p>
                <p className="text-lg font-extrabold text-primary">{entries[2].percentage}%</p>
                <p className="text-[10px] text-muted-foreground uppercase">{entries[2].examId}</p>
              </div>
            </div>
          )}

          {/* LEADERBOARD TABLE */}
          <div className="surface rounded-2xl border overflow-hidden shadow-xs">
            <div className="px-5 py-3.5 border-b flex items-center justify-between bg-muted/30">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Rankings Table ({entries.length} students)
              </span>
              <span className="text-xs text-muted-foreground">
                Total Participants: {totalParticipants}
              </span>
            </div>

            <div className="divide-y divide-border">
              {entries.map((entry) => {
                const dateFormatted = new Date(entry.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                });
                return (
                  <div
                    key={entry.userId}
                    className={`flex items-center justify-between p-4 transition ${
                      entry.isCurrentUser
                        ? "bg-primary/10 font-medium"
                        : "hover:bg-muted/40"
                    }`}
                  >
                    {/* Rank & Student Info */}
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                          entry.rank === 1
                            ? "bg-amber-500 text-white shadow-xs"
                            : entry.rank === 2
                            ? "bg-slate-400 text-white"
                            : entry.rank === 3
                            ? "bg-amber-700 text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {entry.rank}
                      </span>

                      {/* Avatar */}
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-brand/10 border flex items-center justify-center shrink-0 text-brand text-xs font-bold">
                        {entry.avatarUrl ? (
                          <img
                            src={entry.avatarUrl}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          getInitials(entry.displayName, "")
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="font-bold text-sm text-foreground truncate">
                          {entry.displayName}
                          {entry.isCurrentUser && (
                            <span className="ml-2 rounded-full bg-primary/20 px-2 py-0.2 text-[10px] text-primary">
                              (You)
                            </span>
                          )}
                        </p>
                        <p className="text-[11px] text-muted-foreground uppercase">
                          {entry.examId} · {dateFormatted}
                        </p>
                      </div>
                    </div>

                    {/* Score & Percent */}
                    <div className="text-right shrink-0">
                      <span className="text-base font-extrabold text-foreground">
                        {entry.percentage}%
                      </span>
                      <p className="text-[11px] text-muted-foreground">
                        {entry.score} pts
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
