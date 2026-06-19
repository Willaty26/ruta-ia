import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { createHash } from "crypto";
import { z } from "zod";

const inputSchema = z.object({
  email: z.string().trim().toLowerCase().min(5).max(254).email(),
});

const RATE_LIMIT_WINDOW_MIN = 60;
const RATE_LIMIT_MAX = 5;
const PDF_URL = "https://rutadeia.com/50-prompts-ia.pdf";

async function sendPdfEmail(to: string): Promise<boolean> {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!lovableKey || !resendKey) return false;
  try {
    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": resendKey,
      },
      body: JSON.stringify({
        from: "Ruta IA <onboarding@resend.dev>",
        to: [to],
        subject: "Tu pack de 50 Prompts de ChatGPT 🎁",
        html: `
          <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
            <h1 style="color:#7C3AED;margin:0 0 12px">¡Aquí está tu PDF!</h1>
            <p>Gracias por unirte a <b>Ruta IA</b>. Tu pack de 50 prompts probados para ganar dinero con ChatGPT te está esperando:</p>
            <p style="margin:24px 0">
              <a href="${PDF_URL}" style="background:#F59E0B;color:#111;padding:14px 22px;border-radius:10px;text-decoration:none;font-weight:bold">📥 Descargar el PDF</a>
            </p>
            <p style="font-size:13px;color:#555">Tip: empieza por la categoría de <b>Freelance &amp; Servicios</b> si quieres tu primer cliente esta semana.</p>
            <p style="font-size:12px;color:#888;margin-top:32px">Ruta IA · rutadeia.com</p>
          </div>`,
      }),
    });
    if (!res.ok) {
      console.error("[leads] resend send failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[leads] resend send error", err);
    return false;
  }
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const ip =
      getRequestIP({ xForwardedFor: true }) ??
      getRequestHeader("cf-connecting-ip") ??
      "unknown";
    const userAgent = (getRequestHeader("user-agent") ?? "").slice(0, 300);
    const ipHash = createHash("sha256").update(`${ip}:rutadeia-leads`).digest("hex");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MIN * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", since);

    if (countError) {
      console.error("[leads] rate-limit count error", countError);
      return { ok: false as const, error: "server_error" };
    }
    if ((count ?? 0) >= RATE_LIMIT_MAX) {
      return { ok: false as const, error: "rate_limited" };
    }

    const { error: insertError } = await supabaseAdmin.from("leads").insert({
      email: data.email,
      source: "lead_magnet_pdf",
      ip_hash: ipHash,
      user_agent: userAgent,
    });

    if (insertError && insertError.code !== "23505") {
      console.error("[leads] insert error", insertError);
      return { ok: false as const, error: "server_error" };
    }

    const emailed = await sendPdfEmail(data.email);

    return { ok: true as const, emailed, downloadUrl: "/50-prompts-ia.pdf" };
  });
