import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

type Ctx = {
  supabase: {
    rpc: (fn: string, args?: Record<string, unknown>) => PromiseLike<{ data: unknown }>;
  };
  userId: string;
};

export const ADMIN_ROLES = [
  "super_admin",
  "question_manager",
  "exam_manager",
  "content_reviewer",
  "analytics_viewer",
  "admin",
] as const;

export type AdminRole = (typeof ADMIN_ROLES)[number];

async function assertAdminRole(context: unknown, allowedRoles: string[] = ["admin", "super_admin", "question_manager", "exam_manager", "content_reviewer", "analytics_viewer"]) {
  const { supabase, userId } = context as Ctx;
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  // Check roles in DB user_roles table or via RPC
  const { data: userRoles } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", userId);
  const roles = (userRoles ?? []).map((r: { role: string }) => r.role);

  // Default initial admin check
  const { data: hasAdminRpc } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (hasAdminRpc) roles.push("admin", "super_admin");

  const hasAllowedRole = roles.some((r) => allowedRoles.includes(r) || r === "super_admin" || r === "admin");
  if (!hasAllowedRole) {
    throw new Error("Unauthorized. Insufficient administrative permissions.");
  }
  return { db: supabaseAdmin, userId, roles };
}

const optionSchema = z.object({ id: z.string(), text: z.string() });

export const questionInput = z.object({
  id: z.string().uuid().optional(),
  exam_ids: z.array(z.string()).min(1),
  subject: z.string().min(1),
  chapter: z.string().min(1),
  topic: z.string().default(""),
  difficulty: z.enum(["easy", "medium", "hard", "expert"]),
  qtype: z.enum(["single", "multiple", "numerical", "assertion_reason"]).default("single"),
  body: z.string().min(3),
  options: z.array(optionSchema).default([]),
  correct: z.any(),
  explanation: z.string().default(""),
  source: z.string().min(1),
  source_year: z.number().int().nullable().optional(),
  is_previous_year: z.boolean().default(false),
  verification_status: z.enum(["draft", "in_review", "verified", "rejected"]).default("draft"),
});
export type QuestionInput = z.infer<typeof questionInput>;

export const examConfigInput = z.object({
  id: z.string(),
  name: z.string().min(1),
  group: z.string(),
  type: z.enum(["practice", "mock", "scholarship"]).default("mock"),
  syllabus: z.string().default("NCERT 2026"),
  duration_minutes: z.number().int().min(1).max(300).default(180),
  question_count: z.number().int().min(1).default(180),
  marks_per_correct: z.number().default(4),
  negative_marks: z.number().default(1),
  allow_partial_credit: z.boolean().default(false),
  solutions_release: z.enum(["immediate", "after_submission", "scheduled"]).default("after_submission"),
  mastery_threshold: z.number().default(90),
  max_attempts: z.number().int().min(1).default(10),
  start_date: z.string().nullable().optional(),
  end_date: z.string().nullable().optional(),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
});
export type ExamConfigInput = z.infer<typeof examConfigInput>;

export const getAdminStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as unknown as Ctx;
    const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
    const { data: exists } = await supabase.rpc("admin_exists");
    return { isAdmin: isAdmin === true, adminExists: exists === true };
  });

export const claimAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await (context as unknown as Ctx).supabase.rpc("claim_first_admin");
    return { ok: data === true };
  });

export const listQuestions = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z
      .object({
        exam: z.string().optional(),
        subject: z.string().optional(),
        difficulty: z.string().optional(),
        status: z.string().optional(),
        q: z.string().optional(),
        page: z.number().int().min(0).default(0),
      })
      .parse(d)
  )
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "question_manager", "content_reviewer"]);
    let q = db
      .from("questions")
      .select(
        "id, exam_ids, subject, chapter, topic, difficulty, qtype, body, options, correct, explanation, source, source_year, is_previous_year, verification_status",
        { count: "exact" }
      );
    if (data.exam) q = q.contains("exam_ids", [data.exam]);
    if (data.subject) q = q.eq("subject", data.subject);
    if (data.difficulty) q = q.eq("difficulty", data.difficulty as "easy");
    if (data.status) q = q.eq("verification_status", data.status as "draft");
    if (data.q) q = q.ilike("body", `%${data.q}%`);
    const { data: rows, count, error } = await q
      .order("created_at", { ascending: false })
      .range(data.page * 25, data.page * 25 + 24);
    if (error) throw new Error(error.message);
    return { rows: rows ?? [], count: count ?? 0 };
  });

