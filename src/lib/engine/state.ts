import { LEVELS, PRACTICE_SET_SIZE, type Level } from "./patterns";
import { hasAnswer, type Response } from "./scoring";

// ---------- Question palette ----------
export type QStatus = "not_visited" | "not_answered" | "answered" | "marked" | "answered_marked";
export type QMeta = { visited?: boolean; marked?: boolean };

/** Status depends only on visit/answer/review flags - never on correctness. */
export function paletteStatus(meta: QMeta | undefined, response: Response): QStatus {
  const answered = hasAnswer(response);
  if (meta?.marked) return answered ? "answered_marked" : "marked";
  if (answered) return "answered";
  return meta?.visited ? "not_answered" : "not_visited";
}

export const STATUS_LABEL: Record<QStatus, string> = {
  not_visited: "Not visited",
  not_answered: "Not answered",
  answered: "Answered",
  marked: "Marked for review",
  answered_marked: "Answered & marked",
};

// ---------- Timer ----------
export const FINAL_WARNING_MS = 5 * 60 * 1000;
export const SUBMIT_GRACE_MS = 30 * 1000;
export const remainingMs = (deadline: string | number, now: number) => Math.max(0, new Date(deadline).getTime() - now);
export const isFinalWarning = (ms: number) => ms > 0 && ms <= FINAL_WARNING_MS;
export const isExpired = (deadline: string | number, now: number) => now >= new Date(deadline).getTime();
/** Answers may still be saved shortly after the deadline to absorb network latency. */
export const canSave = (deadline: string | number, now: number) => now < new Date(deadline).getTime() + SUBMIT_GRACE_MS;
export function formatClock(ms: number) {
  const t = Math.ceil(ms / 1000);
  const h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
  const p = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${p(m)}:${p(s)}` : `${p(m)}:${p(s)}`;
}

// ---------- Mastery ----------
export const DEFAULT_MASTERY_THRESHOLD = 80;

export function getMasteryThreshold(): number {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem("study_mastery_threshold");
      if (saved) {
        const val = parseInt(saved, 10);
        if (!isNaN(val) && val >= 50 && val <= 100) return val;
      }
    } catch {}
  }
  return DEFAULT_MASTERY_THRESHOLD;
}

export const MASTERY_THRESHOLD = 80;
export type PracticeAttempt = { level: Level; percent: number | null; questionCount: number; status: string };

export const isEligible = (a: PracticeAttempt) => a.status === "submitted" && a.questionCount >= PRACTICE_SET_SIZE && a.percent != null;

export function masteryState(attempts: PracticeAttempt[], customThreshold?: number) {
  const threshold = customThreshold ?? getMasteryThreshold();
  const passed: Level[] = [];
  const best: Partial<Record<Level, number>> = {};
  for (const lvl of LEVELS) {
    const elig = attempts.filter((a) => a.level === lvl && isEligible(a));
    if (elig.length) best[lvl] = Math.max(...elig.map((a) => a.percent as number));
  }
  for (const lvl of LEVELS) {
    if ((best[lvl] ?? -1) >= threshold) passed.push(lvl);
    else break;
  }
  const current: Level | null = LEVELS[passed.length] ?? null;
  const unlocked = LEVELS.slice(0, Math.min(LEVELS.length, passed.length + 1));
  return { passed, unlocked, current, best, mastered: passed.length === LEVELS.length, threshold };
}

export const isUnlocked = (attempts: PracticeAttempt[], level: Level, threshold?: number) => masteryState(attempts, threshold).unlocked.includes(level);

/**
 * Retake selection: questions not seen in this level's recent attempts first, then the
 * least-recently-seen ones, so refreshing or retrying never replays the same set.
 */
export function selectQuestions(pool: string[], history: string[][], n: number, rand: () => number = Math.random): string[] {
  const lastSeen = new Map<string, number>();
  history.forEach((ids, i) => ids.forEach((id) => { if (!lastSeen.has(id)) lastSeen.set(id, i); })); // history newest first
  const shuffled = [...pool].map((id) => ({ id, r: rand() })).sort((a, b) => a.r - b.r);
  const age = (id: string) => lastSeen.get(id) ?? 1e9;
  shuffled.sort((a, b) => age(b.id) - age(a.id));
  return shuffled.slice(0, n).map((x) => ({ id: x.id, r: rand() })).sort((a, b) => a.r - b.r).map((x) => x.id);
}

/** Deterministic per-attempt option shuffle (stable across reloads; option ids unchanged so scoring is unaffected). */
export function shuffleOptions<T>(opts: T[], seedStr: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seedStr.length; i++) h = Math.imul(h ^ seedStr.charCodeAt(i), 16777619);
  const rand = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
  const a = [...opts];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); const t = a[i]!; a[i] = a[j]!; a[j] = t; }
  return a;
}
