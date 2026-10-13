import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { getPreset, LEVELS, plannedMock, PRACTICE_SECONDS_PER_Q, PRACTICE_SET_SIZE, TRACKS, type Level } from "@/lib/engine/patterns";
import { canSave, isExpired, masteryState, selectQuestions, shuffleOptions, type PracticeAttempt } from "@/lib/engine/state";
import { QUESTIONS_BANK, QUESTIONS_BY_ID, type QuestionItem } from "@/data/questions-bank";

const levelSchema = z.enum(["easy", "medium", "hard", "expert"]);
// Only columns that exist in public.questions:
const QUESTION_COLS = "id, subject, chapter, topic, difficulty, qtype, body, options, source, source_year, is_previous_year";

function trackOf(examId: string, track: string) {
  const t = TRACKS[examId]?.find((x) => x.name === track);
  if (!t) throw new Error("Unknown subject track");
  return t;
}

let cachedMasteryThreshold = 80;

export async function fetchDbMasteryThreshold(): Promise<number> {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("app_settings")
      .select("value")
      .eq("key", "mastery_threshold")
      .maybeSingle();

    if (!error && data?.value) {
      const val =
        typeof data.value === "object" && data.value !== null
          ? (data.value as any).threshold
          : Number(data.value);
      if (typeof val === "number" && !isNaN(val) && val >= 50 && val <= 100) {
        cachedMasteryThreshold = val;
        return val;
      }
    }
  } catch {}
  return cachedMasteryThreshold;
}

export const getMastery = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ examId: z.string() }).parse(d))
  .handler(async ({ data, context }: { data: { examId: string }; context: any }) => {
    const { supabase, userId } = context;
    const tracks = TRACKS[data.examId] ?? [];
    const dbThreshold = await fetchDbMasteryThreshold();

    let atts: any[] = [];
    try {
      const { data: rawAtts } = await supabase
        .from("attempts")
        .select("*")
        .eq("user_id", userId)
        .eq("exam_id", data.examId)
        .eq("mode", "practice")
        .order("created_at", { ascending: false });

      if (rawAtts) {
        atts = rawAtts.map((a: any) => ({
          ...a,
          track: a.track || a.answers?.['_meta']?.['track'] || "",
          level: a.level || a.answers?.['_meta']?.['level'] || "easy",
          question_ids: a.question_ids || a.answers?.['_meta']?.['question_ids'] || [],
          percent: a.percent ?? a.percentage ?? (a.score != null && a.total_questions ? Math.round((a.score / a.total_questions) * 100) : 0),
        }));
      }
    } catch {}

    const out = [];
    for (const t of tracks) {
      const mine = atts.filter((a: any) => a.track === t.name);
      const pa: PracticeAttempt[] = mine.map((a: any) => ({
        level: a.level as Level,
        percent: a.percent,
        questionCount: (a.question_ids || []).length,
        status: a.status,
      }));

      const pool: Record<string, number> = {};
      for (const lvl of LEVELS) {
        // Count verified questions directly from the 938-item in-code question bank
        const inCode = QUESTIONS_BANK.filter(
          (q) => t.subjects.includes(q.subject) && q.difficulty === lvl
        ).length;
        pool[lvl] = inCode > 0 ? inCode : 30;
      }

      const last = mine.find((a: any) => a.status === "submitted");
      out.push({
        track: t.name,
        state: masteryState(pa, dbThreshold),
        pool,
        open: mine.filter((a: any) => a.status === "in_progress").map((a: any) => ({ id: a.id, level: a.level })),
        lastResult: last
          ? {
              id: last.id,
              level: last.level,
              percent: last.percent,
              weakChapters: (last.result as { weakChapters?: string[] } | null)?.weakChapters ?? [],
            }
          : null,
        history: mine
          .filter((a: any) => a.status === "submitted")
          .slice(0, 8)
          .map((a: any) => ({ id: a.id, level: a.level, percent: a.percent, at: a.created_at })),
      });
    }
    return out;
  });

