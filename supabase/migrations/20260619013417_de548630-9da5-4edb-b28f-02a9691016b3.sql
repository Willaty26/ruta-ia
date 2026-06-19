REVOKE SELECT ON public.leads FROM anon, authenticated;
CREATE POLICY "Deny all reads to anon and authenticated" ON public.leads FOR SELECT TO anon, authenticated USING (false);