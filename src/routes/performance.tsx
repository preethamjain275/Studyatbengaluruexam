import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  LineChart,
  BarChart3,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Loader2,
  Filter,
  Calendar,
} from "lucide-react";
import { EmptyState, PageHeader, btnPrimary, btnGhost, Card } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";
import { getStudentAnalytics } from "@/lib/engine.functions";
import { EXAMS } from "@/lib/exams";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Performance Analytics - Study at Bangalore" },
      { name: "description", content: "Scores, accuracy, subject breakdown and trends from your test attempts." },
      { property: "og:title", content: "Performance Analytics - Study at Bangalore" },
      { property: "og:description", content: "Scores, accuracy, subject breakdown and trends from your test attempts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerformancePage,
});

function PerformancePage() {
  const { user, ready } = useAuth();
  const [loading, setLoading] = useState(true);
  const [selectedExam, setSelectedExam] = useState<string>("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState<"all" | "30d" | "7d">("all");
  const [analytics, setAnalytics] = useState<any>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    async function load() {
      setLoading(true);
      try {
        const res = await getStudentAnalytics({
          data: { examId: selectedExam, timeframe: selectedTimeframe },
        });
        setAnalytics(res);
      } catch {
        setAnalytics(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [user, selectedExam, selectedTimeframe]);

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  const examOptions = [
    { id: "all", name: "All Exams" },
    { id: "scholarship", name: "Scholarship Exam" },
    ...EXAMS.map((e) => ({ id: e.id, name: e.name })),
  ];

  const hasData = analytics && analytics.totalAttempts > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader eyebrow="Performance" title="Your performance analytics">
          Personal scores, accuracy and subject-wise trends for {user?.email}.
        </PageHeader>

        {/* Filters Group: Timeframe & Exam */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {/* Timeframe Filter Buttons */}
          <div className="flex items-center rounded-xl bg-muted p-1 text-xs">
            <button
              type="button"
              onClick={() => setSelectedTimeframe("all")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                selectedTimeframe === "all"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Time
            </button>
            <button
              type="button"
              onClick={() => setSelectedTimeframe("30d")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                selectedTimeframe === "30d"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Last 30 Days
            </button>
            <button
              type="button"
              onClick={() => setSelectedTimeframe("7d")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                selectedTimeframe === "7d"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Last 7 Days
            </button>
          </div>

          {/* Exam Filter Dropdown */}
          <div className="flex items-center gap-1.5">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground outline-none focus:ring-2 focus:ring-primary shadow-xs"
            >
              {examOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="surface p-12 text-center space-y-3 rounded-2xl">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="text-sm text-muted-foreground">Calculating your performance metrics…</p>
        </div>
      ) : !hasData ? (
        <EmptyState
          icon={LineChart}
          title="No attempts yet"
          action={
            <Link to="/practice" className={btnPrimary}>
              Go to practice
            </Link>
          }
        >
          Complete a practice set or mock test to see your performance metrics, subject accuracy, and score history.
        </EmptyState>
      ) : (
        <div className="space-y-6">
          {/* Top KPI Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            <div className="surface p-4 rounded-xl border space-y-1">
              <span className="text-xs text-muted-foreground font-medium">Tests Completed</span>
              <p className="text-2xl font-bold text-foreground">{analytics.totalAttempts}</p>
              <span className="text-[11px] text-muted-foreground">Practice & Mocks</span>
            </div>

            <div className="surface p-4 rounded-xl border space-y-1">
              <span className="text-xs text-muted-foreground font-medium">Overall Accuracy</span>
              <p className="text-2xl font-bold text-primary">{analytics.overallAccuracy}%</p>
              <span className="text-[11px] text-emerald-600 font-medium">
                {analytics.totalCorrect} / {analytics.totalQuestions} questions
              </span>
            </div>

            <div className="surface p-4 rounded-xl border space-y-1">
              <span className="text-xs text-muted-foreground font-medium">Average Score</span>
              <p className="text-2xl font-bold text-foreground">{analytics.averageScore}%</p>
              <span className="text-[11px] text-muted-foreground">Across attempts</span>
            </div>

            <div className="surface p-4 rounded-xl border space-y-1">
              <span className="text-xs text-muted-foreground font-medium">Best Score</span>
              <p className="text-2xl font-bold text-emerald-600">{analytics.bestScore}%</p>
              <span className="text-[11px] text-muted-foreground">Peak performance</span>
            </div>

            <div className="surface p-4 rounded-xl border space-y-1 col-span-2 sm:col-span-1">
              <span className="text-xs text-muted-foreground font-medium">Study Streak</span>
              <p className="text-2xl font-bold text-brand">{analytics.streak} Days</p>
              <span className="text-[11px] text-muted-foreground">Keep it up! 🔥</span>
            </div>
          </div>

          {/* Breakdown Section: Subjects & Weak Areas */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Subject-Wise Accuracy */}
            <div className="surface p-5 sm:p-6 rounded-2xl border space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" /> Subject-Wise Accuracy
                </h3>
                <span className="text-xs text-muted-foreground">From submitted sets</span>
              </div>

              {analytics.bySubject && analytics.bySubject.length > 0 ? (
                <div className="space-y-4 pt-1">
                  {analytics.bySubject.map((subj: any) => (
                    <div key={subj.subject} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-foreground">{subj.subject}</span>
                        <span className="text-primary font-bold">
                          {subj.accuracy}% ({subj.correct}/{subj.total})
                        </span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            subj.accuracy >= 80
                              ? "bg-emerald-500"
                              : subj.accuracy >= 60
                              ? "bg-primary"
                              : "bg-amber-500"
                          }`}
                          style={{ width: `${Math.min(100, Math.max(0, subj.accuracy))}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-muted-foreground pt-0.5">
                        <span>Correct: {subj.correct} · Incorrect: {subj.incorrect}</span>
                        <Link
                          to="/practice"
                          className="font-semibold text-primary hover:underline"
                        >
                          Practice {subj.subject} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground py-4">No subject breakdown recorded yet.</p>
              )}
            </div>

            {/* Weak Chapters / Recommended Revision */}
            <div className="surface p-5 sm:p-6 rounded-2xl border space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" /> Focus Chapters (&lt; 60% Accuracy)
                </h3>
                <span className="text-xs text-muted-foreground">Revision Priorities</span>
              </div>

              {analytics.weakChapters && analytics.weakChapters.length > 0 ? (
                <div className="space-y-3 pt-1">
                  {analytics.weakChapters.map((wc: any) => (
                    <div
                      key={`${wc.subject}-${wc.chapter}`}
                      className="flex items-center justify-between p-3 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs"
                    >
                      <div>
                        <p className="font-bold text-foreground">{wc.chapter}</p>
                        <p className="text-[11px] text-muted-foreground">{wc.subject}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-amber-600 dark:text-amber-400">
                          {wc.accuracy}% accuracy
                        </span>
                        <p className="text-[10px] text-muted-foreground">({wc.total} questions)</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link
                      to="/practice"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      Practice focus chapters now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-2">
                  <CheckCircle2 className="h-8 w-8 text-emerald-500 mx-auto" />
                  <p className="text-sm font-semibold text-foreground">No weak chapters flagged!</p>
                  <p className="text-xs text-muted-foreground">
                    All your practiced chapters have an accuracy score above 60%.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Exam Overview Cards */}
          {analytics.byExam && analytics.byExam.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" /> Performance By Exam
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {analytics.byExam.map((e: any) => (
                  <div key={e.examId} className="surface p-4 rounded-xl border space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {e.examId}
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-bold text-foreground">{e.avgPercent}%</span>
                      <span className="text-xs text-muted-foreground">Avg</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground pt-1 border-t">
                      <span>{e.attempts} tests taken</span>
                      <span>Best: <b>{e.bestPercent}%</b></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chronological Test History & Score Trajectory Chart */}
          <div className="surface p-5 sm:p-6 rounded-2xl border space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
              <div>
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" /> Score Trajectory & Performance Trends
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Chronological progression across {analytics.trends.length} evaluated attempt{analytics.trends.length === 1 ? "" : "s"}.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                Average: {analytics.averageScore}% · Peak: {analytics.bestScore}%
              </span>
            </div>

            {/* Score Trajectory Visual Chart (when 2 or more tests taken) */}
            {analytics.trends.length >= 2 ? (
              <div className="rounded-xl border bg-muted/20 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <LineChart className="h-4 w-4 text-primary" /> Trajectory Curve (Test 1 → Test {analytics.trends.length})
                  </span>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary" /> Score %
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="inline-block h-0.5 w-3 border-t-2 border-dashed border-emerald-500" /> 80% Target
                    </span>
                  </div>
                </div>

                <div className="w-full overflow-x-auto">
                  <svg
                    viewBox={`0 0 ${Math.max(500, analytics.trends.length * 60)} 160`}
                    className="w-full h-44 text-xs select-none"
                    aria-label="Score trajectory line chart"
                  >
                    {/* Definitions */}
                    <defs>
                      <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Background Grid Lines: 100%, 80%, 60%, 40% */}
                    {[100, 80, 60, 40].map((pct) => {
                      const y = 20 + ((100 - pct) / 100) * 110;
                      const is80 = pct === 80;
                      return (
                        <g key={pct}>
                          <line
                            x1="45"
                            y1={y}
                            x2={Math.max(500, analytics.trends.length * 60) - 20}
                            y2={y}
                            stroke={is80 ? "rgb(16, 185, 129)" : "currentColor"}
                            strokeOpacity={is80 ? 0.6 : 0.12}
                            strokeDasharray={is80 ? "4 4" : undefined}
                          />
                          <text
                            x="38"
                            y={y + 3}
                            textAnchor="end"
                            fontSize="9"
                            fill="currentColor"
                            opacity={is80 ? 0.9 : 0.5}
                            fontWeight={is80 ? "bold" : "normal"}
                          >
                            {pct}%
                          </text>
                        </g>
                      );
                    })}

                    {/* Compute points */}
                    {(() => {
                      const chartW = Math.max(500, analytics.trends.length * 60) - 75;
                      const N = analytics.trends.length;
                      const pts = analytics.trends.map((t: any, i: number) => {
                        const x = 50 + (i / (N - 1)) * chartW;
                        const y = 20 + ((100 - Math.min(100, Math.max(0, t.percent))) / 100) * 110;
                        return { x, y, ...t, originalIndex: i + 1 };
                      });

                      const polyPoints = pts.map((p: any) => `${p.x},${p.y}`).join(" ");
                      const areaPoints = `50,130 ${polyPoints} ${pts[pts.length - 1].x},130`;

                      return (
                        <>
                          {/* Gradient fill under curve */}
                          <polygon points={areaPoints} fill="url(#scoreGradient)" />

                          {/* Connecting Polyline */}
                          <polyline
                            points={polyPoints}
                            fill="none"
                            stroke="var(--primary)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {/* Data dots and labels */}
                          {pts.map((p: any) => (
                            <g key={p.id}>
                              <circle
                                cx={p.x}
                                cy={p.y}
                                r="4.5"
                                fill="var(--background)"
                                stroke="var(--primary)"
                                strokeWidth="2.5"
                              />
                              <text
                                x={p.x}
                                y={p.y - 8}
                                textAnchor="middle"
                                fontSize="10"
                                fontWeight="bold"
                                fill="currentColor"
                              >
                                {p.percent}%
                              </text>
                              <text
                                x={p.x}
                                y="145"
                                textAnchor="middle"
                                fontSize="9"
                                fill="currentColor"
                                opacity="0.6"
                              >
                                #{p.originalIndex}
                              </text>
                            </g>
                          ))}
                        </>
                      );
                    })()}
                  </svg>
                </div>
              </div>
            ) : analytics.trends.length === 1 ? (
              <div className="rounded-xl border bg-muted/20 p-4 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-foreground">First test recorded!</p>
                  <p className="text-muted-foreground">Complete 1 more test to view your dynamic score trajectory curve.</p>
                </div>
                <span className="font-extrabold text-primary text-base">
                  {analytics.trends[0].percent}% Score
                </span>
              </div>
            ) : null}

            {/* Test History List (Latest First) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
                <span className="font-semibold text-foreground">Detailed Attempt History</span>
                <span>Sorted by latest first</span>
              </div>

              <div className="divide-y divide-border">
                {[...analytics.trends].reverse().map((t: any, i: number) => {
                  const dateFormatted = new Date(t.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });
                  const isLatest = i === 0;
                  return (
                    <div
                      key={t.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                          {analytics.trends.length - i}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-foreground uppercase">
                              {t.examId}
                            </span>
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary capitalize">
                              {t.mode}
                            </span>
                            {isLatest && (
                              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                                Latest
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{dateFormatted}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 self-end sm:self-auto">
                        <div className="text-right">
                          <span
                            className={`font-bold text-sm ${
                              t.percent >= 80
                                ? "text-emerald-600"
                                : t.percent >= 60
                                ? "text-primary"
                                : "text-amber-600"
                            }`}
                          >
                            {t.percent}%
                          </span>
                          <p className="text-[11px] text-muted-foreground">
                            {t.score} / {t.maxScore} marks
                          </p>
                        </div>

                        <Link
                          to="/results/$attemptId"
                          params={{ attemptId: t.id }}
                          className={`${btnGhost} text-xs px-2.5 py-1.5`}
                        >
                          Review
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
