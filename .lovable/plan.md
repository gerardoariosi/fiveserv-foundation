
# Mobile Fixes + Homepage Redesign (inspirado en Stan's)

Auditoría hecha a 390px (iPhone). Encontré 6 bugs reales en mobile y oportunidades claras de rediseño contra `stansac.com`.

---

## PARTE 1 — Bugs de mobile a corregir

### Bug 1 (CRÍTICO) — Sofia Chat se abre sola en pantalla completa
En mobile el widget de Sofia se monta como `fixed inset-0 z-[9999] bg-white` y **bloquea toda la homepage** (verificado: Playwright no podía hacer click en el menú porque Sofia interceptaba todo el viewport). Hoy aparece abierta apenas cargas en mobile.
- Fix: en mobile NO auto-abrir; el widget arranca cerrado y solo se abre con tap en la burbuja. La burbuja flotante queda visible bottom-right (como hoy).

### Bug 2 (CRÍTICO) — StickyBanner top rompe en mobile
`StickyBanner` declara `height: 36px` pero los 3 items (50+ PMs / Free Quote / 24/7) se renderizan en **3 columnas que envuelven a 2 líneas cada una**, ocupando ~90px y empujando/cubriendo el hero. Por eso al cargar ves la barra negra grande arriba y el H1 corrido hacia abajo / tapado.
- Fix: en mobile mostrar **un solo item rotativo** (o los 3 en una línea con texto súper corto y truncado), forzar `h-9` real, `whitespace-nowrap`, y aumentar el área del botón "X" a 44×44.

### Bug 3 — Ticker "4 property managers requested a quote today" tapa el contenido
La barra negra flotante (`SocialProofTicker` / `LiveStatsBar`) tiene z-index alto y queda **encima de los headings** al hacer scroll (visible en pantallazos m_01–m_04 tapando "Property Maintenance Central Florida", "Become a Partner", etc.).
- Fix: bajar z-index por debajo del header, o moverla a `bottom` en mobile, o esconderla en mobile (preferido — mobile ya tiene la StickyMobileCTA abajo).

### Bug 4 — `HeroServicePicker` no se ve en el viewport inicial
El picker usa `-mt-12` asumiendo que el `HeroStatStrip` está justo arriba. En mobile la composición se rompe: aparece un bloque blanco vacío entre el header y el hero. Hay que rediseñar la composición del hero entero (ver Parte 2).

### Bug 5 — Tap targets < 44×44 (accesibilidad / Google mobile usability)
- Botón "Dismiss banner": 16×16
- Icono teléfono header: 24×24
- Hamburguesa: 28×28
- Fix: subir todos a `min-h-11 min-w-11` con padding interno.

### Bug 6 — Warning React Router v7 en consola
`v7_startTransition` future flag warning. No rompe nada pero ensucia consola.
- Fix: agregar `future={{ v7_startTransition: true }}` al `BrowserRouter`.

---

## PARTE 2 — Rediseño homepage (estilo Stan's, manteniendo negro+dorado suavizado)

Stan's funciona porque: **(a)** foto real grande del van como hero, **(b)** una tarjeta sólida superpuesta con CTA + 4 botones pill de servicios con icono circular, **(c)** mucho espacio en blanco entre secciones, **(d)** una sola paleta consistente sin elementos flotantes que distraigan.

Aplicado a FiveServ (negro + dorado, pero más aire, más blanco, menos saturación):

### Hero (Index.tsx + HeroSection.tsx + HeroServicePicker.tsx)
- Imagen real de fondo (van/equipo FiveServ — si no hay foto profesional aún, usar la actual de Orlando con un overlay degradado más sutil, no tan oscuro).
- Bloque izquierdo: eyebrow dorada pequeña → H1 negro sobre placa crema/blanca (no blanco sobre foto) → tagline italic dorada → subhead → 2 CTAs (primario dorado sólido + secundario outline).
- Tarjeta de servicios **a la derecha (desktop) / abajo (mobile)** estilo Stan's:
  - Fondo blanco crema (`#FAF8F3`) en vez de negro casi puro
  - 6 botones pill grandes (Maintenance, Handyman, Bathroom Remodel, Painting, Flooring, Cleaning)
  - Cada botón: icono dorado dentro de círculo crema + label negro + flecha
  - Tap target 56px alto
  - Link inferior "View all services →"

### Trust strip
- Reemplazar el `HeroStatStrip` negro denso por una franja crema clara con 4 stats (1,200+ jobs · 50+ PMs · 18 cities · 24/7) en tipografía limpia. Sin gradientes oscuros.

### Spacing / ritmo general
- Aumentar padding vertical entre secciones a `py-20 sm:py-28` consistente.
- Quitar bordes dorados decorativos repetidos.
- Bajar saturación del dorado en fondos (usar `#FFD700` solo para acentos, no para bloques grandes).
- Quitar el segundo CTA flotante (`StickyMobileCTA` + `LiveStatsBar` + `ExitIntentPopup` + Sofia abierta = sobrecarga). Mantener **solo** `StickyMobileCTA` en mobile.

### Tipografía
- Mantener la display serif italic del tagline (es identidad).
- H1 a `text-4xl sm:text-6xl` en negro `#1A1A1A` sólido (no blanco sobre foto).

### Secciones Problem / Solution / Pillars
- Pasar fondo a blanco/crema alternado en vez de gris oscuro.
- Quitar el efecto de texto gigante semi-transparente del Problem ("Managing Your Property Shouldn't…" en gris claro casi invisible); subir contraste a `text-gray-900`.

---

## Archivos a tocar

```
src/components/fiveserv/SofiaChat.tsx       Bug 1
src/components/fiveserv/StickyBanner.tsx    Bug 2 + tap target
src/components/fiveserv/LiveStatsBar.tsx    Bug 3 (esconder en mobile o bajar z)
src/components/fiveserv/SocialProofTicker.tsx  Bug 3 (revisar duplicados)
src/components/fiveserv/StickyHeader.tsx    Bug 5 (tap targets)
src/App.tsx                                 Bug 6 (future flag)
src/components/fiveserv/HeroSection.tsx     Rediseño hero
src/components/fiveserv/HeroServicePicker.tsx  Rediseño tarjeta pill
src/components/fiveserv/HeroStatStrip.tsx   Aclarar
src/components/fiveserv/ProblemSection.tsx  Subir contraste
src/components/fiveserv/SolutionSection.tsx Spacing
src/index.css                               Tokens crema, ajuste dorado
src/pages/Index.tsx                         Composición + remover ExitIntent
```

## Lo que NO se cambia
- Identidad: negro + dorado siguen siendo la marca (solo más aire y menos saturación).
- Schema/SEO/llms.txt/index.html → intactos.
- FAQs, copy del H1, slogan, footer → intactos.
- Rutas y componentes de páginas internas → intactos.

## Cómo verifico antes de cerrar
Playwright a 390px → screenshots de hero, picker, problem, solution, footer. Confirmo:
- Sofia NO se abre sola.
- Banner top mide ≤ 40px.
- Ningún ticker flotante tapa headings.
- Hero H1 visible en primer viewport sin scroll.
- Tap targets ≥ 44px.
- Sin warnings de Router.

¿Apruebo y procedo?