export const saveQuestions = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ items: z.array(questionInput).min(1).max(500) }).parse(d))
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "question_manager"]);
    const rows = data.items.map(({ id, ...r }) => ({
      ...(id ? { id } : {}),
      ...r,
      correct: r.correct ?? [],
    }));
    const { error } = await db.from("questions").upsert(rows as never);
    if (error) throw new Error(error.message);
    return { saved: rows.length };
  });

export const checkDuplicateQuestion = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ body: z.string().min(5) }).parse(d))
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "question_manager"]);
    const { data: rows } = await db.from("questions").select("id, body, subject, chapter").ilike("body", `%${data.body.trim().slice(0, 30)}%`).limit(5);
    const matches = (rows ?? []).filter((r: { body: string }) => r.body.trim().toLowerCase() === data.body.trim().toLowerCase());
    return { isDuplicate: matches.length > 0, matches };
  });

export const updateStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({
      ids: z.array(z.string().uuid()).min(1),
      status: z.enum(["draft", "in_review", "verified", "rejected"]),
    }).parse(d)
  )
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "question_manager", "content_reviewer"]);
    const { error } = await db.from("questions").update({ verification_status: data.status }).in("id", data.ids);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteQuestion = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "question_manager"]);
    const { error } = await db.from("questions").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/* Admin Role & User Management */
export const listAdminUsers = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin"]);
    const { data: roles } = await db.from("user_roles").select("user_id, role, created_at");
    return { users: roles ?? [] };
  });

export const assignAdminRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ targetUserId: z.string().uuid(), role: z.enum(ADMIN_ROLES) }).parse(d))
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin"]);
    const { error } = await db.from("user_roles").upsert({ user_id: data.targetUserId, role: data.role } as never);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/* Exam Management & Validation */
export const validateExamPrePublish = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ examId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "exam_manager"]);
    const { data: questions, count } = await db.from("questions").select("id, body, options, correct, verification_status", { count: "exact" }).contains("exam_ids", [data.examId]);
    
    const warnings: string[] = [];
    const errors: string[] = [];
    const total = count ?? 0;

    if (total === 0) errors.push(`No questions assigned to exam "${data.examId}".`);
    
    const unverified = (questions ?? []).filter((q: { verification_status: string }) => q.verification_status !== "verified");
    if (unverified.length > 0) warnings.push(`${unverified.length} questions are in draft/review status and will be hidden from students.`);

    const invalidKeys = (questions ?? []).filter((q: { correct: unknown }) => !q.correct || (Array.isArray(q.correct) && q.correct.length === 0));
    if (invalidKeys.length > 0) errors.push(`${invalidKeys.length} questions have missing or empty answer keys.`);

    return {
      isValid: errors.length === 0,
      totalQuestions: total,
      verifiedCount: total - unverified.length,
      errors,
      warnings,
    };
  });

