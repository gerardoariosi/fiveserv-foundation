

## Goal
Flip the visual balance from mostly-dark → mostly-light + clean, with bold dark accents. Hero, Stats, Final CTA, Footer stay dark. Everything else becomes white or `#F5F5F5`. Keep all content, routes, schemas, fonts, and the existing brand tokens unchanged.

## Strategy
The site has ~47 files using `bg-brand-black` / `bg-brand-gray` baked into hardcoded section classes. Rather than touch every file blindly, do this in 3 phases:

1. **Add tokens + semantic section utilities** — gives us `.section-light`, `.section-light-gray`, `.section-dark` so future work uses semantics, not raw colors.
2. **Make shared components background-aware** — most pages reuse the same components (FaqAccordion, ContactCTA, AIOverviewBlock, BeforeAfterSlider caption, LiveStatsBar context, etc.). Update them so they render correctly on light backgrounds where they're now placed.
3. **Sweep pages** — homepage first (per spec), then the 18+ service pages and city pages with the same pattern.

## Step 1 — Tokens & utilities

`tailwind.config.ts` — add to `colors.brand`:
```
'light': '#F5F5F5',
```

`src/index.css` — add new utilities + neutralize the global dark default body:
```
@layer components {
  .section-light       { @apply bg-white text-brand-black; }
  .section-light-gray  { @apply bg-[hsl(0_0%_96%)] text-brand-black; } /* #F5F5F5 */
  .section-dark        { @apply bg-brand-black text-brand-white; }
}
```
Keep `body` background dark for safety (hero/footer extend); sections paint themselves.

## Step 2 — Homepage section pattern (Index.tsx)

| Section | New class |
|---|---|
| Hero | unchanged (dark) |
| TrustBar | leave (`#2D2D2D` is fine as a thin separator) |
| ProblemSection | `section-light-gray` |
| SolutionSection | `section-light` |
| ServicesGrid | `section-light` |
| FivePillars | `bg-brand-gold text-brand-black` (unchanged — already gold) |
| LiveStatsBar | `section-dark` |
| FamilyStory | `section-light-gray` |
| BeforeAfterSlider wrapper | `section-light` |
| TestimonialsSection | `section-light` |
| Cities + InteractiveMap section | `section-light-gray` |
| FaqAccordion | `section-light` |
| LeadMagnetSection | (keep dark or convert — see Q1) |
| ContactCTA | `section-dark` |
| Footer | `bg-black` (already dark) |

Rule enforced: never two dark sections back-to-back. `LiveStatsBar` (dark) is sandwiched between light sections; `ContactCTA` (dark) sits next to a light FAQ then the dark footer — that's the only allowed dark→dark pair (CTA→Footer), which reads as one continuous footer block.

## Step 3 — Component refactors (background-aware)

Each of these components has dark-coded internals. I'll add a `tone?: 'dark' | 'light'` prop (default `'dark'` for backward compat) OR convert them to neutral surfaces:

- **ProblemSection** — section becomes light-gray; cards become `bg-white border-brand-gold/20`, title `text-brand-black`, body `text-gray-600`, X icon stays `text-destructive`. Lead sentence `text-brand-black` with gold accent span.
- **SolutionSection** — light bg; comparison table: left col `bg-[#F5F5F5]`, right col `bg-white border-l-4 border-brand-gold`, headings `text-brand-black`, "Without" text `text-gray-500`, "With" text `text-brand-black font-bold`. Outer border `border-brand-gold/20`.
- **ServicesGrid** (inside Index) — service cards: `bg-white border-brand-gold/20 hover:border-brand-gold hover:shadow-md`, title `text-brand-black`, body `text-gray-600`, icon stays gold, link stays gold. Section H2 text `text-brand-black` with gold accent span.
- **FamilyStory** — light-gray bg, body text `text-gray-700`, headline `text-brand-black` with gold accent span.
- **BeforeAfterSlider host section + caption** — caption text `text-gray-700`; gold border on slider unchanged.
- **TestimonialsSection** — testimonial cards: `bg-white border-brand-gold/20`, quote `text-brand-black`, name `text-brand-black`, subtitle `text-gray-500`. Stars stay gold.
- **TestimonialCard** — accept `tone` prop or detect parent. Simpler: rewrite to white default since it's only used on the homepage testimonials block.
- **Cities section (homepage)** — light-gray bg, H2 black + gold accent. `InteractiveMap` itself keeps its dark interior map panel (renders as a dark "card" on the light section — visually intentional contrast). City pills below the map: change `bg-brand-gray` → `bg-white border-brand-gold/20`.
- **FaqAccordion** — light bg, H2 black, items: trigger `text-brand-black hover:text-brand-gold`, content `text-gray-700`, border `border-gray-200`.
- **LiveStatsBar** — already dark by spec — keep.
- **ContactCTA** — keep dark per spec; no change needed. (Form inputs already styled for dark.)

## Step 4 — Header & Logo (Step 6 in spec)

