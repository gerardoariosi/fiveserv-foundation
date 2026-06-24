# Rediseño Global Estilo Stan's

Aplicar el lenguaje visual ya validado en la homepage (crema `#FAF8F3`, gold suave, más aire, pills, fotos reales con card overlay) a **todas las páginas internas** mediante componentes compartidos reutilizables.

## Fase 1 — Componentes compartidos (foundation)

Crear en `src/components/fiveserv/shared/`:

1. **`PageHero.tsx`** — Hero universal: foto de fondo + card crema overlay con eyebrow, H1, subtítulo, 2 CTAs y mini-trust row. Props: `image`, `eyebrow`, `title`, `subtitle`, `primaryCTA`, `secondaryCTA`.
2. **`TrustStrip.tsx`** — Strip crema con 4 stats configurables (default: 1,200+ jobs · 50+ PMs · 18 ciudades · 24/7). Props: `stats?`.
3. **`RelatedServicesPills.tsx`** — Sección con 6 pills tipo HeroServicePicker para cross-link entre servicios. Auto-excluye el servicio actual.
4. **`SectionWrapper.tsx`** — Wrapper con padding consistente (`py-20 sm:py-28`), alterna fondos `bg-white` / `bg-[#FAF8F3]`.
5. **`PageCTA.tsx`** — CTA final dorado unificado: "One call. One team. One invoice." + botón.

## Fase 2 — Páginas de servicio (10 páginas)

Aplicar el patrón a: Maintenance, Handyman, Bathroom Remodel, Kitchen Remodel, Painting, Flooring, Cleaning, Electrical, Plumbing, HVAC.

Estructura unificada por página:
```text
<PageHero image={serviceImage} ... />
<TrustStrip />
<ServiceFeatures />        ← existente, ajustar a paleta crema
<ProcessSteps />           ← existente, ajustar
<RelatedServicesPills />
<FAQ />                    ← existente
<PageCTA />
```

## Fase 3 — Páginas de ciudades (18 ciudades)

Refactor del template city → mismo patrón:
```text
<PageHero image={cityImage} title="Property Maintenance in {City}" />
<TrustStrip />
<ServicesInCity />
<LocalTestimonials />
<RelatedServicesPills />
<PageCTA />
```

Una sola edición del template afecta las 18 ciudades.

## Fase 4 — Páginas institucionales

- **About**: hero crema con foto del equipo, sección historia, valores en grid de 3 cards crema, trust strip, CTA.
- **Contact**: hero compacto + form en card crema a la izquierda + info contacto a la derecha.
- **Service Areas**: hero + grid de 18 cards de ciudades estilo pill grande.

## Fase 5 — Blog

- **Listing**: grid de cards estilo magazine con foto + categoría pill + título serif.
- **Article**: hero con foto cover + título grande, contenido con tipografía editorial (max-width prose).

## Orden de ejecución

Fase 1 → Fase 2 (una página primero para validar, luego batch) → Fase 3 → Fase 4 → Fase 5.

Te muestro la primera página de servicio (Maintenance) al terminar Fase 1+2 inicial para que apruebes el patrón antes de propagarlo al resto.

## Detalles técnicos

- Tokens: usar las CSS variables existentes (`--cream`, `--gold`, etc.). Si faltan, agregarlas a `index.css`.
- Sin tocar: SEO/Schema/llms.txt/index.html, lógica de negocio, rutas, formularios funcionales.
- Mobile-first: cada componente compartido se prueba a 390px antes de pasar al siguiente.
- Imágenes: reutilizar las existentes; si una página no tiene foto adecuada, marcar TODO en vez de generar nuevas (para no consumir créditos sin tu OK).

## Fuera de alcance

- Generación de imágenes nuevas (pregunto antes si una página lo necesita).
- Cambios de copy / contenido (solo visual).
- Cambios de rutas o estructura de navegación.
- Cambios de Schema.org, SEO meta, llms.txt, index.html.
