

## Audit Findings

### ISSUE 1 — Ghost element below hero (CRITICAL)
- **`HeroSection.tsx` lines 140–142** renders an `AIOverviewBlock` INSIDE the dark hero with default `tone="light"` → text uses `text-gray-700` against the `bg-brand-black/60` overlay. Result: nearly-invisible "ghost" text. Plus, `Index.tsx` lines 142–149 renders the *same* component again right after the hero. **Two AI Overview blocks exist back-to-back, one of them invisible.**
- **Fix**: Remove the `AIOverviewBlock` from `HeroSection.tsx` entirely. Keep only the visible one in `Index.tsx`.

### ISSUE 2 — Off-brand colors
- **`ProblemSection.tsx`**: 6 uses of `text-red-600` / `border-red-600` (subtext, headline accent, card border, icon, title). Off-palette.
  - Fix: Replace red with `#1A1A1A` (text) and `#FFD700` (icon/border accent).
- **`FiveServVsHandymanPage.tsx` line 166** & **`MakeReadyVsDIYPage.tsx` line 184**: `text-red-500` on the X icons.
  - Fix: Use `text-gray-400` (neutral X) — keeps brand palette.
- **`BlogArticleLayout.tsx` line 96**: `bg-gradient-to-br from-amber-50/80 to-white` on TL;DR card.
  - Fix: Replace with solid `bg-[#F5F5F5]`.
- `MaintenanceCityPage.tsx` line 88 gradient is a legit fade-to-black on a dark hero — keep (it's brand-black to brand-black, not decorative).
- `BlogArticleLayout.tsx` line 87 dark image gradient overlay — keep (functional readability overlay).

### ISSUE 3 — Typography inconsistency
- `ProblemSection.tsx` headline uses red accent span. Standardize to `text-gray-900` per brand rules.
- AIOverviewBlock label uses `text-gray-900` on light, but the hero ghost block forced `text-brand-gold` only when `tone="dark"` was passed (it wasn't). After removal, no further change needed.

### ISSUE 4 — ExitIntentPopup spec mismatch
- Spec says **1px** border, current is **2px solid #FFD700**. Spec says **40px desktop / 24px mobile padding**, current is `32px 28px`. Spec says **24px close X**, current is `size={20}`. Spec says **NO drop shadows** — currently OK.
- Fix: border `1px`, padding `40px desktop / 24px mobile` (responsive via media query inline), close X `size={24}`.

### ISSUE 5 — AI-content phrases
- Search returned only legit uses (e.g. "best-in-class operators" in a critical FAQ answer, "leverage" as a noun in negotiation context). No corporate filler to remove. **No copy changes needed here.**

### ISSUE 6 — Mobile / performance
- Hero video has no `width`/`height` attrs — videos don't need them the same way images do (CLS handled by `min-height` on section). OK.
- No images found without `loading="lazy"` issues in critical paths during this audit. Not addressing speculative perf in this pass to keep scope tight.

### ISSUE 7 — Other popups/modals
- `SofiaChat.tsx` — separate component, brand-aligned per prior pass. No change in this audit unless user requests.

---

## Fixes — Single Pass

1. **`src/components/fiveserv/HeroSection.tsx`**
   - Remove `AIOverviewBlock` import and the `<AIOverviewBlock ... />` block at the bottom of the hero (lines 5, 140–142).

2. **`src/components/fiveserv/ProblemSection.tsx`**
   - Replace all `text-red-600` / `border-red-600` with brand tokens:
     - Headline accent span: `text-gray-900` (drops red, keeps emphasis via weight).
     - Subtext "10+ days" → `text-gray-900 font-bold` (no red).
     - Card: `border-l-4 border-brand-gold` instead of red.
     - Icon: `text-brand-gold`.
     - Card title `<h3>`: `text-gray-900`.

3. **`src/pages/FiveServVsHandymanPage.tsx`** — change `text-red-500` → `text-gray-400` on X icon (line 166).

4. **`src/pages/MakeReadyVsDIYPage.tsx`** — change `text-red-500` → `text-gray-400` on X icon (line 184).

5. **`src/components/fiveserv/BlogArticleLayout.tsx`** — replace gradient TL;DR card bg `bg-gradient-to-br from-amber-50/80 to-white` with `bg-[#F5F5F5]` (line 96).

6. **`src/components/fiveserv/ExitIntentPopup.tsx`**
   - Border: `2px solid #FFD700` → `1px solid #FFD700`.
   - Padding: responsive — use `40px` on desktop, `24px` on mobile (track via `useState`+`matchMedia` already detects mobile via `isMobile()` helper; inline-style padding switched accordingly, computed once on open).
   - Close X icon: `size={20}` → `size={24}`.

### Out of scope (kept as-is)
- All routing, forms, GHL integrations, Sofia logic, schemas, sitemap, content copy.
- shadcn/ui internal files (`toast`, `toggle`, `calendar`, etc.) — these are library defaults, not user-facing brand surfaces in any meaningful way.
- Functional gradients (image overlay on blog hero, hero-to-section fade on city page).

### Files touched (6)
- `src/components/fiveserv/HeroSection.tsx`
- `src/components/fiveserv/ProblemSection.tsx`
- `src/components/fiveserv/ExitIntentPopup.tsx`
- `src/components/fiveserv/BlogArticleLayout.tsx`
- `src/pages/FiveServVsHandymanPage.tsx`
- `src/pages/MakeReadyVsDIYPage.tsx`

