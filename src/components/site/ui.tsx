import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>}
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      {children && <p className="mt-3 max-w-2xl text-muted-foreground">{children}</p>}
    </div>
  );
}

export function EmptyState({ icon: Icon, title, children, action }: { icon: LucideIcon; title: string; children?: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed p-8 text-center">
      <span className="icon-3d mb-3 h-11 w-11"><Icon className="h-5 w-5" /></span>
      <p className="font-semibold">{title}</p>
      {children && <p className="mt-1 max-w-sm text-sm text-muted-foreground">{children}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function Card({ title, icon: Icon, children, className = "" }: { title?: string; icon?: LucideIcon; children: ReactNode; className?: string }) {
  return (
    <section className={`surface p-5 ${className}`}>
      {title && (
        <div className="mb-4 flex items-center gap-2">
          {Icon && <span className="icon-3d h-8 w-8"><Icon className="h-4 w-4" /></span>}
          <h2 className="text-base font-semibold">{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:opacity-95 hover:shadow-[var(--shadow-lift)]";
export const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-xl border bg-card px-5 py-2.5 text-sm font-semibold transition hover:bg-accent";
