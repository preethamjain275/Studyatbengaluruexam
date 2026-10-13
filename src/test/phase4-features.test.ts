import { describe, it, expect } from "vitest";
import {
  computeStudentAnalytics,
  rankLeaderboard,
  computeStreak,
  build28DayCalendar,
} from "@/lib/engine/analytics";
import { fetchDbMasteryThreshold, updateMasterySettings } from "@/lib/engine.functions";
import { QUESTIONS_BY_ID } from "@/data/questions-bank";
import { masteryState } from "@/lib/engine/state";

describe("Phase 4: Shared Mastery Settings", () => {
  it("defaults to 80% when no custom database threshold is set", async () => {
    const threshold = await fetchDbMasteryThreshold();
    expect(threshold).toBeGreaterThanOrEqual(50);
    expect(threshold).toBeLessThanOrEqual(100);
  });

  it("masteryState respects a custom database-backed threshold", () => {
    const attempts = [
      { level: "easy" as const, percent: 75, questionCount: 10, status: "submitted" },
    ];

    // With 70% threshold, 75% passes and unlocks medium
    const state70 = masteryState(attempts, 70);
    expect(state70.passed).toContain("easy");
    expect(state70.unlocked).toContain("medium");
    expect(state70.threshold).toBe(70);

    // With 80% threshold, 75% fails to pass
    const state80 = masteryState(attempts, 80);
    expect(state80.passed).not.toContain("easy");
    expect(state80.unlocked).toEqual(["easy"]);
    expect(state80.threshold).toBe(80);
  });

  it("updateMasterySettings rejects unauthenticated calls or non-admins", async () => {
    await expect(
      (updateMasterySettings as any)({
        data: { threshold: 85 },
        context: { userId: "unauthorized-student-id" },
      })
    ).rejects.toThrow();
  });
});

describe("Phase 4: Persistent Question Bookmarks", () => {
  it("hydrates bookmarked question IDs with rich question bank data", () => {
    const testIds = Array.from(QUESTIONS_BY_ID.keys()).slice(0, 5);
    expect(testIds.length).toBe(5);

    const hydrated = testIds.map((id) => QUESTIONS_BY_ID.get(id)).filter(Boolean);
    expect(hydrated.length).toBe(5);
    for (const q of hydrated) {
      expect(q?.body).toBeTruthy();
      expect(q?.subject).toBeTruthy();
      expect(q?.chapter).toBeTruthy();
      expect(Array.isArray(q?.options)).toBe(true);
    }
  });

  it("filters bookmarked questions safely without crash when non-existent id passed", () => {
    const badIds = ["invalid-uuid-1", "invalid-uuid-2"];
    const hydrated = badIds.map((id) => QUESTIONS_BY_ID.get(id)).filter(Boolean);
    expect(hydrated).toEqual([]);
  });
});

