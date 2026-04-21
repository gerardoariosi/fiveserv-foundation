

## Audit Report

### ISSUE 1 — Sticky Banner & Social Proof Ticker

**Components involved**
- `StickyBanner.tsx` — `position: fixed; top: 0; z-50; height: 32px (h-8)`, gold bar.
- `StickyHeader.tsx` — `position: fixed; z-40`, offset via inline `style={{ top: "var(--banner-h, 0px)" }}`. Header body height = `h-20` (80px). The `SocialProofTicker` renders **inside** the header (line 104), adds ~36px more.
- `SocialProofTicker.tsx` — not fixed; just a `div` with `py-2 px-3` (~36px tall). Sits under the nav row, also inside the fixed header.

**Total fixed top stack**
- Banner visible: 32px + 80px nav + ~36px ticker = **~148px**
- Banner dismissed: 0 + 80 + 36 = **~116px**

**Problem**
- Page hero offsets only account for banner + 80px nav. They do NOT account for the ticker (~36px). Anywhere the ticker is shown the top of every hero gets clipped.
  - `HeroSection.tsx` line 29–30: offset = `calc(var(--banner-h) + 5rem)` → ignores ticker (homepage hero loses ~36px from top).
  - All pages using `pt-32` (8rem = 128px) for the dark hero: enough for banner (32) + nav (80) = 112, leaves only 16px breathing room — **with the ticker (36px) the ticker overlaps the eyebrow/H1**.
  - Pages affected by `pt-32` clipping: `AboutPage`, `ContactPage` (uses `pt-32 sm:pt-40`), `ElectricalPage`, `RenovationsPage`, `NotFound`, `HvacPage`, `ServicesIndexPage`, `CitiesIndexPage`, `FlooringPage`, `CarpentryPage`, `MakeReadyPage`, `MaintenancePage`, `PlaceholderPage`, `BlogPage`, `PaintingPage`, `PlumbingPage`, `DrywallPage`, `CleaningPage`, `ResidentialPage`, `MaintenanceCityPage`, `ServiceCityPage`, `CityPageTemplate`, `TampaBayPage`, `FaqPage`, `FiveServVsHandymanPage`, `MakeReadyVsDIYPage`, `BlogArticlePage`, plus the homepage `HeroSection`.

**Proposed fix (single-source-of-truth)**
1. Move `SocialProofTicker` OUT of `StickyHeader` and either (a) drop it, or (b) keep it but render it as a non-fixed element BELOW the fixed header in `RootLayout`, so it scrolls away with the page (cleanest fix — no offset math needed).
2. Set a CSS variable for the full fixed-stack height in `StickyHeader.tsx`:
   `document.documentElement.style.setProperty("--header-h", "80px")` and let `--banner-h` stay at 32/0. Combined offset `--stack-h = banner-h + header-h`.
3. Replace `pt-32` everywhere with inline style `paddingTop: "calc(var(--banner-h,0px) + var(--header-h,80px) + 2rem)"` via a small `.pt-stack` utility class added in `index.css`.
4. Update `HeroSection.tsx` to use the same `--stack-h` variable.

**Files to edit (offset)**: `src/index.css` (add `.pt-stack` utility), `src/components/fiveserv/StickyHeader.tsx` (set `--header-h`, remove ticker), `src/layouts/RootLayout.tsx` (mount ticker as non-fixed under header, optional), `src/components/fiveserv/HeroSection.tsx`, and the 27 pages listed above to swap `pt-32` → `pt-stack`.

---

### ISSUE 2 — AIOverviewBlock visibility

**Component**: `AIOverviewBlock.tsx` already supports `hidden` prop (renders SR-only with `clip: rect(0,0,0,0)`, `aria-hidden`). Currently NO page passes `hidden`, so every block renders **visibly**.

**Pages where AIOverviewBlock IS visible (must add `hidden` prop)**
| Page | File | Note |
|---|---|---|
| Homepage | `src/pages/Index.tsx` | visible block in white section |
| /make-ready/ | `src/pages/MakeReadyPage.tsx` | visible |
| /maintenance/ | `src/pages/MaintenancePage.tsx` | visible |
| /renovations/ | `src/pages/RenovationsPage.tsx` | visible (tone=dark) |
| /residential/ | `src/pages/ResidentialPage.tsx` | visible (tone=dark) |
| /plumbing/ | `src/pages/PlumbingPage.tsx` | visible |
| /electrical/ | `src/pages/ElectricalPage.tsx` | visible |
| /hvac/ | `src/pages/HvacPage.tsx` | visible |
| /carpentry/ | `src/pages/CarpentryPage.tsx` | visible |
| /drywall/ | `src/pages/DrywallPage.tsx` | visible |
| /painting/ | `src/pages/PaintingPage.tsx` | visible |
| /flooring/ | `src/pages/FlooringPage.tsx` | visible |
| /cleaning/ | `src/pages/CleaningPage.tsx` | visible |
| /about/ | `src/pages/AboutPage.tsx` | visible |
| All 18 city pages | `src/components/fiveserv/CityPageTemplate.tsx` | visible (tone=dark) |
| All city × service pages | `src/pages/MaintenanceCityPage.tsx` | visible |
| /fiveserv-vs-handyman-orlando/ | `src/pages/FiveServVsHandymanPage.tsx` | visible |
| /make-ready-vs-diy-property-management/ | `src/pages/MakeReadyVsDIYPage.tsx` | visible |

