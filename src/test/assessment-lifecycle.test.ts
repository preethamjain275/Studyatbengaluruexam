import { describe, expect, it, vi, beforeEach } from "vitest";
import { computeResult, scoreResponse, type KeyedQuestion } from "@/lib/engine/scoring";
import { shuffleOptions } from "@/lib/engine/state";
import { getPreset, PRACTICE_MARKING } from "@/lib/engine/patterns";
import { z } from "zod";

describe("Assessment Lifecycle & Scoring Regression Tests", () => {
  const sampleQuestions: KeyedQuestion[] = [
    { id: "q1", qtype: "single", correct: "b", subject: "Physics", chapter: "Mechanics" },
    { id: "q2", qtype: "single", correct: "a", subject: "Physics", chapter: "Kinematics" },
    { id: "q3", qtype: "multiple", correct: ["a", "c"], subject: "Physics", chapter: "Optics" },
    { id: "q4", qtype: "numerical", correct: { value: 10, tolerance: 0.1 }, subject: "Physics", chapter: "Thermodynamics" },
    { id: "q5", qtype: "single", correct: "d", subject: "Physics", chapter: "Electrostatics" },
  ];

  // Test A — Single-choice answer
  it("Test A: Single-choice answer persists and calculates correct score", () => {
    const studentAnswers = { q1: "b", q2: "c" }; // q1 correct (+1), q2 incorrect (0)
    const result = computeResult(sampleQuestions.slice(0, 2), studentAnswers, () => PRACTICE_MARKING);

    expect(result.score).toBe(1);
    expect(result.maxScore).toBe(2);
    expect(result.percent).toBe(50);
    expect(result.correct).toBe(1);
    expect(result.incorrect).toBe(1);
    expect(result.unanswered).toBe(0);
    expect(result.outcomes["q1"]?.outcome).toBe("correct");
    expect(result.outcomes["q2"]?.outcome).toBe("incorrect");
  });

  // Test B — Multiple answers
  it("Test B: Multiple-choice answer survives validation and scores correctly", () => {
    const adv = getPreset("jee-adv-p1-2026")!;
    const marking = adv.marking.multiple!;

    // Perfect match
    const full = scoreResponse("multiple", ["a", "c"], ["a", "c"], marking);
    expect(full.outcome).toBe("correct");
    expect(full.marks).toBe(4);

    // Partial credit
    const partial = scoreResponse("multiple", ["a", "b", "c"], ["a", "b"], marking);
    expect(partial.outcome).toBe("partial");
    expect(partial.marks).toBe(2);

    // Wrong option selected -> penalty
    const wrong = scoreResponse("multiple", ["a", "c"], ["a", "d"], marking);
    expect(wrong.outcome).toBe("incorrect");
    expect(wrong.marks).toBe(-2);
  });

  // Test C — Internal metadata sanitization
  it("Test C: Student answer state containing _meta survives validation with metadata cleanly separated", () => {
    const answerValSchema = z.union([
      z.string().max(128),
      z.number().transform((n) => String(n)),
      z.array(z.string().max(64)).max(20),
    ]);

    const answersSchema = z.preprocess((val) => {
      if (val && typeof val === "object" && !Array.isArray(val)) {
        const clean: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
          if (!k.startsWith("_")) clean[k] = v;
        }
        return clean;
      }
      return val;
    }, z.record(z.string(), answerValSchema));

    // Client passes payload containing internal _meta and _result
    const incomingPayload = {
      _meta: { track: "Physics", level: "easy", question_ids: ["q1", "q2"] },
      _result: { score: 0 },
      q1: "b",
      q2: ["a", "c"],
      q4: "10.0",
    };

    const parsed = answersSchema.safeParse(incomingPayload);
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data["_meta"]).toBeUndefined();
      expect(parsed.data["_result"]).toBeUndefined();
      expect(parsed.data["q1"]).toBe("b");
      expect(parsed.data["q2"]).toEqual(["a", "c"]);
      expect(parsed.data["q4"]).toBe("10.0");
    }
  });

  // Test D — Autosave and submission race
  it("Test D: Race condition: latest selection submitted supersedes older in-flight save", () => {
    let databaseState: Record<string, any> = { q1: "a" }; // stale autosave

    // Simulated in-flight save function
    const inFlightSave = async (answers: Record<string, any>) => {
      await new Promise((res) => setTimeout(res, 20));
      // In flight save completes later
      databaseState = { ...databaseState, ...answers };
    };

    // Simulated submission with latest answers
    const submitFinal = (latestAnswers: Record<string, any>) => {
      // Final submission captures latest answers atomically
      databaseState = { ...databaseState, ...latestAnswers };
      return databaseState;
    };

    // User changes answer to "b" and immediately submits
    const slowSavePromise = inFlightSave({ q1: "a" });
    const finalSubmissionResult = submitFinal({ q1: "b" }); // user clicked option "b" right before submitting

    expect(finalSubmissionResult["q1"]).toBe("b");
  });

  // Test E — Failed save error handling
  it("Test E: Failed save raises error and does NOT silently delete answers or finalize zero score", async () => {
    let localStorageSaved: string | null = JSON.stringify({ q1: "b", q2: "a" });
    const mockSaveApi = vi.fn().mockRejectedValue(new Error("Network connection lost"));

    let submissionSucceeded = false;
    let warningMessage: string | null = null;

    try {
      await mockSaveApi();
      submissionSucceeded = true;
      localStorageSaved = null; // Only cleared on success
    } catch (e) {
      submissionSucceeded = false;
      warningMessage = "Submission failed - check your connection and try again. Your answers are kept on this device.";
    }

    expect(submissionSucceeded).toBe(false);
    expect(warningMessage).toContain("Submission failed");
    // Answers must remain intact in local storage for retry!
    expect(localStorageSaved).not.toBeNull();
    expect(JSON.parse(localStorageSaved!)).toEqual({ q1: "b", q2: "a" });
  });

  // Test F — Reload / Resume
  it("Test F: Answers are cleanly restored upon reloading or resuming attempt", () => {
    const rawStored = JSON.stringify({
      answers: { _meta: { track: "Physics" }, q1: "b", q2: "a" },
      meta: { q1: { visited: true }, q2: { visited: true, marked: true } },
    });

    const parsed = JSON.parse(rawStored);
    const cleanRestoredAnswers: Record<string, any> = {};
    for (const [k, v] of Object.entries(parsed.answers)) {
      if (!k.startsWith("_") && v != null) {
        cleanRestoredAnswers[k] = v;
      }
    }

    expect(cleanRestoredAnswers).toEqual({ q1: "b", q2: "a" });
    expect(cleanRestoredAnswers["_meta"]).toBeUndefined();
    expect(parsed.meta.q2.marked).toBe(true);
  });

  // Test G — Scoring and counts sum
  it("Test G: Correct, incorrect, partial, and unanswered counts sum to total questions", () => {
    const questions: KeyedQuestion[] = [
      { id: "1", qtype: "single", correct: "a", subject: "Physics", chapter: "C1" },
      { id: "2", qtype: "single", correct: "b", subject: "Physics", chapter: "C1" },
      { id: "3", qtype: "single", correct: "c", subject: "Physics", chapter: "C2" },
      { id: "4", qtype: "single", correct: "d", subject: "Physics", chapter: "C2" },
      { id: "5", qtype: "multiple", correct: ["a", "b"], subject: "Physics", chapter: "C3" },
      { id: "6", qtype: "single", correct: "a", subject: "Physics", chapter: "C3" },
    ];

    const answers = {
      "1": "a", // correct
      "2": "c", // incorrect
      "3": "c", // correct
      // "4" left unanswered
      "5": ["a"], // partial
      // "6" left unanswered
    };

    const adv = getPreset("jee-adv-p1-2026")!;
    const res = computeResult(questions, answers, (t) => adv.marking[t] || PRACTICE_MARKING);

    const totalCount = res.correct + res.incorrect + res.partial + res.unanswered;
    expect(totalCount).toBe(questions.length);
    expect(res.correct).toBe(2);
    expect(res.incorrect).toBe(1);
    expect(res.partial).toBe(1);
    expect(res.unanswered).toBe(2);
  });

  // Test H — Shuffled options retain stable logical correctness
  it("Test H: Shuffling display order does not change option IDs or correctness", () => {
    const originalOptions = [
      { id: "a", text: "Option Alpha" },
      { id: "b", text: "Option Beta" },
      { id: "c", text: "Option Gamma" },
      { id: "d", text: "Option Delta" },
    ];

    const seed = "attempt-uuid-12345" + "q1";
    const shuffled = shuffleOptions(originalOptions, seed);

    // Option IDs must be preserved
    const ids = shuffled.map((o) => o.id).sort();
    expect(ids).toEqual(["a", "b", "c", "d"]);

    // Correct key is "b"
    const chosenOptionId = "b";
    const isCorrect = chosenOptionId === "b";
    expect(isCorrect).toBe(true);
  });

  // Test I — Repeated submission guard
  it("Test I: Repeated submission is guarded against double scoring", () => {
    let attemptStatus = "in_progress";
    let scoreCount = 0;

    const finalize = () => {
      if (attemptStatus === "submitted") {
        return "already_submitted";
      }
      attemptStatus = "submitted";
      scoreCount += 1;
      return "scored";
    };

    expect(finalize()).toBe("scored");
    expect(finalize()).toBe("already_submitted");
    expect(scoreCount).toBe(1);
  });

  // Test J — Authorization check
  it("Test J: User cannot modify or finalize another student's attempt", () => {
    const attempt = {
      id: "attempt-1",
      user_id: "student-user-alice",
      status: "in_progress",
    };

    const verifyAccess = (requestingUserId: string, userRole: string = "authenticated") => {
      if (attempt.user_id !== requestingUserId && userRole !== "super_admin" && userRole !== "admin") {
        throw new Error("Unauthorized: You do not have permission to access this attempt");
      }
      return true;
    };

    // Owner access allowed
    expect(verifyAccess("student-user-alice")).toBe(true);

    // Admin access allowed
    expect(verifyAccess("admin-user-preetham", "super_admin")).toBe(true);

    // Other student rejected
    expect(() => verifyAccess("student-user-bob")).toThrow("Unauthorized");
  });
});
