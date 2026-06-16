import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/landing/FAQSection";

const FAQS: FAQItem[] = [
  {
    q: "¿En cuánto tiempo conseguiré mi primer cliente freelance?",
    a: "Con 10 propuestas diarias bien personalizadas durante 14 días, lo normal es cerrar entre 2 y 5 primeros clientes. Si llevas un mes sin respuestas, suele ser señal de propuestas genéricas o de un servicio mal definido, no de falta de demanda.",
  },
  {
    q: "¿Qué hago si no tengo portafolio ni experiencia previa?",
    a: "Crea 3 proyectos ficticios pero impecables para marcas reales que admires (un copy, un diseño o un vídeo según tu servicio) y publícalos en Notion, Behance o Carrd. Un portafolio ficticio bien hecho convierte tan bien como uno real al principio.",
  },
  {
    q: "¿Cuánto debo cobrar al principio?",
    a: "Cobra entre el 50% y el 80% del precio de mercado para tu primer cliente. Nunca trabajes gratis: atrae clientes que no respetan tu tiempo. Sube el precio un 30% cada 3 entregas con reseña 5★ y, tras 10 reseñas, sube otro 50% y descarta al cliente más barato.",
  },
  {
    q: "¿Qué plataforma es mejor para empezar?",
    a: "Para público hispano y baja competencia: Workana. Para proyectos internacionales bien pagados: Upwork. Para paquetes fijos sencillos: Fiverr. Para acceder a decisores directamente: LinkedIn. Lo recomendable es elegir solo 1-2 plataformas y dominarlas.",
  },
  {
    q: "¿Necesito declararme autónomo desde el primer cliente?",
    a: "Depende de tu país y de los ingresos. En España hay que darse de alta como autónomo cuando los ingresos son recurrentes y superan ciertos umbrales. La recomendación es consultar con un gestor en cuanto pases los 300-500 € mensuales para evitar sustos.",
  },
];

export const Route = createFileRoute("/guias/freelance-con-ia-sin-experiencia")({
  head: () => ({
    meta: [
      {
        title: "Freelance con IA sin Experiencia — Guía 2026 | Ruta IA",
      },
      {
        name: "description",
        content:
          "Guía paso a paso para empezar como freelance usando IA sin experiencia previa. Servicios rentables, perfiles, precios y primeros clientes en 30 días.",
      },
      {
        property: "og:title",
        content: "Freelance con IA sin Experiencia — Guía 2026",
      },
      {
        property: "og:description",
        content:
          "Cómo conseguir tu primer cliente freelance con IA en menos de 30 días, sin estudios técnicos ni inversión.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content:
          "https://rutadeia.com/guias/freelance-con-ia-sin-experiencia",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://rutadeia.com/guias/freelance-con-ia-sin-experiencia",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Cómo Ser Freelance con IA sin Experiencia en 2026 — Guía Completa",
          description:
            "Plan accionable para conseguir clientes freelance usando IA sin experiencia previa.",
          inLanguage: "es",
          author: { "@type": "Organization", name: "Ruta IA" },
        }),
      },
    ],
  }),
  component: FreelanceGuide,
});

const STEPS = [
  {
    title: "1. Elige UN servicio (no diez)",
    desc: "Los principiantes fallan ofreciendo de todo. Concéntrate en un servicio claro que la IA acelere x10.",
    list: [
      "Copywriting para webs y emails (ChatGPT + Claude).",
      "Edición de Reels y TikToks (CapCut + voz IA).",
      "Diseño de logos e ilustraciones (Midjourney + Canva).",
      "Traducción y subtitulado (DeepL + Whisper).",
      "Automatizaciones simples para pymes (Zapier + Make).",
    ],
  },
  {
    title: "2. Define tu cliente ideal en una frase",
    desc: "'Ayudo a [tipo de cliente] a [resultado concreto] usando IA.' Si no lo puedes decir así, todavía no está claro.",
    list: [
      "Ejemplo bueno: 'Ayudo a coaches a publicar 3 vídeos virales por semana con IA.'",
      "Ejemplo malo: 'Hago contenido digital con IA para empresas.'",
    ],
  },
  {
    title: "3. Crea un portafolio en 48 horas",
    desc: "Sin experiencia previa, inventa 3 proyectos ficticios pero impecables. Hoy mismo.",
    list: [
      "Elige 3 marcas reales que admires.",
      "Crea para ellas un ejemplo: copy, vídeo o diseño según tu servicio.",
      "Publícalos en Notion, Behance o un sitio simple (Lovable, Carrd).",
    ],
  },
  {
    title: "4. Abre perfiles donde HAY clientes",
    desc: "Estas plataformas tienen demanda real en español:",
    list: [
      "Upwork — proyectos internacionales bien pagados.",
      "Fiverr — paquetes fijos, ideal para empezar.",
      "Workana — público latino, menor competencia en español.",
      "LinkedIn — DMs directos a decisores.",
      "Malt — perfecto para España y Francia.",
    ],
  },
  {
    title: "5. Pricing: empieza barato pero NO gratis",
    desc: "Cobrar 0 atrae clientes que no respetan tu tiempo. Cobra poco al inicio y sube cada 3 entregas.",
    list: [
      "Primer cliente: 50-80% del precio de mercado.",
      "Tras 3 reseñas 5★: sube precio 30%.",
      "Tras 10 reseñas: sube otro 50% y elimina al cliente más barato.",
    ],
  },
  {
    title: "6. Envía 10 propuestas al día durante 14 días",
    desc: "Las matemáticas no fallan: 140 propuestas suelen traer 2-5 primeros clientes. Usa el prompt de propuestas de nuestra guía.",
    list: [
      "Personaliza la primera línea (lee el proyecto real).",
      "Demuestra que entiendes el problema en 2 frases.",
      "Propón 3 pasos concretos.",
      "Termina con una pregunta que invite a responder.",
    ],
  },
  {
    title: "7. Entrega rápido, pide reseña, repite",
    desc: "Tu ventaja con IA es la velocidad. Entrega antes de tiempo y pide reseña inmediatamente. Las reseñas son lo único que importa al principio.",
    list: [
      "Define plazos que puedas batir 1-2 días.",
      "Tras entregar, envía mensaje pidiendo feedback honesto.",
      "Si la reseña es 5★, pide referidos en el mismo mensaje.",
    ],
  },
];

function FreelanceGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Guía Freelance · 2026
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Cómo Ser{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Freelance con IA
              </span>{" "}
              sin Experiencia
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Plan de 7 pasos para conseguir tu primer cliente freelance usando
              Inteligencia Artificial en menos de 30 días, aunque empieces de
              cero.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              Lo que vas a conseguir
            </h2>
            <ul className="mt-4 space-y-2 text-sm sm:text-base">
              {[
                "Un servicio claro y bien posicionado.",
                "Un portafolio creíble aunque no tengas clientes previos.",
                "Un sistema de captación que funciona aunque seas nuevo.",
                "Un pricing que se sube solo con las reseñas.",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="space-y-6">
            {STEPS.map((s) => (
              <section
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
              >
                <h2 className="text-lg font-bold sm:text-xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-6 text-center sm:p-10">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Acelera con prompts probados
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Usa nuestros 20 prompts listos para freelance, propuestas y
              cierre de ventas.
            </p>
            <Link
              to="/guias/prompts-chatgpt-ganar-dinero-2026"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-all hover:scale-105 hover:brightness-110"
            >
              Ver los 20 prompts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
