# Cambiar el patrón de diamantes por el monograma FS en todo el sitio

El patrón de "diamantes/destellos" dorados se usa en 8 archivos. Se reemplaza por el mismo mosaico FS dorado que quedó en el footer, con el mismo tamaño pequeño y sutil.

## Dónde está hoy el patrón de diamantes

- `src/components/fiveserv/ServicePageLayout.tsx` (afecta todas las páginas de servicio)
- `src/components/fiveserv/LeadMagnetSection.tsx`
- `src/pages/HandymanPage.tsx`
- `src/pages/KitchenRemodelPage.tsx`
- `src/pages/BathroomRemodelPage.tsx`
- `src/pages/PaintingPage.tsx`
- `src/pages/FlooringPage.tsx`
- `src/pages/EmergencyRepairPage.tsx`

Se aplica en dos tipos de fondo: secciones/tarjetas oscuras (#1A1A1A) y secciones crema (#FFFBF0).

## Qué se hace

1. Crear un módulo compartido `src/lib/fs-pattern.ts` con dos estilos listos para usar:
   - `FS_PATTERN_DARK` — mosaico FS dorado (el mismo tile del footer, 64px, muy sutil) para fondos negros.
   - `FS_PATTERN_LIGHT` — variante para fondos crema. El FS dorado sobre crema casi no se ve, así que se genera un segundo tile con el mismo FS en tinta cálida oscura y opacidad baja, para que se note igual de fino que en el footer.
2. Reemplazar en los 8 archivos las constantes `DIAMOND_PATTERN` / `DOT_GRID_DARK` / `DOT_GRID_CARD` por la importación del módulo, eligiendo la variante según si el fondo es oscuro o crema. No se cambia ningún otro estilo, texto ni estructura.
3. Verificar visualmente con capturas (una página de servicio, Kitchen, Bathroom, Painting, Flooring, Emergency y Handyman) que el patrón se vea igual de discreto que en el footer y que no cambie ningún layout.

## Detalle técnico

- El tile FS ya existe como asset (`src/assets/fs-pattern-tile.png.asset.json`); el nuevo tile oscuro se genera con el mismo método de supersampling y se sube como asset.
- Los estilos exportados incluyen `backgroundImage`, `backgroundSize: "64px 64px"` y `backgroundRepeat: "repeat"`, para que sigan funcionando con el mismo spread `{...}` que ya usan los componentes.
