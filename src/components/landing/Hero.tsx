import { ArrowDown, Zap } from "lucide-react";

export function Hero() {
  const scrollToTester = () => {
    document.getElementById("probador")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          <Zap className="h-3.5 w-3.5 text-accent" />
          Ruta IA · Aprende en Español
        </span>

        <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Aprende{" "}
          <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            IA en Español
          </span>
          ,{" "}
          <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
            Paso a Paso y Gratis
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Descubre cómo usar herramientas de IA reales con ejemplos prácticos. Sin experiencia
          técnica, sin tarjetas de crédito y sin comprar nada — todo el contenido es gratuito y en español.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={scrollToTester}
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-all hover:scale-105 hover:brightness-110"
          >
            Empezar a Aprender Gratis
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <a
            href="#herramientas"
            className="rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
          >
            Ver herramientas
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 text-center">
          {[
            { k: "+50", v: "Prompts" },
            { k: "3", v: "Rutas prácticas" },
            { k: "12+", v: "Herramientas" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border bg-card/40 p-4 backdrop-blur">
              <div className="text-2xl font-extrabold text-foreground sm:text-3xl">{s.k}</div>
              <div className="text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
