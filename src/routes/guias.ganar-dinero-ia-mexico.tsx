import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/landing/FAQSection";
import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from "@/components/seo/Breadcrumbs";

const CRUMBS: Crumb[] = [
  { name: "Inicio", url: "https://rutadeia.com/" },
  { name: "Guías", url: "https://rutadeia.com/" },
  { name: "Ganar Dinero con IA en México", url: "https://rutadeia.com/guias/ganar-dinero-ia-mexico" },
];

const FAQS: FAQItem[] = [
  {
    q: "¿Cuánto se puede ganar con IA desde México?",
    a: "Con dedicación constante, lo realista en México es entre $3,000 y $15,000 MXN al mes los primeros 90 días, escalando a $25,000–$60,000 MXN cuando consigues clientes recurrentes o productos digitales que se venden solos.",
  },
  {
    q: "¿Cómo cobro mis ingresos en México?",
    a: "Las opciones más usadas son Mercado Pago, PayPal MX, transferencia SPEI y Wise para pagos en dólares. Si facturas a clientes en USA, Payoneer y Wise te dan tipo de cambio competitivo y depósito directo a tu cuenta CLABE.",
  },
  {
    q: "¿Necesito darme de alta en el SAT?",
    a: "Si vas a facturar regularmente, sí. El RIF (Régimen de Incorporación Fiscal) o el régimen Simplificado de Confianza (RESICO) son los más accesibles para freelancers que empiezan. Consulta con un contador antes de superar los primeros $30,000 MXN mensuales.",
  },
  {
    q: "¿Qué plataformas funcionan mejor para mexicanos?",
    a: "Para vender productos digitales: Hotmart, Gumroad y Mercado Libre. Para servicios freelance: Workana (LATAM), Fiverr y Upwork. Para contenido monetizable: YouTube, TikTok y Instagram con afiliados de Amazon México.",
  },
  {
    q: "¿Puedo trabajar para clientes en USA cobrando en dólares?",
    a: "Sí, es la estrategia más rentable. Con el tipo de cambio actual, un servicio de $300 USD equivale a más de $5,000 MXN. Usa Payoneer, Wise o Deel para recibir pagos sin perder tanto en comisiones.",
  },
];

export const Route = createFileRoute("/guias/ganar-dinero-ia-mexico")({
  head: () => ({
    meta: [
      { title: "Ganar Dinero con IA en México 2026 | Ruta IA" },
      {
        name: "description",
        content:
          "Guía para mexicanos: cómo ganar dinero con IA desde México, cobrar en pesos o dólares, plataformas, SAT y métodos comprobados con ChatGPT.",
      },
      { name: "geo.region", content: "MX" },
      { name: "geo.placename", content: "México" },
      { property: "og:title", content: "Ganar Dinero con IA en México — Guía 2026" },
      {
        property: "og:description",
        content:
          "Métodos reales para generar ingresos con IA desde México. Mercado Pago, SAT, clientes en USA y más.",
      },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "es_MX" },
      { property: "og:url", content: "https://rutadeia.com/guias/ganar-dinero-ia-mexico" },
    ],
    links: [
      { rel: "canonical", href: "https://rutadeia.com/guias/ganar-dinero-ia-mexico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Ganar Dinero con IA en México 2026 — Guía Práctica",
          description:
            "Guía adaptada a México: plataformas, métodos de pago, SAT y formas reales de monetizar con IA.",
          inLanguage: "es-MX",
          author: { "@type": "Organization", name: "Ruta IA" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(FAQS)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(CRUMBS)),
      },
    ],
  }),
  component: GuideMexico,
});

const METHODS = [
  {
    icon: Sparkles,
    title: "1. Vende ebooks y plantillas en Hotmart",
    income: "$2,000–$15,000 MXN/mes",
    desc: "Hotmart domina en LATAM. Crea guías cortas con ChatGPT en español neutro y véndelas con OXXO Pay y tarjeta. Sin inventario, sin envíos.",
    steps: [
      "Elige un nicho local (recetas mexicanas, finanzas en pesos, oposiciones).",
      "Estructura un ebook de 30 páginas con ChatGPT.",
      "Sube a Hotmart, activa OXXO Pay y promociona en TikTok MX.",
    ],
  },
  {
    icon: TrendingUp,
    title: "2. Clientes en USA cobrando en dólares",
    income: "$300–$2,000 USD/mes",
    desc: "El arbitraje cambiario es tu mejor aliado. Ofrece servicios de redacción, traducción o edición a empresas estadounidenses desde Upwork o Fiverr.",
    steps: [
      "Crea perfil en Upwork con nicho específico.",
      "Cobra con Payoneer o Wise (mejor tipo de cambio que PayPal).",
      "Reinvierte 20% en herramientas (ChatGPT Plus, Canva Pro).",
    ],
  },
  {
    icon: Wallet,
    title: "3. Micro-agencia para negocios locales",
    income: "$3,000–$20,000 MXN/cliente",
    desc: "Restaurantes, dentistas y tiendas en tu colonia necesitan redes y chatbots. La IA hace el 80% del trabajo y tú cobras como agencia.",
    steps: [
      "Lista 30 negocios locales con redes desactualizadas.",
      "Ofrece paquete mensual (10 posts + WhatsApp bot).",
      "Factura por RESICO si superas $15,000 MXN/mes.",
    ],
  },
  {
    icon: Sparkles,
    title: "4. Contenido viral en TikTok México",
    income: "$0–$30,000 MXN/mes",
    desc: "Nichos como finanzas personales en pesos, vida en CDMX o tips para emigrar funcionan muy bien. Monetiza con afiliados de Amazon MX y Mercado Libre.",
    steps: [
      "Publica 1 video diario con guion de ChatGPT.",
      "Añade enlaces de afiliado en bio al llegar a 1,000 seguidores.",
      "Vende un producto digital propio al pasar de 10K.",
    ],
  },
];

function GuideMexico() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Guía Regional · México 🇲🇽
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Ganar Dinero con IA en{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                México
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Métodos adaptados al mercado mexicano: Mercado Pago, Hotmart,
              clientes en USA y cómo facturar al SAT cuando empieces a ganar.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">¿Por qué México es ideal?</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              Tipo de cambio favorable, mercado hispanohablante de 130 millones
              y plataformas como <strong>Hotmart, Mercado Pago y OXXO Pay</strong>{" "}
              que aceptan pagos sin tarjeta. Puedes facturar en dólares y gastar en
              pesos — el arbitraje juega a tu favor.
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
                    <h2 className="text-lg font-bold sm:text-xl">{m.title}</h2>
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

          <FAQSection items={FAQS} />

          <section className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-6 text-center sm:p-10">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              ¿Listo para empezar desde México?
            </h2>
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
