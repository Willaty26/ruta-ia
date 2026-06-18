import { useState } from "react";
import { Download, Gift, Mail, CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitLead } from "@/lib/leads.functions";

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(5, { message: "Ingresa un correo válido." })
  .max(254, { message: "Correo demasiado largo." })
  .email({ message: "Ingresa un correo válido." });

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(submitLead);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Correo inválido.");
      return;
    }
    setLoading(true);
    try {
      const res = await submit({ data: { email: parsed.data } });
      if (!res.ok) {
        setError(
          res.error === "rate_limited"
            ? "Demasiados intentos. Vuelve en una hora."
            : "No pudimos registrar tu correo. Intenta de nuevo.",
        );
        setLoading(false);
        return;
      }
      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="recursos-gratis"
      aria-labelledby="lead-magnet-title"
      className="mx-auto my-16 max-w-4xl px-4 sm:px-6"
    >
      <div className="overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6 shadow-[var(--shadow-glow)] sm:p-10">
        <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <Gift className="h-3.5 w-3.5" />
              Gratis · PDF
            </span>
            <h2
              id="lead-magnet-title"
              className="mt-3 text-2xl font-black tracking-tight sm:text-3xl"
            >
              Pack de 50 Prompts de ChatGPT para Ganar Dinero
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Prompts probados para freelance, contenido, ventas y servicios
              con IA. Pensados para Latinoamérica y latinos en USA.
            </p>

            {done ? (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">¡Listo!</p>
                  <p className="text-muted-foreground">
                    Te enviaremos el pack en breve. Mientras tanto, explora las
                    rutas de monetización abajo.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mt-5 flex flex-col gap-2 sm:flex-row"
                noValidate
              >
                <label htmlFor="lead-email" className="sr-only">
                  Correo electrónico
                </label>
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="lead-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background py-3 pl-9 pr-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-all hover:scale-[1.02] hover:brightness-110"
                >
                  <Download className="h-4 w-4" />
                  Quiero el PDF
                </button>
              </form>
            )}
            {error && (
              <p role="alert" className="mt-2 text-xs text-destructive">
                {error}
              </p>
            )}
            <p className="mt-2 text-[11px] text-muted-foreground">
              Sin spam. Cancela cuando quieras.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="hidden h-32 w-32 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent sm:flex"
          >
            <Gift className="h-16 w-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
