import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Copy, Sparkles } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/guias/prompts-chatgpt-ganar-dinero-2026")({
  head: () => ({
    meta: [
      {
        title:
          "20 Prompts de ChatGPT para Ganar Dinero en 2026 (Copiar y Pegar) | Ruta IA",
      },
      {
        name: "description",
        content:
          "Los 20 mejores prompts de ChatGPT para ganar dinero con IA en 2026. Plantillas listas para copiar y usar: freelance, ebooks, copywriting, ventas y más.",
      },
      {
        property: "og:title",
        content: "20 Prompts de ChatGPT para Ganar Dinero en 2026",
      },
      {
        property: "og:description",
        content:
          "Plantillas de prompts probadas que cualquier principiante puede usar hoy para empezar a generar ingresos con IA.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content:
          "https://rutadeia.com/guias/prompts-chatgpt-ganar-dinero-2026",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://rutadeia.com/guias/prompts-chatgpt-ganar-dinero-2026",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "20 Prompts de ChatGPT para Ganar Dinero en 2026 (Copiar y Pegar)",
          description:
            "Plantillas de prompts listas para copiar que ayudan a principiantes a generar ingresos con ChatGPT.",
          inLanguage: "es",
          author: { "@type": "Organization", name: "Ruta IA" },
        }),
      },
    ],
  }),
  component: PromptsGuide,
});

