import { useEffect, useState } from "react";
import { Megaphone, X, ArrowRight, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export interface Announcement {
  id: string;
  title: string;
  message: string;
  link?: string | null;
  badge?: string | null;
  active: boolean;
  created_at?: string | null;
}

const DEFAULT_ANNOUNCEMENT: Announcement = {
  id: "announcement-welcome-2026",
  title: "🎯 KCET & NEET UG 2026 Practice Series is Live!",
  message: "Full NCERT-aligned question banks, instant step-by-step solutions, formula guides, and timed mock tests are now available for all students. Choose your track in Practice to begin!",
  link: "/practice",
  badge: "Exam Alert 📢",
  active: true,
};

export function AnnouncementPopup() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function loadAnnouncement() {
      // 1. Check local storage first for fast response
      let activeItem: Announcement | null = null;
      try {
        const raw = localStorage.getItem("study_active_announcement");
        if (raw) {
          activeItem = JSON.parse(raw);
        }
      } catch {}

      // 2. Query Supabase announcements table if available
      try {
        const { data } = await supabase
          .from("announcements")
          .select("*")
          .eq("active", true)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (data) {
          activeItem = {
            id: data.id,
            title: data.title,
            message: data.message,
            link: data.link,
            badge: data.badge || "Important Announcement 📢",
            active: data.active ?? true,
          };
          localStorage.setItem("study_active_announcement", JSON.stringify(activeItem));
        }
      } catch {}

      // Fallback to default active announcement if none exists
      if (!activeItem) {
        activeItem = DEFAULT_ANNOUNCEMENT;
      }

      if (activeItem && activeItem.active) {
        // Check if dismissed in this browser session
        const dismissedKey = `dismissed_announcement_${activeItem.id}`;
        const isDismissed = sessionStorage.getItem(dismissedKey);
        if (!isDismissed) {
          setAnnouncement(activeItem);
          // Show with a brief gentle delay so the page loads first
          setTimeout(() => setOpen(true), 800);
        }
      }
    }

    loadAnnouncement();
  }, []);

  if (!open || !announcement) return null;

  function dismiss() {
    if (announcement) {
      sessionStorage.setItem(`dismissed_announcement_${announcement.id}`, "1");
    }
    setOpen(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in" role="dialog" aria-modal="true">
      <div className="surface max-w-lg w-full p-6 sm:p-7 rounded-2xl shadow-2xl border-2 border-primary/30 space-y-4 relative">
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          aria-label="Close announcement"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <span className="inline-block rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              {announcement.badge || "Announcement 📢"}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
            {announcement.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {announcement.message}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t">
          <button
            onClick={dismiss}
            className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-muted transition"
          >
            Got it, thanks
          </button>
          {announcement.link && (
            <a
              href={announcement.link}
              onClick={dismiss}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition"
            >
              Open Now <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
