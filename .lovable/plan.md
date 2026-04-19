

## Problema
Cuando alguien busca tu sitio o lo comparte, aparece branding de Lovable porque:
1. **`public/favicon.ico`** es el favicon por defecto de Lovable (el que se ve en la pestaña del navegador y en resultados de Google).
2. **`index.html`** no declara `<link rel="icon">` ni `<link rel="apple-touch-icon">`, así que mobile (iOS/Android al guardar en pantalla) muestra el ícono por defecto.
3. **La imagen Open Graph** (`og:image` y `twitter:image`) apunta a `storage.googleapis.com/gpt-engineer-file-uploads/...` — ese dominio es de Lovable. Cuando compartes el link en WhatsApp, Facebook, iMessage, etc., la preview viene de un servidor de Lovable.

El badge "Edit with Lovable" ya está oculto ✅, así que ese punto está resuelto.

## Plan de implementación

### 1. Subir tu logo FS al proyecto
- Copiar `user-uploads://logo_FS.png` a:
  - `public/favicon.png` (favicon principal)
  - `public/apple-touch-icon.png` (icono iOS)
  - `public/og-default.png` (imagen para previews al compartir)
- Eliminar `public/favicon.ico` (Lovable) para que no lo sirva por defecto.

### 2. Actualizar `index.html`
- Agregar:
  ```html
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#F5B800" />
  ```
- Reemplazar las dos URLs de `og:image` y `twitter:image` (que apuntan a `storage.googleapis.com/gpt-engineer-file-uploads/...`) por `https://fiveserv.net/og-default.png`.

### 3. Verificar `src/lib/Seo.tsx`
- Ya usa `${SITE.url}/og-default.jpg` por defecto. Cambiar la extensión a `.png` para que coincida con el archivo que subimos, y así cada página individual también muestre tu logo al compartirse.

## Resultado
- Pestaña del navegador → tu logo FS dorado/negro.
- Pantalla de inicio en mobile (iOS/Android) → tu logo FS.
- Compartir link en WhatsApp/Facebook/iMessage/Slack → preview con tu logo FS desde tu propio dominio.
- Cero referencias a Lovable en cualquier lugar visible para usuarios o motores de búsqueda.

## Nota técnica
Google y otros buscadores cachean favicons e imágenes OG por días o semanas. Después del deploy, puede tardar en actualizarse en resultados de búsqueda — eso es normal y no requiere cambios adicionales.

