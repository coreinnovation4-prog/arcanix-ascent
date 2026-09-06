CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  department TEXT NOT NULL,
  year TEXT NOT NULL,
  team_name TEXT,
  team_members JSONB NOT NULL DEFAULT '[]'::jsonb,
  events TEXT[] NOT NULL DEFAULT '{}',
  event_day INTEGER,
  payment_holder TEXT,
  payment_upi_id TEXT,
  payment_screenshot_path TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.registrations TO anon;
GRANT INSERT, SELECT ON public.registrations TO authenticated;
GRANT ALL ON public.registrations TO service_role;

ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a registration" ON public.registrations FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can upload payment proof" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'payment-proofs');