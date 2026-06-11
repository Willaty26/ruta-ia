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
    </footer>
  );
}
