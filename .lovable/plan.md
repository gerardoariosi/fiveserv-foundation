

## Servpro-style redesign — audit & change plan

Goal: shift FiveServ from "bold black/gold tech" to "serif/professional/trustworthy" matching servpro.com, **without touching content, routes, or component logic**.

---

### 1. Typography swap (foundation — touches everything)

**Files:**
- `index.html` — replace Clash Display + Plus Jakarta imports with Playfair Display (700, 800) + Inter (400, 500, 600)
- `tailwind.config.ts` — `fontFamily.display` → `Playfair Display`, `fontFamily.sans/body` → `Inter`
- `src/index.css` — rewrite `h1`-`h6` rules: Playfair 700, line-height 1.2, looser tracking (serif likes `letter-spacing: 0` or slightly positive, NOT negative). Body: Inter 400, line-height 1.75. Update `.font-display` and `.font-body` utilities.

**Note:** Clash Display is geometric sans, Playfair is high-contrast serif — the visual jump is huge. Headings will read as "editorial / law firm / Servpro" instead of "SaaS startup."

---

### 2. Header — invert from black to white

**File:** `src/components/fiveserv/StickyHeader.tsx`
- Default state: `bg-white border-b border-gray-200` (currently `bg-brand-black`)
- Logo: keep left, but logo color must work on white (probably swap to dark version or use `text-gray-900`)
- Nav links: `text-gray-700 font-medium hover:text-brand-gold` (Inter 500)
- Phone number: right side, `text-brand-gold font-semibold` with phone icon
- CTA: `bg-brand-gold text-brand-black rounded-full` (already close)
- Scrolled state: add `shadow-md`, **stay white** (don't flip to black like now)
- Mobile menu panel: also white instead of black

**File:** `src/components/fiveserv/StickyBanner.tsx`
- Currently dark — keep dark (it's the announcement strip above the header, that's fine on Servpro too)

---

### 3. Hero — keep dark bg, refine typography only

**File:** `src/components/fiveserv/HeroSection.tsx`
- H1: remove `font-display text-4xl ... lg:text-6xl` weight implications — use Playfair 700 (auto via h1 rule), `leading-[1.15]`
- Subtitle: bump to `text-lg lg:text-xl`, `text-gray-300`, Inter 400
- Trust pills: keep but use Inter 500 small caps
- CTAs: `rounded-full` instead of `rounded-md`, sentence case ("Get a free quote", "Call now", "WhatsApp us")

**Files (~22 page heros):** All inner page heros (`MakeReadyPage`, `MaintenancePage`, `RenovationsPage`, `Plumbing/Drywall/Electrical/Hvac/Carpentry/Painting/Flooring/Cleaning Page`, `AboutPage`, `FaqPage`, `ContactPage`, `BlogPage`, `ServicesIndexPage`, `CitiesIndexPage`, `MaintenanceCityPage`, `TampaBayPage`, `ResidentialPage`, `ThankYou*`, `CityPageTemplate`, `ServicePageTemplate`)
- H1 weight: drop `font-black` → rely on Playfair 700 default
- Eyebrow uppercase labels: Inter 500, tracking-[0.12em], text-xs (already close)
- Hero CTAs: `rounded-full`, drop `uppercase tracking-wide`, sentence case

---

### 4. Section layout normalization

**Files:** All page files using `<section>` blocks (~25 files)
- Container: standardize to `max-w-6xl mx-auto px-6` (currently mix of `container` + various max-widths)
- Vertical padding: `py-20 lg:py-28` (currently `py-24 lg:py-32` — slightly tighter)
- Background: confirm alternation `bg-white` ↔ `bg-gray-50`

This is mostly a sweep through page files + `ServicePageTemplate.tsx` + `CityPageTemplate.tsx`.

---

### 5. Service icons — line style, no tinted circles

**Files:**
- `src/components/fiveserv/ServiceCard.tsx` — remove `bg-amber-700/10 ... rounded-full h-14 w-14` wrapper. Render icon directly at `h-8 w-8 text-brand-gold stroke-[1.5]`
- `src/components/fiveserv/LeadMagnetSection.tsx` — same treatment for the 3 tool cards
- `src/pages/AboutPage.tsx` — license/insurance card icons
- `src/pages/ResidentialPage.tsx` — "what we fix" card icons
- All ~12 service pages (`PlumbingPage`, `Drywall`, `Hvac`, `Electrical`, `Carpentry`, `Painting`, `Flooring`, `Cleaning`, `MakeReady`, `Maintenance`, `Renovations`) — service grid icon circles → bare line icons

Lucide icons are already line-style by default; just removing the circle wrapper achieves it.

---

### 6. Card styling — soft shadow, light border

**Files:**
- `src/components/fiveserv/ServiceCard.tsx` — change `border border-gray-200 ... hover:shadow-xl hover:-translate-y-1` → `border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]`, drop the `-translate-y-1` lift, padding `p-6`
- `src/components/fiveserv/CityGrid.tsx` — city cards: same soft-shadow treatment
- `src/components/fiveserv/LeadMagnetSection.tsx` — tool cards
- `src/components/fiveserv/TestimonialCard.tsx` — testimonial cards
- All page-level card grids (~15 page files) — service cards, "what's included" cards, license cards, blog post cards

Add a custom shadow utility to `tailwind.config.ts`: `shadow-card` and `shadow-card-hover` so we don't repeat the rgba values everywhere.

---

### 7. CTA buttons — pill shape, sentence case, arrow

**Files:**
- `src/components/fiveserv/HeroSection.tsx` — primary CTA: `rounded-full px-8 py-3`, "Get a free quote →"
- `src/components/fiveserv/StickyHeader.tsx` — header CTA: `rounded-full`
- `src/components/fiveserv/ContactCTA.tsx` — bottom CTA section
- `src/components/fiveserv/StickyBanner.tsx` — banner CTA
- `src/components/fiveserv/LeadMagnetSection.tsx`
- `src/components/fiveserv/ExitIntentPopup.tsx`
- All page hero CTAs (~22 page files) — `ServicePageTemplate.tsx`, `CityPageTemplate.tsx`, `MakeReadyPage`, `MaintenancePage`, etc.

Sweep replacements:
- `rounded-md` / `rounded-lg` on primary CTAs → `rounded-full`
- `uppercase tracking-wide` → remove
- Button text: Title Case → sentence case ("Get a Free Quote" → "Get a free quote")
- Append `<ArrowRight className="ml-2 h-4 w-4" />` to primary CTAs

**Note:** This affects copy casing too — confirm before applying.

---

### 8. Body text color sweep

**Files:** Site-wide find/replace
- `text-brand-black` on body text (paragraphs, list items, labels) → `text-gray-700`
- `text-brand-black` on headings → `text-gray-900`
- Body paragraph default class everywhere: `text-gray-700 leading-[1.75]`

Most impactful spots:
- `src/index.css` `body` rule: `text-brand-black` → `text-gray-900`
- `src/components/fiveserv/SectionHeading.tsx` — H2 already `text-gray-900`, subtext already `text-gray-600` → bump to `text-gray-700`
- All page files — paragraph default

---

### Files-changed summary

| Tier | Files | Change |
|---|---|---|
| Foundation | `index.html`, `tailwind.config.ts`, `src/index.css` | Fonts + base colors + shadow utilities |
| Header/footer | `StickyHeader.tsx`, `StickyBanner.tsx`, `Footer.tsx` | Header: dark→white. Banner/footer: keep dark |
| Shared components | `HeroSection.tsx`, `ServiceCard.tsx`, `LeadMagnetSection.tsx`, `CityGrid.tsx`, `TestimonialCard.tsx`, `SectionHeading.tsx`, `ContactCTA.tsx`, `ExitIntentPopup.tsx`, `FamilyStory.tsx`, `SolutionSection.tsx`, `ProblemSection.tsx`, `BlogArticleLayout.tsx` | Card style, icon style, CTA pill, body color |
| Templates | `ServicePageTemplate.tsx`, `CityPageTemplate.tsx` | Hero typo, CTA pill, container max-w |
| Pages (~22) | All `src/pages/*.tsx` | Hero H1 weight, CTA pill, container, body color, service icons |

**Total: ~40 files touched. No logic changes, no content changes, no route changes.**

---

### Decisions needed before applying

1. **Logo color in white header** — do you have a dark/black version of the FiveServ logo, or should I render the existing one in `text-gray-900`?
2. **CTA copy** — confirm flip from `UPPERCASE` to `Sentence case` ("Get a free quote", "Call now", "Request a quote"). Yes/no?
3. **Hero stays dark** — confirmed per spec. All inner page heros also stay `bg-brand-black`. Correct?
4. **Trust bar / StatsBar** — currently dark. Servpro keeps stats sections light. Flip to `bg-gray-50` with dark numbers, or keep dark? (Recommend: keep dark for visual rhythm — dark hero → light section → dark stats → light section.)
5. **Sticky banner** above header — keep (small dark strip with phone + hours) or remove for cleaner Servpro-style?
6. **Apply all 8 changes in one pass**, or stage it (foundation first → header → cards → sweep)?

Reply with answers + "apply" and I'll execute.

