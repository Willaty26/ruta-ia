import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQS = [
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

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Sección 05 · Resuelve tus dudas
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Las dudas más comunes antes de empezar tu ruta con IA.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-border bg-card p-2 shadow-xl"
        >
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border last:border-b-0"
            >
              <AccordionTrigger className="px-4 text-left text-sm font-semibold hover:no-underline sm:text-base">
                <span className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pl-11 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            ¿Aún tienes dudas? Empieza la ruta gratis y descúbrelo por ti mismo.
          </p>
          <button
            onClick={() =>
              document.getElementById("probador")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-all hover:scale-105 hover:brightness-110"
          >
            Empezar Mi Ruta Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
