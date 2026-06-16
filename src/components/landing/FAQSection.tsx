import { ChevronDown, HelpCircle } from "lucide-react";

export type FAQItem = { q: string; a: string };

/**
 * FAQ sin JavaScript: usa <details>/<summary> nativos del navegador.
 * Elimina la dependencia de Radix Accordion en las guías, mejorando
 * TBT, INP y reduciendo JS enviado al móvil.
 */
export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <HelpCircle className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
          Preguntas frecuentes
        </h2>
      </div>
      <div className="divide-y divide-border">
        {items.map((item, i) => (
          <details key={i} className="group py-4 [&_svg.chev]:open:rotate-180">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold sm:text-lg">
              <span>{item.q}</span>
              <ChevronDown className="chev h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
