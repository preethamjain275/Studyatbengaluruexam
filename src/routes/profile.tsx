import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Pencil,
  Save,
  Target,
  Plus,
  X,
  Sparkles,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  Compass,
  ShieldCheck,
  KeyRound,
  Shield,
  Download,
  Trash2,
  LogOut,
  ChevronRight,
  Award,
  History,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Bookmark,
  Trophy,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { btnGhost, btnPrimary } from "@/components/site/ui";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AttemptProgression } from "@/components/site/AttemptProgression";
import { getMasteryThreshold } from "@/lib/engine/state";
import { getUserProfile, updateUserProfile, getBookmarks } from "@/lib/engine.functions";
import { AvatarUpload } from "@/components/site/AvatarUpload";
import {
  ChangePasswordDialog,
  ChangeEmailDialog,
  AddExamDialog,
  PrivacySettingsDialog,
  DeleteAccountDialog,
} from "@/components/site/AccountDialogs";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Student Dashboard & Profile - Study at Bangalore" },
      {
        name: "description",
        content:
          "Personal academic details, target examinations, learning analytics, and account settings.",
      },
    ],
  }),
  component: ProfilePage,
});

const ALL_SUBJECTS = ["Physics", "Chemistry", "Mathematics", "Biology"];
const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function ProfilePage() {
  const { user, profile, loginUser, logout, refreshProfile, isAdmin } = useAuth();
  const navigate = useNavigate();
  const personalInfoRef = useRef<HTMLDivElement>(null);

  // Profile data states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Bengaluru, Karnataka");
  const [aboutMe, setAboutMe] = useState(
    "Dedicated student preparing for engineering and medical entrance examinations."
  );
  const [avatarUrl, setAvatarUrl] = useState("");

  // Exam Preparation states
  const [targetExams, setTargetExams] = useState<string[]>(["KCET", "JEE Main"]);
  const [targetYear, setTargetYear] = useState("2026");
  const [prepStage, setPrepStage] = useState("Intermediate - Covering Syllabus");
  const [targetRank, setTargetRank] = useState("Top 1,000");
  const [focusSubjects, setFocusSubjects] = useState<string[]>([
    "Physics",
    "Chemistry",
    "Mathematics",
  ]);

  // Study Goals & Preferences
  const [weeklyHours, setWeeklyHours] = useState(24);
  const [dailyHours, setDailyHours] = useState(4);
  const [preferredDays, setPreferredDays] = useState<string[]>([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]);
  const [preferredLanguage, setPreferredLanguage] = useState("English");
  const [appTheme, setAppTheme] = useState("System");
  const [practiceMode, setPracticeMode] = useState("Timed Exam Simulation");
  const [difficultyPreference, setDifficultyPreference] = useState(
    "Mixed (Recommended)"
  );

  // Notification Preferences
  const [studyReminders, setStudyReminders] = useState(true);
  const [testUpdates, setTestUpdates] = useState(true);
  const [newMaterial, setNewMaterial] = useState(true);
  const [personalizedTips, setPersonalizedTips] = useState(true);

  // Saving state indicators
  const [savingPersonal, setSavingPersonal] = useState(false);
  const [savingExams, setSavingExams] = useState(false);
  const [savingPrefs, setSavingPrefs] = useState(false);

  // Dialog open states
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [changeEmailOpen, setChangeEmailOpen] = useState(false);
  const [addExamOpen, setAddExamOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);

  // Learning analytics & attempts
  const [attempts, setAttempts] = useState<any[]>([]);
  const [timeFilter, setTimeFilter] = useState<"30" | "7" | "all">("30");
  const [bookmarkedCount, setBookmarkedCount] = useState(0);

  // Load user data on mount and whenever user/profile changes
  useEffect(() => {
    if (!user) return;

    setEmail(user.email ?? "");

    // Prioritize values from canonical profile, then user_metadata
    const meta = (user.user_metadata || {}) as Record<string, any>;
    const p = profile as any;

    setName(p?.display_name || meta["full_name"] || meta["display_name"] || user.email?.split("@")[0] || "Student");
    setPhone(p?.phone || meta["phone"] || "");
    setLocation(p?.location || meta["location"] || "Bengaluru, Karnataka");
    setAboutMe(
      p?.about_me ||
        meta["about_me"] ||
        "Dedicated student preparing for engineering and medical entrance examinations."
    );
    setAvatarUrl(p?.avatar_url || meta["avatar_url"] || "");

    const loadedExams =
      p?.target_exams || meta["target_exams"] || (meta["target_exam"] ? [meta["target_exam"]] : ["KCET", "JEE Main"]);
    setTargetExams(Array.isArray(loadedExams) ? loadedExams : [loadedExams]);

    const examDetailsMeta = p?.exam_details || meta["exam_details"];
    if (examDetailsMeta) {
      if (examDetailsMeta["target_year"]) setTargetYear(examDetailsMeta["target_year"]);
      if (examDetailsMeta["stage"]) setPrepStage(examDetailsMeta["stage"]);
      if (examDetailsMeta["target_rank"]) setTargetRank(examDetailsMeta["target_rank"]);
      if (Array.isArray(examDetailsMeta["focus_subjects"]))
        setFocusSubjects(examDetailsMeta["focus_subjects"]);
    }

    const studyGoalsMeta = p?.study_goals || meta["study_goals"];
    if (studyGoalsMeta) {
      if (studyGoalsMeta["weekly_hours"]) setWeeklyHours(studyGoalsMeta["weekly_hours"]);
      if (studyGoalsMeta["daily_hours"]) setDailyHours(studyGoalsMeta["daily_hours"]);
      if (Array.isArray(studyGoalsMeta["preferred_days"]))
        setPreferredDays(studyGoalsMeta["preferred_days"]);
    }

    const learningPrefsMeta = p?.learning_preferences || meta["learning_preferences"];
    if (learningPrefsMeta) {
      if (learningPrefsMeta["language"])
        setPreferredLanguage(learningPrefsMeta["language"]);
      if (learningPrefsMeta["theme"]) setAppTheme(learningPrefsMeta["theme"]);
      if (learningPrefsMeta["practice_mode"])
        setPracticeMode(learningPrefsMeta["practice_mode"]);
      if (learningPrefsMeta["difficulty"])
        setDifficultyPreference(learningPrefsMeta["difficulty"]);
    }

    const notifMeta = p?.notification_preferences || meta["notification_preferences"];
    if (notifMeta) {
      if (typeof notifMeta["study_reminders"] === "boolean")
        setStudyReminders(notifMeta["study_reminders"]);
      if (typeof notifMeta["test_updates"] === "boolean")
        setTestUpdates(notifMeta["test_updates"]);
      if (typeof notifMeta["new_material"] === "boolean")
        setNewMaterial(notifMeta["new_material"]);
      if (typeof notifMeta["personalized_tips"] === "boolean")
        setPersonalizedTips(notifMeta["personalized_tips"]);
    }

    // Load bookmarks count via authoritative server function (scoped strictly to current user)
    getBookmarks()
      .then((res) => setBookmarkedCount(res.bookmarks?.length || 0))
      .catch(() => {
        if (user.id) {
          try {
            const b = JSON.parse(localStorage.getItem(`study_bookmarks_${user.id}`) || "[]");
            setBookmarkedCount(Array.isArray(b) ? b.length : 0);
          } catch {
            setBookmarkedCount(0);
          }
        }
      });

    // Authoritative profile sync from server function
    getUserProfile()
      .then((authoritativeProfile) => {
        if (!authoritativeProfile) return;
        if (authoritativeProfile.display_name) setName(authoritativeProfile.display_name);
        if (authoritativeProfile.phone) setPhone(authoritativeProfile.phone);
        if (authoritativeProfile.location) setLocation(authoritativeProfile.location);
        if (authoritativeProfile.about_me) setAboutMe(authoritativeProfile.about_me);
        if (authoritativeProfile.avatar_url) setAvatarUrl(authoritativeProfile.avatar_url);
        if (authoritativeProfile.target_exams && authoritativeProfile.target_exams.length > 0)
          setTargetExams(authoritativeProfile.target_exams);

        if (authoritativeProfile.exam_details) {
          const ed: any = authoritativeProfile.exam_details;
          if (ed.target_year) setTargetYear(ed.target_year);
          if (ed.stage) setPrepStage(ed.stage);
          if (ed.target_rank) setTargetRank(ed.target_rank);
          if (Array.isArray(ed.focus_subjects)) setFocusSubjects(ed.focus_subjects);
        }

        if (authoritativeProfile.study_goals) {
          const sg: any = authoritativeProfile.study_goals;
          if (sg.weekly_hours) setWeeklyHours(sg.weekly_hours);
          if (sg.daily_hours) setDailyHours(sg.daily_hours);
          if (Array.isArray(sg.preferred_days)) setPreferredDays(sg.preferred_days);
        }

        if (authoritativeProfile.learning_preferences) {
          const lp: any = authoritativeProfile.learning_preferences;
          if (lp.language) setPreferredLanguage(lp.language);
          if (lp.theme) setAppTheme(lp.theme);
          if (lp.practice_mode) setPracticeMode(lp.practice_mode);
          if (lp.difficulty) setDifficultyPreference(lp.difficulty);
        }

        if (authoritativeProfile.notification_preferences) {
          const np: any = authoritativeProfile.notification_preferences;
          if (typeof np.study_reminders === "boolean") setStudyReminders(np.study_reminders);
          if (typeof np.test_updates === "boolean") setTestUpdates(np.test_updates);
          if (typeof np.new_material === "boolean") setNewMaterial(np.new_material);
          if (typeof np.personalized_tips === "boolean") setPersonalizedTips(np.personalized_tips);
        }
      })
      .catch(() => {});

    // Load attempts history
    async function loadAttempts() {
      if (!user?.id) return;
      try {
        const { data, error } = await supabase
          .from("attempts")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(50);

        if (!error && data && data.length > 0) {
          setAttempts(data);
        } else {
          setAttempts([]);
        }
      } catch {
        setAttempts([]);
      }
    }

    loadAttempts();
  }, [user, profile]);

  // Handle avatar changes
  async function handleAvatarChange(newUrl: string) {
    setAvatarUrl(newUrl);

    if (!user) return;
    try {
      await updateUserProfile({ data: { avatar_url: newUrl } });
      await supabase.auth.updateUser({
        data: { avatar_url: newUrl },
      }).catch(() => {});
      await refreshProfile();
    } catch {
      // Local session already updated
    }
  }

  async function handleAvatarRemove() {
    setAvatarUrl("");

    if (!user) return;
    try {
      await updateUserProfile({ data: { avatar_url: null } });
      await supabase.auth.updateUser({
        data: { avatar_url: "" },
      }).catch(() => {});
      await refreshProfile();
    } catch {
      // Local session already updated
    }
  }

  // Save 1: Personal Information
  async function handleSavePersonal(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!user) return;

    setSavingPersonal(true);
    try {
      const payload = {
        display_name: name,
        phone,
        location,
        about_me: aboutMe,
        avatar_url: avatarUrl,
      };

      await updateUserProfile({ data: payload });

      // Synchronize with Supabase Auth metadata for seamless cross-device session reflection
      await supabase.auth.updateUser({
        data: {
          full_name: name,
          display_name: name,
          phone,
          location,
          about_me: aboutMe,
          avatar_url: avatarUrl,
        },
      }).catch(() => {});

      await refreshProfile();
      toast.success("Personal information saved successfully!");
    } catch (err: any) {
      toast.error(err?.message || "Failed to save personal information.");
    } finally {
      setSavingPersonal(false);
    }
  }

  // Save 2: Exam Preparation
  async function handleSaveExams(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!user) return;

    setSavingExams(true);
    try {
      const examDetailsObj = {
        target_year: targetYear,
        stage: prepStage,
        target_rank: targetRank,
        focus_subjects: focusSubjects,
      };

      const payload = {
        target_exams: targetExams,
        primary_exam: targetExams[0] || "KCET",
        exam_details: examDetailsObj,
      };

      await updateUserProfile({ data: payload });

      await supabase.auth.updateUser({
        data: payload,
      }).catch(() => {});

      await refreshProfile();
      toast.success("Exam preparation details saved!");
    } catch (err: any) {
      toast.error(err?.message || "Failed to save exam details.");
    } finally {
      setSavingExams(false);
    }
  }

  // Save 3: Study Preferences & Goals
  async function handleSavePreferences(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!user) return;

    setSavingPrefs(true);
    try {
      const studyGoalsObj = {
        weekly_hours: weeklyHours,
        daily_hours: dailyHours,
        preferred_days: preferredDays,
      };

      const learningPreferencesObj = {
        language: preferredLanguage,
        theme: appTheme,
        practice_mode: practiceMode,
        difficulty: difficultyPreference,
      };

      const notificationPreferencesObj = {
        study_reminders: studyReminders,
        test_updates: testUpdates,
        new_material: newMaterial,
        personalized_tips: personalizedTips,
      };

      // Also apply theme immediately if changed
      if (appTheme === "Dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("study-theme", "dark");
      } else if (appTheme === "Light") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("study-theme", "light");
      }

      const payload = {
        study_goals: studyGoalsObj,
        learning_preferences: learningPreferencesObj,
        notification_preferences: notificationPreferencesObj,
      };

      await updateUserProfile({ data: payload });

      await supabase.auth.updateUser({
        data: payload,
      }).catch(() => {});

      await refreshProfile();
      toast.success("Study preferences & goals saved successfully!");
    } catch (err: any) {
      toast.error(err?.message || "Failed to save study preferences.");
    } finally {
      setSavingPrefs(false);
    }
  }

  // Download user profile and learning data
  function handleDownloadData() {
    if (!user) return;
    const exportData = {
      profile: {
        id: user.id,
        name,
        email,
        phone,
        location,
        aboutMe,
        avatarUrl,
        targetExams,
        examDetails: {
          targetYear,
          prepStage,
          targetRank,
          focusSubjects,
        },
        studyGoals: {
          weeklyHours,
          dailyHours,
          preferredDays,
        },
        learningPreferences: {
          preferredLanguage,
          appTheme,
          practiceMode,
          difficultyPreference,
        },
        notificationPreferences: {
          studyReminders,
          testUpdates,
          newMaterial,
          personalizedTips,
        },
      },
      learningMetrics: {
        totalAttempts: attempts.length,
        attempts,
        bookmarksCount: bookmarkedCount,
      },
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `study-at-bangalore-profile-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Data export downloaded successfully!");
  }

  // Delete account confirmation
  async function handleConfirmDelete() {
    try {
      if (user?.id) {
        await supabase.from("profiles").delete().eq("id", user.id);
      }
    } catch {}
    logout();
    toast.success("Your account and associated profile have been removed.");
    window.location.href = "/";
  }

  // Focus and scroll to Personal Info
  function scrollToEdit() {
    personalInfoRef.current?.scrollIntoView({ behavior: "smooth" });
    const nameInput = personalInfoRef.current?.querySelector("input");
    nameInput?.focus();
  }

  // Filter attempts based on selected timeframe
  const filteredAttempts = attempts.filter((att) => {
    if (timeFilter === "all") return true;
    const days = timeFilter === "7" ? 7 : 30;
    const threshold = Date.now() - days * 24 * 60 * 60 * 1000;
    return new Date(att.created_at).getTime() >= threshold;
  });

  // Analytics computation
  const displayAttemptsCount = filteredAttempts.length;
  const displayQuestionsCount = filteredAttempts.reduce(
    (sum, a) =>
      sum +
      (a.total_questions ||
        a.questions_count ||
        (a.max_score > 0 ? Math.round(a.max_score / 4) : 10)),
    0
  );
  const avgAccuracy =
    displayAttemptsCount > 0
      ? Math.round(
          filteredAttempts.reduce(
            (s, a) =>
              s +
              (a.percentage ??
                a.percent ??
                (a.score && a.max_score ? (a.score / a.max_score) * 100 : 0)),
            0
          ) / displayAttemptsCount
        )
      : 0;

  const practiceAttempts = attempts.filter((a) => a.mode === "practice");
  const mockAttempts = attempts.filter((a) => a.mode === "mock");

  // Sign out handler
  function handleLogout() {
    logout();
    toast.success("Signed out successfully.");
    window.location.href = "/";
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md py-16 px-4 text-center">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <User className="h-8 w-8" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Student Profile & Dashboard</h1>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Please sign in to access your personal dashboard, exam targets, study goals, and score
            progression analytics.
          </p>
          <button
            onClick={() => navigate({ to: "/auth" })}
            className={`${btnPrimary} w-full mt-6 py-2.5 font-semibold`}
          >
            Sign in to your account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl py-8 px-4 sm:px-6 lg:px-8 space-y-8 animate-fade-in">
      {/* 1. PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              YOUR PROFILE
            </span>
          </div>
          <div className="mt-1 flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              My Profile
            </h1>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Student
            </span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Manage your personal details, exam preferences, and account settings.
          </p>
        </div>
      </div>

      {/* 2. PROFILE HERO SUMMARY CARD */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-5 text-center sm:text-left">
            <AvatarUpload
              userId={user.id}
              avatarUrl={avatarUrl}
              displayName={name}
              email={email}
              size="xl"
              showRemoveButton={true}
              onAvatarChange={handleAvatarChange}
              onAvatarRemove={handleAvatarRemove}
            />

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {name || "Student"}
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground line-clamp-1">
                {aboutMe || "Aspiring Engineer & Problem Solver"}
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                  {email}
                </span>
                {phone && (
                  <span className="inline-flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                    {phone}
                  </span>
                )}
                {location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    {location}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end shrink-0">
            <button
              onClick={scrollToEdit}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors shadow-2xs"
            >
              <Pencil className="h-3.5 w-3.5" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* 3. TWO-COLUMN GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ======================================================== */}
        {/* MAIN COLUMN (LEFT 2 COLUMNS)                            */}
        {/* ======================================================== */}
        <div className="lg:col-span-2 space-y-8">
          {/* CARD 1: PERSONAL INFORMATION */}
          <div
            ref={personalInfoRef}
            className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Personal Information</h3>
                <p className="text-xs text-muted-foreground">
                  Update your personal details and public profile
                </p>
              </div>
            </div>

            <form onSubmit={handleSavePersonal} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>

                {/* Email Address with Change Email Trigger */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-foreground">
                      Email Address
                    </label>
                    <button
                      type="button"
                      onClick={() => setChangeEmailOpen(true)}
                      className="text-[11px] font-semibold text-primary hover:underline"
                    >
                      Change Email
                    </button>
                  </div>
                  <input
                    type="email"
                    readOnly
                    value={email}
                    className="w-full rounded-xl border border-border bg-muted/60 px-3.5 py-2.5 text-sm text-muted-foreground cursor-not-allowed"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>

                {/* Location (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Location (Optional)
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Bengaluru, Karnataka"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* About Me */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-foreground">
                    About Me (Optional)
                  </label>
                  <span className="text-[11px] text-muted-foreground">
                    {aboutMe.length}/300
                  </span>
                </div>
                <textarea
                  rows={3}
                  maxLength={300}
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  placeholder="Share a short bio or study focus..."
                  className="w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const meta = (user.user_metadata || {}) as Record<string, any>;
                    setName(meta["full_name"] || meta["display_name"] || "");
                    setPhone(meta["phone"] || "");
                    setLocation(meta["location"] || "Bengaluru, Karnataka");
                    setAboutMe(meta["about_me"] || "");
                  }}
                  className="rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingPersonal}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm disabled:opacity-50"
                >
                  {savingPersonal ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* CARD 2: EXAM PREPARATION */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Exam Preparation</h3>
                <p className="text-xs text-muted-foreground">
                  Your target exams and preparation details
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveExams} className="space-y-5">
              {/* Target Exams Pills */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-foreground">
                    Target Examinations
                  </label>
                  <button
                    type="button"
                    onClick={() => setAddExamOpen(true)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add Exam
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {targetExams.map((exam, index) => (
                    <span
                      key={exam}
                      className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold text-foreground transition-all"
                    >
                      {exam}
                      {index === 0 && (
                        <span className="rounded bg-primary px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-primary-foreground">
                          Primary
                        </span>
                      )}
                      {targetExams.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            setTargetExams(targetExams.filter((e) => e !== exam))
                          }
                          className="text-muted-foreground hover:text-destructive transition-colors ml-0.5"
                          title="Remove exam"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prep Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {/* Target Exam Year */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Target Exam Year
                  </label>
                  <select
                    value={targetYear}
                    onChange={(e) => setTargetYear(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>

                {/* Preparation Stage */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Preparation Stage
                  </label>
                  <select
                    value={prepStage}
                    onChange={(e) => setPrepStage(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  >
                    <option value="Beginner - Just Started">Beginner - Just Started</option>
                    <option value="Intermediate - Covering Syllabus">
                      Intermediate - Covering Syllabus
                    </option>
                    <option value="Advanced - Revision & Mock Tests">
                      Advanced - Revision & Mock Tests
                    </option>
                    <option value="Target / Repeater Batch">Target / Repeater Batch</option>
                  </select>
                </div>

                {/* Target Rank / Score */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Target Rank / Score
                  </label>
                  <input
                    type="text"
                    value={targetRank}
                    onChange={(e) => setTargetRank(e.target.value)}
                    placeholder="e.g. Top 1,000"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
              </div>

              {/* Focus Subjects */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold text-foreground">
                  Focus Subjects
                </label>
                <div className="flex flex-wrap gap-2">
                  {ALL_SUBJECTS.map((sub) => {
                    const active = focusSubjects.includes(sub);
                    return (
                      <button
                        key={sub}
                        type="button"
                        onClick={() =>
                          setFocusSubjects(
                            active
                              ? focusSubjects.length > 1
                                ? focusSubjects.filter((s) => s !== sub)
                                : focusSubjects
                              : [...focusSubjects, sub]
                          )
                        }
                        className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                          active
                            ? "border-primary bg-primary text-primary-foreground shadow-xs"
                            : "border-border bg-background text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {active && <CheckCircle2 className="h-3.5 w-3.5" />}
                        {sub}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={savingExams}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm disabled:opacity-50"
                >
                  {savingExams ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* CARD 3: STUDY PREFERENCES & GOALS */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  Study Preferences & Goals
                </h3>
                <p className="text-xs text-muted-foreground">
                  Set your study targets and customise your experience
                </p>
              </div>
            </div>

            <form onSubmit={handleSavePreferences} className="space-y-6">
              {/* Section 1: Study Goals */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" /> Study Goals
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Weekly Study Goal (Hours)
                    </label>
                    <select
                      value={weeklyHours}
                      onChange={(e) => setWeeklyHours(Number(e.target.value))}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    >
                      <option value={10}>10 Hours / week</option>
                      <option value={15}>15 Hours / week</option>
                      <option value={20}>20 Hours / week</option>
                      <option value={24}>24 Hours / week (Recommended)</option>
                      <option value={30}>30 Hours / week</option>
                      <option value={40}>40 Hours / week (Intensive)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Daily Study Target (Hours)
                    </label>
                    <select
                      value={dailyHours}
                      onChange={(e) => setDailyHours(Number(e.target.value))}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    >
                      <option value={2}>2 Hours / day</option>
                      <option value={3}>3 Hours / day</option>
                      <option value={4}>4 Hours / day (Balanced)</option>
                      <option value={5}>5 Hours / day</option>
                      <option value={6}>6 Hours / day</option>
                      <option value={8}>8 Hours / day (Full Time)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Study Days */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Preferred Study Days
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {DAYS_OF_WEEK.map((day) => {
                      const active = preferredDays.includes(day);
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() =>
                            setPreferredDays(
                              active
                                ? preferredDays.length > 1
                                  ? preferredDays.filter((d) => d !== day)
                                  : preferredDays
                                : [...preferredDays, day]
                            )
                          }
                          className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition-all ${
                            active
                              ? "border-primary bg-primary text-primary-foreground shadow-xs"
                              : "border-border bg-background text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Section 2: Learning Preferences */}
              <div className="space-y-3 pt-2 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 pt-2">
                  <BookOpen className="h-3.5 w-3.5 text-primary" /> Learning Preferences
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Preferred Language
                    </label>
                    <select
                      value={preferredLanguage}
                      onChange={(e) => setPreferredLanguage(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    >
                      <option value="English">English</option>
                      <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                      <option value="Hindi">Hindi (हिन्दी)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      App Theme
                    </label>
                    <select
                      value={appTheme}
                      onChange={(e) => setAppTheme(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    >
                      <option value="System">System Default</option>
                      <option value="Light">Light</option>
                      <option value="Dark">Dark</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Default Practice Mode
                    </label>
                    <select
                      value={practiceMode}
                      onChange={(e) => setPracticeMode(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    >
                      <option value="Timed Exam Simulation">Timed Exam Simulation</option>
                      <option value="Relaxed Learning">Relaxed Learning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Question Difficulty Preference
                    </label>
                    <select
                      value={difficultyPreference}
                      onChange={(e) => setDifficultyPreference(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    >
                      <option value="Mixed (Recommended)">Mixed (Recommended)</option>
                      <option value="Easy">Easy (Foundation)</option>
                      <option value="Medium">Medium (Exam Level)</option>
                      <option value="Hard">Hard (Rank Booster)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Notification Preferences */}
              <div className="space-y-3 pt-2 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 pt-2">
                  <Shield className="h-3.5 w-3.5 text-primary" /> Notifications & Alerts
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-muted/20">
                    <div>
                      <p className="text-xs font-bold text-foreground">Study reminders</p>
                      <p className="text-[11px] text-muted-foreground">
                        Daily study alerts & schedule reminders
                      </p>
                    </div>
                    <Switch
                      checked={studyReminders}
                      onCheckedChange={setStudyReminders}
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-muted/20">
                    <div>
                      <p className="text-xs font-bold text-foreground">Test & Exam updates</p>
                      <p className="text-[11px] text-muted-foreground">
                        Important deadlines and score notifications
                      </p>
                    </div>
                    <Switch
                      checked={testUpdates}
                      onCheckedChange={setTestUpdates}
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-muted/20">
                    <div>
                      <p className="text-xs font-bold text-foreground">New study material</p>
                      <p className="text-[11px] text-muted-foreground">
                        Alerts when new questions or revision notes are published
                      </p>
                    </div>
                    <Switch
                      checked={newMaterial}
                      onCheckedChange={setNewMaterial}
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-muted/20">
                    <div>
                      <p className="text-xs font-bold text-foreground">Personalised tips</p>
                      <p className="text-[11px] text-muted-foreground">
                        AI tutor recommendations and weakness analysis
                      </p>
                    </div>
                    <Switch
                      checked={personalizedTips}
                      onCheckedChange={setPersonalizedTips}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={savingPrefs}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm disabled:opacity-50"
                >
                  {savingPrefs ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECONDARY COLUMN (RIGHT 1 COLUMN)                       */}
        {/* ======================================================== */}
        <div className="lg:col-span-1 space-y-6">
          {/* CARD 4: LEARNING OVERVIEW */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold text-foreground">Learning Overview</h3>
              </div>
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value as any)}
                className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium outline-none"
              >
                <option value="30">Last 30 days</option>
                <option value="7">Last 7 days</option>
                <option value="all">All time</option>
              </select>
            </div>

            {/* 2x2 Metric Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-muted/30 p-3.5 space-y-1">
                <p className="text-[11px] font-semibold text-muted-foreground">
                  Tests Attempted
                </p>
                <p className="text-xl font-extrabold text-foreground">
                  {displayAttemptsCount}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-3.5 space-y-1">
                <p className="text-[11px] font-semibold text-muted-foreground">
                  Questions Attempted
                </p>
                <p className="text-xl font-extrabold text-foreground">
                  {displayQuestionsCount.toLocaleString()}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-3.5 space-y-1">
                <p className="text-[11px] font-semibold text-muted-foreground">
                  Average Accuracy
                </p>
                <p className="text-xl font-extrabold text-foreground">
                  {avgAccuracy}%
                </p>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-3.5 space-y-1">
                <p className="text-[11px] font-semibold text-muted-foreground">
                  Saved Questions
                </p>
                <p className="text-xl font-extrabold text-foreground">
                  {bookmarkedCount}
                </p>
              </div>
            </div>

            <Link
              to="/performance"
              className="inline-flex items-center justify-center gap-1.5 w-full rounded-xl border border-primary/20 bg-primary/5 py-2.5 text-xs font-bold text-primary hover:bg-primary/10 transition-colors"
            >
              View Detailed Analytics <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* CARD 5: QUICK LINKS */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-bold text-foreground">Quick Links</h3>
            </div>

            <div className="divide-y divide-border">
              <Link
                to="/performance"
                className="flex items-center justify-between py-3 text-xs font-semibold text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center gap-2.5">
                  <TrendingUp className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  Performance Analytics
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/mock-tests"
                className="flex items-center justify-between py-3 text-xs font-semibold text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center gap-2.5">
                  <History className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  Full Mock Tests
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/practice"
                className="flex items-center justify-between py-3 text-xs font-semibold text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center gap-2.5">
                  <Target className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  Mistake Notebook / Practice
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/revision"
                className="flex items-center justify-between py-3 text-xs font-semibold text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center gap-2.5">
                  <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  Revision Planner
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/bookmarks"
                className="flex items-center justify-between py-3 text-xs font-semibold text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center gap-2.5">
                  <Bookmark className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  Saved Question Bookmarks ({bookmarkedCount})
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/leaderboard"
                className="flex items-center justify-between py-3 text-xs font-semibold text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center gap-2.5">
                  <Trophy className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  Global Leaderboard & Standing
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 6: ACCOUNT, PRIVACY & SECURITY */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-bold text-foreground">
                Account, Privacy & Security
              </h3>
            </div>

            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setChangePasswordOpen(true)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-muted text-left transition-colors"
              >
                <span className="flex items-center gap-2.5 text-xs font-semibold text-foreground">
                  <KeyRound className="h-4 w-4 text-muted-foreground" />
                  Change Password
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>

              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-muted text-left transition-colors"
              >
                <span className="flex items-center gap-2.5 text-xs font-semibold text-foreground">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  Privacy Settings
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>

              <button
                type="button"
                onClick={handleDownloadData}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-muted text-left transition-colors"
              >
                <span className="flex items-center gap-2.5 text-xs font-semibold text-foreground">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  Download My Data
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>

              <button
                type="button"
                onClick={() => setDeleteAccountOpen(true)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-destructive/10 text-destructive text-left transition-colors"
              >
                <span className="flex items-center gap-2.5 text-xs font-semibold">
                  <Trash2 className="h-4 w-4" />
                  Delete Account
                </span>
                <ChevronRight className="h-4 w-4 opacity-70" />
              </button>

              <div className="pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-destructive/20 text-destructive hover:bg-destructive/10 text-xs font-semibold transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. STUDENT PERSONAL DASHBOARD & ATTEMPT PROGRESSION CURVE */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4">
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2 text-foreground">
              <History className="h-5 w-5 text-primary" /> My Exam & Practice Journey
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Track your attempt attendance progression, test milestone marks, and mastery curve.
            </p>
          </div>
          <Link
            to="/practice"
            className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
          >
            Start New Practice Set →
          </Link>
        </div>

        {attempts.length === 0 ? (
          <div className="p-8 rounded-xl border border-dashed border-border text-center space-y-3">
            <Award className="mx-auto h-10 w-10 text-muted-foreground" />
            <h3 className="text-base font-bold text-foreground">
              No Practice or Exam Attempts Yet
            </h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
              Once you take a practice test or mock exam, your score history, attempt attendance
              count (Attempt 1, Attempt 2...), and progression curve will appear here.
            </p>
            <Link
              to="/practice"
              className={`${btnPrimary} inline-flex mt-2 text-xs font-semibold px-4 py-2`}
            >
              Start Easy Practice Test
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <AttemptProgression
              paperName="Mastery Practice"
              level="easy"
              targetThreshold={getMasteryThreshold()}
              attempts={practiceAttempts.map((a) => ({
                id: a.id,
                level: a.level || "easy",
                percent: a.percent ?? a.percentage ?? 0,
                score: a.score ?? 0,
                maxScore: a.max_score ?? 10,
                date: a.created_at,
              }))}
            />

            {mockAttempts.length > 0 && (
              <AttemptProgression
                paperName="Full Mock Exam"
                level="hard"
                targetThreshold={80}
                attempts={mockAttempts.map((a) => ({
                  id: a.id,
                  level: a.level || "hard",
                  percent: a.percent ?? a.percentage ?? 0,
                  score: a.score ?? 0,
                  maxScore: a.max_score ?? 100,
                  date: a.created_at,
                }))}
              />
            )}
          </div>
        )}
      </div>

      {/* 5. MODAL DIALOGS */}
      <ChangePasswordDialog
        open={changePasswordOpen}
        onOpenChange={setChangePasswordOpen}
      />

      <ChangeEmailDialog
        open={changeEmailOpen}
        currentEmail={email}
        onOpenChange={setChangeEmailOpen}
      />

      <AddExamDialog
        open={addExamOpen}
        selectedExams={targetExams}
        onOpenChange={setAddExamOpen}
        onSelectExams={(newExams) => {
          setTargetExams(newExams);
          if (user) {
            loginUser(
              {
                ...user,
                user_metadata: {
                  ...(user.user_metadata || {}),
                  target_exams: newExams,
                  primary_exam: newExams[0] || "KCET",
                },
              },
              isAdmin
            );
          }
        }}
      />

      <PrivacySettingsDialog
        open={privacyOpen}
        onOpenChange={setPrivacyOpen}
      />

      <DeleteAccountDialog
        open={deleteAccountOpen}
        onOpenChange={setDeleteAccountOpen}
        onConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
}
