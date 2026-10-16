import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  NotebookPen,
  Timer,
  LineChart,
  RotateCcw,
  Trophy,
  Bookmark,
  Brain,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { EXAMS } from "@/lib/exams";
import { ExamCard } from "@/components/site/ExamCard";
import { btnGhost, btnPrimary } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Study at Bangalore - Scholarship Exam & Exam Preparation" },
      { name: "description", content: "Prepare for KCET, NEET, JEE, COMEDK and government exams, and earn a scholarship with Study at Bangalore." },
      { property: "og:title", content: "Study at Bangalore - Scholarship Exam & Exam Preparation" },
      { property: "og:description", content: "Practice, mock tests and the Study at Bangalore Scholarship Exam in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// ─── Reusable helpers ──────────────────────────────────────────────────────────

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-semibold text-primary">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function FeaturePill({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      {text}
    </li>
  );
}

// ─── Landing page ──────────────────────────────────────────────────────────────

function Index() {
  return (
    <div className="space-y-24">
      {/* ── HERO / HOME ──────────────────────────────────────────────────────── */}
      <section id="home" className="grid items-center gap-10 pt-6 md:grid-cols-2 md:pt-12">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-semibold text-primary">
            <GraduationCap className="h-3.5 w-3.5" /> Scholarship Exam portal now open
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Your path to the <span className="text-brand">right college</span> starts here.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Prepare for KCET, NEET-UG, JEE Main, COMEDK and civil-service exams, and earn a scholarship with Study at Bangalore.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/scholarship-exam" className={btnPrimary}>
              Scholarship Exam <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/practice" className={btnGhost}>Start practising</Link>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { icon: NotebookPen, title: "Chapter practice", text: "Topic-wise sets across Physics, Chemistry, Biology & Mathematics — four difficulty levels." },
            { icon: Timer, title: "Full mock tests", text: "Real exam timing, official marking schemes and no AI hints during timed sessions." },
            { icon: LineChart, title: "Performance insights", text: "Attempt history, score trends and subject breakdowns to spot weak chapters early." },
          ].map((f, i) => (
            <div
              key={f.title}
              className="surface lift flex items-center gap-4 p-5 animate-in fade-in slide-in-from-right-4"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <span className="icon-3d h-12 w-12"><f.icon className="h-6 w-6" /></span>
              <div>
                <p className="font-semibold">{f.title}</p>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SCHOLARSHIP EXAM ──────────────────────────────────────────────────── */}
      <section id="scholarship-exam" className="surface rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionBadge icon={GraduationCap} label="Scholarship Exam" />
          <h2 className="mt-4 text-3xl font-extrabold">Earn merit scholarships & fee concessions</h2>
          <p className="mt-3 text-muted-foreground">
            The Study at Bangalore Scholarship Exam is a structured evaluation aligned to the Karnataka PUC and NCERT entrance curriculum. Qualify to unlock merit-based cash grants and college fee concessions for the 2026 academic year.
          </p>
          <ul className="mt-5 space-y-2">
            <FeaturePill text="Covers all four exam streams: KCET, NEET-UG, JEE Main & COMEDK" />
            <FeaturePill text="Physics, Chemistry, Biology and Mathematics sections" />
            <FeaturePill text="Full-length paper with official Karnataka state syllabus alignment" />
            <FeaturePill text="Results submitted instantly for merit ranking" />
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/scholarship-exam" className={btnPrimary}>Open portal <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/auth" search={{ next: "/scholarship-exam" }} className={btnGhost}>Sign in to save progress</Link>
          </div>
        </div>
        <div className="grid gap-4">
          {EXAMS.map((e) => <ExamCard key={e.id} exam={e} />)}
        </div>
      </section>

      {/* ── PRACTICE ─────────────────────────────────────────────────────────── */}
      <section id="practice" className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 grid gap-3">
          {[
            { label: "Easy", color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400", pct: "25%" },
            { label: "Medium", color: "bg-sky-500/10 text-sky-700 dark:text-sky-400", pct: "55%" },
            { label: "Hard", color: "bg-amber-500/10 text-amber-700 dark:text-amber-400", pct: "78%" },
            { label: "Expert", color: "bg-rose-500/10 text-rose-700 dark:text-rose-400", pct: "42%" },
          ].map((d) => (
            <div key={d.label} className="surface flex items-center gap-4 rounded-2xl p-4">
              <span className={`rounded-lg px-2.5 py-1 text-xs font-bold ${d.color}`}>{d.label}</span>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-primary/60" style={{ width: d.pct }} />
              </div>
              <span className="text-xs font-semibold text-muted-foreground">{d.pct} mastered</span>
            </div>
          ))}
        </div>
        <div className="order-1 md:order-2">
          <SectionBadge icon={NotebookPen} label="Practice" />
          <h2 className="mt-4 text-3xl font-extrabold">Question-bank practice with AI hints</h2>
          <p className="mt-3 text-muted-foreground">
            A 709-question bank spanning Physics, Chemistry, Biology, and Mathematics. Each subject is divided into four progressive difficulty levels. Work through questions at your own pace and ask Buddy — the AI tutor — for a structured hint whenever you're stuck.
          </p>
          <ul className="mt-5 space-y-2">
            <FeaturePill text="709 questions across KCET, NEET, JEE & COMEDK patterns" />
            <FeaturePill text="4 difficulty levels: Easy → Medium → Hard → Expert" />
            <FeaturePill text="Track mastery per subject and chapter" />
            <FeaturePill text="AI tutor (Buddy) streams pedagogical hints — never the raw answer" />
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/practice" className={btnPrimary}>Start practising <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/auth" search={{ next: "/practice" }} className={btnGhost}>Sign in to save progress</Link>
          </div>
        </div>
      </section>

      {/* ── MOCK TESTS ───────────────────────────────────────────────────────── */}
      <section id="mock-tests" className="surface rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionBadge icon={Timer} label="Mock Tests" />
            <h2 className="mt-4 text-3xl font-extrabold">Full-length timed mock exams</h2>
            <p className="mt-3 text-muted-foreground">
              Simulate the real exam experience with preset-based full-length mock tests for KCET, NEET-UG, JEE Main, and COMEDK. Official timing and negative-marking rules are enforced. AI hints are intentionally disabled during timed mocks to preserve exam integrity.
            </p>
            <ul className="mt-5 space-y-2">
              <FeaturePill text="KCET, NEET-UG, JEE Main and COMEDK presets" />
              <FeaturePill text="Authentic time limits and negative marking" />
              <FeaturePill text="No AI hints — exam-integrity first" />
              <FeaturePill text="Detailed solutions and score breakdown after submission" />
              <FeaturePill text="Resume an interrupted attempt right where you left off" />
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/mock-tests" className={btnPrimary}>Browse mock tests <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/auth" search={{ next: "/mock-tests" }} className={btnGhost}>Sign in to attempt</Link>
            </div>
          </div>
          <div className="grid gap-3">
            {[
              { exam: "KCET", questions: 60, minutes: 80, color: "border-primary/30 bg-primary/5" },
              { exam: "NEET-UG", questions: 180, minutes: 200, color: "border-sky-500/30 bg-sky-500/5" },
              { exam: "JEE Main", questions: 90, minutes: 180, color: "border-amber-500/30 bg-amber-500/5" },
              { exam: "COMEDK", questions: 180, minutes: 180, color: "border-rose-500/30 bg-rose-500/5" },
            ].map((t) => (
              <div key={t.exam} className={`rounded-2xl border p-4 ${t.color}`}>
                <p className="font-bold">{t.exam}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.questions} questions · {t.minutes} minutes · Negative marking</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVISION ─────────────────────────────────────────────────────────── */}
      <section id="revision" className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionBadge icon={RotateCcw} label="Revision" />
          <h2 className="mt-4 text-3xl font-extrabold">Quick-revision sheets for every chapter</h2>
          <p className="mt-3 text-muted-foreground">
            Browse a curated catalogue of concise revision sheets covering key concepts, formulae, and definitions across all four subjects. Filter by subject or chapter to zero in on exactly what you need before an exam.
          </p>
          <ul className="mt-5 space-y-2">
            <FeaturePill text="Concise, exam-focused content per chapter" />
            <FeaturePill text="Filter by subject: Physics, Chemistry, Biology, Mathematics" />
            <FeaturePill text="Consistent format — formulae, key terms, quick facts" />
            <FeaturePill text="Available without authentication for public browsing" />
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/revision" className={btnPrimary}>Open revision sheets <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="surface rounded-2xl p-6 space-y-3">
          {["Wave Optics", "Thermodynamics", "Chemical Equilibrium", "Human Physiology", "Integral Calculus"].map((ch, i) => (
            <div key={ch} className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 px-4 py-3 text-sm">
              <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${["bg-primary", "bg-amber-500", "bg-sky-500", "bg-emerald-500", "bg-rose-500"][i]}`} />
              {ch}
            </div>
          ))}
        </div>
      </section>

      {/* ── PERFORMANCE ──────────────────────────────────────────────────────── */}
      <section id="performance" className="surface rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionBadge icon={LineChart} label="Performance" />
            <h2 className="mt-4 text-3xl font-extrabold">Analytics that reveal your weak spots</h2>
            <p className="mt-3 text-muted-foreground">
              Every attempt — practice or mock — feeds into your personal performance dashboard. Track score trends over time, view subject-level accuracy rates, and see which chapters drag your rank down before it's too late.
            </p>
            <ul className="mt-5 space-y-2">
              <FeaturePill text="Full attempt history with date, score and subject breakdown" />
              <FeaturePill text="Score trend charts over time" />
              <FeaturePill text="Per-subject accuracy: Physics, Chemistry, Biology, Math" />
              <FeaturePill text="Scholarship-exam attempt records tracked separately" />
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/performance" className={btnPrimary}>View analytics <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/auth" search={{ next: "/performance" }} className={btnGhost}>Sign in to see your stats</Link>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { subject: "Physics", score: 72, color: "bg-primary" },
              { subject: "Chemistry", score: 85, color: "bg-sky-500" },
              { subject: "Biology", score: 61, color: "bg-emerald-500" },
              { subject: "Mathematics", score: 78, color: "bg-amber-500" },
            ].map((s) => (
              <div key={s.subject} className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium">{s.subject}</span>
                <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.score}%` }} />
                </div>
                <span className="w-10 text-right text-sm font-semibold">{s.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERBOARD ──────────────────────────────────────────────────────── */}
      <section id="leaderboard" className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 surface rounded-2xl p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Top students this week</p>
          <div className="space-y-3">
            {[
              { rank: 1, name: "Priya M.", score: "94.2%" },
              { rank: 2, name: "Arjun K.", score: "91.7%" },
              { rank: 3, name: "Sneha R.", score: "89.5%" },
              { rank: 4, name: "Rahul B.", score: "87.3%" },
              { rank: 5, name: "Kavya T.", score: "85.1%" },
            ].map((s) => (
              <div key={s.rank} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${s.rank === 1 ? "bg-amber-400/20 text-amber-600 dark:text-amber-400" : s.rank === 2 ? "bg-slate-200/60 text-slate-600 dark:text-slate-400" : s.rank === 3 ? "bg-orange-300/20 text-orange-600 dark:text-orange-400" : "bg-muted text-muted-foreground"}`}>
                  {s.rank}
                </span>
                <span className="flex-1 font-medium">{s.name}</span>
                <span className="font-semibold text-primary">{s.score}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SectionBadge icon={Trophy} label="Leaderboard" />
          <h2 className="mt-4 text-3xl font-extrabold">See how you rank against peers</h2>
          <p className="mt-3 text-muted-foreground">
            The live leaderboard ranks students by their overall percentage across completed mock tests and scholarship exam attempts. Compare your standing, identify the gap to the next rank, and push your preparation harder.
          </p>
          <ul className="mt-5 space-y-2">
            <FeaturePill text="Real student rankings by overall percentage" />
            <FeaturePill text="Updated after every submitted attempt" />
            <FeaturePill text="Filter by exam type or subject group" />
            <FeaturePill text="Sign in to see your personal rank badge" />
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/leaderboard" className={btnPrimary}>Open leaderboard <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/auth" search={{ next: "/leaderboard" }} className={btnGhost}>Sign in to rank</Link>
          </div>
        </div>
      </section>

      {/* ── BOOKMARKS ────────────────────────────────────────────────────────── */}
      <section id="bookmarks" className="surface rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionBadge icon={Bookmark} label="Bookmarks" />
            <h2 className="mt-4 text-3xl font-extrabold">Save tricky questions for later review</h2>
            <p className="mt-3 text-muted-foreground">
              Bookmark any question during practice to build your personal revision list. Return to it any time, see the full question, your previous answer, and the verified solution. Filter bookmarks by subject to focus revision sessions.
            </p>
            <ul className="mt-5 space-y-2">
              <FeaturePill text="Bookmark any question in one tap during practice" />
              <FeaturePill text="Saved permanently to your account across devices" />
              <FeaturePill text="Filter by subject: Physics, Chemistry, Biology, Math" />
              <FeaturePill text="View the correct answer and full explanation alongside your attempt" />
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/bookmarks" className={btnPrimary}>View bookmarks <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/auth" search={{ next: "/bookmarks" }} className={btnGhost}>Sign in to save questions</Link>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { subject: "Physics", chapter: "Electromagnetic Induction", tag: "Hard" },
              { subject: "Chemistry", chapter: "Coordination Compounds", tag: "Expert" },
              { subject: "Biology", chapter: "Genetics & Evolution", tag: "Medium" },
              { subject: "Mathematics", chapter: "Differential Equations", tag: "Hard" },
            ].map((b) => (
              <div key={b.chapter} className="surface flex items-start gap-3 rounded-xl p-4 border border-border/50">
                <Bookmark className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{b.chapter}</p>
                  <p className="text-xs text-muted-foreground">{b.subject}</p>
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">{b.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl bg-gradient-to-br from-primary/10 via-background to-sky-500/5 border p-10 md:p-16 text-center space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Free to start — no credit card required
        </span>
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Ready to maximise your <span className="text-brand">exam score</span>?
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Create a free account to save your practice progress, unlock the full mock-test roster, and compete for the Study at Bangalore Scholarship 2026.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/auth" search={{ mode: "up" }} className={btnPrimary}>
            Create free account <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/auth" className={btnGhost}>Sign in</Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Verified exam patterns</span>
          <span className="flex items-center gap-1.5"><Brain className="h-3.5 w-3.5 text-primary" /> AI tutor hints</span>
          <span className="flex items-center gap-1.5"><Trophy className="h-3.5 w-3.5 text-primary" /> Live leaderboard</span>
        </div>
      </section>
    </div>
  );
}
