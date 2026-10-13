import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Award,
  BarChart3,
  Bookmark,
  CalendarDays,
  Flame,
  Gauge,
  NotebookPen,
  PlayCircle,
  Trophy,
  TrendingDown,
  User,
  Zap,
  Camera,
  Loader2,
  Pencil,
  ArrowRight,
  Check,
} from "lucide-react";
import { EXAMS } from "@/lib/exams";
import { ExamCard } from "@/components/site/ExamCard";
import { Card, EmptyState, PageHeader, btnGhost, btnPrimary } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";
import { supabase } from "@/integrations/supabase/client";
import { getInitials, validateAvatarFile, uploadAvatar } from "@/lib/avatar";
import { getStudentAnalytics, getBookmarks, getLeaderboard } from "@/lib/engine.functions";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/scholarship-exam")({
  head: () => ({
    meta: [
      { title: "Scholarship Exam Portal - Study at Bangalore" },
      {
        name: "description",
        content:
          "Your Study at Bangalore scholarship dashboard: practice, mock tests, progress and leaderboard.",
      },
      { property: "og:title", content: "Scholarship Exam Portal - Study at Bangalore" },
      {
        property: "og:description",
        content: "Practice, take mock tests and track progress toward your scholarship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portal,
});

function Streak({
  last28Days,
  streak,
}: {
  last28Days?: Array<{ date: string; active: boolean; count: number }>;
  streak?: number;
}) {
  const days = last28Days || Array.from({ length: 28 }).map((_, i) => ({ date: String(i), active: false, count: 0 }));
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-7 gap-1.5" title="Last 28 days of study activity">
        {days.map((d, i) => (
          <div
            key={i}
            title={d.active ? `Active on ${d.date}` : `Inactive on ${d.date}`}
            className={`aspect-square rounded-md transition-all ${
              d.active ? "bg-emerald-500 shadow-xs" : "bg-muted"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground pt-0.5">
        <span>28 days ago</span>
        <span>Today</span>
      </div>
    </div>
  );
}

function Portal() {
  const { user, profile, ready, loginUser, refreshProfile, isAdmin } = useAuth();

  // Initial user metadata & canonical profile
  const meta = (user?.user_metadata || {}) as Record<string, any>;
  const initialName =
    profile?.display_name || meta["full_name"] || meta["display_name"] || user?.email?.split("@")[0] || "Student";

  // Reactive student profile state
  const [studentName, setStudentName] = useState(initialName);
  const [studentEmail, setStudentEmail] = useState(profile?.email || user?.email || "");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(profile?.avatar_url || meta["avatar_url"] || null);
  const [standard, setStandard] = useState(profile?.standard || meta["standard"] || "12th Standard");
  const [targetExam, setTargetExam] = useState(
    meta["target_exam"] || (meta["target_exams"]?.[0] ?? "KCET")
  );

  // Data-driven student statistics
  const [analytics, setAnalytics] = useState<any>(null);
  const [bookmarksCount, setBookmarksCount] = useState<number>(0);
  const [leaderboard, setLeaderboard] = useState<any>(null);

  // Avatar upload & fallback states
  const [imgError, setImgError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Quick name edit dialog
  const [nameDialogOpen, setNameDialogOpen] = useState(false);
  const [editingName, setEditingName] = useState("");
  const [savingName, setSavingName] = useState(false);

  useEffect(() => {
    if (!user) return;
    Promise.all([
      getStudentAnalytics({ data: { examId: "all" } }).catch(() => null),
      getBookmarks().catch(() => ({ bookmarks: [] })),
      getLeaderboard({ data: { examId: "scholarship", limit: 3, userId: user.id } }).catch(() => null),
    ]).then(([analyticsRes, bookmarksRes, leaderboardRes]) => {
      if (analyticsRes) setAnalytics(analyticsRes);
      if (bookmarksRes?.bookmarks) setBookmarksCount(bookmarksRes.bookmarks.length);
      if (leaderboardRes) setLeaderboard(leaderboardRes);
    });
  }, [user]);

  // Fetch and synchronize canonical profile on mount or user session change
  useEffect(() => {
    if (!user) return;

    setStudentEmail(user.email || "");

    const userMeta = (user.user_metadata || {}) as Record<string, any>;
    const resolvedName =
      userMeta["full_name"] ||
      userMeta["display_name"] ||
      user.email?.split("@")[0] ||
      "Student";
    setStudentName(resolvedName);

    if (userMeta["avatar_url"]) {
      setAvatarUrl(userMeta["avatar_url"]);
      setImgError(false);
    }
    if (userMeta["standard"]) setStandard(userMeta["standard"]);
    if (userMeta["target_exam"]) setTargetExam(userMeta["target_exam"]);
    else if (userMeta["target_exams"]?.[0]) setTargetExam(userMeta["target_exams"][0]);

    // Query canonical database profile from Supabase
    async function fetchCanonicalProfile() {
      try {
        if (!user?.id) return;
        let { data, error } = await supabase
          .from("profiles")
          .select("display_name, email, avatar_url, standard, target_exams, primary_exam")
          .eq("id", user.id)
          .maybeSingle();

        // If target_exams or primary_exam do not exist in live schema, query core columns
        if (error && (error.code === "42703" || error.code === "PGRST204")) {
          const res = await supabase
            .from("profiles")
            .select("display_name, email, avatar_url, standard")
            .eq("id", user.id)
            .maybeSingle();
          data = res.data ? { ...res.data, target_exams: null, primary_exam: null } : null;
          error = res.error;
        }

        if (!error && data) {
          if (data.display_name && data.display_name.trim()) {
            setStudentName(data.display_name.trim());
          }
          if (data.avatar_url) {
            setAvatarUrl(data.avatar_url);
            setImgError(false);
          }
          if (data.email) {
            setStudentEmail(data.email);
          }
          if (data.standard) {
            setStandard(data.standard);
          }
          if (data.primary_exam) {
            setTargetExam(data.primary_exam);
          } else if (data.target_exams && data.target_exams.length > 0) {
            setTargetExam(data.target_exams[0]);
          }
        }
      } catch {
        // Silently preserve local session
      }
    }

    fetchCanonicalProfile();
  }, [user]);

  // Handle profile photo upload directly from the dashboard card
  async function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    const validation = validateAvatarFile(file);
    if (!validation.valid) {
      toast.error(validation.error || "Invalid file format or size.");
      e.target.value = "";
      return;
    }

    setUploading(true);
    try {
      const uploadedUrl = await uploadAvatar(file, user.id);
      setAvatarUrl(uploadedUrl);
      setImgError(false);

      // Update database profile
      try {
        await supabase.from("profiles").upsert({
          id: user.id,
          avatar_url: uploadedUrl,
          display_name: studentName,
          updated_at: new Date().toISOString(),
        });
      } catch {}

      // Synchronize with Supabase Auth metadata for seamless cross-device session reflection
      await supabase.auth.updateUser({
        data: { avatar_url: uploadedUrl, full_name: studentName },
      }).catch(() => {});
      await refreshProfile();

      toast.success("Profile photo updated successfully!");
    } catch (err) {
      toast.error((err as Error).message || "Failed to upload profile photo.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  // Handle quick name update
  async function handleSaveName(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = editingName.trim();
    if (!trimmed || !user) return;

    setSavingName(true);
    try {
      setStudentName(trimmed);

      // Update session & auth context
      const updatedUser = {
        ...user,
        user_metadata: {
          ...(user.user_metadata || {}),
          full_name: trimmed,
          display_name: trimmed,
        },
      };
      loginUser(updatedUser, isAdmin);
      localStorage.setItem("study_user_session", JSON.stringify(updatedUser));

      // Update database profile
      try {
        await supabase.from("profiles").upsert({
          id: user.id,
          display_name: trimmed,
          updated_at: new Date().toISOString(),
        });
      } catch {}

      // Synchronize with Supabase Auth metadata for seamless cross-device session reflection
      await supabase.auth.updateUser({
        data: { full_name: trimmed, display_name: trimmed },
      }).catch(() => {});
      await refreshProfile();

      toast.success("Student name updated successfully!");
      setNameDialogOpen(false);
    } catch {
      toast.error("Failed to update student name.");
    } finally {
      setSavingName(false);
    }
  }

  const initials = getInitials(studentName, studentEmail);

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Scholarship Exam"
        title={`Welcome to your dashboard, ${studentName}`}
      >
        Your personal dashboard: practice levels, mock test progress, weak chapters and
        scholarship standing.
      </PageHeader>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* STUDENT PROFILE CARD */}
        <Card title="Student Profile" icon={User}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Circular Avatar: 88x88px on desktop, 72x72px on mobile */}
            <div className="relative shrink-0">
              <div className="h-[72px] w-[72px] sm:h-[88px] sm:w-[88px] rounded-full overflow-hidden border-2 border-border shadow-xs bg-muted flex items-center justify-center transition-all">
                {avatarUrl && !imgError ? (
                  <img
                    src={avatarUrl}
                    alt={studentName}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-brand text-primary-foreground font-bold text-2xl sm:text-3xl flex items-center justify-center select-none shadow-inner">
                    {initials}
                  </div>
                )}
              </div>

              {/* Upload photo trigger */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                title="Upload or change profile picture"
                aria-label="Upload or change profile picture"
                className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-transform active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {uploading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Camera className="h-3.5 w-3.5" />
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                disabled={uploading}
                onChange={handleAvatarUpload}
              />
            </div>

            {/* Student Details */}
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-bold text-base sm:text-lg text-foreground truncate">
                  {studentName}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setEditingName(studentName);
                    setNameDialogOpen(true);
                  }}
                  title="Edit student name"
                  className="text-muted-foreground hover:text-primary transition-colors p-0.5 rounded"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary shrink-0">
                  {standard}
                </span>
              </div>

              <p className="text-xs text-muted-foreground truncate" title={studentEmail}>
                {studentEmail}
              </p>

              {targetExam && (
                <p className="text-[11px] text-muted-foreground pt-0.5">
                  Target: <span className="text-foreground font-semibold">{targetExam}</span>
                </p>
              )}

            </div>
          </div>
        </Card>

        <Card title="Continue learning" icon={PlayCircle} className="lg:col-span-2">
          {analytics?.activeSession ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-2">
              <div className="space-y-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  In-Progress Session
                </span>
                <p className="text-base font-bold text-foreground">
                  {analytics.activeSession.examId.toUpperCase()} · {analytics.activeSession.track || "Practice"} ({analytics.activeSession.level ? analytics.activeSession.level.toUpperCase() : "EASY"})
                </p>
                <p className="text-xs text-muted-foreground">
                  Your answers and time are saved in real-time. Pick up right where you left off.
                </p>
              </div>
              <Link
                to="/test/$attemptId"
                params={{ attemptId: analytics.activeSession.id }}
                className={`${btnPrimary} shrink-0`}
              >
                Resume Test <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ) : analytics?.trends && analytics.trends.length > 0 ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-2">
              <div className="space-y-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                  Last Completed Assessment
                </span>
                <p className="text-base font-bold text-foreground">
                  {analytics.trends[analytics.trends.length - 1].examId.toUpperCase()} ({analytics.trends[analytics.trends.length - 1].percent}% Score)
                </p>
                <p className="text-xs text-muted-foreground">
                  Ready for your next topic? Advance your mastery level or attempt a full mock test.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to="/results/$attemptId"
                  params={{ attemptId: analytics.trends[analytics.trends.length - 1].id }}
                  className={btnGhost}
                >
                  Review Result
                </Link>
                <Link to="/practice" className={btnPrimary}>
                  Start Practice <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ) : (
            <EmptyState
              icon={NotebookPen}
              title="No active sessions"
              action={
                <Link to="/practice" className={btnPrimary}>
                  Start practice
                </Link>
              }
            >
              Pick an exam and chapter to begin. Your practice sessions will save automatically.
            </EmptyState>
          )}
        </Card>

        {(() => {
          const levelUnlocked =
            (analytics?.bestScore ?? 0) >= 90
              ? "Expert"
              : (analytics?.bestScore ?? 0) >= 80
              ? "Hard"
              : (analytics?.bestScore ?? 0) >= 60
              ? "Medium"
              : "Easy";
          return (
            <Card title="Current difficulty level" icon={Gauge}>
              <p className="text-3xl font-bold text-brand">{levelUnlocked}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {levelUnlocked === "Expert"
                  ? "You have reached the highest mastery level!"
                  : "Score 80%+ on practice sets to unlock next level."}
              </p>
            </Card>
          );
        })()}

        <Card title="Daily practice" icon={Zap}>
          <p className="text-sm text-muted-foreground">
            Fresh 10-question set tailored for your selected exam.
          </p>
          <Link to="/practice" className={`${btnGhost} mt-4 w-full`}>
            Choose an exam
          </Link>
        </Card>

        <Card title="Study streak" icon={Flame}>
          <Streak last28Days={analytics?.last28Days} streak={analytics?.streak} />
          <p className="mt-3 text-sm text-muted-foreground">
            {analytics?.streak
              ? `${analytics.streak}-day streak! Keep up the daily practice 🔥`
              : "0-day streak. Practise today to start one."}
          </p>
        </Card>

        <Card title="Recent scores" icon={BarChart3}>
          {analytics?.trends && analytics.trends.length > 0 ? (
            <div className="space-y-2.5">
              {analytics.trends.slice(-3).reverse().map((t: any) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between text-xs p-2.5 rounded-xl border bg-muted/30"
                >
                  <div>
                    <span className="font-bold uppercase text-foreground">{t.examId}</span>
                    <span className="text-[10px] text-muted-foreground ml-1.5 capitalize">
                      ({t.mode})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-primary">{t.percent}%</span>
                    <Link
                      to="/results/$attemptId"
                      params={{ attemptId: t.id }}
                      className="text-primary hover:underline font-semibold text-[11px]"
                    >
                      Review
                    </Link>
                  </div>
                </div>
              ))}
              <Link
                to="/performance"
                className="block text-center text-xs font-semibold text-primary pt-1 hover:underline"
              >
                View all test performance →
              </Link>
            </div>
          ) : (
            <EmptyState icon={BarChart3} title="No test attempts yet">
              Complete a practice set or mock test to view scores.
            </EmptyState>
          )}
        </Card>

        <Card title="Subject-wise progress" icon={CalendarDays}>
          {analytics?.bySubject && analytics.bySubject.length > 0 ? (
            <div className="space-y-3">
              {analytics.bySubject.slice(0, 4).map((s: any) => (
                <div key={s.subject} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-foreground">{s.subject}</span>
                    <span className="text-primary">{s.accuracy}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        s.accuracy >= 80 ? "bg-emerald-500" : "bg-primary"
                      }`}
                      style={{ width: `${s.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
              <Link
                to="/performance"
                className="block text-center text-xs font-semibold text-primary pt-1 hover:underline"
              >
                View full subject breakdown →
              </Link>
            </div>
          ) : (
            <EmptyState icon={CalendarDays} title="No progress yet">
              Subject stats update as you solve questions.
            </EmptyState>
          )}
        </Card>

        <Card title="Weak chapters" icon={TrendingDown}>
          {analytics?.weakChapters && analytics.weakChapters.length > 0 ? (
            <div className="space-y-2">
              {analytics.weakChapters.slice(0, 3).map((wc: any) => (
                <div
                  key={`${wc.subject}-${wc.chapter}`}
                  className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20"
                >
                  <span className="font-semibold text-foreground truncate max-w-[150px]">
                    {wc.chapter}
                  </span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">
                    {wc.accuracy}%
                  </span>
                </div>
              ))}
              <Link
                to="/practice"
                className="block text-center text-xs font-semibold text-primary pt-1 hover:underline"
              >
                Practice weak chapters →
              </Link>
            </div>
          ) : (
            <EmptyState icon={TrendingDown} title="Nothing flagged">
              {analytics?.totalAttempts
                ? "All chapters have accuracy above 60%!"
                : "We'll highlight chapters where accuracy drops below 60%."}
            </EmptyState>
          )}
        </Card>

        <Card title="Bookmarked questions" icon={Bookmark}>
          {bookmarksCount > 0 ? (
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground">{bookmarksCount} saved</p>
              <p className="text-xs text-muted-foreground">
                Questions saved to your account for revision across devices.
              </p>
              <Link
                to="/bookmarks"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline pt-1"
              >
                Review bookmarks →
              </Link>
            </div>
          ) : (
            <EmptyState
              icon={Bookmark}
              title="No bookmarks"
              action={
                <Link to="/bookmarks" className="text-sm font-semibold text-primary">
                  View bookmarks →
                </Link>
              }
            />
          )}
        </Card>

        <Card title="Scholarship Standing & Certificates" icon={Award}>
          {(analytics?.bestScore ?? 0) >= 90 ? (
            <div className="space-y-2 p-1">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                ★ Expert Level Cleared · Scholarship Finalist
              </span>
              <p className="text-sm font-bold text-foreground">
                Provisional Scholarship Certificate Unlocked
              </p>
              <p className="text-xs text-muted-foreground">
                You scored {analytics.bestScore}% (Peak Score). You have achieved the qualifying threshold for merit scholarship consideration.
              </p>
            </div>
          ) : (analytics?.bestScore ?? 0) >= 80 ? (
            <div className="space-y-2 p-1">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                ✓ Merit Benchmark Met (80%+)
              </span>
              <p className="text-sm font-bold text-foreground">
                Scholarship Evaluation Candidate
              </p>
              <p className="text-xs text-muted-foreground">
                Current peak score: {analytics.bestScore}%. Advance to 90%+ on full mock sets to unlock the certificate.
              </p>
            </div>
          ) : (
            <EmptyState icon={Award} title="No certificates yet">
              {analytics?.totalAttempts
                ? `Current peak score: ${analytics.bestScore}%. Score 80%+ on mock exams to qualify for scholarship review.`
                : "Complete your first timed mock exam to qualify for the scholarship review pool."}
            </EmptyState>
          )}
        </Card>

        <Card title="Global leaderboard" icon={Trophy} className="lg:col-span-2">
          {leaderboard?.entries && leaderboard.entries.length > 0 ? (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {leaderboard.entries.slice(0, 3).map((en: any) => (
                  <div
                    key={en.userId}
                    className="p-3 rounded-xl border bg-muted/20 text-center space-y-1"
                  >
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      #{en.rank}
                    </span>
                    <p className="text-xs font-bold truncate text-foreground">{en.displayName}</p>
                    <p className="text-sm font-extrabold text-primary">{en.percentage}%</p>
                  </div>
                ))}
              </div>
              {leaderboard.currentUserRank && (
                <p className="text-xs text-muted-foreground">
                  Your current scholarship rank:{" "}
                  <b className="text-primary">#{leaderboard.currentUserRank.rank}</b> of{" "}
                  {leaderboard.totalParticipants} students.
                </p>
              )}
              <Link
                to="/leaderboard"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                Open full leaderboard →
              </Link>
            </div>
          ) : (
            <EmptyState
              icon={Trophy}
              title="Leaderboard opens with the first exam window"
              action={
                <Link to="/leaderboard" className="text-sm font-semibold text-primary">
                  Open leaderboard →
                </Link>
              }
            />
          )}
        </Card>
      </div>

      {/* SCHOLARSHIP OPPORTUNITIES & ELIGIBILITY MATRIX */}
      <div className="space-y-4 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b pb-3">
          <div>
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Scholarship Opportunities & Eligibility
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Verified merit scholarships, fee waivers, and study grants determined by your real test scores.
            </p>
          </div>
          <span className="text-xs font-semibold text-primary self-start sm:self-auto">
            3 Active Programs
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Program 1 */}
          <div className="surface p-5 rounded-2xl border space-y-3 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  100% Fee Support
                </span>
                <span className="text-[11px] text-muted-foreground">Deadline: 30 Apr 2026</span>
              </div>
              <h3 className="font-bold text-sm text-foreground">Study at Bangalore Merit Scholarship</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Covers complete coaching and tuition fees. Requires a score of 85%+ on any official entrance mock test.
              </p>
              <div className="rounded-xl bg-muted/40 p-2.5 text-xs space-y-1">
                <p className="text-[11px] text-muted-foreground">Your Status:</p>
                <p className="font-bold">
                  {(analytics?.bestScore ?? 0) >= 85 ? (
                    <span className="text-emerald-600 font-bold">✓ Qualified (Provisional) — {analytics.bestScore}%</span>
                  ) : (analytics?.bestScore ?? 0) >= 70 ? (
                    <span className="text-amber-600 font-bold">In Evaluation — {analytics.bestScore}% (Needs 85%)</span>
                  ) : analytics?.totalAttempts > 0 ? (
                    <span className="text-muted-foreground font-semibold">In Progress — Peak: {analytics.bestScore}%</span>
                  ) : (
                    <span className="text-muted-foreground">Pending qualifying exam attempt</span>
                  )}
                </p>
              </div>
            </div>
            <Link to="/mock-tests" className={`${btnPrimary} w-full justify-center text-xs mt-2`}>
              Take Qualifying Mock <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>

          {/* Program 2 */}
          <div className="surface p-5 rounded-2xl border space-y-3 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                  ₹25,000 Study Grant
                </span>
                <span className="text-[11px] text-muted-foreground">Deadline: 15 May 2026</span>
              </div>
              <h3 className="font-bold text-sm text-foreground">Karnataka STEM Talent Grant</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Annual books and laboratory grant. Requires achieving 80%+ accuracy on Physics, Chemistry, Math, or Biology sets.
              </p>
              <div className="rounded-xl bg-muted/40 p-2.5 text-xs space-y-1">
                <p className="text-[11px] text-muted-foreground">Your Status:</p>
                <p className="font-bold">
                  {analytics?.bySubject && analytics.bySubject.some((s: any) => s.accuracy >= 80) ? (
                    <span className="text-emerald-600 font-bold">✓ Benchmark Met in STEM</span>
                  ) : analytics?.bySubject && analytics.bySubject.length > 0 ? (
                    <span className="text-amber-600 font-bold">Target 80%+ accuracy in any STEM subject</span>
                  ) : (
                    <span className="text-muted-foreground">No STEM practice recorded yet</span>
                  )}
                </p>
              </div>
            </div>
            <Link to="/practice" className={`${btnGhost} w-full justify-center text-xs mt-2`}>
              Practice STEM Tracks <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>

          {/* Program 3 */}
          <div className="surface p-5 rounded-2xl border space-y-3 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand/10 text-brand">
                  Mentorship Access
                </span>
                <span className="text-[11px] text-muted-foreground">Rolling Intake</span>
              </div>
              <h3 className="font-bold text-sm text-foreground">Foundation Aptitude Assistance</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Free 1-on-1 expert mentor consultations. Requires completing at least 5 practice sets with 60%+ overall accuracy.
              </p>
              <div className="rounded-xl bg-muted/40 p-2.5 text-xs space-y-1">
                <p className="text-[11px] text-muted-foreground">Your Status:</p>
                <p className="font-bold">
                  {(analytics?.totalAttempts ?? 0) >= 5 && (analytics?.overallAccuracy ?? 0) >= 60 ? (
                    <span className="text-emerald-600 font-bold">✓ Criteria Met ({analytics.totalAttempts}/5 tests, {analytics.overallAccuracy}% acc)</span>
                  ) : (
                    <span className="text-muted-foreground font-semibold">
                      {analytics?.totalAttempts ?? 0}/5 tests completed · {analytics?.overallAccuracy ?? 0}% acc
                    </span>
                  )}
                </p>
              </div>
            </div>
            <Link to="/practice" className={`${btnGhost} w-full justify-center text-xs mt-2`}>
              Complete Practice Sets <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      <h2 className="mb-5 mt-10 text-2xl font-bold">Exam categories</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {EXAMS.map((e) => (
          <ExamCard key={e.id} exam={e} />
        ))}
      </div>

      {/* QUICK NAME UPDATE DIALOG */}
      <Dialog open={nameDialogOpen} onOpenChange={setNameDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Student Name</DialogTitle>
            <DialogDescription>
              Enter your real full name to display on your dashboard, reports, and certificates.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveName} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-foreground">
                Student Full Name
              </label>
              <input
                type="text"
                required
                value={editingName}
                onChange={(e) => setEditingName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>

            <DialogFooter className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setNameDialogOpen(false)}
                className="rounded-xl border border-border px-4 py-2 text-xs font-semibold hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={savingName || !editingName.trim()}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {savingName ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Check className="h-3.5 w-3.5" />
                )}
                Save Name
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
