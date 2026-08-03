# FiveServ — Upgrade a nivel franquicia nacional

Basado en tu análisis de las 25 franquicias, y respetando lo que ya funciona. **No se elimina ninguna página, integración ni funcionalidad existente.** Todo es aditivo o refinamiento visual.

## Decisiones ya confirmadas
- Fuente de referencia: tu documento de análisis (no investigación directa mía).
- Tipografía: se mantiene **DM Serif Display + Fira Sans** (no se toca).
- Sin garantía con nombre propio ni badge.
- Material real: fotos antes/después y testimonios con nombre y ciudad (los cargamos cuando los tengas; mientras tanto quedan los placeholders "FS" actuales).
- Ejecución **por fases**.

---

## Patrones aplicados y su marca de origen

| Patrón | Origen | Cómo lo aplico a FiveServ |
|---|---|---|
| Mega-menú por categorías con íconos | Mr. Handyman, Servpro | Dropdown de servicios en columnas: Maintenance / Remodeling / Trades / For Property Managers |
| Doble CTA persistente en header | Plantilla Neighborly (Mr. Rooter) | "Get a Free Quote" + click-to-call siempre visibles |
| Localizador de ubicación | Orkin, TruGreen | Selector de las 18 ciudades integrado al header |
| Bifurcación de audiencia | CertaPro, Mr. Rooter | Dos tarjetas bajo el hero: "I'm a Homeowner" / "I Manage Properties" — refuerza tu embudo de dos etapas |
| Antes/después como galería protagonista | Bath Fitter, N-Hance, Re-Bath | El `BeforeAfterSlider` existente sube a sección principal del home |
| Banda de urgencia 24/7 | Roto-Rooter | Franja con teléfono, 24/7, sin recargos nocturnos ni de fin de semana |
| Prueba social cuantificada | CertaPro, Re-Bath | Reseñas con nombre + ciudad + servicio, y cifras reales de FiveServ |
| Marca familiar con gente real | Two Men and a Truck | Se potencia `FamilyStory` con la historia venezolano-americana |

---

## Fase 1 — Sistema global + Homepage

**1. Sistema de diseño** (`src/index.css`, `tailwind.config.ts`)
- Escala tipográfica y ritmo vertical uniformes (hoy el home mezcla `py-16`, `py-20`, `py-24` y `80px` inline).
- Tokens unificados de elevación, bordes y estados hover.
- Transiciones estandarizadas: reveal al scroll, hover de tarjetas, subrayado de nav.

**2. Header** (`StickyHeader.tsx`)
- Mega-menú de servicios en columnas, con ícono y descripción corta por servicio.
- Doble CTA persistente (teléfono + cotización).
- Selector de ciudad de las 18.
- Condensa altura al hacer scroll manteniendo los CTAs visibles.

**3. Footer** (`Footer.tsx`)
- Reorganizado en 5 columnas con jerarquía real: Servicios / Ciudades / Empresa / Recursos / Contacto.
- Franja de credenciales: licenciado, asegurado, 24/7, 18 ciudades, foto-documentación, una factura.

**4. Homepage** (`Index.tsx`)
- Hero refinado: mismo mensaje, mejor jerarquía y contraste, CTA principal más dominante.
- Nueva bifurcación de audiencia bajo el hero (Homeowner / Property Manager).
- Antes/después promovido a sección protagonista.
- Reseñas rediseñadas en formato cita editorial con nombre, ciudad y servicio.
- Franja de emergencia 24/7 con teléfono.
- Se conservan todas las secciones actuales; cambian orden, densidad y tratamiento visual.

**No se toca en Fase 1:** rutas, SEO/Schema, mapa de Google, formularios GHL, chat Sofia, blog, ni ninguna página interna.

---

## Fases siguientes (confirmamos antes de cada una)
- **Fase 2** — `ServicePageTemplate` + servicios estrella (Maintenance, Handyman, Bathroom, Kitchen).
- **Fase 3** — `CityPageTemplate`, las 18 ciudades y Tampa Bay.
- **Fase 4** — Blog, FAQ, About, Contact, Careers y páginas de conversión.
- **Fase 5** — Micro-interacciones, performance y pulido final.

---

## Lo que necesito de ti
1. **Fotos antes/después** (4-6 pares: baño, cocina, pintura, pisos) — el activo de mayor impacto del proyecto.
2. **Testimonios reales**: texto, nombre, ciudad y servicio.
3. Opcional: foto del equipo, camioneta rotulada o uniformes.

Puedes subirlos cuando quieras; Fase 1 se construye con los placeholders actuales y los sustituimos sin rehacer nada.

## Detalles técnicos
Archivos de Fase 1: `src/index.css`, `tailwind.config.ts`, `src/components/fiveserv/StickyHeader.tsx`, `Footer.tsx`, `src/pages/Index.tsx` y componentes de home (`BeforeAfterSlider`, `TestimonialCard`, `ContactCTA`). Sin cambios en rutas, backend, Schema.org ni integraciones.
