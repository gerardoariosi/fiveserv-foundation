

## Typography swap proposal — Clash Display + Plus Jakarta Sans

Audit complete. Here are the exact diffs for the 3 files. Nothing applied yet.

---

### 1. `index.html` — add font imports in `<head>`

**Current** (lines 13–16):
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" />
```

**Proposed**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://api.fontshare.com" crossorigin />

<!-- Display: Clash Display (Fontshare) -->
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap" />

<!-- Body: Plus Jakarta Sans (Google Fonts) -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" />
```

Note: Clash Display is hosted by **Fontshare**, not Google Fonts (it's not on GF). I added a `preconnect` for `api.fontshare.com`. Removed the old Montserrat import since nothing will use it after the swap.

---

### 2. `tailwind.config.ts` — update `fontFamily`

**Current** (lines 17–20):
```ts
fontFamily: {
  display: ['"Montserrat"', "Arial", "sans-serif"],
  body: ["Arial", "Helvetica", "sans-serif"],
},
```

**Proposed**:
```ts
fontFamily: {
  display: ['"Clash Display"', "system-ui", "sans-serif"],
  body: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
  sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
},
```

Note: I'm keeping the existing `body` key (already used by some components) AND adding `sans` (Tailwind's default key) so every untagged element automatically inherits Plus Jakarta. This guarantees nav, buttons, inputs, and any plain `<div>` text pick up the new body font without per-component edits.

---

### 3. `src/index.css` — update font-face fallbacks

**Current** (lines 78–106 area):
```css
body {
  @apply bg-white text-brand-black antialiased;
  font-family: Arial, Helvetica, sans-serif;
}
h1 {
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 900;
  letter-spacing: -0.01em;
}
h2 {
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 700;
  letter-spacing: -0.01em;
}
h3 {
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 600;
  letter-spacing: -0.005em;
}
h4, h5, h6, .font-arial-bold {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
```

**Proposed**:
```css
body {
  @apply bg-white text-brand-black antialiased;
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  font-weight: 400;
}
h1 {
  font-family: "Clash Display", system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}
h2 {
  font-family: "Clash Display", system-ui, sans-serif;
  font-weight: 600;
  letter-spacing: -0.015em;
}
h3 {
  font-family: "Clash Display", system-ui, sans-serif;
  font-weight: 600;
  letter-spacing: -0.01em;
}
h4, h5, h6 {
  font-family: "Clash Display", system-ui, sans-serif;
  font-weight: 500;
}
.font-arial-bold {
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  font-weight: 600;
}
```

And the utilities at the bottom (lines ~110–117):
```css
.font-display {
  font-family: "Clash Display", system-ui, sans-serif;
  font-weight: 600;
}
.font-body {
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

Tightened letter-spacing slightly because Clash Display reads better with negative tracking at display sizes (more premium, less default).

---

### Important note about weight 900

Your prior typography spec said: *"H1 hero: font-black weight-900 ONLY in the homepage hero"*. Clash Display **does not ship a 900 weight** — its heaviest is 700 Bold. Two options:

- **A** (recommended): Drop weight 900, use Clash Display **700** for the homepage hero H1. Clash 700 already reads heavier than Montserrat 700 thanks to its geometric construction. Hero will still feel bold and premium.
- **B**: Add Clash Display **700** + a separate display font that has 900 (e.g. keep Montserrat 900 only for `HeroSection.tsx` H1). Adds a 3rd font load.

I'd default to **A** unless you want B.

---

### What stays untouched

- All gold/amber colors, layouts, components, content, routes
- The `.font-arial-bold` utility class (still works, just routed to Plus Jakarta 600 instead of Arial)
- All existing Tailwind classes like `font-display`, `font-bold`, `font-semibold` keep working

### What you'll see after applying

- Headings: clean geometric Clash Display (think Linear, Vercel, Stripe vibe)
- Body: rounded humanist Plus Jakarta Sans (very readable, modern)
- ~2 extra HTTP requests on first load (~80–120KB total font payload)

### Confirm before applying
1. Approve the 3 file diffs above?
2. Pick **A** (Clash 700 for hero, drop 900) or **B** (keep Montserrat 900 for hero only)?

