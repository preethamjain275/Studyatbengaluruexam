import { describe, expect, it } from "vitest";
import { selectQuestions, shuffleOptions } from "@/lib/engine/state";
describe("shuffling", () => {
  it("option shuffle keeps every option and is stable per attempt", () => {
    const o = ["a", "b", "c", "d"];
    expect([...shuffleOptions(o, "att1q1")].sort()).toEqual(o);
    expect(shuffleOptions(o, "att1q1")).toEqual(shuffleOptions(o, "att1q1"));
  });
  it("practice set honours the chosen count", () => {
    const pool = Array.from({ length: 60 }, (_, i) => `q${i}`);
    expect(selectQuestions(pool, [], 40)).toHaveLength(40);
  });
});
