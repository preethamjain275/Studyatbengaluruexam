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

export const getMastery = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ examId: z.string() }).parse(d))
  .handler(async ({ data, context }: { data: { examId: string }; context: any }) => {
    const { supabase, userId } = context;
    const tracks = TRACKS[data.examId] ?? [];

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
        state: masteryState(pa),
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

    if (!masteryState(pa).unlocked.includes(data.level)) {
      throw new Error("Score at least 90% in the previous level to unlock this one.");
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

    let row: any = null;
    const fullPayload = {
      user_id: userId,
      mode: "practice",
      exam_id: data.examId,
      track: t.name,
      level: data.level,
      question_ids: chosen,
      deadline,
      status: "in_progress",
      total_questions: chosen.length,
      answers: { _meta: { track: t.name, level: data.level, question_ids: chosen } },
    };

    const res1 = await supabaseAdmin.from("attempts").insert(fullPayload as any).select("id").single();
    if (!res1.error && res1.data) {
      row = res1.data;
    } else {
      const basicPayload = {
        user_id: userId,
        mode: "practice",
        exam_id: data.examId,
        deadline,
        status: "in_progress",
        total_questions: chosen.length,
        answers: { _meta: { track: t.name, level: data.level, question_ids: chosen } },
      };
      const res2 = await supabaseAdmin.from("attempts").insert(basicPayload as any).select("id").single();
      if (!res2.error && res2.data) {
        row = res2.data;
      } else {
        throw new Error(res2.error?.message || "Could not start the practice set. Please try again.");
      }
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

    let row: any = null;
    const fullPayload = {
      user_id: userId,
      mode: "mock",
      exam_id: p.examId,
      preset_id: p.id,
      question_ids: chosen,
      deadline,
      status: "in_progress",
      total_questions: chosen.length,
      answers: { _meta: { preset_id: p.id, question_ids: chosen } },
    };

    const res1 = await supabaseAdmin.from("attempts").insert(fullPayload as any).select("id").single();
    if (!res1.error && res1.data) {
      row = res1.data;
    } else {
      const basicPayload = {
        user_id: userId,
        mode: "mock",
        exam_id: p.examId,
        deadline,
        status: "in_progress",
        total_questions: chosen.length,
        answers: { _meta: { preset_id: p.id, question_ids: chosen } },
      };
      const res2 = await supabaseAdmin.from("attempts").insert(basicPayload as any).select("id").single();
      if (!res2.error && res2.data) {
        row = res2.data;
      } else {
        throw new Error(res2.error?.message || "Could not start the test. Please try again.");
      }
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

    if (att.status === "in_progress" && isExpired(att.deadline, Date.now())) {
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

    // Resolve question details directly from in-code question bank
    let qs: any[] = questionIds.map((id) => QUESTIONS_BY_ID.get(id)).filter(Boolean);
    if (qs.length === 0) {
      const { data: dbQs } = await supabaseAdmin.from("questions").select(QUESTION_COLS).in("id", questionIds);
      qs = (dbQs ?? []) as any[];
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
          ...q,
          options: shuffleOptions(q.options as { id: string; text: string }[], att.id + q.id),
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
            if (!k.startsWith("_")) clean[k] = v;
          }
          return clean;
        }
        return val;
      }, z.record(z.string(), answerValueSchema)),
      statuses: z.record(z.string(), z.object({ visited: z.boolean().optional(), marked: z.boolean().optional() })).default({}),
      events: z.array(z.object({ type: z.string().max(40), at: z.number() })).max(50).default([]),
    }).parse(d),
  )
  .handler(async ({ data, context }: { data: any; context: any }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: att } = await supabaseAdmin.from("attempts").select("*").eq("id", data.id).maybeSingle();
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
    const allowed = new Set(questionIds);
    const validStudentAnswers = Object.fromEntries(Object.entries(data.answers).filter(([k]) => allowed.has(k)));

    // Preserve metadata and store statuses safely inside answers JSONB
    const mergedAnswers = {
      ...rawAnswers,
      ...validStudentAnswers,
      _meta: {
        ...(rawAnswers?.["_meta"] || {}),
        updated_at: new Date().toISOString(),
      },
      _statuses: data.statuses,
    };

    const validStatuses = Object.fromEntries(Object.entries(data.statuses).filter(([k]) => allowed.has(k)));
    const events = [...((att.events as unknown[]) ?? []), ...data.events].slice(-500);

    // Update payload with canonical columns
    const updateObj: Record<string, any> = {
      answers: mergedAnswers,
      events: events as never,
    };

    // If statuses column exists in table, update it too
    if ("statuses" in att) {
      updateObj["statuses"] = validStatuses;
    }

    await supabaseAdmin
      .from("attempts")
      .update(updateObj as any)
      .eq("id", data.id)
      .eq("status", "in_progress");

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
            if (!k.startsWith("_")) clean[k] = v;
          }
          return clean;
        }
        return val;
      }, z.record(z.string(), answerValueSchema)).optional(),
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

    // Resolve question details and solutions from in-memory question bank
    let qs: any[] = questionIds.map((id) => QUESTIONS_BY_ID.get(id)).filter(Boolean);
    if (qs.length === 0 && questionIds.length > 0) {
      const { data: dbQs } = await supabaseAdmin.from("questions").select(`${QUESTION_COLS}, correct, explanation`).in("id", questionIds);
      qs = (dbQs ?? []) as any[];
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
      ...q,
      solution_steps: [],
      options: shuffleOptions(q.options as { id: string; text: string }[], att.id + q.id),
      correct: showSolutions ? (q.correct as string | string[] | { value: number; tolerance?: number }) : null,
      explanation: showSolutions ? q.explanation : "",
    }));

    let scoredResult = (att.result || rawAnswers?.["_result"]) as import("@/lib/engine/scoring").AttemptResult | undefined;
    if (!scoredResult || !scoredResult.outcomes) {
      const { computeResult } = await import("@/lib/engine/scoring");
      const { PRACTICE_MARKING } = await import("@/lib/engine/patterns");
      const markingFor = (t: import("@/lib/engine/patterns").QType) =>
        preset ? preset.marking[t] ?? preset.marking.single ?? PRACTICE_MARKING : PRACTICE_MARKING;
      scoredResult = computeResult(
        questions.map((q: any) => ({ id: q.id, qtype: q.qtype, correct: q.correct, subject: q.subject, chapter: q.chapter })),
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