export const startPractice = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ examId: z.string(), track: z.string(), level: levelSchema, count: z.number().int().min(PRACTICE_SET_SIZE).max(200).default(PRACTICE_SET_SIZE) }).parse(d))
  .handler(async ({ data, context }: { data: { examId: string; track: string; level: Level; count: number }; context: any }) => {
    const { supabase, userId } = context;
    const t = trackOf(data.examId, data.track);
    const { finalizeAttempt } = await import("@/lib/engine.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let atts: any[] = [];
    try {
      const { data: rawAtts } = await supabase
        .from("attempts")
        .select("*")
        .eq("user_id", userId)
        .eq("exam_id", data.examId)
        .eq("mode", "practice")
        .order("created_at", { ascending: false });

      if (rawAtts) {
        atts = rawAtts
          .map((a: any) => ({
            ...a,
            track: a.track || a.answers?.['_meta']?.['track'] || "",
            level: a.level || a.answers?.['_meta']?.['level'] || "easy",
            question_ids: a.question_ids || a.answers?.['_meta']?.['question_ids'] || [],
            percent: a.percent ?? a.percentage ?? 0,
          }))
          .filter((a: any) => a.track === t.name);
      }
    } catch {}

    const open = atts.find((a: any) => a.status === "in_progress" && a.level === data.level);
    if (open) {
      // Finalize or replace stale open attempt so the student always gets fresh shuffled questions
      await finalizeAttempt(open.id, userId).catch(() => null);
    }

    const pa = atts.map((a: any) => ({
      level: a.level as Level,
      percent: a.percent,
      questionCount: (a.question_ids || []).length,
      status: a.id === open?.id ? "submitted" : a.status,
    }));

    const dbThreshold = await fetchDbMasteryThreshold();
    const mState = masteryState(pa, dbThreshold);
    const threshold = mState.threshold;
    if (!mState.unlocked.includes(data.level)) {
      throw new Error(`Score at least ${threshold}% in the previous level to unlock this one.`);
    }

    // Pull from 938-item question bank for the track subjects and difficulty level
    const pool = QUESTIONS_BANK.filter(
      (q) => t.subjects.includes(q.subject) && q.difficulty === data.level
    );
    let ids = pool.map((p) => p.id);

    // If needed, broaden to all difficulty levels for this track
    if (ids.length < PRACTICE_SET_SIZE) {
      ids = QUESTIONS_BANK.filter((q) => t.subjects.includes(q.subject)).map((p) => p.id);
    }

    // Retake selection: avoids recently seen questions, shuffles completely every time
    const history = atts.filter((a: any) => a.level === data.level).map((a: any) => a.question_ids);
    const chosen = selectQuestions(ids, history, Math.min(data.count, ids.length));
    const deadline = new Date(Date.now() + chosen.length * PRACTICE_SECONDS_PER_Q[data.level] * 1000).toISOString();

    const attemptPayload = {
      user_id: userId,
      mode: "practice",
      exam_id: data.examId,
      track: t.name,
      level: data.level,
      question_ids: chosen,
      deadline,
      status: "in_progress",
      total_questions: chosen.length,
      answers: { _meta: { track: t.name, level: data.level, question_ids: chosen, started_at: new Date().toISOString() } },
    };

    let { data: row, error } = await supabaseAdmin
      .from("attempts")
      .insert(attemptPayload as never)
      .select("id")
      .single();

    if (error && (error.code === "PGRST204" || error.code === "42703" || error.message?.includes("column"))) {
      // Reconciled fallback for live schema: all metadata preserved safely inside answers._meta
      const livePayload = {
        user_id: userId,
        mode: "practice",
        exam_id: data.examId,
        deadline,
        status: "in_progress",
        total_questions: chosen.length,
        percentage: 0,
        score: 0,
        answers: { _meta: { track: t.name, level: data.level, question_ids: chosen, started_at: new Date().toISOString() } },
        events: [],
      };
      const res = await supabaseAdmin
        .from("attempts")
        .insert(livePayload as never)
        .select("id")
        .single();
      row = res.data;
      error = res.error;
    }

    if (error || !row) {
      throw new Error(error?.message || "Could not start the practice set. Please try again.");
    }

    return { attemptId: row.id };
  });

export const getMockAvailability = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ presetId: z.string() }).parse(d))
  .handler(async ({ data }: { data: { presetId: string }; context: any }) => {
    const p = getPreset(data.presetId);
    if (!p) throw new Error("Unknown test");
    const available: Record<string, number> = {};
    for (const s of p.sections) {
      const count = QUESTIONS_BANK.filter(
        (q) => s.subjects.includes(q.subject) && s.types.includes(q.qtype)
      ).length;
      available[s.name] = count;
    }
    return plannedMock(p, available);
  });

