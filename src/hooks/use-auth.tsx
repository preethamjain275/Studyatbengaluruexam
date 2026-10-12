import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

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

/** Fetch or lazily initialize the canonical student profile from public.profiles */
async function fetchCanonicalProfile(authUser: User): Promise<UserProfile | null> {
  try {
    // 1. Try reading profile from public.profiles
    let { data: profile, error } = await supabase
      .from("profiles")
      .select("id, display_name, email, phone, avatar_url, standard, stream")
      .eq("id", authUser.id)
      .maybeSingle();

    // 2. If user exists in Auth but has no database row yet, initialize idempotently
    if (!profile && !error && authUser.id) {
      const meta = (authUser.user_metadata || {}) as Record<string, any>;
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

    return profile as UserProfile | null;
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
    const local = readLocalSession();
    const adminActive = localStorage.getItem(ADMIN_KEY) === "true";
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
        setUser(data.session.user);
        localStorage.setItem(SESSION_KEY, JSON.stringify(data.session.user));
        if (data.session.access_token) {
          document.cookie = `study_token=${encodeURIComponent(data.session.access_token)}; path=/; max-age=2592000; SameSite=Lax`;
        }
        // Hydrate canonical profile from database
        fetchCanonicalProfile(data.session.user).then((p) => {
          if (p) setProfile(p);
        });
      }
    });

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        localStorage.setItem(SESSION_KEY, JSON.stringify(session.user));
        if (session.access_token) {
          document.cookie = `study_token=${encodeURIComponent(session.access_token)}; path=/; max-age=2592000; SameSite=Lax`;
        }
        fetchCanonicalProfile(session.user).then((p) => {
          if (p) setProfile(p);
        });
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setProfile(null);
        setIsAdmin(false);
        document.cookie = "study_token=; path=/; max-age=0; SameSite=Lax";
        document.cookie = "study_user_session=; path=/; max-age=0; SameSite=Lax";
        localStorage.removeItem(SESSION_KEY);
        localStorage.removeItem(ADMIN_KEY);
      }
    });

    return () => data.subscription.unsubscribe();
  }, []);

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
    setUser(u);
    setIsAdmin(isAdm);
    setReady(true);
    if (u?.id) {
      fetchCanonicalProfile(u).then((p) => {
        if (p) setProfile(p);
      });
    }
  }, []);

  const logout = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("study_explicit_logout", "1");
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(ADMIN_KEY);
      document.cookie = "study_user_session=; path=/; max-age=0; SameSite=Lax";
      document.cookie = "study_token=; path=/; max-age=0; SameSite=Lax";
    }
    setUser(null);
    setProfile(null);
    setIsAdmin(false);
    supabase.auth.signOut().catch(() => {});
  }, []);

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
