import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Wrench, Video, PenLine, Globe } from "lucide-react";
import { AdSlot } from "./AdSlot";

type Step = { title: string; detail: string; tip: string; tool: string };
type Route = { id: string; label: string; short: string; icon: typeof Video; steps: Step[] };

const ROUTES: Route[] = [
  {
    id: "a",
    label: "Ruta A · Creador Automatizado",
    short: "Faceless channels con IA",
    icon: Video,
    steps: [
      {
        title: "La Estrategia — elige un nicho de alta curiosidad",
        detail:
          "Identifica un nicho de alta curiosidad (misterios del mundo, datos de salud, finanzas para jóvenes, ciencia rara, historia oculta). No necesitas mostrar tu rostro: el éxito radica en la constancia de subir 1 video al día durante 30 días. Estudia los 5 canales faceless más grandes de tu nicho y replica el formato que más se repite — la originalidad llega después de los primeros 100 videos.",
        tip: "Nichos con anunciantes (finanzas, salud, tecnología, productividad) pagan 5–10x más por CPM que el entretenimiento puro.",
        tool: "TikTok Creative Center + 1of10",
      },
      {
        title: "La Producción — guiones con IA y montaje en CapCut",
        detail:
          "Usa ChatGPT para generar 10 guiones cortos siguiendo tu plantilla (hook de 3 seg → 3 datos de valor → CTA). Luego entra a CapCut (lo tienes en nuestro directorio), usa su herramienta 'Texto a Video' con voces de IA realistas, y añade imágenes o B-roll de fondo de alta calidad. Bátchealo: produce 7 videos en una sola sesión semanal para liberar el resto de la semana.",
        tip: "Usa siempre la misma voz IA en todos los videos: construir marca sonora multiplica la tasa de reconocimiento del canal.",
        tool: "ChatGPT + CapCut + ElevenLabs",
      },
      {
        title: "La Monetización Real — afiliados antes que vistas",
        detail:
          "No dependas solo de los pagos de TikTok por vistas (son ridículamente bajos al principio). Coloca un enlace de afiliado en tu perfil de un producto físico relacionado con tu contenido — si hablas de salud, un libro de nutrición de Amazon; si hablas de finanzas, una agenda o calculadora financiera. Si mantienes apenas un 1% de tasa de conversión de tus visitas a clics y compras, generarás ingresos estables desde el primer mes.",
        tip: "Diversifica con 3 enlaces: Amazon Afiliados, Hotmart (infoproductos en español) y una herramienta SaaS (mayor comisión recurrente).",
        tool: "Amazon Afiliados + Hotmart + Beacons.ai",
      },
    ],
  },
  {
    id: "b",
    label: "Ruta B · Redactor Freelance",
    short: "Blogs, newsletters y copy con IA",
    icon: PenLine,
    steps: [
      {
        title: "Especialízate en un nicho que pague bien",
        detail:
          "Los redactores generalistas cobran tarifas muy bajas por palabra; los especializados en nichos técnicos (SaaS B2B, fintech, salud, ciberseguridad) cobran entre 5 y 10 veces más por el mismo tiempo invertido. Elige UN nicho, lee los 20 blogs más leídos del sector durante una semana y aprende su jerga. Crea 3 artículos demo en ese nicho para mostrar autoridad sin tener clientes.",
        tip: "Cobra por artículo o por proyecto, NUNCA por palabra. Cobrar por palabra te castiga por escribir mejor.",
        tool: "Perplexity (research) + Ahrefs Webmaster Tools (gratis)",
      },
      {
        title: "Construye un pipeline editorial con IA en el corazón",
        detail:
          "Flujo profesional: 1) brief del cliente con preguntas concretas, 2) keyword research con Ahrefs gratis o Ubersuggest, 3) outline generado con ChatGPT validado por ti, 4) primer borrador con IA, 5) reescritura humana para añadir voz, ejemplos reales y datos verificados, 6) optimización SEO on-page, 7) revisión final con Grammarly o LanguageTool. Tiempo total: 90–120 minutos por artículo de 1500 palabras.",
        tip: "Google penaliza contenido 100% IA sin edición humana. La edición es lo que cobras, no el primer borrador.",
        tool: "ChatGPT + Grammarly + SurferSEO o NeuronWriter",
      },
      {
        title: "Cierra contratos mensuales, no piezas sueltas",
        detail:
          "Las piezas sueltas son agotadoras y mal pagadas. Ofrece paquetes mensuales: 4 artículos SEO + 8 newsletters al mes a una tarifa fija que refleje el tiempo y la consistencia que aportas. Prospecta así: identifica 50 empresas en tu nicho con blog desactualizado (último post hace >3 meses), envía email personalizado con auditoría rápida y propuesta concreta de calendario editorial para 3 meses.",
        tip: "Pide siempre un 30–50% de anticipo y firma un acuerdo simple por email. Sin anticipo, sin trabajo.",
        tool: "Upwork + Contra + LinkedIn Sales Navigator (trial)",
      },
    ],
  },
  {
    id: "c",
    label: "Ruta C · Micro-Agencia Web",
    short: "Landings y sitios pro en 48–72 horas",
    icon: Globe,
    steps: [
      {
        title: "Define un servicio empaquetado, no 'hago páginas web'",
        detail:
          "Vende UN producto claro: 'Landing de captación para [restaurante/abogado/clínica/estudio] entregada en 48h, precio fijo cerrado'. Cuanto más específico, más fácil de vender. Crea una página de aterrizaje propia con 3 ejemplos del antes/después, testimonios (aunque sean de amigos al principio) y un calendario Calendly para reservar llamada.",
        tip: "Cobrar un precio fijo por landing entregada en 48h es mucho más rentable que cobrar por una web 'completa' que nunca termina.",
        tool: "Lovable + Framer + Calendly",
      },
      {
        title: "Crea 3 plantillas reutilizables y un proceso de entrega",
        detail:
          "Construye una plantilla por vertical (restaurante, profesional de salud, e-commerce básico). Cada plantilla incluye: hero con reserva/CTA, bloque de servicios o menú, testimonios, mapa y contacto, integración con WhatsApp Business y formulario que envía al email del cliente. Documenta tu proceso en un Notion: cuestionario inicial al cliente → diseño en 24h → revisión → publicación. Así puedes entregar en 48h sin morir.",
        tip: "Cobra una cuota mensual extra por mantenimiento, hosting gestionado y cambios menores — así creas ingresos recurrentes que valen el poco tiempo que les dedicas.",
        tool: "Lovable + Notion (proceso) + Unsplash + Cloudflare",
      },
      {
        title: "Prospecta a negocios locales sin presencia digital",
        detail:
          "Abre Google Maps en tu ciudad. Filtra por categorías (peluquerías, dentistas, restaurantes, abogados). Identifica los que tienen ficha pero NO web (o web vieja de 2015). Envía un mensaje por WhatsApp Business o Instagram DM: 'Hola, vi que [Negocio] no tiene web. Hice una demo gratuita para ti, ¿te la enseño en 5 min?'. Lleva la demo pre-construida con su logo y datos. Cierre típico: 1 de cada 10–15 contactos.",
        tip: "Los negocios locales pagan en efectivo o transferencia inmediata, sin burocracia. Ideal para empezar facturando rápido.",
        tool: "Google Maps + Instagram DM + WhatsApp Business",
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
            Paso a paso
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Rutas de <span className="text-accent">Monetización</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Tres modelos reales y probados. Elige uno, sigue los pasos con detalle y empieza esta semana.
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
                      <p className="mt-2 text-sm leading-relaxed text-foreground/80">{s.detail}</p>
                      <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span><span className="font-semibold text-foreground">Tip pro:</span> {s.tip}</span>
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-xs">
                        <Wrench className="h-3.5 w-3.5 text-primary" />
                        <span className="text-muted-foreground">Herramientas:</span>
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
