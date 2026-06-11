import { createServerFn } from "@tanstack/react-start";

export type NewsArticle = {
  title: string;
  description: string;
  url: string;
  source: string;
  category: string;
};

export type NewsPayload = {
  news: NewsArticle[];
  curious: NewsArticle[];
  fetchedAt: string;
  stale: boolean;
};

type CacheEntry = { payload: NewsPayload; expiresAt: number };
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6 horas
let cache: CacheEntry | null = null;

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "fuente";
  }
}

type FirecrawlSearchItem = {
  url?: string;
  title?: string;
  description?: string;
};

async function firecrawlSearch(
  apiKey: string,
  query: string,
  opts: { limit?: number; tbs?: string } = {},
): Promise<FirecrawlSearchItem[]> {
  const res = await fetch("https://api.firecrawl.dev/v2/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      limit: opts.limit ?? 6,
      tbs: opts.tbs,
      lang: "es",
      sources: ["web", "news"],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Firecrawl error ${res.status}: ${body.slice(0, 200)}`);
  }

  const json = (await res.json()) as {
    data?: {
      web?: FirecrawlSearchItem[];
      news?: FirecrawlSearchItem[];
    };
  };

  const web = json.data?.web ?? [];
  const news = json.data?.news ?? [];
  return [...news, ...web];
}

function toArticles(items: FirecrawlSearchItem[], category: string, max: number): NewsArticle[] {
  const seen = new Set<string>();
  const out: NewsArticle[] = [];
  for (const it of items) {
    if (!it.url || !it.title) continue;
    const host = hostnameOf(it.url);
    if (seen.has(it.url)) continue;
    seen.add(it.url);
    out.push({
      title: it.title.trim(),
      description: (it.description ?? "").trim() || "Toca para leer la noticia completa en la fuente original.",
      url: it.url,
      source: host,
      category,
    });
    if (out.length >= max) break;
  }
  return out;
}

export const getAINews = createServerFn({ method: "GET" }).handler(async (): Promise<NewsPayload> => {
  const now = Date.now();
  if (cache && cache.expiresAt > now) {
    return cache.payload;
  }

  const apiKey = process.env.FIRECRAWL_API_KEY;
  if (!apiKey) {
    if (cache) return { ...cache.payload, stale: true };
    throw new Error("FIRECRAWL_API_KEY no está configurada");
  }

  try {
    const [newsItems, curiousItems] = await Promise.all([
      firecrawlSearch(apiKey, "últimas noticias inteligencia artificial OpenAI Google Anthropic", {
        limit: 8,
        tbs: "qdr:d",
      }),
      firecrawlSearch(apiKey, "datos curiosos y sorprendentes sobre inteligencia artificial 2026", {
        limit: 6,
        tbs: "qdr:w",
      }),
    ]);

    const payload: NewsPayload = {
      news: toArticles(newsItems, "Última Hora", 6),
      curious: toArticles(curiousItems, "Curiosidad", 4),
      fetchedAt: new Date().toISOString(),
      stale: false,
    };

    if (payload.news.length === 0 && payload.curious.length === 0) {
      throw new Error("Firecrawl devolvió 0 resultados");
    }

    cache = { payload, expiresAt: now + CACHE_TTL_MS };
    return payload;
  } catch (err) {
    console.error("[getAINews] Firecrawl falló:", err);
    if (cache) return { ...cache.payload, stale: true };
    throw err;
  }
});
