
## Part 1 — Dropdown redesign (StickyHeader.tsx)

Goal: make the Services / Cities dropdowns feel like Stan's — minimal, light, professional. Today they are dark panels with gold dividers and a nested fly-out, which reads heavy.

Proposed direction (single panel, light, structured):

- Light white panel, 1px hairline border `#E5E7EB`, soft shadow `0 12px 32px rgba(0,0,0,0.08)`, 8px radius. No dark fill, no top gold stripe.
- Replace nested fly-out with one wide mega-panel (~640px) split in 3 columns:
  - Column 1 "Core Services" (5 links)
  - Column 2 "Remodeling" (2 links)
  - Column 3 "Trade Services" (8 links, two sub-columns)
- Section labels: 11px, uppercase, tracking-wider, `text-gray-400`.
- Links: 14px, `text-[#1A1A1A]`, hover → `text-brand-gold` (color change only, no full-row fill).
- Bottom strip inside panel: thin gold accent line + right-aligned "View all services →" link to `/services` in gold.
- Open animation: fade + 4px translate-y, 120ms. Small gold underline grows under the "Services" trigger on hover.
- Cities dropdown gets the same light treatment (single column, "View All Cities →" footer).

Result: airier, editorial, closer to Stan's; keeps brand black + gold but uses them as accents instead of as the panel background.

(Mobile drawer stays as-is — already clean.)

## Part 2 — ServicesIndexPage.tsx rebuild

Replace the page body with three grouped sections matching the spec exactly. Only this file changes.

Structure:

1. Keep existing `<Seo>`, `<SchemaOrg>`, and intro hero section (title + AIOverviewBlock) — unchanged.
2. Remove the current 2-col `SERVICES.map` grid and the "Our Specialties" section.
3. Add three new sections:

```text
SECTION 1  bg #FAFAF8   H2 "Core Services"        5 cards (3-col grid, 2 wrap)
SECTION 2  bg #1A1A1A   H2 "Remodeling"           2 cards centered (max-w 2xl)
SECTION 3  bg #FAFAF8   H2 "Trade Services"       8 cards (4-col grid)
SECTION 4  bg #1A1A1A   CTA banner "One Call. One Team. Done."
```

Card content/links/descriptions copied verbatim from the user spec.

Card styling:

- Light-section card: `bg-white`, `border-l-[3px] border-[#FFD700]`, `shadow-[0_4px_12px_rgba(0,0,0,0.06)]`, gold Lucide icon, bold service name (Playfair Display via existing `font-display`), gray description, gold "Learn More →" arrow link.
- Dark-section card: `bg-white/5`, `border border-[rgba(255,215,0,0.2)]`, `rounded-lg`, white text, gold icon, gold "Learn More →" arrow.

Icon mapping (Lucide, already imported pattern):

- Maintenance → Wrench, Handyman → Hammer, Renovations → Building2, Residential → Home, Make-Ready → Sparkles
- Bathroom → Bath (new import), Kitchen → ChefHat (new import)
- Painting → PaintBucket, Flooring → Layers, Plumbing → Droplets, Electrical → Zap, HVAC → Wind, Drywall → Square, Carpentry → Hammer, Cleaning → Sparkles

CTA banner:
- `bg-[#1A1A1A]`, centered. H2 white Playfair "One Call. One Team. Done." Subtext gray-300 "Available 24/7 across 18 cities in Central Florida." Two buttons: gold `Get a Free Quote` → `/contact`, white outline `Call (407) 881-4942` → `tel:4078814942`.

Implementation notes (technical):

- Local component inside the file (e.g. `<ServiceItem>`) with `variant: "light" | "dark"` so we don't touch shared `ServiceCard`.
- Define three local arrays (`CORE`, `REMODELING`, `TRADES`) with `{ title, href, description, Icon }`.
- Use semantic `<section>` per group, container, `grid gap-6 md:grid-cols-2 lg:grid-cols-3` (Section 1), `md:grid-cols-2` centered (Section 2), `sm:grid-cols-2 lg:grid-cols-4` (Section 3).
- Keep all existing imports; add `Bath`, `ChefHat`, plus any missing icons from lucide-react.
- No changes outside `src/pages/ServicesIndexPage.tsx` for Part 2. Part 1 only edits `src/components/fiveserv/StickyHeader.tsx`.

Confirm to proceed and I'll implement both parts.
