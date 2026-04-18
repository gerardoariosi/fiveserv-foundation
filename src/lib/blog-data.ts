/**
 * Blog data — 30 articles across 4 categories. Pillar articles are
 * marked `pillar: true` and rendered with full long-form content
 * (TL;DR + H2 sections + table/list + FAQ + CTA + BlogPosting schema).
 *
 * Non-pillar slugs are scaffolded with metadata so routes/cards exist;
 * full long-form bodies will be filled in subsequent steps.
 */

export type BlogCategory = "make-ready" | "maintenance" | "capex" | "tips-and-guides";

export const BLOG_CATEGORIES: { slug: BlogCategory; label: string }[] = [
  { slug: "make-ready", label: "Make-Ready" },
  { slug: "maintenance", label: "Maintenance" },
  { slug: "capex", label: "CapEx" },
  { slug: "tips-and-guides", label: "Tips and Guides" },
];

export type FaqItem = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: BlogCategory;
  excerpt: string;
  /** TL;DR — 40 to 60 words, optimized for AI Overviews */
  tldr: string;
  /** Primary keyword for SEO */
  keyword: string;
  datePublished: string; // ISO
  readMinutes: number;
  pillar?: boolean;
  /** Full article body — rendered as JSX in BlogArticlePage */
  bodySlug?: string;
  /** Hero image (optional, falls back to category placeholder) */
  image?: string;
  faqs: FaqItem[];
};

