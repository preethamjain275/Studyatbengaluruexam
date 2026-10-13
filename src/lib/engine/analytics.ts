import { QUESTIONS_BY_ID } from "@/data/questions-bank";

export interface StudentAnalyticsResult {
  totalAttempts: number;
  totalQuestions: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnanswered: number;
  overallAccuracy: number;
  averageScore: number;
  bestScore: number;
  streak: number;
  last28Days: Array<{ date: string; count: number; active: boolean }>;
  bySubject: Array<{ subject: string; total: number; correct: number; incorrect: number; accuracy: number }>;
  byExam: Array<{ examId: string; attempts: number; avgPercent: number; bestPercent: number }>;
  trends: Array<{ id: string; date: string; examId: string; mode: string; score: number; maxScore: number; percent: number }>;
  weakChapters: Array<{ subject: string; chapter: string; accuracy: number; total: number }>;
  activeSession?: { id: string; examId: string; mode: string; track?: string; level?: string } | null;
}

export function computeStreak(activeDates: Set<string>, baseDate: Date = new Date()): number {
  const todayStr = baseDate.toISOString().slice(0, 10);
  const yesterday = new Date(baseDate);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  let checkDate = new Date(baseDate);
  if (!activeDates.has(todayStr) && activeDates.has(yesterdayStr)) {
    checkDate = yesterday;
  }

  let streak = 0;
  while (true) {
    const curStr = checkDate.toISOString().slice(0, 10);
    if (activeDates.has(curStr)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

export function build28DayCalendar(activeDates: Set<string>, baseDate: Date = new Date()) {
  return Array.from({ length: 28 }).map((_, i) => {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - (27 - i));
    const dStr = d.toISOString().slice(0, 10);
    return {
      date: dStr,
      count: activeDates.has(dStr) ? 1 : 0,
      active: activeDates.has(dStr),
    };
  });
}

export function computeStudentAnalytics(attempts: any[], baseDate: Date = new Date()): StudentAnalyticsResult {
  if (!attempts || attempts.length === 0) {
    const emptyDates = new Set<string>();
    return {
      totalAttempts: 0,
      totalQuestions: 0,
      totalCorrect: 0,
      totalIncorrect: 0,
      totalUnanswered: 0,
      overallAccuracy: 0,
      averageScore: 0,
      bestScore: 0,
      streak: 0,
      last28Days: build28DayCalendar(emptyDates, baseDate),
      bySubject: [],
      byExam: [],
      trends: [],
      weakChapters: [],
    };
  }

  let totalQuestions = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalUnanswered = 0;
  let sumPercentage = 0;
  let bestScore = 0;

  const subjectMap: Record<string, { total: number; correct: number; incorrect: number }> = {};
  const examMap: Record<string, { attempts: number; sumPercent: number; bestPercent: number }> = {};
  const chapterMap: Record<string, { subject: string; chapter: string; total: number; correct: number }> = {};
  const trends: Array<{ id: string; date: string; examId: string; mode: string; score: number; maxScore: number; percent: number }> = [];

  const activeDatesSet = new Set<string>();

  for (const att of attempts) {
    const qCount = att.total_questions || 10;
    const cCount = att.correct_count ?? 0;
    const iCount = att.incorrect_count ?? 0;
    const uCount = att.unanswered_count ?? Math.max(0, qCount - (cCount + iCount));
    const percent = att.percentage ?? (qCount ? Math.round((cCount / qCount) * 100) : 0);

    totalQuestions += qCount;
    totalCorrect += cCount;
    totalIncorrect += iCount;
    totalUnanswered += uCount;
    sumPercentage += percent;
    if (percent > bestScore) bestScore = percent;

    const dateStr = att.created_at ? att.created_at.slice(0, 10) : "";
    if (dateStr) activeDatesSet.add(dateStr);

    const eId = att.exam_id || "general";
    if (!examMap[eId]) {
      examMap[eId] = { attempts: 0, sumPercent: 0, bestPercent: 0 };
    }
    examMap[eId].attempts += 1;
    examMap[eId].sumPercent += percent;
    if (percent > examMap[eId].bestPercent) examMap[eId].bestPercent = percent;

    trends.push({
      id: att.id,
      date: att.created_at,
      examId: att.exam_id,
      mode: att.mode,
      score: att.score ?? cCount,
      maxScore: qCount,
      percent,
    });

    const rawAnswers = (att.answers || {}) as Record<string, any>;
    const res = rawAnswers["_result"];

    // 1. Subject-Wise Progress
    if (res?.bySubject && typeof res.bySubject === "object") {
      for (const [subj, sData] of Object.entries<any>(res.bySubject)) {
        if (!subjectMap[subj]) {
          subjectMap[subj] = { total: 0, correct: 0, incorrect: 0 };
        }
        const tot = sData.total !== undefined ? Number(sData.total) : ((sData.correct || 0) + (sData.incorrect || 0) + (sData.unanswered || 0));
        const cor = Number(sData.correct || 0);
        const inc = sData.incorrect !== undefined ? Number(sData.incorrect) : Math.max(0, tot - cor);
        subjectMap[subj].total += tot;
        subjectMap[subj].correct += cor;
        subjectMap[subj].incorrect += inc;
      }
    } else if (res?.outcomes) {
      const outcomeEntries = Array.isArray(res.outcomes)
        ? res.outcomes.map((o: any) => [o.questionId, o])
        : Object.entries(res.outcomes);
      for (const [qId, out] of outcomeEntries) {
        const qItem = QUESTIONS_BY_ID.get(qId as string);
        const subj = qItem?.subject || rawAnswers["_meta"]?.track || "General Studies";
        if (!subjectMap[subj]) {
          subjectMap[subj] = { total: 0, correct: 0, incorrect: 0 };
        }
        subjectMap[subj].total += 1;
        const verdict = (out as any).outcome || (out as any).verdict;
        if (verdict === "correct") subjectMap[subj].correct += 1;
        else if (verdict === "incorrect") subjectMap[subj].incorrect += 1;
      }
    } else if (rawAnswers["_meta"]?.track) {
      const trackSubj = rawAnswers["_meta"].track;
      if (!subjectMap[trackSubj]) {
        subjectMap[trackSubj] = { total: 0, correct: 0, incorrect: 0 };
      }
      subjectMap[trackSubj].total += qCount;
      subjectMap[trackSubj].correct += cCount;
      subjectMap[trackSubj].incorrect += iCount;
    }

    // 2. Chapter-Wise Performance & Weak Chapter Identification
    let processedChapters = false;
    if (res?.byChapter && typeof res.byChapter === "object") {
      for (const [chapterName, cData] of Object.entries<any>(res.byChapter)) {
        const sampleQ = Array.from(QUESTIONS_BY_ID.values()).find((q) => q.chapter === chapterName);
        const subj = sampleQ?.subject || rawAnswers["_meta"]?.track || "General Studies";
        const chapKey = `${subj}::${chapterName}`;
        if (!chapterMap[chapKey]) {
          chapterMap[chapKey] = { subject: subj, chapter: chapterName, total: 0, correct: 0 };
        }
        const tot = cData.total ?? ((cData.correct || 0) + (cData.incorrect || 0));
        const cor = cData.correct || 0;
        chapterMap[chapKey].total += tot;
        chapterMap[chapKey].correct += cor;
        processedChapters = true;
      }
    }

    if (!processedChapters && res?.outcomes) {
      const outcomeEntries = Array.isArray(res.outcomes)
        ? res.outcomes.map((o: any) => [o.questionId, o])
        : Object.entries(res.outcomes);
      for (const [qId, out] of outcomeEntries) {
        const qItem = QUESTIONS_BY_ID.get(qId as string);
        if (qItem?.chapter) {
          const chapKey = `${qItem.subject}::${qItem.chapter}`;
          if (!chapterMap[chapKey]) {
            chapterMap[chapKey] = { subject: qItem.subject, chapter: qItem.chapter, total: 0, correct: 0 };
          }
          chapterMap[chapKey].total += 1;
          const verdict = (out as any).outcome || (out as any).verdict;
          if (verdict === "correct") chapterMap[chapKey].correct += 1;
        }
      }
    }
  }

  const streak = computeStreak(activeDatesSet, baseDate);
  const last28Days = build28DayCalendar(activeDatesSet, baseDate);

  const bySubject = Object.entries(subjectMap).map(([subject, sData]) => ({
    subject,
    total: sData.total,
    correct: sData.correct,
    incorrect: sData.incorrect,
    accuracy: sData.total > 0 ? Math.round((sData.correct / sData.total) * 100) : 0,
  })).sort((a, b) => b.total - a.total);

  const byExam = Object.entries(examMap).map(([examId, eData]) => ({
    examId,
    attempts: eData.attempts,
    avgPercent: eData.attempts > 0 ? Math.round(eData.sumPercent / eData.attempts) : 0,
    bestPercent: eData.bestPercent,
  }));

  const weakChapters = Object.values(chapterMap)
    .filter((c) => c.total >= 2 && Math.round((c.correct / c.total) * 100) < 60)
    .map((c) => ({
      subject: c.subject,
      chapter: c.chapter,
      accuracy: Math.round((c.correct / c.total) * 100),
      total: c.total,
    }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 8);

  const totalAttempts = attempts.length;
  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const averageScore = totalAttempts > 0 ? Math.round(sumPercentage / totalAttempts) : 0;

  // Guarantee chronological ordering (oldest attempt first) for score trajectory trends
  const chronologicalTrends = [...trends].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return {
    totalAttempts,
    totalQuestions,
    totalCorrect,
    totalIncorrect,
    totalUnanswered,
    overallAccuracy,
    averageScore,
    bestScore,
    streak,
    last28Days,
    bySubject,
    byExam,
    trends: chronologicalTrends,
    weakChapters,
  };
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  displayName: string;
  avatarUrl: string | null;
  examId: string;
  percentage: number;
  score: number;
  totalQuestions: number;
  createdAt: string;
  isCurrentUser: boolean;
}

export function rankLeaderboard(
  attempts: any[],
  profiles: Array<{ id: string; display_name?: string | null; avatar_url?: string | null }> = [],
  currentUserId?: string,
  limit: number = 50
): { entries: LeaderboardEntry[]; currentUserRank: LeaderboardEntry | null; totalParticipants: number } {
  if (!attempts || attempts.length === 0) {
    return { entries: [], currentUserRank: null, totalParticipants: 0 };
  }

  // 1. Pick BEST attempt per user
  const userBestMap = new Map<string, any>();
  for (const att of attempts) {
    const existing = userBestMap.get(att.user_id);
    if (!existing) {
      userBestMap.set(att.user_id, att);
    } else {
      const p1 = att.percentage ?? 0;
      const p2 = existing.percentage ?? 0;
      if (p1 > p2) {
        userBestMap.set(att.user_id, att);
      } else if (p1 === p2) {
        const s1 = att.score ?? 0;
        const s2 = existing.score ?? 0;
        if (s1 > s2) {
          userBestMap.set(att.user_id, att);
        } else if (s1 === s2) {
          const i1 = att.incorrect_count ?? 999;
          const i2 = existing.incorrect_count ?? 999;
          if (i1 < i2) {
            userBestMap.set(att.user_id, att);
          }
        }
      }
    }
  }

  // 2. Deterministic sort: percentage desc -> score desc -> incorrect asc -> created_at asc
  const sorted = Array.from(userBestMap.values()).sort((a, b) => {
    const pDiff = (b.percentage ?? 0) - (a.percentage ?? 0);
    if (pDiff !== 0) return pDiff;
    const sDiff = (b.score ?? 0) - (a.score ?? 0);
    if (sDiff !== 0) return sDiff;
    const iDiff = (a.incorrect_count ?? 0) - (b.incorrect_count ?? 0);
    if (iDiff !== 0) return iDiff;
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });

  const totalParticipants = sorted.length;
  const profileMap = new Map(profiles.map((p) => [p.id, p]));

  let currentUserRank: LeaderboardEntry | null = null;
  const entries: LeaderboardEntry[] = [];

  sorted.forEach((item, index) => {
    const rank = index + 1;
    const prof = profileMap.get(item.user_id);
    let name = prof?.display_name?.trim();
    if (!name || name.includes("@")) {
      name = `Student ${item.user_id.slice(-4).toUpperCase()}`;
    }

    const isCurrent = Boolean(currentUserId && item.user_id === currentUserId);
    const entry: LeaderboardEntry = {
      rank,
      userId: item.user_id,
      displayName: name,
      avatarUrl: prof?.avatar_url || null,
      examId: item.exam_id,
      percentage: item.percentage ?? 0,
      score: item.score ?? 0,
      totalQuestions: item.total_questions ?? 10,
      createdAt: item.created_at,
      isCurrentUser: isCurrent,
    };

    if (index < limit) {
      entries.push(entry);
    }

    if (isCurrent) {
      currentUserRank = entry;
    }
  });

  return { entries, currentUserRank, totalParticipants };
}