export const startMock = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ presetId: z.string() }).parse(d))
  .handler(async ({ data, context }: { data: { presetId: string }; context: any }) => {
    const { supabase, userId } = context;
    const p = getPreset(data.presetId);
    if (!p) throw new Error("Unknown test");
    const { finalizeAttempt } = await import("@/lib/engine.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let open: any = null;
    try {
      const { data: rawOpen } = await supabase
        .from("attempts")
        .select("*")
        .eq("user_id", userId)
        .eq("mode", "mock")
        .eq("status", "in_progress");

      open = (rawOpen ?? []).find(
        (a: any) => a.preset_id === p.id || a.answers?.['_meta']?.['preset_id'] === p.id
      );
    } catch {}

    if (open) {
      await finalizeAttempt(open.id, userId).catch(() => null);
    }

    const chosen: string[] = [];
    const available: Record<string, number> = {};
    const pools: Record<string, string[]> = {};
    for (const s of p.sections) {
      const rows = QUESTIONS_BANK.filter(
        (q) => s.subjects.includes(q.subject) && s.types.includes(q.qtype)
      );
      pools[s.name] = rows.map((r) => r.id).filter((id: string) => !chosen.includes(id));
      available[s.name] = pools[s.name]?.length ?? 0;
    }

    const plan = plannedMock(p, available);
    for (const s of plan.sections) chosen.push(...selectQuestions(pools[s.name] ?? [], [], s.planned));
    if (chosen.length === 0) throw new Error("No verified questions are available for this test yet.");
    const deadline = new Date(Date.now() + plan.durationMin * 60_000).toISOString();

    const attemptPayload = {
      user_id: userId,
      mode: "mock",
      exam_id: p.examId,
      preset_id: p.id,
      question_ids: chosen,
      deadline,
      status: "in_progress",
      total_questions: chosen.length,
      answers: { _meta: { preset_id: p.id, question_ids: chosen, started_at: new Date().toISOString() } },
    };

    let { data: row, error } = await supabaseAdmin
      .from("attempts")
      .insert(attemptPayload as never)
      .select("id")
      .single();

    if (error && (error.code === "PGRST204" || error.code === "42703" || error.message?.includes("column"))) {
      // Reconciled fallback for live schema: all metadata preserved safely inside answers._meta
      const livePayload = {
        user_id: userId,
        mode: "mock",
        exam_id: p.examId,
        deadline,
        status: "in_progress",
        total_questions: chosen.length,
        percentage: 0,
        score: 0,
        answers: { _meta: { preset_id: p.id, question_ids: chosen, started_at: new Date().toISOString() } },
        events: [],
      };
      const res = await supabaseAdmin
        .from("attempts")
        .insert(livePayload as never)
        .select("id")
        .single();
      row = res.data;
      error = res.error;
    }

    if (error || !row) {
      throw new Error(error?.message || "Could not start the test. Please try again.");
    }

    return { attemptId: row.id };
  });

export const getAttempt = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }: { data: { id: string }; context: any }) => {
    const { userId } = context;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let { data: att } = await supabaseAdmin.from("attempts").select("*").eq("id", data.id).maybeSingle();
    if (!att) throw new Error("Attempt not found");

    // Enforce ownership: owner or administrator only
    if (att.user_id !== userId) {
      const { data: roleRow } = await supabaseAdmin
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .maybeSingle();
      const isAdmin = (roleRow?.role as string) === "super_admin" || roleRow?.role === "admin";
      if (!isAdmin) {
        throw new Error("Unauthorized: You do not have permission to access this attempt");
      }
    }

    if (att.status === "in_progress" && !canSave(att.deadline, Date.now())) {
      const { finalizeAttempt } = await import("@/lib/engine.server");
      att = await finalizeAttempt(att.id, userId);
    }

    const rawAnswers = (att.answers ?? {}) as Record<string, any>;
    let questionIds: string[] = att.question_ids || rawAnswers?.["_meta"]?.["question_ids"] || [];
    const track = att.track || rawAnswers?.["_meta"]?.["track"] || "Physics";
    const level = (att.level || rawAnswers?.["_meta"]?.["level"] || "easy") as Level;
    const presetId = att.preset_id || rawAnswers?.["_meta"]?.["preset_id"] || "";

    // Dynamic recovery: If questions were empty or previous IDs invalid, auto-populate from 938-item question bank!
    if (!questionIds || questionIds.length === 0) {
      const t = TRACKS[att.exam_id]?.find((x) => x.name === track) || TRACKS[att.exam_id]?.[0] || { name: "Physics", subjects: ["Physics"] };
      const pool = QUESTIONS_BANK.filter((q) => t.subjects.includes(q.subject) && q.difficulty === level);
      const poolIds = (pool.length >= PRACTICE_SET_SIZE ? pool : QUESTIONS_BANK.filter((q) => t.subjects.includes(q.subject))).map((p) => p.id);
      if (poolIds.length > 0) {
        questionIds = selectQuestions(poolIds, [], Math.min(PRACTICE_SET_SIZE, poolIds.length));

        // Save question IDs to attempt
        await supabaseAdmin.from("attempts").update({
          answers: { ...rawAnswers, _meta: { ...(rawAnswers?.["_meta"] || {}), track: t.name, level, question_ids: questionIds } },
          total_questions: questionIds.length,
        } as any).eq("id", att.id);
      }
    }

    // Resolve question details directly from in-code question bank and Supabase DB
    let qs: any[] = questionIds.map((id) => QUESTIONS_BY_ID.get(id)).filter(Boolean);
    if (qs.length < questionIds.length && questionIds.length > 0) {
      const missingIds = questionIds.filter((id) => !qs.some((q) => q.id === id));
      const { data: dbQs } = await supabaseAdmin.from("questions").select(QUESTION_COLS).in("id", missingIds);
      if (dbQs) qs = [...qs, ...dbQs];
    }
    const byId = new Map<string, any>(qs.map((q: any) => [q.id, q]));

    // Extract ONLY pure student answers (never internal _meta or _result)
    const cleanStudentAnswers: Record<string, string | string[]> = {};
    for (const [k, v] of Object.entries(rawAnswers)) {
      if (!k.startsWith("_") && v != null) {
        cleanStudentAnswers[k] = v;
      }
    }

    const savedStatuses = (att.statuses || rawAnswers?.["_statuses"] || rawAnswers?.["_meta"]?.["statuses"] || {}) as Record<string, { visited?: boolean; marked?: boolean }>;

    return {
      attempt: {
        id: att.id,
        mode: att.mode,
        examId: att.exam_id,
        track,
        level,
        presetId,
        startedAt: att.started_at || att.created_at,
        deadline: att.deadline,
        status: att.status,
        answers: cleanStudentAnswers,
        statuses: savedStatuses,
      },
      questions: questionIds
        .map((id) => byId.get(id))
        .filter(Boolean)
        .map((q: any) => ({
          id: q.id,
          subject: q.subject,
          chapter: q.chapter,
          topic: q.topic,
          difficulty: q.difficulty,
          qtype: q.qtype,
          body: q.body || q.text || "",
          options: shuffleOptions((q.options as { id: string; text: string }[]) || [], att.id + q.id),
          source: q.source,
          source_year: q.source_year,
          is_previous_year: q.is_previous_year,
        })),
      serverNow: Date.now(),
    };
  });

