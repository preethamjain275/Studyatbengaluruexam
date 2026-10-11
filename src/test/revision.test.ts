import { describe, expect, it } from "vitest";
import { filterSheets, JEE_ADVANCED_2026, NEET_2026 } from "@/lib/revision";

describe("Official 2026 reference rules", () => {
  it("requires two compulsory three-hour JEE Advanced papers with paper-specific marking", () => {
    expect(JEE_ADVANCED_2026).toEqual({ papers: 2, durationMinutesPerPaper: 180, bothCompulsory: true, marking: "paper-specific" });
  });
  it("uses the current NEET bulletin's 180 questions and 180 minutes with +4 / -1 marking", () => {
    expect(NEET_2026).toEqual({ durationMinutes: 180, questions: 180, correctMarks: 4, incorrectMarks: -1, unansweredMarks: 0 });
  });
});

describe("Revision filters", () => {
  it("does not include mathematics in NEET revision", () => {
    expect(filterSheets("", "Mathematics", "NEET UG")).toEqual([]);
  });
  it("searches chapter contents within subject and exam filters", () => {
    expect(filterSheets("capacit", "Physics", "JEE Main").map(s => s.id)).toEqual(["physics-electricity"]);
  });
});