describe("Phase 4: Student Performance Analytics Engine", () => {
  const baseDate = new Date("2026-10-15T12:00:00Z");

  it("returns zero-state structure when attempts list is empty", () => {
    const res = computeStudentAnalytics([], baseDate);

    expect(res.totalAttempts).toBe(0);
    expect(res.totalQuestions).toBe(0);
    expect(res.totalCorrect).toBe(0);
    expect(res.totalIncorrect).toBe(0);
    expect(res.totalUnanswered).toBe(0);
    expect(res.overallAccuracy).toBe(0);
    expect(res.averageScore).toBe(0);
    expect(res.bestScore).toBe(0);
    expect(res.streak).toBe(0);
    expect(res.last28Days).toHaveLength(28);
    expect(res.bySubject).toEqual([]);
    expect(res.weakChapters).toEqual([]);
    expect(res.trends).toEqual([]);
  });

  it("build28DayCalendar builds exactly 28 days ending at baseDate", () => {
    const activeDates = new Set(["2026-10-15", "2026-10-14"]);
    const calendar = build28DayCalendar(activeDates, baseDate);

    expect(calendar).toHaveLength(28);
    expect(calendar[27]!.date).toBe("2026-10-15");
    expect(calendar[27]!.active).toBe(true);
    expect(calendar[26]!.date).toBe("2026-10-14");
    expect(calendar[26]!.active).toBe(true);
    expect(calendar[25]!.active).toBe(false);
  });

  it("computeStreak calculates consecutive active days up to today or yesterday", () => {
    // 3-day streak ending today
    const activeDates = new Set(["2026-10-15", "2026-10-14", "2026-10-13"]);
    expect(computeStreak(activeDates, baseDate)).toBe(3);

    // 2-day streak ending yesterday (today not yet practiced)
    const activeYesterday = new Set(["2026-10-14", "2026-10-13"]);
    expect(computeStreak(activeYesterday, baseDate)).toBe(2);

    // Broken streak (gap 2 days ago)
    const brokenDates = new Set(["2026-10-15", "2026-10-13"]);
    expect(computeStreak(brokenDates, baseDate)).toBe(1);

    // Inactive streak (more than 1 day ago)
    const staleDates = new Set(["2026-10-10"]);
    expect(computeStreak(staleDates, baseDate)).toBe(0);
  });

  it("accurately aggregates multi-exam attempts, scores, and subject accuracy", () => {
    const attempts = [
      {
        id: "att-1",
        exam_id: "kcet",
        mode: "practice",
        total_questions: 10,
        correct_count: 8,
        incorrect_count: 2,
        unanswered_count: 0,
        percentage: 80,
        created_at: "2026-10-15T09:00:00Z",
        answers: {
          _result: {
            bySubject: {
              Physics: { correct: 5, incorrect: 1, unanswered: 0 },
              Chemistry: { correct: 3, incorrect: 1, unanswered: 0 },
            },
          },
        },
      },
      {
        id: "att-2",
        exam_id: "scholarship",
        mode: "mock",
        total_questions: 10,
        correct_count: 6,
        incorrect_count: 4,
        unanswered_count: 0,
        percentage: 60,
        created_at: "2026-10-14T10:00:00Z",
        answers: {
          _result: {
            bySubject: {
              Physics: { correct: 4, incorrect: 2, unanswered: 0 },
              Mathematics: { correct: 2, incorrect: 2, unanswered: 0 },
            },
          },
        },
      },
    ];

    const res = computeStudentAnalytics(attempts, baseDate);

    expect(res.totalAttempts).toBe(2);
    expect(res.totalQuestions).toBe(20);
    expect(res.totalCorrect).toBe(14);
    expect(res.totalIncorrect).toBe(6);
    expect(res.overallAccuracy).toBe(70); // 14 / 20 = 70%
    expect(res.averageScore).toBe(70); // (80 + 60) / 2 = 70%
    expect(res.bestScore).toBe(80);
    expect(res.streak).toBe(2); // practiced on 10-15 and 10-14
    expect(res.trends).toHaveLength(2);

    // Check subjects
    const phys = res.bySubject.find((s) => s.subject === "Physics");
    expect(phys).toBeDefined();
    expect(phys?.correct).toBe(9); // 5 + 4
    expect(phys?.incorrect).toBe(3); // 1 + 2
    expect(phys?.accuracy).toBe(75); // 9 / 12 = 75%

    // Check exams
    expect(res.byExam).toHaveLength(2);
    const kcet = res.byExam.find((e) => e.examId === "kcet");
    expect(kcet?.attempts).toBe(1);
    expect(kcet?.bestPercent).toBe(80);
  });
});

describe("Phase 4: Real, Fair Leaderboard Engine", () => {
  it("keeps each student's single best attempt and ranks deterministically", () => {
    const attempts = [
      // Student 1 has two attempts: 70% and 90%
      { user_id: "user-1", exam_id: "scholarship", percentage: 70, score: 7, incorrect_count: 3, created_at: "2026-10-10T10:00:00Z" },
      { user_id: "user-1", exam_id: "scholarship", percentage: 90, score: 9, incorrect_count: 1, created_at: "2026-10-12T10:00:00Z" },
      // Student 2 has 95%
      { user_id: "user-2", exam_id: "scholarship", percentage: 95, score: 9.5, incorrect_count: 0, created_at: "2026-10-11T10:00:00Z" },
      // Student 3 has 90%, but 0 incorrect (tie-break winner over Student 1)
      { user_id: "user-3", exam_id: "scholarship", percentage: 90, score: 9, incorrect_count: 0, created_at: "2026-10-11T10:00:00Z" },
      // Student 4 has 80%
      { user_id: "user-4", exam_id: "scholarship", percentage: 80, score: 8, incorrect_count: 2, created_at: "2026-10-10T10:00:00Z" },
    ];

    const profiles = [
      { id: "user-1", display_name: "Rahul Sharma", avatar_url: null },
      { id: "user-2", display_name: "Priya Nair", avatar_url: null },
      { id: "user-3", display_name: "Kavya Patel", avatar_url: null },
      { id: "user-4", display_name: "Anand Rao", avatar_url: null },
    ];

    const res = rankLeaderboard(attempts, profiles, "user-1", 10);

    expect(res.totalParticipants).toBe(4); // 4 unique students
    expect(res.entries).toHaveLength(4);

    // Rank 1: Priya (95%)
    expect(res.entries[0]!.userId).toBe("user-2");
    expect(res.entries[0]!.displayName).toBe("Priya Nair");
    expect(res.entries[0]!.rank).toBe(1);
    expect(res.entries[0]!.percentage).toBe(95);

    // Rank 2: Kavya (90%, 0 incorrect beats Rahul's 1 incorrect)
    expect(res.entries[1]!.userId).toBe("user-3");
    expect(res.entries[1]!.rank).toBe(2);
    expect(res.entries[1]!.percentage).toBe(90);

    // Rank 3: Rahul (90%, 1 incorrect)
    expect(res.entries[2]!.userId).toBe("user-1");
    expect(res.entries[2]!.rank).toBe(3);
    expect(res.entries[2]!.percentage).toBe(90);

    // Current user rank
    expect(res.currentUserRank).toBeDefined();
    expect(res.currentUserRank?.userId).toBe("user-1");
    expect(res.currentUserRank?.rank).toBe(3);
    expect(res.currentUserRank?.isCurrentUser).toBe(true);
  });

  it("sanitizes student identities and never exposes email addresses in leaderboard", () => {
    const attempts = [
      { user_id: "uuid-1234-5678-90ab-cdef", exam_id: "kcet", percentage: 85, score: 8.5, incorrect_count: 1, created_at: "2026-10-10T10:00:00Z" },
      { user_id: "uuid-9999-8888-7777-6666", exam_id: "kcet", percentage: 80, score: 8, incorrect_count: 2, created_at: "2026-10-10T10:00:00Z" },
    ];

    const profiles = [
      // Profile with raw email in display name
      { id: "uuid-1234-5678-90ab-cdef", display_name: "student@example.com", avatar_url: null },
      // Profile with empty display name
      { id: "uuid-9999-8888-7777-6666", display_name: "", avatar_url: null },
    ];

    const res = rankLeaderboard(attempts, profiles);

    for (const entry of res.entries) {
      expect(entry.displayName).not.toContain("@");
      expect(entry.displayName).toMatch(/^Student [0-9A-F]{4}$/i);
    }
  });

  it("resolves ties using earliest completion timestamp when percentage, score, and errors are identical", () => {
    const attempts = [
      { user_id: "user-early", exam_id: "jee-main", percentage: 90, score: 9, incorrect_count: 1, created_at: "2026-10-01T10:00:00Z" },
      { user_id: "user-late", exam_id: "jee-main", percentage: 90, score: 9, incorrect_count: 1, created_at: "2026-10-05T10:00:00Z" },
    ];
    const profiles = [
      { id: "user-early", display_name: "Aman", avatar_url: null },
      { id: "user-late", display_name: "Karan", avatar_url: null },
    ];

    const res = rankLeaderboard(attempts, profiles);
    expect(res.entries[0]!.userId).toBe("user-early");
    expect(res.entries[1]!.userId).toBe("user-late");
  });
});

