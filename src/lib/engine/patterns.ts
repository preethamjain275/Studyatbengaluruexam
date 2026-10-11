// Exam-pattern presets. Every exam keeps its own settings - never a universal pattern.
// Official presets mirror the latest bulletin we checked; re-verify against each year's
// information bulletin before publishing results.
export type Level = "easy" | "medium" | "hard" | "expert";
export type QType = "single" | "multiple" | "numerical" | "assertion_reason";

export type Marking = {
  correct: number;
  incorrect: number;
  unanswered: number;
  /** Multiple-correct only: marks per correct option chosen when no wrong option is chosen. */
  partialPerCorrectOption?: number;
};

export type Section = { name: string; subjects: string[]; questions: number; types: QType[] };

export type ExamPreset = {
  id: string;
  examId: string;
  name: string;
  kind: "official-pattern" | "simulation";
  durationMin: number;
  sections: Section[];
  marking: Partial<Record<QType, Marking>>;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  backtracking: boolean;
  sectionLocked: boolean;
  calculator: "not permitted" | "on-screen only";
  fullscreen: boolean;
  showSolutions: boolean;
  language: string;
  instructions: string[];
  source: { label: string; url: string };
};

export const LEVELS: Level[] = ["easy", "medium", "hard", "expert"];
export const LEVEL_LABEL: Record<Level, string> = { easy: "Easy", medium: "Medium", hard: "Hard", expert: "Expert" };

const MCQ = (c: number, i: number): Marking => ({ correct: c, incorrect: i, unanswered: 0 });

