import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "Texto" | "Imagen/Video" | "Productividad";
type Tool = { name: string; desc: string; useCase: string; note: string; category: Category; gradient: string; url: string };

const TOOLS: Tool[] = [
  { name: "ChatGPT", desc: "El asistente IA más versátil para escribir, codear y planear.", useCase: "Para qué sirve: redactar correos, generar ideas, resumir documentos largos y resolver dudas técnicas al instante.", note: "Nota del editor: imprescindible para cualquiera que empiece. La versión gratuita ya resuelve el 80% de las tareas diarias.", category: "Texto", gradient: "from-emerald-500 to-teal-600", url: "https://chat.openai.com/" },
  { name: "Claude", desc: "Razonamiento profundo y textos largos de altísima calidad.", useCase: "Para qué sirve: analizar PDFs de 100+ páginas, redactar artículos extensos y revisar contratos sin perder el hilo.", note: "Ideal si redactas artículos largos, informes o contratos: mantiene el contexto mejor que cualquier otro modelo.", category: "Texto", gradient: "from-orange-500 to-amber-600", url: "https://claude.ai/" },
  { name: "Perplexity", desc: "Búsqueda con IA y fuentes citadas en tiempo real.", useCase: "Para qué sirve: investigar temas actuales con fuentes verificables, ideal para periodistas, estudiantes y analistas.", note: "Reemplaza a Google cuando necesitas respuestas verificadas con fuentes — perfecto para research serio.", category: "Texto", gradient: "from-sky-500 to-cyan-600", url: "https://www.perplexity.ai/" },
  { name: "Midjourney", desc: "Imágenes artísticas de calidad cinemática en segundos.", useCase: "Para qué sirve: crear portadas, ilustraciones y conceptos visuales para marcas con estética profesional.", note: "El estándar de oro para imágenes con estética profesional. Curva de aprendizaje media; los resultados valen la pena.", category: "Imagen/Video", gradient: "from-fuchsia-500 to-purple-600", url: "https://www.midjourney.com/" },
  { name: "Leonardo AI", desc: "Generador de imágenes gratis ideal para creadores.", useCase: "Para qué sirve: generar thumbnails para YouTube, ilustraciones para blogs y arte conceptual sin pagar suscripción.", note: "Mejor alternativa gratuita a Midjourney. Recomendada si todavía no quieres pagar suscripción mensual.", category: "Imagen/Video", gradient: "from-indigo-500 to-violet-600", url: "https://leonardo.ai/" },
  { name: "Runway", desc: "Edición y generación de video con IA de nivel profesional.", useCase: "Para qué sirve: generar clips de video desde texto, quitar fondos y aplicar efectos cinematográficos sin After Effects.", note: "Para creadores que ya manejan edición básica y quieren dar el salto a efectos cinematográficos con IA.", category: "Imagen/Video", gradient: "from-rose-500 to-pink-600", url: "https://runwayml.com/" },
  { name: "ElevenLabs", desc: "Voces ultra realistas en cualquier idioma con un clic.", useCase: "Para qué sirve: narrar videos faceless, doblar contenido y crear audiolibros con voces que parecen humanas.", note: "La mejor voz IA del mercado en español. Indispensable para faceless channels y audiolibros.", category: "Imagen/Video", gradient: "from-yellow-500 to-orange-600", url: "https://elevenlabs.io/" },
  { name: "CapCut", desc: "Editor de video con IA, voces realistas y plantillas virales.", useCase: "Para qué sirve: la mejor IA para subtitular automáticamente y editar videos virales para TikTok y Reels en un clic.", note: "Nota del editor: es la mejor aplicación gratuita para editar desde el celular si estás empezando. No necesitas experiencia previa.", category: "Imagen/Video", gradient: "from-slate-700 to-zinc-900", url: "https://www.capcut.com/" },
  { name: "Notion AI", desc: "Organiza notas, tareas y proyectos con asistente integrado.", useCase: "Para qué sirve: convertir notas desordenadas en documentos claros, planificar proyectos y resumir reuniones.", note: "Si ya usas Notion, la IA integrada ahorra horas cada semana. Si no, empieza por la versión gratuita normal.", category: "Productividad", gradient: "from-slate-500 to-zinc-700", url: "https://www.notion.so/product/ai" },
  { name: "Zapier", desc: "Automatiza flujos entre 5000+ apps sin escribir código.", useCase: "Para qué sirve: conectar Gmail con Sheets, enviar leads de un formulario a tu CRM o publicar en redes automáticamente.", note: "Para nivel intermedio. Empieza cuando ya tengas un proceso repetitivo claro que te robe horas a la semana.", category: "Productividad", gradient: "from-orange-600 to-red-600", url: "https://zapier.com/" },
  { name: "Gamma", desc: "Presentaciones, sitios y documentos con IA en minutos.", useCase: "Para qué sirve: crear pitch decks, propuestas para clientes y mini-webs en minutos, sin saber diseño.", note: "La forma más rápida de crear una presentación decente sin saber diseño. Salva pitches en horas.", category: "Productividad", gradient: "from-purple-500 to-pink-600", url: "https://gamma.app/" },
  { name: "Lovable", desc: "Apps web completas describiendo lo que quieres construir.", useCase: "Para qué sirve: construir landing pages, MVPs y apps con base de datos describiendo en español lo que necesitas.", note: "Ideal si ya dominas lo básico y quieres subir de nivel creando apps y bases de datos reales sin programar.", category: "Productividad", gradient: "from-violet-500 to-fuchsia-600", url: "https://lovable.dev/" },
  { name: "Canva AI", desc: "Diseño gráfico todo-en-uno con magia IA integrada.", useCase: "Para qué sirve: diseñar posts de redes, presentaciones y material de marketing en minutos con plantillas listas.", note: "El más fácil de usar de toda la lista. Perfecto si nunca has tocado un editor de diseño.", category: "Imagen/Video", gradient: "from-cyan-500 to-blue-600", url: "https://www.canva.com/ai/" },
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
            Directorio
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
              <p className="mt-2 text-xs font-medium leading-relaxed text-foreground/90">
                <span className="font-bold text-primary">{tool.useCase.split(":")[0]}:</span>{tool.useCase.split(":").slice(1).join(":")}
              </p>
              <p className="mt-3 flex-1 rounded-lg border border-accent/20 bg-accent/5 p-3 text-xs italic leading-relaxed text-foreground/80">
                💡 {tool.note}
              </p>
              <a
                href={tool.url}
                target="_blank"
                rel="sponsored noopener noreferrer"
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
