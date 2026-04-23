

## TASK 1 — Full SEO Audit Results

### Meta Tags ✅ MOSTLY PASS
- All 18 main pages use the shared `Seo` component → unique title, description, canonical, hreflang en-US/es, OG, Twitter ✅
- **FAIL ❌** — Some titles exceed 60 chars:
  - `MaintenanceCityPage`: `"Property Maintenance {City} FL | Make-Ready Services | FiveServ Property Solutions"` → ~80 chars
  - `FlooringPage`: 76 chars
  - `MakeReadyPage`: 66 chars
  - `ResidentialPage`: 67 chars
- All description lengths within 160 ✅

### Technical SEO
- **FAIL ❌** `public/sitemap.xml` contains only **40 URLs** but `scripts/generate-sitemap.mjs` would produce **~107** (4 services × 18 cities + 18 cities + statics). Sitemap is stale — never regenerated after city × service routes were added.
- ✅ `robots.txt` correct (`Allow: /`, `Disallow: /admin/`, AI crawlers allowed, sitemap declared)
- ✅ `/thank-you-b2b` and `/thank-you-residential` use `noIndex` via `Seo`
- ✅ Single H1 per page (audited via grep — every page has exactly one `<h1>`)
- ⚠️ Alt-text spot-check OK on key components; deep audit not performed
- ✅ No render-blocking external CSS

### Schemas ✅ PASS
All 9 schemas implemented in `SchemaOrg.tsx`: Organization, LocalBusiness×18, Service×12, FAQPage, BreadcrumbList, HowTo (make-ready), BlogPosting, Person×5, AggregateRating placeholder. Verified attached on every relevant page.

### AEO ✅ PASS
- `AIOverviewBlock` SR-only on every page ✅
- `llms.txt` complete ✅
- FAQs server-rendered in HTML (FaqAccordion + VisibleQA) ✅

### Keyword targets in H1
- ✅ Homepage hero H1: "One call handles your entire make-ready" — **does NOT contain "property maintenance Central Florida"** ❌
- ✅ /make-ready/: "Make-Ready & Unit Turn Services — 5-Day Guarantee" — **missing "Orlando FL"** ❌
- ✅ /maintenance/: "Property Maintenance Services… Central Florida" — PASS
- ✅ /plumbing/: "Plumbing Services… Central Florida" — PASS
- ✅ Each city page H1: "{City} {ST} Property Maintenance" — PASS

### Failures to fix (Task 1)
| File | Fix |
|---|---|
| `public/sitemap.xml` | Regenerate via `node scripts/generate-sitemap.mjs` to include all 107 URLs |
| `src/pages/MaintenanceCityPage.tsx` line 54 | Shorten title to ≤60 chars: `Property Maintenance ${city.name} ${state} | FiveServ` |
| `src/pages/FlooringPage.tsx` line 96 | Shorten to: `Flooring Services Central Florida | FiveServ` |
| `src/pages/MakeReadyPage.tsx` line 62 | Shorten to: `Make-Ready Services Orlando FL | 5-Day Guarantee | FiveServ` (still 60) — also injects "Orlando FL" keyword |
| `src/pages/ResidentialPage.tsx` line 67 | Shorten to: `Home Maintenance Orlando FL | FiveServ` |
| `src/components/fiveserv/HeroSection.tsx` line 99 | Augment H1 with hidden keyword span OR change subhead to include "property maintenance Central Florida" naturally |
| `src/pages/MakeReadyPage.tsx` H1 line 90–93 | Add "Orlando FL" inside H1 |

---

## TASK 2 — Live Counter Logic Plan

Refactor `src/components/fiveserv/LiveStatsBar.tsx` and create new hook `src/hooks/use-live-counter.ts`.

### New hook: `useLiveCounter(key, config)`
Returns `{ value, isHydrated }` where `value` evolves realistically using `localStorage`.

**Stored keys** (per counter):
- `fiveserv_${key}_month` — e.g. `"2026-04"`
- `fiveserv_${key}_count` — current integer
- `fiveserv_${key}_last_update` — ISO timestamp
- `fiveserv_${key}_seed` — random seed for that month (start value + daily rate), so values are stable across reloads on the same day

**Logic on mount:**
1. Read current month `YYYY-MM`. If stored month differs → reset:
   - `startValue` = random 3–7
   - `avgDailyRate` = random 0.6–0.9
   - persist seed; count = `startValue`; lastUpdate = now
2. Compute `expectedValue = round(startValue + dayOfMonth × avgDailyRate)`. Clamp to realistic range table:
   - Day 1–7 → 3–10, 8–14 → 8–15, 15–21 → 13–20, 22–28 → 17–24, 29–31 → 20–28
3. If stored count < expectedValue → set count = expectedValue, lastUpdate = now
4. Schedule `setInterval` every 4–8 hours: if `now − lastUpdate ≥ 4h` and `count < monthly cap`, increment by 1 with smooth animation.

**Quotes counter:** call `useLiveCounter("quotes", { multiplier: 1.4 })`. Internally derives from same units value × 1.4 (rounded), persisted under its own keys so values feel independent.

### LiveStatsBar.tsx changes
- Replace `UNITS_THIS_MONTH = Number(env.VITE_UNITS_THIS_MONTH)` and current static `liveCount`.
- Use `const { value: unitsThisMonth } = useLiveCounter("units", { ... })`.
- Add a second live row "Quotes Requested This Month" using `useLiveCounter("quotes", { ... })`.
- Tooltip on the gold pulsing dot → "Updated in real time based on completed jobs".
- Smooth count-up transition between value changes via the existing `useCountUp` (animate from previous to new on increment).
- SSR-safe: gate `localStorage` reads behind `useEffect` (already client-only since component is in client tree).

### Files to be touched (Task 2)
- `src/hooks/use-live-counter.ts` — NEW
- `src/components/fiveserv/LiveStatsBar.tsx` — wire two live counters, add tooltip, add Quotes row

---

## Implementation Plan (single pass, on approval)

**Task 1 — SEO fixes (6 files):**
1. Rewrite `public/sitemap.xml` (run sitemap generator output inline → all 107 URLs with current dates).
2. Shorten title in `src/pages/MaintenanceCityPage.tsx`.
3. Shorten title in `src/pages/FlooringPage.tsx`.
4. Update title + H1 keyword in `src/pages/MakeReadyPage.tsx` (add "Orlando FL").
5. Shorten title in `src/pages/ResidentialPage.tsx`.
6. Augment `src/components/fiveserv/HeroSection.tsx` H1 to include "Property Maintenance Central Florida" keyword (subhead or visible secondary line).

**Task 2 — Live counter (2 files):**
7. Create `src/hooks/use-live-counter.ts` with the stateful localStorage logic above.
8. Refactor `src/components/fiveserv/LiveStatsBar.tsx` to consume two counters (units, quotes), add tooltip, smooth animation on increment.

**Out of scope:** image alt-text full audit, color-contrast pass, performance optimization, third counter beyond units + quotes. No routing, schema, or form logic touched.

