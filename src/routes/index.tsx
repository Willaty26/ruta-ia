import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { PromptTester } from "@/components/landing/PromptTester";
import { MonetizationRoutes } from "@/components/landing/MonetizationRoutes";
import { PrimeYoungAd } from "@/components/landing/PrimeYoungAd";
import { ToolsDirectory } from "@/components/landing/ToolsDirectory";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";


const FAQ_ENTRIES = [
  {
    q: "¿Necesito saber programar o tener conocimientos técnicos?",
    a: "No. Esta ruta está pensada 100% para principiantes. Si sabes copiar y pegar, ya tienes lo necesario para empezar a usar los prompts y herramientas.",
  },
  {
    q: "¿Cuánto cuesta usar Ruta IA?",
    a: "El acceso a la plataforma es completamente gratuito. Algunas herramientas externas que recomendamos tienen planes gratuitos generosos; otras ofrecen versiones de pago opcionales si quieres escalar.",
  },
  {
    q: "¿En cuánto tiempo puedo ver mis primeros ingresos?",
    a: "Depende del esfuerzo y la ruta elegida, pero la mayoría de usuarios que aplican los pasos diariamente consiguen sus primeros ingresos entre 7 y 21 días.",
  },
  {
    q: "¿Qué herramientas de IA necesito para empezar?",
    a: "Con una cuenta gratuita de ChatGPT es suficiente para arrancar. A medida que avances, encontrarás un directorio con herramientas para imagen, video y productividad.",
  },
  {
    q: "¿Los prompts funcionan en cualquier modelo de IA?",
    a: "Sí. Están optimizados para ChatGPT, pero funcionan igual de bien en Claude, Gemini, Perplexity y cualquier otro modelo conversacional.",
  },
  {
    q: "¿Puedo combinar varias rutas de monetización?",
    a: "Totalmente. De hecho, lo recomendamos. Muchos usuarios empiezan con la ruta de Creador Express y, al ganar confianza, añaden servicios freelance para diversificar.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruta IA: Aprende y Gana Dinero con Inteligencia Artificial en 2026" },
      {
        name: "description",
        content:
          "Aprende a usar la IA y gana dinero desde casa con prompts listos, herramientas gratis y rutas de monetización paso a paso. Sin experiencia técnica.",
      },
      { name: "keywords", content: "ganar dinero con ia, prompts chatgpt, herramientas ia gratis, freelance con ia, inteligencia artificial principiantes, ganar dinero desde casa" },
      { property: "og:title", content: "Ruta IA: Aprende y Gana Dinero con IA" },
      {
        property: "og:description",
        content:
          "Prompts listos, guías paso a paso y herramientas de IA gratuitas para empezar a generar ingresos hoy mismo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rutadeia.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://rutadeia.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ruta IA: Aprende y Gana",
          url: "https://rutadeia.com/",
          inLanguage: "es",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ruta IA",
          url: "https://rutadeia.com/",
          description:
            "Plataforma interactiva que enseña a principiantes a usar la IA y generar ingresos paso a paso.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ENTRIES.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PromptTester />
        <MonetizationRoutes />
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <PrimeYoungAd />
        </div>
        <ToolsDirectory />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
