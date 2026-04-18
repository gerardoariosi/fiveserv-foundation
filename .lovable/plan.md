

## Audit — Where amber/gold reads weak on white and should become dark gray

The user's rule:
- **KEEP gold/amber** where it works: inline accents inside paragraphs, on dark bg, on tinted (gold/cream) bg, as borders/underlines, star ratings, large display digits.
- **REPLACE with `text-gray-900`** (or `text-gray-700` for secondary) where amber sits as a **standalone label or H2 accent on pure white/gray-50** with no surrounding gold context.

Below: every confirmed bad instance, grouped by pattern. Each pattern row applies to all listed file:line locations.

---

### Group A — Section eyebrow labels on white/gray-50 (dominant offender)

These are the `— EYEBROW` tags above H2s. On white they read as muted brown sludge.
**Proposed:** `text-amber-700` → `text-gray-900` (keep the `— ` em-dash, font stays `font-medium uppercase tracking-[0.12em]`).

| File | Line | Element |
|---|---|---|
| `src/components/fiveserv/SectionHeading.tsx` | 26 | Shared eyebrow used by every page |
| `src/components/fiveserv/BlogArticleLayout.tsx` | 94 | "— Keep Reading" eyebrow (gray-50) |
| `src/components/fiveserv/BlogArticleLayout.tsx` | 134 | "— FAQ" eyebrow (white) |
| `src/components/fiveserv/FamilyStory.tsx` | 27 | "Built by a Family" eyebrow (white) |
| `src/components/fiveserv/AIOverviewBlock.tsx` | 21 | "Quick Answer" label when `tone="light"` |
| `src/pages/AboutPage.tsx` | 164 | "— {role}" team-card eyebrow |
| `src/pages/CarpentryPage.tsx` | 303 | "— Quality Spec" |
| `src/pages/DrywallPage.tsx` | 151, 257 | "— The Hidden Make-Ready Killer", "— Texture Matching" |
| `src/pages/ElectricalPage.tsx` | 152, 258 | "— Liability & Safety", "— Why Licensed Matters" |
| `src/pages/HvacPage.tsx` | 153, 258 | "— Florida Heat Reality", "— Florida Compliance" |
| `src/pages/PlumbingPage.tsx` | 151, 256 | "— The Real Cost of Delay", "— Why Licensed Matters" |
| `src/pages/CleaningPage.tsx` | (similar block pattern) | section eyebrows on white |
| `src/pages/PaintingPage.tsx` | (similar block pattern) | section eyebrows on white |
| `src/pages/FlooringPage.tsx` | (similar block pattern) | section eyebrows on white |
| `src/pages/MakeReadyPage.tsx`, `MaintenancePage.tsx`, `RenovationsPage.tsx`, `ResidentialPage.tsx` | various | matching eyebrow pattern |

Estimated ~30–40 instances total. **Single shared fix in `SectionHeading.tsx`** handles the majority site-wide.

---

### Group B — H2 accent spans on pure white/gray-50

These are the `<span className="text-amber-700">word</span>` inside H2s on light sections. The user keeps gold for *inline paragraph* accents, but H2 accents on white read flat.
**Proposed:** `text-amber-700` → `text-gray-900` (so the whole H2 is one bold dark unit; emphasis comes from weight/size, not color).

Note: this is a judgment call — see decision question below.

| File | Line | H2 phrase |
|---|---|---|
| `src/pages/Index.tsx` | 101 | "What Property Managers Say About **FiveServ**" |
| `src/pages/Index.tsx` | (services H2) | "Everything Your Properties Need. **One Team.**" |
| `src/components/fiveserv/SolutionSection.tsx` | 23 | "One Call. **One Team.** One Invoice." |
| `src/components/fiveserv/CityGrid.tsx` | 54 | "Serving 18 Cities Across **Central Florida**" (gray-50) |
| `src/components/fiveserv/LeadMagnetSection.tsx` | 39 | "Three free tools for **property managers**." (gray-50) |
| `src/components/fiveserv/FamilyStory.tsx` | 31 | "A **Venezuelan-American Family** Trusted Across Central Florida." |
| `src/pages/AboutPage.tsx` | 84, 112, 139, 209 | Story / Track Record / Team / Licenses |
| `src/pages/ResidentialPage.tsx` | 141, 142, 167, 196 | "Venezuelan-American family", "15+ years", "Fix at Home", "3 Steps" |
| `src/pages/MakeReadyPage.tsx`, `MaintenancePage.tsx`, `Plumbing/Drywall/Hvac/Electrical/Carpentry/Painting/Flooring/Cleaning/Renovations/Faq/Contact/Blog` Pages | many | H2 accent spans on light bg |

Estimated ~50 instances.

---

### Group C — Card icons on white card backgrounds

Icon circles `bg-amber-700/10 text-amber-700` on white cards. Sit alone, no surrounding gold context. The icon disappears as muted brown.
**Proposed:** `bg-amber-700/10 text-amber-700` → `bg-gray-100 text-gray-900` (or keep the gold tint but darken icon to `text-gray-900`).

