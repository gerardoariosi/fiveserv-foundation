
## Design audit (honest take, before any code)

**Top 5 premium upgrades the site needs**
1. **Tighter typographic hierarchy.** Section H2s currently sit at `text-4xl sm:text-5xl` with cramped eyebrows (mb-3) and short subtext. Premium service sites (Acrew, Latch, Roofstock) use larger, heavier H2s (text-5xl→6xl), more space under the eyebrow, and longer, calmer subtext. Right now headlines feel like body copy in disguise.
2. **Service cards lack weight.** `ServiceCard.tsx` uses `p-6`, `text-xl font-bold`, and a small icon with no real surface treatment. Premium cards need more padding, a felt edge on hover (gold top accent), and a deeper shadow on lift.
3. **Service-page heroes are flat.** `CityPageTemplate` and trade pages use `pt-stack pb-16` with a solid `bg-brand-black`. No depth, no gradient, no overlay. A subtle `from-brand-black/95 via-brand-black to-brand-black/70` plus more vertical room (`pt-32 pb-24`) reads as enterprise, not template.
4. **Footer reads cheap.** Single block, no internal divider, small uppercase headings in gold-on-black with no rhythm. A thin gold hairline between columns and bigger tracking-widest headings will lift it instantly.
5. **Buttons are conversion-critical and underweight.** Primary gold CTAs are rounded-full but lack px-8 py-4 and a tactile `hover:scale-105` — small change, big perceived-quality jump.

**Weakest pages visually**
- **City pages (`CityPageTemplate`)** — hero is mostly text on flat black, no imagery, no visual rhythm. Worst offender.
- **Trade pages** (Plumbing, Electrical, etc.) — built on a generic template, very text-heavy, no hero imagery.
- **Blog index** — list-style with little visual differentiation between articles.

**Homepage clutter / breathing room**
- Between **ServicesGrid → FivePillars → LiveStatsBar → VacancyCalculator** there are 4 stacked sections with similar density. The LiveStatsBar + StatsBar combo feels redundant. The Vacancy calculator + Lead magnet + ContactCTA at the bottom is a three-CTA pileup.
- Testimonials are still `[PLACEHOLDER]` strings — that's the single most damaging credibility hit on the page.

**Outdated/inconsistent components**
- `SocialProofTicker` and `LiveStatsBar` use a different visual language (live-pulse, gray gradients) than the rest of the site (white + gold accents).
- `ExitIntentPopup` and `StickyMobileCTA` overlap on mobile — too many persistent overlays.
- `AIOverviewBlock` (visible mode) is a quiet aside; on dark hero backgrounds the contrast is weak.

**What I'd add/remove to convert PMs better**
- Add: a dedicated **For Property Managers** page (Part 3), real testimonials, a 3-step "how to start" strip near the top of the homepage.
- Remove: placeholder testimonials (replace with a "logos coming soon" strip), one of the two stats bars, the duplicated bottom CTAs.

---

## Part 1 — LLM / AEO / GEO / SEO

1. **`public/llms.txt`** — rewrite from link-list-only to Q&A-augmented format:
   - Keep H1, summary, and existing `## Pages` / `## Services` sections.
   - Add `## Frequently Asked Questions` with 8–10 Q&A pairs (40–60 words each): what FiveServ is, make-ready turnaround, 5-day guarantee mechanics, cities served, 24/7 emergency, billing model (one invoice), pricing range, who they serve, why a maintenance company vs handyman, residential vs multifamily.
   - Add `## Key Differentiators` (numeric: 300+ units, 18 cities, 15+ yrs, 5-day guarantee, one invoice).
   - Add `## Contact Hours` block.

2. **`AIOverviewBlock` audit** — sweep every page that imports it (Index, MakeReady, Maintenance, Renovations, Residential, Cities×18, ServiceCity×72, About, Blog, trade pages, FiveServVsHandyman, MakeReadyVsDIY, TampaBay). Confirm each carries either `directAnswer` + `supportingFacts` (40–60 words combined) or rewrite the legacy `answer` prop to hit that range. Standardize on the new direct-answer/supporting-facts split. Document any page missing it and add.

3. **Homepage FAQPage schema** — `src/lib/homepage-faqs.ts` already exists; ensure the 5 required questions are present (add/replace as needed):
   - What is FiveServ Property Solutions?
   - How fast does FiveServ complete make-ready units?
   - What cities does FiveServ serve in Central Florida?
   - Does FiveServ offer 24/7 emergency maintenance?
   - How does FiveServ billing work?
   Confirm `Index.tsx` passes them to `<SchemaOrg faqs={HOMEPAGE_FAQS} />`.

4. **HowTo schema on MakeReadyPage** — `SchemaOrg` already supports `howTo`. Pass the existing `STEPS` array (extended to 5 named steps: Call/quote → Assessment → Scope confirmed → Crew executes → 5-day delivery + photo report) via `<SchemaOrg howTo={{ name: "FiveServ 5-Day Make-Ready Process", steps: [...] }} />`.

