

## Audit Report — 3 Issues

### ISSUE 1 — White text on white background in blog articles ❌ FAIL

Three legacy blog content files use `text-brand-white` classes designed for the OLD dark blog layout, but `BlogArticleLayout.tsx` line 104 wraps article body in `bg-white`. Result: **invisible body text, headings, and table cells on three published articles.**

**Files affected:**
- `src/content/blog/reduce-vendor-chaos-multifamily.tsx` — wrapper `text-brand-white/90`, all H2s `text-brand-white`, table body `text-brand-white`
- `src/content/blog/property-maintenance-costs-central-florida-2025.tsx` — same pattern (wrapper, 6 H2s, 2 table bodies)
- `src/content/blog/make-ready-guide-florida-2025.tsx` — same pattern

All other blog posts use the shared `_blocks.tsx` renderer (already correct). `BlogPage.tsx` listing — verified ✅ uses `text-gray-900` / `text-gray-600` correctly.

**Fix:** In the 3 files above, replace:
- wrapper `text-brand-white/90` → `text-gray-700`
- H2 `text-brand-white` → `text-gray-900`
- `divide-brand-gold/15 text-brand-white` → `divide-gray-200 text-gray-700`
- Table border `border-brand-gold/30` → `border-gray-200` (gold-on-white is acceptable but gray is cleaner here; keep gold if preferred — flag only the text)

---

### ISSUE 2 — City hero images positioning ⚠️ PARTIAL

`MaintenanceCityPage.tsx` lines 73–88 renders hero images correctly with:
- `object-cover` ✅
- `bg-brand-black/60` overlay ✅
- bottom fade gradient ✅

**However:**
- No `object-position` is set anywhere → defaults to `center center` for ALL cities (Winter Park image gets cropped poorly, subjects sit too high).
- `CityPageTemplate.tsx` (used by `/cities/:slug` route) has **NO hero image at all** — pure black background. Inconsistent with `MaintenanceCityPage`.

**Fix:**
1. Add an optional `heroImagePosition` field to `CityEditorial` in `src/lib/city-data.ts` (default `"center center"`).
2. Set Winter Park to `"center 60%"`.
3. In `MaintenanceCityPage.tsx` line 80, apply via inline `style={{ objectPosition: editorial.heroImagePosition ?? "center center" }}`.
4. (Optional, out of scope unless requested) Add hero image rendering to `CityPageTemplate.tsx` to match `MaintenanceCityPage` for the `/cities/:slug` route — flagging only.

**Files to edit:**
- `src/lib/city-data.ts`
- `src/pages/MaintenanceCityPage.tsx`

---

### ISSUE 3 — AIOverviewBlock coverage ⚠️ MOSTLY PASS

All AIOverviewBlock instances on the site **already use `hidden` prop** (renders SR-only with `clip: rect(0,0,0,0)`, in DOM, invisible to users). ✅

**Coverage verified PASS ✅:**
- Homepage, /make-ready/, /maintenance/, /renovations/, /residential/
- /plumbing/, /electrical/, /hvac/, /drywall/, /painting/, /flooring/, /carpentry/, /cleaning/
- All 18 city pages (via `MaintenanceCityPage` AND `CityPageTemplate`)
- /about/, /contact/, /faq/, /services/, /cities/ (= /service-areas/), /blog/, /tampa-bay/
- Comparison pages, all 4 service pages via `ServicePageTemplate`

**MISSING ❌:**
- `src/pages/BlogArticlePage.tsx` (via `BlogArticleLayout.tsx`) — NO hidden AIOverviewBlock on any of the ~30 blog article pages.

**Fix:** Add one hidden `AIOverviewBlock` after the `<h1>` in `BlogArticleLayout.tsx` (line 56), using each post's `tldr` as the `directAnswer` (already 40–60 word summary per article).

**Files to edit:**
- `src/components/fiveserv/BlogArticleLayout.tsx`

---

## Implementation Plan (single pass, on approval)

**5 files total:**

1. `src/content/blog/reduce-vendor-chaos-multifamily.tsx` — swap `text-brand-white*` → `text-gray-700` / `text-gray-900` for wrapper, H2s, table body.
2. `src/content/blog/property-maintenance-costs-central-florida-2025.tsx` — same color swap.
3. `src/content/blog/make-ready-guide-florida-2025.tsx` — same color swap.
4. `src/lib/city-data.ts` — add optional `heroImagePosition?: string` to `CityEditorial`; set Winter Park to `"center 60%"`.
5. `src/pages/MaintenanceCityPage.tsx` — apply `objectPosition` inline style on hero `<img>`.
6. `src/components/fiveserv/BlogArticleLayout.tsx` — add `<AIOverviewBlock hidden directAnswer={post.tldr} />` directly after `<h1>` (line 56).

**Out of scope:** Adding a hero image to `CityPageTemplate.tsx` (the `/cities/:slug` route currently uses solid black — flagging but not changing without explicit approval since it would require image asset decisions).

**No changes to:** routing, schema, sitemap, forms, GHL, Sofia, or any popup logic.