**Pages MISSING AIOverviewBlock (must add hidden block)**
| Page | File | Proposed 40–60 word direct answer |
|---|---|---|
| /contact/ | `src/pages/ContactPage.tsx` | "Contact FiveServ Property Solutions for property maintenance and make-ready services across Central Florida. Free estimate within 24 hours. Call, WhatsApp, or submit the form. One call, one team, one invoice. Available 24/7 across 18 cities including Orlando, Kissimmee, and Sanford." |
| /faq/ | `src/pages/FaqPage.tsx` | "Frequently asked questions about FiveServ Property Solutions: 5-day make-ready guarantee, 24/7 emergency response, one invoice billing, licensed and insured in Florida. Serving multifamily property managers across 18 cities in Central Florida including Orlando, Kissimmee, Sanford, Winter Park, and Lakeland." |
| /services/ | `src/pages/ServicesIndexPage.tsx` | "FiveServ Property Solutions offers make-ready, plumbing, electrical, HVAC, drywall, painting, carpentry, flooring, cleaning, and renovations across Central Florida. Licensed and insured. One call, one invoice, 5-day guarantee. Serving 18 cities including Orlando, Kissimmee, and Sanford." |
| /cities/ + /service-areas/ | `src/pages/CitiesIndexPage.tsx` | "FiveServ Property Solutions serves 18 cities across Central Florida including Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, and St. Cloud. 24/7 emergency response within 2 hours. 5-day make-ready guarantee." |
| /blog/ | `src/pages/BlogPage.tsx` | "FiveServ Property Solutions blog covering make-ready, multifamily maintenance, CapEx renovations, and property management best practices in Central Florida. Written by operators serving 50+ communities and 300+ units across 18 cities including Orlando, Kissimmee, and Sanford." |
| /tampa-bay/ | `src/pages/TampaBayPage.tsx` | "FiveServ Property Solutions is expanding to Tampa Bay in 2025. Same 5-day make-ready guarantee, 24/7 emergency response, one-invoice billing, and licensed multifamily maintenance — extending the Central Florida operation built across 18 cities and 300+ units." |
| /service-cities/:city/:service | `src/pages/ServiceCityPage.tsx` | (already routed through generic template — verify; if no block, add hidden one mirroring `MaintenanceCityPage` copy.) |
| /404 | `src/pages/NotFound.tsx` | optional — skip (noindex). |
| /thank-you-* | both pages | skip (noindex post-conversion). |
| /terms/ | `src/pages/TermsPage.tsx` | skip (legal). |

**Fix per page**: pass `hidden` prop to every existing `<AIOverviewBlock ... />` call, AND add new `<AIOverviewBlock hidden ... />` calls right after the `<h1>` on the 7 missing pages above.

---

## Implementation Plan (single pass once approved)

1. **Restructure top stack**
   - In `StickyHeader.tsx`: set `--header-h: 80px` on mount, remove `<SocialProofTicker />` from inside the fixed header.
   - In `src/layouts/RootLayout.tsx`: render `<SocialProofTicker />` as a normal (non-fixed) section that scrolls with the page, placed just below where the fixed header would visually end (use `paddingTop: var(--stack-h)` wrapper or simply place it inside `<main>` above `<Outlet/>`).
   - In `src/index.css`: add
     ```css
     .pt-stack { padding-top: calc(var(--banner-h, 0px) + var(--header-h, 80px) + 2rem); }
     @media (min-width: 768px) { .pt-stack { padding-top: calc(var(--banner-h, 0px) + var(--header-h, 80px) + 3rem); } }
     ```
   - Update `HeroSection.tsx` lines 29–30 to use `--header-h` (drop hardcoded `5rem`).
   - Swap `pt-32` → `pt-stack` in the 27 page files listed above.

2. **Hide every existing AIOverviewBlock**
   - Add `hidden` prop to every call site (18 pages/templates).
   - Remove dark-tone visual styling concerns since hidden blocks render off-screen.

3. **Add missing hidden AIOverviewBlocks** to the 7 pages listed (after each H1).

### Files touched (final list)

Top-stack fix (29):
- `src/index.css`
- `src/components/fiveserv/StickyHeader.tsx`
- `src/layouts/RootLayout.tsx`
- `src/components/fiveserv/HeroSection.tsx`
- `src/components/fiveserv/CityPageTemplate.tsx`
- `src/pages/AboutPage.tsx`, `ContactPage.tsx`, `ElectricalPage.tsx`, `RenovationsPage.tsx`, `NotFound.tsx`, `HvacPage.tsx`, `ServicesIndexPage.tsx`, `CitiesIndexPage.tsx`, `FlooringPage.tsx`, `CarpentryPage.tsx`, `MakeReadyPage.tsx`, `MaintenancePage.tsx`, `PlaceholderPage.tsx`, `BlogPage.tsx`, `PaintingPage.tsx`, `PlumbingPage.tsx`, `DrywallPage.tsx`, `CleaningPage.tsx`, `ResidentialPage.tsx`, `MaintenanceCityPage.tsx`, `ServiceCityPage.tsx`, `TampaBayPage.tsx`, `FaqPage.tsx`, `FiveServVsHandymanPage.tsx`, `MakeReadyVsDIYPage.tsx`, `BlogArticlePage.tsx`

AIOverviewBlock `hidden` + missing additions (18 + 7 = up to 23 file edits, several overlap with above):
- All AIOverviewBlock callers (18 pages/templates listed in Issue 2)
- New blocks added in: `ContactPage`, `FaqPage`, `ServicesIndexPage`, `CitiesIndexPage`, `BlogPage`, `TampaBayPage`, `ServiceCityPage`

No routing, schema, sitemap, or form logic touched.