const answerValueSchema = z.union([
  z.string().max(128),
  z.number().transform((n) => String(n)),
  z.array(z.string().max(64)).max(20),
]);

export const saveProgress = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({
      id: z.string().uuid(),
      answers: z.preprocess((val) => {
        if (val && typeof val === "object" && !Array.isArray(val)) {
          const clean: Record<string, unknown> = {};
          for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
            if (!k.startsWith("_") && v != null) clean[k] = v;
          }
          return clean;
        }
        return val ?? {};
      }, z.record(z.string(), z.any())),
      statuses: z.record(z.string(), z.object({ visited: z.boolean().optional(), marked: z.boolean().optional() })).default({}),
      events: z.array(z.object({ type: z.string().max(40), at: z.number() })).max(50).default([]),
    }).parse(d),
  )
  .handler(async ({ data, context }: { data: any; context: any }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let att: any = null;
    try {
      const res = await context.supabase.from("attempts").select("*").eq("id", data.id).maybeSingle();
      att = res.data;
    } catch {}
    if (!att) {
      const res = await supabaseAdmin.from("attempts").select("*").eq("id", data.id).maybeSingle();
      att = res.data;
    }
    if (!att) throw new Error("Attempt not found");

    // Enforce ownership
    if (att.user_id !== context.userId) {
      const { data: roleRow } = await supabaseAdmin
        .from("user_roles")
        .select("role")
        .eq("user_id", context.userId)
        .maybeSingle();
      const isAdmin = (roleRow?.role as string) === "super_admin" || roleRow?.role === "admin";
      if (!isAdmin) {
        throw new Error("Unauthorized: You do not have permission to save this attempt");
      }
    }

    if (att.status !== "in_progress" || !canSave(att.deadline, Date.now())) return { saved: false, status: "submitted" as const };

    const rawAnswers = (att.answers ?? {}) as Record<string, any>;
    const questionIds: string[] = att.question_ids || rawAnswers?.["_meta"]?.["question_ids"] || [];
    const allowed = questionIds.length > 0 ? new Set(questionIds) : null;

    const validStudentAnswers: Record<string, any> = {};
    for (const [k, v] of Object.entries(data.answers || {})) {
      if (k.startsWith("_")) continue;
      if (!allowed || allowed.has(k)) {
        validStudentAnswers[k] = v;
      }
    }

    const validStatuses = Object.fromEntries(
      Object.entries(data.statuses || {}).filter(([k]) => !k.startsWith("_") && (!allowed || allowed.has(k)))
    );

    // Preserve metadata and store statuses safely inside answers JSONB
    const mergedAnswers = {
      ...rawAnswers,
      ...validStudentAnswers,
      _meta: {
        ...(rawAnswers?.["_meta"] || {}),
        updated_at: new Date().toISOString(),
      },
      _statuses: validStatuses,
    };

    const events = [...((att.events as unknown[]) ?? []), ...data.events].slice(-500);

    // Update payload with canonical columns
    const updateObj = {
      answers: mergedAnswers as never,
      events: events as never,
      statuses: validStatuses as never,
    };

    let { error } = await supabaseAdmin
      .from("attempts")
      .update(updateObj)
      .eq("id", data.id)
      .eq("status", "in_progress");

    if (error && (error.code === "PGRST204" || error.code === "42703" || error.message?.includes("column"))) {
      // Live schema fallback: attempts table does not have 'statuses' column
      const liveUpdate = {
        answers: mergedAnswers as never,
        events: events as never,
      };
      const res = await supabaseAdmin
        .from("attempts")
        .update(liveUpdate)
        .eq("id", data.id)
        .eq("status", "in_progress");
      error = res.error;
    }

    if (error) {
      console.error("Failed to save attempt progress:", error);
      throw new Error(`Failed to save progress: ${error.message}`);
    }

    return { saved: true, status: "in_progress" as const };
  });

export const submitAttempt = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({
      id: z.string().uuid(),
      answers: z.preprocess((val) => {
        if (val && typeof val === "object" && !Array.isArray(val)) {
          const clean: Record<string, unknown> = {};
          for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
            if (!k.startsWith("_") && v != null) clean[k] = v;
          }
          return clean;
        }
        return val ?? {};
      }, z.record(z.string(), z.any())).optional(),
      statuses: z.record(z.string(), z.object({ visited: z.boolean().optional(), marked: z.boolean().optional() })).optional(),
    }).parse(d)
  )
  .handler(async ({ data, context }: { data: any; context: any }) => {
    const { finalizeAttempt } = await import("@/lib/engine.server");
    const att = await finalizeAttempt(data.id, context.userId, data.answers, data.statuses);
    return { id: att.id, status: att.status };
  });

