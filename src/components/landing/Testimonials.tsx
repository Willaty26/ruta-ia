import { Star, TrendingUp, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Lucía M.",
    role: "Estudiante de Marketing",
    avatar: "LM",
    quote:
      "Probé los prompts un fin de semana y armé un mini-ebook para vender en Gumroad. Me sirvió para entender por dónde empezar sin sentirme perdida.",
    result: "Primer ebook publicado",
    color: "from-primary to-primary-glow",
  },
  {
    name: "Carlos R.",
    role: "Redactor freelance",
    avatar: "CR",
    quote:
      "Las plantillas me ahorraron horas escribiendo propuestas. Conseguí mi primer cliente pequeño en Upwork después de un par de semanas mandando aplicaciones.",
    result: "1er cliente en ~2 semanas",
    color: "from-accent to-primary",
  },
  {
    name: "Andrea P.",
    role: "Creadora de contenido",
    avatar: "AP",
    quote:
      "Los hooks me ayudaron a mejorar la retención en TikTok. No me hice viral, pero mis vídeos pasaron de 200 a 1.500 views de media y se nota.",
    result: "Mejor retención en Reels",
    color: "from-primary-glow to-accent",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Lo que cuentan quienes <span className="text-primary">empezaron</span> con la ruta
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Resultados modestos pero reales. Nada de promesas de hacerte rico de la noche a la mañana.
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
