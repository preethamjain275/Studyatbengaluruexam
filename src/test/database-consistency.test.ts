import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { z } from "zod";
import * as drizzleSchema from "../../drizzle/schema";
import type { Database } from "@/integrations/supabase/types";

describe("Phase 2: Authentication & Database Consistency Regression Suite", () => {
  const rootDir = process.cwd();

  // =========================================================================
  // Test Group 1: Authoritative Identity Contract (Supabase Auth UUID)
  // =========================================================================
  describe("Group 1: Authoritative Identity Contract", () => {
    const uuidSchema = z.string().uuid();

    it("1.1: Validates that canonical user IDs must be valid UUIDs", () => {
      const validCanonicalUuid = "c6b5d921-23ef-4b40-a15d-0faefc378e99";
      expect(uuidSchema.safeParse(validCanonicalUuid).success).toBe(true);

      const anotherValidUuid = "00000000-0000-0000-0000-000000000000";
      expect(uuidSchema.safeParse(anotherValidUuid).success).toBe(true);
    });

    it("1.2: Rejects legacy non-UUID synthetic student identities", () => {
      const invalidSyntheticIdentities = [
        "student-user",
        "student-1",
        "student-alice",
        "admin-preetham-6324",
        "local:eyJpZCI6...",
        "undefined",
        "",
      ];

      for (const id of invalidSyntheticIdentities) {
        expect(uuidSchema.safeParse(id).success).toBe(false);
      }
    });

    it("1.3: Verifies tutor.server.ts does not fall back to mock student-user identity", () => {
      const tutorFile = fs.readFileSync(path.join(rootDir, "src/lib/tutor.server.ts"), "utf-8");
      expect(tutorFile).not.toContain('let userId = "student-user"');
      expect(tutorFile).not.toContain('let userEmail = "student@studyatbangalore.in"');
    });
  });

  // =========================================================================
  // Test Group 2: Drizzle ORM Schema Authority
  // =========================================================================
  describe("Group 2: Drizzle ORM Schema Authority", () => {
    it("2.1: Exports all canonical tables and enums in drizzle/schema.ts", () => {
      expect(drizzleSchema.questions).toBeDefined();
      expect(drizzleSchema.attempts).toBeDefined();
      expect(drizzleSchema.userRoles).toBeDefined();
      expect(drizzleSchema.profiles).toBeDefined();
      expect(drizzleSchema.announcements).toBeDefined();
      expect(drizzleSchema.appSettings).toBeDefined();
      expect(drizzleSchema.auditLogs).toBeDefined();

      expect(drizzleSchema.difficultyLevelEnum).toBeDefined();
      expect(drizzleSchema.questionTypeEnum).toBeDefined();
      expect(drizzleSchema.verificationStatusEnum).toBeDefined();
      expect(drizzleSchema.appRoleEnum).toBeDefined();
    });

    it("2.2: Verifies attempts table defines canonical metrics columns in Drizzle", () => {
      const cols = drizzleSchema.attempts;
      expect(cols.totalQuestions).toBeDefined();
      expect(cols.percentage).toBeDefined();
      expect(cols.percent).toBeDefined();
      expect(cols.correctCount).toBeDefined();
      expect(cols.incorrectCount).toBeDefined();
      expect(cols.unansweredCount).toBeDefined();
      expect(cols.score).toBeDefined();
      expect(cols.maxScore).toBeDefined();
      expect(cols.userId).toBeDefined();
      expect(cols.status).toBeDefined();
    });

    it("2.3: Verifies profiles table defines all student profile attributes in Drizzle", () => {
      const cols = drizzleSchema.profiles;
      expect(cols.id).toBeDefined();
      expect(cols.displayName).toBeDefined();
      expect(cols.email).toBeDefined();
      expect(cols.phone).toBeDefined();
      expect(cols.avatarUrl).toBeDefined();
      expect(cols.targetExams).toBeDefined();
      expect(cols.primaryExam).toBeDefined();
      expect(cols.examDetails).toBeDefined();
      expect(cols.studyGoals).toBeDefined();
      expect(cols.learningPreferences).toBeDefined();
      expect(cols.notificationPreferences).toBeDefined();
    });

    it("2.4: Verifies auditLogs table defines anti-cheat & security columns in Drizzle", () => {
      const cols = drizzleSchema.auditLogs;
      expect(cols.id).toBeDefined();
      expect(cols.userId).toBeDefined();
      expect(cols.event).toBeDefined();
      expect(cols.payload).toBeDefined();
      expect(cols.createdAt).toBeDefined();
    });
  });

  // =========================================================================
  // Test Group 3: Database Schema Migrations & Scripts Consistency
  // =========================================================================
  describe("Group 3: Migrations & Setup Scripts Consistency", () => {
    it("3.1: Verifies 0003_schema_reconciliation.sql alters attempts to add all metric columns", () => {
      const sqlPath = path.join(rootDir, "drizzle/migrations/0003_schema_reconciliation.sql");
      expect(fs.existsSync(sqlPath)).toBe(true);
      const sql = fs.readFileSync(sqlPath, "utf-8");

      expect(sql).toContain("ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS total_questions integer");
      expect(sql).toContain("ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS percentage numeric");
      expect(sql).toContain("ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS correct_count integer");
      expect(sql).toContain("ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS incorrect_count integer");
      expect(sql).toContain("ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS unanswered_count integer");
      expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.profiles");
      expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.announcements");
      expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.app_settings");
      expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.audit_logs");
    });

    it("3.2: Verifies scripts/supabase-schema-setup.sql has synchronized columns and audit_logs", () => {
      const sqlPath = path.join(rootDir, "scripts/supabase-schema-setup.sql");
      expect(fs.existsSync(sqlPath)).toBe(true);
      const sql = fs.readFileSync(sqlPath, "utf-8");

      expect(sql).toContain("ADD COLUMN IF NOT EXISTS total_questions integer");
      expect(sql).toContain("ADD COLUMN IF NOT EXISTS percentage numeric");
      expect(sql).toContain("ADD COLUMN IF NOT EXISTS correct_count integer");
      expect(sql).toContain("ADD COLUMN IF NOT EXISTS incorrect_count integer");
      expect(sql).toContain("ADD COLUMN IF NOT EXISTS unanswered_count integer");
      expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.audit_logs");
    });

    it("3.3: Verifies _journal.json registers 0003_schema_reconciliation", () => {
      const journalPath = path.join(rootDir, "drizzle/migrations/meta/_journal.json");
      expect(fs.existsSync(journalPath)).toBe(true);
      const journal = JSON.parse(fs.readFileSync(journalPath, "utf-8"));

      const has0003 = journal.entries.some((e: any) => e.tag === "0003_schema_reconciliation");
      expect(has0003).toBe(true);
    });
  });

  // =========================================================================
  // Test Group 4: TypeScript Supabase Types Completeness
  // =========================================================================
  describe("Group 4: TypeScript Supabase Database Types", () => {
    it("4.1: Database type defines all 7 reconciled tables", () => {
      type PublicTables = keyof Database["public"]["Tables"];
      const tables: PublicTables[] = [
        "attempts",
        "questions",
        "user_roles",
        "profiles",
        "announcements",
        "app_settings",
        "audit_logs",
      ];
      expect(tables).toHaveLength(7);
    });

    it("4.2: Strongly types attempts row with metrics and both percentage and percent", () => {
      type AttemptRow = Database["public"]["Tables"]["attempts"]["Row"];
      const testRow: AttemptRow = {
        id: "11111111-2222-3333-4444-555555555555",
        user_id: "c6b5d921-23ef-4b40-a15d-0faefc378e99",
        mode: "practice",
        exam_id: "kcet",
        track: "Physics",
        level: "easy",
        preset_id: "",
        question_ids: ["q1", "q2"],
        deadline: new Date().toISOString(),
        started_at: new Date().toISOString(),
        submitted_at: new Date().toISOString(),
        status: "submitted",
        score: 2,
        max_score: 2,
        percent: 100,
        percentage: 100,
        total_questions: 2,
        correct_count: 2,
        incorrect_count: 0,
        unanswered_count: 0,
        answers: {},
        statuses: {},
        events: [],
        result: {},
        created_at: new Date().toISOString(),
      };

      expect(testRow.percentage).toBe(100);
      expect(testRow.percent).toBe(100);
      expect(testRow.total_questions).toBe(2);
      expect(testRow.correct_count).toBe(2);
    });

    it("4.3: Strongly types profiles row with all student fields", () => {
      type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];
      const testProfile: ProfileRow = {
        id: "c6b5d921-23ef-4b40-a15d-0faefc378e99",
        display_name: "Preetham Jain",
        email: "preetham@studyatbangalore.in",
        phone: "+91 9876543210",
        avatar_url: "https://example.com/avatar.jpg",
        about_me: "KCET Aspirant",
        location: "Bengaluru",
        primary_exam: "KCET",
        standard: "Class 12",
        stream: "PCMB",
        target_exams: ["KCET", "NEET"],
        exam_details: { target_year: "2026", stage: "Full Mock Phase" },
        study_goals: { weekly_hours: "25", daily_hours: "4" },
        learning_preferences: { theme: "Dark", difficulty: "Medium" },
        notification_preferences: { study_reminders: true },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      expect(testProfile.display_name).toBe("Preetham Jain");
      expect(testProfile.primary_exam).toBe("KCET");
      expect(testProfile.target_exams).toEqual(["KCET", "NEET"]);
    });
  });

  // =========================================================================
  // Test Group 5: Zero Workaround Queries & Single Canonical Payloads
  // =========================================================================
  describe("Group 5: Zero Workaround Queries & Single Payloads", () => {
    it("5.1: Verifies zero '(supabase as any)' occurrences exist in src/", () => {
      const srcFiles = ["src/routes/profile.tsx", "src/routes/scholarship-exam.tsx", "src/routes/auth.tsx", "src/components/site/AnnouncementPopup.tsx", "src/routes/_authenticated/admin.tsx"];
      for (const rel of srcFiles) {
        const fileContent = fs.readFileSync(path.join(rootDir, rel), "utf-8");
        expect(fileContent).not.toContain("(supabase as any)");
      }
    });

    it("5.2: Verifies engine.server.ts writes single canonical update payload without fallback catch", () => {
      const serverFile = fs.readFileSync(path.join(rootDir, "src/lib/engine.server.ts"), "utf-8");
      expect(serverFile).not.toContain("baseUpdatePayload");
      expect(serverFile).not.toContain("fullUpdatePayload");
      expect(serverFile).toContain("updatePayload");
      expect(serverFile).toContain("percentage: result.percent");
      expect(serverFile).toContain("percent: result.percent");
      expect(serverFile).toContain("total_questions: qs.length");
      expect(serverFile).toContain("correct_count: result.correct");
      expect(serverFile).toContain("incorrect_count: result.incorrect");
      expect(serverFile).toContain("unanswered_count: result.unanswered");
    });

    it("5.3: Verifies engine.functions.ts creates attempts directly without dual fallback", () => {
      const funcsFile = fs.readFileSync(path.join(rootDir, "src/lib/engine.functions.ts"), "utf-8");
      expect(funcsFile).not.toContain("basicPayload");
      expect(funcsFile).not.toContain("res1");
      expect(funcsFile).not.toContain("res2");
    });
  });
});
