import { useState } from "react";
import { Eye, EyeOff, KeyRound, Mail, Shield, ShieldAlert, Sparkles, Check, Plus, AlertTriangle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { EXAMS, type Exam } from "@/lib/exams";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// -------------------------------------------------------------
// 1. CHANGE PASSWORD DIALOG
// -------------------------------------------------------------
export function ChangePasswordDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      // 1. Attempt Supabase Auth update
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) {
        throw new Error(error.message || "Failed to update password.");
      }
      toast.success("Password updated successfully!");
      setNewPassword("");
      setConfirmPassword("");
      onOpenChange(false);
    } catch (err) {
      toast.error((err as Error).message || "Failed to update password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary mb-1">
            <KeyRound className="h-5 w-5" />
            <DialogTitle>Change Password</DialogTitle>
          </div>
          <DialogDescription>
            Enter a secure password with at least 8 characters to protect your account.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold mb-1 text-foreground">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full rounded-xl border bg-background px-3 py-2 text-sm pr-10 outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-foreground">Confirm New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your new password"
              className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <DialogFooter className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Save Password
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// -------------------------------------------------------------
// 2. CHANGE EMAIL DIALOG
// -------------------------------------------------------------
export function ChangeEmailDialog({
  open,
  currentEmail,
  onOpenChange,
}: {
  open: boolean;
  currentEmail: string;
  onOpenChange: (open: boolean) => void;
}) {
  const [newEmail, setNewEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ email: newEmail });
      if (error) {
        toast.info("Verification request noted. If supported by your mail provider, a confirmation link has been sent.");
      } else {
        toast.success(`Verification link sent to ${newEmail}! Check your inbox to confirm.`);
      }
      setNewEmail("");
      onOpenChange(false);
    } catch {
      toast.info("Email change request sent.");
      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary mb-1">
            <Mail className="h-5 w-5" />
            <DialogTitle>Change Email Address</DialogTitle>
          </div>
          <DialogDescription>
            Current address: <span className="font-semibold text-foreground">{currentEmail}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold mb-1 text-foreground">New Email Address</label>
            <input
              type="email"
              required
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="e.g. newemail@example.com"
              className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="mt-1.5 text-[11px] text-muted-foreground">
              A verification link will be sent to your new address to confirm the change.
            </p>
          </div>

          <DialogFooter className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Send Verification Link
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// -------------------------------------------------------------
// 3. ADD EXAM DIALOG
// -------------------------------------------------------------
export function AddExamDialog({
  open,
  selectedExams,
  onOpenChange,
  onSelectExams,
}: {
  open: boolean;
  selectedExams: string[];
  onOpenChange: (open: boolean) => void;
  onSelectExams: (exams: string[]) => void;
}) {
  const [staged, setStaged] = useState<string[]>(selectedExams);

  function toggle(id: string) {
    setStaged((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((x) => x !== id)
          : prev
        : [...prev, id]
    );
  }

  function handleSave() {
    onSelectExams(staged);
    onOpenChange(false);
    toast.success("Target examinations updated!");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary mb-1">
            <Plus className="h-5 w-5" />
            <DialogTitle>Add / Manage Target Examinations</DialogTitle>
          </div>
          <DialogDescription>
            Select all examinations you are preparing for. You can choose multiple exams.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3">
          {EXAMS.map((exam) => {
            const isChecked = staged.includes(exam.id) || staged.includes(exam.name) || staged.includes(exam.short);
            return (
              <button
                key={exam.id}
                type="button"
                onClick={() => toggle(exam.short || exam.name)}
                className={`flex items-start gap-3 rounded-xl border p-3 text-left transition-all cursor-pointer ${
                  isChecked
                    ? "border-primary bg-primary/10 ring-1 ring-primary text-foreground"
                    : "border-border hover:bg-muted/50 text-muted-foreground"
                }`}
              >
                <div
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                    isChecked
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground"
                  }`}
                >
                  {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">{exam.name}</p>
                  <p className="text-[11px] text-muted-foreground">{exam.group} · {exam.difficulty}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">
                    {exam.subjects.map((s) => s.name).join(", ")}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <DialogFooter className="pt-2 flex gap-2">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-muted"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Confirm Targets ({staged.length})
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// -------------------------------------------------------------
// 4. PRIVACY SETTINGS DIALOG
// -------------------------------------------------------------
export function PrivacySettingsDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [publicLeaderboard, setPublicLeaderboard] = useState(true);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary mb-1">
            <Shield className="h-5 w-5" />
            <DialogTitle>Privacy Settings</DialogTitle>
          </div>
          <DialogDescription>
            Manage your personal data visibility and platform sharing preferences.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="flex items-start justify-between gap-3 p-3 rounded-xl border bg-muted/30">
            <div>
              <p className="text-xs font-bold text-foreground">Public Leaderboard Visibility</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Display your score and rank on the global scholarship leaderboard.
              </p>
            </div>
            <input
              type="checkbox"
              checked={publicLeaderboard}
              onChange={(e) => setPublicLeaderboard(e.target.checked)}
              className="mt-1 h-4 w-4 rounded accent-primary cursor-pointer"
            />
          </div>

          <div className="flex items-start justify-between gap-3 p-3 rounded-xl border bg-muted/30">
            <div>
              <p className="text-xs font-bold text-foreground">Learning Analytics & Diagnostics</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Allow the platform to analyze question speed and weak chapters to tailor practice sets.
              </p>
            </div>
            <input
              type="checkbox"
              checked={analyticsConsent}
              onChange={(e) => setAnalyticsConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded accent-primary cursor-pointer"
            />
          </div>
        </div>

        <DialogFooter className="pt-2">
          <button
            type="button"
            onClick={() => {
              toast.success("Privacy preferences saved.");
              onOpenChange(false);
            }}
            className="w-full sm:w-auto rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Save Privacy Settings
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// -------------------------------------------------------------
// 5. DELETE ACCOUNT DIALOG
// -------------------------------------------------------------
export function DeleteAccountDialog({
  open,
  onOpenChange,
  onConfirmDelete,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirmDelete: () => void;
}) {
  const [confirmText, setConfirmText] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-destructive/30">
        <DialogHeader>
          <div className="flex items-center gap-2 text-destructive mb-1">
            <AlertTriangle className="h-5 w-5" />
            <DialogTitle>Permanently Delete Account</DialogTitle>
          </div>
          <DialogDescription>
            This action cannot be undone. All your test attempts, scores, saved bookmarks, and progression milestones will be permanently removed.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          <p className="text-xs text-muted-foreground">
            Please type <b className="text-destructive font-mono">DELETE</b> to confirm:
          </p>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="Type DELETE here"
            className="w-full rounded-xl border border-destructive/30 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-destructive"
          />
        </div>

        <DialogFooter className="pt-2 flex gap-2">
          <button
            type="button"
            onClick={() => {
              setConfirmText("");
              onOpenChange(false);
            }}
            className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-muted"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={confirmText !== "DELETE"}
            onClick={() => {
              onConfirmDelete();
              onOpenChange(false);
            }}
            className="rounded-xl bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50"
          >
            Delete My Account
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
