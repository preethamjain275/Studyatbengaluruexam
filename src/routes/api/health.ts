import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
        const url = new URL(request.url);
        const checkReadiness = url.searchParams.get("probe") === "readiness" || url.searchParams.has("full");

        let dbStatus = "not_checked";
        let isHealthy = true;

        if (checkReadiness) {
          try {
            const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
            const dbPromise = supabaseAdmin.from("questions").select("id").limit(1);
            // 3-second bounded timeout for readiness check
            const timeoutPromise = new Promise((_, reject) =>
              setTimeout(() => reject(new Error("Database check timed out")), 3000)
            );
            const { error } = (await Promise.race([dbPromise, timeoutPromise])) as any;
            if (error) {
              dbStatus = "error";
              isHealthy = false;
            } else {
              dbStatus = "connected";
            }
          } catch (e: any) {
            dbStatus = e?.message?.includes("timed out") ? "timeout" : "unreachable";
            isHealthy = false;
          }
        }

        const statusCode = isHealthy ? 200 : 503;

        return Response.json(
          {
            status: isHealthy ? "ok" : "degraded",
            service: "study-at-bangalore",
            version: "1.0.0",
            timestamp: new Date().toISOString(),
            uptime_seconds: Math.floor(process.uptime?.() ?? 0),
            checks: {
              process: "healthy",
              database: dbStatus,
            },
          },
          {
            status: statusCode,
            headers: {
              "Cache-Control": "no-store, max-age=0",
              "Content-Type": "application/json",
            },
          }
        );
      },
    },
  },
});
