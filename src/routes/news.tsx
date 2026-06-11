import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ExternalLink, RefreshCw, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AdSlot } from "@/components/landing/AdSlot";
import { getAINews, type NewsArticle, type NewsPayload } from "@/lib/news.functions";

const newsQueryOptions = queryOptions<NewsPayload>({
  queryKey: ["ai-news"],
  queryFn: () => getAINews(),
  staleTime: 1000 * 60 * 30, // 30 min en cliente
});

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "IA al Día: Noticias y Datos Fascinantes — Ruta IA" },
      {
        name: "description",
        content:
          "Últimas noticias y curiosidades reales sobre Inteligencia Artificial, actualizadas automáticamente con fuentes verificables.",
      },
      { property: "og:title", content: "IA al Día — Noticias y Datos Fascinantes" },
      {
        property: "og:description",
        content:
          "Noticias reales y curiosidades de IA actualizadas cada pocas horas con enlaces a la fuente original.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rutadeia.com/news" },
    ],
    links: [{ rel: "canonical", href: "https://rutadeia.com/news" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(newsQueryOptions),
  component: NewsPage,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">No pudimos cargar las noticias</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
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
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary">
            {article.category}
          </Badge>
          <span className="truncate text-xs text-muted-foreground">{article.source}</span>
        </div>
        <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{article.description}</p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Leer fuente
          </a>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => shareArticle(article)}
            className="text-muted-foreground hover:text-primary"
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

function NewsPage() {
  const fetchNews = useServerFn(getAINews);
  const { data, refetch, isFetching } = useSuspenseQuery({
    ...newsQueryOptions,
    queryFn: () => fetchNews(),
  });

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
            IA al Día: Noticias y Datos Fascinantes
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
            {data.news.length === 0 ? (
              <p className="text-center text-muted-foreground">Sin noticias por el momento.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.news.map((a) => (
                  <ArticleCard key={a.url} article={a} />
                ))}
              </div>
            )}
            <AdSlot />
          </TabsContent>

          <TabsContent value="curiosas" className="mt-8 space-y-8">
            {data.curious.length === 0 ? (
              <p className="text-center text-muted-foreground">Sin curiosidades por el momento.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {data.curious.map((a) => (
                  <ArticleCard key={a.url} article={a} />
                ))}
              </div>
            )}
            <AdSlot />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
