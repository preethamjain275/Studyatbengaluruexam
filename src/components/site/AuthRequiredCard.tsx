import { Link } from "@tanstack/react-router";
import { Lock, LogIn } from "lucide-react";
import { btnGhost, btnPrimary } from "@/components/site/ui";

export function AuthRequiredCard({ title = "Before opening this you should sign in." }: { title?: string }) {
  function saveReturnPath() {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("auth-next", window.location.pathname);
    }
  }

  return (
    <div className="mx-auto my-8 max-w-lg">
      <div className="surface p-8 text-center shadow-lg">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Lock className="h-7 w-7" />
        </div>
        <h2 className="mt-4 text-xl font-bold">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to access your personal dashboard, track practice levels, view your rank on the leaderboard, and solve questions saved to your profile.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/auth"
            onClick={saveReturnPath}
            className={`${btnPrimary} w-full py-3 text-base`}
          >
            <LogIn className="h-4 w-4" /> Sign in to continue
          </Link>
          <Link
            to="/auth"
            search={{ mode: "up" }}
            onClick={saveReturnPath}
            className={`${btnGhost} w-full py-2.5 text-sm`}
          >
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  );
}
