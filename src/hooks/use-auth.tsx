import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "study_user_session";
const ADMIN_KEY = "study_admin_active";

interface AuthCtx {
  user: User | null;
  ready: boolean;
  isAdmin: boolean;
  loginUser: (user: any, isAdminUser?: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  ready: false,
  isAdmin: false,
  loginUser: () => {},
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Initialize from cache memory on browser mount
  useEffect(() => {
    const local = readLocalSession();
    const adminActive = localStorage.getItem(ADMIN_KEY) === "true";
    if (local) {
      setUser(local);
      setIsAdmin(adminActive);
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
      }
    });

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        localStorage.setItem(SESSION_KEY, JSON.stringify(session.user));
        if (session.access_token) {
          document.cookie = `study_token=${encodeURIComponent(session.access_token)}; path=/; max-age=2592000; SameSite=Lax`;
        }
      } else if (event === "SIGNED_OUT") {
        setUser(null);
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
    setIsAdmin(false);
    supabase.auth.signOut().catch(() => {});
  }, []);

  return (
    <AuthContext.Provider value={{ user, ready, isAdmin, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Use this hook anywhere to access the shared auth state */
export function useAuth() {
  return useContext(AuthContext);
}
