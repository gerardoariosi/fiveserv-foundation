

## Goal
Complete the visual redesign to a white-default, Aspect-style premium look. Build on top of the partial work already done (Phase 1 hit homepage shared components). This phase tightens the design system and sweeps every remaining page.

## What's already in place
- Tokens: `brand-light`, `.section-light`, `.section-light-gray`, `.section-dark` exist.
- Homepage shared components already converted: `ProblemSection`, `SolutionSection`, `ServiceCard`, `TestimonialCard`, `FaqAccordion`, `AIOverviewBlock`, `LeadMagnetSection`, `CityGrid`, `FamilyStory`, `StickyHeader`, `StickyBanner`.
- Homepage `Index.tsx` uses the new section rhythm.

## What this round changes

### A. Design-system upgrades (refine, don't rebuild)

1. **ServiceCard — full photo redesign** (new spec, biggest visual change)
   - Add optional `image?: string` prop. Render a 4/3 photo on top (`rounded-t-xl object-cover`), white body below (`p-6`), gold CTA link, `rounded-xl border border-gray-100 hover:border-brand-gold hover:shadow-lg`.
   - Fallback when no image: gold icon tile (current style) inside the photo area so existing call sites don't break.
   - Update `SERVICE_META` on homepage to pass placeholder image paths (e.g. `/images/services/make-ready.jpg`) — graceful fallback to icon if asset missing.

2. **Section heading pattern** — introduce a tiny `SectionHeading` component:
   ```
   <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">{eyebrow}</p>
   <h2 className="text-brand-black font-display font-black text-3xl lg:text-4xl">{children}</h2>
   ```
   Use across homepage sections + sweep into inner pages where it fits without rewriting copy.

3. **Section spacing** — standardize all `py-20` → `py-16 lg:py-24` on light sections.

4. **CTA button conventions** — on light sections switch primary CTAs from `cta-gold` to `bg-brand-black text-white hover:bg-gray-900`. Keep gold CTAs only on hero, dark sections, and the gold 5-Pillars band.

5. **FaqAccordion polish** — active item gets `border-brand-gold bg-brand-gold/5`, chevron `text-brand-gold`.

6. **SolutionSection table** — left col `bg-gray-50 border border-gray-200`, right col `bg-white border-2 border-brand-gold shadow-md`, X marks `text-gray-400` (not red), check `text-brand-gold`.

7. **ProblemSection cards** — switch to `bg-white border-l-4 border-brand-gold shadow-sm` (left-border accent instead of full border).

8. **StickyBanner** — `text-xs font-medium text-brand-black`, single-line `truncate`, `h-8`.

### B. Page sweep (the big remaining work)

Mechanical class swap across every page that still has dark sections + dark cards. Pattern:

| Find | Replace with |
|---|---|
| `<section className="bg-brand-black ...">` (non-hero) | `<section className="bg-white ...">` |
| `<section className="bg-brand-gray ...">` | `<section className="bg-gray-50 ...">` |
| `bg-brand-gray/40` / `bg-brand-black p-6/8` (cards) | `bg-white border border-gray-100 rounded-xl shadow-sm` |
| `text-brand-white` (in flipped sections) | `text-brand-black` |
| `text-brand-white/80` | `text-gray-700` |
| `text-brand-white/60` | `text-gray-500` |
| `border-brand-gold/30` on cards | `border-gray-100 hover:border-brand-gold` |
| `cta-gold` on light-section primary CTAs | `bg-brand-black text-white hover:bg-gray-900 rounded-md px-6 py-3 font-bold` |

Hero blocks (`bg-brand-black pt-32 pb-16`) on inner pages stay dark. Final ContactCTA stays dark. Footer stays dark.

**Pages to sweep (~26 files):**
AboutPage, ServicesIndexPage, CitiesIndexPage, MakeReadyPage, MaintenancePage, RenovationsPage, ResidentialPage, CleaningPage, PaintingPage, PlumbingPage, ElectricalPage, HvacPage, FlooringPage, DrywallPage, CarpentryPage, MaintenanceCityPage, ServiceCityPage, CityPage, FaqPage, BlogPage, BlogArticlePage, ContactPage, TampaBayPage, ThankYouB2BPage, ThankYouResidentialPage, NotFound, TermsPage, PlaceholderPage.

Plus shared templates: `ServicePageTemplate`, `CityPageTemplate`, `BlogArticleLayout`.

### C. Global background flip
- `src/index.css`: change `body { @apply bg-background ... }` → `bg-white text-brand-black`.
- Keep CSS HSL tokens unchanged. Dark sections paint themselves with `bg-brand-black`.
- `RootLayout.tsx`: outer wrapper `bg-white text-brand-black` (was `bg-background text-foreground` which is dark).

## What I will NOT touch
- Hero (`HeroSection.tsx`) — stays exactly as is.
- Brand color tokens (gold/black HSL values).
- Fonts, routes, Seo, SchemaOrg, FAQ data, blog content.
- Sofia chat, ExitIntent popup, TrustBar internals, LiveStatsBar (dark by spec).
- Footer (dark by spec).
- StickyHeader behavior (stays dark; only the existing logo markup).

## Files to edit (~35)
- **Tokens/global (2):** `src/index.css`, `src/layouts/RootLayout.tsx`
- **Shared components (6):** `ServiceCard`, `ProblemSection`, `SolutionSection`, `FaqAccordion`, `StickyBanner`, new tiny `SectionHeading.tsx`
- **Homepage (1):** `src/pages/Index.tsx` (wire eyebrows, photo paths for ServiceCard, CTA button swap)
- **Templates (3):** `ServicePageTemplate`, `CityPageTemplate`, `BlogArticleLayout`
- **Pages (~25):** mechanical sweep listed above

## One quick decision before I start

<lov-actions>
<lov-suggestion message="Use placeholder image paths like /images/services/make-ready.jpg for the new ServiceCard photo redesign — I will add the actual images later. Cards fall back to the gold icon tile when image fails to load.">Use placeholder image paths now</lov-suggestion>
<lov-suggestion message="Skip the photo-on-top ServiceCard redesign for now and keep the icon tile. Apply all other Aspect-style changes (white default, spacing, typography, CTA buttons, page sweep). I will request the photo redesign separately once I have real images.">Skip photo cards for now</lov-suggestion>
<lov-suggestion message="Generate AI placeholder images (one per service: make-ready, maintenance, renovations, residential) and wire them into the new ServiceCard so the redesign ships fully complete.">Generate AI service photos</lov-suggestion>
</lov-actions>

