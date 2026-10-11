import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bell, Bookmark, GraduationCap, Home, LineChart, Menu, NotebookPen, RotateCcw, Search, Timer, Trophy, User, X, ShieldCheck,
} from "lucide-react";
import { ThemeToggle } from "./theme";
import { EXAMS } from "@/lib/exams";
import { Logo } from "./Logo";
import { useAuth } from "@/hooks/use-auth";

export const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/scholarship-exam", label: "Scholarship Exam", icon: GraduationCap },
  { to: "/practice", label: "Practice", icon: NotebookPen },
  { to: "/mock-tests", label: "Mock Tests", icon: Timer },
  { to: "/revision", label: "Revision", icon: RotateCcw },
  { to: "/performance", label: "Performance", icon: LineChart },
  { to: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { to: "/bookmarks", label: "Bookmarks", icon: Bookmark },
] as const;

const BOTTOM = ["/", "/scholarship-exam", "/practice", "/mock-tests"];

export function Header() {
  const [search, setSearch] = useState(false);
  const [notif, setNotif] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const { user, logout, isAdmin } = useAuth();

  return (
    <>
      <header className="glass sticky top-0 z-40 border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
          <Link to="/" className="shrink-0"><Logo /></Link>
          <nav className="hidden flex-1 items-center gap-1 overflow-x-auto xl:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground data-[status=active]:bg-accent data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={() => setSearch(true)} aria-label="Search" className="icon-3d h-9 w-9"><Search className="h-4 w-4" /></button>
            <div className="relative">
              <button onClick={() => setNotif((v) => !v)} aria-label="Notifications" className="icon-3d h-9 w-9"><Bell className="h-4 w-4" /></button>
              {notif && (
                <div className="surface absolute right-0 top-11 w-72 p-4 animate-in fade-in zoom-in-95">
                  <p className="text-sm font-semibold">Notifications</p>
                  <p className="mt-2 text-sm text-muted-foreground">You're all caught up. Exam announcements will appear here.</p>
                </div>
              )}
            </div>
            <ThemeToggle />
            {isAdmin && (
              <Link
                to="/admin"
                aria-label="Admin Portal"
                title="Admin Portal"
                className="flex h-9 items-center gap-1.5 px-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-semibold hover:bg-primary/20 transition-colors"
              >
                <ShieldCheck className="h-4 w-4" />
                <span className="hidden sm:inline">Admin</span>
              </Link>
            )}
            <Link to={user ? "/profile" : "/auth"} aria-label={user ? "Profile" : "Sign in"} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-primary-foreground shadow-sm hover:opacity-90 transition-opacity">
              <User className="h-4 w-4" />
            </Link>
            <button onClick={() => setDrawer(true)} aria-label="Open menu" className="icon-3d h-9 w-9 xl:hidden"><Menu className="h-4 w-4" /></button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet bottom fixed navigation bar (visible on screens < 1280px) */}
      <nav className="glass fixed inset-x-3 bottom-3 z-50 flex items-center justify-around rounded-2xl border bg-card/95 px-2 py-2 shadow-2xl backdrop-blur-xl xl:hidden">
        {NAV.filter((n) => BOTTOM.includes(n.to)).map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: n.to === "/" }}
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-primary/10 data-[status=active]:font-semibold data-[status=active]:text-primary"
          >
            <n.icon className="h-5 w-5" />
            <span>{n.label === "Scholarship Exam" ? "Scholarship" : n.label}</span>
          </Link>
        ))}
        <button
          onClick={() => setDrawer(true)}
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Menu className="h-5 w-5" />
          <span>More</span>
        </button>
      </nav>

      {drawer && (
        <div className="fixed inset-0 z-50 bg-foreground/30 animate-in fade-in" onClick={() => setDrawer(false)}>
          <aside className="surface absolute right-0 top-0 h-full w-72 rounded-r-none p-4 animate-in slide-in-from-right" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <Logo />
              <button onClick={() => setDrawer(false)} aria-label="Close menu" className="icon-3d h-9 w-9"><X className="h-4 w-4" /></button>
            </div>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setDrawer(false)} activeOptions={{ exact: n.to === "/" }}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-accent data-[status=active]:bg-accent data-[status=active]:text-primary">
                <n.icon className="h-4 w-4" />{n.label}
              </Link>
            ))}
            <div className="mt-4 border-t pt-4 space-y-2">
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setDrawer(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20"
                >
                  <ShieldCheck className="h-4 w-4" /> Admin Portal
                </Link>
              )}
              {user ? (
                <button onClick={() => { logout(); setDrawer(false); window.location.href = "/"; }} className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium hover:bg-accent">Sign out ({(user.user_metadata as Record<string, any>)?.['full_name'] || user.email})</button>
              ) : (
                <Link to="/auth" onClick={() => setDrawer(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-accent">Sign in</Link>
              )}
            </div>
          </aside>
        </div>
      )}

      {search && <SearchDialog onClose={() => setSearch(false)} />}
    </>
  );
}

function SearchDialog({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  const term = q.toLowerCase();
  const results = EXAMS.flatMap((e) => [
    { label: e.name, sub: e.group, id: e.id },
    ...e.subjects.map((s) => ({ label: `${s.name}`, sub: e.short, id: e.id, extra: s.chapters.join(" ") })),
  ]).filter((r) => !term || `${r.label} ${r.sub} ${"extra" in r ? r.extra : ""}`.toLowerCase().includes(term)).slice(0, 8);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/30 p-4 pt-24" onClick={onClose}>
      <div className="surface w-full max-w-lg p-3 animate-in fade-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 border-b px-2 pb-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search exams, subjects, chapters…"
            className="w-full bg-transparent text-sm outline-none" />
        </div>
        <ul className="mt-2 max-h-80 overflow-y-auto">
          {results.length === 0 && <li className="p-3 text-sm text-muted-foreground">No matches.</li>}
          {results.map((r, i) => (
            <li key={i}>
              <button className="flex w-full justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-accent"
                onClick={() => { onClose(); navigate({ to: "/exams/$examId", params: { examId: r.id } }); }}>
                <span>{r.label}</span><span className="text-muted-foreground">{r.sub}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
