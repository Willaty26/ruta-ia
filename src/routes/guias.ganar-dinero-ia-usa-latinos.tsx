import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/landing/FAQSection";

const FAQS: FAQItem[] = [
  {
    q: "¿Puedo ganar dinero con IA si soy latino viviendo en USA?",
    a: "Sí, y tienes ventaja: hablas dos idiomas. Puedes ofrecer servicios bilingües (traducción, copywriting EN/ES, atención a clientes hispanos) y cobrar tarifas USA. Ingresos típicos: $500–$3,000 USD/mes los primeros 6 meses.",
  },
  {
    q: "¿Necesito SSN o ITIN para cobrar?",
    a: "Para Zelle, PayPal y Venmo basta con cuenta bancaria USA. Para facturar como freelancer y reportar al IRS necesitas SSN o ITIN. Si no tienes estatus migratorio definido, plataformas como Payoneer y Wise permiten cobrar sin SSN.",
  },
  {
    q: "¿Qué nichos pagan más a hispanohablantes en USA?",
    a: "Marketing para negocios latinos (restaurantes, salones, abogados de inmigración), traducción legal/médica EN-ES, manejo de redes en español para marcas grandes, y creación de contenido educativo para la comunidad hispana en TikTok y YouTube.",
  },
  {
    q: "¿Cómo cobro siendo latino en USA?",
    a: "Zelle es lo más usado entre la comunidad (sin comisión). Para clientes corporativos: PayPal, Venmo Business o transferencia ACH. Si trabajas para clientes en LATAM, Wise te ahorra mucho en comisiones.",
  },
  {
    q: "¿Debo declarar estos ingresos al IRS?",
    a: "Sí. Cualquier ingreso superior a $400 USD/año por trabajo propio debe reportarse (Form 1040 Schedule C). Es mejor llevar control desde el día 1 con QuickBooks o una hoja de cálculo. Consulta a un CPA bilingüe en tu estado.",
  },
];

export const Route = createFileRoute("/guias/ganar-dinero-ia-usa-latinos")({
  head: () => ({
    meta: [
      { title: "Ganar Dinero con IA siendo Latino en USA 2026 | Ruta IA" },
      {
        name: "description",
        content:
          "Guía para latinos en USA: cómo ganar dinero con IA, cobrar con Zelle/PayPal, nichos bilingües y declarar al IRS. Métodos comprobados con ChatGPT.",
      },
      { name: "geo.region", content: "US" },
      { name: "geo.placename", content: "Estados Unidos" },
      { property: "og:title", content: "Ganar Dinero con IA — Latinos en USA 2026" },
      {
        property: "og:description",
        content:
          "Ventaja bilingüe + IA = ingresos en dólares desde Estados Unidos. Plataformas, nichos y métodos reales.",
      },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "es_US" },
      { property: "og:url", content: "https://rutadeia.com/guias/ganar-dinero-ia-usa-latinos" },
    ],
    links: [
      { rel: "canonical", href: "https://rutadeia.com/guias/ganar-dinero-ia-usa-latinos" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Ganar Dinero con IA siendo Latino en USA — Guía 2026",
          description:
            "Métodos reales para latinos en Estados Unidos que quieren generar ingresos con IA aprovechando su ventaja bilingüe.",
          inLanguage: "es-US",
          author: { "@type": "Organization", name: "Ruta IA" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(FAQS)),
      },
    ],
  }),
  component: GuideUsaLatinos,
});

const METHODS = [
  {
    icon: Sparkles,
    title: "1. Servicios bilingües EN ↔ ES con IA",
    income: "$25–$80 USD/hora",
    desc: "Traducción de webs, subtítulos, emails corporativos y posts. ChatGPT + tu revisión humana = entrega 5x más rápida. Cobra tarifas USA, no LATAM.",
    steps: [
      "Abre perfil en Upwork y Fiverr indicando 'Native Spanish + Fluent English'.",
      "Especializa en un sector (legal, médico, marketing).",
      "Cobra $25 USD/hora al inicio y sube a $60+ con reseñas.",
    ],
  },
  {
    icon: TrendingUp,
    title: "2. Marketing digital para negocios latinos",
    income: "$500–$2,500 USD/cliente",
    desc: "Restaurantes mexicanos, salones de belleza, abogados de inmigración… todos necesitan redes en español. La IA crea contenido masivo, tú lo curas.",
    steps: [
      "Identifica 20 negocios latinos en tu ciudad sin presencia digital fuerte.",
      "Ofrece paquete: 12 posts + Reels + WhatsApp Business automatizado.",
      "Cobra mensual recurrente ($500–$1,500 USD según ciudad).",
    ],
  },
  {
    icon: Wallet,
    title: "3. Contenido educativo en TikTok / YouTube Shorts",
    income: "$0–$5,000 USD/mes",
    desc: "Nichos calientes: 'Cómo vivir en USA siendo latino', finanzas para inmigrantes, créditos, taxes, residencia. Monetiza con creator fund y afiliados de Amazon US.",
    steps: [
      "Publica 1 short diario con guion de ChatGPT y voz IA o tu voz.",
      "Construye comunidad alrededor de un problema específico.",
      "Vende cursos o consultorías 1-on-1 al pasar de 20K seguidores.",
    ],
  },
  {
    icon: Sparkles,
    title: "4. Productos digitales para la comunidad hispana",
    income: "$300–$4,000 USD/mes",
    desc: "Plantillas en español para taxes, currículums en inglés, guías de créditos USA, planificadores. Vende en Gumroad o Etsy en dólares.",
    steps: [
      "Detecta un problema repetido en grupos de Facebook de latinos.",
      "Crea un producto digital de $9–$39 USD con ChatGPT + Canva.",
      "Promociona en TikTok y grupos de Facebook hispanos en USA.",
    ],
  },
];

function GuideUsaLatinos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Guía Regional · Latinos en USA 🇺🇸
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Gana Dinero con IA siendo{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Latino en USA
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Tu ventaja bilingüe + Inteligencia Artificial = ingresos reales
              en dólares. Métodos pensados para hispanohablantes viviendo en
              Estados Unidos.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">Tu ventaja oculta</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              Hablar español es un superpoder en USA: hay más de{" "}
              <strong>62 millones de hispanos</strong> y las empresas pagan
              extra por contenido auténtico en español. Súmale IA y puedes
              servir a 3x más clientes con la mitad del esfuerzo.
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
              Empieza tu ruta hoy
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