/* Dashboard Analytics */
export const getAnalyticsData = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ timeframe: z.enum(["all", "30days", "7days"]).default("all") }).parse(d))
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "analytics_viewer"]);
    
    // Aggregate Platform Stats
    const { count: totalQuestions } = await db.from("questions").select("id", { count: "exact", head: true });
    const { count: verifiedQuestions } = await db.from("questions").select("id", { count: "exact", head: true }).eq("verification_status", "verified");
    const { count: totalAttempts } = await db.from("attempts").select("id", { count: "exact", head: true });
    const { count: completedAttempts } = await db.from("attempts").select("id", { count: "exact", head: true }).eq("status", "submitted");

    // Attempt Details & Accuracy by Subject
    const { data: attempts } = await db.from("attempts").select("score, max_score, mode, created_at").eq("status", "submitted").limit(1000);
    let totalScorePercent = 0;
    for (const a of attempts ?? []) {
      if (a.score != null && a.max_score && a.max_score > 0) {
        totalScorePercent += (a.score / a.max_score) * 100;
      }
    }
    const avgAccuracy = attempts && attempts.length > 0 ? Math.round(totalScorePercent / attempts.length) : 0;

    return {
      totalQuestions: totalQuestions ?? 0,
      verifiedQuestions: verifiedQuestions ?? 0,
      pendingReviewQuestions: (totalQuestions ?? 0) - (verifiedQuestions ?? 0),
      totalAttempts: totalAttempts ?? 0,
      completedAttempts: completedAttempts ?? 0,
      completionRate: totalAttempts ? Math.round(((completedAttempts ?? 0) / totalAttempts) * 100) : 0,
      avgAccuracy,
      timeframe: data.timeframe,
    };
  });

/* Anti-Cheating Logger */
export const logSuspiciousEvent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ attemptId: z.string(), eventType: z.string(), details: z.string().optional() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as unknown as Ctx;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await (supabaseAdmin as unknown as { from: (t: string) => { insert: (row: unknown) => PromiseLike<unknown> } }).from("audit_logs").insert({
      user_id: userId,
      event: `ANTI_CHEAT_${data.eventType.toUpperCase()}`,
      payload: { attemptId: data.attemptId, details: data.details ?? "", at: new Date().toISOString() },
    });
    return { ok: true };
  });

async function askAI(system: string, prompt: string) {
  const apiKey = process.env["AI_API_KEY"] || process.env["OPENAI_API_KEY"] || process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI is not configured.");
  const { createOpenAI } = await import("@ai-sdk/openai");
  const { generateText } = await import("ai");
  const baseURL = process.env["AI_GATEWAY_URL"] || (process.env["LOVABLE_API_KEY"] ? "https://ai.gateway.lovable.dev/v1" : undefined);
  const provider = createOpenAI({
    ...(baseURL ? { baseURL } : {}),
    apiKey,
    ...(process.env["LOVABLE_API_KEY"] ? { headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" } } : {}),
  });
  const { text } = await generateText({
    model: provider.responses("openai/gpt-6-astra"),
    system,
    prompt,
    providerOptions: { openai: { forceReasoning: true, reasoningEffort: "low", store: false } },
  });
  const m = text.match(/\[[\s\S]*\]/);
  if (!m) throw new Error("AI returned no questions. Try a smaller piece of text.");
  return JSON.parse(m[0]) as unknown[];
}

const JSON_SHAPE = `Return ONLY a JSON array. Each item: {"subject": "Physics|Chemistry|Mathematics|Botany|Zoology|General Studies|Mental Ability", "chapter": NCERT chapter name, "topic": string, "difficulty": "easy|medium|hard|expert", "qtype": "single|multiple|numerical", "body": question text (plain text, Unicode symbols), "options": [{"id":"a","text":...},{"id":"b",...},{"id":"c",...},{"id":"d",...}] (empty for numerical), "correct": array of option ids e.g. ["b"] or for numerical a number, "explanation": short step-by-step solution}.`;

function normalize(items: unknown[], exam: string, source: string, year: number | null, pyq: boolean) {
  return items.flatMap((raw) => {
    const r = raw as Record<string, unknown>;
    const parsed = questionInput.safeParse({
      ...r,
      exam_ids: [exam],
      source,
      source_year: year,
      is_previous_year: pyq,
      verification_status: "draft",
      difficulty: ["easy", "medium", "hard", "expert"].includes(String(r["difficulty"])) ? r["difficulty"] : "medium",
      qtype: ["single", "multiple", "numerical"].includes(String(r["qtype"])) ? r["qtype"] : "single",
    });
    return parsed.success ? [parsed.data] : [];
  });
}

export const aiExtract = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ text: z.string().min(20).max(30000), exam: z.string(), year: z.number().int().nullable(), source: z.string().min(1) }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdminRole(context, ["admin", "super_admin", "question_manager"]);
    const items = await askAI(
      `You extract exam questions from question-paper text exactly as written. Keep the wording and options unchanged; fix only OCR glitches. If an answer key is present use it; otherwise solve carefully. Map each to the 2026 NCERT chapter. ${JSON_SHAPE}`,
      data.text
    );
    return normalize(items, data.exam, data.source, data.year, true);
  });

