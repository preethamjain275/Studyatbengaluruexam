import { supabaseAdmin } from "../src/integrations/supabase/client.server";

async function checkDb() {
  console.log("=== CHECKING LIVE SUPABASE DATABASE STATE ===");

  const tables = ["bookmarks", "app_settings", "attempts", "profiles", "user_roles", "questions"];

  for (const tbl of tables) {
    const res = await supabaseAdmin.from(tbl).select("*").limit(1);
    if (res.error) {
      console.log(`Table [${tbl}]: ERROR -> code: ${res.error.code}, message: "${res.error.message}"`);
    } else {
      console.log(`Table [${tbl}]: EXISTS -> rows accessible: ${res.data.length}`);
    }
  }

  // Check columns on attempts table
  console.log("\nChecking attempts table structure...");
  const attRes = await supabaseAdmin.from("attempts").select("*").limit(1);
  if (attRes.data && attRes.data[0]) {
    console.log("Columns present in attempts sample row:", Object.keys(attRes.data[0]));
  }

  // Check profiles table structure
  console.log("\nChecking profiles table structure...");
  const profRes = await supabaseAdmin.from("profiles").select("*").limit(1);
  if (profRes.data && profRes.data[0]) {
    console.log("Columns present in profiles sample row:", Object.keys(profRes.data[0]));
  }
}

checkDb().catch((e) => {
  console.error(e);
  process.exit(1);
});
