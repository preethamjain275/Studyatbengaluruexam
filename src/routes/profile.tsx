import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  User,
  LogOut,
  GraduationCap,
  Save,
  CheckCircle,
  Award,
  Layers,
  History,
  Target,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { btnGhost, btnPrimary } from "@/components/site/ui";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AttemptProgression, type AttemptItem } from "@/components/site/AttemptProgression";
import { getMasteryThreshold } from "@/lib/engine/state";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Student Dashboard & Profile - Study at Bangalore" },
      { name: "description", content: "Personal academic details, target examinations, attendance history, and attempt progression curve." },
    ],
  }),
  component: ProfilePage,
});

export const EXAM_OPTIONS = [
  { id: "KCET", label: "KCET", full: "Karnataka Common Entrance Test", color: "border-blue-500/30 text-blue-600 bg-blue-500/10" },
  { id: "NEET", label: "NEET UG", full: "Medical & Dental (MBBS / BDS)", color: "border-emerald-500/30 text-emerald-600 bg-emerald-500/10" },
  { id: "JEE Main", label: "JEE Main", full: "National Engineering (NITs / IIITs)", color: "border-indigo-500/30 text-indigo-600 bg-indigo-500/10" },
  { id: "JEE Advanced", label: "JEE Advanced", full: "Indian Institutes of Technology (IITs)", color: "border-purple-500/30 text-purple-600 bg-purple-500/10" },
  { id: "COMEDK", label: "COMEDK UGET", full: "Karnataka Private Engineering", color: "border-amber-500/30 text-amber-600 bg-amber-500/10" },
  { id: "PGCET", label: "Karnataka PGCET", full: "Post Graduate (MBA, MCA, M.Tech)", color: "border-rose-500/30 text-rose-600 bg-rose-500/10" },
  { id: "Scholarship", label: "Scholarship Exam", full: "Study at Bangalore Scholarship Test", color: "border-cyan-500/30 text-cyan-600 bg-cyan-500/10" },
];

