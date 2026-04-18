

## Goal
Replace the amateur SVG `InteractiveMap` with a clean, premium 3-column city grid on the homepage and on `/cities` / `/service-areas`. Keep all routes, slugs, and city data intact.

## Approach

### 1. Update `CityGrid.tsx` (the homepage section)
Rewrite to match the new spec exactly:
- Section: `bg-gray-50 py-24 lg:py-32`
- Header: `SectionHeading` with eyebrow `SERVICE AREAS`, H2 `Serving 18 Cities Across <gold>Central Florida</gold>`, subtext `From Orlando to the Space Coast — we cover it all`.
- Grid: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`.
- City card (Link to `/maintenance-{slug}`):
  - `group block bg-white rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`
  - Border varies by tier (see below).
  - Top: `MapPin` icon in gold (`text-brand-gold`), size scales by tier (28 / 24 / 20).
  - City name: `font-display font-black text-lg text-brand-black group-hover:text-brand-gold`.
  - Response time row: `text-brand-gold text-sm font-semibold` → `Within {city.responseTime}` (already a string like "30 min" in `site-config`).
  - Tier 1 only: gold pill `bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full` → "Primary Market".
- Tampa Bay card (from `COMING_SOON_CITIES`):
  - `border border-dashed border-brand-gold/50 bg-brand-gold/5 rounded-xl p-6` — NOT a Link, just a `<div>`.
  - Gold pin icon + city name + "Coming Soon" gold pill.

### 2. Tier mapping
Hardcode tier sets inside `CityGrid.tsx` (no schema change needed):
- Tier 1 slugs: `orlando-fl`, `kissimmee-fl`, `sanford-fl`, `winter-park-fl`, `lakeland-fl`
- Tier 2 slugs: `altamonte-springs-fl`, `apopka-fl`, `ocoee-fl`, `winter-garden-fl`, `clermont-fl`, `st-cloud-fl`, `davenport-fl`
- Tier 3 slugs: everything else (`deltona-fl`, `daytona-beach-fl`, `palm-coast-fl`, `melbourne-fl`, `palm-bay-fl`, `cocoa-fl`)

Border per tier:
- Tier 1: `border border-brand-gold/40 hover:border-brand-gold`
- Tier 2: `border border-gray-200 hover:border-brand-gold`
- Tier 3: `border border-gray-100 hover:border-brand-gold`

### 3. Remove `InteractiveMap` usage
- `src/pages/CitiesIndexPage.tsx`: drop the `<InteractiveMap />` section + import. Keep the page hero and the existing city link grid below (or replace it with `<CityGrid />` for consistency — see decision below).
- Delete `src/components/fiveserv/InteractiveMap.tsx` entirely (no other consumers — verified via grep would catch it; only `CitiesIndexPage` imports it).
- Homepage `Index.tsx` already renders `<CityGrid />` — no change needed there beyond the component rewrite.

### 4. Files touched
- Rewrite: `src/components/fiveserv/CityGrid.tsx`
- Edit: `src/pages/CitiesIndexPage.tsx` (remove map section + import)
- Delete: `src/components/fiveserv/InteractiveMap.tsx`

## Will NOT change
- City data in `site-config.ts` (slugs, names, response times, zones)
- Routes, SEO, schemas
- Any other section on the homepage or other pages

## One quick decision

<lov-actions>
<lov-suggestion message="On /cities and /service-areas pages, replace the current detailed city cards (with zones + response time + clock icon) with the same new CityGrid component used on the homepage, so the design is identical everywhere.">Use the same new grid on /cities too</lov-suggestion>
<lov-suggestion message="On /cities and /service-areas pages, only remove the InteractiveMap but keep the existing detailed city cards (zones, response time, clock icon) below the hero — they show more info than the homepage grid.">Keep detailed cards on /cities, only remove the SVG map</lov-suggestion>
</lov-actions>

