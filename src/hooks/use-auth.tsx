import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { getMasterySettings } from "@/lib/engine.functions";

const SESSION_KEY = "study_user_session";
const ADMIN_KEY = "study_admin_active";

export interface UserProfile {
  id: string;
  display_name: string | null;
  email: string | null;
  phone: string | null;
  avatar_url: string | null;
  standard: string | null;
  stream: string | null;
  location?: string | null;
  about_me?: string | null;
  target_exams?: string[] | null;
  primary_exam?: string | null;
  exam_details?: Record<string, any> | null;
  study_goals?: Record<string, any> | null;
  learning_preferences?: Record<string, any> | null;
  notification_preferences?: Record<string, any> | null;
  created_at?: string | null;
  updated_at?: string | null;
}

interface AuthCtx {
  user: User | null;
  profile: UserProfile | null;
  ready: boolean;
  isAdmin: boolean;
  loginUser: (user: any, isAdminUser?: boolean) => void;
  refreshProfile: () => Promise<UserProfile | null>;
  logout: () => void;
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  profile: null,
  ready: false,
  isAdmin: false,
  loginUser: () => {},
  refreshProfile: async () => null,
  logout: () => {},
});

/** Read local session from localStorage */
function readLocalSession(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/** Fetch or lazily initialize the canonical student profile from public.profiles + auth metadata */
async function fetchCanonicalProfile(authUser: User): Promise<UserProfile | null> {
  try {
    const meta = (authUser.user_metadata || {}) as Record<string, any>;

    // 1. Try reading profile from public.profiles (try full columns, fallback to core)
    let profile: any = null;
    let { data: initialProfile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", authUser.id)
      .maybeSingle();
    profile = initialProfile;

    if (error && (error.code === "PGRST204" || error.code === "42703")) {
      const res = await supabase
        .from("profiles")
        .select("id, display_name, email, phone, avatar_url, standard, stream")
        .eq("id", authUser.id)
        .maybeSingle();
      profile = res.data;
      error = res.error;
    }

    // 2. If user exists in Auth but has no database row yet, initialize idempotently
    if (!profile && !error && authUser.id) {
      const initialName =
        meta["full_name"] || meta["display_name"] || meta["name"] || authUser.email?.split("@")[0] || "Student";
      const initialAvatar = meta["avatar_url"] || meta["picture"] || null;

      const { data: newProfile } = await supabase
        .from("profiles")
        .upsert({
          id: authUser.id,
          display_name: initialName,
          email: authUser.email || null,
          avatar_url: initialAvatar,
          standard: meta["standard"] || "12th Standard",
          stream: meta["stream"] || "PCMB",
          updated_at: new Date().toISOString(),
        })
        .select("id, display_name, email, phone, avatar_url, standard, stream")
        .maybeSingle();

      profile = newProfile;
    }

    // 3. Construct unified UserProfile merging database row and user_metadata
    const resolved: UserProfile = {
      id: authUser.id,
      display_name: profile?.display_name || meta["display_name"] || meta["full_name"] || authUser.email?.split("@")[0] || "Student",
      email: profile?.email || authUser.email || null,
      phone: profile?.phone || meta["phone"] || null,
      avatar_url: profile?.avatar_url || meta["avatar_url"] || null,
      standard: profile?.standard || meta["standard"] || "12th Standard",
      stream: profile?.stream || meta["stream"] || "PCMB",
      location: (profile as any)?.location || meta["location"] || "Bengaluru, Karnataka",
      about_me: (profile as any)?.about_me || meta["about_me"] || "",
      target_exams: (profile as any)?.target_exams || meta["target_exams"] || ["KCET", "JEE Main"],
      primary_exam: (profile as any)?.primary_exam || meta["primary_exam"] || "KCET",
      exam_details: (profile as any)?.exam_details || meta["exam_details"] || {},
      study_goals: (profile as any)?.study_goals || meta["study_goals"] || {},
      learning_preferences: (profile as any)?.learning_preferences || meta["learning_preferences"] || {},
      notification_preferences: (profile as any)?.notification_preferences || meta["notification_preferences"] || {},
      created_at: profile?.created_at || authUser.created_at || null,
      updated_at: profile?.updated_at || null,
    };

    return resolved;
  } catch (err) {
    console.warn("Could not sync user profile from database:", err);
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  let queryClient: any = null;
  try {
    // Safely obtain queryClient if rendered within QueryClientProvider
    queryClient = useQueryClient();
  } catch {}

  const refreshProfile = useCallback(async (): Promise<UserProfile | null> => {
    if (!user?.id) return null;
    const p = await fetchCanonicalProfile(user);
    if (p) {
      setProfile(p);
      // Keep local user_metadata in sync
      setUser((prev) => {
        if (!prev) return prev;
        const updated = {
          ...prev,
          user_metadata: {
            ...(prev.user_metadata || {}),
            avatar_url: p.avatar_url || prev.user_metadata?.["avatar_url"],
            full_name: p.display_name || prev.user_metadata?.["full_name"],
            display_name: p.display_name || prev.user_metadata?.["display_name"],
            phone: p.phone || prev.user_metadata?.["phone"],
            location: p.location || prev.user_metadata?.["location"],
            about_me: p.about_me || prev.user_metadata?.["about_me"],
            target_exams: p.target_exams || prev.user_metadata?.["target_exams"],
            primary_exam: p.primary_exam || prev.user_metadata?.["primary_exam"],
            exam_details: p.exam_details || prev.user_metadata?.["exam_details"],
            study_goals: p.study_goals || prev.user_metadata?.["study_goals"],
            learning_preferences: p.learning_preferences || prev.user_metadata?.["learning_preferences"],
            notification_preferences: p.notification_preferences || prev.user_metadata?.["notification_preferences"],
          },
        };
        try {
          localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
        } catch {}
        return updated;
      });
    }
    return p;
  }, [user?.id]);

  // Initialize from cache memory on browser mount
  useEffect(() => {
    const isExplicitLogout = typeof window !== "undefined" && localStorage.getItem("study_explicit_logout") === "1";
    const local = isExplicitLogout ? null : readLocalSession();
    const adminActive = typeof window !== "undefined" && localStorage.getItem(ADMIN_KEY) === "true";
    if (local) {
      setUser(local);
      setIsAdmin(adminActive);
      // Asynchronously fetch latest canonical database profile for cross-device sync
      fetchCanonicalProfile(local).then((p) => {
        if (p) setProfile(p);
      });
    }
    setReady(true);

    // Sync with Supabase session if one exists
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("study_explicit_logout");
          localStorage.setItem(SESSION_KEY, JSON.stringify(data.session.user));
          if (data.session.access_token) {
            document.cookie = `study_token=${encodeURIComponent(data.session.access_token)}; path=/; max-age=2592000; SameSite=Lax`;
          }
        }
        setUser(data.session.user);
        // Hydrate canonical profile from database
        fetchCanonicalProfile(data.session.user).then((p) => {
          if (p) setProfile(p);
        });
      } else {
        // No active Supabase session: purge stale session to prevent ghost accounts
        if (typeof window !== "undefined") {
          localStorage.removeItem(SESSION_KEY);
          localStorage.removeItem(ADMIN_KEY);
          document.cookie = "study_token=; path=/; max-age=0; SameSite=Lax";
          document.cookie = "study_user_session=; path=/; max-age=0; SameSite=Lax";
        }
        setUser(null);
        setProfile(null);
        setIsAdmin(false);
      }
    });

    // Synchronize shared database mastery threshold to client state
    getMasterySettings().then((res) => {
      if (res?.threshold && typeof window !== "undefined") {
        try {
          localStorage.setItem("study_mastery_threshold", String(res.threshold));
        } catch {}
      }
    }).catch(() => {});

    const { data: authSub } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("study_explicit_logout");
          localStorage.setItem(SESSION_KEY, JSON.stringify(session.user));
          if (session.access_token) {
            document.cookie = `study_token=${encodeURIComponent(session.access_token)}; path=/; max-age=2592000; SameSite=Lax`;
          }
        }
        setUser(session.user);
        fetchCanonicalProfile(session.user).then((p) => {
          if (p) setProfile(p);
        });
      } else if (event === "SIGNED_OUT" || !session) {
        setUser(null);
        setProfile(null);
        setIsAdmin(false);
        if (typeof window !== "undefined") {
          document.cookie = "study_token=; path=/; max-age=0; SameSite=Lax";
          document.cookie = "study_user_session=; path=/; max-age=0; SameSite=Lax";
          localStorage.removeItem(SESSION_KEY);
          localStorage.removeItem(ADMIN_KEY);
        }
        if (queryClient) {
          try {
            queryClient.clear();
          } catch {}
        }
      }
    });

    // Multi-tab storage synchronization listener
    const handleStorage = (e: StorageEvent) => {
      if (e.key === SESSION_KEY) {
        if (!e.newValue) {
          // Logged out in another tab
          setUser(null);
          setProfile(null);
          setIsAdmin(false);
          if (queryClient) {
            try {
              queryClient.clear();
            } catch {}
          }
        } else {
          try {
            const nextUser = JSON.parse(e.newValue);
            setUser(nextUser);
            fetchCanonicalProfile(nextUser).then((p) => {
              if (p) setProfile(p);
            });
            if (queryClient) {
              try {
                queryClient.clear();
              } catch {}
            }
          } catch {}
        }
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }

    return () => {
      authSub.subscription.unsubscribe();
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
    };
  }, [queryClient]);

  const loginUser = useCallback((u: any, isAdm = false) => {
    if (typeof window !== "undefined") {
      const serialized = JSON.stringify(u);
      localStorage.setItem(SESSION_KEY, serialized);
      try {
        const encoded = btoa(encodeURIComponent(serialized));
        document.cookie = `study_user_session=${encoded}; path=/; max-age=2592000; SameSite=Lax`;
      } catch {}
      if (isAdm) {
        localStorage.setItem(ADMIN_KEY, "true");
      } else {
        localStorage.removeItem(ADMIN_KEY);
      }
      localStorage.removeItem("study_explicit_logout");
    }
    if (queryClient) {
      try {
        queryClient.clear();
      } catch {}
    }
    setUser(u);
    setIsAdmin(isAdm);
    setReady(true);
    if (u?.id) {
      fetchCanonicalProfile(u).then((p) => {
        if (p) setProfile(p);
      });
    }
  }, [queryClient]);

  const logout = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentId = user?.id;
      localStorage.setItem("study_explicit_logout", "1");
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(ADMIN_KEY);
      localStorage.removeItem("bookmarks");
      localStorage.removeItem("study_registered_students");
      if (currentId) {
        localStorage.removeItem(`study_bookmarks_${currentId}`);
      }
      document.cookie = "study_user_session=; path=/; max-age=0; SameSite=Lax";
      document.cookie = "study_token=; path=/; max-age=0; SameSite=Lax";
    }
    if (queryClient) {
      try {
        queryClient.clear();
      } catch {}
    }
    setUser(null);
    setProfile(null);
    setIsAdmin(false);
    supabase.auth.signOut().catch(() => {});
  }, [user?.id, queryClient]);

  return (
    <AuthContext.Provider value={{ user, profile, ready, isAdmin, loginUser, refreshProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Use this hook anywhere to access the shared auth state */
export function useAuth() {
  return useContext(AuthContext);
}
