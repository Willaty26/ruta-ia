import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, RefreshCw, Share2 } from "lucide-react";
import { toast } from "sonner";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AdSlot } from "@/components/landing/AdSlot";
import { getAINews, type NewsArticle, type NewsPayload } from "@/lib/news.functions";

const PAGE_SIZE = 6;
const BASE_URL = "https://rutadeia.com/news";

const newsQueryOptions = queryOptions<NewsPayload>({
  queryKey: ["ai-news"],
  queryFn: () => getAINews(),
  staleTime: 1000 * 60 * 30, // 30 min en cliente
});

const newsSearchSchema = z.object({
  page: fallback(z.number().int().min(1), 1).default(1),
});

function pageUrl(page: number) {
  return page <= 1 ? BASE_URL : `${BASE_URL}?page=${page}`;
}

function paginate<T>(items: T[], page: number, size = PAGE_SIZE) {
  const totalPages = Math.max(1, Math.ceil(items.length / size));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * size;
  return {
    items: items.slice(start, start + size),
    page: safePage,
    totalPages,
    startIndex: start,
  };
}

export const Route = createFileRoute("/news")({
  validateSearch: zodValidator(newsSearchSchema),
  loaderDeps: ({ search }) => ({ page: search.page }),
  head: ({ loaderData, match }) => {
    const payload = loaderData as NewsPayload | undefined;
    const requestedPage =
      (match as { search?: { page?: number } } | undefined)?.search?.page ?? 1;
    const allArticles = [...(payload?.news ?? []), ...(payload?.curious ?? [])];
    const datePublished = payload?.fetchedAt ?? new Date().toISOString();

    const { items: pageItems, page, totalPages, startIndex } = paginate(allArticles, requestedPage);

    const canonical = pageUrl(page);
    const titleBase = "IA al Día: Noticias y Datos Fascinantes — Ruta IA";
    const title = page > 1 ? `${titleBase} (página ${page} de ${totalPages})` : titleBase;

    const scripts: Array<{ type: string; children: string }> = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          url: canonical,
          inLanguage: "es",
          description:
            "Últimas noticias y curiosidades reales sobre Inteligencia Artificial, actualizadas automáticamente.",
          isPartOf: { "@type": "WebSite", name: "Ruta IA", url: "https://rutadeia.com/" },
        }),
      },
    ];

    if (pageItems.length > 0) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Noticias de IA — página ${page} de ${totalPages}`,
          url: canonical,
          itemListOrder: "https://schema.org/ItemListOrderDescending",
          numberOfItems: pageItems.length,
          itemListElement: pageItems.map((a, i) => ({
            "@type": "ListItem",
            position: startIndex + i + 1,
            url: a.url,
            item: {
              "@type": "NewsArticle",
              headline: a.title,
              description: a.description,
              url: a.url,
              inLanguage: "es",
              datePublished,
              dateModified: datePublished,
              isAccessibleForFree: true,
              articleSection: a.category,
              mainEntityOfPage: { "@type": "WebPage", "@id": a.url },
              author: { "@type": "Organization", name: a.source },
              publisher: { "@type": "Organization", name: a.source },
            },
          })),
        }),
      });
    }

    const links: Array<{ rel: string; href: string }> = [
      { rel: "canonical", href: canonical },
    ];
    if (page > 1) links.push({ rel: "prev", href: pageUrl(page - 1) });
    if (page < totalPages) links.push({ rel: "next", href: pageUrl(page + 1) });

    return {
      meta: [
        { title },
        {
          name: "description",
          content:
            "Últimas noticias y curiosidades reales sobre Inteligencia Artificial, actualizadas automáticamente con fuentes verificables.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content:
            "Noticias reales y curiosidades de IA actualizadas cada pocas horas con enlaces a la fuente original.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
      ],
      links,
      scripts,
    };
  },
  loader: ({ context }) => context.queryClient.ensureQueryData(newsQueryOptions),
  component: NewsPage,
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">No pudimos cargar las noticias</h1>
      <p className="mt-3 text-muted-foreground">
        Algo salió mal. Inténtalo de nuevo más tarde.
      </p>
      <Link to="/" className="mt-6 inline-block text-primary underline">
        Volver al inicio
      </Link>
    </div>
  ),
});

function shareArticle(article: NewsArticle) {
  const text = `${article.title} — vía Ruta IA`;
  if (
    typeof navigator !== "undefined" &&
    (navigator as Navigator & { share?: (d: ShareData) => Promise<void> }).share
  ) {
    (navigator as Navigator & { share: (d: ShareData) => Promise<void> })
      .share({ title: article.title, text, url: article.url })
      .catch(() => {});
  } else if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(`${text} ${article.url}`);
    toast.success("Enlace copiado al portapapeles");
  }
}

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <Card className="group flex h-full flex-col border-border/60 bg-card/60 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary text-sm">
            {article.category}
          </Badge>
          <span className="truncate text-sm text-muted-foreground">{article.source}</span>
        </div>
        <CardTitle className="text-xl leading-snug sm:text-2xl">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{article.description}</p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/20"
          >
            <ExternalLink className="h-4 w-4" />
            Leer fuente
          </a>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => shareArticle(article)}
            aria-label={`Compartir artículo: ${article.title}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            <Share2 className="mr-1.5 h-4 w-4" />
            Compartir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function formatFetchedAt(iso: string) {
  try {
    return new Date(iso).toLocaleString("es", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label="Paginación de noticias" className="flex items-center justify-center gap-3 pt-2">
      <Button asChild variant="outline" size="sm" disabled={page <= 1} className="gap-1">
        <Link
          to="/news"
          search={{ page: Math.max(1, page - 1) }}
          aria-disabled={page <= 1}
          rel="prev"
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </Link>
      </Button>
      <span className="text-sm font-medium text-muted-foreground">
        Página <strong className="text-foreground">{page}</strong> de {totalPages}
      </span>
      <Button asChild variant="outline" size="sm" disabled={page >= totalPages} className="gap-1">
        <Link
          to="/news"
          search={{ page: Math.min(totalPages, page + 1) }}
          aria-disabled={page >= totalPages}
          rel="next"
        >
          Siguiente
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </nav>
  );
}

function NewsPage() {
  const fetchNews = useServerFn(getAINews);
  const { page } = Route.useSearch();
  const { data, refetch, isFetching } = useSuspenseQuery({
    ...newsQueryOptions,
    queryFn: () => fetchNews(),
  });

  const newsPaged = paginate(data.news, page);
  const curiousPaged = paginate(data.curious, page);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card/40 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <header className="mt-8 text-center">
          <h1 className="bg-[var(--gradient-primary)] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Actualidad y Noticias de IA — Ruta IA
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Titulares reales extraídos de la web, con enlace a la fuente original. Se actualiza solo cada pocas horas.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span>
              Última actualización: <strong className="text-foreground">{formatFetchedAt(data.fetchedAt)}</strong>
              {data.stale ? " (caché)" : ""}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => refetch()}
              disabled={isFetching}
              className="h-7 px-2 text-xs"
            >
              <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${isFetching ? "animate-spin" : ""}`} />
              Actualizar
            </Button>
          </div>
        </header>

        <Tabs defaultValue="ultima" className="mt-10">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="ultima">Última Hora</TabsTrigger>
            <TabsTrigger value="curiosas">Cosas Curiosas</TabsTrigger>
          </TabsList>

          <TabsContent value="ultima" className="mt-8 space-y-8">
            {newsPaged.items.length === 0 ? (
              <p className="text-center text-muted-foreground">Sin noticias por el momento.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {newsPaged.items.map((a) => (
                  <ArticleCard key={a.url} article={a} />
                ))}
              </div>
            )}
            <Pagination page={newsPaged.page} totalPages={newsPaged.totalPages} />
            <AdSlot label="📚 Libro recomendado en Amazon: domina la IA paso a paso" variant={0} />
          </TabsContent>

          <TabsContent value="curiosas" className="mt-8 space-y-8">
            {curiousPaged.items.length === 0 ? (
              <p className="text-center text-muted-foreground">Sin curiosidades por el momento.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {curiousPaged.items.map((a) => (
                  <ArticleCard key={a.url} article={a} />
                ))}
              </div>
            )}
            <Pagination page={curiousPaged.page} totalPages={curiousPaged.totalPages} />
            <AdSlot label="📘 Sigue aprendiendo: libro de IA destacado en Amazon" variant={1} />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
