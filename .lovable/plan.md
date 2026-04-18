
Goal: fix the city pages so `/maintenance-[city]-fl/` renders full HTML content for all 18 cities, with SEO/AEO-ready metadata and schemas.

1. Confirmed root cause
- The city pages are not empty because data is missing.
- They are hitting the 404 page because the current React Router route is invalid for this URL shape:
  - current route: `maintenance-:city`
  - requested URL: `/maintenance-sanford-fl`
- React Router does not reliably match a param embedded inside a partial static segment like this, so the request falls through to `*` and renders `NotFound`.

2. Routing fix
- Replace the broken partial-segment route with 18 explicit static routes:
  - `/maintenance-orlando-fl`
  - `/maintenance-kissimmee-fl`
  - ...all remaining 16
- Each route will render the same city page component with the correct city data passed as props.
- This removes the router mismatch entirely and guarantees each city page resolves.

3. City page architecture
- Create a dedicated prop-driven city page component, e.g. `CityPage`, that accepts one city record.
- Reuse the existing visible content structure already built in `MaintenanceCityPage`, but make it fully driven by props instead of `useParams`.
- Keep all content server-rendered in initial HTML output from React render, not fetched later.

4. Data source
- Create one consolidated data file for all 18 cities with:
  - name
  - slug
  - ZIP codes
  - zones
  - response time
  - hero image
  - meta title
  - meta description
  - FAQ items
  - schema-specific fields
  - related internal links
- I will migrate/reuse the existing data already split across `site-config.ts` and `city-data.ts` so there is one canonical source for city pages.

5. SEO and schema fixes
- For each city page, wire:
  - exact meta title/description from city data
  - canonical `/maintenance-[city]-fl/`
  - hreflang `en-US`
  - `BreadcrumbList`
  - `FAQPage`
  - `LocalBusiness`
- Important fix: current `SchemaOrg` city schema uses `/cities/${city.slug}` as the URL, which is wrong for the canonical city pages. I will update schema generation so LocalBusiness uses the actual `/maintenance-[city]-fl/` URL.

6. Content completeness
- Ensure each city page visibly includes:
  - H1 with primary keyword
  - AIOverviewBlock
  - Why FiveServ in [City]
  - 4 service links
  - ZIP codes and zones in HTML
  - response time
  - city-specific FAQs
  - CTA form section
  - links to 2 other city pages + `/contact/`
- This closes the remaining gaps between the current implementation and the foundation spec.

7. Files to update
- `src/App.tsx`
- `src/lib/SchemaOrg.tsx`
- new city data file, likely `src/lib/city-pages.ts`
- new prop-based city page component, likely `src/pages/CityPage.tsx` or `src/components/fiveserv/CityPage.tsx`
- existing `src/pages/MaintenanceCityPage.tsx` will either be removed from routing or reduced to a thin wrapper
- possibly small link updates anywhere still pointing to legacy city paths

8. Verification after implementation
- First verify `/maintenance-orlando-fl/` renders full content, correct title/meta/schema, and no 404.
- Then verify all 18 registered city routes resolve.
- Confirm the page source contains visible city content plus JSON-LD without async loading dependency.

Technical details
- Root cause is routing, not async loading.
- The current route pattern `maintenance-:city` is the blocker.
- Existing city content/data is mostly already present and can be reused.
- Secondary issue: current LocalBusiness schema points to `/cities/[slug]`, which must be corrected to the flat canonical city URL.
