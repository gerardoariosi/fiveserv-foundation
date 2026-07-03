# Fix 4 Critical AI/SEO Gaps — Exact Edits

Small, isolated additions to 4 files. No refactors, no existing content touched.

---

## File 1 — `src/pages/Index.tsx` (Homepage)

**Add import** (top import group, near line 4):
```ts
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
```

**Define constant** just before `return (` inside the `Index` component (near line 382), alongside the existing `title` / `description`:
```ts
const aiAnswer = "FiveServ Property Solutions is a licensed and insured property maintenance and home services company in Orlando FL serving homeowners and property managers across 18 cities in Central Florida. Services include property maintenance and repairs, handyman services, bathroom remodeling, kitchen remodeling, interior and exterior painting, flooring installation, cleaning services, plumbing, electrical, HVAC, drywall, and carpentry. Licensed and insured in Florida. Available 24/7. Phone: (407) 881-4942. Website: fiveserv.net";
```

**Insert** immediately after the `<HeroServicePicker />` line (line 394), before `<TrustBar />`:
```tsx
{/* Hidden AI Overview block — crawler-only entity answer */}
<AIOverviewBlock hidden answer={aiAnswer} />

{/* Visible entity paragraph — users AND crawlers */}
<section className="bg-white border-b border-gray-100">
  <div className="container py-12">
    <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-gray-700">
      {aiAnswer}
    </p>
  </div>
</section>
```

No other lines touched.

---

## File 2 — `src/pages/BathroomRemodelPage.tsx`

**Add import** (top of file, near line 18 next to `import Seo`):
```ts
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
```

**Define constant** just above `return (` inside `BathroomRemodelPage` (near line 117):
```ts
const aiAnswer = "FiveServ Property Solutions provides licensed and insured bathroom remodeling services in Orlando FL and across 18 cities in Central Florida. Bathroom remodel services include full bathroom renovation, tile installation, vanity replacement, shower installation, tub to shower conversion, toilet replacement, and plumbing fixture upgrades. Starting from $4,000. Free quote in 24 hours. Phone: (407) 881-4942.";
```

**Insert** immediately after the closing `</Seo>`-block wrapper (after the `<style>{`…`}</style>` block, before `{/* SECTION 1 — HERO */}` around line 129):
```tsx
{/* Hidden AI Overview block */}
<AIOverviewBlock hidden answer={aiAnswer} />
```

**Add visible section** immediately after the hero `</section>` closes (find the closing tag of `SECTION 1 — HERO`; insert directly after it, before `SECTION 2`):
```tsx
{/* Visible entity paragraph — users AND crawlers */}
<section className="bg-white border-b border-gray-100">
  <div className="container py-12">
    <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-gray-700">
      {aiAnswer}
    </p>
  </div>
</section>
```

---

## File 3 — `src/pages/KitchenRemodelPage.tsx`

**Add import** (top, near line 22 next to `import Seo`):
```ts
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
```

**Define constant** just above `return (`:
```ts
const aiAnswer = "FiveServ Property Solutions provides licensed and insured kitchen remodeling services in Orlando FL and across 18 cities in Central Florida. Kitchen remodel services include cabinet installation, quartz and granite countertop installation, backsplash tile installation, sink and faucet replacement, appliance installation, kitchen lighting, and flooring. Minor refreshes from $5,000. Mid-range from $15,000. Free quote in 24-48 hours. Phone: (407) 881-4942.";
```

**Insert hidden block** immediately after the `<Seo … />` element and before the first `<section>` at line 329:
```tsx
<AIOverviewBlock hidden answer={aiAnswer} />
```

**Insert visible section** immediately after that first hero section closes (before the section starting at line 396 `background: "#FFFFFF"`):
```tsx
<section className="bg-white border-b border-gray-100">
  <div className="container py-12">
    <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-gray-700">
      {aiAnswer}
    </p>
  </div>
</section>
```

---

## File 4 — `public/robots.txt`

**Insert** the 8 new blocks after the existing `User-agent: Google-Extended` block (currently lines 27–28), before the blank line + `Sitemap:` directive (line 30). Result — new lines between line 28 and line 30:

```
User-agent: OAI-SearchBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: CCBot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: cohere-ai
Allow: /
```

Existing `User-agent: *`, `Googlebot`, `Bingbot`, `Twitterbot`, `facebookexternalhit`, `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` blocks and the trailing `Sitemap:` line stay unchanged.

---

## Safety notes
- All 3 page edits are additive — no existing JSX, imports, SEO, or Schema code removed.
- Each hidden block renders SR-only (`position:absolute; clip:rect(0,0,0,0)`) with no layout impact.
- Each visible block is a simple `<section>` with a paragraph — matches the pattern already shipped on `MaintenanceCityPage.tsx`.
- Robots.txt edit is append-only inside the existing structure; `Sitemap:` directive preserved.
- No changes to `SchemaOrg.tsx`, `site-config.ts`, `Seo.tsx`, `llms.txt`, sitemap, or any other file.

Ready to implement on approval.