const PROMPTS: Array<{ category: string; title: string; prompt: string }> = [
  {
    category: "Freelance",
    title: "Propuesta ganadora para Upwork / Fiverr",
    prompt:
      "Actúa como un freelancer top-rated con 100+ reseñas. Escribe una propuesta en español de 150 palabras para este proyecto: [PEGA LA DESCRIPCIÓN]. Demuestra entendimiento del problema, propón un plan de 3 pasos y termina con una pregunta que invite a responder.",
  },
  {
    category: "Copywriting",
    title: "Página de ventas que convierte",
    prompt:
      "Eres un copywriter formado por Eugene Schwartz. Escribe una página de ventas larga (PAS + AIDA) para el siguiente producto: [DESCRIBE PRODUCTO]. Incluye 5 bullets de beneficios, 3 objeciones con su respuesta, y un CTA con urgencia real.",
  },
  {
    category: "Ebooks",
    title: "Índice completo de un ebook vendible",
    prompt:
      "Diseña el índice de un ebook de 40 páginas sobre [TEMA] para [PÚBLICO]. Devuélveme: título, subtítulo, 8 capítulos con 4 sub-secciones cada uno y un capítulo bonus tipo checklist accionable.",
  },
  {
    category: "Ebooks",
    title: "Capítulo redactado con estilo propio",
    prompt:
      "Redacta el capítulo '[NOMBRE]' del ebook anterior. Tono cercano y directo, ejemplos reales, frases cortas. 1.200 palabras. Usa subtítulos H2 y termina con un mini-resumen accionable.",
  },
  {
    category: "Redes",
    title: "30 ideas de contenido para 30 días",
    prompt:
      "Soy creador en [NICHO]. Genera un calendario de 30 publicaciones para Instagram Reels: hook (8 palabras), gancho visual sugerido, guion de 30 segundos y CTA. Mezcla formatos: educativo, viral, storytelling, controversia.",
  },
  {
    category: "Redes",
    title: "Hook viral en 5 versiones",
    prompt:
      "Tengo este vídeo sobre [TEMA]. Dame 5 hooks de 6-9 palabras en español, cada uno con un ángulo distinto: curiosidad, miedo, contraste, lista, pregunta directa.",
  },
  {
    category: "Email Marketing",
    title: "Secuencia de bienvenida de 5 emails",
    prompt:
      "Escribe una secuencia de 5 emails para nuevos suscriptores de [NEGOCIO]. Email 1: bienvenida + regalo. 2: historia personal. 3: caso de éxito. 4: objeción + respuesta. 5: oferta. Asuntos con menos de 50 caracteres.",
  },
  {
    category: "SEO",
    title: "Artículo SEO de 1.500 palabras",
    prompt:
      "Escribe un artículo SEO en español sobre '[KEYWORD]'. Intención: informacional. Estructura: introducción (gancho + promesa), 6 H2 con sub-bullets, FAQ con 5 preguntas, conclusión con CTA. Densidad de keyword 1-2%.",
  },
  {
    category: "SEO",
    title: "Cluster de keywords semánticas",
    prompt:
      "Para la keyword principal '[KW]' dame: 10 long-tails (intención informacional), 5 transaccionales, 5 preguntas frecuentes y 10 entidades relacionadas. Formato tabla.",
  },
  {
    category: "Ventas",
    title: "Cierre por DM en redes",
    prompt:
      "Soy [PROFESIÓN]. Una persona acaba de comentar '[COMENTARIO]'. Redacta un mensaje directo, cálido, sin parecer venta, que en 4 líneas la lleve a agendar una llamada de descubrimiento gratuita.",
  },
  {
    category: "Servicios",
    title: "Paquete de servicios escalable",
    prompt:
      "Eres consultor de pricing. Diseña 3 paquetes (Básico / Pro / Premium) para un servicio de [SERVICIO] dirigido a [CLIENTE]. Cada paquete: nombre, qué incluye, precio sugerido en USD y ancla psicológica que justifique el siguiente nivel.",
  },
  {
    category: "Investigación",
    title: "Análisis de competidor en 5 minutos",
    prompt:
      "Visita mentalmente la web [URL] y devuélveme: propuesta de valor en 1 frase, 3 fortalezas, 3 debilidades, qué público objetivo parecen tener y 3 ideas para diferenciarme.",
  },
  {
    category: "YouTube",
    title: "Guion de vídeo largo retentivo",
    prompt:
      "Guion de un vídeo de YouTube de 8 minutos sobre [TEMA]. Estructura: hook 15s, promesa, retención mid-roll cada 90s (cliffhangers), pattern interrupts, CTA suave a mitad y CTA fuerte al final.",
  },
  {
    category: "Cursos",
    title: "Outline de un mini-curso vendible",
    prompt:
      "Diseña un mini-curso de 5 módulos sobre [SKILL] para principiantes. Cada módulo: objetivo, 3 lecciones, ejercicio práctico y entregable. Añade idea de bonus que aumente el valor percibido.",
  },
  {
    category: "Pitch",
    title: "Pitch para inversor / cliente",
    prompt:
      "Resume mi idea '[IDEA]' en un pitch de 60 segundos. Estructura: problema, solución, mercado, tracción, qué pido. Frases de máximo 12 palabras.",
  },
  {
    category: "Afiliados",
    title: "Reseña de producto que vende",
    prompt:
      "Escribe una reseña honesta de [PRODUCTO] enfocada a afiliados. Estructura: para quién es, para quién no es, 3 cosas que me encantan, 2 que mejoraría, comparativa rápida con [COMPETIDOR], veredicto y enlace de afiliado al final.",
  },
  {
    category: "Productividad",
    title: "Sistema de trabajo semanal",
    prompt:
      "Soy [ROL] y trabajo [HORAS]/día. Diseña una semana ideal con bloques de 90 min: deep work, contenido, ventas, admin y descanso. Devuelve tabla con horarios y tareas concretas.",
  },
  {
    category: "Branding",
    title: "Bio profesional para redes",
    prompt:
      "Soy [PROFESIÓN] y ayudo a [CLIENTE] a [RESULTADO] sin [DOLOR]. Genera 5 versiones de bio para Instagram/X (máx 150 caracteres) con tono distinto: directo, divertido, autoritario, cercano, contrarian.",
  },
  {
    category: "Productos digitales",
    title: "Notion Template vendible",
    prompt:
      "Diseña la estructura de un template de Notion sobre [TEMA] para vender a [PÚBLICO]. Devuelve: páginas principales, bases de datos, vistas sugeridas y cómo posicionarlo en Gumroad para venderlo a 19$.",
  },
  {
    category: "Mentalidad",
    title: "Plan de acción 30/60/90 días",
    prompt:
      "Quiero generar mis primeros [CANTIDAD]€ con IA. Mi situación es [SITUACIÓN]. Diseña un plan 30/60/90 días con objetivos medibles, herramientas a usar cada mes y métricas para saber si voy por buen camino.",
  },
];

function PromptsGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Guía de Prompts · 2026
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              20 Prompts de ChatGPT para{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ganar Dinero
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Plantillas listas para copiar y pegar. Cada prompt está probado
              para acelerar tareas reales de freelance, contenido y ventas en
              2026.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">Cómo usarlos</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              Copia el prompt, sustituye lo que está entre corchetes
              <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs">
                [ASÍ]
              </code>
              y pégalo en <strong>ChatGPT, Claude, Gemini o Perplexity</strong>.
              Si el resultado no te convence, pídele que lo reescriba más
              corto, más directo o con otro tono.
            </p>
          </section>

          <div className="space-y-5">
            {PROMPTS.map((p, i) => (
              <section
                key={i}
                className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="flex items-start gap-2 text-lg font-bold sm:text-xl">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  {p.title}
                </h2>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed text-foreground/90">
                  {p.prompt}
                </pre>
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(p.prompt)}
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Copy className="h-3.5 w-3.5" /> Copiar prompt
                </button>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-6 text-center sm:p-10">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Convierte estos prompts en ingresos
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Combina estos prompts con una <strong>Ruta de Monetización</strong>{" "}
              y tendrás un sistema completo para empezar.
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