export const aiPredict = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ exam: z.string(), subject: z.string(), difficulty: z.enum(["easy", "medium", "hard", "expert"]), count: z.number().int().min(1).max(20) }).parse(d))
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "question_manager"]);
    const { data: past } = await db.from("questions").select("chapter, body").contains("exam_ids", [data.exam]).eq("subject", data.subject).eq("is_previous_year", true).limit(400);
    const freq: Record<string, number> = {};
    for (const p of past ?? []) freq[p.chapter] = (freq[p.chapter] ?? 0) + 1;
    const top = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([c, n]) => `${c} (${n})`).join(", ");
    const samples = (past ?? []).slice(0, 6).map((p) => "- " + p.body.slice(0, 200)).join("\n");
    const items = await askAI(
      `You write NEW, original practice questions that predict likely topics for the next ${data.exam.toUpperCase()} exam. Stay strictly within the 2026 NCERT syllabus. Never copy past questions; change numbers and framing. ${JSON_SHAPE}`,
      `Subject: ${data.subject}. Difficulty: ${data.difficulty}. Write ${data.count} questions.\nMost frequent chapters in past papers: ${top || "no past papers imported yet - use the official syllabus weightage"}.\nStyle samples:\n${samples}`
    );
    return normalize(items, data.exam, `AI predicted question (${data.exam.toUpperCase()} trends) - pending teacher review`, null, false)
      .map((q) => ({ ...q, difficulty: data.difficulty, subject: data.subject }));
  });

export const chapterTrends = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ exam: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    const { db } = await assertAdminRole(context, ["admin", "super_admin", "question_manager", "analytics_viewer"]);
    const { data: rows } = await db.from("questions").select("subject, chapter, source_year").contains("exam_ids", [data.exam]).eq("is_previous_year", true).limit(5000);
    const map: Record<string, { subject: string; chapter: string; count: number; years: Set<number> }> = {};
    for (const r of rows ?? []) {
      const k = r.subject + "|" + r.chapter;
      map[k] ??= { subject: r.subject, chapter: r.chapter, count: 0, years: new Set() };
      map[k].count++;
      if (r.source_year) map[k].years.add(r.source_year);
    }
    return Object.values(map).sort((a, b) => b.count - a.count).slice(0, 40).map((x) => ({ ...x, years: x.years.size }));
  });

export const autoConfirmUser = createServerFn({ method: "POST" })
  .validator((d: { email: string; password?: string }) => d)
  .handler(async ({ data }) => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const targetEmail = data.email.trim().toLowerCase();

      // List users from Supabase Auth admin
      const { data: usersData } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 });
      const existingUser = usersData?.users?.find((u) => u.email?.toLowerCase() === targetEmail);

      if (existingUser) {
        // Force update user email_confirm to true AND sync password if provided
        const updatePayload: { email_confirm: boolean; password?: string } = { email_confirm: true };
        if (data.password && data.password.length >= 6) {
          updatePayload.password = data.password;
        }
        await supabaseAdmin.auth.admin.updateUserById(existingUser.id, updatePayload);
        return { success: true, action: "confirmed", userId: existingUser.id };
      } else if (data.password && data.password.length >= 6) {
        // Create confirmed user directly with email_confirm: true
        const { data: newUser, error: createErr } = await supabaseAdmin.auth.admin.createUser({
          email: targetEmail,
          password: data.password,
          email_confirm: true,
        });
        if (createErr) {
          console.error("createUser error:", createErr);
          return { success: false, error: createErr.message };
        }
        return { success: true, action: "created", userId: newUser.user.id };
      }

      return { success: false, error: "Missing password for user creation" };
    } catch (e) {
      console.error("autoConfirmUser exception:", e);
      return { success: false, error: (e as Error).message };
    }
  });