| File | Line | Card |
|---|---|---|
| `src/components/fiveserv/ServiceCard.tsx` | 20 | Service grid card (used 4× on home, in services index) |
| `src/components/fiveserv/LeadMagnetSection.tsx` | 48 | Free tools cards (3×) |
| `src/pages/AboutPage.tsx` | 229 | License/insurance cards |
| `src/pages/ResidentialPage.tsx` | 177 | "What we fix at home" cards |
| `src/pages/CarpentryPage.tsx`, `Cleaning`, `Drywall`, `Electrical`, `Flooring`, `Hvac`, `Painting`, `Plumbing`, `Renovations`, `MakeReady`, `Maintenance`, `Residential` Pages | various | Service grid icon circles on white cards |

Estimated ~25 instances.

---

### Group D — Standalone "Learn more / CTA link" text on white

Bare `text-amber-700` link text on white card footers. No tinted background, no border.
**Proposed:** `text-amber-700 hover:underline` → `text-gray-900 hover:text-amber-700 hover:underline` (dark by default, gold reveals on hover — best of both).

| File | Line | Element |
|---|---|---|
| `src/components/fiveserv/ServiceCard.tsx` | 27 | "Learn more →" |
| `src/pages/ResidentialPage.tsx` | 154 | "Meet the family →" |
| `src/components/fiveserv/CityGrid.tsx` | 78 | `group-hover:text-amber-700` on city H3 (already hover-only, **keep as is**) |
| `src/components/fiveserv/CityGrid.tsx` | 81 | "Within {responseTime}" — standalone amber on white card → change to `text-gray-700` |
| Multiple page "More from FiveServ" link clusters | various | bare amber links on white |

---

### Group E — MapPin icons on white city cards

`<MapPin className="text-amber-700">` standalone on white card in `CityGrid.tsx` (lines 71, 94).
**Proposed:** keep as `text-amber-700` since the icon also lives on `bg-brand-gold/5` "Coming Soon" card (line 91 — tinted) and the colored pin reads as a map marker (semantic meaning, like the rating stars exception). **Recommend: KEEP.** Confirm?

---

### What to KEEP (matches user's "works well" list)

- **`AIOverviewBlock` Quick Answer label** — sits on `bg-white/5 backdrop` on dark bg OR on white card with **gold left border + tinted bg**. The dark-tone variant is fine. The light-tone (line 21) is borderline — the box has a `border-l-4 border-brand-gold` so the amber label has gold context → **proposal: KEEP**. Confirm?
- **`BlogArticleLayout.tsx` line 50** — "category" pill on `bg-brand-gold/15` (gold tint bg) → **KEEP**.
- **`BlogArticleLayout.tsx` line 78** — "TL;DR" label inside `border-l-4 border-brand-gold bg-gray-50` box → **KEEP**.
- **`BlogArticleLayout.tsx` line 44** — "← Back to Blog" sits on dark hero → already on dark, **KEEP**.
- **`SolutionSection.tsx` line 42, 46** — "With FiveServ" H3 + Check icons sit inside `border-2 border-brand-gold` card with gold context → **KEEP** (icons benefit from semantic green-ish meaning here).
- **`CleaningPage.tsx` lines 276, 291** + similar — pills on `bg-brand-gold/15` tinted background → **KEEP**.
- **All hero CTA buttons** with `border-2 border-brand-gold ... text-amber-700` on white sub-section — these have gold border context → **judgment call, lean KEEP**.
- **`_blocks.tsx` table headers + InternalLinkCluster** — these are **inline link accents** inside paragraphs (matches "inline text accents within paragraphs") → **KEEP**.
- **`AboutPage.tsx` line 120, 187** — large `text-5xl/6xl text-amber-700` display digits → **KEEP** (large display rule).
- **All `text-brand-gold` instances on `bg-brand-black`** — heroes, footer, ContactCTA, sticky header, etc. → **KEEP** (already correct).
- **`TestimonialCard` star fills** → **KEEP**.

---

### Files modified estimate (if approved)

| Type | Count | Details |
|---|---|---|
| Shared components | 5 | `SectionHeading`, `ServiceCard`, `LeadMagnetSection`, `FamilyStory`, `CityGrid` |
| Templates | 2 | (no changes — those are dark heros, already gold) |
| Page files | ~16 | Each page's mid-section eyebrows + H2 accents + icon circles |
| Total instances | ~110 | Down from current ~1,570 amber instances |

Most of the impact comes from updating **`SectionHeading.tsx`** (cascades site-wide) plus a bulk find-replace per-page on the eyebrow + H2 accent + icon-circle patterns.

---

### 3 decision questions before I apply

1. **H2 accent spans** (Group B) — replace with `text-gray-900`? (Option B: replace with `text-gray-700` for slightly softer emphasis. Option C: keep amber and only fix eyebrows + icons.)
2. **Icon circles** (Group C) — `bg-gray-100 text-gray-900` (neutral) or `bg-amber-700/10 text-gray-900` (keep tint, darken icon)?
3. **AIOverviewBlock light-tone label** + **hero CTA outline buttons with amber text** — keep gold (they have gold border/border-l context) or also flip to gray-900?

Reply with your answers (or just "1: gray-900, 2: neutral, 3: keep") and I'll execute.

