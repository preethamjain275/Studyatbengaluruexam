-- ========================================================================
-- Study at Bangalore - Phase 2 Schema Reconciliation Migration
-- Reconciles database contract across Drizzle, Supabase, and TypeScript:
-- 1. Attempts metric columns (total_questions, percentage, correct_count, etc.)
-- 2. Profiles table with canonical student attributes
-- 3. Announcements, App Settings, and Audit Logs tables with secure RLS
-- ========================================================================

-- 1. Reconcile ATTEMPTS table with canonical columns and metric attributes
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS track text DEFAULT '';
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS level text DEFAULT '';
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS preset_id text DEFAULT '';
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS question_ids uuid[] DEFAULT ARRAY[]::uuid[];
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS started_at timestamptz DEFAULT now();
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS submitted_at timestamptz;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS statuses jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS max_score numeric;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS percent numeric;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS result jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS total_questions integer;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS percentage numeric;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS correct_count integer;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS incorrect_count integer;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS unanswered_count integer;

-- Synchronize percentage and percent columns for consistent querying
UPDATE public.attempts 
SET percentage = percent 
WHERE percentage IS NULL AND percent IS NOT NULL;

UPDATE public.attempts 
SET percent = percentage 
WHERE percent IS NULL AND percentage IS NOT NULL;

-- 2. Create / Reconcile PROFILES table
CREATE TABLE IF NOT EXISTS public.profiles (
  id text PRIMARY KEY,
  display_name text,
  standard text,
  stream text,
  target_exams text[] DEFAULT ARRAY[]::text[],
  email text,
  phone text,
  avatar_url text,
  about_me text,
  location text,
  primary_exam text,
  exam_details jsonb DEFAULT '{}'::jsonb,
  study_goals jsonb DEFAULT '{}'::jsonb,
  learning_preferences jsonb DEFAULT '{}'::jsonb,
  notification_preferences jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Ensure all profiles columns exist
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS target_exams text[] DEFAULT ARRAY[]::text[];
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_url text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS about_me text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS location text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS primary_exam text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS exam_details jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS study_goals jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS learning_preferences jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS notification_preferences jsonb DEFAULT '{}'::jsonb;

-- Enable RLS and grants for PROFILES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

DROP POLICY IF EXISTS "Profiles select policy" ON public.profiles;
CREATE POLICY "Profiles select policy" ON public.profiles
  FOR SELECT TO authenticated
  USING (id = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin'));

DROP POLICY IF EXISTS "Profiles insert policy" ON public.profiles;
CREATE POLICY "Profiles insert policy" ON public.profiles
  FOR INSERT TO authenticated
  WITH CHECK (id = auth.uid()::text);

DROP POLICY IF EXISTS "Profiles update policy" ON public.profiles;
CREATE POLICY "Profiles update policy" ON public.profiles
  FOR UPDATE TO authenticated
  USING (id = auth.uid()::text)
  WITH CHECK (id = auth.uid()::text);

DROP POLICY IF EXISTS "Profiles delete policy" ON public.profiles;
CREATE POLICY "Profiles delete policy" ON public.profiles
  FOR DELETE TO authenticated
  USING (id = auth.uid()::text OR public.has_role(auth.uid()::text, 'super_admin'));

-- 3. Create / Reconcile ANNOUNCEMENTS table
CREATE TABLE IF NOT EXISTS public.announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  message text NOT NULL,
  link text,
  badge text DEFAULT 'Announcement',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.announcements TO public;
GRANT ALL ON public.announcements TO service_role;
GRANT ALL ON public.announcements TO authenticated;

DROP POLICY IF EXISTS "Announcements select policy" ON public.announcements;
CREATE POLICY "Announcements select policy" ON public.announcements
  FOR SELECT TO public
  USING (true);

DROP POLICY IF EXISTS "Announcements admin write policy" ON public.announcements;
CREATE POLICY "Announcements admin write policy" ON public.announcements
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid()::text, 'admin'))
  WITH CHECK (public.has_role(auth.uid()::text, 'admin'));

-- 4. Create / Reconcile APP_SETTINGS table
CREATE TABLE IF NOT EXISTS public.app_settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.app_settings TO public;
GRANT ALL ON public.app_settings TO service_role;
GRANT ALL ON public.app_settings TO authenticated;

DROP POLICY IF EXISTS "AppSettings select policy" ON public.app_settings;
CREATE POLICY "AppSettings select policy" ON public.app_settings
  FOR SELECT TO public
  USING (true);

DROP POLICY IF EXISTS "AppSettings admin write policy" ON public.app_settings;
CREATE POLICY "AppSettings admin write policy" ON public.app_settings
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid()::text, 'admin'))
  WITH CHECK (public.has_role(auth.uid()::text, 'admin'));

-- 5. Create / Reconcile AUDIT_LOGS table
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  event text NOT NULL,
  payload jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
GRANT ALL ON public.audit_logs TO service_role;
GRANT SELECT, INSERT ON public.audit_logs TO authenticated;

DROP POLICY IF EXISTS "AuditLogs admin select policy" ON public.audit_logs;
CREATE POLICY "AuditLogs admin select policy" ON public.audit_logs
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid()::text, 'admin'));

DROP POLICY IF EXISTS "AuditLogs insert policy" ON public.audit_logs;
CREATE POLICY "AuditLogs insert policy" ON public.audit_logs
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin'));
