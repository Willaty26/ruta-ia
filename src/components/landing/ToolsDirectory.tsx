import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "Texto" | "Imagen/Video" | "Productividad";
type Tool = { name: string; desc: string; note: string; category: Category; gradient: string; url: string };

const TOOLS: Tool[] = [
  { name: "ChatGPT", desc: "El asistente IA más versátil para escribir, codear y planear.", note: "Nota del editor: imprescindible para cualquiera que empiece. La versión gratuita ya resuelve el 80% de las tareas diarias.", category: "Texto", gradient: "from-emerald-500 to-teal-600", url: "#" },
  { name: "Claude", desc: "Razonamiento profundo y textos largos de altísima calidad.", note: "Ideal si redactas artículos largos, informes o contratos: mantiene el contexto mejor que cualquier otro modelo.", category: "Texto", gradient: "from-orange-500 to-amber-600", url: "#" },
  { name: "Perplexity", desc: "Búsqueda con IA y fuentes citadas en tiempo real.", note: "Reemplaza a Google cuando necesitas respuestas verificadas con fuentes — perfecto para research serio.", category: "Texto", gradient: "from-sky-500 to-cyan-600", url: "#" },
  { name: "Midjourney", desc: "Imágenes artísticas de calidad cinemática en segundos.", note: "El estándar de oro para imágenes con estética profesional. Curva de aprendizaje media; los resultados valen la pena.", category: "Imagen/Video", gradient: "from-fuchsia-500 to-purple-600", url: "#" },
  { name: "Leonardo AI", desc: "Generador de imágenes gratis ideal para creadores.", note: "Mejor alternativa gratuita a Midjourney. Recomendada si todavía no quieres pagar suscripción mensual.", category: "Imagen/Video", gradient: "from-indigo-500 to-violet-600", url: "#" },
  { name: "Runway", desc: "Edición y generación de video con IA de nivel profesional.", note: "Para creadores que ya manejan edición básica y quieren dar el salto a efectos cinematográficos con IA.", category: "Imagen/Video", gradient: "from-rose-500 to-pink-600", url: "#" },
  { name: "ElevenLabs", desc: "Voces ultra realistas en cualquier idioma con un clic.", note: "La mejor voz IA del mercado en español. Indispensable para faceless channels y audiolibros.", category: "Imagen/Video", gradient: "from-yellow-500 to-orange-600", url: "#" },
  { name: "CapCut", desc: "Editor de video con IA, voces realistas y plantillas virales.", note: "Nota del editor: es la mejor aplicación gratuita para editar desde el celular si estás empezando. No necesitas experiencia previa.", category: "Imagen/Video", gradient: "from-slate-700 to-zinc-900", url: "#" },
  { name: "Notion AI", desc: "Organiza notas, tareas y proyectos con asistente integrado.", note: "Si ya usas Notion, la IA integrada vale cada euro. Si no, empieza por la versión gratuita normal.", category: "Productividad", gradient: "from-slate-500 to-zinc-700", url: "#" },
  { name: "Zapier", desc: "Automatiza flujos entre 5000+ apps sin escribir código.", note: "Para nivel intermedio. Empieza cuando ya tengas un proceso repetitivo claro que te robe horas a la semana.", category: "Productividad", gradient: "from-orange-600 to-red-600", url: "#" },
  { name: "Gamma", desc: "Presentaciones, sitios y documentos con IA en minutos.", note: "La forma más rápida de crear una presentación decente sin saber diseño. Salva pitches en horas.", category: "Productividad", gradient: "from-purple-500 to-pink-600", url: "#" },
  { name: "Lovable", desc: "Apps web completas describiendo lo que quieres construir.", note: "Ideal si ya dominas lo básico y quieres subir de nivel creando apps y bases de datos reales sin programar.", category: "Productividad", gradient: "from-violet-500 to-fuchsia-600", url: "#" },
  { name: "Canva AI", desc: "Diseño gráfico todo-en-uno con magia IA integrada.", note: "El más fácil de usar de toda la lista. Perfecto si nunca has tocado un editor de diseño.", category: "Imagen/Video", gradient: "from-cyan-500 to-blue-600", url: "#" },
];

const FILTERS: Array<"Todas" | Category> = ["Todas", "Texto", "Imagen/Video", "Productividad"];

export function ToolsDirectory() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todas");
  const visible = TOOLS.filter((t) => filter === "Todas" || t.category === filter);

  return (
    <section id="herramientas" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Sección 03 · Directorio
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Herramientas <span className="text-primary">Premium</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Las apps de IA que usamos a diario. Pruébalas gratis y elige tus favoritas.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition-all",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow-primary)]"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tool) => (
            <article
              key={tool.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow-primary)]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-lg font-black text-white",
                    tool.gradient
                  )}
                >
                  {tool.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-foreground">{tool.name}</h3>
                  <span className="text-xs text-muted-foreground">{tool.category}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{tool.desc}</p>
              <p className="mt-3 flex-1 rounded-lg border border-accent/20 bg-accent/5 p-3 text-xs italic leading-relaxed text-foreground/80">
                💡 {tool.note}
              </p>
              <a
                href={tool.url}
                rel="sponsored noopener"
                className="mt-5 inline-flex items-center justify-center gap-1 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition-all hover:scale-[1.02] hover:brightness-110 group-hover:shadow-[var(--shadow-glow-accent)]"
              >
                Probar Gratis
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
