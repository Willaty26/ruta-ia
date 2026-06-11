import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const PRIME_YOUNG_URL = "https://amzn.to/3QuXlBL";

export function PrimeYoungAd({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card to-accent/10 p-5 shadow-[var(--shadow-glow-primary)] sm:p-6",
        className
      )}
      role="complementary"
      aria-label="Oferta Amazon Prime para jóvenes"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
            <Sparkles className="h-3 w-3" />
            Patrocinado · Oferta limitada
          </span>
          <h3 className="mt-3 text-lg font-black tracking-tight text-foreground sm:text-xl">
            Amazon Prime para <span className="text-primary">Jóvenes Adultos</span> — 6 meses gratis
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Si tienes entre <strong className="text-foreground">18 y 24 años</strong> o eres estudiante:
            6 meses de prueba a <strong className="text-foreground">$0</strong>, beneficios Prime
            completos y <strong className="text-foreground">5% de cashback</strong> en productos
            elegibles (belleza, ropa, electrónica y más).
          </p>
          <p className="mt-2 text-xs text-muted-foreground/80">
            Después del trial, se renueva automáticamente a $7.49/mes (≈ mitad de precio que Prime
            estándar). Cancela cuando quieras. Aplican términos.
          </p>
        </div>
        <a
          href={PRIME_YOUNG_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:scale-[1.02] hover:brightness-110"
        >
          Probar gratis
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </aside>
  );
}
