import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Wrench, Video, PenLine, Globe } from "lucide-react";
import { AdSlot } from "./AdSlot";

type Step = { title: string; tip: string; tool: string };
type Route = { id: string; label: string; short: string; icon: typeof Video; steps: Step[] };

const ROUTES: Route[] = [
  {
    id: "a",
    label: "Ruta A · Creador Express",
    short: "Automatización de videos",
    icon: Video,
    steps: [
      {
        title: "Genera el guion con IA",
        tip: "Pide a ChatGPT 5 hooks virales antes de elegir el guion final.",
        tool: "ChatGPT / Claude",
      },
      {
        title: "Crea voz y visuales automáticos",
        tip: "Usa una sola voz consistente — la audiencia te reconocerá más rápido.",
        tool: "ElevenLabs + Pictory",
      },
      {
        title: "Publica y monetiza en serie",
        tip: "Programa 30 videos al mes; el algoritmo premia constancia, no perfección.",
        tool: "YouTube Shorts + TikTok",
      },
    ],
  },
  {
    id: "b",
    label: "Ruta B · Redactor Freelance",
    short: "Blogs y correos con IA",
    icon: PenLine,
    steps: [
      {
        title: "Elige un nicho rentable",
        tip: "SaaS, finanzas y salud pagan 3–5x más que nichos generales.",
        tool: "Perplexity (research)",
      },
      {
        title: "Crea tu pipeline de redacción",
        tip: "Plantilla: brief → outline IA → edición humana → SEO. 1 artículo en 90 min.",
        tool: "ChatGPT + Grammarly",
      },
      {
        title: "Consigue clientes recurrentes",
        tip: "Cierra paquetes mensuales (4 artículos), no piezas sueltas.",
        tool: "Upwork / Contra / LinkedIn",
      },
    ],
  },
  {
    id: "c",
    label: "Ruta C · Micro-Agencia Web",
    short: "Páginas web rápidas",
    icon: Globe,
    steps: [
      {
        title: "Define tu oferta de 1 página",
        tip: "Vende 'landing en 48h' a negocios locales por $300–800 USD.",
        tool: "Lovable / Framer",
      },
      {
        title: "Crea 3 plantillas reutilizables",
        tip: "Restaurante, profesional y e-commerce. Cámbialas en 1 hora.",
        tool: "Lovable + Unsplash",
      },
      {
        title: "Prospecta negocios sin web",
        tip: "Busca en Google Maps los que tienen solo Instagram. Ofréceles demo gratis.",
        tool: "Google Maps + Instagram DM",
      },
    ],
  },
];

export function MonetizationRoutes() {
  return (
    <section id="rutas" className="border-y border-border/60 bg-secondary/20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Sección 02 · Paso a paso
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Rutas de <span className="text-accent">Monetización</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Tres modelos probados. Elige uno, sigue los pasos y empieza esta semana.
          </p>
        </div>

        <Tabs defaultValue="a" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-3">
            {ROUTES.map((r) => {
              const Icon = r.icon;
              return (
                <TabsTrigger
                  key={r.id}
                  value={r.id}
                  className="flex h-auto flex-col items-start gap-1 rounded-xl border border-border bg-card p-4 text-left data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:shadow-[var(--shadow-glow-primary)]"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-bold text-foreground">{r.label}</span>
                  <span className="text-xs text-muted-foreground">{r.short}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {ROUTES.map((r) => (
            <TabsContent key={r.id} value={r.id} className="mt-8 space-y-4">
              {r.steps.map((s, idx) => (
                <div key={idx}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 sm:p-6">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-black text-primary-foreground shadow-[var(--shadow-glow-primary)]">
                      {idx + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-foreground sm:text-lg">{s.title}</h3>
                      <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{s.tip}</span>
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-xs">
                        <Wrench className="h-3.5 w-3.5 text-primary" />
                        <span className="text-muted-foreground">Herramienta:</span>
                        <span className="font-semibold text-foreground">{s.tool}</span>
                      </p>
                    </div>
                  </div>
                  {idx === 1 && <AdSlot className="mt-4" height="h-24" label="Espacio Publicitario Google AdSense" />}
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
