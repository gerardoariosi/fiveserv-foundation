# LAUNCH CHECKLIST — FiveServ Property Solutions

## BEFORE LAUNCH
- [ ] Get phone number — replace `[PHONE_NUMBER]` in `.env`
- [ ] Get GA4 ID — analytics.google.com — replace `[GA4_MEASUREMENT_ID]`
- [ ] Get Search Console code — search.google.com/search-console — replace `[GOOGLE_SEARCH_CONSOLE_CODE]`
- [ ] Get Clarity code — clarity.microsoft.com — replace `[MICROSOFT_CLARITY_CODE]`
- [ ] Configure GHL form — replace `[FORM_GHL_EMBED]` (`VITE_FORM_GHL`)
- [ ] Configure GHL AI Bot — replace `[GHL_CHAT_WIDGET_SNIPPET]` in `RootLayout.tsx`
- [ ] Create Google Business Profile — business.google.com
- [ ] Upload team photos — `/public/images/team/team-member-[1-5].jpg`
- [ ] Upload family photo — `/public/images/family-fiveserv.jpg`
- [ ] Upload 19 city photos — `/public/images/cities/[city]-fl.jpg`
- [ ] Add team names and roles — About page `[NOMBRE_1-5]` `[ROL_1-5]` (in `src/lib/site-config.ts`)
- [ ] Add licenses and insurance — Footer `[LICENSES_AND_INSURANCE]`
- [ ] Configure GHL redirect B2B → https://fiveserv.net/thank-you-b2b/
- [ ] Configure GHL redirect B2C → https://fiveserv.net/thank-you-residential/

## LAUNCH DAY
- [ ] Submit sitemap — https://fiveserv.net/sitemap.xml in Search Console
- [ ] Test schemas — https://search.google.com/test/rich-results
- [ ] Test Core Web Vitals — https://pagespeed.web.dev (LCP <2.5s, CLS <0.1, INP <200ms)
- [ ] Verify security headers — https://securityheaders.com (target rating A)
- [ ] Test all GHL forms — verify leads arrive in pipeline

## POST LAUNCH
- [ ] Publish first 3 blog articles
- [ ] Create Yelp, Angi, Houzz, BBB, Thumbtack profiles
- [ ] Get first real testimonial from PM client
- [ ] Professional team photo session
- [ ] Activate WhatsApp widget

---

## STACK NOTES (this Lovable project)
- Framework: **Vite + React 18 + React Router** (Lovable does not support Next.js)
- Per-page metadata: `react-helmet-async` (see `src/lib/Seo.tsx`)
- JSON-LD: `src/lib/SchemaOrg.tsx` — supports all 9 schema types
- Env vars: `VITE_*` prefix (not `NEXT_PUBLIC_*`). See `.env.example`
- 72 service×city URLs render via `/:service/:city` route + `src/pages/ServiceCityPage.tsx`
- Security headers: configure on host (Vercel `vercel.json` / Netlify `_headers`) — see `public/_headers`
- Sitemap: generated via post-build script. To regenerate locally:
  ```
  npm run build && node scripts/generate-sitemap.mjs
  ```
