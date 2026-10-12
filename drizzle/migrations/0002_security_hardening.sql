-- ========================================================================
-- Study at Bangalore - Phase 1 Security Hardening Migration
-- Closes RLS bypasses, restricts answer-key column access, prevents
-- privilege escalation, and enforces least privilege across tables and storage.
-- ========================================================================

-- 1. Helper function to check roles securely
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

-- 2. Purge any synthetic backdoor accounts from user_roles
DELETE FROM public.user_roles WHERE user_id = 'admin-preetham-6324';

-- 3. Drop legacy open/permissive policies if they exist
DROP POLICY IF EXISTS "Public profiles access" ON public.profiles;
DROP POLICY IF EXISTS "Public announcements write" ON public.announcements;
DROP POLICY IF EXISTS "Public app_settings access" ON public.app_settings;
DROP POLICY IF EXISTS "Public user_roles read" ON public.user_roles;
DROP POLICY IF EXISTS "Attempts access" ON public.attempts;
DROP POLICY IF EXISTS "Public avatars access" ON storage.objects;
DROP POLICY IF EXISTS "Questions read policy" ON public.questions;

-- 4. Harden PROFILES table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

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

-- 5. Harden ATTEMPTS table
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;

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

-- 6. Harden USER_ROLES table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users read own roles" ON public.user_roles;
CREATE POLICY "Users read own roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (user_id::text = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin'));

DROP POLICY IF EXISTS "Super admins manage roles" ON public.user_roles;
CREATE POLICY "Super admins manage roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid()::text, 'super_admin'))
  WITH CHECK (public.has_role(auth.uid()::text, 'super_admin'));

-- 7. Harden ANNOUNCEMENTS table
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Announcements select policy" ON public.announcements;
CREATE POLICY "Announcements select policy" ON public.announcements
  FOR SELECT TO public
  USING (true);

DROP POLICY IF EXISTS "Announcements admin write policy" ON public.announcements;
CREATE POLICY "Announcements admin write policy" ON public.announcements
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid()::text, 'admin'))
  WITH CHECK (public.has_role(auth.uid()::text, 'admin'));

-- 8. Harden APP_SETTINGS table
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "AppSettings select policy" ON public.app_settings;
CREATE POLICY "AppSettings select policy" ON public.app_settings
  FOR SELECT TO public
  USING (true);

DROP POLICY IF EXISTS "AppSettings admin write policy" ON public.app_settings;
CREATE POLICY "AppSettings admin write policy" ON public.app_settings
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid()::text, 'admin'))
  WITH CHECK (public.has_role(auth.uid()::text, 'admin'));

-- 9. Harden QUESTIONS table (Column-level grants: hide correct and explanation)
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'questions') THEN
    ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

    -- Revoke open column access
    REVOKE ALL ON public.questions FROM public, anon, authenticated;

    -- Grant SELECT ONLY on safe student-facing columns (excluding correct, explanation)
    GRANT SELECT (id, exam_ids, subject, chapter, topic, difficulty, qtype, body, options, source, source_year, is_previous_year, verification_status)
      ON public.questions TO authenticated, anon;

    -- Admin and service client retain full privileges
    GRANT ALL ON public.questions TO service_role;

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

-- 10. Harden STORAGE avatars bucket
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'storage' AND table_name = 'objects') THEN
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
