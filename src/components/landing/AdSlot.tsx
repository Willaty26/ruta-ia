import { BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const AMAZON_LINKS = [
  "https://amzn.to/4v36XT9",
  "https://amzn.to/4xnfXEo",
] as const;

export function AdSlot({
  className,
  label = "Libro recomendado · Aprende más sobre IA",
  height = "h-32",
  href,
  variant = 0,
}: {
  className?: string;
  label?: string;
  height?: string;
  href?: string;
  variant?: 0 | 1;
}) {
  const url = href ?? AMAZON_LINKS[variant];
  return (
    <a
      href={url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={cn(
        "group flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/40 bg-card/40 px-6 text-center transition-all hover:border-primary hover:bg-primary/5 hover:shadow-[var(--shadow-glow)]",
        height,
        className
      )}
      aria-label="Enlace patrocinado a libro de Amazon"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
        <BookOpen className="h-4 w-4" />
        Recomendación · Amazon
      </div>
      <p className="text-sm font-medium text-foreground/90 group-hover:text-foreground">
        {label}
      </p>
      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary">
        Ver en Amazon
        <ExternalLink className="h-3 w-3" />
      </span>
    </a>
  );
}
