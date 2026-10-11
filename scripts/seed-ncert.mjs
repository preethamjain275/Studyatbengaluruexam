import fs from "fs";

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
      console.error("Parse error:", e);
    }
  }

  return questions;
}

async function runSeed() {
  const SUPABASE_URL = process.env.SUPABASE_URL || "https://fbyvydtakpcklthvmdrk.supabase.co";
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "sb_secret_zt29oiVvf3Dcvsje_5BYlQ_s3GT5cZn";

  console.log("Reading ncert-bank-2026.sql...");
  const sql = fs.readFileSync("./scripts/data/ncert-bank-2026.sql", "utf8");
  const qs = parseAllQuestions(sql);
  console.log(`Parsed all ${qs.length} questions.`);

  // First clear old questions to avoid duplicates and re-insert cleanly
  console.log("Clearing and re-inserting all questions...");
  await fetch(`${SUPABASE_URL}/rest/v1/questions?id=neq.00000000-0000-0000-0000-000000000000`, {
    method: "DELETE",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });

  let inserted = 0;
  const batchSize = 40;
  for (let i = 0; i < qs.length; i += batchSize) {
    const batch = qs.slice(i, i + batchSize);
    const res = await fetch(`${SUPABASE_URL}/rest/v1/questions`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(batch)
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`Batch ${i / batchSize + 1} failed:`, errText);
    } else {
      inserted += batch.length;
      console.log(`Inserted batch ${i / batchSize + 1} (${inserted}/${qs.length})`);
    }
  }

  console.log(`\nDONE! All ${inserted} questions uploaded into Supabase successfully!`);
}

runSeed().catch(console.error);
