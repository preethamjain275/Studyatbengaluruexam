import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  GraduationCap,
  Trophy,
  LineChart,
  Lock,
  Calendar,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { Logo } from "@/components/site/Logo";
import { toast } from "sonner";

const safeNext = (n?: string) => (n && n.startsWith("/") && !n.startsWith("//") ? n : "/scholarship-exam");

export const Route = createFileRoute("/auth")({
  validateSearch: z.object({
    next: z.string().optional(),
    mode: z.string().optional(),
  }),
  head: () => ({
    meta: [
      { title: "Sign in / Sign up - Study at Bangalore" },
      { name: "description", content: "Sign in or create an account to save practice progress, mock test attempts and performance results." },
      { property: "og:title", content: "Sign in / Sign up - Study at Bangalore" },
      { property: "og:description", content: "Sign in or create an account to save practice progress, mock test attempts and performance results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

type AuthMode = "in" | "up" | "forgot" | "reset";

function formatAuthError(msg?: string): string {
  if (!msg) return "Authentication failed. Please verify your details.";
  if (msg.toLowerCase().includes("invalid api key")) {
    return "Supabase API key is unconfigured or invalid. Please configure your real Publishable/Anon key in .env (VITE_SUPABASE_PUBLISHABLE_KEY) from the Supabase Dashboard.";
  }
  return msg;
}

function AuthPage() {
  const { next, mode: searchMode } = Route.useSearch();
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  const [mode, setMode] = useState<AuthMode>(() => {
    if (searchMode === "up" || searchMode === "forgot" || searchMode === "reset") {
      return searchMode;
    }
    return "in";
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [targetExams, setTargetExams] = useState<string[]>(["KCET", "Scholarship Exam"]);
  const [standard, setStandard] = useState("11th Standard");
  const [targetRepeater, setTargetRepeater] = useState("Select type");
  const [stream, setStream] = useState("Select subject stream");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: "error" | "success" | "info" } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (searchMode === "up" || searchMode === "in" || searchMode === "forgot" || searchMode === "reset") {
      setMode(searchMode);
    }
  }, [searchMode]);

  // When user is detected (either by context update or initial load), redirect to target
  useEffect(() => {
    if (user && mode !== "reset") {
      const destination = sessionStorage.getItem("auth-next") || safeNext(next);
      sessionStorage.removeItem("auth-next");
      setTimeout(() => {
        window.location.href = destination;
      }, 100);
    }
  }, [user, next, mode]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);

    const cleanEmail = email.trim().toLowerCase();

    try {
      const targetDestination = sessionStorage.getItem("auth-next") || safeNext(next);

      if (mode === "in") {
        // Genuine Supabase Auth Sign In
        const { data, error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
        if (error || !data?.user) {
          setMsg({ text: formatAuthError(error?.message), type: "error" });
          setBusy(false);
          return;
        }

        loginUser(data.user, false);
        setMsg({ text: "Signed in successfully! Redirecting…", type: "success" });
        sessionStorage.removeItem("auth-next");
        window.location.href = targetDestination;
      } else if (mode === "up") {
        // CREATE ACCOUNT
        if (!name.trim()) {
          setMsg({ text: "Please enter your full name.", type: "error" });
          setBusy(false);
          return;
        }
        if (password.length < 8) {
          setMsg({ text: "Password must be at least 8 characters long.", type: "error" });
          setBusy(false);
          return;
        }
        if (password !== confirmPassword) {
          setMsg({ text: "Passwords do not match. Please re-enter.", type: "error" });
          setBusy(false);
          return;
        }

        const resolvedStream = stream === "Select subject stream" ? "PCMB" : stream;
        const resolvedStandard =
          targetRepeater && targetRepeater !== "Select type" && targetRepeater.includes("Repeater")
            ? "Target / Repeater"
            : standard;

        const { data, error } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: {
              full_name: name.trim(),
              standard: resolvedStandard,
              stream: resolvedStream,
              phone: phone.trim(),
              target_exams: targetExams,
              target_repeater: targetRepeater,
            },
          },
        });

        if (error) {
          setMsg({ text: formatAuthError(error.message), type: "error" });
          setBusy(false);
          return;
        }

        if (data.user) {
          loginUser(data.user, false);
          try {
            const { error: pErr } = await supabase.from("profiles").upsert({
              id: data.user.id,
              display_name: name.trim(),
              standard: resolvedStandard,
              stream: resolvedStream,
              target_exams: targetExams,
              email: cleanEmail,
              phone: phone.trim(),
              updated_at: new Date().toISOString(),
            });
            if (pErr && (pErr.code === "PGRST204" || pErr.code === "42703")) {
              await supabase.from("profiles").upsert({
                id: data.user.id,
                display_name: name.trim(),
                standard: resolvedStandard,
                stream: resolvedStream,
                email: cleanEmail,
                phone: phone.trim(),
                updated_at: new Date().toISOString(),
              });
            }
          } catch {}

          setMsg({ text: `Welcome ${name.trim()}! Account created.`, type: "success" });
          toast.success(`Account created for ${name.trim()}`);
          sessionStorage.removeItem("auth-next");
          window.location.href = targetDestination;
        } else {
          setMsg({ text: "Account created! Please check your email for a confirmation link.", type: "info" });
          toast.info("Please check your email to confirm your account.");
        }
      } else if (mode === "forgot") {
        const resetRedirect = typeof window !== "undefined" ? `${window.location.origin}/auth?mode=reset` : "";
        const { error } = await supabase.auth.resetPasswordForEmail(
          cleanEmail,
          resetRedirect ? { redirectTo: resetRedirect } : {}
        );
        if (error) {
          setMsg({ text: error.message || "Failed to send reset link.", type: "error" });
        } else {
          setMsg({ text: "Password reset link sent to your registered email address.", type: "success" });
        }
      } else if (mode === "reset") {
        if (password.length < 8) {
          setMsg({ text: "Password must be at least 8 characters long.", type: "error" });
          setBusy(false);
          return;
        }
        if (password !== confirmPassword) {
          setMsg({ text: "Passwords do not match. Please re-enter.", type: "error" });
          setBusy(false);
          return;
        }
        const { error } = await supabase.auth.updateUser({ password });
        if (error) {
          setMsg({ text: error.message || "Failed to update password.", type: "error" });
        } else {
          setMsg({ text: "Password updated successfully. You can now sign in.", type: "success" });
          setMode("in");
        }
      }
    } catch (err) {
      setMsg({ text: (err as Error).message || "An error occurred.", type: "error" });
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      setBusy(true);
      const targetDestination = sessionStorage.getItem("auth-next") || safeNext(next);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth?next=${encodeURIComponent(targetDestination)}`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setMsg({ text: formatAuthError(err.message), type: "error" });
      setBusy(false);
    }
  }

  // Value highlight features for left branding panel
  const features =
    mode === "up"
      ? [
          {
            icon: GraduationCap,
            iconBg: "bg-rose-500/20 border border-rose-500/30",
            iconColor: "text-rose-300",
            title: "Official Karnataka Syllabus Aligned",
            desc: "Full coverage of 11th & 12th state PUC and NCERT entrance curriculum",
          },
          {
            icon: Trophy,
            iconBg: "bg-sky-500/20 border border-sky-500/30",
            iconColor: "text-sky-300",
            title: "Karnataka Scholarship Exam 2026",
            desc: "Qualify for merit scholarships, cash grants, and college fee concessions",
          },
          {
            icon: Lock,
            iconBg: "bg-amber-500/20 border border-amber-500/30",
            iconColor: "text-amber-300",
            title: "Encrypted Credentials & Protected Records",
            desc: "Your test attempts, saved bookmarks, and ranks are secured in real time",
          },
        ]
      : [
          {
            icon: Calendar,
            iconBg: "bg-rose-500/20 border border-rose-500/30",
            iconColor: "text-rose-300",
            title: "Timed Full-Length Mock Exams",
            desc: "Official test patterns for KCET, NEET-UG, and JEE Main with negative marking",
          },
          {
            icon: LineChart,
            iconBg: "bg-sky-500/20 border border-sky-500/30",
            iconColor: "text-sky-300",
            title: "Instant Rank & Performance Analytics",
            desc: "Subject breakdown, accuracy rates, and percentile standing updated immediately",
          },
          {
            icon: ShieldCheck,
            iconBg: "bg-amber-500/20 border border-amber-500/30",
            iconColor: "text-amber-300",
            title: "Verified Solutions & AI Tutor Hints",
            desc: "Master tricky questions with structured pedagogical clues and verified keys",
          },
        ];

  return (
    <div className="w-full max-w-5xl lg:max-w-6xl mx-auto my-auto">
      {/* Outer Card Container */}
      <div className="rounded-[28px] sm:rounded-[32px] border border-border/80 shadow-2xl overflow-hidden bg-card grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Branding Panel (~40% on desktop) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#1b2434] via-[#161e2c] to-[#0f1521] text-white p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative overflow-hidden">
          {/* Ambient decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Section */}
          <div className="relative z-10">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 p-1.5 backdrop-blur-xs ring-1 ring-white/15 shrink-0 shadow-xs">
                <Logo />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none">
                  Study at Bangalore
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {mode === "up"
                    ? "STUDENT ONBOARDING (2026)"
                    : mode === "forgot"
                    ? "ACCOUNT RECOVERY"
                    : mode === "reset"
                    ? "SECURITY PORTAL"
                    : "ENTRANCE EXAMINATION PORTAL"}
                </div>
              </div>
            </div>

            {/* Contextual Pill Badge */}
            <div className="mt-7 mb-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/90 border border-white/15 backdrop-blur-xs w-fit shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              {mode === "up"
                ? "Student Account Sign Up"
                : mode === "forgot"
                ? "Account Recovery"
                : mode === "reset"
                ? "Security Credential Reset"
                : "Student Member Sign In"}
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {mode === "up"
                ? "Join Examination & Scholarship Network"
                : mode === "forgot"
                ? "Recover Your Student Account Access"
                : mode === "reset"
                ? "Set Your New Secure Password"
                : "Streamlined Karnataka Entrance & Scholarship Hub"}
            </h2>

            {/* Supportive description */}
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {mode === "up"
                ? "Create your student account to access full-length timed mock exams, unlock chapter practice, and compete for Karnataka state merit scholarships."
                : mode === "forgot"
                ? "Enter your registered email address to receive secure authentication instructions and regain immediate portal access."
                : mode === "reset"
                ? "Protect your examination attempts, mock test analytics, and scholarship records with a strong credential."
                : "Access your real-time mock test roster across KCET, NEET, and JEE Main, review instant AI tutor hints, and check scholarship ranks."}
            </p>
          </div>

          {/* Bottom Feature Value Props */}
          <div className="relative z-10 pt-6 mt-5 border-t border-white/10">
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg shadow-xs ${f.iconBg} ${f.iconColor}`}>
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white/95 leading-tight">{f.title}</p>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>Karnataka Entrance 2026 Session</span>
              <span className="text-amber-400 font-semibold">Study at Bangalore</span>
            </div>
          </div>
        </div>

        {/* Right Authentication Form Panel (~60% on desktop) */}
        <div className="lg:col-span-7 bg-card text-card-foreground p-5 sm:p-7 lg:p-9 flex flex-col justify-center">
          <div className="w-full max-w-xl mx-auto">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                {mode === "in" && "Student Sign In"}
                {mode === "up" && "Create Student Account"}
                {mode === "forgot" && "Forgot Password"}
                {mode === "reset" && "Set New Password"}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {mode === "in" && "Enter your registered email address & password."}
                {mode === "up" && "Enter your academic details and create your portal login password."}
                {mode === "forgot" && "Enter your registered email address to receive a recovery link."}
                {mode === "reset" && "Enter your new password below (at least 8 characters)."}
              </p>
            </div>

            {/* Error / Feedback Alert Banner */}
            {msg && (
              <div
                role="status"
                className={`mb-4 flex items-start gap-2.5 rounded-xl border p-3 text-xs font-medium animate-in fade-in duration-200 ${
                  msg.type === "error"
                    ? "bg-destructive/10 border-destructive/20 text-destructive"
                    : msg.type === "success"
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                    : "bg-primary/10 border-primary/20 text-primary"
                }`}
              >
                {msg.type === "error" ? (
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                )}
                <div className="leading-relaxed">{msg.text}</div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Sign Up Fields Matching Reference Image */}
              {mode === "up" && (
                <>
                  {/* Row 1: Full Name (Single Column, Full Width) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* Row 2: Standard / Class + Target / Repeater (Two Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Standard / Class
                      </label>
                      <select
                        value={standard}
                        onChange={(e) => setStandard(e.target.value)}
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                      >
                        <option value="11th Standard">11th Standard</option>
                        <option value="12th Standard">12th Standard</option>
                        <option value="PUC-I (Class 11)">PUC-I (Class 11)</option>
                        <option value="PUC-II (Class 12)">PUC-II (Class 12)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Target / Repeater
                      </label>
                      <select
                        value={targetRepeater}
                        onChange={(e) => setTargetRepeater(e.target.value)}
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                      >
                        <option value="Select type">Select type</option>
                        <option value="Regular Student / Fresher">Regular Student / Fresher</option>
                        <option value="Target / Repeater">Target / Repeater</option>
                        <option value="Repeater (Dropper)">Repeater (Dropper)</option>
                        <option value="Target 2026 Aspirant">Target 2026 Aspirant</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Subject Stream (Single Column, Full Width) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Subject Stream
                    </label>
                    <select
                      value={stream}
                      onChange={(e) => setStream(e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                    >
                      <option value="Select subject stream">Select subject stream</option>
                      <option value="PCMB">PCMB (Physics, Chem, Math, Bio)</option>
                      <option value="PCM">PCM (Physics, Chem, Math)</option>
                      <option value="PCB">PCB (Physics, Chem, Bio)</option>
                      <option value="PCMC">PCMC (Physics, Chem, Math, Comp)</option>
                    </select>
                  </div>

                  {/* Row 4: Phone Number + Email Address (Two Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 number"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  {/* Row 5: Target Examination(s) (Pill Badges) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Target Examination(s)
                    </label>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {["KCET", "NEET-UG", "JEE Main", "Scholarship Exam", "COMEDK"].map((examName) => {
                        const active = targetExams.includes(examName);
                        return (
                          <button
                            key={examName}
                            type="button"
                            onClick={() => {
                              setTargetExams((prev) =>
                                prev.includes(examName) ? prev.filter((x) => x !== examName) : [...prev, examName]
                              );
                            }}
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                              active
                                ? "bg-primary text-primary-foreground shadow-xs border border-primary"
                                : "bg-card text-muted-foreground border border-border/70 hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {examName}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 6: Create Password + Retype Password (Two Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Create Login Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          minLength={8}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Min 8 characters"
                          className="w-full rounded-xl border border-input bg-background pl-3.5 pr-10 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors cursor-pointer"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Retype Login Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          required
                          minLength={8}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Retype password"
                          className="w-full rounded-xl border border-input bg-background pl-3.5 pr-10 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors cursor-pointer"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Sign In Fields */}
              {mode === "in" && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Registered Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. faculty@university.edu or student@example.com"
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter account password"
                        className="w-full rounded-xl border border-input bg-background pl-3.5 pr-10 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setMode("forgot");
                          setMsg(null);
                        }}
                        className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Forgot Password Fields */}
              {mode === "forgot" && (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Registered Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email address"
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                  />
                </div>
              )}

              {/* Reset Password Fields */}
              {mode === "reset" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min 8 characters"
                        className="w-full rounded-xl border border-input bg-background pl-3.5 pr-10 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        minLength={8}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        className="w-full rounded-xl border border-input bg-background pl-3.5 pr-10 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Primary CTA Submit Button */}
              <button
                type="submit"
                disabled={busy}
                className="w-full py-3 px-4 rounded-xl text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer disabled:opacity-60 mt-1"
              >
                {busy ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Processing…
                  </span>
                ) : mode === "in" ? (
                  "Sign In to Student Portal"
                ) : mode === "up" ? (
                  "Create Student Account (Sign Up)"
                ) : mode === "forgot" ? (
                  "Send Reset Link"
                ) : (
                  "Update Password"
                )}
              </button>

              {/* Secondary Switcher Callout Box (matching reference layout) */}
              <div className="rounded-xl bg-[#fef7ee] dark:bg-amber-950/20 border border-[#fed7aa] dark:border-amber-900/30 py-2.5 px-4 text-center text-xs sm:text-sm text-foreground">
                {mode === "in" && (
                  <>
                    New student?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setMode("up");
                        setMsg(null);
                      }}
                      className="font-bold text-primary hover:underline ml-1 cursor-pointer"
                    >
                      Create Account (Sign Up) →
                    </button>
                  </>
                )}

                {mode === "up" && (
                  <>
                    Already have a student account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setMode("in");
                        setMsg(null);
                      }}
                      className="font-bold text-primary hover:underline ml-1 cursor-pointer"
                    >
                      Sign In →
                    </button>
                  </>
                )}

                {(mode === "forgot" || mode === "reset") && (
                  <>
                    Remember your login credentials?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setMode("in");
                        setMsg(null);
                      }}
                      className="font-bold text-primary hover:underline ml-1 cursor-pointer"
                    >
                      Sign In →
                    </button>
                  </>
                )}
              </div>

              {/* Google OAuth Button for Sign In & Sign Up */}
              {(mode === "in" || mode === "up") && (
                <>
                  <div className="relative my-1.5 flex items-center justify-center">
                    <div className="border-t border-border w-full" />
                    <span className="bg-card px-2.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground absolute">
                      or
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={handleGoogleSignIn}
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-background py-2.5 text-xs sm:text-sm font-semibold hover:bg-accent transition shadow-xs cursor-pointer"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </>
              )}
            </form>

            {/* Back to Home Page Link */}
            <div className="mt-3.5 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
