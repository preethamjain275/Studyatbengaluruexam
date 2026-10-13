import * as fs from "fs";
import * as path from "path";

function scanDir(dir: string, secrets: string[]) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist.`);
    return;
  }
  const files = fs.readdirSync(dir, { recursive: true }) as string[];
  let leakedCount = 0;
  let scannedFiles = 0;

  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isFile() && (f.endsWith(".js") || f.endsWith(".json") || f.endsWith(".html") || f.endsWith(".css") || f.endsWith(".mjs"))) {
      scannedFiles++;
      const content = fs.readFileSync(full, "utf-8");
      for (const s of secrets) {
        if (s && s.length > 8 && content.includes(s)) {
          console.error(`  ✕ LEAK DETECTED: Secret found in client bundle -> ${full}`);
          leakedCount++;
        }
      }
    }
  }

  if (leakedCount === 0) {
    console.log(`  ✓ Scan Passed: Scanned ${scannedFiles} assets in ${dir}. Zero server secrets found!`);
  } else {
    console.error(`  ✕ Scan FAILED: Found ${leakedCount} secret exposures!`);
  }
}

async function runSecretAudit() {
  console.log("=== SECRET HANDLING & BUNDLE LEAKAGE AUDIT ===\n");

  const secrets = [
    process.env["SUPABASE_SERVICE_ROLE_KEY"],
    process.env["SUPABASE_SECRET_KEY"],
    process.env["GEMINI_API_KEY"],
    process.env["GOOGLE_CLIENT_SECRET"],
  ].filter(Boolean) as string[];

  console.log(`Auditing with ${secrets.length} server secret tokens...`);

  // Scan client bundle
  console.log("\n1. Scanning client assets directory (.output/public)...");
  scanDir(".output/public", secrets);

  // Scan public static directory
  console.log("\n2. Scanning public static directory (public)...");
  scanDir("public", secrets);

  // Scan server artifacts to check if secrets are hardcoded vs dynamic
  console.log("\n3. Scanning server bundle (.output/server)...");
  scanDir(".output/server", secrets);

  console.log("\n==============================================");
}

runSecretAudit().catch(console.error);
