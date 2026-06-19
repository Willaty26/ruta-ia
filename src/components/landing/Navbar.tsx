import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import logoAsset from "@/assets/ruta-ia-logo.png.asset.json";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Ruta IA logo"
            width={36}
            height={36}
            decoding="async"
            fetchPriority="high"
            className="h-9 w-9 rounded-xl object-contain drop-shadow-[0_0_12px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
          />
          <span className="text-base font-extrabold tracking-tight">
            Ruta <span className="text-accent">IA</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#probador" className="transition-colors hover:text-foreground">Probador</a>
          <a href="#rutas" className="transition-colors hover:text-foreground">Rutas</a>
          <a href="#herramientas" className="transition-colors hover:text-foreground">Herramientas</a>
          <Link to="/news" className="transition-colors hover:text-foreground">IA al Día</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/20 md:hidden"
          >
            <Sparkles className="h-3.5 w-3.5" />
            News
          </Link>
          <a
            href="#probador"
            className="rounded-lg bg-accent px-3 py-2 text-xs font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-transform hover:scale-105"
          >
            Empezar
          </a>
        </div>
      </div>
    </header>
  );
}
