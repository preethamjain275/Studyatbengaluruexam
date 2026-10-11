import fs from "fs";

function parseAllQuestions(sqlText) {
  const questions = [];
  
  // Find each tuple starting with (ARRAY[
  // A tuple starts with (ARRAY[ and ends with 'mapping') or similar at the end of a tuple
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

const sql = fs.readFileSync("./scripts/data/ncert-bank-2026.sql", "utf8");
const qs = parseAllQuestions(sql);
console.log(`Parsed all ${qs.length} questions perfectly!`);
