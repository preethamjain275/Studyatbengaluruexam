import { CheckCircle2, TrendingUp, Sparkles, Target, ArrowRight } from "lucide-react";
import { LEVEL_LABEL, type Level } from "@/lib/engine/patterns";
import { getMasteryThreshold } from "@/lib/engine/state";

export interface AttemptItem {
  id: string;
  level?: Level;
  percent: number;
  score?: number;
  maxScore?: number;
  date?: string;
}

interface AttemptProgressionProps {
  attempts: AttemptItem[];
  level?: Level | undefined;
  targetThreshold?: number | undefined;
  paperName?: string | undefined;
}

export function AttemptProgression({
  attempts = [],
  level = "easy",
  targetThreshold,
  paperName,
}: AttemptProgressionProps) {
  const target = targetThreshold ?? getMasteryThreshold();
  const sorted = [...attempts].reverse(); // Oldest first (Attempt 1, Attempt 2...)
  const count = sorted.length;
  const latest = sorted[sorted.length - 1];
  const previous = sorted.length > 1 ? sorted[sorted.length - 2] : null;

  const latestPct = latest ? latest.percent : 0;
  const prevPct = previous ? previous.percent : null;
  const delta = prevPct != null ? latestPct - prevPct : null;
  const gap = target - latestPct;
  const hasAchieved = latestPct >= target;

  // Generate encouraging motivational coaching line
  function getMotivationMessage(): { title: string; subtitle: string; color: string } {
    if (count === 0) {
      return {
        title: "Ready for your first attempt?",
        subtitle: `Aim for ${target}% or higher to unlock the next level. All questions follow the NCERT syllabus!`,
        color: "text-primary",
      };
    }
    if (hasAchieved) {
      return {
        title: `Goal Achieved! You scored ${latestPct}% (Target: ${target}%) 🎉`,
        subtitle: `Outstanding performance! You have cleared this level and unlocked the next difficulty.`,
        color: "text-emerald-600",
      };
    }
    if (gap <= 5) {
      return {
        title: `You can do it! Just ${gap}% to go! 🔥`,
        subtitle: `You are incredibly close to your ${target}% target! Double-check negative signs and units on your next attempt.`,
        color: "text-amber-600",
      };
    }
    if (gap <= 10) {
      return {
        title: `Almost there! Only ${gap}% more to reach ${target}%! 💪`,
        subtitle: `Review the recommended NCERT chapters below, take Attempt ${count + 1}, and you'll clear it easily!`,
        color: "text-amber-600",
      };
    }
    if (gap <= 20) {
      return {
        title: `Great effort on Attempt ${count}! Just ${gap}% to unlock next level. 🚀`,
        subtitle: `Every attempt sharpens your exam speed. Focus on key formulas and formulas to bridge the gap.`,
        color: "text-blue-600",
      };
    }
    return {
      title: `Keep building momentum! Attempt ${count} is a strong start. 🌱`,
      subtitle: `Mastery takes practice. Revise chapter fundamentals and push for ${target}% on Attempt ${count + 1}!`,
      color: "text-foreground",
    };
  }

  const motivation = getMotivationMessage();

  return (
    <div className="surface rounded-2xl border p-5 shadow-sm space-y-4">
      {/* Header with Attendance Count and Previous vs Current Score */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-bold text-foreground">
              {paperName ? `${paperName} · ` : ""}{LEVEL_LABEL[level] || "Practice"} Attempt Curve
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Total Times Attended: <b className="text-foreground">{count} Attempt{count === 1 ? "" : "s"}</b> · Target: <b className="text-primary">{target}%</b>
          </p>
        </div>

        {/* Previous Score vs Current Score Comparison */}
        {latest && (
          <div className="flex items-center gap-3 bg-muted/40 px-3.5 py-1.5 rounded-xl border text-xs">
            {prevPct != null ? (
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Previous: <b className="text-foreground">{prevPct}%</b></span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                <span>Now: <b className="text-primary font-bold text-sm">{latestPct}%</b></span>
                {delta !== null && (
                  <span className={`inline-flex items-center font-bold px-1.5 py-0.5 rounded text-[11px] ${
                    delta >= 0 ? "bg-emerald-500/15 text-emerald-600" : "bg-amber-500/15 text-amber-600"
                  }`}>
                    {delta >= 0 ? `+${delta}% 📈` : `${delta}%`}
                  </span>
                )}
              </div>
            ) : (
              <div>
                <span className="text-muted-foreground">Current Score:</span> <b className="text-primary font-bold text-sm">{latestPct}%</b> (First Attempt)
              </div>
            )}
          </div>
        )}
      </div>

      {/* Oval Attempt Progression Stepper / Curve */}
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Attempt Progression Journey:
        </p>
        
        {sorted.length === 0 ? (
          <div className="flex items-center gap-2 p-3 rounded-xl border border-dashed text-xs text-muted-foreground">
            <span>No attempts recorded yet for this paper. Take your first test to track your attempt curve!</span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-1 overflow-x-auto">
            {sorted.map((att, idx) => {
              const isCleared = att.percent >= target;
              return (
                <div key={att.id || idx} className="flex items-center gap-2 sm:gap-3 shrink-0">
                  {/* Oval Attempt Badge */}
                  <div
                    className={`flex items-center gap-2 rounded-full px-4 py-2 border-2 text-xs font-semibold shadow-xs transition-transform hover:scale-105 ${
                      isCleared
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-700"
                        : "border-primary/40 bg-card text-foreground"
                    }`}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span>Attempt {idx + 1}: <b className={isCleared ? "text-emerald-600" : "text-primary"}>{att.percent}%</b></span>
                    {isCleared && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />}
                  </div>

                  {/* Connecting Arrow */}
                  {idx < sorted.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                  )}
                </div>
              );
            })}

            {/* Target Goal Oval */}
            <ArrowRight className="h-4 w-4 text-primary shrink-0" />
            <div
              className={`flex items-center gap-2 rounded-full px-4 py-2 border-2 border-dashed text-xs font-bold shrink-0 ${
                hasAchieved
                  ? "border-emerald-500 bg-emerald-500/15 text-emerald-700"
                  : "border-primary bg-primary/5 text-primary"
              }`}
            >
              <Target className="h-3.5 w-3.5" />
              <span>{hasAchieved ? `🎯 Goal Cleared (${target}%)` : `🎯 Target Goal: ${target}%`}</span>
            </div>
          </div>
        )}
      </div>

      {/* Motivational Coaching Banner */}
      <div className={`rounded-xl border p-3.5 text-xs space-y-1 ${
        hasAchieved ? "border-emerald-500/30 bg-emerald-500/5" : "border-primary/20 bg-primary/5"
      }`}>
        <p className={`font-bold text-sm flex items-center gap-1.5 ${motivation.color}`}>
          <Sparkles className="h-4 w-4" />
          {motivation.title}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {motivation.subtitle}
        </p>
      </div>
    </div>
  );
}
