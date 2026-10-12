import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Eye, EyeOff, UserCheck, ShieldCheck, GraduationCap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { btnGhost, btnPrimary } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
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

        const { data, error } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: {
              full_name: name.trim(),
              standard,
              stream,
              phone: phone.trim(),
              target_exams: targetExams,
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
            await (supabase as any).from("profiles").upsert({
              id: data.user.id,
              display_name: name.trim(),
              standard,
              stream,
              target_exams: targetExams,
              email: cleanEmail,
              phone: phone.trim(),
              updated_at: new Date().toISOString(),
            });
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

          {(mode === "in" || mode === "up") && (
            <>
              <div className="relative my-3 flex items-center justify-center">
                <div className="border-t border-border w-full" />
                <span className="bg-card px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground absolute">
                  or
                </span>
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={handleGoogleSignIn}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-background py-2.5 text-xs font-semibold hover:bg-accent transition shadow-xs"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
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
