import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookOpen, Layers, ListChecks, Timer, ArrowRight } from "lucide-react";
import { getExam } from "@/lib/exams";
import { Card, PageHeader, btnPrimary, btnGhost } from "@/components/site/ui";
import { presetsFor, TRACKS } from "@/lib/engine/patterns";

export const Route = createFileRoute("/exams/$examId")({
  loader: ({ params }) => {
    const exam = getExam(params.examId);
    if (!exam) throw notFound();
    return { exam };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Exam not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.exam.name} Preparation - Study at Bangalore`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.exam.description },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.exam.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ExamPage,
});

function ExamPage() {
  const { exam } = Route.useLoaderData();
  const presets = presetsFor(exam.id);

  return (
    <div>
      <Link to="/scholarship-exam" className="text-sm font-semibold text-primary">← All exams</Link>
      <div className="mt-4"><PageHeader eyebrow={exam.group} title={exam.name}>{exam.description}</PageHeader></div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card title="Exam format" icon={ListChecks}><p className="text-sm text-muted-foreground">{exam.format}</p></Card>
        <Card title="Difficulty" icon={Layers}><p className="text-2xl font-bold text-brand">{exam.difficulty}</p></Card>
        <Card title="Subjects" icon={BookOpen}><p className="text-2xl font-bold">{exam.subjects.length}</p></Card>
      </div>

      <h2 className="mb-4 text-xl font-bold">Syllabus & chapters</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {exam.subjects.map((s) => (
          <Card key={s.name} title={s.name} icon={BookOpen}>
            <ul className="flex flex-wrap gap-2">
              {s.chapters.map((c) => <li key={c} className="rounded-lg bg-muted px-3 py-1.5 text-sm">{c}</li>)}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Card title="Mastery Practice Sets" icon={ListChecks}>
          <p className="text-xs text-muted-foreground mb-3">
            Topic-wise practice across Easy, Medium, and Hard with verified solutions.
          </p>
          <p className="text-xs font-semibold text-primary mb-4 truncate">
            {(TRACKS[exam.id] ?? []).map((t) => t.name).join(" · ")}
          </p>
          <Link to="/mastery/$examId" params={{ examId: exam.id }} className={`${btnPrimary} w-full justify-center text-xs`}>
            Start Practice <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </Card>

        <Card title="Timed Mock Tests" icon={Timer}>
          <p className="text-xs text-muted-foreground mb-3">
            Real examination patterns with official sectional timing and negative marking.
          </p>
          <p className="text-xs font-semibold text-primary mb-4 truncate">
            {presets.length > 0
              ? `${presets.length} official pattern simulation${presets.length > 1 ? "s" : ""}`
              : "Official exam simulations"}
          </p>
          {presets.length > 0 && presets[0] ? (
            <Link to="/mock/$presetId" params={{ presetId: presets[0].id }} className={`${btnPrimary} w-full justify-center text-xs`}>
              Take Mock Test <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          ) : (
            <Link to="/mock-tests" className={`${btnPrimary} w-full justify-center text-xs`}>
              Browse All Mocks <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          )}
        </Card>

        <Card title="Revision & Formula Sheets" icon={BookOpen}>
          <p className="text-xs text-muted-foreground mb-3">
            NCERT-aligned handbooks, high-yield formula sheets, and original worked examples.
          </p>
          <p className="text-xs font-semibold text-primary mb-4">
            Classes XI–XII · {exam.subjects.length} Subjects
          </p>
          <Link to="/revision" className={`${btnGhost} w-full justify-center text-xs border`}>
            Open Revision Desk <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </Card>
      </div>
    </div>
  );
}
