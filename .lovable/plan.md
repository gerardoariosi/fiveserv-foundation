## Goal

Hide the `LiveStatsBar` on the homepage until the user scrolls past ~90% of the viewport, using a CSS `hidden` class on the outer element instead of an early `return null`. This avoids any potential hooks-ordering concerns and guarantees the section is never visible at initial load on `/`.

## Change

**File:** `src/components/fiveserv/LiveStatsBar.tsx`

1. Remove the existing early return:
   ```tsx
   if (isHome && !scrolled) return null;
   ```

2. Add a `hidden` class conditionally to the outermost `<section>` element (the one with `bg-brand-black border-y border-brand-gold/20`):
   ```tsx
   <section
     ref={sectionRef}
     className={`bg-brand-black border-y border-brand-gold/20 ${isHome && !scrolled ? "hidden" : ""}`}
     aria-label="FiveServ live company stats"
   >
   ```

   Note: `TooltipProvider` is the actual outermost element but it doesn't render a DOM node, so applying `hidden` to the `<section>` is the correct hide point.

## Why this works

- Tailwind's `hidden` class applies `display: none`, fully removing the bar from layout (no overlap with the transparent header).
- All hooks still run in stable order regardless of route or scroll position.
- When the user scrolls past ~90vh, `scrolled` flips to `true`, the `hidden` class is removed, and the bar appears.
- On non-home routes, `isHome` is `false`, so the bar always renders normally.

## Out of scope

- No changes to `StickyHeader.tsx`, `HeroSection.tsx`, `RootLayout.tsx`, or any other file.
- No change to the scroll threshold (stays at `window.innerHeight * 0.9`).
