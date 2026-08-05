# Reemplazar la imagen hero de Kitchen Remodel

Cambiar la foto de stock (Unsplash) del hero de `/kitchen-remodel` por la imagen real que subiste (cocina terminada en Lake Nona), con nombre y texto alternativo geolocalizados para SEO local.

## Qué cambia

- Subir `Kitchen_Remodel_Lake_Nona_FL.webp` al CDN de assets con el nombre `kitchen-remodel-lake-nona-fl.webp` (el nombre de archivo mismo es una señal geo).
- En `src/pages/KitchenRemodelPage.tsx`, reemplazar la constante `HERO_IMG` (línea 225) por el asset importado.
- Actualizar el `alt` del hero a algo geo-específico y descriptivo:
  "Kitchen remodel in Lake Nona, Orlando FL — new shaker cabinets, quartz-look countertop and stainless appliances by FiveServ Property Solutions".
- Mantener `loading="eager"` y el overlay/gradiente actual para que el texto del hero siga legible.

## Señales geo adicionales (mismo bloque, sin tocar diseño)

- Añadir `title` a la imagen con "Kitchen Remodel — Lake Nona, Orlando, FL".
- Añadir `width`/`height` para evitar layout shift.
- Añadir la imagen al schema del hero (`image` en el bloque JSON-LD del servicio) para que Google/AI la asocien a la página y a la ubicación.

## Detalles técnicos

- Asset vía `lovable-assets create --file /mnt/user-uploads/Kitchen_Remodel_Lake_Nona_FL.webp --filename kitchen-remodel-lake-nona-fl.webp` → pointer en `src/assets/`.
- Import del pointer JSON y uso de `.url` en `HERO_IMG`.
- Solo se toca `src/pages/KitchenRemodelPage.tsx` más el nuevo `.asset.json`. Ninguna otra página cambia.
