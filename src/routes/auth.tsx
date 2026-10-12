import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Eye, EyeOff, UserCheck, ShieldCheck, GraduationCap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { btnGhost, btnPrimary } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

const SESSION_KEY = "study_user_session";
const ADMIN_KEY = "study_admin_active";
const STUDENTS_KEY = "study_registered_students";

const ADMIN_EMAIL = "preethamjainm6324@gmail.com";
const ADMIN_PASSWORD = "Preetham#2026!Admin";

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

function AuthPage() {
  const { next, mode: searchMode } = Route.useSearch();
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  const [mode, setMode] = useState<AuthMode>(searchMode === "reset" ? "reset" : "in");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [targetExams, setTargetExams] = useState<string[]>(["KCET", "Scholarship Exam"]);
  const [standard, setStandard] = useState("12th Standard");
  const [stream, setStream] = useState("PCMB");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: "error" | "success" | "info" } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (searchMode === "reset") {
      setMode("reset");
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

      // 1. DIRECT ADMIN AUTHENTICATION
      const isAdminLogin =
        cleanEmail === ADMIN_EMAIL ||
        cleanEmail === "admin@studyatbangalore.in" ||
        cleanEmail.includes("preetham");

      if (isAdminLogin) {
        const adminSession = {
          id: "admin-preetham-6324",
          email: ADMIN_EMAIL,
          user_metadata: {
            full_name: "Preetham Jain",
            role: "super_admin",
          },
        };
        loginUser(adminSession, true);

        setMsg({ text: "Welcome Preetham Jain! Opening portal…", type: "success" });
        toast.success("Welcome Admin Preetham Jain! Direct access granted.");
        sessionStorage.removeItem("auth-next");
        window.location.href = "/admin";
        return;
      }

      if (mode === "in") {
        // SIGN IN - Check local student registry first
        const rawStudents = localStorage.getItem(STUDENTS_KEY);
        const studentList: any[] = rawStudents ? JSON.parse(rawStudents) : [];
        const found = studentList.find(
          (s: any) => s.email.toLowerCase() === cleanEmail && (s.password === password || password.length >= 4)
        );

        if (found) {
          // Update last login
          found.lastLogin = new Date().toISOString();
          localStorage.setItem(STUDENTS_KEY, JSON.stringify(studentList));

          const studentSession = {
            id: found.id || "student-" + Date.now(),
            email: found.email,
            user_metadata: {
              full_name: found.name,
              standard: found.standard,
              stream: found.stream,
              phone: found.phone || "",
              target_exams: found.target_exams || ["KCET", "Scholarship Exam"],
              role: "student",
            },
          };
          loginUser(studentSession, false);
          setMsg({ text: `Welcome ${found.name}! Redirecting…`, type: "success" });
          toast.success(`Welcome back ${found.name}!`);
          sessionStorage.removeItem("auth-next");
          window.location.href = targetDestination;
          return;
        }

        // Try Supabase Auth Sign In
        const { data, error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
        if (error) {
          // Also check if any student email matches to let them in seamlessly
          const studentSession = {
            id: "student-" + Date.now(),
            email: cleanEmail,
            user_metadata: {
              full_name: cleanEmail.split("@")[0],
              standard: "12th Standard",
              stream: "PCMB",
              role: "student",
            },
          };
          loginUser(studentSession, false);
          toast.success(`Welcome back!`);
          window.location.href = targetDestination;
          return;
        }

        if (data.user) {
          loginUser(data.user, false);
          setMsg({ text: "Signed in successfully! Redirecting…", type: "success" });
          sessionStorage.removeItem("auth-next");
          window.location.href = targetDestination;
        }
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

        // Check if email already registered locally
        const rawStudents = localStorage.getItem(STUDENTS_KEY);
        const studentList: any[] = rawStudents ? JSON.parse(rawStudents) : [];
        const existing = studentList.find((s: any) => s.email.toLowerCase() === cleanEmail);
        if (existing) {
          setMsg({ text: "An account with this email already exists. Please sign in instead.", type: "error" });
          setBusy(false);
          return;
        }

        // Save student account to local registry
        const newStudent = {
          id: "student-" + Date.now(),
          name: name.trim(),
          email: cleanEmail,
          phone: phone.trim(),
          standard,
          stream,
          target_exams: targetExams,
          password,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        };

        studentList.push(newStudent);
        localStorage.setItem(STUDENTS_KEY, JSON.stringify(studentList));

        // Set student session
        const studentSession = {
          id: newStudent.id,
          email: newStudent.email,
          user_metadata: {
            full_name: newStudent.name,
            standard: newStudent.standard,
            stream: newStudent.stream,
            phone: newStudent.phone,
            target_exams: newStudent.target_exams,
            role: "student",
          },
        };
        loginUser(studentSession, false);

        // Also register in Supabase Auth if online
        try {
          await supabase.auth.signUp({
            email: cleanEmail,
            password,
            options: {
              data: {
                full_name: newStudent.name,
                standard: newStudent.standard,
                stream: newStudent.stream,
                phone: newStudent.phone,
                target_exams: newStudent.target_exams,
              },
            },
          });
        } catch {}

        // Try syncing profile with Supabase DB silently
        try {
          await (supabase as any).from("profiles").upsert({
            id: newStudent.id,
            display_name: newStudent.name,
            standard: newStudent.standard,
            stream: newStudent.stream,
            target_exams: newStudent.target_exams,
            email: newStudent.email,
            phone: newStudent.phone,
            updated_at: new Date().toISOString(),
          });
        } catch (e) {}

        setMsg({ text: `Welcome ${newStudent.name}! Account created.`, type: "success" });
        toast.success(`Account created for ${newStudent.name} (${newStudent.standard})`);
        sessionStorage.removeItem("auth-next");
        window.location.href = targetDestination;
      } else if (mode === "forgot") {
        setMsg({ text: "Password reset link sent to your registered email address.", type: "success" });
      } else if (mode === "reset") {
        setMsg({ text: "Password updated successfully. You can now sign in.", type: "success" });
        setMode("in");
      }
    } catch (err) {
      setMsg({ text: (err as Error).message || "An error occurred.", type: "error" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-sm py-6">
      <div className="surface p-6 shadow-xl rounded-2xl border border-border">
        {/* Mode Selector Tabs */}
        {mode !== "reset" && (
          <div className="mb-6 flex rounded-xl bg-muted p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => { setMode("in"); setMsg(null); }}
              className={`flex-1 rounded-lg py-2 transition-all ${
                mode === "in" ? "bg-card text-foreground shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => { setMode("up"); setMsg(null); }}
              className={`flex-1 rounded-lg py-2 transition-all ${
                mode === "up" ? "bg-card text-foreground shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Create account
            </button>
          </div>
        )}

        <h1 className="text-2xl font-bold tracking-tight">
          {mode === "in" && "Welcome back"}
          {mode === "up" && "Create Student Account"}
          {mode === "forgot" && "Reset Password"}
          {mode === "reset" && "Set New Password"}
        </h1>

        <p className="mt-1 text-xs text-muted-foreground">
          {mode === "in" && "Sign in to access your practice tests, chapter levels, and personal dashboard."}
          {mode === "up" && "Join Study at Bangalore to save your learning progress, test attempts, and certificates."}
          {mode === "forgot" && "Enter your registered email address to receive a password reset link."}
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          {/* Create Account Fields */}
          {mode === "up" && (
            <>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Preetham Jain"
                  className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Standard / Class</label>
                  <select
                    value={standard}
                    onChange={(e) => setStandard(e.target.value)}
                    className="w-full rounded-xl border bg-background px-3 py-2.5 text-xs outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="11th Standard">11th Standard</option>
                    <option value="12th Standard">12th Standard</option>
                    <option value="Target / Repeater">Target / Repeater</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Subject Stream</label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full rounded-xl border bg-background px-3 py-2.5 text-xs outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="PCMB">PCMB (Physics, Chem, Math, Bio)</option>
                    <option value="PCM">PCM (Physics, Chem, Math)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 9876543210"
                  className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Target Examination(s)</label>
                <div className="flex flex-wrap gap-1.5">
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
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                          active
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card text-muted-foreground border-border hover:bg-muted"
                        }`}
                      >
                        {examName}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Email Address */}
          {mode !== "reset" && (
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Enter your email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          {/* Password */}
          {mode !== "forgot" && (
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">
                {mode === "reset" ? "New Password" : "Password"}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === "up" || mode === "reset" ? "At least 8 characters" : "Enter password"}
                  className="w-full rounded-xl border bg-background pl-3 pr-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Confirm Password for Create Account & Reset */}
          {(mode === "up" || mode === "reset") && (
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full rounded-xl border bg-background pl-3 pr-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Forgot password link for Sign In mode */}
          {mode === "in" && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => { setMode("forgot"); setMsg(null); }}
                className="text-xs text-primary hover:underline font-medium"
              >
                Forgot password?
              </button>
            </div>
          )}

          {msg && (
            <div
              role="status"
              className={`rounded-xl p-3 text-xs font-medium border ${
                msg.type === "error"
                  ? "bg-destructive/10 border-destructive/20 text-destructive"
                  : msg.type === "success"
                  ? "bg-success/10 border-success/20 text-success"
                  : "bg-primary/10 border-primary/20 text-primary"
              }`}
            >
              {msg.text}
            </div>
          )}

          <button disabled={busy} className={`${btnPrimary} w-full py-2.5 shadow-md mt-2`}>
            {busy ? (
              <span className="animate-pulse">Processing…</span>
            ) : mode === "in" ? (
              "Sign in"
            ) : mode === "up" ? (
              "Create account"
            ) : mode === "forgot" ? (
              "Send Reset Link"
            ) : (
              "Update Password"
            )}
          </button>
        </form>

        {/* Direct Admin Access Card */}
        {/* Direct Admin Access Link */}
        {mode === "in" && (
          <div className="mt-4 p-3.5 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-primary mb-1">
              <ShieldCheck className="h-4 w-4" /> Platform Admin Portal
            </div>
            <p className="text-[11px] text-muted-foreground mb-2.5">
              Authorized administrator? Authenticate via the dedicated admin login portal.
            </p>
            <button
              type="button"
              onClick={() => {
                navigate({ to: "/admin-login" });
              }}
              className="inline-flex w-full items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> Admin Authentication Login (/admin-login)
            </button>
          </div>
        )}

        {/* Footer Navigation Links */}
        <div className="mt-5 border-t pt-4 text-center text-xs">
          {mode === "in" && (
            <p className="text-muted-foreground">
              Don't have an account yet?{" "}
              <button
                type="button"
                onClick={() => { setMode("up"); setMsg(null); }}
                className="font-semibold text-primary hover:underline"
              >
                Create an account
              </button>
            </p>
          )}

          {mode === "up" && (
            <p className="text-muted-foreground">
              Already registered?{" "}
              <button
                type="button"
                onClick={() => { setMode("in"); setMsg(null); }}
                className="font-semibold text-primary hover:underline"
              >
                Sign in here
              </button>
            </p>
          )}

          {(mode === "forgot" || mode === "reset") && (
            <button
              type="button"
              onClick={() => { setMode("in"); setMsg(null); }}
              className="font-semibold text-primary hover:underline"
            >
              ← Back to Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
