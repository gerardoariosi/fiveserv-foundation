# Update All 18 City Pages via 3 Files

Data-driven update — edit 3 source files, all 18 `/maintenance-<city>-fl` pages regenerate automatically.

## File 1 — `src/lib/site-config.ts`
- Keep existing `SERVICES` array untouched (used by ServicePage, ServiceCityPage, SchemaOrg, App.tsx routing).
- Add new named export `CITY_SERVICES` (14 entries: title, description, href, keywords) exactly as specified.

## File 2 — `src/pages/MaintenanceCityPage.tsx`
1. **Imports** — add `CITY_SERVICES` from `@/lib/site-config`.
2. **SEO (`<Seo>` call)** — replace `title` and `description` with the new keyword-rich versions using `city.name`.
3. **aiAnswer string (~line 57)** — replace with the full 14-service entity paragraph interpolating `city.name` / `city.state`.
4. **Visible entity paragraph** — new white section immediately after the hidden `AIOverviewBlock` (still inside/after hero), rendering the specified user-facing paragraph in `<p>` inside a `container py-12` wrapper. Visible to users and crawlers.
5. **New Services section** — replace the current 4-card `SERVICES.map` grid (section starting at line ~163) with a new section:
   - Background `#FAFAF8`, `container py-20`.
   - H2: `"{city.name} Property Maintenance & Home Services"`.
   - Subheading: `"Licensed and insured across Central Florida. One call. One team. One invoice."`.
   - Small eyebrow / label above: `"{city.name} Services — One Call Covers Everything"`.
   - Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`.
   - Card: white bg, `border-l-4 border-[#FFD700]`, `shadow-sm p-6 rounded-r-lg`, hover lift.
   - Title `font-bold text-[#1A1A1A] text-lg`, desc `text-gray-600 text-sm mt-1`, `Learn More →` link in `text-[#FFD700]` at card bottom pointing to `service.href` (React Router `<Link>`).
6. Do not remove existing hero, Why FiveServ, Response Time, Zones+ZIP, StatsBar, FAQ, or ContactCTA sections.

## File 3 — `src/lib/SchemaOrg.tsx`
Inside the existing `if (city) { ... }` block (~lines 175-192):
1. **Expand** the city LocalBusiness block to the full `["LocalBusiness","HomeAndConstructionBusiness"]` object specified, with `@id`, description, url, telephone, email, priceRange, openingHoursSpecification, areaServed (with `containedInPlace` State), `hasOfferCatalog` containing all 14 `Offer` → `Service` items using `${city.name}` interpolation, and `sameAs` array.
2. **BreadcrumbList** — the caller (`MaintenanceCityPage`) already passes a `breadcrumbs` prop that emits BreadcrumbList (block #4). Update `MaintenanceCityPage`'s breadcrumbs prop to match the spec: Home → Cities → `Property Maintenance {city.name} FL` pointing at `/maintenance-{slug}`. (This is done in File 2 as part of the `<SchemaOrg>` call — no new schema code needed in SchemaOrg.tsx for breadcrumbs.)
3. **FAQPage** — existing block #3 already emits FAQPage from the `faqs` prop; keep unchanged. `MaintenanceCityPage` continues passing `editorial.faqs`.
4. Do not remove existing schema blocks (Organization, Service, FAQPage, BreadcrumbList, Person, BlogPosting, HowTo, AggregateRating). Only the `if (city)` block is expanded.

## Files NOT touched
Any other page, component, or config file. `SERVICES` array stays; `CityPageTemplate.tsx` (used by `/cities/:city` and `/:service/:city`) untouched.

## Result per city page
- Keyword-rich title + meta description
- Hidden AIOverviewBlock with 14-service entity answer
- Visible entity paragraph (users + crawlers)
- Grid of 14 service cards linking to their dedicated pages
- Expanded LocalBusiness + HomeAndConstructionBusiness schema with hasOfferCatalog of 14 Services
- BreadcrumbList (Home › Cities › Property Maintenance {city} FL)
- Existing FAQPage schema preserved

Ready to implement on approval.
