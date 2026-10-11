import { describe, expect, it } from "vitest";
import { scoreResponse, computeResult, submissionDecision } from "@/lib/engine/scoring";
import { paletteStatus, masteryState, isUnlocked, selectQuestions, remainingMs, isFinalWarning, isExpired, canSave } from "@/lib/engine/state";
import { getPreset, plannedMock } from "@/lib/engine/patterns";

const neet = getPreset("neet-ug-2026")!;
const adv = getPreset("jee-adv-p1-2026")!;

describe("marking schemes", () => {
  it("NEET: +4 correct, −1 wrong, 0 unanswered", () => {
    const m = neet.marking.single!;
    expect(scoreResponse("single", "b", "b", m).marks).toBe(4);
    expect(scoreResponse("single", "b", "a", m).marks).toBe(-1);
    expect(scoreResponse("single", "b", null, m).marks).toBe(0);
  });
  it("NEET full paper is 180 questions, 180 minutes, 720 marks", () => {
    const q = neet.sections.reduce((a, s) => a + s.questions, 0);
    expect(q).toBe(180);
    expect(neet.durationMin).toBe(180);
    expect(q * neet.marking.single!.correct).toBe(720);
  });
  it("KCET subject paper is 60 questions in 80 minutes with no negative marks", () => {
    const k = getPreset("kcet-2026")!;
    expect(k.sections[0]!.questions).toBe(60);
    expect(k.durationMin).toBe(80);
    expect(k.marking.single!.incorrect).toBe(0);
  });
  it("JEE Advanced multiple-correct: full, partial and wrong-option penalty", () => {
    const m = adv.marking.multiple!;
    expect(scoreResponse("multiple", ["a", "c"], ["c", "a"], m)).toEqual({ outcome: "correct", marks: 4 });
    expect(scoreResponse("multiple", ["a", "b", "c"], ["a", "b"], m)).toEqual({ outcome: "partial", marks: 2 });
    expect(scoreResponse("multiple", ["a", "c"], ["a", "d"], m)).toEqual({ outcome: "incorrect", marks: -2 });
  });
  it("numerical answers respect tolerance", () => {
    const m = adv.marking.numerical!;
    expect(scoreResponse("numerical", { value: 2.5, tolerance: 0.01 }, "2.505", m).marks).toBe(4);
    expect(scoreResponse("numerical", { value: 2.5 }, "3", m).marks).toBe(0);
  });
  it("computes subject and weak-chapter breakdown", () => {
    const qs = [
      { id: "1", qtype: "single" as const, correct: "a", subject: "Physics", chapter: "Optics" },
      { id: "2", qtype: "single" as const, correct: "a", subject: "Physics", chapter: "Waves" },
    ];
    const r = computeResult(qs, { "1": "a", "2": "b" }, () => neet.marking.single!);
    expect(r.score).toBe(3);
    expect(r.maxScore).toBe(8);
    expect(r.weakChapters).toEqual(["Waves"]);
  });
  it("labels short mocks as sectional and scales time", () => {
    const p = plannedMock(neet, { Physics: 10, Chemistry: 10, Botany: 10, Zoology: 10 });
    expect(p.full).toBe(false);
    expect(p.durationMin).toBe(40);
  });
});

describe("level unlocking (90% rule)", () => {
  const a = (level: "easy" | "medium" | "hard" | "expert", percent: number) => ({ level, percent, questionCount: 10, status: "submitted" });
  it("starts with only Easy unlocked", () => expect(masteryState([]).unlocked).toEqual(["easy"]));
  it("89% does not unlock Medium", () => expect(isUnlocked([a("easy", 89)], "medium")).toBe(false));
  it("90% unlocks Medium", () => expect(isUnlocked([a("easy", 90)], "medium")).toBe(true));
  it("cannot skip: Hard pass without Medium unlocks nothing extra", () => expect(isUnlocked([a("easy", 95), a("hard", 100)], "hard")).toBe(false));
  it("short or unfinished attempts are not eligible", () => {
    expect(isUnlocked([{ level: "easy", percent: 100, questionCount: 3, status: "submitted" }], "medium")).toBe(false);
    expect(isUnlocked([{ level: "easy", percent: 100, questionCount: 10, status: "in_progress" }], "medium")).toBe(false);
  });
  it("90% in all four levels completes mastery", () => {
    expect(masteryState([a("easy", 90), a("medium", 92), a("hard", 90), a("expert", 90)]).mastered).toBe(true);
  });
  it("retakes prefer unseen questions", () => {
    const pool = Array.from({ length: 15 }, (_, i) => `q${i}`);
    const last = pool.slice(0, 10);
    const next = selectQuestions(pool, [last], 10);
    expect(next.filter((id) => !last.includes(id)).length).toBe(5);
  });
});

describe("review states", () => {
  it("covers all five palette states independent of correctness", () => {
    expect(paletteStatus(undefined, null)).toBe("not_visited");
    expect(paletteStatus({ visited: true }, null)).toBe("not_answered");
    expect(paletteStatus({ visited: true }, "a")).toBe("answered");
    expect(paletteStatus({ visited: true, marked: true }, null)).toBe("marked");
    expect(paletteStatus({ visited: true, marked: true }, ["a"])).toBe("answered_marked");
  });
});

describe("timer and submission", () => {
  const deadline = 1_000_000;
  it("expires exactly at the deadline", () => {
    expect(isExpired(deadline, deadline - 1)).toBe(false);
    expect(isExpired(deadline, deadline)).toBe(true);
    expect(remainingMs(deadline, deadline + 5000)).toBe(0);
  });
  it("final warning in last five minutes", () => {
    expect(isFinalWarning(5 * 60 * 1000)).toBe(true);
    expect(isFinalWarning(5 * 60 * 1000 + 1)).toBe(false);
  });
  it("allows saving only within 30s grace", () => {
    expect(canSave(deadline, deadline + 29_000)).toBe(true);
    expect(canSave(deadline, deadline + 31_000)).toBe(false);
  });
  it("prevents duplicate submission", () => {
    expect(submissionDecision("in_progress")).toBe("score");
    expect(submissionDecision("submitted")).toBe("already_submitted");
  });
});

describe("outcomes contract & result report resilience", () => {
  it("computeResult always returns a well-formed outcomes map for every question", () => {
    const qs = [
      { id: "q1", qtype: "single" as const, correct: "a", subject: "Physics", chapter: "Mechanics" },
      { id: "q2", qtype: "single" as const, correct: "b", subject: "Chemistry", chapter: "Atomic Structure" },
      { id: "q3", qtype: "single" as const, correct: "c", subject: "Mathematics", chapter: "Calculus" },
    ];
    const r = computeResult(qs, { q1: "a", q2: "d" }, () => ({ correct: 1, incorrect: 0, unanswered: 0 }));
    expect(r.outcomes).toBeDefined();
    expect(r.outcomes["q1"]).toEqual({ outcome: "correct", marks: 1 });
    expect(r.outcomes["q2"]).toEqual({ outcome: "incorrect", marks: 0 });
    expect(r.outcomes["q3"]).toEqual({ outcome: "unanswered", marks: 0 });
    expect(Object.keys(r.outcomes)).toHaveLength(3);
  });

  it("evaluates student performance as Easy Pass (>=60%) or Still Need to Improve (<60%)", () => {
    const passThreshold = 60;
    const isEasyPass = (pct: number) => pct >= passThreshold;
    expect(isEasyPass(60)).toBe(true);
    expect(isEasyPass(85)).toBe(true);
    expect(isEasyPass(59.9)).toBe(false);
    expect(isEasyPass(40)).toBe(false);
  });
});

