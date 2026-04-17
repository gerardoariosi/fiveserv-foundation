

## Audit: This Work Is Already Complete

**The 18 city pages are NOT missing. They exist and render correctly.** The user is currently viewing `/maintenance-cocoa-fl` per client state — proof the route works.

### Verification of every claim in the request

| Claim in request | Reality |
|---|---|
| "None of the 18 city pages were created" | ❌ False — `MaintenanceCityPage.tsx` renders all 18 |
| "Clicking any city link returns 404" | ❌ False — `/maintenance-cocoa-fl` is loaded right now |
| "Routes not registered" | ❌ False — `App.tsx` line: `{ path: "maintenance-:city", element: <MaintenanceCityPage /> }` matches all 18 slugs |
| H1 format | ✅ Present, exact match to spec |
| AIOverviewBlock with city/zips/zones | ✅ Present (line 50, 108) |
| Why FiveServ in [City] section | ✅ Present (lines 113–135) |
| 4 service cards | ✅ Present (lines 138–167) |
| Response time section | ✅ Present (lines 170–192) |
| Zones + ZIPs sections | ✅ Present (lines 195–231) |
| FAQ 5+ questions | ✅ Present via `editorial.faqs` (5 base + extended for Orlando/Kissimmee) |
| Final CTA / form | ✅ Present (`<ContactCTA />`) |
| LocalBusiness + FAQPage + BreadcrumbList schemas | ✅ All emitted via `<SchemaOrg breadcrumbs city faqs />` |
| Per-city ZIPs/zones/response data | ✅ Present in `src/lib/city-data.ts` for all 18 |
| CityGrid links to `/maintenance-${slug}` | ✅ Already correct |
| Footer links to `/maintenance-${slug}` | ✅ Already correct |

### The ONE real gap vs the spec

**City hero images** — the request lists `/public/images/cities/*.jpg` mappings, but:
- The `public/images/cities/` directory does not exist
- No image files have been uploaded
- The current hero is text-only on `bg-brand-black` (no image element)

---

## Proposed Plan — Add Hero Image Support Only

Since the pages, routes, data, schemas, and links all work, the only meaningful change is wiring up hero images.

1. **Add `heroImage` field** to `CITY_EDITORIAL` entries in `src/lib/city-data.ts` mapping each city to its image path per the spec (12 unique images + `default-central-florida.jpg` for the 6 coastal/distant cities).

2. **Update `MaintenanceCityPage.tsx` hero** — add a background `<img>` layer behind the existing dark hero with a black gradient overlay so text remains legible. Use `loading="eager"` and `fetchpriority="high"` for LCP. Falls back gracefully to solid black if the file is missing.

3. **Document the image requirement** — since no images exist in `public/images/cities/` yet, the page will render with a broken-image background until the user uploads them. I'll add a single placeholder note in the response telling the user exactly which 13 files to drop into `public/images/cities/`.

### What I will NOT do (and why)
- Will not "create 18 routes" — they already exist as one dynamic route serving all 18 slugs (correct React Router pattern).
- Will not "create 18 page files" — that would duplicate identical code 18 times. The single template + per-city data file is the right pattern and matches the spec.
- Will not change CityGrid / Footer / map links — already correct.
- Will not register `/cities/:city` redirects — that legacy route still works for backward compatibility.

### Files to touch
- `src/lib/city-data.ts` — add `heroImage` field to all 18 entries
- `src/pages/MaintenanceCityPage.tsx` — add background image to hero section

### Files NOT touched
- `src/App.tsx` — routes already correct
- `src/components/fiveserv/CityGrid.tsx` — links already correct
- `src/components/fiveserv/Footer.tsx` — links already correct

