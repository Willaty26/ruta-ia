import logoAsset from "@/assets/ruta-ia-logo.png.asset.json";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Ruta IA logo"
            className="h-9 w-9 rounded-xl object-contain drop-shadow-[0_0_12px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
          />
          <span className="text-base font-extrabold tracking-tight">
            Ruta <span className="text-accent">IA</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#probador" className="transition-colors hover:text-foreground">Probador</a>
          <a href="#rutas" className="transition-colors hover:text-foreground">Rutas</a>
          <a href="#herramientas" className="transition-colors hover:text-foreground">Herramientas</a>
        </nav>
        <a
          href="#probador"
          className="rounded-lg bg-accent px-3 py-2 text-xs font-bold text-accent-foreground shadow-[var(--shadow-glow-accent)] transition-transform hover:scale-105"
        >
          Empezar
        </a>
      </div>
    </header>
  );
}
