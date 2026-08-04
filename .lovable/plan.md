# Footer: camioneta sobre "Get a Free Quote" + patrón FS

## 1. Patrón de fondo
Se quitan las estrellas doradas. En su lugar, mosaico del monograma **FS** extraído directamente de tu logo (forma idéntica, no redibujada), en dorado `#FFD700` al ~17% de opacidad, tile de 88px. Misma densidad tranquila que hoy, pero ahora el patrón es la marca.

## 2. Camioneta
Va en la columna **Contact**, justo encima del botón "Get a Free Quote", tal como pediste:
- Ancho completo de la columna (hasta 330px), sombra suave hacia abajo para que se apoye sobre el fondo.
- Debajo, línea de credenciales en dorado: `LICENSED & INSURED · 18 CITIES · 24/7`.
- Hairline dorado que la separa del botón.
- En móvil se centra y ocupa el ancho disponible.
- Se limpia el recorte: el PNG que subiste trae el cuadriculado de transparencia quemado; se elimina el fondo y el resto de cuadros en la ventanilla antes de subirlo.

## Detalles técnicos
- La camioneta limpia se sube como Lovable Asset (`src/assets/fiveserv-van.png.asset.json`) y se referencia por URL de CDN; `loading="lazy"` y `alt` con marca + Orlando.
- El tile FS se genera como PNG desde tu logo y también se sube como asset; se aplica en `Footer.tsx` vía `backgroundImage` reemplazando el SVG de estrellas actual.
- Único archivo de código modificado: `src/components/fiveserv/Footer.tsx`. Sin cambios en enlaces, columnas, contenido, rutas ni ningún otro componente.

La maqueta de referencia es `footer-final-van-sobre-cta.png`.
