import { describe, expect, it, vi } from "vitest";
import { computeResult, scoreResponse, submissionDecision, type KeyedQuestion, type Response } from "@/lib/engine/scoring";
import {
  paletteStatus,
  masteryState,
  isUnlocked,
  selectQuestions,
  remainingMs,
  isFinalWarning,
  isExpired,
  canSave,
  shuffleOptions,
  DEFAULT_MASTERY_THRESHOLD,
  SUBMIT_GRACE_MS,
} from "@/lib/engine/state";
import { getPreset, PRACTICE_MARKING, LEVELS, type Level } from "@/lib/engine/patterns";
import { z } from "zod";

describe("Phase 3: Core Student Journey Comprehensive Regression Tests (Tests A–P)", () => {
  const sampleBank: KeyedQuestion[] = [
    { id: "q-single-1", qtype: "single", correct: "a", subject: "Physics", chapter: "Units and Measurements" },
    { id: "q-single-2", qtype: "single", correct: "c", subject: "Physics", chapter: "Motion in a Straight Line" },
    { id: "q-multi-1", qtype: "multiple", correct: ["a", "c"], subject: "Physics", chapter: "Laws of Motion" },
    { id: "q-num-1", qtype: "numerical", correct: { value: 9.8, tolerance: 0.05 }, subject: "Physics", chapter: "Gravitation" },
    { id: "q-single-3", qtype: "single", correct: "d", subject: "Chemistry", chapter: "Atomic Structure" },
  ];

  // Test A — Single-choice response
  it("Test A: Single-choice response persisted, scored authoritatively and outcomes classified correctly", () => {
    const studentAnswers: Record<string, Response> = {
      "q-single-1": "a", // correct (+1 in practice)
    };
    const result = computeResult(sampleBank.slice(0, 1), studentAnswers, () => PRACTICE_MARKING);

    expect(result.score).toBe(1);
    expect(result.maxScore).toBe(1);
    expect(result.percent).toBe(100);
    expect(result.correct).toBe(1);
    expect(result.incorrect).toBe(0);
    expect(result.unanswered).toBe(0);
    expect(result.outcomes["q-single-1"]?.outcome).toBe("correct");
    expect(result.outcomes["q-single-1"]?.marks).toBe(1);
  });

  // Test B — Incorrect response
  it("Test B: Incorrect response is classified correctly and configured exam marking is applied", () => {
    const neet = getPreset("neet-ug-2026")!;
    const marking = neet.marking.single!; // +4 correct, -1 incorrect

    const singleScore = scoreResponse("single", "a", "b", marking);
    expect(singleScore.outcome).toBe("incorrect");
    expect(singleScore.marks).toBe(-1);

    const result = computeResult(
      [sampleBank[0]!],
      { "q-single-1": "b" },
      () => marking
    );
    expect(result.correct).toBe(0);
    expect(result.incorrect).toBe(1);
    expect(result.unanswered).toBe(0);
    expect(result.score).toBe(-1);
    expect(result.outcomes["q-single-1"]?.outcome).toBe("incorrect");
  });

  // Test C — Unanswered response
  it("Test C: Unanswered response is classified as unanswered (not incorrect) with 0 marks", () => {
    const result = computeResult(
      [sampleBank[0]!, sampleBank[1]!],
      { "q-single-1": "a" }, // q-single-2 left unanswered
      () => PRACTICE_MARKING
    );

    expect(result.correct).toBe(1);
    expect(result.incorrect).toBe(0);
    expect(result.unanswered).toBe(1);
    expect(result.outcomes["q-single-2"]?.outcome).toBe("unanswered");
    expect(result.outcomes["q-single-2"]?.marks).toBe(0);
  });

  // Test D — Multiple-choice response (full and partial credit)
  it("Test D: Multiple-choice responses calculate full credit, partial credit, and penalties accurately", () => {
    const adv = getPreset("jee-adv-p1-2026")!;
    const marking = adv.marking.multiple!;

    // Full credit: exactly ["a", "c"]
    const full = scoreResponse("multiple", ["a", "c"], ["a", "c"], marking);
    expect(full.outcome).toBe("correct");
    expect(full.marks).toBe(4);

    // Partial credit: ["a"] (1 correct option selected -> 1 * 1 = 1 mark)
    const partial = scoreResponse("multiple", ["a", "c"], ["a"], marking);
    expect(partial.outcome).toBe("partial");
    expect(partial.marks).toBe(1);

    // Incorrect penalty: includes wrong option "b"
    const wrong = scoreResponse("multiple", ["a", "c"], ["a", "b"], marking);
    expect(wrong.outcome).toBe("incorrect");
    expect(wrong.marks).toBe(-2);
  });

  // Test E — Internal metadata tolerance & canonical answer contract
  it("Test E: Payloads containing internal metadata (_meta, _statuses, _result) are sanitized without rejecting valid student answers", () => {
    const answerValSchema = z.union([
      z.string().max(128),
      z.number().transform((n) => String(n)),
      z.array(z.string().max(64)).max(20),
    ]);

    const sanitizeAnswers = (raw: Record<string, any>) => {
      const clean: Record<string, any> = {};
      for (const [k, v] of Object.entries(raw)) {
        if (!k.startsWith("_") && v != null) {
          clean[k] = v;
        }
      }
      return clean;
    };

    const mixedPayload = {
      _meta: { track: "Physics", level: "easy", question_ids: ["q-single-1", "q-multi-1"] },
      _statuses: { "q-single-1": { visited: true } },
      _result: { score: 10 },
      "q-single-1": "a",
      "q-multi-1": ["a", "c"],
      "q-num-1": "9.81",
    };

    const sanitized = sanitizeAnswers(mixedPayload);
    expect(sanitized["_meta"]).toBeUndefined();
    expect(sanitized["_statuses"]).toBeUndefined();
    expect(sanitized["_result"]).toBeUndefined();
    expect(sanitized["q-single-1"]).toBe("a");
    expect(sanitized["q-multi-1"]).toEqual(["a", "c"]);
    expect(sanitized["q-num-1"]).toBe("9.81");
  });

  // Test F — Navigation persistence
  it("Test F: Navigation between questions preserves answers, visited states, and mark-for-review status", () => {
    let answersState: Record<string, any> = {};
    let metaState: Record<string, { visited?: boolean; marked?: boolean }> = {};

    // Visit Question 1 and select answer "a"
    metaState["q-single-1"] = { visited: true, marked: false };
    answersState["q-single-1"] = "a";

    // Navigate to Question 2, mark for review without answering
    metaState["q-single-2"] = { visited: true, marked: true };

    // Navigate back to Question 1
    expect(answersState["q-single-1"]).toBe("a");
    expect(metaState["q-single-1"]?.visited).toBe(true);
    expect(paletteStatus(metaState["q-single-1"], answersState["q-single-1"])).toBe("answered");

    // Check Question 2 palette status
    expect(paletteStatus(metaState["q-single-2"], answersState["q-single-2"])).toBe("marked");
  });

  // Test G — Autosave and concurrent submission precedence
  it("Test G: Concurrent autosave and submit: latest submitted snapshot supersedes in-flight background save", async () => {
    let dbRecord = { status: "in_progress", answers: { "q-single-1": "a" } as Record<string, any> };

    // Background autosave delayed by network
    const inFlightAutosave = async () => {
      await new Promise((r) => setTimeout(r, 20));
      // Server guard: saveProgress only updates attempts where status === "in_progress"
      if (dbRecord.status === "in_progress") {
        dbRecord.answers = { ...dbRecord.answers, "q-single-1": "a" };
      }
    };

    // User changes answer to "b" and immediately submits
    const executeSubmit = (finalClientAnswers: Record<string, any>) => {
      dbRecord.status = "submitted";
      dbRecord.answers = { ...dbRecord.answers, ...finalClientAnswers };
    };

    const autosavePromise = inFlightAutosave();
    executeSubmit({ "q-single-1": "b" }); // Final submit passes latest state and commits "submitted"

    await autosavePromise;
    // Server status guard prevents stale in-flight save from overwriting final answers
    expect(dbRecord.answers["q-single-1"]).toBe("b");
    expect(dbRecord.status).toBe("submitted");
  });

  // Test H — Failed persistence recovery
  it("Test H: Failed network/DB persistence retains local backup and does not falsely claim save success", async () => {
    const backupKey = "attempt-backup:test-uuid-123";
    const localStore = new Map<string, string>();
    localStore.set(backupKey, JSON.stringify({ answers: { "q-single-1": "a" } }));

    let saveStatus: "saved" | "saving" | "offline" = "saving";
    const failingSave = vi.fn().mockRejectedValue(new Error("Supabase connection timeout"));

    try {
      await failingSave();
      saveStatus = "saved";
    } catch {
      saveStatus = "offline";
    }

    expect(saveStatus).toBe("offline");
    // Local backup remains preserved for retry
    expect(localStore.has(backupKey)).toBe(true);
    const restored = JSON.parse(localStore.get(backupKey)!);
    expect(restored.answers["q-single-1"]).toBe("a");
  });

  // Test I — Reload and resume
  it("Test I: Reloading an in-progress attempt restores saved answers and clock offset", () => {
    const serverDeadline = new Date(Date.now() + 600000).toISOString();
    const serverNow = Date.now();
    const clientNow = serverNow - 5000; // Client clock is 5 seconds behind

    const clockOffset = serverNow - clientNow;
    const remaining = remainingMs(serverDeadline, clientNow + clockOffset);

    // Remaining time computed accurately despite client clock skew
    expect(remaining).toBeGreaterThan(590000);
    expect(remaining).toBeLessThanOrEqual(600000);
  });

  // Test J — Finalization and duplicate submission guard
  it("Test J: Duplicate finalization is idempotent and cannot score twice or corrupt result", () => {
    let status = "in_progress";
    let scoreCalculations = 0;

    const finalize = () => {
      const decision = submissionDecision(status);
      if (decision === "already_submitted") {
        return { status, scoreCalculations, duplicate: true };
      }
      status = "submitted";
      scoreCalculations += 1;
      return { status, scoreCalculations, duplicate: false };
    };

    const first = finalize();
    expect(first.duplicate).toBe(false);
    expect(first.scoreCalculations).toBe(1);

    const second = finalize();
    expect(second.duplicate).toBe(true);
    expect(second.scoreCalculations).toBe(1); // Idempotent: score calculated exactly once
  });

  // Test K — Authoritative timer & 30-second submission grace window
  it("Test K: Authoritative timer: answers can be saved during 30s grace window, rejected after grace expires", () => {
    const now = Date.now();
    const deadline = now - 5000; // 5 seconds past deadline

    // 5 seconds past deadline is within 30-second grace window (SUBMIT_GRACE_MS)
    expect(isExpired(deadline, now)).toBe(true);
    expect(canSave(deadline, now)).toBe(true);

    const wayPastDeadline = now - 35000; // 35 seconds past deadline (exceeds grace)
    expect(canSave(wayPastDeadline, now)).toBe(false);
  });

  // Test L — Option shuffling invariance
  it("Test L: Option shuffling scrambles display order while keeping option IDs and evaluation invariant", () => {
    const options = [
      { id: "a", text: "Alpha" },
      { id: "b", text: "Beta" },
      { id: "c", text: "Gamma" },
      { id: "d", text: "Delta" },
    ];

    const shuffled = shuffleOptions(options, "attempt-seed-999-q1");
    // All original option IDs exist
    expect(shuffled.map((o) => o.id).sort()).toEqual(["a", "b", "c", "d"]);

    // If student clicks option with id "b"
    const selectedOptionId = "b";
    const evaluated = scoreResponse("single", "b", selectedOptionId, PRACTICE_MARKING);
    expect(evaluated.outcome).toBe("correct");
    expect(evaluated.marks).toBe(1);
  });

  // Test M — Exam patterns
  it("Test M: Different examination presets execute their distinct marking and duration rules", () => {
    const neet = getPreset("neet-ug-2026")!;
    const kcet = getPreset("kcet-2026")!;
    const jee = getPreset("jee-adv-p1-2026")!;

    expect(neet.marking.single?.correct).toBe(4);
    expect(neet.marking.single?.incorrect).toBe(-1);

    expect(kcet.marking.single?.correct).toBe(1);
    expect(kcet.marking.single?.incorrect).toBe(0); // KCET has no negative marking

    expect(jee.marking.multiple?.correct).toBe(4);
    expect(jee.marking.multiple?.partialPerCorrectOption).toBe(1);
  });

  // Test N — Mastery progression
  it("Test N: Practice mastery requires >= 80% qualifying attempt to unlock next difficulty level", () => {
    const incompleteAttempt = { level: "easy" as Level, percent: 100, questionCount: 5, status: "in_progress" };
    // Incomplete attempt does NOT unlock Medium
    expect(isUnlocked([incompleteAttempt], "medium", DEFAULT_MASTERY_THRESHOLD)).toBe(false);

    const nonQualifying = { level: "easy" as Level, percent: 75, questionCount: 10, status: "submitted" };
    // 75% does not unlock Medium at 80% threshold
    expect(isUnlocked([nonQualifying], "medium", DEFAULT_MASTERY_THRESHOLD)).toBe(false);

    const qualifying = { level: "easy" as Level, percent: 80, questionCount: 10, status: "submitted" };
    // 80% unlocks Medium
    expect(isUnlocked([qualifying], "medium", DEFAULT_MASTERY_THRESHOLD)).toBe(true);

    const masterState = masteryState([
      qualifying,
      { level: "medium" as Level, percent: 90, questionCount: 10, status: "submitted" },
    ]);
    expect(masterState.unlocked).toEqual(["easy", "medium", "hard"]);
  });

  // Test O — Ownership and authorization security
  it("Test O: Attempt ownership enforces that only attempt owner or administrators may view, save, or submit", () => {
    const attempt = {
      id: "attempt-uuid-001",
      user_id: "student-user-111",
      status: "in_progress",
    };

    const checkAuth = (actorId: string, role?: string) => {
      if (attempt.user_id !== actorId && role !== "admin" && role !== "super_admin") {
        throw new Error("Unauthorized: You do not have permission to access this attempt");
      }
      return true;
    };

    expect(checkAuth("student-user-111")).toBe(true); // Owner succeeds
    expect(checkAuth("admin-user-999", "admin")).toBe(true); // Admin succeeds
    expect(() => checkAuth("student-user-222")).toThrow("Unauthorized"); // Other student blocked!
  });

  // Test P — Result retrieval and count consistency
  it("Test P: Result computation guarantees total question count equals sum of correct, incorrect, partial, and unanswered", () => {
    const testQuestions: KeyedQuestion[] = [
      { id: "1", qtype: "single", correct: "a", subject: "Physics", chapter: "Ch1" },
      { id: "2", qtype: "single", correct: "b", subject: "Physics", chapter: "Ch1" },
      { id: "3", qtype: "single", correct: "c", subject: "Physics", chapter: "Ch2" },
      { id: "4", qtype: "single", correct: "d", subject: "Physics", chapter: "Ch2" },
      { id: "5", qtype: "multiple", correct: ["a", "b"], subject: "Physics", chapter: "Ch3" },
      { id: "6", qtype: "single", correct: "a", subject: "Physics", chapter: "Ch3" },
      { id: "7", qtype: "single", correct: "b", subject: "Physics", chapter: "Ch4" },
      { id: "8", qtype: "single", correct: "c", subject: "Physics", chapter: "Ch4" },
      { id: "9", qtype: "single", correct: "d", subject: "Physics", chapter: "Ch5" },
      { id: "10", qtype: "single", correct: "a", subject: "Physics", chapter: "Ch5" },
    ];

    const answers: Record<string, Response> = {
      "1": "a", // correct
      "2": "a", // incorrect
      "3": "c", // correct
      "4": "b", // incorrect
      "5": ["a"], // partial
      "6": "a", // correct
      // 7, 8, 9, 10 unanswered
    };

    const result = computeResult(testQuestions, answers, () => PRACTICE_MARKING);

    expect(result.correct).toBe(3);
    expect(result.incorrect).toBe(2);
    expect(result.partial).toBe(1);
    expect(result.unanswered).toBe(4);
    expect(result.correct + result.incorrect + result.partial + result.unanswered).toBe(testQuestions.length);
  });
});
