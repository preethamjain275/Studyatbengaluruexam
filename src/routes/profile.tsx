import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { User, LogOut, ShieldCheck, GraduationCap, Upload, Save, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { btnGhost, btnPrimary } from "@/components/site/ui";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Student Profile - Study at Bangalore" },
      { name: "description", content: "Manage your personal profile, class, target exam, stream, and avatar." },
    ],
  }),
  component: ProfilePage,
});

export function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [standard, setStandard] = useState("12th Standard");
  const [stream, setStream] = useState("PCMB");
  const [targetExam, setTargetExam] = useState("KCET");
  const [age, setAge] = useState("17");
  const [phone, setPhone] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setEmail(user.email ?? "");
      const meta = (user.user_metadata || {}) as Record<string, any>;
      setName(meta["full_name"] || meta["display_name"] || user.email?.split("@")[0] || "");
      setStandard(meta["standard"] || "12th Standard");
      setStream(meta["stream"] || "PCMB");
      setTargetExam(meta["target_exam"] || "KCET");
      setAge(meta["age"] || "17");
      setPhone(meta["phone"] || "");
      setAvatarUrl(meta["avatar_url"] || "");
    }
  }, [user]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      // Update session object
      const updatedUser = {
        ...user,
        email,
        user_metadata: {
          ...(user?.user_metadata || {}),
          full_name: name,
          standard,
          stream,
          target_exam: targetExam,
          age,
          phone,
          avatar_url: avatarUrl,
        },
      };

      localStorage.setItem("study_user_session", JSON.stringify(updatedUser));

      // Try updating Supabase profiles table
      try {
        await (supabase as any).from("profiles").upsert({
          id: user?.id || "local-user",
          display_name: name,
          standard,
          stream,
          email,
          phone,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        });
      } catch (e) {}

      toast.success("Profile details updated successfully!");
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
          <h1 className="text-xl font-bold">Student Profile</h1>
          <p className="mt-2 text-xs text-muted-foreground">Please sign in to access and update your profile details.</p>
          <button onClick={() => navigate({ to: "/auth" })} className={`${btnPrimary} w-full mt-5 py-2.5`}>
            Sign in to your account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="surface p-6 sm:p-8 rounded-2xl shadow-xl border border-border">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-brand text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
              {avatarUrl ? (
                <img src={avatarUrl} alt={name} className="h-full w-full rounded-full object-cover" />
              ) : (
                name.charAt(0).toUpperCase() || "S"
              )}
            </div>
            <div>
              <h1 className="text-xl font-bold">Welcome, {name || "Student"}!</h1>
              <p className="text-xs text-muted-foreground">{email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className={`${btnGhost} text-destructive hover:bg-destructive/10 text-xs gap-1`}>
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" /> Personal & Academic Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Enter your full name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Preetham Jain"
                className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Enter your email address</label>
              <input
                type="email"
                readOnly
                value={email}
                className="w-full rounded-xl border bg-muted px-3 py-2.5 text-sm opacity-80 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Class / Standard</label>
              <select
                value={standard}
                onChange={(e) => setStandard(e.target.value)}
                className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
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
                className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="PCMB">PCMB (Physics, Chem, Math, Biology)</option>
                <option value="PCM">PCM (Physics, Chem, Math)</option>
                <option value="PCB">PCB (Physics, Chem, Biology)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Primary Target Examination</label>
              <select
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
                className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="KCET">KCET (Karnataka Common Entrance Test)</option>
                <option value="NEET">NEET UG</option>
                <option value="JEE Main">JEE Main</option>
                <option value="JEE Advanced">JEE Advanced</option>
                <option value="COMEDK">COMEDK UGET</option>
                <option value="PGCET">Karnataka PGCET</option>
                <option value="Scholarship Exam">Karnataka Scholarship Exam</option>
              </select>
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
                className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Mobile / Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Profile Picture URL / Avatar</label>
              <input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://example.com/avatar.jpg"
                className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button disabled={saving} className={`${btnPrimary} px-6 py-2.5 gap-2 shadow-md`}>
              <Save className="h-4 w-4" /> {saving ? "Saving..." : "Save Profile Details"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
