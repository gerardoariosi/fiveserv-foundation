## Objetivo
Reemplazar el fondo del hero de `src/pages/PaintingPage.tsx` (actualmente una foto de Unsplash) por la imagen subida `PAINTING_ORLANDO_FL_FIVESERV.tiff`, y ajustar overlay/tipografía si hace falta para que el texto blanco se lea bien.

## Problema con el archivo
El archivo es `.tiff` (~392 KB codificado, ancho de línea enorme). Los navegadores **no renderizan TIFF**, así que hay que convertirlo antes de servirlo.

## Cambios (2 pasos, 1 archivo tocado)

### 1. Preparar la imagen como asset CDN
- Convertir `/mnt/user-uploads/PAINTING_ORLANDO_FL_FIVESERV.tiff` → JPG optimizado (calidad 85, max width 1920px) usando ImageMagick/Pillow en `/tmp/painting-hero.jpg`.
- Subirla con `lovable-assets create --file /tmp/painting-hero.jpg --filename painting-hero.jpg` y guardar el pointer en `src/assets/painting-hero.jpg.asset.json`.
- No queda binario en el repo (solo el `.asset.json`).

### 2. Editar `src/pages/PaintingPage.tsx`
- Importar el asset: `import paintingHero from "@/assets/painting-hero.jpg.asset.json";`
- Reemplazar en el `<section>` del hero (líneas ~144-155) la `backgroundImage` de Unsplash por `` `url(${paintingHero.url})` ``.
- Ajustar overlay/texto solo si es necesario para legibilidad. Plan tentativo (confirmo al ver la imagen renderizada):
  - Cambiar overlay actual `rgba(0,0,0,0.72)` a un **gradient** `linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.35) 100%)` para que el lado izquierdo (donde está el H1) quede oscuro y el resto de la imagen se vea.
  - `backgroundPosition: "center"` → probable `"center right"` para que si la imagen tiene sujeto principal a la derecha no lo tape el texto.
  - Mantener `#FFFFFF` en el H1 y `text-gray-300` en el subtítulo (ya tienen buen contraste sobre negro).
  - Si la imagen es muy clara/colorida y el texto pierde contraste incluso con el gradient, añadir `text-shadow: 0 2px 12px rgba(0,0,0,0.6)` al H1 y subtítulo.

## Fuera de alcance
- No tocar el resto del hero (stats card, botón, CTA).
- No tocar otras páginas ni el sistema de diseño global.
- No borrar el TIFF original del mount (es read-only).

## Verificación
- `bun run build` para confirmar que el import del `.asset.json` compila.
- Screenshot rápido del hero en preview para validar contraste antes de dar por hecho el ajuste de overlay.
