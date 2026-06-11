import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PRIME_YOUNG_URL = "https://amzn.to/3QuXlBL";

export function PrimeYoungAd({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "mx-auto w-full max-w-[480px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl",
        className
      )}
      role="complementary"
      aria-label="Oferta Amazon Prime para jóvenes"
    >
      <div className="flex items-center gap-2 px-5 pb-2 pt-5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#00A8E1]" />
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
          Patrocinado • Oferta limitada
        </span>
      </div>

      <div className="px-5 pb-5">
        <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#232F3E]">
          Amazon Prime para <span className="text-[#00A8E1]">Jóvenes Adultos</span> — 6 meses gratis
        </h3>

        <p className="mb-4 text-[14px] leading-relaxed text-[#232F3E]">
          Si tienes entre <strong className="font-bold">18 y 24 años</strong> o eres estudiante:
          6 meses de prueba a <strong className="font-bold text-[#00A8E1]">$0</strong>, beneficios
          Prime completos y <strong className="font-bold">5% de cashback</strong> en productos
          elegibles (belleza, ropa, electrónica y más).
        </p>

        <a
          href={PRIME_YOUNG_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group flex w-full items-center justify-between rounded-lg bg-[#FF9900] px-4 py-3.5 shadow-sm transition-colors hover:bg-[#F29100]"
        >
          <span className="text-base font-bold text-[#232F3E]">Probar gratis</span>
          <ArrowRight className="h-5 w-5 text-[#232F3E] transition-transform group-hover:translate-x-1" />
        </a>

        <p className="mt-4 text-[11px] leading-snug text-gray-500">
          Después del trial, se renueva automáticamente a $7.49/mes (≈ mitad de precio que Prime
          estándar). Cancela cuando quieras. Aplican términos.
        </p>
      </div>
    </aside>
  );
}
