import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/student/login")({
  component: StudentLoginPage,
});

function StudentLoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/auth", search: { mode: "in" }, replace: true });
  }, [navigate]);

  return <div className="p-10 text-center">Loading Student Login…</div>;
}