export const PRESETS: ExamPreset[] = [
  {
    id: "kcet-2026", examId: "kcet", name: "KCET - subject paper (60 Q, 80 min)", kind: "official-pattern",
    durationMin: 80,
    sections: [{ name: "Physics", subjects: ["Physics"], questions: 60, types: ["single"] }],
    marking: { single: MCQ(1, 0) },
    shuffleQuestions: false, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: true, showSolutions: true, language: "English",
    instructions: ["Each subject is a separate 60-question, 80-minute paper.", "1 mark per correct answer; no negative marking."],
    source: { label: "KEA UGCET information bulletin", url: "https://cetonline.karnataka.gov.in/kea/" },
  },
  {
    id: "neet-ug-2026", examId: "neet-ug", name: "NEET UG 2026 - full paper", kind: "official-pattern",
    durationMin: 180,
    sections: [
      { name: "Physics", subjects: ["Physics"], questions: 45, types: ["single", "assertion_reason"] },
      { name: "Chemistry", subjects: ["Chemistry"], questions: 45, types: ["single", "assertion_reason"] },
      { name: "Botany", subjects: ["Botany"], questions: 45, types: ["single", "assertion_reason"] },
      { name: "Zoology", subjects: ["Zoology"], questions: 45, types: ["single", "assertion_reason"] },
    ],
    marking: { single: MCQ(4, -1), assertion_reason: MCQ(4, -1) },
    shuffleQuestions: false, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: true, showSolutions: true, language: "English",
    instructions: ["180 compulsory questions, 180 minutes, 720 marks.", "+4 for a correct answer, −1 for an incorrect answer, 0 if unanswered."],
    source: { label: "NEET UG 2026 information bulletin (NTA)", url: "https://neet.nta.nic.in/" },
  },
  {
    id: "jee-main-p1-2026", examId: "jee-main", name: "JEE Main 2026 - Paper 1 (B.E./B.Tech)", kind: "official-pattern",
    durationMin: 180,
    sections: ["Physics", "Chemistry", "Mathematics"].map((s) => ({ name: s, subjects: [s], questions: 25, types: ["single", "numerical"] as QType[] })),
    marking: { single: MCQ(4, -1), numerical: MCQ(4, -1) },
    shuffleQuestions: false, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: true, showSolutions: true, language: "English",
    instructions: ["75 questions: per subject 20 MCQs and 5 numerical-value questions.", "+4 correct, −1 incorrect for both MCQ and numerical questions; 0 if unanswered."],
    source: { label: "JEE Main 2026 information bulletin (NTA)", url: "https://jeemain.nta.nic.in/" },
  },
  ...[1, 2].map((p): ExamPreset => ({
    id: `jee-adv-p${p}-2026`, examId: "jee-advanced", name: `JEE Advanced 2026 - Paper ${p} (simulation)`, kind: "simulation",
    durationMin: 180,
    sections: ["Physics", "Chemistry", "Mathematics"].map((s) => ({ name: s, subjects: [s], questions: 16, types: ["single", "multiple", "numerical"] as QType[] })),
    marking: { single: MCQ(3, -1), multiple: { correct: 4, incorrect: -2, unanswered: 0, partialPerCorrectOption: 1 }, numerical: MCQ(4, 0) },
    shuffleQuestions: false, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: true, showSolutions: true, language: "English",
    instructions: [
      `Paper ${p} of 2 - both papers are compulsory and each lasts three hours.`,
      "Section types and marking follow each paper's own instructions; this simulation uses: single-correct +3/−1, multiple-correct +4 full / +1 per correct option partial / −2, numerical +4/0.",
    ],
    source: { label: "JEE Advanced 2026 information brochure", url: "https://jeeadv.ac.in/documents/IBEnglish_2026.pdf" },
  })),
  {
    id: "comedk-2026", examId: "comedk", name: "COMEDK UGET - full paper", kind: "official-pattern",
    durationMin: 180,
    sections: ["Physics", "Chemistry", "Mathematics"].map((s) => ({ name: s, subjects: [s], questions: 60, types: ["single"] as QType[] })),
    marking: { single: MCQ(1, 0) },
    shuffleQuestions: false, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: true, showSolutions: true, language: "English",
    instructions: ["180 questions in 180 minutes.", "1 mark per correct answer; no negative marking."],
    source: { label: "COMEDK UGET information brochure", url: "https://www.comedk.org/" },
  },
  {
    id: "kpsc-style", examId: "karnataka-govt", name: "Karnataka recruitment - General Studies (simulation)", kind: "simulation",
    durationMin: 120,
    sections: [{ name: "General Studies", subjects: ["General Studies", "Mental Ability"], questions: 100, types: ["single"] }],
    marking: { single: MCQ(1, -0.25) },
    shuffleQuestions: true, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: false, showSolutions: true, language: "English / Kannada",
    instructions: ["Marking differs per notification - check the specific KPSC/KEA notification.", "This simulation uses +1 / −0.25."],
    source: { label: "KPSC notifications", url: "https://kpsc.kar.nic.in/" },
  },
  {
    id: "upsc-gs1-2026", examId: "upsc", name: "UPSC Prelims - GS Paper I", kind: "official-pattern",
    durationMin: 120,
    sections: [{ name: "General Studies", subjects: ["General Studies"], questions: 100, types: ["single"] }],
    marking: { single: MCQ(2, -0.66) },
    shuffleQuestions: false, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: false, showSolutions: true, language: "English / Hindi",
    instructions: ["100 questions, 2 hours, 200 marks.", "One-third of the marks for a question are deducted for a wrong answer."],
    source: { label: "UPSC Civil Services examination notice", url: "https://upsc.gov.in/" },
  },
  {
    id: "upsc-csat-2026", examId: "upsc", name: "UPSC Prelims - CSAT (qualifying)", kind: "official-pattern",
    durationMin: 120,
    sections: [{ name: "CSAT", subjects: ["Mental Ability"], questions: 80, types: ["single"] }],
    marking: { single: MCQ(2.5, -0.83) },
    shuffleQuestions: false, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: false, showSolutions: true, language: "English / Hindi",
    instructions: ["80 questions, 2 hours, qualifying at 33%.", "One-third of the marks for a question are deducted for a wrong answer."],
    source: { label: "UPSC Civil Services examination notice", url: "https://upsc.gov.in/" },
  },
  {
    id: "sab-scholarship", examId: "scholarship", name: "Study at Bangalore Scholarship Test (simulation)", kind: "simulation",
    durationMin: 60,
    sections: [
      { name: "Mental Ability", subjects: ["Mental Ability"], questions: 30, types: ["single"] },
      { name: "Scholastic Aptitude", subjects: ["Physics", "Chemistry", "Mathematics", "Botany", "Zoology"], questions: 30, types: ["single"] },
    ],
    marking: { single: MCQ(1, 0) },
    shuffleQuestions: true, shuffleOptions: false, backtracking: true, sectionLocked: false,
    calculator: "not permitted", fullscreen: true, showSolutions: true, language: "English",
    instructions: ["60 questions in 60 minutes.", "1 mark per correct answer; no negative marking."],
    source: { label: "Study at Bangalore", url: "https://studyatbangalore.com" },
  },
];