export const getResult = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }: { data: { id: string }; context: any }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let { data: att } = await supabaseAdmin.from("attempts").select("*").eq("id", data.id).maybeSingle();
    if (!att) throw new Error("Attempt not found");

    // Enforce ownership: owner or administrator only
    if (att.user_id !== context.userId) {
      const { data: roleRow } = await supabaseAdmin
        .from("user_roles")
        .select("role")
        .eq("user_id", context.userId)
        .maybeSingle();
      const isAdmin = (roleRow?.role as string) === "super_admin" || roleRow?.role === "admin";
      if (!isAdmin) {
        throw new Error("Unauthorized: You do not have permission to view this result");
      }
    }

    if (att.status !== "submitted") {
      const { finalizeAttempt } = await import("@/lib/engine.server");
      att = await finalizeAttempt(att.id, att.user_id);
    }

    const rawAnswers = (att.answers ?? {}) as Record<string, any>;
    const questionIds: string[] = att.question_ids || rawAnswers?.["_meta"]?.["question_ids"] || [];
    const presetId = att.preset_id || rawAnswers?.["_meta"]?.["preset_id"];
    const track = att.track || rawAnswers?.["_meta"]?.["track"] || "";
    const level = att.level || rawAnswers?.["_meta"]?.["level"] || "easy";

    const preset = att.mode === "mock" ? getPreset(presetId) : undefined;
    const showSolutions = preset ? preset.showSolutions : true;

    // Resolve question details and solutions from in-memory question bank and Supabase DB
    let qs: any[] = questionIds.map((id) => QUESTIONS_BY_ID.get(id)).filter(Boolean);
    if (qs.length < questionIds.length && questionIds.length > 0) {
      const missingIds = questionIds.filter((id) => !qs.some((q) => q.id === id));
      const { data: dbQs } = await supabaseAdmin.from("questions").select(`${QUESTION_COLS}, correct, explanation`).in("id", missingIds);
      if (dbQs) qs = [...qs, ...dbQs];
    }
    const byId = new Map<string, any>(qs.map((q: any) => [q.id, q]));

    // Extract ONLY pure student answers
    const cleanStudentAnswers: Record<string, string | string[]> = {};
    for (const [k, v] of Object.entries(rawAnswers)) {
      if (!k.startsWith("_") && v != null) {
        cleanStudentAnswers[k] = v;
      }
    }

    const questions = questionIds.map((id) => byId.get(id)).filter(Boolean).map((q: any) => ({
      id: q.id,
      subject: q.subject,
      chapter: q.chapter,
      topic: q.topic,
      difficulty: q.difficulty,
      qtype: q.qtype,
      body: q.body || q.text || "",
      options: shuffleOptions((q.options as { id: string; text: string }[]) || [], att.id + q.id),
      source: q.source,
      source_year: q.source_year,
      is_previous_year: q.is_previous_year,
      solution_steps: [],
      correct: showSolutions ? (q.correct as string | string[] | { value: number; tolerance?: number }) : null,
      explanation: showSolutions ? (q.explanation || "") : "",
    }));

    let scoredResult = (att.result || rawAnswers?.["_result"]) as import("@/lib/engine/scoring").AttemptResult | undefined;
    if (!scoredResult || !scoredResult.outcomes) {
      const { computeResult } = await import("@/lib/engine/scoring");
      const { PRACTICE_MARKING } = await import("@/lib/engine/patterns");
      const markingFor = (t: import("@/lib/engine/patterns").QType) =>
        preset ? preset.marking[t] ?? preset.marking.single ?? PRACTICE_MARKING : PRACTICE_MARKING;
      scoredResult = computeResult(
        questions.map((q: any) => ({
          id: q.id,
          qtype: q.qtype,
          correct: byId.get(q.id)?.correct,
          subject: q.subject,
          chapter: q.chapter,
        })),
        cleanStudentAnswers,
        markingFor
      );
      try {
        await supabaseAdmin.from("attempts").update({
          answers: { ...rawAnswers, _result: scoredResult },
        } as any).eq("id", att.id);
      } catch {}
    }

    return {
      pending: false as const,
      attempt: {
        id: att.id,
        mode: att.mode,
        examId: att.exam_id,
        track,
        level,
        presetId,
        startedAt: att.started_at || att.created_at,
        submittedAt: att.submitted_at || rawAnswers?.["_meta"]?.["submitted_at"] || att.deadline,
        answers: cleanStudentAnswers,
        score: att.score ?? scoredResult?.score ?? 0,
        maxScore: att.max_score ?? rawAnswers?.["_meta"]?.["max_score"] ?? scoredResult?.maxScore ?? (att as any).total_questions ?? 10,
        percent: att.percent ?? (att as any).percentage ?? rawAnswers?.["_meta"]?.["percent"] ?? scoredResult?.percent ?? 0,
      },
      result: scoredResult,
      questions,
      showSolutions,
    };
  });

export const listAttempts = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }: { context: any }) => {
    const { data } = await context.supabase
      .from("attempts")
      .select("*")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(30);

    return (data ?? []).map((a: any) => ({
      id: a.id,
      mode: a.mode,
      exam_id: a.exam_id,
      track: a.track || a.answers?.['_meta']?.['track'],
      level: a.level || a.answers?.['_meta']?.['level'],
      preset_id: a.preset_id || a.answers?.['_meta']?.['preset_id'],
      status: a.status,
      score: a.score,
      max_score: a.max_score,
      percent: a.percent ?? a.percentage ?? 0,
      created_at: a.created_at,
    }));
  });

/* ==========================================================================
   PHASE 4: MASTER SETTINGS, BOOKMARKS, ANALYTICS & LEADERBOARD
   ========================================================================== */

