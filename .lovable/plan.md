# Ruta IA: Aprende y Gana — Plan

Single-page app en `src/routes/index.tsx` con tema oscuro (gris muy oscuro + acentos morado neón y verde brillante).

## Diseño / tokens

Actualizar `src/styles.css`:
- Forzar modo oscuro por defecto (aplicar clase `dark` en el `<html>` desde `__root.tsx`).
- Fondo base ~ `oklch(0.16 0.01 270)`, superficie cards `oklch(0.20 0.012 270)`.
- `--primary` morado neón `oklch(0.65 0.28 295)` con `--primary-glow`.
- `--accent` verde brillante `oklch(0.82 0.22 145)` para CTAs.
- Gradientes y sombras: `--gradient-primary`, `--shadow-glow`.
- Tipografía: Inter (cargada con `<link>` en `__root.tsx`).
- SEO: title, description, og tags en `index.tsx` head().

## Estructura de componentes

Todo en `src/routes/index.tsx` + componentes pequeños en `src/components/landing/`:

```
landing/
  Navbar.tsx          // logo + anclas (Probador, Rutas, Herramientas)
  Hero.tsx            // título XL + subtítulo + CTA (scroll a #probador)
  PromptTester.tsx    // Sección 1
  MonetizationRoutes.tsx // Sección 2 (Tabs)
  ToolsDirectory.tsx  // Sección 3 (filtro por categoría)
  AdSlot.tsx          // banner punteado reutilizable
  Footer.tsx
```

### 1. Hero
- H1 enorme con gradiente morado→verde: "Domina la IA y Activa tus Fuentes de Ingreso".
- Subtítulo y botón `accent` con glow → `scrollIntoView` a `#probador`.

### 2. Probador de Prompts (`PromptTester`)
- shadcn `Select` con 4 ocupaciones.
- Estado local → renderiza `Card` con prompt específico (textos hardcodeados en un objeto).
- Botón "Copiar Prompt" → `navigator.clipboard.writeText` + toast sonner "¡Copiado!".

### 3. Rutas de Monetización (`MonetizationRoutes`)
- shadcn `Tabs` con 3 rutas (Creador Express, Redactor Freelance, Micro-Agencia Web).
- Cada tab: lista vertical de 3 pasos numerados con badge, tip y herramienta recomendada.
- `AdSlot` integrado entre pasos.

### 4. Directorio de Herramientas (`ToolsDirectory`)
- Botones de filtro (Todas / Texto / Imagen-Video / Productividad).
- Grid responsive de cards: nombre, logo simulado (inicial en círculo con gradiente), descripción 1 línea, botón "Probar Gratis ↗" (link `#` con `rel="sponsored noopener"`).
- ~9–12 herramientas (ChatGPT, Claude, Midjourney, Runway, Notion AI, Perplexity, etc.).

### 5. AdSlots
- Componente con borde punteado, texto "Espacio Publicitario Google AdSense".
- Uno en sidebar sticky (visible solo `lg:` junto al Probador) y uno entre pasos de monetización.

## Responsividad
- Layout mobile-first; navbar colapsa a iconos; grids `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- Sidebar publicitaria solo `lg+`; en móvil, banner full-width.

## Técnico
- TanStack Start, sin nuevas dependencias (sonner, shadcn Tabs/Select/Card/Button ya disponibles).
- Sin backend / Cloud (no se requiere persistencia).
- Scroll suave: `html { scroll-behavior: smooth }` en styles.css.

## Entregable
Una sola pasada de build: tokens en styles.css, dark mode forzado en `__root.tsx`, head SEO + componentes en `index.tsx`, 6 archivos nuevos en `src/components/landing/`.