export const presetsFor = (examId: string) => PRESETS.filter((p) => p.examId === examId);
export const getPreset = (id: string) => PRESETS.find((p) => p.id === id);

/** Mastery tracks per exam (practice mode). */
const PCB_MIX = { name: "PCB mix", subjects: ["Physics", "Chemistry", "Botany", "Zoology"] };
const PCM_MIX = { name: "PCM mix", subjects: ["Physics", "Chemistry", "Mathematics"] };
export const TRACKS: Record<string, { name: string; subjects: string[] }[]> = {
  kcet: [{ name: "Physics", subjects: ["Physics"] }, { name: "Chemistry", subjects: ["Chemistry"] }, { name: "Mathematics", subjects: ["Mathematics"] }, { name: "Biology", subjects: ["Botany", "Zoology"] }, PCM_MIX, PCB_MIX],
  "neet-ug": [{ name: "Physics", subjects: ["Physics"] }, { name: "Chemistry", subjects: ["Chemistry"] }, { name: "Biology", subjects: ["Botany", "Zoology"] }, PCB_MIX],
  "jee-main": [{ name: "Physics", subjects: ["Physics"] }, { name: "Chemistry", subjects: ["Chemistry"] }, { name: "Mathematics", subjects: ["Mathematics"] }, PCM_MIX],
  "jee-advanced": [{ name: "Physics", subjects: ["Physics"] }, { name: "Chemistry", subjects: ["Chemistry"] }, { name: "Mathematics", subjects: ["Mathematics"] }, PCM_MIX],
  comedk: [{ name: "Physics", subjects: ["Physics"] }, { name: "Chemistry", subjects: ["Chemistry"] }, { name: "Mathematics", subjects: ["Mathematics"] }, PCM_MIX],
  "karnataka-govt": [{ name: "General Studies", subjects: ["General Studies"] }, { name: "Mental Ability", subjects: ["Mental Ability"] }],
  scholarship: [
    { name: "Physics", subjects: ["Physics"] },
    { name: "Chemistry", subjects: ["Chemistry"] },
    { name: "Mathematics", subjects: ["Mathematics"] },
    { name: "Biology", subjects: ["Botany", "Zoology"] },
    PCM_MIX,
    PCB_MIX,
    { name: "Mental Ability", subjects: ["Mental Ability"] },
  ],
  upsc: [{ name: "General Studies", subjects: ["General Studies"] }, { name: "CSAT", subjects: ["Mental Ability"] }],
};

export const PRACTICE_SET_SIZE = 10;
export const PRACTICE_SECONDS_PER_Q: Record<Level, number> = { easy: 60, medium: 90, hard: 120, expert: 180 };
export const PRACTICE_MARKING: Marking = { correct: 1, incorrect: 0, unanswered: 0, partialPerCorrectOption: 0 };

/** Mock size when the bank has fewer verified questions than the official count: a labelled sectional simulation. */
export function plannedMock(preset: ExamPreset, available: Record<string, number>) {
  const sections = preset.sections.map((s) => ({ ...s, planned: Math.min(s.questions, available[s.name] ?? 0) }));
  const official = sections.reduce((a, s) => a + s.questions, 0);
  const planned = sections.reduce((a, s) => a + s.planned, 0);
  const full = planned === official;
  const durationMin = full ? preset.durationMin : Math.max(1, Math.round((preset.durationMin * planned) / Math.max(1, official)));
  return { sections, official, planned, full, durationMin };
}