export const BLOG_POSTS: BlogPost[] = [
  // ── PILLAR 1 ──────────────────────────────────────────────────
  {
    slug: "make-ready-guide-florida-2025",
    title: "The Complete Make-Ready Guide for Property Managers in Florida 2025",
    metaTitle: "Make-Ready Guide Florida 2025 | FiveServ Property Solutions",
    metaDescription:
      "The complete 2025 make-ready playbook for Florida property managers: 5-day timelines, scope, pricing, vendor coordination, and how to cut turn time by 40%.",
    category: "make-ready",
    excerpt:
      "5-day turn timelines, scope checklists, pricing benchmarks, and the vendor-coordination playbook Central Florida PMs use to cut vacancy days.",
    tldr:
      "A make-ready in Florida should take 5 business days when scope, vendors, and inspection are coordinated by one team. FiveServ Property Solutions handles painting, cleaning, repairs, and final walk-through under one invoice — cutting average turn time by roughly 40% versus stacking three separate vendors.",
    keyword: "make-ready guide Florida",
    datePublished: "2025-04-01",
    readMinutes: 12,
    pillar: true,
    bodySlug: "make-ready-guide-florida-2025",
    faqs: [
      {
        q: "How long should a make-ready take in Florida?",
        a: "A standard 1–2 bedroom unit should be turned in 5 business days when painting, cleaning, repairs, and inspection are coordinated by a single vendor. Larger units or heavy damage may extend to 7–10 days.",
      },
      {
        q: "What does a make-ready include?",
        a: "Standard scope: full unit cleaning, paint touch-up or full repaint, drywall and trim repair, appliance and fixture check, plumbing and electrical inspection, and a final move-in walk-through with photo documentation.",
      },
      {
        q: "How much does a make-ready cost in Central Florida in 2025?",
        a: "Most 1–2 bedroom turns range from $850 to $1,800 depending on paint scope, flooring touch-up, and any plumbing or appliance repair. CapEx items (full flooring, cabinets) are quoted separately.",
      },
      {
        q: "Why use one vendor instead of three?",
        a: "Coordinating painters, cleaners, and handymen separately adds 2–4 idle days between trades. A single make-ready vendor sequences crews back-to-back, which is the main reason a 5-day turn is possible.",
      },
      {
        q: "Do you guarantee the 5-day timeline?",
        a: "Yes. FiveServ guarantees a 5-business-day turn on standard scope in Orlando, Kissimmee, Sanford, Winter Park, and the rest of our Central Florida service area. Heavy-damage or CapEx scope is quoted with its own timeline.",
      },
    ],
  },

  // ── PILLAR 2 ──────────────────────────────────────────────────
  {
    slug: "reduce-vendor-chaos-multifamily",
    title: "How to Reduce Vendor Chaos in Your Multifamily Portfolio",
    metaTitle: "Reduce Vendor Chaos in Multifamily Portfolios | FiveServ",
    metaDescription:
      "A practical playbook for multifamily property managers in Florida to reduce vendor chaos, consolidate invoices, and protect NOI across 50+ unit portfolios.",
    category: "maintenance",
    excerpt:
      "Stacking 8 vendors per property kills NOI. The consolidation playbook used by Central Florida operators to cut admin time by 60%.",
    tldr:
      "Vendor chaos costs multifamily operators 6–10 hours of admin per unit per year. FiveServ Property Solutions consolidates make-ready, maintenance, and CapEx into one point of contact, one invoice, and one accountable team — measurably reducing back-office time and missed-trade delays across Central Florida portfolios.",
    keyword: "vendor management property management Florida",
    datePublished: "2025-04-05",
    readMinutes: 11,
    pillar: true,
    bodySlug: "reduce-vendor-chaos-multifamily",
    faqs: [
      {
        q: "What is vendor chaos in property management?",
        a: "Vendor chaos is the operational drag from coordinating many small specialty vendors — painters, plumbers, HVAC, drywall, cleaners — each with their own invoices, schedules, and accountability gaps. It directly inflates make-ready time and admin overhead.",
      },
      {
        q: "How many vendors does the average multifamily property use?",
        a: "Most 100–300 unit communities work with 6–10 active maintenance vendors. Consolidating to 2–3 generalist providers typically reduces invoicing volume by 60% and shortens turn times.",
      },
      {
        q: "Does consolidating vendors increase risk?",
        a: "Only if you pick a vendor who can't actually scale. Verify insurance limits, in-house crews vs. subbed work, and emergency response SLAs before consolidating. FiveServ keeps painting, cleaning, drywall, and basic plumbing/electrical in-house.",
      },
      {
        q: "How fast can I consolidate without disrupting operations?",
        a: "Most portfolios transition over 60–90 days: start with new make-readies, then add reactive maintenance, then CapEx. Existing vendor contracts run out naturally.",
      },
    ],
  },

  // ── PILLAR 3 ──────────────────────────────────────────────────
  {
    slug: "property-maintenance-costs-central-florida-2025",
    title: "Property Maintenance Costs in Central Florida — 2025 Pricing Guide",
    metaTitle: "Property Maintenance Costs Florida 2025 | FiveServ Pricing Guide",
    metaDescription:
      "2025 Central Florida property maintenance pricing: hourly rates, make-ready costs, CapEx benchmarks, and trip charges across Orlando, Kissimmee, and Sanford.",
    category: "tips-and-guides",
    excerpt:
      "Hourly rates, make-ready turn pricing, CapEx benchmarks, and trip charges across Orlando, Kissimmee, Sanford, and the I-4 corridor.",
    tldr:
      "Central Florida property maintenance in 2025 runs $75–$125/hr for general handyman work, $850–$1,800 per standard make-ready, and $40–$95 per trip charge depending on city. FiveServ Property Solutions publishes flat-rate pricing for the most common scopes so property managers can budget without surprise line items.",
    keyword: "property maintenance costs Florida",
    datePublished: "2025-04-10",
    readMinutes: 10,
    pillar: true,
    bodySlug: "property-maintenance-costs-central-florida-2025",
    faqs: [
      {
        q: "What is the average hourly rate for property maintenance in Central Florida?",
        a: "General handyman labor runs $75–$125/hr in 2025. Specialty trades (licensed plumbing, electrical, HVAC) range $135–$185/hr. Most reactive work is billed in 1-hour minimums.",
      },
      {
        q: "How much does a standard make-ready cost?",
        a: "$850–$1,800 for a 1–2 bedroom unit including paint touch-up, deep cleaning, drywall repair, and basic plumbing/electrical inspection. Full repaint adds $400–$900. New flooring is quoted as CapEx.",
      },
      {
        q: "Are trip charges normal?",
        a: "Yes — trip charges of $40–$95 are standard across Central Florida for after-hours or single-item calls. Most vendors waive the trip charge if the job exceeds 2 billable hours.",
      },
      {
        q: "Why is pricing so different city-to-city?",
        a: "Drive time and licensing reciprocity. Orlando, Kissimmee, and Winter Park sit inside most service zones. Daytona, Melbourne, and Palm Coast typically carry a $25–$50 zone surcharge.",
      },
      {
        q: "Does FiveServ publish flat-rate pricing?",
        a: "Yes. We publish flat rates for make-ready, common reactive maintenance, and CapEx project scopes so property managers can build accurate annual budgets.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
export const getPostsByCategory = (cat: BlogCategory) =>
  BLOG_POSTS.filter((p) => p.category === cat);
