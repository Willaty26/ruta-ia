import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ToolsDirectory } from "@/components/landing/ToolsDirectory";

export const Route = createFileRoute("/herramientas")({
  head: () => ({
    meta: [
      { title: "Herramientas de IA Gratis y Premium 2026 — Ruta IA" },
      {
        name: "description",
        content:
          "Directorio curado de las mejores herramientas de IA: ChatGPT, Claude, Midjourney, ElevenLabs, CapCut, Notion AI y más. Pruébalas gratis.",
      },
      {
        name: "keywords",
        content:
          "herramientas ia gratis, mejores herramientas inteligencia artificial 2026, chatgpt claude midjourney, apps ia productividad",
      },
      { property: "og:title", content: "Herramientas de IA Premium · Ruta IA" },
      {
        property: "og:description",
        content:
          "Las apps de IA que usamos a diario, organizadas por categoría: texto, imagen, video y productividad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rutadeia.com/herramientas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://rutadeia.com/herramientas" }],
  }),
  component: HerramientasPage,
});

function HerramientasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div className="mx-auto max-w-4xl px-4 pt-12 text-center sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Directorio completo
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Herramientas de <span className="text-primary">IA</span> que sí valen la pena
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Curadas a mano. Todas tienen plan gratuito o prueba sin tarjeta. Elige
            las que encajan con tu ruta de monetización.
          </p>
        </div>
        <ToolsDirectory />
      </main>
      <Footer />
    </div>
  );
}