export const getMasterySettings = createServerFn({ method: "GET" })
  .handler(async () => {
    const threshold = await fetchDbMasteryThreshold();
    return { threshold };
  });

export const updateMasterySettings = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ threshold: z.number().int().min(50).max(100) }).parse(d))
  .handler(async ({ data, context }: { data: { threshold: number }; context: any }) => {
    const { assertAdminRole } = await import("@/lib/admin.functions");
    await assertAdminRole(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    try {
      await supabaseAdmin.from("app_settings").upsert({
        key: "mastery_threshold",
        value: { threshold: data.threshold, updated_by: context.userId },
        updated_at: new Date().toISOString(),
      });
    } catch {}

    cachedMasteryThreshold = data.threshold;
    return { ok: true, threshold: data.threshold };
  });

export const getBookmarks = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }: { context: any }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;

    // 1. Authoritative check on public.bookmarks table
    try {
      const { data, error } = await supabaseAdmin
        .from("bookmarks")
        .select("question_id, created_at")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (!error && data) {
        // Table exists and query succeeded
        if (data.length > 0) {
          return { bookmarks: data.map((b: any) => b.question_id) };
        }

        // Check if legacy user_metadata has bookmarks that should be migrated into the table
        try {
          const { data: userRes } = await supabaseAdmin.auth.admin.getUserById(userId);
          const legacy = userRes?.user?.user_metadata?.["bookmarks"];
          if (Array.isArray(legacy) && legacy.length > 0) {
            // Migrate legacy bookmarks into authoritative table
            const toInsert = legacy.map((qid: string) => ({ user_id: userId, question_id: qid }));
            await supabaseAdmin.from("bookmarks").upsert(toInsert, { onConflict: "user_id,question_id" });
            return { bookmarks: legacy };
          }
        } catch {}

        return { bookmarks: [] };
      }

      // If table is missing (migration 0004 not yet executed on remote DB), log explicitly
      if (error && (error.code === "PGRST205" || error.message?.includes("schema cache"))) {
        console.warn("[Database Notice] public.bookmarks table not found (PGRST205 - migration 0004 pending). Using temporary user_metadata fallback.");
      }
    } catch {}

    // 2. Resilient fallback: read from user_metadata ONLY when database table is unavailable
    try {
      const { data: userRes } = await supabaseAdmin.auth.admin.getUserById(userId);
      const metaBookmarks = userRes?.user?.user_metadata?.["bookmarks"];
      if (Array.isArray(metaBookmarks)) {
        return { bookmarks: metaBookmarks };
      }
    } catch {}

    return { bookmarks: [] };
  });

export const toggleBookmark = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ questionId: z.string() }).parse(d))
  .handler(async ({ data, context }: { data: { questionId: string }; context: any }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;
    const qId = data.questionId;
    let isBookmarked = false;
    let tableWorked = false;

    // 1. Authoritative mutation on public.bookmarks table
    try {
      const { data: existing, error: checkErr } = await supabaseAdmin
        .from("bookmarks")
        .select("id")
        .eq("user_id", userId)
        .eq("question_id", qId)
        .maybeSingle();

      if (!checkErr) {
        if (existing) {
          await supabaseAdmin.from("bookmarks").delete().eq("id", existing.id);
          isBookmarked = false;
        } else {
          await supabaseAdmin.from("bookmarks").upsert(
            { user_id: userId, question_id: qId },
            { onConflict: "user_id,question_id" }
          );
          isBookmarked = true;
        }
        tableWorked = true;
      }
    } catch {}

    // 2. Fallback or transition mirror to user_metadata
    try {
      const { data: userRes } = await supabaseAdmin.auth.admin.getUserById(userId);
      const currentList: string[] = (userRes?.user?.user_metadata?.["bookmarks"] as string[]) || [];
      let updatedList: string[];
      if (tableWorked) {
        // If table worked, keep metadata in sync as transition mirror
        if (isBookmarked) {
          updatedList = currentList.includes(qId) ? currentList : [...currentList, qId];
        } else {
          updatedList = currentList.filter((id) => id !== qId);
        }
      } else {
        // Table missing (PGRST205): user_metadata acts as temporary storage
        console.warn("[Database Notice] public.bookmarks missing during toggle. Saving to user_metadata fallback.");
        if (currentList.includes(qId)) {
          updatedList = currentList.filter((id) => id !== qId);
          isBookmarked = false;
        } else {
          updatedList = [...currentList, qId];
          isBookmarked = true;
        }
      }

      await supabaseAdmin.auth.admin.updateUserById(userId, {
        user_metadata: { ...(userRes?.user?.user_metadata || {}), bookmarks: updatedList },
      });
    } catch {}

    return { bookmarked: isBookmarked, questionId: qId };
  });

export const removeBookmark = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ questionId: z.string() }).parse(d))
  .handler(async ({ data, context }: { data: { questionId: string }; context: any }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;
    const qId = data.questionId;

    try {
      await supabaseAdmin.from("bookmarks").delete().eq("user_id", userId).eq("question_id", qId);
    } catch {}

    try {
      const { data: userRes } = await supabaseAdmin.auth.admin.getUserById(userId);
      const currentList: string[] = (userRes?.user?.user_metadata?.["bookmarks"] as string[]) || [];
      const updatedList = currentList.filter((id) => id !== qId);
      await supabaseAdmin.auth.admin.updateUserById(userId, {
        user_metadata: { ...(userRes?.user?.user_metadata || {}), bookmarks: updatedList },
      });
    } catch {}

    return { ok: true, questionId: qId };
  });

