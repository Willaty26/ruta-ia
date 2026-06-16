## Objetivo
Añadir secciones de **FAQ visibles** + **JSON-LD `FAQPage`** (Schema.org) en las 4 guías existentes para conseguir rich snippets en Google (resultados con preguntas desplegables).

## Por qué importa
- Google muestra FAQs directamente en resultados → más CTR.
- Schema.org `FAQPage` es uno de los pocos rich results que siguen activos en 2026.
- Refuerza autoridad temática (long-tail keywords en formato pregunta).

## Páginas afectadas
1. `/guias/ganar-dinero-desde-casa-ia`
2. `/guias/prompts-chatgpt-ganar-dinero-2026`
3. `/guias/herramientas-ia-gratis-principiantes`
4. `/guias/freelance-con-ia-sin-experiencia`

## Qué se añadirá en cada guía

### A) Sección visible FAQ (UI)
Componente `<Accordion>` (ya disponible en shadcn) con 5–6 preguntas por guía. Diseño coherente con el resto: tarjeta con borde, fondo `card`, tipografía existente.

Ejemplo de preguntas por guía (adaptadas al contenido):

**Ganar dinero desde casa con IA**
- ¿Cuánto dinero se puede ganar realmente con IA desde casa?
- ¿Necesito experiencia técnica para empezar?
- ¿Qué método es el más rápido para generar ingresos?
- ¿Cuánto tiempo tarda en verse resultados?
- ¿Es legal usar contenido generado por IA para vender?

**Prompts ChatGPT**
- ¿Funcionan los prompts en la versión gratuita de ChatGPT?
- ¿Puedo modificar los prompts?
- ¿Cuál es el mejor prompt para empezar a ganar dinero?
- ¿Sirven también para Claude o Gemini?

**Herramientas IA gratis**
- ¿Las herramientas son 100% gratuitas?
- ¿Cuál recomiendan para principiantes absolutos?
- ¿Puedo usar el contenido generado comercialmente?
- ¿Necesito tarjeta de crédito para registrarme?

**Freelance con IA sin experiencia**
- ¿En cuánto tiempo conseguiré mi primer cliente?
- ¿Qué hago si no tengo portafolio?
- ¿Cuánto debo cobrar al principio?
- ¿Qué plataforma es mejor para empezar?

### B) JSON-LD `FAQPage` (invisible, para Google)
Se añade al array `scripts` del `head()` de cada ruta, junto al schema `Article` existente. Estructura estándar:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
}
```

Los textos del JSON-LD coinciden exactamente con los visibles en la UI (requisito de Google).

## Detalles técnicos
- Reutilizo `@/components/ui/accordion` (ya instalado).
- Las preguntas/respuestas se definen una sola vez por archivo y se usan tanto en la UI como en el JSON-LD (DRY, evita desincronización).
- No toco `sitemap.xml`, metadata existente ni otros archivos.
- Sin nuevas dependencias, sin migraciones.

## Lo que NO incluye
- No añade nuevas guías.
- No cambia el diseño global ni colores.
- No modifica el home ni el header.
