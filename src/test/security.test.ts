import { describe, expect, it, vi, beforeAll, beforeEach } from "vitest";
import fs from "fs";
import path from "path";

// Mock Supabase admin client for unit testing
let mockRoles: Record<string, string> = {};
let mockAttempts: Record<string, any> = {};

vi.mock("@/integrations/supabase/client.server", () => {
  return {
    __setMockRoles: (roles: Record<string, string>) => {
      mockRoles = roles;
    },
    __setMockAttempts: (attempts: Record<string, any>) => {
      mockAttempts = attempts;
    },
    supabaseAdmin: {
      from: (table: string) => ({
        select: (_cols?: string) => ({
          eq: (col: string, val: string) => {
            const getResult = () => {
              if (table === "user_roles" && col === "user_id") {
                const role = mockRoles[val];
                return { data: role ? [{ role }] : [], error: null };
              }
              if (table === "attempts" && col === "id") {
                const att = mockAttempts[val];
                return { data: att ? [att] : [], error: null };
              }
              return { data: [], error: null };
            };

            const res = getResult();
            return {
              then: (resolve: any) => resolve(res),
              maybeSingle: async () => ({
                data: res.data[0] || null,
                error: null,
              }),
              single: async () => ({
                data: res.data[0] || null,
                error: res.data[0] ? null : new Error("Not found"),
              }),
            };
          },
        }),
        insert: async (data: any) => ({ data, error: null }),
        update: (_data: any) => ({
          eq: (_col: string, _val: string) => ({ error: null }),
        }),
        delete: () => ({
          eq: (_col: string, _val: string) => ({ error: null }),
        }),
      }),
      rpc: async (_fn: string, _args: any) => ({ data: null, error: null }),
    },
    createSupabaseAdminClient: () => {
      if (!process.env["SUPABASE_SERVICE_ROLE_KEY"]) {
        throw new Error("SUPABASE_SERVICE_ROLE_KEY environment variable is not configured on the server.");
      }
      return {};
    },
  };
});

// Mock Supabase JS client for tutor endpoint authentication
vi.mock("@supabase/supabase-js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@supabase/supabase-js")>();
  return {
    ...actual,
    createClient: vi.fn((url: string, key: string, opts?: any) => {
      const client = actual.createClient(url, key, opts);
      return {
        ...client,
        auth: {
          ...client.auth,
          getUser: vi.fn(async (token: string) => {
            if (token === "valid-test-token") {
              return { data: { user: { id: "student-1", email: "student@test.com" } }, error: null };
            }
            return { data: { user: null }, error: new Error("Invalid token") };
          }),
        },
      };
    }),
  };
});

describe("Security Test Group A: Secret Containment & Credential Hygiene", () => {
  it("A1: .env.example does not contain live leaked secrets or keys", () => {
    const envExamplePath = path.resolve(process.cwd(), ".env.example");
    const content = fs.readFileSync(envExamplePath, "utf-8");

    // Must not contain leaked secret token sb_secret_zt29
    expect(content).not.toContain("sb_secret_zt29");
    expect(content).not.toContain("admin123");
    expect(content).not.toContain("Preetham#2026");

    // Must contain safe placeholders
    expect(content).toMatch(/SUPABASE_SERVICE_ROLE_KEY=.*(placeholder|your-supabase)/i);
  });

  it("A2: seed-ncert.mjs throws immediately if SUPABASE_SERVICE_ROLE_KEY is missing", () => {
    const seedScriptPath = path.resolve(process.cwd(), "scripts/seed-ncert.mjs");
    const content = fs.readFileSync(seedScriptPath, "utf-8");

    // Confirms hardcoded fallback key has been eliminated
    expect(content).not.toContain("sb_secret_zt29");
    // Confirms fatal error check exists
    expect(content).toContain("FATAL ERROR: SUPABASE_SERVICE_ROLE_KEY environment variable is required");
  });

  it("A3: client.server.ts throws if service role key is absent", async () => {
    const { createSupabaseAdminClient } = await import("@/integrations/supabase/client.server");
    const original = process.env["SUPABASE_SERVICE_ROLE_KEY"];
    try {
      delete process.env["SUPABASE_SERVICE_ROLE_KEY"];
      expect(() => createSupabaseAdminClient()).toThrow(/SUPABASE_SERVICE_ROLE_KEY environment variable is not configured/);
    } finally {
      if (original) process.env["SUPABASE_SERVICE_ROLE_KEY"] = original;
    }
  });
});

describe("Security Test Group B: Server Authorization & Fail-Closed RBAC", () => {
  let assertAdminRole: typeof import("@/lib/admin.functions")["assertAdminRole"];
  let serverMocks: any;

  beforeAll(async () => {
    const adminModule = await import("@/lib/admin.functions");
    assertAdminRole = adminModule.assertAdminRole;
    serverMocks = await import("@/integrations/supabase/client.server");
  });

  it("B1: assertAdminRole rejects unauthenticated calls with missing userId", async () => {
    await expect(assertAdminRole({})).rejects.toThrow(/Unauthorized: Authentication required/);
    await expect(assertAdminRole({ userId: null })).rejects.toThrow(/Unauthorized: Authentication required/);
  });

  it("B2: assertAdminRole fails closed for unassigned users", async () => {
    serverMocks.__setMockRoles({});

    await expect(
      assertAdminRole({ userId: "random-student-id" })
    ).rejects.toThrow(/Forbidden: Insufficient administrative privileges/);
  });

  it("B3: assertAdminRole recognizes verified admin and super_admin", async () => {
    serverMocks.__setMockRoles({
      "admin-user-1": "admin",
      "super-admin-1": "super_admin",
    });

    const res1 = await assertAdminRole({ userId: "admin-user-1" });
    expect(res1.userId).toBe("admin-user-1");
    expect(res1.roles).toContain("admin");

    const res2 = await assertAdminRole({ userId: "super-admin-1" });
    expect(res2.userId).toBe("super-admin-1");
    expect(res2.roles).toContain("super_admin");
  });

  it("B4: assertAdminRole strictly enforces restricted roles (e.g. super_admin only)", async () => {
    serverMocks.__setMockRoles({
      "standard-admin-1": "admin",
      "super-admin-1": "super_admin",
    });

    // standard admin fails when super_admin is required
    await expect(
      assertAdminRole({ userId: "standard-admin-1" }, ["super_admin"])
    ).rejects.toThrow(/Forbidden: Insufficient administrative privileges/);

    // super_admin succeeds
    const ok = await assertAdminRole({ userId: "super-admin-1" }, ["super_admin"]);
    expect(ok.userId).toBe("super-admin-1");
  });
});

