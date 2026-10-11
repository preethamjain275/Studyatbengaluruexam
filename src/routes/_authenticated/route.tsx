import { createFileRoute, Outlet, useRouterState, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";
import { useEffect } from "react";

export const Route = createFileRoute("/_authenticated")({
  // No beforeLoad redirect - we handle auth purely in the component
  // This avoids SSR issues, race conditions, and redirect loops
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const { user, ready, isAdmin } = useAuth();
  const location = useRouterState({ select: (s) => s.location });
  const navigate = useNavigate();

  const isAdminRoute = location.pathname === "/admin" || location.pathname.startsWith("/admin/");

  useEffect(() => {
    if (ready && isAdminRoute && (!user || !isAdmin)) {
      navigate({ to: "/admin-login", replace: true });
    }
  }, [ready, isAdminRoute, user, isAdmin, navigate]);

  // Still loading
  if (!ready) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="animate-pulse text-sm text-muted-foreground">Loading…</div>
      </div>
    );
  }

  // Admin route requested without admin authentication -> redirect to /admin-login
  if (isAdminRoute && (!user || !isAdmin)) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="animate-pulse text-sm text-muted-foreground">Redirecting to Admin Login…</div>
      </div>
    );
  }

  // No user → show sign-in card (no redirect, no loop)
  if (!user) {
    return <AuthRequiredCard title="Please sign in to access this feature." />;
  }

  return <Outlet />;
}

