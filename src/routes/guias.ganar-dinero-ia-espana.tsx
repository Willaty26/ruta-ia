import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Euro, MapPin } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/landing/FAQSection";

const FAQS: FAQItem[] = [
  {
    q: "¿Es legal facturar servicios de IA en España siendo autónomo?",
    a: "Sí. Te das de alta en Hacienda (modelo 037) y en la Seguridad Social como autónomo. La tarifa plana de 87 € durante los primeros 12 meses hace que arrancar con IA sea viable incluso con pocos ingresos al principio.",
  },
  {
    q: "¿Puedo cobrar en dólares desde España trabajando con clientes de USA?",
    a: "Sí. Usa Wise, Payoneer o Deel para recibir USD, EUR o GBP con bajas comisiones. Después facturas en euros al cambio del día. Es la fórmula más usada por freelancers españoles que venden servicios de IA fuera de la UE.",
  },
  {
    q: "¿Cuánto se puede ganar al mes con IA en España siendo principiante?",
    a: "En los primeros 3 meses, entre 300-800 €/mes haciendo gigs en Malt, Fiverr o Upwork. A partir del mes 6, freelancers que se especializan (automatización con n8n, copy con IA, edición de vídeo) facturan 1.500-3.500 €/mes a tiempo parcial.",
  },
  {
    q: "¿Qué herramientas de IA son gratis para usar desde España?",
    a: "ChatGPT (GPT-4o mini), Claude, Gemini, Perplexity, CapCut, ElevenLabs (10 min/mes), Suno, Canva con IA y Notion AI tienen planes gratuitos accesibles desde España sin VPN. Suficiente para arrancar y validar antes de pagar nada.",
  },
  {
    q: "¿Hay que pagar impuestos por lo que gano con IA?",
    a: "Sí. Como autónomo declaras IVA trimestral (modelo 303) e IRPF (modelo 130 o retenciones en factura). Si facturas a empresas de la UE con NIF intracomunitario, la factura va sin IVA. Un gestor cuesta 40-60 €/mes y te ahorra problemas.",
  },
];

export const Route = createFileRoute("/guias/ganar-dinero-ia-espana")({
  head: () => ({
    meta: [
      { title: "Cómo Ganar Dinero con IA en España 2026 (Guía Real) | Ruta IA" },
      {
        name: "description",
        content:
          "Guía actualizada para ganar dinero con IA en España: ideas reales, plataformas, facturación como autónomo y cuánto se cobra de verdad en 2026.",
      },
      {
        name: "keywords",
        content:
          "ganar dinero ia españa, freelance ia españa, ingresos extra con ia 2026, chatgpt facturar españa",
      },
      { property: "og:title", content: "Ganar Dinero con IA en España 2026" },
      {
        property: "og:description",
        content:
          "Ideas, plataformas y números reales para generar ingresos con IA viviendo en España.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://rutadeia.com/guias/ganar-dinero-ia-espana" },
    ],
    links: [
      { rel: "canonical", href: "https://rutadeia.com/guias/ganar-dinero-ia-espana" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cómo Ganar Dinero con IA en España en 2026",
          description:
            "Guía paso a paso para freelancers y autónomos españoles que quieren generar ingresos con inteligencia artificial.",
          inLanguage: "es",
          author: { "@type": "Organization", name: "Ruta IA" },
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: GuideEspana,
});

const IDEAS = [
  {
    title: "Automatizaciones con n8n + IA para PYMES",
    desc: "Las pequeñas empresas españolas pagan 300-1.200 € por un flujo que conecte su Holded, WhatsApp y ChatGPT. Demanda altísima en LinkedIn España.",
    pago: "300 - 1.200 € por proyecto",
  },
  {
    title: "Edición de vídeos cortos con CapCut + ElevenLabs",
    desc: "Creadores en España pagan 150-400 €/mes por gestionarles 15-30 Reels o Shorts. Apóyate en CapCut Pro y voces sintéticas en español neutro.",
    pago: "150 - 400 € / cliente / mes",
  },
  {
    title: "Copywriting SEO con IA para tiendas Shopify",
    desc: "Escribe fichas de producto y artículos en español usando ChatGPT + SurferSEO. Tiendas españolas pagan 0,08 - 0,15 € por palabra revisada.",
    pago: "300 - 900 € por web",
  },
  {
    title: "Chatbots de WhatsApp con IA",
    desc: "Restaurantes, clínicas y academias pagan setup + cuota mensual. Usa Manychat o BotPress conectado a GPT-4o mini.",
    pago: "400 € setup + 80 €/mes",
  },
  {
    title: "Cursos cortos en Hotmart o Domestika",
    desc: "Mini-cursos en español de 1-3 horas sobre 'IA para [nicho]'. Audiencia LATAM + España paga 19-49 € por curso.",
    pago: "500 - 4.000 € pasivos / mes",
  },
  {
    title: "Voces sintéticas para podcasts y audiolibros",
    desc: "ElevenLabs en español castellano abre un mercado nuevo: editoriales pequeñas pagan por convertir ebooks en audiolibros.",
    pago: "200 - 800 € por libro",
  },
];

function GuideEspana() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
              <MapPin className="h-3.5 w-3.5" /> España · 2026
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Cómo Ganar Dinero con{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                IA en España
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Ideas, plataformas y números reales pensados para freelancers,
              autónomos y estudiantes en España. Sin promesas vacías.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold sm:text-2xl">
              <Euro className="h-5 w-5 text-primary" />
              Lo primero: ¿autónomo, factura puntual o nómina extra?
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85 sm:text-base">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Menos de 1.000 €/año puntuales: se puede facturar sin alta de autónomo si no hay habitualidad (consulta tu caso con un gestor).
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Ingresos recurrentes: <strong>tarifa plana de autónomos 87 €/mes</strong> durante 12 meses + bonificaciones por edad o zona rural.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Cobrar de fuera de la UE: Wise, Payoneer o Deel evitan comisiones bancarias y conversiones abusivas.
              </li>
            </ul>
          </section>

          <h2 className="mb-6 text-2xl font-black sm:text-3xl">
            6 ideas reales que están funcionando ahora
          </h2>
          <div className="space-y-5">
            {IDEAS.map((idea, i) => (
              <section
                key={i}
                className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Idea #{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                    {idea.pago}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold sm:text-xl">{idea.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
                  {idea.desc}
                </p>
              </section>
            ))}
          </div>

          <FAQSection items={FAQS} />

          <section className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-6 text-center sm:p-10">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Lleva tu primer cliente esta semana
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Descarga gratis los <strong>50 prompts de ChatGPT</strong> y
              empieza por la categoría de Freelance.
            </p>
            <Link
              to="/"
              hash="recursos-gratis"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-all hover:scale-105 hover:brightness-110"
            >
              Quiero el PDF gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
