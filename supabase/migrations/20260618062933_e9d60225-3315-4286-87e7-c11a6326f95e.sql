
DROP POLICY "anon can insert leads" ON public.leads;

CREATE POLICY "anon can insert valid leads"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(email) BETWEEN 5 AND 254
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND source = 'lead_magnet_pdf'
  );
