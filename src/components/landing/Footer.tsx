import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ruta IA · Aprende y Gana. Todos los derechos reservados.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <Link
            to="/politica-de-privacidad"
            className="transition-colors hover:text-foreground"
          >
            Política de Privacidad
          </Link>
          <span>
            Creado por{" "}
            <a
              href="https://willaty26.github.io/Alexoscp/"
              target="_blank"
              rel="author noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-accent transition-colors hover:text-primary"
              title="Visita la página de Alexos CP"
            >
              Alexos CP
              <ExternalLink className="h-3 w-3" />
            </a>
          </span>
        </nav>
      </div>
    </footer>
  );
}