export const getStudentAnalytics = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({
      examId: z.string().default("all"),
      timeframe: z.enum(["all", "30d", "7d"]).default("all").optional(),
    }).parse(d ?? {})
  )
  .handler(async ({ data, context }: any) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;

    let query = supabaseAdmin
      .from("attempts")
      .select("id, exam_id, mode, score, percentage, correct_count, incorrect_count, unanswered_count, total_questions, answers, created_at, status")
      .eq("user_id", userId)
      .eq("status", "submitted")
      .order("created_at", { ascending: false });

    if (data?.examId && data.examId !== "all") {
      query = query.eq("exam_id", data.examId);
    }
    const { data: attempts } = await query;

    let filteredAttempts = attempts || [];
    if (data?.timeframe === "7d") {
      const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      filteredAttempts = filteredAttempts.filter((a: any) => a.created_at && a.created_at >= cutoff);
    } else if (data?.timeframe === "30d") {
      const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
      filteredAttempts = filteredAttempts.filter((a: any) => a.created_at && a.created_at >= cutoff);
    }

    const { data: openAttempts } = await supabaseAdmin
      .from("attempts")
      .select("id, exam_id, mode, track, level, created_at, deadline, status, answers")
      .eq("user_id", userId)
      .eq("status", "in_progress")
      .order("created_at", { ascending: false })
      .limit(1);

    const { computeStudentAnalytics } = await import("@/lib/engine/analytics");
    const analyticsResult = computeStudentAnalytics(filteredAttempts);

    const firstOpen = openAttempts && openAttempts.length > 0 ? openAttempts[0] : null;
    const activeMeta = (firstOpen?.answers && typeof firstOpen.answers === "object" && !Array.isArray(firstOpen.answers))
      ? (firstOpen.answers as Record<string, any>)["_meta"]
      : undefined;

    const activeSession = firstOpen ? {
      id: firstOpen.id,
      examId: firstOpen.exam_id,
      mode: firstOpen.mode,
      track: firstOpen.track || activeMeta?.track || "",
      level: firstOpen.level || activeMeta?.level || "easy",
    } : null;

    return {
      ...analyticsResult,
      activeSession,
    };
  });

export const getLeaderboard = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) =>
    z
      .object({
        examId: z.string().default("all"),
        limit: z.number().int().min(1).max(100).default(50),
        userId: z.string().optional(),
      })
      .parse(d ?? {})
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const examFilter = data.examId || "all";
    const limit = data.limit || 50;
    const callingUserId = (context as any)?.userId || data?.userId;

    let query = supabaseAdmin
      .from("attempts")
      .select("id, user_id, exam_id, score, percentage, correct_count, incorrect_count, total_questions, created_at, status")
      .eq("status", "submitted")
      .order("percentage", { ascending: false });

    if (examFilter !== "all") {
      query = query.eq("exam_id", examFilter);
    }

    const { data: attempts } = await query;
    const { rankLeaderboard } = await import("@/lib/engine/analytics");
    if (!attempts || attempts.length === 0) {
      return { entries: [], currentUserRank: null, totalParticipants: 0 };
    }

    const uniqueUserIds = Array.from(new Set(attempts.map((a: any) => a.user_id as string)));
    if (callingUserId && !uniqueUserIds.includes(callingUserId)) {
      uniqueUserIds.push(callingUserId);
    }

    let profiles: any[] = [];
    if (uniqueUserIds.length > 0) {
      const { data: profileRows } = await supabaseAdmin
        .from("profiles")
        .select("id, display_name, avatar_url")
        .in("id", uniqueUserIds.slice(0, 100));
      profiles = profileRows || [];
    }

    return rankLeaderboard(attempts, profiles, callingUserId, limit);
  });

/* ==========================================================================
   USER PROFILE PERSISTENCE & CROSS-DEVICE SYNCHRONIZATION
   ========================================================================== */

export const getUserProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }: { context: any }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;

    let dbProfile: any = null;
    try {
      const { data } = await supabaseAdmin.from("profiles").select("*").eq("id", userId).maybeSingle();
      dbProfile = data;
    } catch {}

    let meta: Record<string, any> = {};
    let email: string | null = null;
    try {
      const { data: uRes } = await supabaseAdmin.auth.admin.getUserById(userId);
      meta = uRes?.user?.user_metadata || {};
      email = uRes?.user?.email || null;
    } catch {}

    return {
      id: userId,
      display_name: dbProfile?.display_name || meta["display_name"] || meta["full_name"] || email?.split("@")[0] || "Student",
      email: dbProfile?.email || email,
      phone: dbProfile?.phone || meta["phone"] || null,
      avatar_url: dbProfile?.avatar_url || meta["avatar_url"] || null,
      standard: dbProfile?.standard || meta["standard"] || "12th Standard",
      stream: dbProfile?.stream || meta["stream"] || "PCMB",
      location: dbProfile?.location || meta["location"] || "Bengaluru, Karnataka",
      about_me: dbProfile?.about_me || meta["about_me"] || "",
      target_exams: dbProfile?.target_exams || meta["target_exams"] || ["KCET", "JEE Main"],
      primary_exam: dbProfile?.primary_exam || meta["primary_exam"] || "KCET",
      exam_details: dbProfile?.exam_details || meta["exam_details"] || {},
      study_goals: dbProfile?.study_goals || meta["study_goals"] || {},
      learning_preferences: dbProfile?.learning_preferences || meta["learning_preferences"] || {},
      notification_preferences: dbProfile?.notification_preferences || meta["notification_preferences"] || {},
    };
  });

