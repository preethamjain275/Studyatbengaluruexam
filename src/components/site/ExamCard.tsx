import { Link } from "@tanstack/react-router";
import { ArrowRight, Atom, Briefcase, Calculator, Cog, FlaskConical, Landmark, Stethoscope, Award } from "lucide-react";
import type { Exam } from "@/lib/exams";

const ICONS: Record<string, typeof Atom> = {
  kcet: FlaskConical, "neet-ug": Stethoscope, "jee-main": Calculator, "jee-advanced": Atom,
  comedk: Cog, "karnataka-govt": Briefcase, upsc: Landmark, scholarship: Award,
};

export function ExamCard({ exam }: { exam: Exam }) {
  const Icon = ICONS[exam.id] ?? Atom;
  return (
    <Link to="/exams/$examId" params={{ examId: exam.id }} className="surface lift group flex flex-col p-5">
      <div className="flex items-start justify-between">
        <span className="icon-3d h-12 w-12"><Icon className="h-6 w-6" /></span>
        <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">{exam.group}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{exam.name}</h3>
      <p className="mt-1 flex-1 text-sm text-muted-foreground">{exam.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>{exam.subjects.length} subjects · {exam.difficulty}</span>
        <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