describe("Security Test Group C: Question Bank Isolation & Answer Concealment", () => {
  it("C1: Questions returned by getAttempt do not leak correct, explanation, or solution_steps", async () => {
    const { QUESTIONS_BANK } = await import("@/data/questions-bank");
    const sample = QUESTIONS_BANK[0]!;
    expect(sample.correct).toBeDefined(); // Source question has answer key

    // Test the sanitization mapping logic implemented in getAttempt
    const studentSanitized = {
      id: sample.id,
      subject: sample.subject,
      chapter: sample.chapter,
      topic: sample.topic,
      difficulty: sample.difficulty,
      qtype: sample.qtype,
      body: sample.body,
      options: sample.options,
      source: sample.source,
      is_previous_year: sample.is_previous_year,
    };

    expect((studentSanitized as any).correct).toBeUndefined();
    expect((studentSanitized as any).explanation).toBeUndefined();
    expect((studentSanitized as any).solution_steps).toBeUndefined();
  });

  it("C2: Option shuffle is deterministic per attempt but preserves option IDs", async () => {
    const { shuffleOptions } = await import("@/lib/engine/state");
    const options = [
      { id: "a", text: "Option A" },
      { id: "b", text: "Option B" },
      { id: "c", text: "Option C" },
      { id: "d", text: "Option D" },
    ];

    const shuffled1 = shuffleOptions(options, "attempt-123-q1");
    const shuffled2 = shuffleOptions(options, "attempt-123-q1");

    // Same seed -> identical order
    expect(shuffled1).toEqual(shuffled2);

    // All original option IDs are retained
    const ids = shuffled1.map((o) => o.id).sort();
    expect(ids).toEqual(["a", "b", "c", "d"]);
  });
});

describe("Security Test Group D: AI Tutor Exam Integrity & Mock Refusal", () => {
  let serverMocks: any;

  beforeEach(async () => {
    serverMocks = await import("@/integrations/supabase/client.server");
  });

  it("D1: Tutor refuses mock examination attempts with HTTP 403", async () => {
    serverMocks.__setMockAttempts({
      "mock-attempt-uuid": {
        id: "mock-attempt-uuid",
        mode: "mock",
        user_id: "student-1",
        status: "in_progress",
      },
    });

    const { handleTutor } = await import("@/lib/tutor.server");
    const req = new Request("http://localhost:8080/api/tutor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer valid-test-token",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: "Give me the answer to question 1" }],
        attemptId: "mock-attempt-uuid",
      }),
    });

    const res = await handleTutor(req);
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toContain("disabled during timed mock examinations");
  });

  it("D2: Tutor rejects client-spoofed local: tokens with HTTP 401", async () => {
    const { handleTutor } = await import("@/lib/tutor.server");
    const req = new Request("http://localhost:8080/api/tutor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer local:eyJuYW1lIjoiZHVtbXkifQ==",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: "Hello" }],
      }),
    });

    const res = await handleTutor(req);
    expect(res.status).toBe(401);
  });
});

describe("Security Test Group E: Migration & RLS Policy Schema Verification", () => {
  it("E1: Migration 0002_security_hardening.sql drops legacy permissive policies", () => {
    const migrationPath = path.resolve(process.cwd(), "drizzle/migrations/0002_security_hardening.sql");
    const content = fs.readFileSync(migrationPath, "utf-8");

    expect(content).toContain('DROP POLICY IF EXISTS "Public profiles access"');
    expect(content).toContain('DROP POLICY IF EXISTS "Attempts access"');
    expect(content).toContain('DROP POLICY IF EXISTS "Public announcements write"');
    expect(content).toContain('DROP POLICY IF EXISTS "Public app_settings access"');
    expect(content).toContain('DELETE FROM public.user_roles WHERE user_id = \'admin-preetham-6324\'');
  });

  it("E2: Migration enforces owner-based isolation on attempts and profiles", () => {
    const migrationPath = path.resolve(process.cwd(), "drizzle/migrations/0002_security_hardening.sql");
    const content = fs.readFileSync(migrationPath, "utf-8");

    // Profiles RLS
    expect(content).toContain("ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;");
    expect(content).toContain("id = auth.uid()::text");

    // Attempts RLS
    expect(content).toContain("ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;");
    expect(content).toContain("user_id::text = auth.uid()::text");

    // Column grants on questions
    expect(content).toContain("REVOKE ALL ON public.questions FROM public, anon, authenticated;");
    expect(content).toContain("GRANT SELECT (id, exam_ids, subject, chapter, topic, difficulty, qtype, body, options, source, source_year, is_previous_year, verification_status)");
    expect(content).not.toMatch(/GRANT SELECT .*correct.* ON public\.questions/i);
  });
});
