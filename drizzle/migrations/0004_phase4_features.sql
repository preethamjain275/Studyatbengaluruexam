-- ========================================================================
-- Study at Bangalore - Phase 4 Features Migration
-- Persistent Bookmarks and Shared App Settings
-- ========================================================================

-- 1. Create BOOKMARKS table
CREATE TABLE IF NOT EXISTS public.bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  question_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT bookmarks_user_question_unique UNIQUE(user_id, question_id)
);

CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id ON public.bookmarks(user_id);

ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, DELETE ON public.bookmarks TO authenticated;
GRANT ALL ON public.bookmarks TO service_role;

DROP POLICY IF EXISTS "Bookmarks select policy" ON public.bookmarks;
CREATE POLICY "Bookmarks select policy" ON public.bookmarks
  FOR SELECT TO authenticated
  USING (user_id = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin'));

DROP POLICY IF EXISTS "Bookmarks insert policy" ON public.bookmarks;
CREATE POLICY "Bookmarks insert policy" ON public.bookmarks
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid()::text);

DROP POLICY IF EXISTS "Bookmarks delete policy" ON public.bookmarks;
CREATE POLICY "Bookmarks delete policy" ON public.bookmarks
  FOR DELETE TO authenticated
  USING (user_id = auth.uid()::text OR public.has_role(auth.uid()::text, 'admin'));

-- 2. Create APP_SETTINGS table
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

-- Default mastery threshold configuration
INSERT INTO public.app_settings (key, value, updated_at)
VALUES ('mastery_threshold', '{"threshold": 80}'::jsonb, now())
ON CONFLICT (key) DO NOTHING;
