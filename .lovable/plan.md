

## Plan — Image Quality + Hero Video Cropping

### Issue 5: Hero video cropping (HeroSection.tsx)

Current state (lines 70 & 79-90):
- Container: `min-h-[600px] h-screen` — `h-screen` locks to viewport height which is correct, but combined with `object-cover object-center` on the video, ultra-wide screens crop top/bottom of the subject.
- Video element already has `w-full h-full object-cover` ✓
- Overlay already has `absolute inset-0` ✓

Real fix:
- Container: change `min-h-[600px] h-screen` → `relative w-full min-h-screen` (drop the fixed `h-screen`, let content + min-height drive it; video stays absolute and fills)
- Remove inline `style={{ objectFit: "cover" }}` redundancy (already in className)
- Add `object-position: center center` explicitly (already via `object-center`) ✓
- Keep both video layers as `absolute inset-0 w-full h-full`

This prevents the video from being cropped while still covering the viewport. On ultra-wide, the video will scale up and crop sides instead of top/bottom — which is the intended `object-cover` behavior. If user wants the *whole* video visible (no crop ever), that requires `object-contain` + letterboxing, which the user did not request.

### Issue 4: Image quality audit

Project is **Vite + React** (not Next.js) — `next/image` and `quality={100}` don't apply. Will translate the intent:

1. **Remove blur/filter/opacity on `<img>`**: grep for `filter`, `blur`, `opacity-` on img tags and overlay layers that wrap images.
2. **Remove width/max-width constraints stretching images**: spot-check service cards, testimonials, family story image, blog images.
3. **Add `sizes="100vw"`**: only meaningful for `srcset`. None of the current `<img>` tags use `srcset`, so this is a no-op. Will skip unless we add responsive sources (out of scope).
4. **Verify `object-fit: cover`**: grep for `object-fill`/`object-scale-down`/`object-contain` misuse.
5. **Remove `transform`/`scale` on images**: grep for `scale-` and `hover:scale-` on `<img>`. Hover-zoom (`hover:scale-105`) is a common UX pattern; will keep unless it visibly degrades. User's rule says "remove any transform or scale that could degrade rendering" — `scale-105` on hover is fine in modern browsers (GPU composited, no quality loss). Will leave hover effects, remove only static transforms.

### Files to inspect/edit

| File | Action |
|---|---|
| `src/components/fiveserv/HeroSection.tsx` | Container: `min-h-[600px] h-screen` → `min-h-screen w-full`; clean redundant inline styles |
| `src/components/fiveserv/FamilyStory.tsx` | Already uses `object-cover aspect-[4/3]` ✓ — verify no blur |
| `src/components/fiveserv/ServiceCard.tsx` | Audit for image transforms |
| `src/components/fiveserv/TestimonialCard.tsx` | Audit avatar rendering |
| `src/components/fiveserv/BeforeAfterSlider.tsx` | Verify slider images use `object-cover` not `object-fill` |
| `src/pages/BlogArticlePage.tsx` + blog content | Audit hero/inline images |
| `src/pages/AboutPage.tsx`, `Index.tsx` section images | Audit |

Will grep for: `filter`, `blur-`, `opacity-[0-9]` on img wrappers, `object-fill`, `object-scale-down`, `transform`, `scale-` on `<img>`.

### Out of scope / clarifications

- **`next/image` quality={100}**: not applicable (Vite project, no Next.js). Closest equivalent is to ensure source images are high-resolution — that's a content/asset task, not a code fix. Will note any low-res source files found.
- **Responsive `srcset`/`sizes`**: would require generating multiple sizes per image (build-time tooling). Out of scope for this pass.
- **Hover zoom on cards**: keeping `hover:scale-105` style effects (no quality degradation, intended UX).

### Implementation estimate

~2-4 small className edits in HeroSection + 0-3 image-related fixes elsewhere depending on what the grep finds.

