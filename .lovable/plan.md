# Arreglar el espacio vacío arriba del hero

## Qué está pasando (verificado)

El offset del banner + header fijo se está aplicando **dos veces**:

1. `src/layouts/RootLayout.tsx` (línea 47) ya inserta un espaciador con
   `padding-top: calc(var(--banner-h) + var(--header-h, 80px))` antes de cada página.
2. Las páginas que usan la clase `.pt-stack` (definida en `src/index.css`, líneas 141-148)
   vuelven a sumar `var(--banner-h) + var(--header-h) + 2rem/3rem`.

Resultado: ~80-112px extra de vacío arriba del hero en esas páginas. Las páginas con hero de
imagen (PageHero, HeroSection, ServicePageTemplate) no usan `.pt-stack`, por eso se ven bien —
como en tus ejemplos buenos.

## Páginas afectadas (todas las que usan `.pt-stack`)

- Contact, Blog (índice), Blog artículo (`BlogArticleLayout`), FAQ
- Services índice, Cities índice, About, Careers, Tampa Bay
- Maintenance city (`MaintenanceCityPage`), Placeholder, 404

## Solución

Cambiar la definición de `.pt-stack` en `src/index.css` para que solo aporte el respiro
vertical propio del hero, sin repetir el alto del header:

```css
.pt-stack { padding-top: 3rem; }
@media (min-width: 768px) { .pt-stack { padding-top: 4.5rem; } }
```

Un solo cambio en un archivo arregla las 12 páginas a la vez, sin tocar ninguna página
individual y sin alterar los heroes con imagen (que no usan esta clase, así que sus alturas y
espacios de imagen quedan intactos).

## Verificación

Revisar con capturas del navegador: Contact, Blog, FAQ, About, Cities, Maintenance city y una
página con hero de imagen (Bathroom Remodel) para confirmar que el espacio quedó parejo y que
nada quedó pegado debajo del header, en desktop y en móvil, con el banner visible y cerrado.
