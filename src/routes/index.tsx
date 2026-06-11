import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { PromptTester } from "@/components/landing/PromptTester";
import { MonetizationRoutes } from "@/components/landing/MonetizationRoutes";
import { ToolsDirectory } from "@/components/landing/ToolsDirectory";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruta IA: Aprende y Gana — Domina la IA y genera ingresos" },
      {
        name: "description",
        content:
          "Plataforma interactiva para principiantes en IA. Prompts listos, rutas de monetización paso a paso y directorio de herramientas premium.",
      },
      { property: "og:title", content: "Ruta IA: Aprende y Gana" },
      {
        property: "og:description",
        content:
          "Herramientas gratuitas, guías paso a paso y prompts listos para usar. Empieza tu ruta hoy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <ToolsDirectory />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
