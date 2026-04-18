

## Plan — 3 Critical Fixes

### Issue 1: Logo not loading (robust fix)

**Root cause**: file is `/public/images/logo FS .png` (with spaces). URL-encoding `%20` works in most browsers but is fragile (some CDNs/proxies double-encode or strip). I cannot rename binary files with available tools.

**Fix**: Create a reusable `<Logo>` component with image + automatic wordmark fallback:
- Primary: `<img src="/images/logo%20FS%20.png">` 
- `onError` → swap to inline wordmark: gold "F" + white/black "iveServ" + small "PROPERTY SOLUTIONS" tagline below
- This guarantees something always renders, regardless of file/path issues

Replace the 3 inline `<img>` logo blocks in `StickyHeader.tsx`, `Footer.tsx`, `TampaBayPage.tsx` with `<Logo variant="light|dark" />`.

### Issue 2: Tampa Bay page rebuild

Page exists at `/tampa-bay-fl` and is routed, but doesn't match the spec (uses CTA buttons + ContactCTA section instead of a waitlist form).

Rewrite `src/pages/TampaBayPage.tsx`:
- Single centered section, full `bg-brand-black` (#1A1A1A), no hero image overlay
- `<Logo variant="light" />` centered top
- H1: "FiveServ is Coming to Tampa Bay, Florida" (white, gold "Tampa Bay")
- Subhead: "We are expanding to Tampa Bay. Be the first to know when we launch."
- Native React waitlist form (controlled inputs): Name, Email, Company, Number of units → on submit, log + show success state ("We'll be in touch.") with toast. No backend wiring (out of scope unless requested).
- Submit button: gold bg `#FFD700`, dark text `#1A1A1A`, "Join the Waitlist"
- Form card: `bg-[#2D2D2D]` with white inputs, gray-300 labels (on dark = readable)
- Keep existing `Seo` (title, canonical), `SchemaOrg` breadcrumbs, and Tampa LocalBusiness JSON-LD
- Remove `<ContactCTA />` (not in spec)

### Issue 3: Contrast audit (gold-on-gold, white-on-white, dark-on-dark)

Targeted sweep using greps:

1. **Gold text on gold backgrounds**: search `bg-brand-gold` blocks containing `text-brand-gold`. Known: `FivePillars.tsx` already uses `text-brand-black` on gold bg ✓. Verify no other instances.
2. **White on white**: search `bg-white`/`bg-brand-white` containing `text-white`/`text-brand-white`.
3. **Dark on dark**: search `bg-brand-black`/`bg-[#1A1A1A]` containing `text-brand-black`/`text-gray-900`.
4. **BrandName "F" on wrong bg**: `BrandName` always renders gold "F". On gold/white sections this is invisible/illegible. Add a third variant `variant="onGold"` → "F" becomes `text-brand-black`. Audit all 67 BrandName usages and switch any on gold/white containers to `onGold` (mostly `FivePillars` is the gold case).
5. **Buttons**: spot-check button.tsx variants — confirm `gold bg → black text` and `dark bg → gold/white text`. Already compliant per existing `cta-gold` class.
6. **Badges/pills/eyebrows**: grep for `text-brand-gold` on light/white surface containers; flip to `text-brand-black` or `text-gray-900` where needed.

Will fix every violation found. Estimate 5–15 small className edits across ~6 files.

### Files to edit

| File | Change |
|---|---|
| `src/components/fiveserv/Logo.tsx` (new) | Image + wordmark fallback component |
| `src/components/fiveserv/StickyHeader.tsx` | Use `<Logo variant="dark" />` |
| `src/components/fiveserv/Footer.tsx` | Use `<Logo variant="light" />` |
| `src/pages/TampaBayPage.tsx` | Full rewrite per spec, with waitlist form |
| `src/components/fiveserv/BrandName.tsx` | Add `variant="onGold"` (black F) |
| `FivePillars.tsx` + any other gold-bg containers | Switch BrandName to `onGold` |
| Other components (audit-driven) | Fix any remaining same-color violations |

### Out of scope

- Renaming the binary `logo FS .png` → `logo-fs.png` (tool limitation; fallback wordmark makes this irrelevant)
- Wiring waitlist form to a backend (not requested; will log + toast success). Can add Lovable Cloud / GHL hookup as a follow-up.

