// Configurable exam catalogue. Add or edit exams here; every page reads from this list.
export type Subject = { name: string; chapters: string[] };
export type Exam = {
  id: string;
  name: string;
  short: string;
  group: "Entrance" | "Government" | "Civil Services" | "Scholarship";
  description: string;
  format: string;
  difficulty: "Moderate" | "High" | "Very High";
  subjects: Subject[];
};

export const EXAMS: Exam[] = [
  {
    id: "kcet", name: "Karnataka CET", short: "KCET", group: "Entrance",
    description: "State entrance for engineering, agriculture and allied courses in Karnataka.",
    format: "180 MCQs · Physics, Chemistry, Mathematics, Biology · no negative marking",
    difficulty: "Moderate",
    subjects: [
      { name: "Physics", chapters: ["Electrostatics", "Current Electricity", "Optics", "Modern Physics"] },
      { name: "Chemistry", chapters: ["Solutions", "Electrochemistry", "Organic Compounds", "Coordination Compounds"] },
      { name: "Mathematics", chapters: ["Matrices", "Calculus", "Vectors", "Probability"] },
      { name: "Biology", chapters: ["Reproduction", "Genetics", "Biotechnology", "Ecology"] },
    ],
  },
  {
    id: "neet-ug", name: "NEET UG", short: "NEET", group: "Entrance",
    description: "National medical entrance for MBBS, BDS and AYUSH courses.",
    format: "180 MCQs · 720 marks · +4 / −1 marking",
    difficulty: "High",
    subjects: [
      { name: "Physics", chapters: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics"] },
      { name: "Chemistry", chapters: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
      { name: "Botany", chapters: ["Plant Physiology", "Genetics", "Ecology"] },
      { name: "Zoology", chapters: ["Human Physiology", "Animal Kingdom", "Evolution"] },
    ],
  },
  {
    id: "jee-main", name: "JEE Main", short: "JEE M", group: "Entrance",
    description: "National engineering entrance for NITs, IIITs and gateway to JEE Advanced.",
    format: "75 questions · MCQ + numerical · +4 / −1 marking",
    difficulty: "High",
    subjects: [
      { name: "Physics", chapters: ["Kinematics", "Rotational Motion", "Waves", "Semiconductors"] },
      { name: "Chemistry", chapters: ["Chemical Bonding", "Equilibrium", "Hydrocarbons", "p-Block"] },
      { name: "Mathematics", chapters: ["Complex Numbers", "Conic Sections", "Integration", "Differential Equations"] },
    ],
  },
  {
    id: "jee-advanced", name: "JEE Advanced", short: "JEE A", group: "Entrance",
    description: "Entrance to the IITs with multi-concept and multi-correct problems.",
    format: "2 compulsory papers · 3 hours each · question types and marking follow each paper's instructions",
    difficulty: "Very High",
    subjects: [
      { name: "Physics", chapters: ["Mechanics", "Electrodynamics", "Modern Physics"] },
      { name: "Chemistry", chapters: ["Physical", "Organic", "Inorganic"] },
      { name: "Mathematics", chapters: ["Algebra", "Calculus", "Coordinate Geometry"] },
    ],
  },
  {
    id: "comedk", name: "COMEDK UGET", short: "COMEDK", group: "Entrance",
    description: "Entrance for private engineering colleges in Karnataka.",
    format: "180 MCQs · Physics, Chemistry, Mathematics · no negative marking",
    difficulty: "Moderate",
    subjects: [
      { name: "Physics", chapters: ["Laws of Motion", "Gravitation", "Magnetism"] },
      { name: "Chemistry", chapters: ["Atomic Structure", "Thermodynamics", "Polymers"] },
      { name: "Mathematics", chapters: ["Trigonometry", "Sequences", "3D Geometry"] },
    ],
  },
  {
    id: "karnataka-govt", name: "Karnataka Government Exams", short: "KPSC/KEA", group: "Government",
    description: "KPSC, KEA, FDA/SDA, PSI and other state recruitment examinations.",
    format: "Objective MCQs · General Studies, Kannada, English, Aptitude · negative marking varies",
    difficulty: "Moderate",
    subjects: [
      { name: "General Studies", chapters: ["Karnataka History", "Indian Polity", "Geography of Karnataka", "Current Affairs"] },
      { name: "General Kannada", chapters: ["Grammar", "Comprehension", "Vocabulary"] },
      { name: "General English", chapters: ["Grammar", "Comprehension", "Vocabulary"] },
      { name: "Mental Ability", chapters: ["Reasoning", "Arithmetic", "Data Interpretation"] },
    ],
  },
  {
    id: "upsc", name: "UPSC & Civil Services", short: "UPSC", group: "Civil Services",
    description: "Civil Services Prelims, CSAT and state civil-service examinations.",
    format: "GS Paper I (100 MCQs) + CSAT (80 MCQs, qualifying) · −1/3 marking",
    difficulty: "Very High",
    subjects: [
      { name: "History & Culture", chapters: ["Ancient India", "Medieval India", "Modern India", "Art & Culture"] },
      { name: "Polity & Governance", chapters: ["Constitution", "Parliament", "Judiciary", "Local Government"] },
      { name: "Economy", chapters: ["National Income", "Banking", "Budget", "Schemes"] },
      { name: "Environment & Geography", chapters: ["Physical Geography", "Biodiversity", "Climate Change"] },
      { name: "CSAT", chapters: ["Comprehension", "Logical Reasoning", "Basic Numeracy"] },
    ],
  },
  {
    id: "scholarship", name: "Scholarship & Aptitude", short: "Scholarship", group: "Scholarship",
    description: "Study at Bangalore Scholarship Exam, NMMS, NTSE-style and aptitude tests.",
    format: "Mental Ability + Scholastic Aptitude MCQs · timed sections",
    difficulty: "Moderate",
    subjects: [
      { name: "Mental Ability", chapters: ["Series", "Analogies", "Coding-Decoding", "Puzzles"] },
      { name: "Scholastic Aptitude", chapters: ["Science", "Mathematics", "Social Science"] },
      { name: "Quantitative Aptitude", chapters: ["Percentages", "Ratios", "Time & Work"] },
    ],
  },
];

export const getExam = (id: string) => EXAMS.find((e) => e.id === id);
