import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { name: string; url: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Migas de pan"
      className="mx-auto mb-6 max-w-3xl text-xs text-muted-foreground"
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          const path = it.url.replace(/^https?:\/\/[^/]+/, "") || "/";
          return (
            <li key={it.url} className="flex items-center gap-1.5">
              {i === 0 && <Home className="h-3 w-3" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground/80">
                  {it.name}
                </span>
              ) : (
                <Link to={path} className="transition-colors hover:text-foreground">
                  {it.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
