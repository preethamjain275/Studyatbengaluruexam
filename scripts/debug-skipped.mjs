import fs from "fs";

const sql = fs.readFileSync("./scripts/data/ncert-bank-2026.sql", "utf8");
const lines = sql.split("\n");

for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  if (!trimmed.startsWith("(ARRAY[")) continue;
  
  const arrayMatch = trimmed.match(/\(ARRAY\[(.*?)\]\s*,\s*/);
  const rest = trimmed.slice(arrayMatch[0].length);
  const parts = [];
  let inQuote = false, quoteChar = "", current = "";
  for (let j = 0; j < rest.length; j++) {
    const ch = rest[j];
    if (inQuote) {
      if (ch === quoteChar) {
        if (rest[j + 1] === quoteChar) {
          current += quoteChar;
          j++;
        } else {
          inQuote = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === "'" || ch === '"') {
        inQuote = true;
        quoteChar = ch;
      } else if (ch === "," || (ch === ")" && (j === rest.length - 1 || rest[j + 1] === "," || rest[j + 1] === ";"))) {
        parts.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
  }
  if (current.trim()) parts.push(current.trim());

  let rawOptions = parts[8]?.replace(/::jsonb$/, "") || "[]";
  let opts = [];
  try {
    opts = JSON.parse(rawOptions);
  } catch {}

  if (!opts.length) {
    console.log("Line:", i);
    console.log("parts length:", parts.length);
    console.log("parts[0] subject:", parts[0]);
    console.log("parts[3] chapter:", parts[3]);
    console.log("parts[4] topic:", parts[4]);
    console.log("parts[5] difficulty:", parts[5]);
    console.log("parts[6] qtype:", parts[6]);
    console.log("parts[7] body:", parts[7]?.slice(0, 50));
    console.log("parts[8] options:", parts[8]?.slice(0, 50));
    console.log("parts[9] correct:", parts[9]);
    break;
  }
}
