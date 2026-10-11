import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";

export const Route = createFileRoute("/_authenticated")({
  // No beforeLoad redirect - we handle auth purely in the component
  // This avoids SSR issues, race conditions, and redirect loops
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const { user, ready } = useAuth();

  // Still loading
  if (!ready) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="animate-pulse text-sm text-muted-foreground">Loading…</div>
      </div>
    );
  }

  // No user → show sign-in card (no redirect, no loop)
  if (!user) {
    return <AuthRequiredCard title="Please sign in to access this feature." />;
  }

  return <Outlet />;
}
