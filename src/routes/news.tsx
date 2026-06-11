import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AdSlot } from "@/components/landing/AdSlot";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "IA al Día: Noticias y Datos Fascinantes — Ruta IA" },
      {
        name: "description",
        content:
          "Últimas noticias y curiosidades sobre Inteligencia Artificial: Big Tech, modelos, infraestructura y datos sorprendentes.",
      },
      { property: "og:title", content: "IA al Día — Noticias y Datos Fascinantes" },
      {
        property: "og:description",
        content:
          "Noticias reales y curiosidades de IA actualizadas. Mantente al día con lo que mueve al mundo de la Inteligencia Artificial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rutadeia.com/news" },
    ],
    links: [{ rel: "canonical", href: "https://rutadeia.com/news" }],
  }),
  component: NewsPage,
});

type Article = {
  category: string;
  title: string;
  summary: string;
};

const NEWS: Article[] = [
  {
    category: "Big Tech",
    title: "Apple paga $1,000 millones al año a Google por integrar Gemini en Siri.",
    summary:
      "Durante el evento WWDC 2026, Tim Cook confirmó una alianza masiva donde Apple licenciará un modelo Gemini de 1.2 billones de parámetros para potenciar a Siri en el iPhone, abriendo además iMessage al ecosistema de Claude.",
  },
  {
    category: "Modelos",
    title: "Anthropic lanza su IA más potente pero con restricciones biológicas.",
    summary:
      "Anthropic liberó su nuevo modelo \"Mythos-Class\" al público general. Aunque es increíblemente rápido y avanzado, incluye fuertes bloqueos éticos y de ciberseguridad para evitar que sea usado en el desarrollo de riesgos biológicos.",
  },
  {
    category: "Infraestructura",
    title: "Google alquila 110,000 procesadores a SpaceX por falta de capacidad.",
    summary:
      "La demanda empresarial de Gemini superó las expectativas. Google firmó un acuerdo de $11,000 millones anuales con SpaceX para usar su infraestructura de servidores en órbita y no quedarse atrás en la carrera tecnológica.",
  },
];

const CURIOUS: Article[] = [
  {
    category: "Energía",
    title: "¿La IA destruirá el planeta? El dato energético que asusta.",
    summary:
      "La Agencia Internacional de Energía estima que los centros de datos de IA consumen el 4% de la electricidad mundial. ¡Eso equivale a toda la energía que consume el país de Japón en un año entero!",
  },
  {
    category: "Salud",
    title: "Diagnósticos médicos al 99% de precisión.",
    summary:
      "Actualmente hay sistemas de Inteligencia Artificial que logran interpretar mamografías e identificar señales tempranas de enfermedades con un 99% de precisión sin necesidad de dolorosas biopsias iniciales.",
  },
];

function shareArticle(article: Article) {
  const shareUrl = "https://rutadeia.com/news";
  const text = `${article.title} — vía Ruta IA`;
  if (typeof navigator !== "undefined" && (navigator as Navigator & { share?: (d: ShareData) => Promise<void> }).share) {
    (navigator as Navigator & { share: (d: ShareData) => Promise<void> })
      .share({ title: article.title, text, url: shareUrl })
      .catch(() => {});
  } else if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(`${text} ${shareUrl}`);
    toast.success("Enlace copiado al portapapeles");
  }
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="group flex h-full flex-col border-border/60 bg-card/60 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]">
      <CardHeader className="space-y-3">
        <Badge
          variant="outline"
          className="w-fit border-primary/40 bg-primary/10 text-primary"
        >
          {article.category}
        </Badge>
        <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => shareArticle(article)}
          className="w-fit text-muted-foreground hover:text-primary"
        >
          <Share2 className="mr-1.5 h-4 w-4" />
          Compartir noticia
        </Button>
      </CardContent>
    </Card>
  );
}

function NewsPage() {
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
            Lo más reciente del mundo de la Inteligencia Artificial y datos que te van a sorprender.
          </p>
        </header>

        <Tabs defaultValue="ultima" className="mt-10">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="ultima">Última Hora</TabsTrigger>
            <TabsTrigger value="curiosas">Cosas Curiosas</TabsTrigger>
          </TabsList>

          <TabsContent value="ultima" className="mt-8 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ArticleCard article={NEWS[0]} />
              <ArticleCard article={NEWS[1]} />
              <ArticleCard article={NEWS[2]} />
            </div>
            <AdSlot />
          </TabsContent>

          <TabsContent value="curiosas" className="mt-8 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <ArticleCard article={CURIOUS[0]} />
              <ArticleCard article={CURIOUS[1]} />
            </div>
            <AdSlot />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
