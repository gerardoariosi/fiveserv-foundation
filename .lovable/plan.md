## Goal

Restore correct page render order so `LiveStatsBar` sits naturally between the header and the hero, with no fixed positioning. On the homepage before scroll it should be transparent (invisible) so the hero video shows through. After scroll (or on any non-home route), it shows as the normal black bar.

## Final render order on `/`

```text
1. StickyBanner    (gold bar, fixed top)
2. StickyHeader    (fixed below banner; transparent → white on scroll)
3. SocialProofTicker (existing, in RootLayout)
4. LiveStatsBar    (natural flow; transparent → black on scroll)
5. HeroSection     (video starts here, natural flow)
6. ...rest of page (TrustBar, ProblemSection, etc.)
```

## Changes

### 1. `src/components/fiveserv/LiveStatsBar.tsx`

Remove all fixed positioning added in the previous step. The `<section>` should be a normal block element.

- Remove `fixed inset-x-0 z-30` and the `style={{ top: "var(--header-h, 80px)" }}` from the outer `<section>`.
- Apply transparency via opacity so the bar still occupies layout space (preventing the hero from jumping):

  ```tsx
  <section
    ref={sectionRef}
    className={`w-full border-y transition-all duration-300 ${
      isHome && !scrolled
        ? "bg-transparent border-transparent opacity-0 pointer-events-none"
        : "bg-brand-black border-brand-gold/20 opacity-100"
    }`}
    aria-label="FiveServ live company stats"
  >
  ```

- Restore the inner `container` to its original (no `invisible/visible` toggle needed — opacity on the parent handles visibility):

  ```tsx
  <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
  ```

`useLocation`, `isHome`, and the `scrolled` state + scroll listener are already in place — no changes needed there.

### 2. `src/pages/Index.tsx`

Move `<LiveStatsBar />` from line 181 (after `<FivePillars />`) to render immediately before `<HeroSection />` (which is in the `<section>` block around lines 165–174). Result:

```tsx
<LiveStatsBar />
<section ...>  {/* hero wrapper */}
  ...HeroSection...
</section>
<TrustBar />
<ProblemSection />
<SolutionSection />
<ServicesGrid />
<VacancyCalculator />
<FivePillars />
<FamilyStory />
...
```

(Remove the duplicate `<LiveStatsBar />` from its old position so it only renders once.)

### 3. `src/components/fiveserv/HeroSection.tsx`

No changes. `heroTopOffset = "0px"` and `heroVisibleHeight = "calc(100svh - var(--banner-h, 0px))"` already let the hero flow naturally below whatever precedes it. No negative margins.

## Files NOT changed

- `StickyHeader.tsx` — left alone per the user's instruction
- `StickyBanner.tsx` — left alone
- `RootLayout.tsx` — left alone
- `MakeReadyPage.tsx` and `AboutPage.tsx` — also import `LiveStatsBar` but render it deep in the page; leave their positions alone since `isHome` is `false` there and the bar always renders black.

## Why opacity instead of `display:none` / `hidden`

Using `opacity-0 pointer-events-none` keeps the bar's height in the layout, so when it transitions to opaque on scroll it doesn't shove the hero down or cause a content jump. The hero video shows through it naturally on first paint.
