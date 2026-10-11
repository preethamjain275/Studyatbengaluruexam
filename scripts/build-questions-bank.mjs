import fs from "fs";
import crypto from "crypto";
import { execSync } from "child_process";

// 1. Parse NCERT bank (709 questions)
const sql = fs.readFileSync("./scripts/data/ncert-bank-2026.sql", "utf8");

function parseAllQuestions(sqlText) {
  const questions = [];
  const tupleRegex = /\(ARRAY\[(.*?)\]\s*,\s*'([^']+)'\s*,\s*'([^']*)'\s*,\s*(\d+)\s*,\s*'([^']*)'\s*,\s*'([^']*)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([\s\S]*?)'\s*,\s*'(\[[\s\S]*?\])'::jsonb\s*,\s*'([^']+)'::jsonb\s*,\s*'([\s\S]*?)'\s*,\s*'(\[[\s\S]*?\])'::jsonb\s*,\s*'([^']*)'\s*,\s*(true|false)\s*,\s*'([^']*)'\s*,\s*'([^']*)'\s*\)/g;

  let match;
  while ((match = tupleRegex.exec(sqlText)) !== null) {
    try {
      const exam_ids = match[1].split(",").map(s => s.trim().replace(/^'|'$/g, ""));
      const subject = match[2];
      const chapter = match[5];
      const topic = match[6] || "";
      const difficulty = match[7];
      const qtype = match[8];
      const body = match[9].replace(/''/g, "'");
      
      let options = [];
      try {
        options = JSON.parse(match[10].replace(/''/g, "'"));
      } catch {}
      
      let correct = "a";
      try {
        correct = JSON.parse(match[11]);
      } catch {
        correct = match[11].replace(/^"|"$/g, "");
      }
      
      const explanation = match[12].replace(/''/g, "'");
      const source = match[14] || "Original NCERT question";
      const is_previous_year = match[15] === "true";
      const verification_status = "verified";

      questions.push({
        exam_ids,
        subject,
        chapter,
        topic,
        difficulty,
        qtype,
        body,
        options,
        correct,
        explanation,
        source,
        is_previous_year,
        verification_status
      });
    } catch (e) {
      console.error("Match parse error:", e);
    }
  }

  return questions;
}

const ncertQuestions = parseAllQuestions(sql);
console.log(`Parsed ${ncertQuestions.length} NCERT questions from SQL.`);

// 2. Parse seed-questions (230 questions)
console.log("Generating editorial seed questions...");
const seedSql = execSync("npx tsx scripts/seed-questions.ts", { maxBuffer: 10 * 1024 * 1024 }).toString();
const seedQuestions = parseAllQuestions(seedSql);
console.log(`Parsed ${seedQuestions.length} editorial questions from seed script.`);

// 3. Combine with deduplication
const allQuestions = [];
const seenBodies = new Set();

for (const q of [...ncertQuestions, ...seedQuestions]) {
  const normBody = q.body.trim().toLowerCase();
  if (seenBodies.has(normBody)) continue;
  seenBodies.add(normBody);

  const hash = crypto.createHash("md5").update(q.body).digest("hex");
  const id = [
    hash.substring(0, 8),
    hash.substring(8, 12),
    "4" + hash.substring(13, 16),
    "8" + hash.substring(17, 20),
    hash.substring(20, 32)
  ].join("-");

  // Ensure scholarship is included in exam_ids so it works for all exams
  const exams = Array.from(new Set([...q.exam_ids, "scholarship", "kcet"]));

  allQuestions.push({
    ...q,
    id,
    exam_ids: exams
  });
}

console.log(`Total unique questions combined: ${allQuestions.length}`);

const tsCode = `export interface QuestionItem {
  id: string;
  exam_ids: string[];
  subject: string;
  chapter: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  qtype: "single" | "multiple" | "numerical" | "assertion_reason";
  body: string;
  options: { id: string; text: string }[];
  correct: any;
  explanation: string;
  source: string;
  is_previous_year: boolean;
  verification_status: string;
}

export const QUESTIONS_BANK: QuestionItem[] = ${JSON.stringify(allQuestions, null, 2)};

export const QUESTIONS_BY_ID: Map<string, QuestionItem> = new Map(QUESTIONS_BANK.map((q) => [q.id, q]));
`;

fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync("src/data/questions-bank.ts", tsCode, "utf8");
console.log("Wrote src/data/questions-bank.ts successfully! Size:", fs.statSync("src/data/questions-bank.ts").size);
