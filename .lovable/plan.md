# Footer: camioneta FiveServ + patrón "FS"

Sí, entiendo. Dos cambios, ambos solo en `Footer.tsx` (más el asset de la camioneta):

## 1. Patrón de fondo del footer
Hoy el fondo tiene estrellitas doradas en mosaico (SVG inline, 48x48px).
Se reemplazan por el monograma **FS** del logo que subiste: serif clásico (misma forma exacta de la imagen), en dorado `#FFD700` con baja opacidad (~0.15), repetido en mosaico con la misma densidad y tamaño que las estrellas actuales. Se traza como path SVG inline para que sea nítido y no pese nada — nada de imagen rasterizada de fondo.

## 2. Camioneta en el footer — opciones de ubicación

**Opción A (recomendada) — banda completa sobre el bloque de columnas**
La camioneta (PNG con fondo transparente) centrada como banda de ancho completo arriba de todo el footer, sobre el patrón FS, con el texto "One Call. One Team. Done." y el teléfono al lado. Es la que más se parece a lo que hacen las franquicias grandes: la unidad rotulada es el sello de marca. Tamaño generoso (hasta ~520px de ancho en desktop, full-width en móvil).

**Opción B — dentro de la columna de Contacto, encima de "Get a Free Quote"**
Tal como propusiste. Funciona, pero esa columna es angosta (1/4 del ancho), así que la camioneta quedaría pequeña — y dijiste que pequeña no.

**Opción C — franja separadora entre las columnas y la zona legal**
Camioneta a la izquierda, a la derecha "Licensed & Insured · 18 ciudades · 24/7" y el CTA de cotización. Ancho completo, tamaño medio-grande.

Mi recomendación: **A**, o **C** si prefieres que la camioneta no compita con el logo del header al abrir el footer.

## Detalles técnicos
- La camioneta se sube como Lovable Asset (`src/assets/fiveserv-van.png.asset.json`) y se referencia por URL de CDN; `loading="lazy"`, `alt` descriptivo con marca + Orlando para SEO.
- Patrón FS: `backgroundImage` con `data:image/svg+xml` en `Footer.tsx`, mismo `backgroundSize` de 48px.
- Sin cambios en enlaces, rutas, contenido ni en ningún otro componente.

Dime qué opción de ubicación quieres y lo implemento.
