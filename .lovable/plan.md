# HVAC → AC Maintenance (con redirect)

Reemplazar el servicio "HVAC / AC Repair" por "AC Maintenance" (solo plan preventivo), con la nueva ruta `/ac-maintenance` y redirección desde `/hvac`.

## 1. Nueva página y ruta

- Crear `src/pages/AcMaintenancePage.tsx` (archivo nuevo, más limpio) y eliminar `src/pages/HvacPage.tsx`.
- Contenido:
  - Hero editorial negro/dorado con imagen de fondo `/images/cities/orlando.jpg`, título "AC Maintenance Plan", subtítulo corto y CTAs (quote + teléfono), en línea con el resto del sitio.
  - Debajo del hero: una sola sección placeholder "More info coming soon" con patrón FS y botón de contacto.
  - Sin checklist, sin sub-servicios, sin FAQs, sin ninguna mención a reparación de AC, reemplazo de sistema, refrigerante o ductos.
- `src/App.tsx`: registrar `/ac-maintenance` y cambiar `/hvac` por una redirección.

## 2. Redirect de /hvac

- Ruta `/hvac` → `<Navigate to="/ac-maintenance" replace />` (redirección permanente del lado del cliente; el canonical de la nueva página consolida la señal en Google).
- Nota técnica: el hosting de Lovable sirve una SPA y no permite un 301 real a nivel de servidor. Google trata este patrón (redirect JS + canonical) como redirección permanente y transfiere el ranking, solo que tarda algo más que un 301 puro.
- `public/sitemap.xml` / `scripts/generate-sitemap.mjs`: reemplazar `/hvac` por `/ac-maintenance`.

## 3. Menú, footer y home

- `src/components/fiveserv/StickyHeader.tsx`: "HVAC" → "AC Maintenance", link `/ac-maintenance`.
- `src/components/fiveserv/Footer.tsx`: mismo cambio.
- `src/pages/Index.tsx` (TRADES): slug `ac-maintenance`, label "AC Maintenance".
- `src/components/fiveserv/shared/RelatedServicesPills.tsx`: pill "AC Maintenance" → `/ac-maintenance`.
- `src/pages/ServicesIndexPage.tsx`: tarjeta "HVAC" → "AC Maintenance" con descripción de solo mantenimiento preventivo.
- `src/components/fiveserv/ServicePageTemplate.tsx`: renombrar la clave de imagen `hvac` a `ac-maintenance`.

## 4. Schema.org y SEO

- `src/lib/SchemaOrg.tsx`:
  - `hasOfferCatalog` de la organización: "HVAC and AC Repair" → "AC Maintenance", url `/ac-maintenance`.
  - `knowsAbout`: "HVAC Repair" → "AC Maintenance".
  - Oferta por ciudad: "AC Maintenance" con descripción de mantenimiento preventivo (filtros, inspección, limpieza de línea de condensado), sin reparación ni reemplazo.
  - Quitar "HVAC" de la descripción larga de la organización y poner "AC maintenance".
- `src/lib/site-config.ts`:
  - `CITY_SERVICES`: entrada "HVAC & AC Repair" → "AC Maintenance" (`/ac-maintenance`, keywords `ac maintenance`, descripción preventiva).
  - Descripciones del servicio Maintenance que enumeran "HVAC" → "AC maintenance".
- Metadatos de la página nueva: title tipo "AC Maintenance Plan Orlando FL | FiveServ" y description de mantenimiento preventivo, sin "AC Repair & Replacement".

## 5. Fuera de alcance (no se tocan)

- `src/content/blog/hvac-maintenance-apartments-florida.tsx` y `hvac-vs-ac-maintenance-florida.tsx`.
- Cualquier otra página, ruta, integración o funcionalidad (incluidas otras menciones de HVAC en FAQs, `city-data.ts`, `llms.txt`, `SofiaChat`, páginas de comparación) salvo que lo pidas.

## Archivos a tocar

1. `src/pages/AcMaintenancePage.tsx` (nuevo)
2. `src/pages/HvacPage.tsx` (borrar)
3. `src/App.tsx`
4. `src/components/fiveserv/StickyHeader.tsx`
5. `src/components/fiveserv/Footer.tsx`
6. `src/pages/Index.tsx`
7. `src/components/fiveserv/shared/RelatedServicesPills.tsx`
8. `src/pages/ServicesIndexPage.tsx`
9. `src/components/fiveserv/ServicePageTemplate.tsx`
10. `src/lib/SchemaOrg.tsx`
11. `src/lib/site-config.ts`
12. `public/sitemap.xml` + `scripts/generate-sitemap.mjs`
