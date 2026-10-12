import { pgTable, text, uuid, integer, numeric, jsonb, boolean, timestamp, pgEnum } from "drizzle-orm/pg-core";

// Enums matching Postgres database types
export const difficultyLevelEnum = pgEnum("difficulty_level", ["easy", "medium", "hard", "expert"]);
export const questionTypeEnum = pgEnum("question_type", ["single", "multiple", "numerical", "assertion_reason"]);
export const verificationStatusEnum = pgEnum("verification_status", ["draft", "in_review", "verified", "rejected"]);
export const appRoleEnum = pgEnum("app_role", ["admin", "user"]);

// 1. Questions Bank
export const questions = pgTable("questions", {
  id: uuid("id").defaultRandom().primaryKey(),
  examIds: text("exam_ids").array().notNull(),
  subject: text("subject").notNull(),
  classLevel: text("class_level").notNull().default("Class 11-12"),
  syllabusYear: integer("syllabus_year").notNull().default(2026),
  chapter: text("chapter").notNull(),
  topic: text("topic").notNull().default(""),
  difficulty: difficultyLevelEnum("difficulty").notNull(),
  qtype: questionTypeEnum("qtype").notNull().default("single"),
  body: text("body").notNull(),
  media: jsonb("media"),
  options: jsonb("options").notNull().default([]),
  correct: jsonb("correct").notNull(),
  explanation: text("explanation").notNull().default(""),
  solutionSteps: jsonb("solution_steps").notNull().default([]),
  source: text("source").notNull(),
  sourceYear: integer("source_year"),
  isPreviousYear: boolean("is_previous_year").notNull().default(false),
  verificationStatus: verificationStatusEnum("verification_status").notNull().default("draft"),
  syllabusMapping: text("syllabus_mapping").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// 2. Exam & Practice Attempts (Reconciled with canonical metric columns)
export const attempts = pgTable("attempts", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  mode: text("mode").notNull(),
  examId: text("exam_id").notNull(),
  track: text("track").notNull().default(""),
  level: text("level").notNull().default(""),
  presetId: text("preset_id").notNull().default(""),
  questionIds: text("question_ids").array(),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
  deadline: timestamp("deadline", { withTimezone: true }),
  submittedAt: timestamp("submitted_at", { withTimezone: true }),
  status: text("status").notNull().default("in_progress"),
  answers: jsonb("answers").notNull().default({}),
  statuses: jsonb("statuses").notNull().default({}),
  events: jsonb("events").notNull().default([]),
  score: numeric("score"),
  maxScore: numeric("max_score"),
  percent: numeric("percent"),
  percentage: numeric("percentage"),
  correctCount: integer("correct_count"),
  incorrectCount: integer("incorrect_count"),
  unansweredCount: integer("unanswered_count"),
  totalQuestions: integer("total_questions"),
  result: jsonb("result"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// 3. User Roles (RBAC)
export const userRoles = pgTable("user_roles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  role: text("role").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// 4. Student Profiles
export const profiles = pgTable("profiles", {
  id: text("id").primaryKey(),
  displayName: text("display_name"),
  standard: text("standard"),
  stream: text("stream"),
  targetExams: text("target_exams").array(),
  email: text("email"),
  phone: text("phone"),
  avatarUrl: text("avatar_url"),
  aboutMe: text("about_me"),
  location: text("location"),
  primaryExam: text("primary_exam"),
  examDetails: jsonb("exam_details").default({}),
  studyGoals: jsonb("study_goals").default({}),
  learningPreferences: jsonb("learning_preferences").default({}),
  notificationPreferences: jsonb("notification_preferences").default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 5. System Announcements
export const announcements = pgTable("announcements", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  message: text("message").notNull(),
  link: text("link"),
  badge: text("badge").default("Announcement"),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// 6. App Configuration & Settings
export const appSettings = pgTable("app_settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 7. Security & Anti-Cheat Audit Logs
export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  event: text("event").notNull(),
  payload: jsonb("payload").default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
