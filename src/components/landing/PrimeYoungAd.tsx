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
      aria-label="Oferta Amazon Prime Joven"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
            <Sparkles className="h-3 w-3" />
            Patrocinado · Oferta
          </span>
          <h3 className="mt-3 text-lg font-black tracking-tight text-foreground sm:text-xl">
            Amazon Prime <span className="text-primary">Joven</span> — 50% de descuento
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Si tienes entre 18 y 22 años, accede a Prime a mitad de precio: envíos rápidos, Prime
            Video, música y más. Renueva con descuento cada año mientras califiques.
          </p>
        </div>
        <a
          href={PRIME_YOUNG_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:scale-[1.02] hover:brightness-110"
        >
          Activar oferta
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </aside>
  );
}
