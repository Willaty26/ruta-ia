import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Ruta IA" },
      {
        name: "description",
        content:
          "Conoce cómo Ruta IA (rutadeia.com) recopila, utiliza y protege tu información cuando visitas la plataforma.",
      },
      { property: "og:title", content: "Política de Privacidad — Ruta IA" },
      {
        property: "og:description",
        content:
          "Política de privacidad de rutadeia.com: cookies, afiliados, protección de datos y contacto.",
      },
      { property: "og:url", content: "https://rutadeia.com/politica-de-privacidad" },
    ],
    links: [
      { rel: "canonical", href: "https://rutadeia.com/politica-de-privacidad" },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <p className="text-base leading-relaxed text-muted-foreground">{children}</p>
    </section>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-16 sm:px-6">
        <article className="mx-auto max-w-3xl space-y-10">
          <header className="space-y-3">
            <Link
              to="/"
              className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Volver al inicio
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="text-sm text-muted-foreground">Última actualización: Junio 2026</p>
          </header>

          <p className="text-base leading-relaxed text-muted-foreground">
            En rutadeia.com (en adelante, "el Sitio"), respetamos su privacidad y nos
            comprometemos a proteger los datos personales que pueda compartir con nosotros.
            Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos
            su información cuando visita nuestra plataforma.
          </p>

          <Section title="1. Información que recopilamos">
            No solicitamos registros obligatorios ni datos personales sensibles para
            navegar por nuestro sitio interactivo. Sin embargo, podemos recopilar
            información no identificable automáticamente, como su tipo de navegador,
            dirección IP de forma anónima y las páginas que visita, con el único fin de
            mejorar la experiencia del usuario.
          </Section>

          <Section title="2. Cookies y tecnologías de seguimiento">
            Utilizamos "cookies" para personalizar su experiencia y analizar nuestro
            tráfico web. Además, este sitio web tiene la intención de mostrar anuncios
            publicitarios a través de redes como Google AdSense y plataformas similares.
            Estas empresas de terceros pueden utilizar cookies para mostrar anuncios
            basados en sus visitas previas a este u otros sitios web de internet. Los
            usuarios pueden inhabilitar el uso de la cookie de publicidad basada en
            intereses visitando la configuración de anuncios de Google.
          </Section>

          <Section title="3. Enlaces de afiliados y terceros">
            Nuestro sitio web participa en programas de marketing de afiliados
            (incluyendo el Programa de Afiliados de Amazon y CapCut, entre otros). Esto
            significa que si usted hace clic en ciertos enlaces de herramientas
            recomendadas y realiza una compra, podemos recibir una comisión sin ningún
            costo adicional para usted. No nos hacemos responsables de las políticas de
            privacidad o el contenido de esos sitios web externos de terceros.
          </Section>

          <Section title="4. Protección de la información">
            Implementamos medidas de seguridad digitales estándar a través de nuestro
            proveedor de infraestructura (Cloudflare) para mantener su información
            protegida de accesos no autorizados.
          </Section>

          <Section title="5. Contacto">
            Si tiene alguna pregunta sobre esta Política de Privacidad, puede
            contactarnos a través de los canales oficiales mostrados en este sitio web.
          </Section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