const profileUpdateSchema = z.object({
  display_name: z.string().optional(),
  phone: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  about_me: z.string().optional().nullable(),
  avatar_url: z.string().optional().nullable(),
  standard: z.string().optional().nullable(),
  stream: z.string().optional().nullable(),
  target_exams: z.array(z.string()).optional(),
  primary_exam: z.string().optional().nullable(),
  exam_details: z.record(z.any()).optional(),
  study_goals: z.record(z.any()).optional(),
  learning_preferences: z.record(z.any()).optional(),
  notification_preferences: z.record(z.any()).optional(),
});

export type ProfileUpdateData = z.infer<typeof profileUpdateSchema>;

export const updateUserProfile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => profileUpdateSchema.parse(d ?? {}))
  .handler(async ({ data, context }: { data: ProfileUpdateData; context: any }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;

    // 1. Authoritative update to Supabase Auth user_metadata
    let updatedMeta: Record<string, any> = {};
    try {
      const { data: userRes } = await supabaseAdmin.auth.admin.getUserById(userId);
      const existingMeta = userRes?.user?.user_metadata || {};
      updatedMeta = {
        ...existingMeta,
        ...(data.display_name !== undefined ? { full_name: data.display_name, display_name: data.display_name } : {}),
        ...(data.phone !== undefined ? { phone: data.phone } : {}),
        ...(data.location !== undefined ? { location: data.location } : {}),
        ...(data.about_me !== undefined ? { about_me: data.about_me } : {}),
        ...(data.avatar_url !== undefined ? { avatar_url: data.avatar_url } : {}),
        ...(data.standard !== undefined ? { standard: data.standard } : {}),
        ...(data.stream !== undefined ? { stream: data.stream } : {}),
        ...(data.target_exams !== undefined ? { target_exams: data.target_exams } : {}),
        ...(data.primary_exam !== undefined ? { primary_exam: data.primary_exam } : {}),
        ...(data.exam_details !== undefined ? { exam_details: data.exam_details } : {}),
        ...(data.study_goals !== undefined ? { study_goals: data.study_goals } : {}),
        ...(data.learning_preferences !== undefined ? { learning_preferences: data.learning_preferences } : {}),
        ...(data.notification_preferences !== undefined ? { notification_preferences: data.notification_preferences } : {}),
      };

      await supabaseAdmin.auth.admin.updateUserById(userId, {
        user_metadata: updatedMeta,
      });
    } catch (authErr) {
      console.warn("Could not update auth user_metadata:", authErr);
    }

    // 2. Authoritative update to public.profiles Postgres table
    try {
      const fullProfilePayload: Record<string, any> = {
        id: userId,
        updated_at: new Date().toISOString(),
      };
      if (data.display_name !== undefined) fullProfilePayload["display_name"] = data.display_name;
      if (data.phone !== undefined) fullProfilePayload["phone"] = data.phone;
      if (data.location !== undefined) fullProfilePayload["location"] = data.location;
      if (data.about_me !== undefined) fullProfilePayload["about_me"] = data.about_me;
      if (data.avatar_url !== undefined) fullProfilePayload["avatar_url"] = data.avatar_url;
      if (data.standard !== undefined) fullProfilePayload["standard"] = data.standard;
      if (data.stream !== undefined) fullProfilePayload["stream"] = data.stream;
      if (data.target_exams !== undefined) fullProfilePayload["target_exams"] = data.target_exams;
      if (data.primary_exam !== undefined) fullProfilePayload["primary_exam"] = data.primary_exam;
      if (data.exam_details !== undefined) fullProfilePayload["exam_details"] = data.exam_details;
      if (data.study_goals !== undefined) fullProfilePayload["study_goals"] = data.study_goals;
      if (data.learning_preferences !== undefined) fullProfilePayload["learning_preferences"] = data.learning_preferences;
      if (data.notification_preferences !== undefined) fullProfilePayload["notification_preferences"] = data.notification_preferences;

      const { error: pErr } = await supabaseAdmin.from("profiles").upsert(fullProfilePayload as any);

      if (pErr && (pErr.code === "PGRST204" || pErr.code === "42703")) {
        // Fallback for live schema missing extended columns
        const corePayload: Record<string, any> = {
          id: userId,
          updated_at: new Date().toISOString(),
        };
        if (data.display_name !== undefined) corePayload["display_name"] = data.display_name;
        if (data.phone !== undefined) corePayload["phone"] = data.phone;
        if (data.avatar_url !== undefined) corePayload["avatar_url"] = data.avatar_url;
        if (data.standard !== undefined) corePayload["standard"] = data.standard;
        if (data.stream !== undefined) corePayload["stream"] = data.stream;

        await supabaseAdmin.from("profiles").upsert(corePayload as any);
      }
    } catch (dbErr) {
      console.warn("Could not upsert profiles table:", dbErr);
    }

    return { ok: true, metadata: updatedMeta };
  });


