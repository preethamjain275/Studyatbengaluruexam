import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { Bookmark, BookmarkX, ExternalLink, Filter, HelpCircle, Loader2, ArrowRight, RotateCcw } from "lucide-react";
import { EmptyState, PageHeader, btnPrimary, btnGhost } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";
import { getBookmarks, removeBookmark } from "@/lib/engine.functions";
import { QUESTIONS_BY_ID, type QuestionItem } from "@/data/questions-bank";
import { toast } from "sonner";

export const Route = createFileRoute("/bookmarks")({
  head: () => ({
    meta: [
      { title: "Bookmarks - Study at Bangalore" },
      { name: "description", content: "Questions you've saved to come back to." },
      { property: "og:title", content: "Bookmarks - Study at Bangalore" },
      { property: "og:description", content: "Questions you've saved to come back to." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookmarksPage,
});

function BookmarksPage() {
  const { user, ready } = useAuth();
  const [loading, setLoading] = useState(true);
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const userId = user.id;

    async function load() {
      setLoading(true);
      const localKey = `study_bookmarks_${userId}`;
      try {
        const res = await getBookmarks();
        const ids = res.bookmarks || [];
        setBookmarkIds(ids);
        try {
          localStorage.setItem(localKey, JSON.stringify(ids));
        } catch {}
      } catch {
        // Fallback to user-scoped local storage if offline
        try {
          const local = JSON.parse(localStorage.getItem(localKey) ?? "[]");
          setBookmarkIds(Array.isArray(local) ? local : []);
        } catch {
          setBookmarkIds([]);
        }
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [user]);

  const questions: QuestionItem[] = useMemo(() => {
    return bookmarkIds
      .map((id) => QUESTIONS_BY_ID.get(id))
      .filter((q): q is QuestionItem => Boolean(q));
  }, [bookmarkIds]);

  const unavailableIds = useMemo(() => {
    return bookmarkIds.filter((id) => !QUESTIONS_BY_ID.has(id));
  }, [bookmarkIds]);

  async function handleClearUnavailable() {
    const validIds = bookmarkIds.filter((id) => QUESTIONS_BY_ID.has(id));
    setBookmarkIds(validIds);
    if (user?.id) {
      try {
        localStorage.setItem(`study_bookmarks_${user.id}`, JSON.stringify(validIds));
      } catch {}
    }
    for (const badId of unavailableIds) {
      removeBookmark({ data: { questionId: badId } }).catch(() => {});
    }
    toast.success(`Removed ${unavailableIds.length} unavailable bookmark(s)`);
  }

  const subjects = useMemo(() => {
    const set = new Set<string>();
    for (const q of questions) {
      if (q.subject) set.add(q.subject);
    }
    return ["All", ...Array.from(set).sort()];
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    if (selectedSubject === "All") return questions;
    return questions.filter((q) => q.subject === selectedSubject);
  }, [questions, selectedSubject]);

  async function handleRemove(questionId: string) {
    const updated = bookmarkIds.filter((id) => id !== questionId);
    setBookmarkIds(updated);

    // Update user-scoped local storage backup
    try {
      if (user?.id) {
        localStorage.setItem(`study_bookmarks_${user.id}`, JSON.stringify(updated));
      }
    } catch {}

    toast.success("Bookmark removed");

    try {
      await removeBookmark({ data: { questionId } });
    } catch {
      // Retain optimistic UI
    }
  }

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Bookmarks" title="Bookmarked questions">
        Personal questions saved to your account ({user?.email}). Review tough problems and study solutions.
      </PageHeader>

      {unavailableIds.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs">
          <span className="text-amber-800 dark:text-amber-200">
            ⚠️ Note: {unavailableIds.length} bookmarked item{unavailableIds.length > 1 ? "s are" : " is"} archived or no longer available in the question bank.
          </span>
          <button
            type="button"
            onClick={handleClearUnavailable}
            className="text-xs font-semibold text-amber-900 dark:text-amber-100 underline hover:opacity-80 self-start sm:self-auto"
          >
            Clear unavailable items
          </button>
        </div>
      )}

      {loading ? (
        <div className="surface p-12 text-center space-y-3">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="text-sm text-muted-foreground">Loading your bookmarked questions…</p>
        </div>
      ) : questions.length === 0 ? (
        <EmptyState
          icon={Bookmark}
          title="No bookmarks yet"
          action={
            <Link to="/practice" className={btnPrimary}>
              Go to practice
            </Link>
          }
        >
          Tap the bookmark icon on any question during practice or tests to save it here for cross-device revision.
        </EmptyState>
      ) : (
        <div className="space-y-4">
          {/* Controls & Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">
                Saved Questions ({filteredQuestions.length}{filteredQuestions.length !== questions.length ? ` of ${questions.length}` : ""}):
              </span>
            </div>

            {subjects.length > 2 && (
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                <Filter className="h-4 w-4 text-muted-foreground mr-1" />
                {subjects.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSubject(s)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      selectedSubject === s
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Questions Grid */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const isRevealed = Boolean(revealedSolutions[q.id]);
              return (
                <div key={q.id} className="surface p-5 sm:p-6 rounded-2xl space-y-4 border border-border/80 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-foreground">
                        #{idx + 1}
                      </span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {q.subject}
                      </span>
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {q.chapter}
                      </span>
                      {q.difficulty && (
                        <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-medium capitalize text-muted-foreground">
                          {q.difficulty}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemove(q.id)}
                      title="Remove from bookmarks"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-destructive hover:underline p-1"
                    >
                      <BookmarkX className="h-3.5 w-3.5" /> Remove
                    </button>
                  </div>

                  {/* Question Body */}
                  <div className="text-base leading-relaxed whitespace-pre-line text-foreground">
                    {q.body}
                  </div>

                  {/* Options */}
                  {q.options && q.options.length > 0 && (
                    <div className="grid gap-2 pt-1 sm:grid-cols-2">
                      {q.options.map((opt, oi) => {
                        const isCorrect = isRevealed && (
                          Array.isArray(q.correct) ? q.correct.includes(opt.id) : q.correct === opt.id
                        );
                        return (
                          <div
                            key={opt.id}
                            className={`flex items-start gap-2.5 rounded-xl border p-3 text-sm transition ${
                              isCorrect
                                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 font-medium"
                                : "border-border bg-background"
                            }`}
                          >
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold uppercase ${
                                isCorrect
                                  ? "bg-emerald-500 text-white"
                                  : "border bg-muted text-muted-foreground"
                              }`}
                            >
                              {"abcdefgh"[oi]}
                            </span>
                            <span className="pt-0.5 leading-snug">{opt.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Solution and Explanation Disclosure */}
                  <div className="pt-2 border-t flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => toggleSolution(q.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <HelpCircle className="h-3.5 w-3.5" />
                      {isRevealed ? "Hide Explanation & Solution" : "Reveal Answer & Explanation"}
                    </button>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to="/practice"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        Practice {q.subject} <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link
                        to="/revision"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground hover:underline"
                      >
                        <RotateCcw className="h-3 w-3" /> Formulas
                      </Link>
                      {q.source && (
                        <span className="text-[11px] text-muted-foreground">
                          Source: {q.source}
                        </span>
                      )}
                    </div>
                  </div>

                  {isRevealed && (
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs space-y-2 mt-2">
                      <p className="font-bold text-primary">Correct Answer & Explanation:</p>
                      <p className="text-foreground leading-relaxed whitespace-pre-line">
                        {q.explanation || "No written explanation provided for this question."}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
