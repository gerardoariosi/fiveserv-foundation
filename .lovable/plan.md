

## Plan — 3 Fixes

### Issue 2: Logo filename (quick, deterministic)

The file `/public/images/logo FS .png` has spaces. URL-encoded it works, but it's fragile. Fix:

- Add a copy at `/public/images/logo-fs.png` (keep old file too, no breaking)
- Update 3 references to `/images/logo-fs.png`:
  - `src/components/fiveserv/StickyHeader.tsx:46`
  - `src/components/fiveserv/Footer.tsx:15`
  - `src/pages/TampaBayPage.tsx:65`

Note: I cannot copy binary files via the available tools. I'll need to either (a) keep the old filename and just URL-encode it as `/images/logo%20FS%20.png`, or (b) ask the user to rename the file in the asset browser. **Recommended: option (a)** — change all 3 src paths to `/images/logo%20FS%20.png` (proper URL encoding), which fixes any browser that chokes on raw spaces. No file rename needed.

### Issue 3: Remove Lovable badge

Use `publish_settings--set_badge_visibility` with `hide_badge: true`. Current state confirmed: `hide_badge: false`. Requires Pro plan; if the user isn't on Pro, the call will surface that requirement.

### Issue 1: Contrast & readability audit

Scope: all pages. Rather than rewrite every component blindly, I'll do a **targeted sweep** for the specific anti-patterns the user listed, since the design system is already mostly compliant (white sections use `text-gray-900`/`text-gray-700`, dark sections use white/gold).

Targeted greps + fixes:

1. **Gold text on white backgrounds** (forbidden): grep `text-brand-gold` inside components rendered on white sections. Known offender already visible:
   - `StickyHeader.tsx:77` — phone number is `text-brand-gold` on white header → change to `text-brand-black font-semibold` with gold phone *icon* only.
   - `StickyHeader.tsx:101` (mobile phone icon) — keep icon gold is OK per "gold ONLY on dark" rule? Icon is decorative; rule says "gold *text*". Will change to `text-brand-black` to be safe.
   - `StickyHeader.tsx:126-127` (mobile menu phone link) — on white dropdown → change to black.

2. **Light gray text on white** (forbidden `gray-300/400`, and `gray-500` for body):
   - `StickyHeader.tsx:52, 81` use `text-gray-500` for tiny eyebrow labels → bump to `text-gray-700`.
   - Sweep all `.tsx` for `text-gray-300|400` on white-section components.

3. **Card backgrounds on white sections**: audit `ServiceCard`, `TestimonialCard`, `FivePillars`, `FaqAccordion`, `BlogArticleLayout`, etc. — ensure cards on white use `bg-[#F5F5F5] border border-[#E5E5E5]` (or `bg-brand-light` if defined in tailwind config).

4. **Section alternation pattern**: spot-check `Index.tsx` and main page templates to ensure white → `#F5F5F5` → dark cycle.

5. **Min font sizes**: replace any `text-xs` (12px) used for body/labels with `text-sm` (14px) or `text-[13px]`. `text-xs` for decorative eyebrows on dark bg can stay.

I'll do the actual grep + edits in implementation mode. Estimated 6–12 small className edits across ~5 files.

### Files to edit (summary)

| File | Change |
|---|---|
| `StickyHeader.tsx` | logo path, gold→black phone text, gray-500→gray-700 |
| `Footer.tsx` | logo path (footer is dark, gold OK there) |
| `TampaBayPage.tsx` | logo path |
| `Index.tsx` + section components | spot-fix gray-300/400/500 body text, card bg on white sections |
| `ServiceCard.tsx`, `TestimonialCard.tsx`, `FaqAccordion.tsx` | card bg/border on white sections if needed |
| Lovable badge | `publish_settings--set_badge_visibility(true)` |

### What I will NOT do

- Won't rename the binary `logo FS .png` (tool limitation) — using URL-encoded path instead, which is functionally identical.
- Won't touch dark sections (Footer, dark hero overlays) — they already comply.
- Won't restyle GHL iframe internals.

