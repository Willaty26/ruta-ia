import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/guias/herramientas-ia-gratis-principiantes")({
  head: () => ({
    meta: [
      {
        title: "15 Herramientas IA Gratis para Principiantes 2026 | Ruta IA",
      },
      {
        name: "description",
        content:
          "Lista actualizada de las 15 mejores herramientas de Inteligencia Artificial gratuitas para principiantes en 2026. Texto, imagen, vídeo, voz y productividad.",
      },
      {
        property: "og:title",
        content: "15 Herramientas de IA Gratis para Principiantes (2026)",
      },
      {
        property: "og:description",
        content:
          "Texto, imagen, vídeo, voz y productividad. Todas con plan gratuito y enlace directo.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content:
          "https://rutadeia.com/guias/herramientas-ia-gratis-principiantes",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://rutadeia.com/guias/herramientas-ia-gratis-principiantes",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "15 Herramientas de IA Gratis para Principiantes en 2026",
          description:
            "Selección actualizada de herramientas de IA con plan gratuito útil para empezar sin invertir.",
          inLanguage: "es",
          author: { "@type": "Organization", name: "Ruta IA" },
        }),
      },
    ],
  }),
  component: HerramientasGuide,
});

type Tool = {
  name: string;
  url: string;
  category: string;
  desc: string;
  free: string;
};

const TOOLS: Tool[] = [
  {
    name: "ChatGPT",
    url: "https://chat.openai.com/",
    category: "Texto",
    desc: "El asistente conversacional más usado. Ideal para redacción, ideas, resúmenes y código básico.",
    free: "GPT-4o mini ilimitado + uso diario de GPT-4o.",
  },
  {
    name: "Claude",
    url: "https://claude.ai/",
    category: "Texto",
    desc: "Excelente para textos largos, análisis de documentos PDF y razonamiento estructurado.",
    free: "Plan gratis con Claude Sonnet limitado por día.",
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com/",
    category: "Texto",
    desc: "El modelo de Google. Muy bueno integrando con Gmail, Docs y búsquedas en tiempo real.",
    free: "Gemini 2.5 Flash gratis para todos.",
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    category: "Búsqueda",
    desc: "Buscador con IA que cita fuentes. Perfecto para investigación rápida y datos verificables.",
    free: "Búsquedas ilimitadas, pro searches limitados.",
  },
  {
    name: "Microsoft Copilot",
    url: "https://copilot.microsoft.com/",
    category: "Texto + Imagen",
    desc: "Asistente de Microsoft con acceso a GPT-4 y generación de imágenes DALL·E gratis.",
    free: "GPT-4 + 15 imágenes/día con DALL·E 3.",
  },
  {
    name: "Leonardo.ai",
    url: "https://leonardo.ai/",
    category: "Imagen",
    desc: "Generador de imágenes con estilos artísticos potentes y editor integrado.",
    free: "150 tokens diarios renovables.",
  },
  {
    name: "Canva AI",
    url: "https://www.canva.com/ai/",
    category: "Diseño",
    desc: "Diseño visual con IA: posts, presentaciones, vídeos cortos y eliminación de fondos.",
    free: "Magic Write y Magic Design con créditos mensuales.",
  },
  {
    name: "CapCut",
    url: "https://www.capcut.com/",
    category: "Vídeo",
    desc: "Editor de vídeo con subtítulos automáticos, voces IA y plantillas virales para Reels y TikTok.",
    free: "Gratis con marca de agua opcional.",
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io/",
    category: "Voz",
    desc: "Voces sintéticas hiperrealistas en español. Ideal para vídeos automatizados y podcasts.",
    free: "10.000 caracteres/mes (~10 min de audio).",
  },
  {
    name: "Suno",
    url: "https://suno.com/",
    category: "Música",
    desc: "Genera canciones completas con letra a partir de un prompt. Útil para intros, jingles y reels.",
    free: "10 canciones/día en plan free.",
  },
  {
    name: "Runway",
    url: "https://runwayml.com/",
    category: "Vídeo IA",
    desc: "Generación de vídeo a partir de texto o imagen. Perfecto para clips creativos cortos.",
    free: "Créditos iniciales para probar Gen-3.",
  },
  {
    name: "Notion AI",
    url: "https://www.notion.so/product/ai",
    category: "Productividad",
    desc: "Resúmenes, traducciones y generación de contenido dentro de tus notas y bases de datos.",
    free: "Respuestas gratuitas limitadas al mes.",
  },
  {
    name: "Gamma",
    url: "https://gamma.app/",
    category: "Presentaciones",
    desc: "Crea presentaciones, webs y documentos con IA en segundos.",
    free: "400 créditos iniciales + plan free generoso.",
  },
  {
    name: "Lovable",
    url: "https://lovable.dev/",
    category: "No-code / Apps",
    desc: "Construye apps web completas describiéndolas en lenguaje natural.",
    free: "Mensajes diarios gratis para empezar.",
  },
  {
    name: "Zapier",
    url: "https://zapier.com/",
    category: "Automatización",
    desc: "Conecta cientos de apps y automatiza tareas. Incluye pasos con IA.",
    free: "Plan gratis hasta 100 tareas/mes.",
  },
];

function HerramientasGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Directorio · 2026
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              15 Herramientas de{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                IA Gratis
              </span>{" "}
              para Principiantes
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Texto, imagen, vídeo, voz y productividad. Todas tienen plan
              gratuito real y sirven para empezar a usar la IA hoy mismo sin
              pagar nada.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              ¿Por dónde empezar?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              Si nunca has usado IA, abre solo <strong>ChatGPT</strong>,
              <strong> Canva AI</strong> y <strong>CapCut</strong>. Con esas 3
              ya puedes redactar, diseñar y editar vídeo. El resto las añades
              cuando las necesites.
            </p>
          </section>

          <div className="space-y-5">
            {TOOLS.map((t) => (
              <section
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-bold sm:text-xl">{t.name}</h2>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {t.category}
                    </span>
                  </div>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground transition-transform hover:scale-105"
                  >
                    Abrir <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t.desc}
                </p>
                <div className="mt-3 flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-foreground/85">
                    <strong>Plan gratis:</strong> {t.free}
                  </span>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-6 text-center sm:p-10">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Combínalas con una Ruta
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Las herramientas solas no generan ingresos. En las{" "}
              <strong>Rutas de Monetización</strong> te decimos cuál usar en
              cada paso.
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
