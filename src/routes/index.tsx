import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, NotebookPen, Timer, LineChart } from "lucide-react";
import { EXAMS } from "@/lib/exams";
import { ExamCard } from "@/components/site/ExamCard";
import { btnGhost, btnPrimary } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Study at Bangalore - Scholarship Exam & Exam Preparation" },
      { name: "description", content: "Prepare for KCET, NEET, JEE, COMEDK, government exams and UPSC, and take the Study at Bangalore Scholarship Exam." },
      { property: "og:title", content: "Study at Bangalore - Scholarship Exam & Exam Preparation" },
      { property: "og:description", content: "Practice, mock tests and the Study at Bangalore Scholarship Exam in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURES = [
  { icon: NotebookPen, title: "Chapter practice", text: "Topic-wise sets by difficulty." },
  { icon: Timer, title: "Full mock tests", text: "Real exam timing and marking." },
  { icon: LineChart, title: "Performance insights", text: "Spot weak chapters early." },
];

function Index() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 pt-6 md:grid-cols-2 md:pt-12">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-semibold text-primary">
            <GraduationCap className="h-3.5 w-3.5" /> Scholarship Exam portal now open
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Your path to the <span className="text-brand">right college</span> starts here.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Prepare for entrance, government and civil-service exams, and earn a scholarship with Study at Bangalore.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/scholarship-exam" className={btnPrimary}>Scholarship Exam <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/practice" className={btnGhost}>Start practising</Link>
          </div>
        </div>
        <div className="grid gap-4">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="surface lift flex items-center gap-4 p-5 animate-in fade-in slide-in-from-right-4" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}>
              <span className="icon-3d h-12 w-12"><f.icon className="h-6 w-6" /></span>
              <div><p className="font-semibold">{f.title}</p><p className="text-sm text-muted-foreground">{f.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Choose your exam</h2>
          <Link to="/scholarship-exam" className="text-sm font-semibold text-primary">Open portal →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMS.map((e) => <ExamCard key={e.id} exam={e} />)}
        </div>
      </section>
    </div>
  );
}
