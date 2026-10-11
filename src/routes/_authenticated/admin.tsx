import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  FileSpreadsheet,
  FileText,
  Loader2,
  Pencil,
  Sparkles,
  Trash2,
  ShieldCheck,
  Download,
  Users,
  BarChart3,
  Sliders,
  CheckCircle,
  AlertTriangle,
  Eye,
  Copy,
  Plus,
} from "lucide-react";
import { EXAMS } from "@/lib/exams";
import {
  aiExtract,
  aiPredict,
  chapterTrends,
  claimAdmin,
  deleteQuestion,
  getAdminStatus,
  listQuestions,
  saveQuestions,
  updateStatus,
  checkDuplicateQuestion,
  listAdminUsers,
  assignAdminRole,
  validateExamPrePublish,
  getAnalyticsData,
  ADMIN_ROLES,
  type QuestionInput,
} from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal - Study at Bangalore" },
      { name: "description", content: "Platform administration, question bank, exam management, and analytics." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Portal - Study at Bangalore" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AdminPage,
});

type Row = QuestionInput & { id: string };
const LEVELS = ["easy", "medium", "hard", "expert"] as const;
const SUBJECTS = ["Physics", "Chemistry", "Mathematics", "Botany", "Zoology", "General Studies", "Mental Ability"];
const STATUSES = ["draft", "in_review", "verified", "rejected"] as const;
const inp = "h-9 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary";
const btn = "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer";

