export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ruta IA · Aprende y Gana. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground">
          Hecho con <span className="text-accent">IA</span> para emprendedores curiosos.
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-7xl text-center text-[10px] text-muted-foreground/60">
        Impact-Site-Verification: 2f3156e9-9239-4fcc-8f3f-f7d8b13fbb30
      </p>
    </footer>

  );
}
