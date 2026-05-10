## Add SEO alt text to images across site

Update alt attributes on images (and one video aria-label) in 10 files. No styling or other attribute changes.

### Files & changes

1. **src/components/fiveserv/BeforeAfterSlider.tsx** — set alt on before/after `<img>` tags:
   - Before: `Before make-ready unit renovation by FiveServ Property Solutions Orlando Florida`
   - After: `After make-ready unit renovation completed by FiveServ Property Solutions Central Florida`

2. **src/components/fiveserv/Logo.tsx** — change `alt="FiveServ"` to `FiveServ Property Solutions logo — property maintenance company Orlando Florida`.

3. **src/components/fiveserv/BlogArticleLayout.tsx** — set image alt to `FiveServ Property Solutions blog — property maintenance tips Central Florida` (read file first to find target image).

4. **src/components/fiveserv/FamilyStory.tsx** — replace existing alt on `/images/logo-fs.png` with `FiveServ Property Solutions family team — Venezuelan-American property maintenance company Orlando Florida`.

5. **src/pages/ResidentialPage.tsx** — set hero/service image alt to `FiveServ residential maintenance service Orlando Florida`.

6. **src/pages/TampaBayPage.tsx** — set Tampa hero background `<img>` alt to `FiveServ property maintenance Tampa Bay Florida` (currently `alt=""`).

7. **src/pages/AboutPage.tsx** — for each team member image, set alt to `{Name} — {Role} at FiveServ Property Solutions Orlando Florida` using actual name/role data already in the component.

8. **src/pages/BlogPage.tsx** — set blog post card image alt to `FiveServ Property Solutions blog post — property maintenance Central Florida`.

9. **src/pages/MaintenanceCityPage.tsx** — set image alt using existing city variable: `FiveServ property maintenance service {city} Florida`.

10. **src/pages/ElectricalPage.tsx** — add `aria-label="FiveServ electrical maintenance service video Orlando Florida"` to the video element.

### Notes

- Will read each unfamiliar file before editing to locate exact `<img>`/`<video>` tags and preserve all other attributes.
- Pure presentational change; no logic, styling, or structural edits.
