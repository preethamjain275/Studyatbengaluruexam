import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Send, X, User, Settings, Sparkles, LogIn, Check, BookOpen, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { btnPrimary, btnGhost } from "@/components/site/ui";

type Ctx = { attemptId?: string; question?: string; options?: string; subject?: string; chapter?: string; difficulty?: string } | null;
type Msg = { role: "user" | "assistant"; content: string };

// Session state store for AI tutor drawer
let state: { open: boolean; ctx: Ctx } = { open: false, ctx: null };
const subs = new Set<() => void>();
const set = (p: Partial<typeof state>) => { state = { ...state, ...p }; subs.forEach((f) => f()); };
const useStore = () => useSyncExternalStore((f) => (subs.add(f), () => subs.delete(f)), () => state, () => state);

export function Robot({ size = 56 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" className="robot-float drop-shadow-xl cursor-pointer">
      <defs>
        <linearGradient id="rb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--sky)" />
          <stop offset="1" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
      {/* Antenna */}
      <line x1="32" y1="5" x2="32" y2="13" stroke="var(--primary)" strokeWidth="2.5" />
      <circle cx="32" cy="5" r="3.5" fill="var(--blush)" className="animate-pulse" />

      {/* Head */}
      <rect x="8" y="13" width="48" height="40" rx="14" fill="url(#rb)" />
      {/* Visor Screen */}
      <rect x="14" y="20" width="36" height="24" rx="10" fill="var(--background)" opacity="0.95" />

      {/* Smiling Blinking Eyes */}
      <g className="robot-eye-blink">
        <path d="M20 30 q5 -7 10 0" stroke="var(--primary)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M34 30 q5 -7 10 0" stroke="var(--primary)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* Warm Smiling Mouth */}
      <path d="M25 36 q7 6 14 0" stroke="var(--blush)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Side Headphones/Ears */}
      <rect x="3" y="27" width="5" height="12" rx="2.5" fill="var(--primary)" />
      <rect x="56" y="27" width="5" height="12" rx="2.5" fill="var(--primary)" />
    </svg>
  );
}

/** Rendered on practice question screens: shares question context with the tutor. */
export function TutorContext({ attemptId, q, level }: { attemptId: string; q: { body: string; subject: string; chapter: string; options: { text: string }[] }; level: string | null }) {
  useEffect(() => {
    set({ ctx: { attemptId, question: q.body, options: q.options.map((o, i) => `${"ABCD"[i]}) ${o.text}`).join("  "), subject: q.subject, chapter: q.chapter, difficulty: level ?? "" } });
    return () => set({ ctx: null });
  }, [attemptId, q, level]);
  return (
    <button onClick={() => set({ open: true })} className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition-all shadow-xs">
      <Robot size={24} /> Ask AI for a hint
    </button>
  );
}

