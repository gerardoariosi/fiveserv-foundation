# Plan: Add Orlando image to BestPropertyMaintenancePage hero background

## Goal
Replace the current gradient + FS-pattern hero background on `/best-property-maintenance-orlando` with a real Orlando skyline/city image, while keeping the gold/black brand palette and full text legibility.

## Current state
- `src/pages/BestPropertyMaintenancePage.tsx` hero (lines 192-205) uses a dark gradient plus `FS_PATTERN_DARK`.
- Existing asset available: `src/assets/orlando-hero-hd.jpg.asset.json` (or `orlando-skyline-hero-hd.jpg.asset.json`).
- Pattern used elsewhere on the page must remain available for lower sections.

## Proposed changes

### 1. Import the Orlando hero asset
Add an import at the top of `src/pages/BestPropertyMaintenancePage.tsx`:
```tsx
import orlandoHero from "@/assets/orlando-hero-hd.jpg.asset.json";
```

### 2. Update hero background
In the hero `<section>` (currently lines 192-205):
- Set `backgroundImage` to the imported asset URL.
- Layer a dark overlay using `::before` or an inner `<div>` with `bg-black/60` (or equivalent `rgba(26,26,26,0.72)`) so white/gold text stays readable.
- Keep `FS_PATTERN_DARK` as a subtle texture on top of the image (very low opacity) OR remove it from the hero if it competes with the photo.
- Keep `minHeight: 560` and responsive padding.

### 3. Preserve text readability
- Ensure the H1, subheadline, CTA buttons, and stats card have enough contrast.
- Add a slight text-shadow to the H1 and paragraph if needed, matching the treatment used on `PaintingPage.tsx`.
- The stats card should keep its dark translucent background (`rgba(26,26,26,0.85)`) and gold border so it pops over the photo.

### 4. Accessibility / SEO
- Add a descriptive `alt`-style `aria-label` to the section or keep the image as a decorative background (no new DOM img needed).
- Verify no layout shift and that the image covers the section on all breakpoints (`backgroundSize: "cover"`, `backgroundPosition: "center"`).

## Files to edit
- `src/pages/BestPropertyMaintenancePage.tsx` only.

## Verification
- Type-check passes.
- Preview the page at `/best-property-maintenance-orlando` to confirm the Orlando image loads, text is legible, and the stats card remains prominent.
