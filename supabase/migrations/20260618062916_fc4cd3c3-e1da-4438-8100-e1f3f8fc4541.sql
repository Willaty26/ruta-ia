
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'lead_magnet_pdf',
  ip_hash TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX leads_email_source_idx ON public.leads (lower(email), source);
CREATE INDEX leads_ip_created_idx ON public.leads (ip_hash, created_at DESC);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone can submit their email; nobody can read from the client.
CREATE POLICY "anon can insert leads"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
