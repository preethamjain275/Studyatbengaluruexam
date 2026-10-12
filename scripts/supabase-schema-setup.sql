-- ========================================================================
-- Study at Bangalore - Hardened Supabase Setup & Schema Script
-- Run this script in your Supabase Project -> SQL Editor -> Click 'Run'
-- Enforces Row Level Security (RLS) across all tables, isolates student data,
-- hides question answer keys, and requires verified roles for admin functions.
-- ========================================================================

-- 1. Helper function to check user roles in RLS
CREATE OR REPLACE FUNCTION public.has_role(_user_id text, _role text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id::text = _user_id
      AND (
        role::text = _role
        OR (_role = 'admin' AND role::text = 'super_admin')
      )
  );
$$;

-- Overload for uuid user_id
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id::text = _user_id::text
      AND (
        role::text = _role
        OR (_role = 'admin' AND role::text = 'super_admin')
      )
  );
$$;

-- 2. Create / Update PROFILES table for student accounts
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
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS target_exams text[] DEFAULT ARRAY[]::text[];
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_url text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS about_me text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS location text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS primary_exam text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS exam_details jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS study_goals jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS learning_preferences jsonb DEFAULT '{}'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS notification_preferences jsonb DEFAULT '{}'::jsonb;

-- Enable RLS and owner-isolated policies for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public profiles access" ON public.profiles;
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

-- 3. Storage bucket for user profile avatars
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'avatars',
  'avatars',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp'];

DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'storage' AND table_name = 'objects') THEN
    DROP POLICY IF EXISTS "Public avatars access" ON storage.objects;
    DROP POLICY IF EXISTS "Avatars read policy" ON storage.objects;
    CREATE POLICY "Avatars read policy" ON storage.objects
      FOR SELECT TO public
      USING (bucket_id = 'avatars');

    DROP POLICY IF EXISTS "Avatars insert policy" ON storage.objects;
    CREATE POLICY "Avatars insert policy" ON storage.objects
      FOR INSERT TO authenticated
      WITH CHECK (bucket_id = 'avatars');

    DROP POLICY IF EXISTS "Avatars update policy" ON storage.objects;
    CREATE POLICY "Avatars update policy" ON storage.objects
      FOR UPDATE TO authenticated
      USING (bucket_id = 'avatars' AND (owner::text = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin')))
      WITH CHECK (bucket_id = 'avatars' AND (owner::text = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin')));

    DROP POLICY IF EXISTS "Avatars delete policy" ON storage.objects;
    CREATE POLICY "Avatars delete policy" ON storage.objects
      FOR DELETE TO authenticated
      USING (bucket_id = 'avatars' AND (owner::text = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin')));
  END IF;
END $$;

-- 4. Create ANNOUNCEMENTS table for website notifications
CREATE TABLE IF NOT EXISTS public.announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  message text NOT NULL,
  link text,
  badge text DEFAULT 'Announcement',
  active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public announcements read" ON public.announcements;
DROP POLICY IF EXISTS "Public announcements write" ON public.announcements;
DROP POLICY IF EXISTS "Announcements select policy" ON public.announcements;
CREATE POLICY "Announcements select policy" ON public.announcements
  FOR SELECT TO public
  USING (true);

DROP POLICY IF EXISTS "Announcements admin write policy" ON public.announcements;
CREATE POLICY "Announcements admin write policy" ON public.announcements
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid()::text, 'admin'))
  WITH CHECK (public.has_role(auth.uid()::text, 'admin'));

-- 5. Create APP_SETTINGS table for configurable targets
CREATE TABLE IF NOT EXISTS public.app_settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL,
  updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public app_settings access" ON public.app_settings;
DROP POLICY IF EXISTS "AppSettings select policy" ON public.app_settings;
CREATE POLICY "AppSettings select policy" ON public.app_settings
  FOR SELECT TO public
  USING (true);

DROP POLICY IF EXISTS "AppSettings admin write policy" ON public.app_settings;
CREATE POLICY "AppSettings admin write policy" ON public.app_settings
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid()::text, 'admin'))
  WITH CHECK (public.has_role(auth.uid()::text, 'admin'));

-- 6. Create USER_ROLES table with strict authorization
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  role text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public user_roles read" ON public.user_roles;
DROP POLICY IF EXISTS "Users read own roles" ON public.user_roles;
CREATE POLICY "Users read own roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (user_id::text = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin'));

DROP POLICY IF EXISTS "Super admins manage roles" ON public.user_roles;
CREATE POLICY "Super admins manage roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid()::text, 'super_admin'))
  WITH CHECK (public.has_role(auth.uid()::text, 'super_admin'));

-- Purge any synthetic backdoor accounts from user_roles
DELETE FROM public.user_roles WHERE user_id = 'admin-preetham-6324';

-- 7. Upgrade ATTEMPTS table with student isolation policies
CREATE TABLE IF NOT EXISTS public.attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  mode text NOT NULL,
  exam_id text NOT NULL,
  track text,
  level text,
  preset_id text,
  question_ids uuid[] DEFAULT ARRAY[]::uuid[],
  started_at timestamp with time zone DEFAULT now(),
  submitted_at timestamp with time zone,
  deadline timestamp with time zone,
  status text DEFAULT 'in_progress',
  answers jsonb DEFAULT '{}'::jsonb,
  statuses jsonb DEFAULT '{}'::jsonb,
  result jsonb DEFAULT '{}'::jsonb,
  score numeric,
  max_score numeric,
  percent numeric,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.attempts 
  ADD COLUMN IF NOT EXISTS track text,
  ADD COLUMN IF NOT EXISTS level text,
  ADD COLUMN IF NOT EXISTS preset_id text,
  ADD COLUMN IF NOT EXISTS question_ids uuid[] DEFAULT ARRAY[]::uuid[],
  ADD COLUMN IF NOT EXISTS started_at timestamp with time zone DEFAULT now(),
  ADD COLUMN IF NOT EXISTS submitted_at timestamp with time zone,
  ADD COLUMN IF NOT EXISTS statuses jsonb DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS result jsonb DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS percent numeric,
  ADD COLUMN IF NOT EXISTS percentage numeric,
  ADD COLUMN IF NOT EXISTS max_score numeric,
  ADD COLUMN IF NOT EXISTS total_questions integer,
  ADD COLUMN IF NOT EXISTS correct_count integer,
  ADD COLUMN IF NOT EXISTS incorrect_count integer,
  ADD COLUMN IF NOT EXISTS unanswered_count integer;

UPDATE public.attempts SET percentage = percent WHERE percentage IS NULL AND percent IS NOT NULL;
UPDATE public.attempts SET percent = percentage WHERE percent IS NULL AND percentage IS NOT NULL;

ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Attempts access" ON public.attempts;
DROP POLICY IF EXISTS "Attempts select policy" ON public.attempts;
CREATE POLICY "Attempts select policy" ON public.attempts
  FOR SELECT TO authenticated
  USING (user_id::text = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin'));

DROP POLICY IF EXISTS "Attempts insert policy" ON public.attempts;
CREATE POLICY "Attempts insert policy" ON public.attempts
  FOR INSERT TO authenticated
  WITH CHECK (user_id::text = auth.uid()::text);

DROP POLICY IF EXISTS "Attempts update policy" ON public.attempts;
CREATE POLICY "Attempts update policy" ON public.attempts
  FOR UPDATE TO authenticated
  USING (user_id::text = auth.uid()::text)
  WITH CHECK (user_id::text = auth.uid()::text);

DROP POLICY IF EXISTS "Attempts delete policy" ON public.attempts;
CREATE POLICY "Attempts delete policy" ON public.attempts
  FOR DELETE TO authenticated
  USING (user_id::text = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin'));

-- 8. QUESTIONS table security (Column-level grants: hide correct and explanation)
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'questions') THEN
    ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

    -- Revoke all open access
    REVOKE ALL ON public.questions FROM public, anon, authenticated;

    -- Grant SELECT only on student-facing safe columns (excluding correct, explanation)
    GRANT SELECT (id, exam_ids, subject, chapter, topic, difficulty, qtype, body, options, source, source_year, is_previous_year, verification_status)
      ON public.questions TO authenticated, anon;

    -- Grant full privileges to service role
    GRANT ALL ON public.questions TO service_role;

    DROP POLICY IF EXISTS "Questions read policy" ON public.questions;
    DROP POLICY IF EXISTS "Questions verified select policy" ON public.questions;
    CREATE POLICY "Questions verified select policy" ON public.questions
      FOR SELECT TO public
      USING (verification_status = 'verified' OR public.has_role(auth.uid()::text, 'admin'));

    DROP POLICY IF EXISTS "Questions admin all policy" ON public.questions;
    CREATE POLICY "Questions admin all policy" ON public.questions
      FOR ALL TO authenticated
      USING (public.has_role(auth.uid()::text, 'admin'))
      WITH CHECK (public.has_role(auth.uid()::text, 'admin'));
  END IF;
END $$;

-- 9. AUDIT_LOGS table for anti-cheating & security monitoring
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  event text NOT NULL,
  payload jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now()
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

-- Done!
SELECT 'Supabase setup and security hardening completed successfully!' AS status;
