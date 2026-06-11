import { useState } from "react";
import { toast } from "sonner";
import { Copy, Wand2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdSlot } from "./AdSlot";

const PROMPTS: Record<string, { title: string; prompt: string }> = {
  estudiante: {
    title: "Para Estudiantes",
    prompt:
      "Actúa como mi tutor personal experto en [MATERIA]. Explícame el tema '[TEMA]' como si tuviera 15 años, usando 3 analogías de la vida diaria. Luego, genérame 5 preguntas tipo examen con sus respuestas explicadas y un mini-resumen de 5 puntos clave para memorizar.",
  },
  emprendedor: {
    title: "Para Emprendedores",
    prompt:
      "Eres un consultor de negocios senior. Analiza la siguiente idea: '[DESCRIBE TU IDEA]'. Dame: 1) Validación del mercado (mini-análisis FODA), 2) 3 modelos de monetización viables, 3) Tu MVP en 7 días, 4) Los 5 primeros pasos accionables esta semana, y 5) Las métricas clave que debo medir.",
  },
  creador: {
    title: "Para Creadores de Contenido",
    prompt:
      "Actúa como estratega viral de contenido. Mi nicho es '[NICHO]'. Genérame 10 ideas de videos cortos (TikTok/Reels) con: hook de 3 segundos, guion de 30s, CTA y hashtags optimizados. Marca cuáles tienen mayor potencial viral y por qué.",
  },
  freelance: {
    title: "Para Freelancers",
    prompt:
      "Eres un coach experto en freelancing con IA. Quiero ofrecer servicios de '[SERVICIO]'. Crea: 1) Mi propuesta de valor en 2 frases, 2) 3 paquetes de precios (básico/pro/premium) con entregables, 3) Plantilla de cold email para conseguir mi primer cliente, 4) 5 plataformas donde encontrar clientes hoy.",
  },
};

const OPTIONS = [
  { value: "estudiante", label: "Soy Estudiante" },
  { value: "emprendedor", label: "Soy Emprendedor" },
  { value: "creador", label: "Soy Creador de Contenido" },
  { value: "freelance", label: "Busco Trabajo Freelance" },
];

export function PromptTester() {
  const [selected, setSelected] = useState<string>("");
  const current = selected ? PROMPTS[selected] : null;

  const copy = async () => {
    if (!current) return;
    try {
      await navigator.clipboard.writeText(current.prompt);
      toast.success("¡Copiado!", { description: "Pégalo en ChatGPT y reemplaza los [campos]." });
    } catch {
      toast.error("No se pudo copiar");
    }
  };

  return (
    <section id="probador" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Sección 01 · Interactivo
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            El Probador de <span className="text-primary">Prompts</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Elige tu perfil y recibe un prompt optimizado de ChatGPT listo para copiar.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              ¿Cuál es tu perfil?
            </label>
            <div className="mt-2">
              <Select value={selected} onValueChange={setSelected}>
                <SelectTrigger className="h-12 w-full bg-secondary text-base">
                  <SelectValue placeholder="Selecciona una opción..." />
                </SelectTrigger>
                <SelectContent>
                  {OPTIONS.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-6 min-h-[280px]">
              {current ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-5 duration-300">
                  <div className="mb-3 flex items-center gap-2">
                    <Wand2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold text-primary">{current.title}</span>
                  </div>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                    {current.prompt}
                  </p>
                  <button
                    onClick={copy}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-all hover:scale-[1.02] hover:brightness-110 sm:w-auto"
                  >
                    <Copy className="h-4 w-4" />
                    Copiar Prompt
                  </button>
                </div>
              ) : (
                <div className="flex h-[280px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 p-6 text-center">
                  <Wand2 className="h-8 w-8 text-muted-foreground" />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Selecciona tu perfil para revelar un prompt personalizado.
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="hidden lg:block">
            <AdSlot height="h-full min-h-[420px]" label="Anuncio · 300x600" />
          </aside>
        </div>
      </div>
    </section>
  );
}
