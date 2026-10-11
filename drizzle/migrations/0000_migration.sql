CREATE TYPE public.difficulty_level AS ENUM ('easy','medium','hard','expert');
CREATE TYPE public.question_type AS ENUM ('single','multiple','numerical','assertion_reason');
CREATE TYPE public.verification_status AS ENUM ('draft','in_review','verified','rejected');

CREATE TABLE public.questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_ids text[] NOT NULL,
  subject text NOT NULL,
  class_level text NOT NULL DEFAULT 'Class 11-12',
  syllabus_year int NOT NULL DEFAULT 2026,
  chapter text NOT NULL,
  topic text NOT NULL DEFAULT '',
  difficulty public.difficulty_level NOT NULL,
  qtype public.question_type NOT NULL DEFAULT 'single',
  body text NOT NULL,
  media jsonb,
  options jsonb NOT NULL DEFAULT '[]'::jsonb,
  correct jsonb NOT NULL,
  explanation text NOT NULL DEFAULT '',
  solution_steps jsonb NOT NULL DEFAULT '[]'::jsonb,
  source text NOT NULL,
  source_year int,
  is_previous_year boolean NOT NULL DEFAULT false,
  verification_status public.verification_status NOT NULL DEFAULT 'draft',
  syllabus_mapping text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX questions_lookup ON public.questions USING gin (exam_ids);
CREATE INDEX questions_subject_diff ON public.questions (subject, difficulty);

-- Students may read question content but never the answer key columns.
GRANT SELECT (id, exam_ids, subject, class_level, syllabus_year, chapter, topic, difficulty, qtype, body, media, options, source, source_year, is_previous_year, verification_status, syllabus_mapping) ON public.questions TO authenticated;
GRANT ALL ON public.questions TO service_role;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Signed-in users read verified questions" ON public.questions FOR SELECT TO authenticated USING (verification_status = 'verified');

CREATE TABLE public.attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  mode text NOT NULL CHECK (mode IN ('practice','mock')),
  exam_id text NOT NULL,
  track text NOT NULL DEFAULT '',
  level text NOT NULL DEFAULT '',
  preset_id text NOT NULL DEFAULT '',
  question_ids uuid[] NOT NULL,
  started_at timestamptz NOT NULL DEFAULT now(),
  deadline timestamptz NOT NULL,
  submitted_at timestamptz,
  status text NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress','submitted')),
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  statuses jsonb NOT NULL DEFAULT '{}'::jsonb,
  events jsonb NOT NULL DEFAULT '[]'::jsonb,
  score numeric,
  max_score numeric,
  percent numeric,
  result jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX attempts_user ON public.attempts (user_id, exam_id, created_at DESC);
CREATE UNIQUE INDEX attempts_one_open ON public.attempts (user_id, mode, exam_id, track, level, preset_id) WHERE status = 'in_progress';

GRANT SELECT ON public.attempts TO authenticated;
GRANT ALL ON public.attempts TO service_role;
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own attempts" ON public.attempts FOR SELECT TO authenticated USING (auth.uid() = user_id);