5. **City LocalBusiness schema** — `SchemaOrg` already emits per-city `LocalBusiness` from `MaintenanceCityPage` (`citySlug` → CITIES lookup). Audit: confirm each of the 18 city pages renders the schema with city-specific `addressLocality`, `postalCode`, `areaServed`, zip-code `additionalProperty[]`. Where city data lacks `zones`/`responseTime`/`zips`, fill from `src/lib/city-data.ts`.

## Part 2 — Visual polish (system-wide)

1. **ServiceCard** (`src/components/fiveserv/ServiceCard.tsx`)
   - `p-6` → `p-8`
   - Title: `text-xl font-bold` (already) — keep, but tighten leading
   - Add on hover: `border-t-2 border-transparent group-hover:border-brand-gold` (top accent only)
   - Shadow: `shadow-sm hover:shadow-lg transition-shadow duration-300`

2. **SectionHeading** (`src/components/fiveserv/SectionHeading.tsx`)
   - Eyebrow: `mb-3` → `mb-4`
   - H2: `text-4xl sm:text-5xl` → `text-4xl lg:text-5xl font-bold` (explicit bold)
   - Subtext: `text-lg text-gray-600 max-w-2xl mx-auto`

3. **Service-page heroes** (CityPageTemplate, MakeReadyPage, MaintenancePage, Renovations, Residential, trade pages)
   - `pt-stack pb-16` → `pt-32 pb-24`
   - H1: `text-4xl sm:text-5xl lg:text-6xl` → `text-4xl lg:text-6xl` (drop sm step for cleaner scale)
   - Wrap hero bg in `bg-gradient-to-b from-brand-black via-brand-black to-brand-black/70` overlay layer

4. **Buttons** — primary gold CTA classes in shared button styles (`button.tsx` variant + ad-hoc usages): `px-8 py-4 text-base font-bold rounded-full transition-transform hover:scale-105`

5. **Footer** (`src/components/fiveserv/Footer.tsx`)
   - `pt-20 pb-20` → `py-16` per spec (keep generous; verify)
   - Column headings: `text-xs font-bold uppercase tracking-widest` → `text-sm font-black uppercase tracking-widest`
   - Add `<div class="my-12 h-px bg-brand-gold/20" />` between the top grid and the bottom legal row

6. **Images on service pages** — sweep `<img>` tags across service/trade pages: ensure each is wrapped in `<div class="overflow-hidden rounded-2xl">` with `object-cover object-center` on the `<img>`. Targets: MakeReady, Maintenance, Renovations, Residential, all trade pages, BeforeAfterSlider source assets.

## Part 3 — `/for-property-managers` page

**New files**
- `src/pages/ForPropertyManagersPage.tsx` — built section-by-section per spec:
  1. Dark hero: eyebrow "FOR PROPERTY MANAGERS", H1 "Stop Managing Vendors. Start Managing Properties.", subtitle, gold + outline-white CTAs
  2. `bg-gray-50` problems — 3 cards (Too Many Vendors / Delays / Zero Accountability) using existing ServiceCard styling without links
  3. `bg-white` solution — 4 numbered steps with gold circular number badges
  4. `bg-gray-50` services — 4 cards reusing `ServiceCard` linking to `/make-ready`, `/maintenance`, `/renovations`, `/maintenance`
  5. `bg-white` trust badges — 5-up row (5-Day Guarantee, 24/7, 18 Cities, One Invoice, Licensed & Insured)
  6. `bg-brand-black` CTA — H2 + subtitle + `<GhlFormEmbed formId="z5uNJBg1vr6No9csHxoY" width={863} />`
- SEO via `<Seo title="Property Maintenance for Property Managers — FiveServ Central Florida" description="..." path="/for-property-managers" />` + `<SchemaOrg breadcrumbs={[…]} />`

**Routing** — `src/App.tsx`: add `import ForPropertyManagersPage from "./pages/ForPropertyManagersPage";` and `{ path: "for-property-managers", element: <ForPropertyManagersPage /> }`.

**Navigation** — `src/components/fiveserv/StickyHeader.tsx`: insert `{ to: "/for-property-managers", label: "For PMs" }` into the `NAV` array between Services and Cities. Also add to mobile menu (same array drives it). Add to Footer "Services" or a new "Solutions" column.

**Sitemap** — `scripts/generate-sitemap.mjs`: add `/for-property-managers` to the static URL list; regenerate `public/sitemap.xml`. Add to `public/llms.txt` Pages list.

## Technical notes

- No business-logic changes; pure presentation + content + schema.
- Reuse existing components: `Seo`, `SchemaOrg`, `SectionHeading`, `ServiceCard`, `ContactCTA`, `GhlFormEmbed`, `TrustBar`.
- All colors via tokens (`brand-black`, `brand-gold`, `brand-white`, `gray-50/600/700`) — no raw hex.
- Schema additions extend the existing `SchemaOrg` API; no new schema component needed.
- Visual changes go through `ServiceCard`, `SectionHeading`, `Footer`, and the small set of hero blocks listed — minimizes blast radius.

## Out of scope (call out, don't do)
- Replacing placeholder testimonials (needs real content from you).
- Adding hero imagery to city/trade pages (needs asset direction).
- Refactoring `LiveStatsBar` vs `StatsBar` duplication.

Reply "go" to implement Parts 1–3.
