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

function Streak() {
  const days = Array.from({ length: 28 });
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {days.map((_, i) => (
        <div key={i} className="aspect-square rounded-md bg-muted" />
      ))}
    </div>
  );
}

function Portal() {
  const { user, ready, loginUser, isAdmin } = useAuth();

  // Initial user metadata
  const meta = (user?.user_metadata || {}) as Record<string, any>;
  const initialName =
    meta["full_name"] || meta["display_name"] || user?.email?.split("@")[0] || "Student";

  // Reactive student profile state
  const [studentName, setStudentName] = useState(initialName);
  const [studentEmail, setStudentEmail] = useState(user?.email || "");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(meta["avatar_url"] || null);
  const [standard, setStandard] = useState(meta["standard"] || "12th Standard");
  const [targetExam, setTargetExam] = useState(
    meta["target_exam"] || (meta["target_exams"]?.[0] ?? "KCET")
  );

  // Avatar upload & fallback states
  const [imgError, setImgError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Quick name edit dialog
  const [nameDialogOpen, setNameDialogOpen] = useState(false);
  const [editingName, setEditingName] = useState("");
  const [savingName, setSavingName] = useState(false);

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

    // Check local student registry if available (for offline/local registered users)
    try {
      const raw = localStorage.getItem("study_registered_students");
      if (raw) {
        const list = JSON.parse(raw);
        const match = list.find(
          (s: any) =>
            (s.email && user.email && s.email.toLowerCase() === user.email.toLowerCase()) ||
            s.id === user.id
        );
        if (match) {
          if (match.name && match.name.trim()) setStudentName(match.name.trim());
          if (match.avatar_url) {
            setAvatarUrl(match.avatar_url);
            setImgError(false);
          }
          if (match.standard) setStandard(match.standard);
        }
      }
    } catch {}

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

      // Update session & auth context for immediate reactive sync across Header/Navbar
      const updatedUser = {
        ...user,
        user_metadata: {
          ...(user.user_metadata || {}),
          avatar_url: uploadedUrl,
          full_name: studentName,
        },
      };
      loginUser(updatedUser, isAdmin);
      localStorage.setItem("study_user_session", JSON.stringify(updatedUser));

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
        </Card>

        <Card title="Current difficulty level" icon={Gauge}>
          <p className="text-3xl font-bold text-brand">Easy</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Score 90%+ on practice sets to unlock Medium & Hard levels.
          </p>
        </Card>

        <Card title="Daily practice" icon={Zap}>
          <p className="text-sm text-muted-foreground">
            Fresh 10-question set tailored for your selected exam.
          </p>
          <Link to="/practice" className={`${btnGhost} mt-4 w-full`}>
            Choose an exam
          </Link>
        </Card>

        <Card title="Study streak" icon={Flame}>
          <Streak />
          <p className="mt-3 text-sm text-muted-foreground">
            0-day streak. Practise today to start one.
          </p>
        </Card>

        <Card title="Recent scores" icon={BarChart3}>
          <EmptyState icon={BarChart3} title="No test attempts yet">
            Complete a practice set or mock test to view scores.
          </EmptyState>
        </Card>

        <Card title="Subject-wise progress" icon={CalendarDays}>
          <EmptyState icon={CalendarDays} title="No progress yet">
            Subject stats update as you solve questions.
          </EmptyState>
        </Card>

        <Card title="Weak chapters" icon={TrendingDown}>
          <EmptyState icon={TrendingDown} title="Nothing flagged">
            We'll highlight chapters where accuracy drops below 60%.
          </EmptyState>
        </Card>

        <Card title="Bookmarked questions" icon={Bookmark}>
          <EmptyState
            icon={Bookmark}
            title="No bookmarks"
            action={
              <Link to="/bookmarks" className="text-sm font-semibold text-primary">
                View bookmarks →
              </Link>
            }
          />
        </Card>

        <Card title="Certificates earned" icon={Award}>
          <EmptyState icon={Award} title="No certificates yet">
            Clear the Expert level on any exam path to earn a certificate.
          </EmptyState>
        </Card>

        <Card title="Global leaderboard" icon={Trophy} className="lg:col-span-2">
          <EmptyState
            icon={Trophy}
            title="Leaderboard opens with the first exam window"
            action={
              <Link to="/leaderboard" className="text-sm font-semibold text-primary">
                Open leaderboard →
              </Link>
            }
          />
        </Card>
      </div>

      <h2 className="mb-5 mt-12 text-2xl font-bold">Exam categories</h2>
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
