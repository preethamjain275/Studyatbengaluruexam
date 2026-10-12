import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import {
  getGeminiApiKey,
  getGeminiModel,
  sanitizeGeminiError,
  getGeminiClient,
} from "@/lib/gemini.server";

describe("Gemini Server Service - Configuration & Security", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("retrieves the Gemini API key securely when configured", () => {
    process.env["GEMINI_API_KEY"] = "test-gemini-secret-key-12345";
    expect(getGeminiApiKey()).toBe("test-gemini-secret-key-12345");
  });

  it("returns null when no Gemini environment variables are set", () => {
    delete process.env["GEMINI_API_KEY"];
    delete process.env["GOOGLE_API_KEY"];
    delete process.env["GOOGLE_GENAI_API_KEY"];
    expect(getGeminiApiKey()).toBeNull();
  });

  it("returns default model or custom GEMINI_MODEL", () => {
    delete process.env["GEMINI_MODEL"];
    expect(getGeminiModel()).toBe("gemini-2.5-flash-lite");

    process.env["GEMINI_MODEL"] = "gemini-3.8-flash";
    expect(getGeminiModel()).toBe("gemini-3.8-flash");
  });

  it("throws clear error when client is initialized without API key", () => {
    delete process.env["GEMINI_API_KEY"];
    delete process.env["GOOGLE_API_KEY"];
    delete process.env["GOOGLE_GENAI_API_KEY"];
    expect(() => getGeminiClient()).toThrow(/Gemini AI is not configured/);
  });
});

describe("Gemini Server Service - Safe Error Sanitization", () => {
  it("redacts potential secret keys from error messages", () => {
    const rawError = new Error(
      "Request failed with key AQAb8RN6LEw1OQjdizhDdfVeBmZi4igvIDN9LuKJnuln3q1GfOw in url"
    );
    const sanitized = sanitizeGeminiError(rawError);
    expect(sanitized.message).not.toContain("AQAb8RN6LEw1OQjdizhDdfVeBmZi4igvIDN9LuKJnuln3q1GfOw");
    expect(sanitized.message).toContain("[REDACTED_API_KEY]");
  });

  it("formats 429 rate limit errors with user-friendly retry message", () => {
    const rateLimitErr = new Error("429 RESOURCE_EXHAUSTED: quota exceeded");
    const sanitized = sanitizeGeminiError(rateLimitErr);
    expect(sanitized.message).toContain("rate limit reached");
    expect(sanitized.message).toContain("wait a moment");
  });

  it("formats 503 service unavailable errors gracefully", () => {
    const unavailableErr = new Error("503 UNAVAILABLE: Model is overloaded");
    const sanitized = sanitizeGeminiError(unavailableErr);
    expect(sanitized.message).toContain("temporary demand");
  });

  it("formats 401 unauthenticated errors cleanly", () => {
    const authErr = new Error("401 UNAUTHENTICATED: Invalid API key");
    const sanitized = sanitizeGeminiError(authErr);
    expect(sanitized.message).toContain("authentication failed");
  });
});

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

describe("Buddy AI Tutor Server Route Contract", () => {
  it("rejects unauthenticated requests with 401", async () => {
    const { handleTutor } = await import("@/lib/tutor.server");
    const req = new Request("http://localhost:8080/api/tutor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: "help me" }] }),
    });

    const res = await handleTutor(req);
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toContain("Please sign in");
  });

  it("rejects spoofed local: tokens with 401", async () => {
    const { handleTutor } = await import("@/lib/tutor.server");
    const localToken = `local:${btoa(encodeURIComponent(JSON.stringify({ id: "student-1", email: "student@test.com" })))}`;
    const req = new Request("http://localhost:8080/api/tutor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localToken}`,
      },
      body: JSON.stringify({ messages: [] }),
    });

    const res = await handleTutor(req);
    expect(res.status).toBe(401);
  });

  it("rejects requests with empty messages with 400 when authenticated", async () => {
    const { handleTutor } = await import("@/lib/tutor.server");
    const req = new Request("http://localhost:8080/api/tutor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer valid-test-token",
      },
      body: JSON.stringify({ messages: [] }),
    });

    const res = await handleTutor(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("question or message");
  });
});
