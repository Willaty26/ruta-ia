import { cn } from "@/lib/utils";

export function AdSlot({
  className,
  label = "Espacio Publicitario Google AdSense",
  height = "h-32",
}: {
  className?: string;
  label?: string;
  height?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-xl border-2 border-dashed border-border/70 bg-card/30 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",
        height,
        className
      )}
      role="complementary"
      aria-label="Anuncio"
    >
      {label}
    </div>
  );
}