export function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [standard, setStandard] = useState("12th Standard");
  const [stream, setStream] = useState("PCMB");
  const [targetExams, setTargetExams] = useState<string[]>(["KCET"]);
  const [age, setAge] = useState("17");
  const [phone, setPhone] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [saving, setSaving] = useState(false);

  // Student attempts history for the Dashboard
  const [attempts, setAttempts] = useState<any[]>([]);
  const [loadingAttempts, setLoadingAttempts] = useState(true);

  useEffect(() => {
    if (user) {
      setEmail(user.email ?? "");
      const meta = (user.user_metadata || {}) as Record<string, any>;
      setName(meta["full_name"] || meta["display_name"] || user.email?.split("@")[0] || "");
      setStandard(meta["standard"] || "12th Standard");
      setStream(meta["stream"] || "PCMB");
      setAge(meta["age"] || "17");
      setPhone(meta["phone"] || "");
      setAvatarUrl(meta["avatar_url"] || "");

      // Multi-select target exams support
      const loadedExams = meta["target_exams"] || (meta["target_exam"] ? [meta["target_exam"]] : ["KCET"]);
      setTargetExams(Array.isArray(loadedExams) ? loadedExams : [loadedExams]);

      // Load attempts history for student dashboard
      async function fetchAttempts() {
        try {
          const { data, error } = await (supabase as any)
            .from("attempts")
            .select("*")
            .eq("user_id", user?.id)
            .order("created_at", { ascending: false })
            .limit(50);

          if (!error && data && data.length > 0) {
            setAttempts(data);
          } else {
            // Check any locally saved attempts
            const localRaw = localStorage.getItem("study_registered_students");
            setAttempts([]);
          }
        } catch {
          setAttempts([]);
        } finally {
          setLoadingAttempts(false);
        }
      }

      fetchAttempts();
    }
  }, [user]);

  function toggleExam(id: string) {
    setTargetExams((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((x) => x !== id)
          : prev // Keep at least one selected
        : [...prev, id]
    );
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      // 1. Update session in localStorage and memory
      const updatedUser = {
        ...user,
        email,
        user_metadata: {
          ...(user?.user_metadata || {}),
          full_name: name,
          standard,
          stream,
          target_exams: targetExams,
          target_exam: targetExams[0] || "KCET",
          age,
          phone,
          avatar_url: avatarUrl,
        },
      };

      localStorage.setItem("study_user_session", JSON.stringify(updatedUser));

      // 2. Update Supabase profiles table
      try {
        await (supabase as any).from("profiles").upsert({
          id: user?.id || "local-user",
          display_name: name,
          standard,
          stream,
          target_exams: targetExams,
          email,
          phone,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        });
      } catch (e) {}

      toast.success("Academic profile & target examinations saved successfully!");
    } catch (err) {
      toast.error("Failed to save profile details.");
    } finally {
      setSaving(false);
    }
  }

  function handleLogout() {
    logout();
    toast.success("Signed out successfully.");
    window.location.href = "/";
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md py-12 text-center">
        <div className="surface p-8 rounded-2xl shadow-xl border">
          <User className="mx-auto h-12 w-12 text-primary mb-3" />
          <h1 className="text-xl font-bold">Student Profile & Dashboard</h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Please sign in to view your academic dashboard, attempt progression curve, and scores.
          </p>
          <button onClick={() => navigate({ to: "/auth" })} className={`${btnPrimary} w-full mt-5 py-2.5`}>
            Sign in to your account
          </button>
        </div>
      </div>
    );
  }

  // Format attempts for progression curves by paper/track
  const practiceAttempts = attempts.filter((a) => a.mode === "practice");
  const mockAttempts = attempts.filter((a) => a.mode === "mock");

  return (
    <div className="mx-auto max-w-4xl py-6 px-4 space-y-6">
      {/* Header Profile Card */}
      <div className="surface p-6 sm:p-7 rounded-2xl shadow-sm border border-border">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-brand text-primary-foreground flex items-center justify-center font-bold text-xl shadow-md overflow-hidden">
              {avatarUrl ? (
                <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
              ) : (
                name.charAt(0).toUpperCase() || "S"
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">{name || "Student"}</h1>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  {standard}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {email} {phone ? `· ${phone}` : ""}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {targetExams.map((ex) => (
                  <span key={ex} className="inline-flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground border">
                    🎯 {ex}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button onClick={handleLogout} className={`${btnGhost} text-destructive hover:bg-destructive/10 text-xs gap-1`}>
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>

        {/* Academic Details Form */}
        <form onSubmit={handleSave} className="mt-5 space-y-5">
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" /> Personal & Academic Credentials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Enter your full name / username</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Preetham Jain"
                className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Email address (Verified)</label>
              <input
                type="email"
                readOnly
                value={email}
                className="w-full rounded-xl border bg-muted px-3 py-2 text-sm opacity-80 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Class / Standard</label>
              <select
                value={standard}
                onChange={(e) => setStandard(e.target.value)}
                className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="11th Standard">11th Standard (Class XI)</option>
                <option value="12th Standard">12th Standard (Class XII)</option>
                <option value="Target / Repeater">Target / Repeater Batch</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Subject Stream</label>
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="PCMB">PCMB (Physics, Chem, Math, Biology)</option>
                <option value="PCM">PCM (Physics, Chem, Math)</option>
                <option value="PCB">PCB (Physics, Chem, Biology)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Mobile / Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Age / Student Age</label>
              <input
                type="number"
                min={12}
                max={30}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="17"
                className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-muted-foreground mb-1">Profile Picture URL / Avatar</label>
              <input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://example.com/avatar.jpg"
                className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* MULTI-SELECT PRIMARY TARGET EXAMINATIONS */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-bold text-foreground">
                  Primary Target Examinations (Select Multiple)
                </label>
                <p className="text-xs text-muted-foreground">
                  Select all examinations you are preparing for. You can choose more than one!
                </p>
              </div>
              <span className="rounded-full bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-bold">
                {targetExams.length} Selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
              {EXAM_OPTIONS.map((exam) => {
                const isSelected = targetExams.includes(exam.id);
                return (
                  <button
                    key={exam.id}
                    type="button"
                    onClick={() => toggleExam(exam.id)}
                    className={`flex items-start gap-2.5 rounded-xl border p-2.5 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-card text-foreground ring-2 ring-primary/30 shadow-xs"
                        : "border-border bg-background/50 hover:bg-background opacity-75"
                    }`}
                  >
                    <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                      isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
                    }`}>
                      {isSelected && <CheckCircle className="h-3 w-3" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold">{exam.label}</p>
                      <p className="text-[10px] text-muted-foreground line-clamp-1">{exam.full}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button disabled={saving} className={`${btnPrimary} px-6 py-2.5 gap-2 shadow-md`}>
              <Save className="h-4 w-4" /> {saving ? "Saving Details..." : "Save Academic Profile"}
            </button>
          </div>
        </form>
      </div>

      {/* STUDENT PERSONAL DASHBOARD & ATTEMPT PROGRESSION CURVE */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <History className="h-5 w-5 text-primary" /> My Exam & Practice Journey
          </h2>
          <Link to="/practice" className={`${btnGhost} text-xs text-primary`}>
            Start New Practice Set →
          </Link>
        </div>

        {attempts.length === 0 ? (
          <div className="surface p-6 rounded-2xl border text-center space-y-3">
            <Award className="mx-auto h-10 w-10 text-muted-foreground" />
            <h3 className="text-base font-bold">No Practice or Exam Attempts Yet</h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Once you take a practice test or mock exam, your score history, attempt attendance count (Attempt 1, Attempt 2...), and progression curve will appear here.
            </p>
            <Link to="/practice" className={`${btnPrimary} inline-flex mt-2`}>
              Start Easy Practice Test
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Practice Curve Card */}
            <AttemptProgression
              paperName="Mastery Practice"
              level="easy"
              targetThreshold={getMasteryThreshold()}
              attempts={practiceAttempts.map((a, idx) => ({
                id: a.id,
                level: a.level || "easy",
                percent: a.percent ?? a.percentage ?? 0,
                score: a.score ?? 0,
                maxScore: a.max_score ?? 10,
                date: a.created_at,
              }))}
            />

            {/* Mock Tests Curve Card if attended */}
            {mockAttempts.length > 0 && (
              <AttemptProgression
                paperName="Full Mock Exam"
                level="hard"
                targetThreshold={80}
                attempts={mockAttempts.map((a, idx) => ({
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
    </div>
  );
}
