-- ========================================================================
-- Study at Bangalore - Complete Supabase Setup & Repair Script
-- Run this script in your Supabase Project -> SQL Editor -> Click 'Run'
-- ========================================================================

-- 1. Create / Update PROFILES table for student accounts
CREATE TABLE IF NOT EXISTS public.profiles (
  id text PRIMARY KEY,
  display_name text,
  standard text,
  stream text,
  email text,
  phone text,
  avatar_url text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS and create permissive policies for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Public profiles access') THEN
    CREATE POLICY "Public profiles access" ON public.profiles FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- 2. Create / Update USER_ROLES table
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  role text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_roles' AND policyname = 'Public user_roles read') THEN
    CREATE POLICY "Public user_roles read" ON public.user_roles FOR SELECT USING (true);
  END IF;
END $$;

-- Add Preetham Jain as super_admin
INSERT INTO public.user_roles (user_id, role)
VALUES ('admin-preetham-6324', 'super_admin')
ON CONFLICT DO NOTHING;

-- 3. Upgrade ATTEMPTS table with practice and mock test columns
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
  ADD COLUMN IF NOT EXISTS max_score numeric;

ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'attempts' AND policyname = 'Attempts access') THEN
    CREATE POLICY "Attempts access" ON public.attempts FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- 4. Enable public read for QUESTIONS so practice questions load instantly
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'questions' AND policyname = 'Questions read policy') THEN
    CREATE POLICY "Questions read policy" ON public.questions FOR SELECT USING (true);
  END IF;
END $$;

-- Done!
SELECT 'Supabase setup completed successfully!' AS status;
