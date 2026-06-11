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
    title: "Para Estudiantes — Tutor personal con plan de estudio",
    prompt:
      `Actúa como mi tutor personal experto en [MATERIA], con 10 años enseñando a estudiantes de [NIVEL: secundaria / universidad / autodidacta].

Mi objetivo concreto es: [APROBAR EXAMEN / ENTENDER TEMA / HACER TRABAJO].
Tiempo disponible: [X horas/días].
Mi nivel actual sobre el tema '[TEMA]' es: [PRINCIPIANTE / INTERMEDIO / AVANZADO].

Necesito que me entregues, en este orden:

1) Explicación del tema en 3 niveles: como si tuviera 10 años, en lenguaje universitario y con su definición técnica formal.
2) 3 analogías de la vida diaria que conecten con el concepto.
3) Mapa mental en texto (formato bullets jerárquicos) con los 5 conceptos clave y sus relaciones.
4) Plan de estudio realista para mi tiempo disponible, dividido por sesiones de 25 min (técnica Pomodoro).
5) 10 preguntas tipo examen (5 fáciles, 3 medias, 2 difíciles) con sus respuestas explicadas paso a paso.
6) 3 errores típicos que cometen los estudiantes en este tema y cómo evitarlos.
7) Recursos extra recomendados (videos, libros, simuladores) en español.

Al final, hazme 2 preguntas para evaluar si realmente entendí el tema.`,
  },
  emprendedor: {
    title: "Para Emprendedores — Validación + MVP en 7 días",
    prompt:
      `Actúa como un consultor de negocios senior con experiencia lanzando 20+ startups bootstrapping (sin inversión externa).

Mi idea es: '[DESCRIBE TU IDEA EN 2 FRASES]'.
Mi presupuesto inicial: [X USD].
Tiempo disponible por semana: [X horas].
País / mercado objetivo: [PAÍS / NICHO].

Entrégame un plan de acción brutal y realista:

1) Análisis FODA en 4 bullets cortos (fortalezas, debilidades, oportunidades, amenazas reales del mercado actual).
2) Validación de demanda en 48h: 3 experimentos concretos que puedo hacer ESTA SEMANA sin gastar más de [X USD] (landing + ads, encuesta, pre-venta, comunidad).
3) Definición del MVP mínimo viable que puedo construir en 7 días con herramientas no-code (cuáles y por qué).
4) 3 modelos de monetización ordenados por facilidad de implementación, con precio sugerido en mi mercado.
5) Plan de los primeros 30 días dividido por semanas, con 1 objetivo medible por semana.
6) Las 5 métricas clave que debo medir desde el día 1 y dónde medirlas (gratis).
7) Los 3 errores más comunes que matan proyectos como este en los primeros 90 días.
8) Mi propuesta de valor reescrita en 1 frase, lista para usar en redes y landing.

Sé directo, sin relleno motivacional. Si la idea tiene un problema grave, dímelo.`,
  },
  creador: {
    title: "Para Creadores de Contenido — Sistema viral de 30 días",
    prompt:
      `Actúa como estratega de contenido viral con experiencia gestionando creadores que superan 1M de seguidores en TikTok, Reels y YouTube Shorts.

Mi nicho es: '[NICHO ESPECÍFICO]'.
Mi audiencia objetivo: [EDAD, INTERESES, PROBLEMA QUE RESUELVO].
Plataforma principal: [TIKTOK / REELS / SHORTS].
Tono de mi marca: [EDUCATIVO / DIVERTIDO / POLÉMICO / INSPIRADOR].

Diséñame un sistema completo:

1) 3 ángulos de contenido diferenciados dentro de mi nicho, con justificación de por qué cada uno tiene demanda en 2026.
2) 15 ideas de videos cortos (60–90 seg) divididas en 5 pilares: educativo, controversial, storytime, listas/tips, behind-the-scenes.
3) Para CADA idea: hook de 3 segundos (la primera frase exacta), estructura del guion en 5 beats, CTA final y 5 hashtags optimizados (mezcla amplios + nicho).
4) Calendario editorial de 30 días con frecuencia óptima de publicación según mi plataforma.
5) Formato de B-roll, cortes y subtítulos que retienen más en 2026 (con timestamps específicos).
6) 3 KPIs reales a medir (retención %, tasa de guardado, comentarios) con benchmarks de qué es 'bueno'.
7) 5 errores que matan el alcance hoy en día (shadowban, watermarks, audios baneados, etc.).
8) Plan de monetización por fases: 0–10K seguidores, 10K–100K y 100K+.

Marca con 🔥 las 3 ideas con mayor potencial viral y explica el porqué basándote en tendencias actuales.`,
  },
  freelance: {
    title: "Para Freelancers — De cero al primer cliente en 14 días",
    prompt:
      `Actúa como coach de freelancers con IA, especializado en ayudar a profesionales a conseguir su primer cliente bien pagado en menos de 14 días.

Quiero ofrecer servicios de: '[SERVICIO ESPECÍFICO]'.
Mi experiencia previa: [NINGUNA / HOBBY / PROFESIONAL EN OTRO CAMPO].
Horas semanales disponibles: [X].
Idiomas que hablo: [ESPAÑOL / INGLÉS / OTRO].
Meta de ingresos mensuales: [X USD/EUR].

Construye mi negocio freelance desde cero:

1) Propuesta de valor en 2 frases, diferenciada y específica (nada de 'ayudo a empresas a crecer').
2) Mi cliente ideal (ICP): industria, tamaño, cargo de quien contrata, dolor concreto que resuelvo.
3) 3 paquetes de precios (Básico / Pro / Premium) con entregables claros, plazos y precio en USD y EUR. Justifica los precios con el valor que entregan.
4) Portafolio mínimo viable: 3 proyectos demo que puedo crear en un fin de semana para mostrar capacidad sin tener clientes previos.
5) Plantilla de cold email (en español y en inglés) de máximo 100 palabras, con asunto que abre y CTA blando.
6) Plantilla de mensaje de LinkedIn para conectar + segundo mensaje de seguimiento 3 días después.
7) 5 plataformas para conseguir clientes HOY (Upwork, Contra, LinkedIn, Twitter/X, comunidades específicas) con tip concreto de cómo destacar en cada una.
8) Sistema de seguimiento: cómo organizar prospectos, cuántos contactos enviar al día, cuándo dejar de insistir.
9) Plantilla de propuesta comercial (estructura de 1 página) que cierre clientes sin parecer agresiva.
10) Errores legales y de cobro que arruinan a freelancers principiantes (contratos, anticipo, formas de pago internacional).

Termina con un plan accionable para los próximos 14 días, día por día.`,
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
            Elige tu perfil y recibe un prompt profesional, detallado y listo para copiar.
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