`StickyHeader.tsx`:
- Replace logo markup with: `FS` (gold) + `FiveServ` (white on dark header). Since header overlays the dark hero and only becomes opaque-dark on scroll, white is correct everywhere on the homepage.
- Add `text-xl ml-2` on the wordmark per spec.
- For non-homepage pages (which now have light sections at top below the dark hero pattern, OR may not have a dark hero at all), the header is still `fixed` and switches to `bg-brand-black/95` after 80px scroll → wordmark stays readable. But pages like `/services`, `/cities`, `/about` have a dark hero (`bg-brand-black pt-32`), so white wordmark is fine.
- Footer wordmark: keep as-is (dark footer).

`StickyBanner.tsx`:
- Constrain height: `py-1` → fits in `h-8`, change `text-xs sm:text-sm` → `text-xs`. Banner sits above the fixed header (it's in normal flow before `<StickyHeader>` which is `fixed inset-x-0 top-0`). **Issue**: today the fixed header overlaps the banner because the banner is in flow but the header is `fixed top-0`. Need to either (a) make banner also fixed and offset header by `top-8`, or (b) leave banner above and accept that it scrolls away. Per spec "must not overlap header" → option (a): banner `fixed top-0 z-50 h-8`, header `top-8` when banner visible (toggle via a CSS var or a context). Simplest: banner is `sticky top-0 z-50 h-8`, header `top-0` but adds `mt-8` while banner shown. I'll implement banner as fixed `top-0 h-8 z-50` and header as `top-0 z-40` with `pt-8` on the page wrapper when banner is visible — using a small shared state in `RootLayout` (read sessionStorage there, pass via context or render header with `style={{ top: visible ? '32px' : '0' }}`).

## Step 5 — Other pages (service pages, city pages, about, services index, cities index)

All ~25 pages follow the same pattern: dark hero (`bg-brand-black pt-32 pb-16`) + alternating `bg-brand-black` / `bg-brand-gray` sections. I'll do a mechanical sweep:
- Keep the hero dark.
- Convert remaining `bg-brand-black` sections → `section-light` (with accompanying text-color flips).
- Convert remaining `bg-brand-gray` sections → `section-light-gray`.
- Convert inline cards using `bg-brand-black p-8` / `bg-brand-gray/40 p-6` → `bg-white border-brand-gold/20`.
- Final CTA section on each page → `section-dark` (already dark, just confirm).
- Text inside flipped sections: `text-brand-white` → `text-brand-black`, `text-brand-white/80` → `text-gray-700`, `text-brand-white/60` → `text-gray-500`.

Pages affected: AboutPage, ServicesIndexPage, CitiesIndexPage, MakeReadyPage, MaintenancePage, RenovationsPage, ResidentialPage, CleaningPage, PaintingPage, PlumbingPage, ElectricalPage, HvacPage, FlooringPage, DrywallPage, CarpentryPage, MaintenanceCityPage, ServiceCityPage, CityPage, FaqPage, BlogPage, BlogArticlePage, ContactPage, TampaBayPage, ThankYou pages, NotFound, TermsPage.

## Step 6 — AIOverviewBlock

Used on most pages on light backgrounds now. Convert: `bg-white border-l-4 border-brand-gold shadow-sm`, label `text-brand-gold`, body `text-gray-700`.

## Step 7 — Footer

Already `bg-brand-black border-t-2 border-brand-gold` → no change. Bottom strip already `bg-black`. ✓

## Files I will edit

**Tokens & global:**
- `tailwind.config.ts` (add `light: '#F5F5F5'`)
- `src/index.css` (add 3 section utilities)

**Header / banner / layout:**
- `src/components/fiveserv/StickyHeader.tsx` (logo markup, banner-aware top offset)
- `src/components/fiveserv/StickyBanner.tsx` (h-8 fixed, z-50)
- `src/layouts/RootLayout.tsx` (coordinate banner ↔ header offset)

**Shared components made light-default (or background-aware):**
- ProblemSection, SolutionSection, FamilyStory, TestimonialCard, FaqAccordion, AIOverviewBlock, LeadMagnetSection (keep dark or convert per Q1), CityGrid, InteractiveMap surrounding pills

**Homepage:**
- `src/pages/Index.tsx` (apply section classes per table above)

**All other pages (sweep):**
- 25 page files — mechanical class swaps on section wrappers + card containers + text colors. No content/route/schema changes.

## What I will NOT change
- Hero section (`HeroSection.tsx`)
- Brand tokens (gold/black/white HSL values)
- Fonts (Montserrat / Arial)
- Routes, SEO `<Seo>`, `<SchemaOrg>`, FAQ data, blog content
- LiveStatsBar (stays dark per spec)
- ContactCTA (stays dark per spec)
- Footer (stays dark per spec)
- Sofia chat, Exit intent popup, Trust bar internals

## One question before I start

<lov-actions>
<lov-suggestion message="LeadMagnetSection (the 3 free tools section) — convert to light (section-light-gray with white cards) to match the new light-dominant rhythm.">LeadMagnet → light</lov-suggestion>
<lov-suggestion message="Keep LeadMagnetSection dark — it acts as a strong CTA-style band before ContactCTA.">LeadMagnet → keep dark</lov-suggestion>
<lov-suggestion message="Drop LeadMagnetSection from the homepage entirely — too many CTAs stacked at the bottom.">Remove from homepage</lov-suggestion>
</lov-actions>

