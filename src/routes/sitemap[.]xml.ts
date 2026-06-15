import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://rutadeia.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/news", changefreq: "daily", priority: "0.9" },
          { path: "/guias/ganar-dinero-desde-casa-ia", changefreq: "monthly", priority: "0.8" },
          { path: "/guias/prompts-chatgpt-ganar-dinero-2026", changefreq: "monthly", priority: "0.8" },
          { path: "/guias/herramientas-ia-gratis-principiantes", changefreq: "monthly", priority: "0.8" },
          { path: "/guias/freelance-con-ia-sin-experiencia", changefreq: "monthly", priority: "0.8" },
          { path: "/politica-de-privacidad", changefreq: "yearly", priority: "0.3" },
        ];


        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
