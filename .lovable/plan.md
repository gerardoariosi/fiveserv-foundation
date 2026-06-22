# Fix homepage layout regressions

## Problem 1 — Duplicate H1/subhead in HeroSection

**Confirmed in code.** `src/components/fiveserv/HeroSection.tsx` lines 79–85 contain the old block:

```
<h1>Property Maintenance Central Florida
  <span>One Call. One Team. Done.</span></h1>
<p>Painting, plumbing, electrical, HVAC, drywall, flooring, make-ready…</p>
```

**Fix:** delete lines 79–85. Keep the new pill + H1 + subhead at lines 58–77 untouched.

## Problem 3 — Picker card overlaps the hero/next-section boundary

Restructure the picker so it floats on the seam:

- Remove the picker from inside the `grid lg:grid-cols-12` row in HeroSection. The hero content area becomes a single column (pill + H1 + subhead + CTAs only).
- Render the picker as a **separate full-width container** placed *after* `<HeroSection />` in `Index.tsx`, wrapped in a `relative` element with `margin-top: -64px` (desktop) / `-48px` (mobile) and `z-10` so it pulls up into the hero's bottom edge. The container below it (the white AIOverview section) gets `padding-top` increased so the lower half of the card sits over the white background — half on dark hero, half on white section.
- Card style per your spec: `background: rgba(26,26,26,0.97)`, `border: 1px solid rgba(255,215,0,0.3)`, `border-radius: 12px`, generous padding (`p-6 sm:p-8`), `box-shadow: 0 24px 60px rgba(0,0,0,0.35)`. Same 2×2 tile grid, same labels (Property Maintenance / Handyman / Renovations / Residential), "Choose Your Service" label and "View all services" link unchanged.
- Implementation file: new tiny component `src/components/fiveserv/HeroServicePicker.tsx` (clean separation, ~50 lines). Index.tsx renders `<HeroSection /> <HeroServicePicker /> <section bg-white>…AIOverview…</section>`.

## Problem 2 — Stat strip position

Your two constraints:
- must NOT appear immediately below the picker card
- must be a full-width dark strip below the hero

To satisfy both, move `<HeroStatStrip />` so it renders **inside the hero's bottom band** rather than as a separate section after the hero. Concretely:

- Render `<HeroStatStrip />` **as the last element inside `<HeroSection />`** (after CTAs), full-width across the hero's container, on the same dark hero background, with the existing gold top/bottom borders. It becomes the visual base of the hero.
- Remove `<HeroStatStrip />` from `Index.tsx` (no longer a separate section).
- The picker card then overlaps the seam **between the stat strip and the white section below** — picker sits above the stat strip in the visual stack via `z-index` and negative top margin from the white section's top padding.

Net result vertically: hero image + text + CTAs → stat strip at hero base (dark) → picker card floats half over the stat strip / half over the white section → white AIOverview section continues.

If you prefer the picker to overlap the **top** of the hero/section seam instead (picker over hero image bottom + first slice of white section, stat strip moved entirely below the white section), say so and I'll flip the order.

## Problem 4 — Duplicate audit

Scanned `src/pages/Index.tsx` and `src/layouts/RootLayout.tsx`:

| Section | Count | Action |
| --- | --- | --- |
| HeroSection | 1 | OK |
| HeroStatStrip | 1 (will move per Problem 2) | OK |
| AIOverviewBlock | 1 | OK |
| TrustBar | 1 | OK |
| ProblemSection | 1 | OK |
| SolutionSection | 1 | OK |
| ServicesGrid | 1 | OK |
| VacancyCalculator | 1 | OK |
| FivePillars | 1 | OK |
| **LiveStatsBar** | 1 | ⚠ separate stats component; visually similar to HeroStatStrip (animated counters vs static values). Not a literal duplicate but redundant content. **Recommend removing `<LiveStatsBar />`** to avoid two stats rows on one page. Will do this if you say "remove LiveStatsBar". |
| BeforeAfterSection | 1 | OK |
| FamilyStory | 1 | OK |
| TestimonialsSection | 1 | OK |
| EmergencyBanner | 1 | OK |
| CityGrid | 1 | OK |
| VisibleQA | 1 | OK |
| FaqAccordion | 1 | OK |
| Footer (RootLayout) | 1 | OK |
| Inside HeroSection: H1, subhead, pill, CTAs | **H1 + subhead duplicated** (Problem 1) | Fix |

A comment summarizing this audit will be added at the top of `Index.tsx`.

## Files touched

- `src/components/fiveserv/HeroSection.tsx` — delete duplicate H1/subhead (lines 79–85); remove the inline picker card column; collapse the inner grid to a single column; append `<HeroStatStrip />` inside the hero.
- `src/components/fiveserv/HeroServicePicker.tsx` — new file, dark floating card with the 2×2 tile grid.
- `src/pages/Index.tsx` — remove `<HeroStatStrip />` from the page body, insert `<HeroServicePicker />` between `<HeroSection />` and the AIOverview section, increase the AIOverview section's top padding to leave room for the overlapping card; add the audit comment. Optionally remove `<LiveStatsBar />` (only if you approve).
- No changes to: colors, fonts, schema, SEO tags, copy, icons, any other component.

## Confirmations needed

1. Picker overlap orientation: **picker overlaps stat strip ↔ white section seam** (as planned above), or **picker overlaps hero image ↔ stat strip seam**?
2. Remove `<LiveStatsBar />` from the homepage to eliminate the two-stats-rows redundancy? Yes / No.

Reply with answers (or "go with defaults") and I'll implement.