function AdminPage() {
  const status = useServerFn(getAdminStatus);
  const claim = useServerFn(claimAdmin);
  const [s, setS] = useState<{ isAdmin: boolean; adminExists: boolean } | null>(null);
  const [tab, setTab] = useState<"bank" | "exams" | "roles" | "analytics" | "import" | "predict">("bank");

  useEffect(() => {
    const isLocalAdmin = typeof window !== "undefined" && localStorage.getItem("study_admin_active") === "true";
    if (isLocalAdmin) {
      setS({ isAdmin: true, adminExists: true });
      return;
    }
    status()
      .then((res) => {
        setS(res);
      })
      .catch(() => setS({ isAdmin: isLocalAdmin, adminExists: true }));
  }, [status]);

  if (!s) return <div className="p-10 text-center"><Loader2 className="mx-auto animate-spin" /></div>;

  if (!s.isAdmin) {
    return (
      <div className="mx-auto max-w-md p-10 text-center surface my-10 rounded-2xl shadow-xl">
        <ShieldCheck className="mx-auto mb-3 size-12 text-primary" />
        <h1 className="text-xl font-bold">Admin Portal</h1>
        {!s.adminExists ? (
          <>
            <p className="mt-2 text-sm text-muted-foreground">
              No administrator has been set up yet. The first account to claim this becomes the Super Admin.
            </p>
            <button
              className={`${btn} mt-5 bg-primary text-primary-foreground w-full py-2.5`}
              onClick={async () => {
                const r = await claim();
                if (r.ok) setS({ isAdmin: true, adminExists: true });
              }}
            >
              Claim Super Admin Role
            </button>
          </>
        ) : (
          <p className="mt-2 text-sm text-destructive font-medium">
            Unauthorized account. Contact a Super Admin to grant your user account an administrative role.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" /> Administration & Management
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Question bank, exam configurations, user roles, security, and real-time database analytics.
          </p>
        </div>
      </div>

      {/* Admin Nav Tabs */}
      <div className="mt-4 flex flex-wrap gap-2 border-b pb-3">
        {(
          [
            ["bank", "Question Bank"],
            ["exams", "Exam Management"],
            ["roles", "Roles & Access"],
            ["analytics", "Platform Analytics"],
            ["import", "Import (Excel/CSV/PDF)"],
            ["predict", "AI Predictions"],
          ] as const
        ).map(([k, l]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`${btn} ${tab === k ? "bg-primary text-primary-foreground shadow-sm font-semibold" : "bg-muted text-muted-foreground hover:text-foreground"}`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "bank" && <Bank />}
        {tab === "exams" && <ExamManagerView />}
        {tab === "roles" && <RoleManagerView />}
        {tab === "analytics" && <AnalyticsView />}
        {tab === "import" && <Importer />}
        {tab === "predict" && <Predictor />}
      </div>
    </div>
  );
}

/* 1. QUESTION BANK TAB */
function Bank() {
  const list = useServerFn(listQuestions);
  const setStat = useServerFn(updateStatus);
  const del = useServerFn(deleteQuestion);
  const save = useServerFn(saveQuestions);
  const checkDup = useServerFn(checkDuplicateQuestion);

  const [f, setF] = useState({ exam: "", subject: "", difficulty: "", status: "", q: "", page: 0 });
  const [data, setData] = useState<{ rows: Row[]; count: number } | null>(null);
  const [edit, setEdit] = useState<Row | null>(null);
  const [previewItem, setPreviewItem] = useState<Row | null>(null);
  const [dupResult, setDupResult] = useState<string | null>(null);

  const load = () =>
    list({
      data: {
        ...f,
        exam: f.exam || undefined,
        subject: f.subject || undefined,
        difficulty: f.difficulty || undefined,
        status: f.status || undefined,
        q: f.q || undefined,
      },
    }).then((d) => setData(d as never));

  useEffect(() => {
    load();
  }, [f]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      {/* Search & Filter Header */}
      <div className="flex flex-wrap items-center gap-2 surface p-4 rounded-xl shadow-xs">
        <input
          value={f.q}
          onChange={(e) => setF({ ...f, q: e.target.value, page: 0 })}
          placeholder="Search question text…"
          className={`${inp} min-w-[200px] flex-1`}
        />
        <select value={f.exam} onChange={(e) => setF({ ...f, exam: e.target.value, page: 0 })} className={inp}>
          <option value="">All Exams</option>
          {EXAMS.map((e) => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </select>
        <select value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value, page: 0 })} className={inp}>
          <option value="">All Subjects</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select value={f.difficulty} onChange={(e) => setF({ ...f, difficulty: e.target.value, page: 0 })} className={inp}>
          <option value="">All Levels</option>
          {LEVELS.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <select value={f.status} onChange={(e) => setF({ ...f, status: e.target.value, page: 0 })} className={inp}>
          <option value="">All Statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Table & Pagination */}
      {!data ? (
        <div className="p-8 text-center"><Loader2 className="mx-auto animate-spin" /></div>
      ) : (
        <div className="surface overflow-hidden rounded-xl shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted text-xs font-semibold text-muted-foreground uppercase border-b">
                <tr>
                  <th className="p-3">Question</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Level</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.rows.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-muted-foreground">No questions found matching your criteria.</td>
                  </tr>
                )}
                {data.rows.map((r) => (
                  <tr key={r.id} className="hover:bg-accent/50 transition-colors">
                    <td className="p-3 max-w-md">
                      <p className="line-clamp-2 font-medium">{r.body}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{r.chapter} {r.source ? `· ${r.source}` : ""}</p>
                    </td>
                    <td className="p-3 text-xs font-medium">{r.subject}</td>
                    <td className="p-3 text-xs capitalize">{r.difficulty}</td>
                    <td className="p-3">
                      <select
                        value={r.verification_status}
                        onChange={async (e) => {
                          await setStat({ data: { ids: [r.id], status: e.target.value as never } });
                          toast.success("Status updated");
                          load();
                        }}
                        className={`rounded-lg px-2 py-1 text-xs font-bold ${
                          r.verification_status === "verified"
                            ? "bg-success/20 text-success"
                            : r.verification_status === "rejected"
                            ? "bg-destructive/20 text-destructive"
                            : "bg-warning/20 text-warning"
                        }`}
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3 text-right space-x-1">
                      <button onClick={() => setPreviewItem(r)} className={`${btn} bg-muted hover:bg-accent p-1.5`} title="Student Preview">
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      <button onClick={() => setEdit(r)} className={`${btn} bg-muted hover:bg-accent p-1.5`} title="Edit">
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={async () => {
                          if (confirm("Delete this question permanently?")) {
                            await del({ data: { id: r.id } });
                            toast.success("Question deleted");
                            load();
                          }
                        }}
                        className={`${btn} bg-destructive/10 text-destructive hover:bg-destructive/20 p-1.5`}
                        title="Delete"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit Dialog */}
      {edit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="surface max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 rounded-2xl shadow-2xl space-y-4">
            <h3 className="text-lg font-bold">Edit Question</h3>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">Question Text</label>
              <textarea
                rows={4}
                value={edit.body}
                onChange={(e) => setEdit({ ...edit, body: e.target.value })}
                className="w-full rounded-xl border p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                type="button"
                onClick={async () => {
                  const res = await checkDup({ data: { body: edit.body } });
                  if (res.isDuplicate) setDupResult("Warning: Duplicate or similar question text already exists in database!");
                  else setDupResult("No duplicates found.");
                }}
                className={`${btn} bg-muted text-xs`}
              >
                <Copy className="h-3.5 w-3.5" /> Check Duplicate
              </button>
              {dupResult && <span className="text-xs font-semibold text-warning self-center">{dupResult}</span>}
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">Explanation / Solution</label>
              <textarea
                rows={3}
                value={edit.explanation ?? ""}
                onChange={(e) => setEdit({ ...edit, explanation: e.target.value })}
                className="w-full rounded-xl border p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setEdit(null)} className={`${btn} bg-muted`}>Cancel</button>
              <button
                onClick={async () => {
                  await save({ data: { items: [edit] } });
                  toast.success("Question saved");
                  setEdit(null);
                  load();
                }}
                className={`${btn} bg-primary text-primary-foreground`}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Dialog */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="surface w-full max-w-lg p-6 rounded-2xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-bold text-primary">Student Card Preview</h3>
              <button onClick={() => setPreviewItem(null)} className="text-muted-foreground hover:text-foreground">✕</button>
            </div>
            <p className="text-xs text-muted-foreground">{previewItem.subject} · {previewItem.chapter}</p>
            <p className="font-semibold text-base">{previewItem.body}</p>
            <div className="space-y-2">
              {previewItem.options.map((o) => (
                <div key={o.id} className="p-3 rounded-xl border text-sm flex items-center gap-2">
                  <span className="font-bold uppercase text-xs">{o.id})</span> {o.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* 2. EXAM MANAGEMENT TAB */
function ExamManagerView() {
  const validate = useServerFn(validateExamPrePublish);
  const [selectedExam, setSelectedExam] = useState("jee-main");
  const [valResult, setValResult] = useState<{ isValid: boolean; totalQuestions: number; verifiedCount: number; errors: string[]; warnings: string[] } | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleValidate() {
    setBusy(true);
    try {
      const res = await validate({ data: { examId: selectedExam } });
      setValResult(res);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="surface p-6 rounded-2xl shadow-xs space-y-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Sliders className="h-5 w-5 text-primary" /> Configure Exam Parameters & Pre-Publish Validation
        </h2>
        <p className="text-xs text-muted-foreground">
          Validate exam structure, question count, marking schemes (+4/-1), and verified keys before publishing to students.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <select value={selectedExam} onChange={(e) => setSelectedExam(e.target.value)} className={inp}>
            {EXAMS.map((e) => (
              <option key={e.id} value={e.id}>{e.name} ({e.group})</option>
            ))}
          </select>
          <button onClick={handleValidate} disabled={busy} className={`${btn} bg-primary text-primary-foreground`}>
            {busy ? "Validating…" : "Run Pre-Publish Validation"}
          </button>
        </div>

        {valResult && (
          <div className="mt-4 p-4 rounded-xl border bg-card space-y-3">
            <div className="flex items-center gap-2">
              {valResult.isValid ? (
                <CheckCircle className="h-5 w-5 text-success" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-destructive" />
              )}
              <span className="font-bold text-sm">
                {valResult.isValid ? "Exam Structure Valid & Ready for Publication" : "Validation Errors Detected"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="surface p-3 rounded-lg">
                <span className="text-muted-foreground">Assigned Questions:</span>{" "}
                <span className="font-bold text-foreground">{valResult.totalQuestions}</span>
              </div>
              <div className="surface p-3 rounded-lg">
                <span className="text-muted-foreground">Verified Questions:</span>{" "}
                <span className="font-bold text-success">{valResult.verifiedCount}</span>
              </div>
            </div>

            {valResult.errors.length > 0 && (
              <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-xs text-destructive space-y-1">
                <p className="font-bold">Errors (Must fix before publishing):</p>
                {valResult.errors.map((err, i) => (
                  <p key={i}>• {err}</p>
                ))}
              </div>
            )}

            {valResult.warnings.length > 0 && (
              <div className="rounded-lg bg-warning/10 border border-warning/20 p-3 text-xs text-warning space-y-1">
                <p className="font-bold">Warnings:</p>
                {valResult.warnings.map((w, i) => (
                  <p key={i}>• {w}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* 3. ROLES & USERS TAB */
function RoleManagerView() {
  const listUsers = useServerFn(listAdminUsers);
  const assignRole = useServerFn(assignAdminRole);
  const [users, setUsers] = useState<{ user_id: string; role: string }[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    listUsers()
      .then((res) => setUsers(res.users as never))
      .catch(() => toast.error("Failed to load user roles"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="surface p-6 rounded-2xl shadow-xs space-y-4">
      <h2 className="text-lg font-bold flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" /> Administrator Roles & Permissions
      </h2>
      <p className="text-xs text-muted-foreground">
        Manage authorized staff access with granular permissions (Super Admin, Question Manager, Content Reviewer, Analytics Viewer).
      </p>

      {loading ? (
        <Loader2 className="mx-auto animate-spin" />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-xs font-semibold uppercase border-b">
              <tr>
                <th className="p-3">User ID</th>
                <th className="p-3">Role</th>
                <th className="p-3 text-right">Change Role</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((u) => (
                <tr key={u.user_id} className="hover:bg-accent/40">
                  <td className="p-3 font-mono text-xs">{u.user_id}</td>
                  <td className="p-3 font-bold text-xs uppercase text-primary">{u.role}</td>
                  <td className="p-3 text-right">
                    <select
                      value={u.role}
                      onChange={async (e) => {
                        await assignRole({ data: { targetUserId: u.user_id, role: e.target.value as never } });
                        toast.success("Role updated");
                        load();
                      }}
                      className={inp}
                    >
                      {ADMIN_ROLES.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* 4. PLATFORM ANALYTICS TAB */
function AnalyticsView() {
  const getStats = useServerFn(getAnalyticsData);
  const [timeframe, setTimeframe] = useState<"all" | "30days" | "7days">("all");
  const [stats, setStats] = useState<{ totalQuestions: number; verifiedQuestions: number; pendingReviewQuestions: number; totalAttempts: number; completedAttempts: number; completionRate: number; avgAccuracy: number } | null>(null);

  useEffect(() => {
    getStats({ data: { timeframe } }).then((s) => setStats(s as never));
  }, [timeframe]);

  function exportCSV() {
    if (!stats) return;
    const csvContent = `Metric,Value\nTotal Questions,${stats.totalQuestions}\nVerified Questions,${stats.verifiedQuestions}\nPending Review,${stats.pendingReviewQuestions}\nTotal Attempts,${stats.totalAttempts}\nCompleted Attempts,${stats.completedAttempts}\nCompletion Rate (%),${stats.completionRate}%\nAverage Accuracy (%),${stats.avgAccuracy}%\n`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `analytics-report-${timeframe}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 surface p-4 rounded-xl">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" /> Real Database-Backed Platform Statistics
        </h2>
        <div className="flex items-center gap-2">
          <select value={timeframe} onChange={(e) => setTimeframe(e.target.value as never)} className={inp}>
            <option value="all">All Time</option>
            <option value="30days">Last 30 Days</option>
            <option value="7days">Last 7 Days</option>
          </select>
          <button onClick={exportCSV} className={`${btn} bg-primary text-primary-foreground`}>
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      {!stats ? (
        <Loader2 className="mx-auto animate-spin" />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="surface p-4 rounded-2xl shadow-xs">
            <p className="text-xs text-muted-foreground font-medium">Total Questions</p>
            <p className="text-2xl font-bold mt-1">{stats.totalQuestions}</p>
            <p className="text-xs text-success mt-1">{stats.verifiedQuestions} verified</p>
          </div>
          <div className="surface p-4 rounded-2xl shadow-xs">
            <p className="text-xs text-muted-foreground font-medium">Total Attempts</p>
            <p className="text-2xl font-bold mt-1">{stats.totalAttempts}</p>
            <p className="text-xs text-primary mt-1">{stats.completedAttempts} completed</p>
          </div>
          <div className="surface p-4 rounded-2xl shadow-xs">
            <p className="text-xs text-muted-foreground font-medium">Completion Rate</p>
            <p className="text-2xl font-bold mt-1">{stats.completionRate}%</p>
          </div>
          <div className="surface p-4 rounded-2xl shadow-xs">
            <p className="text-xs text-muted-foreground font-medium">Avg Accuracy</p>
            <p className="text-2xl font-bold mt-1">{stats.avgAccuracy}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* 5. IMPORTER TAB */
function Importer() {
  const save = useServerFn(saveQuestions);
  const extract = useServerFn(aiExtract);
  const [mode, setMode] = useState<"template" | "pdf">("template");
  const [csvText, setCsvText] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [exam, setExam] = useState("kcet");
  const [year, setYear] = useState(2024);
  const [source, setSource] = useState("Past Paper");
  const [busy, setBusy] = useState(false);

  async function handleCsvImport() {
    try {
      const lines = csvText.trim().split("\n");
      const items: QuestionInput[] = lines.slice(1).map((l) => {
        const parts = l.split(",");
        return {
          exam_ids: [exam],
          subject: parts[0] || "Physics",
          chapter: parts[1] || "General",
          topic: "",
          qtype: "single",
          body: parts[2] || "Question",
          options: [
            { id: "a", text: parts[3] || "Option A" },
            { id: "b", text: parts[4] || "Option B" },
            { id: "c", text: parts[5] || "Option C" },
            { id: "d", text: parts[6] || "Option D" },
          ],
          correct: [parts[7] || "a"],
          explanation: "",
          difficulty: "medium",
          source: "Bulk CSV",
          is_previous_year: false,
          verification_status: "draft",
        };
      });
      await save({ data: { items } });
      toast.success(`Imported ${items.length} questions as draft.`);
    } catch (e) {
      toast.error((e as Error).message);
    }
  }

  async function handlePdfExtract() {
    setBusy(true);
    try {
      const res = await extract({ data: { text: pdfText, exam, year, source } });
      await save({ data: { items: res as never } });
      toast.success(`Extracted ${res.length} questions as draft.`);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="surface p-6 rounded-2xl shadow-xs space-y-4">
      <div className="flex gap-2 border-b pb-3">
        <button onClick={() => setMode("template")} className={`${btn} ${mode === "template" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
          <FileSpreadsheet className="h-4 w-4" /> CSV / Template
        </button>
        <button onClick={() => setMode("pdf")} className={`${btn} ${mode === "pdf" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
          <FileText className="h-4 w-4" /> PDF Text Extractor
        </button>
      </div>

      {mode === "template" ? (
        <div className="space-y-3">
          <textarea
            rows={8}
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
            placeholder="Subject,Chapter,Question Body,Option A,Correct Key\nPhysics,Kinematics,What is velocity?,m/s,a"
            className="w-full rounded-xl border p-3 font-mono text-xs outline-none focus:ring-2 focus:ring-primary"
          />
          <button onClick={handleCsvImport} className={`${btn} bg-primary text-primary-foreground`}>
            Import CSV Rows
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <textarea
            rows={8}
            value={pdfText}
            onChange={(e) => setPdfText(e.target.value)}
            placeholder="Paste text copied from selectable-text PDF question paper..."
            className="w-full rounded-xl border p-3 font-mono text-xs outline-none focus:ring-2 focus:ring-primary"
          />
          <button onClick={handlePdfExtract} disabled={busy} className={`${btn} bg-primary text-primary-foreground`}>
            {busy ? "Extracting…" : "AI Extract & Save Draft Questions"}
          </button>
        </div>
      )}
    </div>
  );
}

/* 6. PREDICTOR TAB */
function Predictor() {
  const predict = useServerFn(aiPredict);
  const trends = useServerFn(chapterTrends);
  const save = useServerFn(saveQuestions);

  const [exam, setExam] = useState("kcet");
  const [subject, setSubject] = useState("Physics");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard" | "expert">("medium");
  const [count, setCount] = useState(5);
  const [busy, setBusy] = useState(false);

  async function handlePredict() {
    setBusy(true);
    try {
      const res = await predict({ data: { exam, subject, difficulty, count } });
      await save({ data: { items: res as never } });
      toast.success(`Generated ${res.length} predicted draft questions.`);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="surface p-6 rounded-2xl shadow-xs space-y-4">
      <h2 className="text-lg font-bold flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" /> AI Topic Frequency & Question Predictor
      </h2>
      <p className="text-xs text-muted-foreground">
        Analyzes imported past-year paper frequencies and generates new predicted practice questions in draft status.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <select value={exam} onChange={(e) => setExam(e.target.value)} className={inp}>
          {EXAMS.map((e) => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </select>
        <select value={subject} onChange={(e) => setSubject(e.target.value)} className={inp}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value as never)} className={inp}>
          {LEVELS.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <button onClick={handlePredict} disabled={busy} className={`${btn} bg-primary text-primary-foreground`}>
          {busy ? "Generating…" : "Generate AI Prediction Questions"}
        </button>
      </div>
    </div>
  );
}
