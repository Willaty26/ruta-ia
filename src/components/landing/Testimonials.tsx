import { Star, TrendingUp, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Lucía M.",
    role: "Estudiante de Marketing",
    avatar: "LM",
    quote:
      "En 2 semanas usando los prompts empecé a vender mini-ebooks. Me hizo 280 € extra el primer mes sin saber nada de IA.",
    result: "+280 € primer mes",
    color: "from-primary to-primary-glow",
  },
  {
    name: "Carlos R.",
    role: "Freelancer redactor",
    avatar: "CR",
    quote:
      "La ruta de Redactor Freelance me dio plantillas listas. Conseguí mi primer cliente en Upwork en 9 días.",
    result: "1er cliente en 9 días",
    color: "from-accent to-primary",
  },
  {
    name: "Andrea P.",
    role: "Creadora de contenido",
    avatar: "AP",
    quote:
      "Pasé de 400 a 12.000 seguidores en TikTok aplicando los hooks generados con los prompts. Brutal.",
    result: "+11.6K seguidores",
    color: "from-primary-glow to-accent",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Sección 04 · Resultados Reales
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Lo que están <span className="text-primary">consiguiendo</span> con la ruta
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Personas como tú que empezaron desde cero y hoy ya generan ingresos con IA.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow-primary)]"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />

              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-black text-background`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>

              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>

              <div className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">
                <TrendingUp className="h-3.5 w-3.5" />
                {t.result}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() =>
              document.getElementById("probador")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-all hover:scale-105 hover:brightness-110"
          >
            Empezar Mi Ruta Gratuita
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Sin tarjeta · Sin registro · 100% gratis
          </p>
        </div>
      </div>
    </section>
  );
}
