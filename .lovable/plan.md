
## Audit Results

**Navigation works technically — but three nav links land on bare placeholder pages, which looks "broken" to the user.**

### Routes that already exist and render full content
| Route | Status |
|---|---|
| `/` | ✅ Index |
| `/make-ready` | ✅ MakeReadyPage |
| `/maintenance` | ✅ MaintenancePage |
| `/renovations` | ✅ RenovationsPage |
| `/residential` | ✅ ResidentialPage |
| `/maintenance-orlando-fl` (and 17 others) | ✅ MaintenanceCityPage |
| `/tampa-bay-fl` | ✅ TampaBayPage |
| `/about` | ✅ AboutPage |
| `/contact` | ✅ ContactPage |
| `/faq` | ✅ FaqPage |
| `/cities/:city` | ✅ CityPage (legacy overview) |
| `/:service/:city` (72 combos) | ✅ ServiceCityPage |

### Routes that show only a placeholder (root cause of "shows nothing")
| Nav link | Currently lands on |
|---|---|
| `/services` | PlaceholderPage — one paragraph, no service list |
| `/cities` | PlaceholderPage — one paragraph, no city list |
| `/blog` | PlaceholderPage — one paragraph, no posts |

### Missing route
- `/service-areas` is referenced in the spec/build plan but never registered → 404.

### Internal-link inconsistency
- `CityGrid.tsx` links to `/cities/:city` (legacy), but the canonical SEO city pages now live at `/maintenance-:city-fl/`. Same in `Footer.tsx`.

---

## Fix Plan (no rebuilds, only routing + minimal hub pages)

1. **`/services` hub** — replace placeholder with a real index page that lists the 4 services (`SERVICES` from site-config) as cards linking to `/make-ready`, `/maintenance`, `/renovations`, `/residential`.

2. **`/cities` hub** — replace placeholder with a real index page that lists all 18 cities (cards linking to the canonical `/maintenance-[city]-fl/` URLs) plus the Tampa Bay coming-soon card linking to `/tampa-bay-fl`.

3. **`/service-areas`** — register the route and alias it to the same `/cities` hub component (same content, both URLs work, canonical tag points to `/service-areas/` per spec).

4. **`/blog`** — keep the route but upgrade the placeholder to a clear "Blog launching soon — get notified" page with a CTA to `/contact`. (User asked not to rebuild; this is a copy/UX fix only.)

5. **Fix `CityGrid.tsx` & `Footer.tsx` links** — change `/cities/${slug}` → `/maintenance-${slug}/` so internal links match the canonical city URLs. Tampa Bay card links to `/tampa-bay-fl`.

6. **StickyHeader audit** — links are already correct (`/`, `/services`, `/cities`, `/about`, `/blog`, `/contact`). No changes needed there. Optionally add `/faq` to nav (deferred — separate task).

7. **Confirm registered routes** after fix — print the full list back to the user.

### Files to touch
- `src/App.tsx` — swap 3 placeholders for real components, register `/service-areas`.
- `src/pages/ServicesIndexPage.tsx` (new) — services hub.
- `src/pages/CitiesIndexPage.tsx` (new) — cities hub, reused for `/service-areas`.
- `src/pages/BlogPage.tsx` (new) — "coming soon" page with CTA.
- `src/components/fiveserv/CityGrid.tsx` — fix links.
- `src/components/fiveserv/Footer.tsx` — fix city links.

No existing page content is rebuilt or removed. All 94 existing deep URLs remain unchanged.
