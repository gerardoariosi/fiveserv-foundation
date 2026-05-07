## Audit findings (375×812 mobile)

I navigated the preview at mobile width and captured the homepage top-to-bottom. Findings:

**Hero / SocialProofTicker (broken)**
- The ticker bar overlaps the H1 "Property Maintenance Central Florida" — the text "5 property managers requested a quote today" sits on top of the title.
- Root cause: the ticker is `position: fixed` at `top: var(--banner-h) + var(--header-h)` (≈112px) with height 40px. The hero starts at `marginTop: -(banner+8px)` and content uses `py-10`, which is not enough to clear the ticker on mobile. The recent `pt-8 sm:pt-0` on the ticker made the bar visually taller, worsening the collision.
- Title size on mobile (`text-3xl`) is fine; the issue is vertical clearance, not font size.

**Header (OK)**
- Logo + gold phone + hamburger fit cleanly with `gap-3`. No overlap. Logo is `h-16` which is acceptable inside `h-20` header.

**TrustBar (OK)**
- Marquee scrolls; CTA line wraps to two centered lines on mobile as intended.

**ServicesGrid (OK)**
- `grid gap-8 md:grid-cols-2 lg:grid-cols-4` → 1 column on mobile. Correct.

**Stats / Pillars / Testimonials / CityGrid / FAQ / Footer**
- Footer columns stack 1-col on mobile (`md:grid-cols-2 lg:grid-cols-4`). OK.
- Cities footer list uses `grid-cols-2` which fits at 375px. OK.
- StickyMobileCTA (Call / WhatsApp / Get Quote) renders correctly at the bottom and reserves body padding.

**Minor issues worth fixing**
- StickyBanner truncates "5-DAY MAKE-READY GUARANTEE — CENTR..." on mobile. Acceptable but could be shortened.
- Sofia chat bubble + StickyMobileCTA can crowd the bottom-right; already handled via `--sofia-bottom-offset`. No change needed.

## Fixes (mobile only — desktop untouched)

### 1. `src/components/fiveserv/HeroSection.tsx`
Add top padding on the hero content wrapper so the H1 clears the fixed ticker on mobile.

- Change the inner flex container's padding from `py-10 sm:py-14 lg:py-20` to `pt-32 pb-10 sm:py-14 lg:py-20`.
  - 32 × 4px = 128px ≥ banner(32) + header(80) + ticker(40) clearance on mobile.
- Keep all other classes as they are (title, buttons, stats bar were already adjusted in the previous turn).

### 2. `src/components/fiveserv/SocialProofTicker.tsx`
The `pt-8 sm:pt-0` added previously inflates the bar's effective height inconsistently. Replace with a clean fixed height on both breakpoints and rely on hero padding (above) for clearance.

- Remove `pt-8 sm:pt-0` from the bar's className.
- Keep `text-xs sm:text-sm` on the inner text span (already in place).
- Result: ticker stays a clean 40px bar; hero content sits below it.

### 3. `src/components/fiveserv/StickyBanner.tsx` (small polish)
- Shorten mobile copy so it doesn't truncate awkwardly. Use a responsive split:
  - Mobile (`sm:hidden`): "5-DAY GUARANTEE · 24/7 · ONE CALL"
  - Desktop (`hidden sm:inline`): keep current full text.

### Out of scope
- No desktop layout changes.
- No changes to ServicesGrid, TrustBar, Footer, CityGrid, FAQ, StickyMobileCTA, or Header — they render correctly on mobile.

## Verification
After edits I'll re-screenshot at 375×812 to confirm:
- Ticker no longer overlaps the H1.
- Hero buttons remain stacked full-width.
- Stats row wraps cleanly.
- Banner copy fits on one line without truncation.