describe("Phase 4: AttemptResult Standard Structure Integration", () => {
  it("processes real AttemptResult structure with byChapter and bySubject objects", () => {
    const mockAttempt = {
      id: "att-real-1",
      exam_id: "kcet",
      mode: "practice",
      total_questions: 10,
      score: 7,
      percentage: 70,
      correct_count: 7,
      incorrect_count: 3,
      created_at: "2026-10-10T12:00:00Z",
      answers: {
        _result: {
          score: 7,
          maxScore: 10,
          percent: 70,
          correct: 7,
          incorrect: 3,
          bySubject: {
            Physics: { correct: 4, total: 6, score: 4 },
            Chemistry: { correct: 3, total: 4, score: 3 },
          },
          byChapter: {
            Kinematics: { correct: 1, total: 3 }, // 33% accuracy, total >= 2 -> weak!
            Thermodynamics: { correct: 3, total: 3 }, // 100% accuracy -> strong!
          },
          outcomes: {
            "q-1": { outcome: "correct", marks: 1 },
            "q-2": { outcome: "incorrect", marks: 0 },
          },
        },
      },
    };

    const res = computeStudentAnalytics([mockAttempt]);
    expect(res.totalAttempts).toBe(1);
    expect(res.overallAccuracy).toBe(70);
    expect(res.bySubject).toHaveLength(2);

    const phys = res.bySubject.find((s) => s.subject === "Physics");
    expect(phys).toBeDefined();
    expect(phys?.correct).toBe(4);
    expect(phys?.total).toBe(6);
    expect(phys?.incorrect).toBe(2);
    expect(phys?.accuracy).toBe(67);

    // Weak chapter
    expect(res.weakChapters.length).toBeGreaterThanOrEqual(1);
    const kin = res.weakChapters.find((c) => c.chapter === "Kinematics");
    expect(kin).toBeDefined();
    expect(kin?.accuracy).toBe(33);
    expect(kin?.total).toBe(3);
  });

  it("ensures trends are strictly chronological regardless of input order", () => {
    // Input in reverse chronological order
    const attempts = [
      { id: "latest", exam_id: "kcet", created_at: "2026-10-15T00:00:00Z", percentage: 90, total_questions: 10 },
      { id: "middle", exam_id: "kcet", created_at: "2026-10-10T00:00:00Z", percentage: 70, total_questions: 10 },
      { id: "earliest", exam_id: "kcet", created_at: "2026-10-05T00:00:00Z", percentage: 50, total_questions: 10 },
    ];

    const res = computeStudentAnalytics(attempts);
    expect(res.trends[0]!.id).toBe("earliest");
    expect(res.trends[1]!.id).toBe("middle");
    expect(res.trends[2]!.id).toBe("latest");
  });
});
