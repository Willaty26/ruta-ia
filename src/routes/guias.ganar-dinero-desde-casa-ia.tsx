import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/guias/ganar-dinero-desde-casa-ia")({
  head: () => ({
    meta: [
      {
        title: "Ganar Dinero con IA Desde Casa 2026 | Ruta IA",
      },
      {
        name: "description",
        content:
          "Guía completa para ganar dinero desde casa usando IA. Descubre 5 métodos comprobados con ChatGPT, Midjourney y herramientas de IA. Sin experiencia técnica.",
      },
      { property: "og:title", content: "Ganar Dinero Desde Casa con IA — Guía 2026" },
      {
        property: "og:description",
        content:
          "5 formas reales de generar ingresos desde casa con Inteligencia Artificial. Pasos accionables hoy mismo.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://rutadeia.com/guias/ganar-dinero-desde-casa-ia",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://rutadeia.com/guias/ganar-dinero-desde-casa-ia",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Ganar Dinero Desde Casa con IA en 2026 — Guía Paso a Paso",
          description:
            "Guía práctica con 5 métodos reales para generar ingresos desde casa usando Inteligencia Artificial.",
          inLanguage: "es",
          author: { "@type": "Organization", name: "Ruta IA" },
        }),
      },
    ],
  }),
  component: GuideGanarDinero,
});

const METHODS = [
  {
    icon: Sparkles,
    title: "1. Crea y vende mini-ebooks con ChatGPT",
    income: "150–800 € / mes",
    desc: "Usa ChatGPT para redactar guías breves (20–40 páginas) sobre temas que dominas. Publícalas en Gumroad, Amazon KDP o Hotmart. Tu único coste es el tiempo.",
    steps: [
      "Elige un nicho concreto (ej: rutinas de estudio, recetas keto).",
      "Pide a ChatGPT un índice y desarrolla cada capítulo capítulo por capítulo.",
      "Diseña la portada con Canva o Midjourney y publica.",
    ],
  },
  {
    icon: TrendingUp,
    title: "2. Servicios freelance de redacción asistida por IA",
    income: "20–60 € / hora",
    desc: "Ofrece copywriting, artículos SEO o emails en Fiverr y Upwork. ChatGPT acelera 5x tu trabajo y te permite competir con tarifas atractivas.",
    steps: [
      "Crea un perfil claro indicando tu nicho.",
      "Usa los prompts de la Ruta IA para entregar borradores en minutos.",
      "Pide reseñas tras cada entrega para escalar precios.",
    ],
  },
  {
    icon: Wallet,
    title: "3. Diseño gráfico con Midjourney",
    income: "10–100 € por encargo",
    desc: "Genera logos, ilustraciones, miniaturas de YouTube y posts para redes con Midjourney o DALL·E. Vende en Etsy, Fiverr o directamente a creadores.",
    steps: [
      "Define un estilo visual reconocible (minimalista, retro, 3D…).",
      "Construye un portafolio de 10 piezas en Instagram o Behance.",
      "Empaqueta servicios (logo + 3 variantes por X €).",
    ],
  },
  {
    icon: Sparkles,
    title: "4. Crea cuentas de contenido automatizado",
    income: "0–2.000 € / mes",
    desc: "Reels y TikToks con voz IA, guion generado por ChatGPT y vídeos de stock. Monetiza con creator funds, afiliados o productos digitales.",
    steps: [
      "Elige un nicho viral (curiosidades, finanzas, motivación).",
      "Publica diariamente usando los hooks generados con prompts.",
      "Añade enlaces de afiliados en bio cuando superes 1.000 seguidores.",
    ],
  },
  {
    icon: TrendingUp,
    title: "5. Micro-agencia de IA para negocios locales",
    income: "500–3.000 € / cliente",
    desc: "Ofrece servicios concretos a pymes: chatbots, emails automatizados, publicaciones en redes. La IA hace el 80% del trabajo.",
    steps: [
      "Identifica 20 negocios locales sin presencia digital fuerte.",
      "Envía propuestas personalizadas con un plan claro.",
      "Cierra 1–2 clientes al mes en planes recurrentes.",
    ],
  },
];

function GuideGanarDinero() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Guía Práctica · 2026
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Cómo Ganar Dinero Desde Casa{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                con IA
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              5 métodos reales y accionables para generar ingresos desde casa
              usando Inteligencia Artificial. Sin experiencia técnica, sin
              inversión inicial.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              ¿Por qué la IA cambia las reglas del juego?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              Antes, ganar dinero desde casa exigía años de experiencia o
              equipos caros. Hoy, herramientas como{" "}
              <strong>ChatGPT, Midjourney, Claude y Runway</strong> permiten a
              cualquier principiante producir contenido, código, diseño y
              estrategia en minutos. La barrera de entrada bajó a cero.
            </p>
          </section>

          <div className="space-y-6">
            {METHODS.map((m) => (
              <section
                key={m.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold text-foreground sm:text-xl">
                      {m.title}
                    </h2>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                    {m.income}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {m.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {m.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-foreground/85">{s}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-6 text-center sm:p-10">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              ¿Listo para empezar tu ruta?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Cada uno de estos métodos se conecta con una de las{" "}
              <strong>Rutas de Monetización</strong> de Ruta IA. Elige la tuya
              y recibe prompts listos para copiar.
            </p>
            <Link
              to="/"
              hash="rutas"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-all hover:scale-105 hover:brightness-110"
            >
              Ver las Rutas de Monetización
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
