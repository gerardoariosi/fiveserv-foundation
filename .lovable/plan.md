

## Audit findings

**Issue 1 — Invisible hero text on dark heros**
Found in `FlooringPage.tsx` (line 129: `text-brand-black` on `bg-brand-black` hero), and similar patterns likely repeated in other inner pages. Most dark heros already use `text-brand-white`, but several pages mix `text-brand-black` text on dark hero backgrounds. Audit will sweep all 18+ page hero sections.

**Issue 2 — Typography too heavy**
`SectionHeading` (the shared H2 component used everywhere), `FamilyStory`, `BlogArticleLayout`, `ServiceCard`, `LeadMagnetSection`, `CityGrid` all use `font-black` (900). Per spec, only the homepage hero H1 keeps 900. Section H2 → `font-bold`, card H3 → `font-semibold`.

**Issue 3 — Logo in header is plain text**
`StickyHeader.tsx` lines 42–48: just two `<span>`s, no square box, no tagline.

**Issue 4 — Footer brand wordmark**
`Footer.tsx` lines 12–16: gold "F" + white "iveServ", with "Property Solutions" all caps gold below — looks generic.

**Issue 5 — Section labels too bold**
Currently `font-bold` everywhere (`SectionHeading`, hero blocks, etc.). Spec wants `font-medium` with a leading `—` glyph.

**Issue 6 — H2 color on light sections**
`text-brand-black` (true black `#1A1A1A`) used pervasively on white/gray-50 sections in Flooring, Painting, Cleaning, Maintenance, Make-Ready, Renovations, Plumbing, Electrical, HVAC, Carpentry, Drywall, Residential, About pages. Spec wants `text-gray-900` for H2 and `text-gray-600` for body.

---

## Fix plan (no content/route changes)

### Fix 1 — Hero text contrast sweep
Audit every page's hero `<section>`. Where `bg-brand-black` is set:
- H1 → `text-white font-display`
- Subtitle/paragraph → `text-gray-300`
- Any breadcrumb → `text-gray-400`
- Replace any `text-brand-black` inside a dark hero (e.g. `FlooringPage` line 129, line 156).

Files to touch: `FlooringPage`, `PaintingPage`, `CleaningPage`, `CarpentryPage`, `MaintenancePage`, `MakeReadyPage`, `RenovationsPage`, `PlumbingPage`, `ElectricalPage`, `HvacPage`, `DrywallPage`, `ResidentialPage`, `AboutPage`, `FaqPage`, `ContactPage`, `BlogPage`, `ServicesIndexPage`, `CitiesIndexPage`, `MaintenanceCityPage`, `TampaBayPage`, `ThankYou*` pages, `ServicePageTemplate`, `CityPageTemplate`.

### Fix 2 — Typography weights
- `SectionHeading.tsx` H2 → `font-display font-bold` (was `font-black`)
- `ServiceCard.tsx`, `LeadMagnetSection.tsx`, `CityGrid.tsx` H3s → `font-semibold` (was `font-black`)
- `FamilyStory.tsx`, `BlogArticleLayout.tsx` inline H2s → `font-bold`
- Per-page H2s using `font-display text-3xl/4xl` keep size, switch to `font-bold`
- `index.css` `h2, h3` rule (currently `font-weight: 900`) → split: H1 stays 900, H2 = 700, H3 = 600
- Body paragraphs on long-form pages → ensure `leading-relaxed` (1.625) where missing; `leading-7` ≈ 1.7

### Fix 3 — Header logo
Rewrite logo block in `StickyHeader.tsx`:
```tsx
<Link to="/" className="flex items-center gap-3">
  <span className="inline-flex items-center justify-center bg-brand-black text-brand-gold font-display font-black text-base px-2 py-1.5 rounded-md border border-brand-gold/40">
    FS
  </span>
  <span className="flex flex-col leading-tight">
    <span className="font-display font-bold text-brand-white text-lg">FiveServ</span>
    <span className="hidden lg:inline text-[10px] text-gray-400 uppercase tracking-wider">Property Solutions</span>
  </span>
</Link>
```

### Fix 4 — Footer brand
Replace `Footer.tsx` lines 12–17 with the same logo treatment + gray italic tagline:
```tsx
<Link to="/" className="flex items-center gap-3">
  <span className="inline-flex items-center justify-center bg-brand-black text-brand-gold font-display font-black text-base px-2 py-1.5 rounded-md border border-brand-gold/40">FS</span>
  <span className="font-display font-bold text-brand-white text-lg">FiveServ</span>
</Link>
<p className="mt-3 text-sm italic text-gray-400">Five Days. One Call. Done.</p>
```
Remove the gold "Property Solutions" all-caps line.

### Fix 5 — Section label style
Update `SectionHeading.tsx` eyebrow:
```tsx
<p className="text-brand-gold text-xs font-medium uppercase tracking-[0.12em] mb-3">
  — {eyebrow}
</p>
```
And hand-rolled section labels across pages (the `<p className="text-sm font-bold uppercase tracking-wide text-brand-gold">` pattern) → swap `font-bold` → `font-medium`, prepend `— `. Sweep all pages.

### Fix 6 — H2/body color on light sections
Global find-and-replace within light-section contexts:
- H2/H3 on white or `bg-gray-50`: `text-brand-black` → `text-gray-900`
- Body paragraphs (`<p>` with `text-brand-black` or default): standardize to `text-gray-600`

Will be done per-page targeting only headings inside `bg-white` / `bg-gray-50` / no-bg sections (not inside dark heroes/cards/CTAs/footer where black is intentional like inside gold pills).

---

## Files modified (estimate)
- 2 shared layout: `StickyHeader.tsx`, `Footer.tsx`
- 1 design token: `index.css`
- 3 shared components: `SectionHeading.tsx`, `ServiceCard.tsx`, `CityGrid.tsx`, `LeadMagnetSection.tsx`, `FamilyStory.tsx`, `BlogArticleLayout.tsx`, `ServicePageTemplate.tsx`, `CityPageTemplate.tsx`
- ~22 page files for hero contrast + label/H2 sweep

## What stays untouched
- All routes, slugs, schemas, copy, FAQs, blog content, SEO meta
- Homepage hero (`HeroSection.tsx`) — keeps `font-black` H1
- All component logic, hooks, data files
- ServiceAreaMap, all CTAs, all forms

## Out of scope
- No new components, no new pages, no layout restructuring, no color palette changes beyond swapping `text-brand-black` → `text-gray-900` / `text-gray-600` on light sections

