import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, Search } from "lucide-react";
import { PageHeader } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { filterSheets, REFERENCES, REVISION_SHEETS, type RevisionSheet } from "@/lib/revision";

export const Route = createFileRoute("/revision")({
  head: () => ({
    meta: [
      { title: "Revision - Study at Bangalore" },
      { name: "description", content: "Physics and mathematics formula sheets, chemistry and biology handbooks, original worked examples and official 2026 NEET and JEE references." },
      { property: "og:title", content: "Revision - Study at Bangalore" },
      { property: "og:description", content: "NCERT-aligned revision handbooks, formula sheets and official NEET and JEE references." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RevisionPage,
});

function RevisionPage() {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("All subjects");
  const [exam, setExam] = useState("All exams");
  const [selected, setSelected] = useState<RevisionSheet | null>(null);
  const sheets = filterSheets(query, subject, exam);
  return (
    <div className="space-y-10">
      <PageHeader eyebrow="Revision library" title="Handbooks & formula sheets">Physics, mathematics, chemistry and biology · NEET UG & JEE · Classes XI–XII</PageHeader>
      {selected ? <SheetReader key={selected.id} sheet={selected} onBack={() => setSelected(null)} /> : <section aria-label="Revision sheets">
        <div className="mb-6 flex flex-wrap items-end gap-3">
          <label className="min-w-0 flex-1 basis-56 text-sm font-medium">Search sheets
            <span className="mt-2 flex h-10 items-center gap-2 rounded-md border bg-card px-3"><Search className="h-4 w-4 shrink-0 text-muted-foreground" /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Chapter, topic or formula…" className="min-w-0 w-full bg-transparent font-normal outline-none" /></span>
          </label>
          <label className="text-sm font-medium">Subject<select value={subject} onChange={e => setSubject(e.target.value)} className="mt-2 block h-10 max-w-full rounded-md border bg-card px-3 font-normal">{["All subjects", "Physics", "Mathematics", "Chemistry", "Biology"].map(x => <option key={x}>{x}</option>)}</select></label>
          <label className="text-sm font-medium">Exam<select value={exam} onChange={e => setExam(e.target.value)} className="mt-2 block h-10 max-w-full rounded-md border bg-card px-3 font-normal">{["All exams", "NEET UG", "JEE Main", "JEE Advanced"].map(x => <option key={x}>{x}</option>)}</select></label>
        </div>
        <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">{sheets.length} of {REVISION_SHEETS.length} sheets</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sheets.map(sheet => <article key={sheet.id} className="flex min-w-0 flex-col rounded-lg border bg-card p-5">
            <div className="mb-4 flex items-center justify-between gap-2"><BookOpen className="h-5 w-5 text-primary" /><span className="text-xs font-medium text-muted-foreground">{sheet.kind}</span></div>
            <p className="mb-2 text-xs font-semibold text-primary">{sheet.subject} · XI–XII</p>
            <h2 className="text-lg font-bold">{sheet.title}</h2><p className="mt-2 text-sm text-muted-foreground">{sheet.summary}</p>
            <p className="mb-5 mt-4 text-xs text-muted-foreground">{sheet.exams.join(" · ")}</p>
            <Button className="mt-auto w-full justify-between" variant="outline" onClick={() => setSelected(sheet)} aria-label={`Open ${sheet.title}`}>Open sheet<ArrowRight /></Button>
          </article>)}
        </div>
        {sheets.length === 0 && <div className="border-y py-8 text-center"><p className="font-semibold">No matching sheets</p><Button variant="link" onClick={() => { setQuery(""); setSubject("All subjects"); setExam("All exams"); }}>Clear filters</Button></div>}
      </section>}
      <section className="border-t pt-8" aria-labelledby="references-title">
        <div className="mb-6"><p className="mb-2 text-xs font-semibold text-primary">2026 examination cycle</p><h2 id="references-title" className="text-2xl font-bold">Official reference desk</h2><p className="mt-2 text-sm text-muted-foreground">Official documents take precedence over preparation notes. References checked 9 October 2026; consult the exam sites for subsequent notices.</p></div>
        <div className="mb-6 border-l-4 border-primary bg-accent p-4 text-sm"><p className="font-semibold">JEE Advanced: two papers, three hours each</p><p className="mt-1">Both papers are compulsory. Question types, negative marks and any partial credit follow the instructions of the specific paper and section - not a universal +4 / −1 rule.</p></div>
        <div className="divide-y border-y">{REFERENCES.map(ref => <article key={ref.url} className="flex flex-col justify-between gap-3 py-5 sm:flex-row sm:items-start"><div className="min-w-0"><p className="text-xs font-medium text-primary">{ref.publisher}</p><h3 className="mt-1 font-semibold">{ref.title}</h3><p className="mt-1 max-w-3xl text-sm text-muted-foreground">{ref.note}</p></div><Button asChild variant="outline" className="shrink-0 self-start"><a href={ref.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${ref.title}`}>View source<ExternalLink /></a></Button></article>)}</div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">The handbooks and worked examples are original Study at Bangalore summaries based on standard NCERT concepts, not official papers or copied coaching notes. They are concise revision aids, not complete syllabus coverage. Coaching links are supplementary and do not imply endorsement.</p>
      </section>
    </div>
  );
}

function SheetReader({ sheet, onBack }: { sheet: RevisionSheet; onBack: () => void }) {
  const [revealed, setRevealed] = useState(false);
  return <section aria-labelledby="sheet-title" className="min-w-0">
    <Button variant="ghost" onClick={onBack} className="mb-5"><ArrowLeft />All sheets</Button>
    <p className="text-sm font-medium text-primary">{sheet.subject} · {sheet.kind} · {sheet.exams.join(" / ")}</p>
    <h2 id="sheet-title" className="mt-2 text-2xl font-bold">{sheet.title}</h2>
    <p className="mt-2 text-sm text-muted-foreground">Original revision summary · {sheet.reference}</p>
    <div className="mt-6 grid gap-x-8 md:grid-cols-2">{sheet.sections.map(section => <div key={section.title} className="border-t py-5"><h3 className="mb-3 font-semibold">{section.title}</h3><ul className="space-y-3 text-sm leading-relaxed">{section.lines.map(line => <li key={line} className="break-words">{line}</li>)}</ul></div>)}</div>
    <div className="mt-4 border-y py-6"><p className="text-xs font-semibold text-primary">Original practice example · Not a previous-year question</p><h3 className="mt-3 font-semibold">{sheet.practice.question}</h3><Button variant="outline" className="mt-4" onClick={() => setRevealed(v => !v)} aria-expanded={revealed}>{revealed ? "Hide solution" : "Show worked solution"}</Button>
      {revealed && <div className="mt-4" aria-live="polite"><p className="font-bold text-primary">Answer: {sheet.practice.answer}</p><ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">{sheet.practice.steps.map(step => <li key={step}>{step}</li>)}</ol></div>}
    </div>
  </section>;
}
