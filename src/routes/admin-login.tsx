import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShieldCheck, Lock, Mail, Eye, EyeOff, Loader2, ArrowLeft, KeyRound, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Logo } from "@/components/site/Logo";
import { toast } from "sonner";
export const Route = createFileRoute("/admin-login")({
  head: () => ({
    meta: [
      { title: "Admin Authentication - Study at Bangalore" },
      { name: "description", content: "Platform administrator login and authentication portal." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const { user, isAdmin, loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // If already logged in as verified admin, redirect directly to /admin
  useEffect(() => {
    if (isAdmin && user) {
      navigate({ to: "/admin", replace: true });
    }
  }, [isAdmin, user, navigate]);

  async function handleAdminLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanEmail) {
      setErrorMsg("Please enter your admin email address.");
      return;
    }
    if (!cleanPassword) {
      setErrorMsg("Please enter your admin password.");
      return;
    }

    setLoading(true);

    try {
      // 1. Authenticate with Supabase Auth
      const { data: supaAuth, error: supaErr } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: cleanPassword,
      });

      if (supaErr || !supaAuth?.user) {
        setErrorMsg("Authentication failed. Invalid administrator credentials.");
        toast.error("Invalid administrator credentials. Please check your email and password.");
        return;
      }

      // 2. Authoritative server-side verification of administrative role
      const { getAdminStatus } = await import("@/lib/admin.functions");
      const status = await getAdminStatus();

      if (!status.isAdmin) {
        await supabase.auth.signOut();
        setErrorMsg("Access denied. This account does not possess administrative privileges.");
        toast.error("Access denied. Insufficient administrative privileges.");
        return;
      }

      loginUser(supaAuth.user, true);
      toast.success("Admin authentication successful! Entering Admin Portal…");
      setTimeout(() => {
        window.location.href = "/admin";
      }, 150);
    } catch (err: any) {
      setErrorMsg(err?.message || "An unexpected error occurred during administrator authentication.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Brand Logo & Back to Site */}
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="inline-block transition hover:opacity-85">
            <Logo />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to website
          </Link>
        </div>

        {/* Admin Login Card */}
        <div className="surface rounded-2xl border border-border/80 p-8 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
          {/* Header Badge & Title */}
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-xs">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-2">
              <KeyRound className="h-3 w-3" /> Admin Authentication
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Admin Portal Login</h1>
            <p className="mt-1 text-xs text-muted-foreground">
              Please enter your administrator credentials to proceed to the management portal.
            </p>
          </div>

          {/* Error Message Alert */}
          {errorMsg && (
            <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-xs text-destructive animate-in fade-in duration-200">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <div className="font-medium leading-relaxed">{errorMsg}</div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleAdminLogin} className="space-y-4">
            {/* Mail ID Input */}
            <div>
              <label htmlFor="admin-email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Enter Mail ID
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="admin-email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter admin mail ID"
                  className="w-full rounded-xl border border-border bg-background/60 pl-10 pr-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="admin-password" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Enter Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full rounded-xl border border-border bg-background/60 pl-10 pr-10 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Admin Authentication Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Verifying Admin Credentials…</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4" />
                  <span>Admin Authentication Login</span>
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 border-t border-border/60 pt-4 text-center">
            <p className="text-[11px] text-muted-foreground">
              Protected administrative environment. All authentication attempts and actions are monitored and logged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
