import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookOpen, FileClock, Layers, ListChecks, Timer } from "lucide-react";
import { getExam } from "@/lib/exams";
import { Card, EmptyState, PageHeader } from "@/components/site/ui";

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
        <Card title="Practice sets" icon={ListChecks}><EmptyState icon={ListChecks} title="Question bank coming soon">Chapter-wise sets are being prepared.</EmptyState></Card>
        <Card title="Previous-year style" icon={FileClock}><EmptyState icon={FileClock} title="Coming soon">PYQ-style papers will be added here.</EmptyState></Card>
        <Card title="Full mock tests" icon={Timer}><EmptyState icon={Timer} title="Coming soon">Timed mocks with real marking.</EmptyState></Card>
      </div>
    </div>
  );
}
