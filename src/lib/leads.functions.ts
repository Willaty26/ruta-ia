import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { createHash } from "crypto";
import { z } from "zod";

const inputSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(5)
    .max(254)
    .email(),
});

const RATE_LIMIT_WINDOW_MIN = 60;
const RATE_LIMIT_MAX = 5;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const ip =
      getRequestIP({ xForwardedFor: true }) ??
      getRequestHeader("cf-connecting-ip") ??
      "unknown";
    const userAgent = (getRequestHeader("user-agent") ?? "").slice(0, 300);
    const ipHash = createHash("sha256")
      .update(`${ip}:rutadeia-leads`)
      .digest("hex");

    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    // Rate limit by IP
    const since = new Date(
      Date.now() - RATE_LIMIT_WINDOW_MIN * 60 * 1000,
    ).toISOString();
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

    // Duplicate (unique index) → treat as success silently
    if (insertError && insertError.code !== "23505") {
      console.error("[leads] insert error", insertError);
      return { ok: false as const, error: "server_error" };
    }

    return { ok: true as const };
  });