export function TutorWidget() {
  const { open, ctx } = useStore();
  const { user } = useAuth();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isAssessmentPage = path.startsWith("/test/") || path.startsWith("/results/");

  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [editProfile, setEditProfile] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  // Profile Form States
  const metadata = user?.user_metadata as Record<string, string | undefined> | undefined;
  const [firstName, setFirstName] = useState(metadata?.["first_name"] || metadata?.["full_name"]?.split(" ")[0] || "");
  const [lastName, setLastName] = useState(metadata?.["last_name"] || "");
  const [phone, setPhone] = useState(metadata?.["phone"] || "");
  const [targetExam, setTargetExam] = useState(metadata?.["target_exam"] || "JEE Main");
  const [profileSavedMsg, setProfileSavedMsg] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const lastQ = useRef<string | undefined>(undefined);

  // Sync profile values when user updates
  useEffect(() => {
    if (user) {
      const m = user.user_metadata as Record<string, string | undefined> | undefined;
      setFirstName(m?.["first_name"] || m?.["full_name"]?.split(" ")[0] || "");
      setLastName(m?.["last_name"] || "");
      setPhone(m?.["phone"] || "");
      setTargetExam(m?.["target_exam"] || "JEE Main");
    }
  }, [user]);

  // Reset hints when switching questions
  useEffect(() => {
    if (ctx?.question !== lastQ.current) {
      lastQ.current = ctx?.question;
      setMsgs([]);
      setErr(null);
    }
  }, [ctx?.question]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs]);

  useEffect(() => {
    if (open && user && !editProfile) {
      inputRef.current?.focus();
    }
  }, [open, user, editProfile, busy]);

  // Hide during full-screen exams
  if (path.startsWith("/test/") && !ctx) return null;

  const m = user?.user_metadata as Record<string, string | undefined> | undefined;
  const displayName = firstName || m?.["full_name"] || user?.email?.split("@")[0] || "Student";

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          target_exam: targetExam,
        },
      });
      if (error) throw error;
      setProfileSavedMsg(true);
      setTimeout(() => setProfileSavedMsg(false), 2000);
      setEditProfile(false);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function send(text: string) {
    if (!text.trim() || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: text.trim() }];
    setMsgs([...next, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    setErr(null);

    try {
      const { data } = await supabase.auth.getSession();
      let authToken = data.session?.access_token || "";
      if (!authToken && user) {
        authToken = `local:${btoa(encodeURIComponent(JSON.stringify(user)))}`;
      }

      if (!authToken) {
        throw new Error("Please sign in to your student account to ask Buddy for hints.");
      }

      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          messages: next,
          context: ctx ?? undefined,
          attemptId: ctx?.attemptId,
          userName: displayName,
        }),
      });

      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({}));
        throw new Error(
          j.error ??
            (res.status === 402
              ? "AI credits are used up for now."
              : "Buddy AI is temporarily unavailable. Please try again in a moment.")
        );
      }

      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMsgs([...next, { role: "assistant", content: acc }]);
      }
      if (!acc.trim()) throw new Error("No response received from Buddy. Please try asking again.");
    } catch (e) {
      setErr((e as Error).message);
      setMsgs(next);
    }
    setBusy(false);
  }

  async function handleGoogleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth` },
    });
  }

  return (
    <>
      {/* Floating Robot Widget + Interactive Speech Bubble when closed */}
      {!open && (
        <div className="fixed bottom-20 right-3 z-50 flex flex-col items-end lg:bottom-6 lg:right-6">
          {/* Animated 3D Speech Bubble Popup */}
          {!bubbleDismissed && !isAssessmentPage && (
            <div className="speech-bubble-pop mb-2 relative max-w-[240px] rounded-2xl border bg-card/95 p-3 text-xs shadow-2xl backdrop-blur-xl border-primary/20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setBubbleDismissed(true);
                }}
                className="absolute right-1.5 top-1.5 rounded-full p-0.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                aria-label="Dismiss message"
              >
                <X className="h-3 w-3" />
              </button>
              {user ? (
                <div>
                  <p className="font-bold text-primary">
                    Hi {displayName}! 👋
                  </p>
                  <p className="mt-0.5 text-muted-foreground">
                    How are you? Let's begin with studies today! 📚
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-bold text-foreground">
                    Hello Guest! 🚀 Hey hi!
                  </p>
                  <p className="mt-0.5 text-muted-foreground">
                    Sign in with me to start your practice & get personalized AI hints!
                  </p>
                  <button
                    onClick={() => set({ open: true })}
                    className="mt-2 flex w-full items-center justify-center gap-1 rounded-xl bg-brand px-2.5 py-1.5 font-semibold text-primary-foreground shadow-xs"
                  >
                    <LogIn className="h-3 w-3" /> Sign in with me
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Floating Robot Button */}
          <button
            onClick={() => set({ open: true })}
            aria-label="Open AI tutor"
            className="rounded-full p-1 transition-transform hover:scale-105 active:scale-95"
          >
            <Robot size={64} />
          </button>
        </div>
      )}

      {/* Robot Dialog / Drawer */}
      {open && (
        <div
          role="dialog"
          aria-label="AI tutor"
          className="glass fixed bottom-20 right-3 z-[60] flex h-[min(540px,80vh)] w-[min(390px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-2xl lg:bottom-6 lg:right-6 border-primary/20 animate-in fade-in zoom-in-95"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b bg-card/60 p-3.5 backdrop-blur-md">
            <Robot size={42} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-bold truncate">Buddy · AI Study Assistant</p>
                <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {user ? `Hi ${displayName}! Ready to study` : "Interactive Study Assistant"}
              </p>
            </div>
            {user && (
              <button
                onClick={() => setEditProfile(!editProfile)}
                aria-label="Edit Profile"
                title="Student Profile & Settings"
                className={`rounded-full p-2 transition-colors ${
                  editProfile ? "bg-primary text-primary-foreground" : "hover:bg-accent text-muted-foreground"
                }`}
              >
                <Settings className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={() => set({ open: false })}
              aria-label="Close tutor"
              className="rounded-full p-2 hover:bg-accent text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body Section */}
          <div className="flex-1 space-y-3 overflow-y-auto p-3.5 text-sm">
            {/* GUEST INTERACTIVE SIGN-IN UI */}
            {!user ? (
              <div className="my-auto space-y-4 py-4 text-center">
                <div className="mx-auto flex justify-center">
                  <Robot size={80} />
                </div>
                <div className="space-y-1.5 px-2">
                  <h2 className="text-lg font-bold">Hey hi! Sign in with me 🚀</h2>
                  <p className="text-xs text-muted-foreground">
                    Create an account or sign in to save your chapter progress, attempt mock exams, and get personal AI hints!
                  </p>
                </div>

                <div className="space-y-2 pt-2 px-2">
                  <button
                    onClick={handleGoogleSignIn}
                    className={`${btnGhost} flex w-full items-center justify-center gap-2 border bg-card py-2.5 shadow-xs hover:bg-accent text-xs`}
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
                    <span>Sign in with Google</span>
                  </button>

                  <Link
                    to="/auth"
                    onClick={() => set({ open: false })}
                    className={`${btnPrimary} flex w-full items-center justify-center gap-1.5 py-2.5 text-xs shadow-md`}
                  >
                    <LogIn className="h-4 w-4" /> Sign in / Create Account
                  </Link>
                </div>
              </div>
            ) : editProfile ? (
              /* STUDENT PROFILE EDIT VIEW */
              <form onSubmit={handleSaveProfile} className="space-y-3 p-1">
                <div className="flex items-center gap-2 border-b pb-2">
                  <User className="h-4 w-4 text-primary" />
                  <h3 className="font-bold text-sm">Student Profile Details</h3>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="e.g. Preetham"
                    className="w-full rounded-xl border bg-background px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="e.g. Kumar"
                    className="w-full rounded-xl border bg-background px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border bg-background px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Target Exam</label>
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full rounded-xl border bg-background px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="JEE Main">JEE Main</option>
                    <option value="JEE Advanced">JEE Advanced</option>
                    <option value="NEET UG">NEET UG</option>
                    <option value="KCET">KCET</option>
                  </select>
                </div>

                {profileSavedMsg && (
                  <p className="text-xs font-semibold text-success flex items-center gap-1">
                    <Check className="h-3.5 w-3.5" /> Profile updated successfully!
                  </p>
                )}

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditProfile(false)}
                    className={`${btnGhost} flex-1 py-2 text-xs`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={busy}
                    className={`${btnPrimary} flex-1 py-2 text-xs`}
                  >
                    {busy ? "Saving…" : "Save Profile"}
                  </button>
                </div>
              </form>
            ) : (
              /* SIGNED-IN AI TUTOR CHAT VIEW */
              <>
                {msgs.length === 0 ? (
                  <div className="space-y-3">
                    <div className="rounded-2xl border bg-card/80 p-3 text-xs space-y-1.5 shadow-xs">
                      <p className="font-bold text-primary flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" /> Hi {displayName}! How are you?
                      </p>
                      <p className="text-muted-foreground">
                        Let's begin with studies! {ctx?.question ? `I see your ${ctx.subject} question on ${ctx.chapter}. Ask me for hints!` : "Ask me about formulas, NCERT concepts, or solving techniques."}
                      </p>
                    </div>

                    {ctx?.question && (
                      <button
                        onClick={() => send("Give me a small hint for this question.")}
                        className="w-full flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
                      >
                        <span>Give me a hint for this question</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    )}

                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <button
                        onClick={() => send("Can you list key formulas for this chapter?")}
                        className="rounded-xl border p-2.5 text-left hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <BookOpen className="h-3.5 w-3.5 text-primary mb-1" />
                        <span className="font-semibold text-foreground block">Key Formulas</span>
                        <span>Important equations</span>
                      </button>
                      <button
                        onClick={() => send("Explain the NCERT concept behind this topic.")}
                        className="rounded-xl border p-2.5 text-left hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-primary mb-1" />
                        <span className="font-semibold text-foreground block">NCERT Concept</span>
                        <span>Core theory & units</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  msgs.map((m, i) => (
                    <div
                      key={i}
                      className={
                        m.role === "user"
                          ? "ml-8 rounded-2xl bg-primary px-3.5 py-2 text-primary-foreground shadow-xs"
                          : "mr-4 rounded-2xl border bg-card p-3 text-foreground shadow-xs whitespace-pre-wrap leading-relaxed"
                      }
                    >
                      {m.content || <span className="animate-pulse text-muted-foreground">Thinking…</span>}
                    </div>
                  ))
                )}

                {msgs.length > 0 && !busy && ctx?.question && (
                  <button
                    onClick={() => send("I'm still stuck - give me a stronger hint.")}
                    className="rounded-full border px-3 py-1 text-xs font-semibold text-primary hover:bg-accent transition-colors"
                  >
                    Still stuck? Give stronger hint
                  </button>
                )}

                {err && (
                  <div role="alert" className="rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-xs text-destructive">
                    {err} <Link to="/revision" className="underline font-bold">Open revision notes</Link>
                  </div>
                )}
                <div ref={endRef} />
              </>
            )}
          </div>

          {/* Footer Input for Signed-in Users */}
          {user && !editProfile && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-end gap-2 border-t bg-card/60 p-2.5 backdrop-blur-md"
            >
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder={`Ask Buddy a question, ${displayName}…`}
                aria-label="Message the tutor"
                className="max-h-28 flex-1 resize-none rounded-xl border bg-background px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs disabled:opacity-50 hover:bg-primary/90 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
