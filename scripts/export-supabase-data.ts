import * as fs from "fs";
import * as path from "path";
import { supabaseAdmin } from "../src/integrations/supabase/client.server";

async function exportSupabaseData() {
  console.log("=== EXPORTING DATA FROM SUPABASE FOR BLUEHOST MIGRATION ===\n");

  const tables = ["profiles", "user_roles", "attempts", "questions", "announcements"];
  const exportData: Record<string, any[]> = {};

  for (const tbl of tables) {
    try {
      const { data, error } = await supabaseAdmin.from(tbl).select("*");
      if (error) {
        console.warn(`  Warning fetching [${tbl}]: ${error.message}`);
        exportData[tbl] = [];
      } else {
        exportData[tbl] = data || [];
        console.log(`  ✓ Extracted [${tbl}]: ${exportData[tbl].length} records`);
      }
    } catch (err: any) {
      console.warn(`  Exception fetching [${tbl}]: ${err.message}`);
      exportData[tbl] = [];
    }
  }

  // Also extract auth users list using admin client if permitted
  try {
    const { data: usersData, error: uErr } = await supabaseAdmin.auth.admin.listUsers();
    if (!uErr && usersData?.users) {
      exportData["auth_users"] = usersData.users.map((u) => ({
        id: u.id,
        email: u.email,
        created_at: u.created_at,
        user_metadata: u.user_metadata,
      }));
      console.log(`  ✓ Extracted [auth_users]: ${exportData["auth_users"].length} user accounts`);
    }
  } catch (uErr: any) {
    console.warn(`  Could not list auth users: ${uErr.message}`);
  }

  // Write JSON Snapshot
  const outDir = path.resolve(process.cwd(), "scripts/data");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const snapshotFile = path.join(outDir, `supabase-migration-export-${Date.now()}.json`);
  fs.writeFileSync(snapshotFile, JSON.stringify(exportData, null, 2), "utf-8");
  console.log(`\n✓ Snapshot written to: ${snapshotFile}`);

  // Generate Bluehost PostgreSQL SQL migration file
  const sqlFile = path.join(outDir, "bluehost-postgres-seed.sql");
  let sql = `-- ========================================================================\n`;
  sql += `-- Study at Bangalore — Bluehost PostgreSQL Seed Migration\n`;
  sql += `-- Generated on ${new Date().toISOString()}\n`;
  sql += `-- ========================================================================\n\n`;

  // Insert Profiles
  if (exportData["profiles"]?.length > 0) {
    sql += `-- 1. Seed Profiles\n`;
    for (const p of exportData["profiles"]) {
      const id = p.id;
      const name = (p.display_name || "Student").replace(/'/g, "''");
      const email = (p.email || "").replace(/'/g, "''");
      const standard = (p.standard || "12th Standard").replace(/'/g, "''");
      const stream = (p.stream || "PCMB").replace(/'/g, "''");
      sql += `INSERT INTO public.profiles (id, display_name, email, standard, stream, created_at) VALUES ('${id}', '${name}', '${email}', '${standard}', '${stream}', '${p.created_at || new Date().toISOString()}') ON CONFLICT (id) DO NOTHING;\n`;
    }
    sql += `\n`;
  }

  // Insert User Roles
  if (exportData["user_roles"]?.length > 0) {
    sql += `-- 2. Seed User Roles\n`;
    for (const r of exportData["user_roles"]) {
      sql += `INSERT INTO public.user_roles (id, user_id, role, created_at) VALUES ('${r.id}', '${r.user_id}', '${r.role}', '${r.created_at || new Date().toISOString()}') ON CONFLICT (id) DO NOTHING;\n`;
    }
    sql += `\n`;
  }

  // Insert Attempts
  if (exportData["attempts"]?.length > 0) {
    sql += `-- 3. Seed Attempts\n`;
    for (const a of exportData["attempts"]) {
      const answersJson = JSON.stringify(a.answers || {}).replace(/'/g, "''");
      sql += `INSERT INTO public.attempts (id, user_id, exam_id, mode, status, score, percentage, answers, created_at) VALUES ('${a.id}', '${a.user_id}', '${a.exam_id}', '${a.mode}', '${a.status}', ${a.score ?? 0}, ${a.percentage ?? 0}, '${answersJson}'::jsonb, '${a.created_at || new Date().toISOString()}') ON CONFLICT (id) DO NOTHING;\n`;
    }
    sql += `\n`;
  }

  fs.writeFileSync(sqlFile, sql, "utf-8");
  console.log(`✓ Ready-to-execute Bluehost SQL seed script written to: ${sqlFile}`);
  console.log("\n============================================================");
}

exportSupabaseData().catch((e) => {
  console.error("Export failed:", e);
  process.exit(1);
});
