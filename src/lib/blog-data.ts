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

  // ── CLUSTER 4 ─────────────────────────────────────────────────
  {
    slug: "what-is-a-unit-turn",
    title: "What Is a Unit Turn? Everything Property Managers Need to Know",
    metaTitle: "What Is a Unit Turn? Property Manager Guide | FiveServ",
    metaDescription: "A unit turn is the work between move-out and move-in on a rental unit. Full definition, scope, timeline, and cost for Central Florida property managers.",
    category: "make-ready",
    excerpt: "The full definition, standard scope, and 5-day timeline for a multifamily unit turn in Central Florida.",
    tldr: "A unit turn is the maintenance work performed between one resident's move-out and the next resident's move-in. FiveServ Property Solutions handles the full standard scope — cleaning, paint, drywall, plumbing and electrical inspection — in 5 business days under one invoice across Central Florida.",
    keyword: "unit turn definition",
    datePublished: "2025-04-12",
    readMinutes: 7,
    bodySlug: "what-is-a-unit-turn",
    faqs: [
      { q: "Is a unit turn the same as a make-ready?", a: "Yes — the terms are interchangeable in Florida multifamily. Some operators use 'turn' for the whole process and 'make-ready' for the final QC step, but most vendors and PMs treat them as synonyms." },
      { q: "What's included in a standard unit turn?", a: "Trash-out, full clean, paint touch-up or repaint, drywall and trim repair, plumbing and electrical inspection, appliance check, HVAC filter, and a final move-in walk-through." },
      { q: "How long does a unit turn take?", a: "5 business days for a standard 1–2 bedroom turn when one vendor coordinates trades. Stacked-vendor turns typically take 10–14 days." },
      { q: "Who pays for a unit turn?", a: "The property owner or operator — turn cost is part of operating expense and is recouped through rent on the new lease." },
    ],
  },

  // ── CLUSTER 5 ─────────────────────────────────────────────────
  {
    slug: "make-ready-checklist-40-items",
    title: "Make-Ready Checklist: 40 Things to Inspect Before a New Tenant",
    metaTitle: "Make-Ready Checklist: 40 Items | FiveServ Property Solutions",
    metaDescription: "The 40-item make-ready checklist FiveServ uses on every Central Florida unit turn. Free for property managers — covers paint, plumbing, electrical, appliances, and QC.",
    category: "make-ready",
    excerpt: "The 40-item inspection list FiveServ runs on every Central Florida turn. Free reference for property managers.",
    tldr: "FiveServ Property Solutions uses a 40-item make-ready checklist on every Central Florida unit turn covering cleaning, paint, drywall, plumbing, electrical, appliances, HVAC, and final QC. Use this list as a free reference to standardize inspections across your portfolio.",
    keyword: "make-ready checklist",
    datePublished: "2025-04-13",
    readMinutes: 9,
    bodySlug: "make-ready-checklist-40-items",
    faqs: [
      { q: "Is a 40-item checklist excessive?", a: "No — 40 items maps to roughly 8 categories (clean, paint, drywall, plumbing, electrical, appliances, HVAC, QC) with 5 items each. It's the minimum to catch issues before a new resident moves in." },
      { q: "Can onsite maintenance run this checklist?", a: "Yes — the list is built for onsite teams or vendors. The point is consistency across units, not who runs it." },
      { q: "What if an item fails?", a: "Document with a photo, log it on the turn sheet, and route to the trade that owns the fix. Don't release keys until every item passes." },
    ],
  },

  // ── CLUSTER 6 ─────────────────────────────────────────────────
  {
    slug: "5-signs-maintenance-overhaul",
    title: "5 Signs Your Apartment Complex Needs a Maintenance Overhaul",
    metaTitle: "5 Signs Your Apartment Needs a Maintenance Overhaul | FiveServ",
    metaDescription: "Rising work-order backlog, high turn time, vendor chaos — the 5 warning signs your Central Florida apartment community needs a maintenance overhaul.",
    category: "maintenance",
    excerpt: "The 5 operational warning signs that your Central Florida community has outgrown its current maintenance setup.",
    tldr: "If your work-order backlog exceeds 7 days, turn time exceeds 10 days, you have 8+ active vendors, resident complaints are rising, or capex is reactive instead of planned — your apartment complex needs a maintenance overhaul. FiveServ Property Solutions audits and rebuilds maintenance operations across Central Florida.",
    keyword: "apartment maintenance overhaul",
    datePublished: "2025-04-14",
    readMinutes: 8,
    bodySlug: "5-signs-maintenance-overhaul",
    faqs: [
      { q: "How long does a maintenance overhaul take?", a: "60–90 days to consolidate vendors, set new SLAs, and standardize work-order routing. Results show within the first 30 days." },
      { q: "Will residents notice?", a: "Yes — work-order response time typically drops from 5–7 days to under 48 hours within the first month." },
      { q: "Do I need to fire my onsite maintenance team?", a: "No. An overhaul is about vendor coordination and process, not your in-house techs." },
    ],
  },

  // ── CLUSTER 7 ─────────────────────────────────────────────────
  {
    slug: "how-to-choose-property-maintenance-company-orlando",
    title: "How to Choose a Property Maintenance Company in Orlando FL",
    metaTitle: "How to Choose a Property Maintenance Company in Orlando | FiveServ",
    metaDescription: "The 7 criteria Orlando property managers should use to evaluate a maintenance vendor: insurance, licensing, in-house crews, SLAs, pricing transparency, and references.",
    category: "tips-and-guides",
    excerpt: "The 7 criteria Orlando PMs should use to evaluate any maintenance vendor before signing.",
    tldr: "Choose a property maintenance company in Orlando using 7 criteria: $1M+ insurance, in-house crews, Florida-licensed plumbing and electrical, 24/7 SLA, flat-rate pricing, multifamily references, and one-invoice billing. FiveServ Property Solutions meets all 7 across Central Florida.",
    keyword: "property maintenance company Orlando",
    datePublished: "2025-04-15",
    readMinutes: 8,
    bodySlug: "how-to-choose-property-maintenance-company-orlando",
    faqs: [
      { q: "Should I pick the cheapest vendor?", a: "No. Cheapest vendors typically sub everything out, which reintroduces the vendor chaos you're trying to solve. Mid-priced in-house crews almost always win on total cost." },
      { q: "How many vendors should I interview?", a: "Three is enough. Beyond that the criteria blur and decision fatigue sets in." },
      { q: "Do I need a written SLA?", a: "Yes — minimum: 2-hour emergency response, 24-hour standard response, 5-day make-ready guarantee." },
    ],
  },

  // ── CLUSTER 8 ─────────────────────────────────────────────────
  {
    slug: "emergency-property-maintenance-after-hours",
    title: "Emergency Maintenance: How to Handle After-Hours Property Repairs",
    metaTitle: "Emergency Property Maintenance Florida | After-Hours Guide | FiveServ",
    metaDescription: "How Central Florida property managers should structure after-hours emergency maintenance: triage, SLAs, vendor on-call, and resident communication.",
    category: "maintenance",
    excerpt: "Triage frameworks, vendor on-call structure, and resident communication scripts for after-hours emergencies.",
    tldr: "Emergency property maintenance in Florida means active water leaks, electrical hazards, no AC over 85°F, no heat under 50°F, and gas smells. FiveServ Property Solutions runs a 24/7 emergency line with a 2-hour on-site response across Central Florida — the rest can wait until business hours.",
    keyword: "emergency property maintenance Florida",
    datePublished: "2025-04-15",
    readMinutes: 8,
    bodySlug: "emergency-property-maintenance-after-hours",
    faqs: [
      { q: "What counts as an emergency?", a: "Active water intrusion, electrical hazard, no AC over 85°F, no heat under 50°F, gas smell, lockout when no other access exists. Everything else is next-business-day." },
      { q: "What's a reasonable response SLA?", a: "2 hours on-site for true emergencies. Phone triage immediate." },
      { q: "Should onsite techs handle emergencies?", a: "Yes for triage, no for after-hours plumbing/electrical that requires a license. Pair onsite with a 24/7 vendor." },
    ],
  },

  // ── CLUSTER 9 ─────────────────────────────────────────────────
  {
    slug: "capex-vs-opex-multifamily",
    title: "CapEx vs OpEx in Multifamily Properties — Complete Guide",
    metaTitle: "CapEx vs OpEx in Multifamily | Complete Guide | FiveServ",
    metaDescription: "The clear definition, accounting treatment, and budgeting framework for CapEx vs OpEx in multifamily properties — with Central Florida benchmarks.",
    category: "capex",
    excerpt: "Definitions, accounting treatment, and budgeting frameworks for multifamily CapEx vs OpEx with Florida benchmarks.",
    tldr: "OpEx is recurring maintenance that keeps the property running (cleaning, repairs, turns). CapEx is capital improvement that extends useful life or increases value (new roof, full flooring, cabinet replacement). FiveServ Property Solutions handles both, with separate quoting for each across Central Florida portfolios.",
    keyword: "capex vs opex multifamily",
    datePublished: "2025-04-15",
    readMinutes: 9,
    bodySlug: "capex-vs-opex-multifamily",
    faqs: [
      { q: "Is a unit turn CapEx or OpEx?", a: "OpEx — turns are recurring operating cost. Heavy renovation during a turn (new flooring, new cabinets) is CapEx." },
      { q: "How is CapEx amortized?", a: "Over the asset's useful life: 7 years cabinets, 10 flooring, 15+ appliances and HVAC. Confirm with your accountant for IRS treatment." },
      { q: "Why does the distinction matter?", a: "It changes NOI, valuation, and tax treatment. Mis-classifying CapEx as OpEx understates NOI." },
    ],
  },

  // ── CLUSTER 10 ────────────────────────────────────────────────
  {
    slug: "one-invoice-maintenance-saves-time",
    title: "Why One-Invoice Maintenance Saves Property Managers Time and Money",
    metaTitle: "One-Invoice Maintenance Saves PMs Time and Money | FiveServ",
    metaDescription: "Consolidating to one-invoice maintenance saves Central Florida property managers 6–10 admin hours per unit per year. Real numbers and the playbook.",
    category: "maintenance",
    excerpt: "Real admin-hour math behind why consolidating to a one-invoice maintenance vendor saves 6–10 hours per unit per year.",
    tldr: "One-invoice maintenance consolidates all property work — make-ready, reactive, CapEx — into a single monthly invoice from one vendor. FiveServ Property Solutions clients save 6–10 admin hours per unit per year across Central Florida portfolios, plus measurable reduction in missed-trade incidents.",
    keyword: "one invoice maintenance",
    datePublished: "2025-04-15",
    readMinutes: 7,
    bodySlug: "one-invoice-maintenance-saves-time",
    faqs: [
      { q: "What if I want line-item detail?", a: "One invoice per project still itemizes line-by-line — it's a single PDF instead of 8 separate vendor invoices to reconcile." },
      { q: "Will I lose pricing transparency?", a: "No. Flat-rate scopes are still flat-rate; you just see them on one document." },
      { q: "How much admin time does this save?", a: "AP teams report 60% fewer invoices to process. Regional managers report 4–6 fewer hours per week chasing approvals." },
    ],
  },

  // ── CLUSTER 11 ────────────────────────────────────────────────
  {
    slug: "unit-turn-vs-make-ready",
    title: "Unit Turn vs Make-Ready: What Is the Difference?",
    metaTitle: "Unit Turn vs Make-Ready: What's the Difference? | FiveServ",
    metaDescription: "Unit turn vs make-ready — the two terms mean the same thing in Florida multifamily. Full definition and how FiveServ uses both terms.",
    category: "make-ready",
    excerpt: "Short answer: they're the same thing. Long answer: how the terms get used differently across Florida operators.",
    tldr: "Unit turn and make-ready mean the same thing in Florida multifamily — the maintenance work between move-out and move-in. Some operators use 'turn' for the whole project and 'make-ready' for final QC. FiveServ Property Solutions uses them interchangeably across all Central Florida service.",
    keyword: "unit turn vs make-ready",
    datePublished: "2025-04-15",
    readMinutes: 5,
    bodySlug: "unit-turn-vs-make-ready",
    faqs: [
      { q: "Is there any real difference?", a: "Operationally, no. Some accounting systems use one term over the other, but the scope is identical." },
      { q: "Which term should I use?", a: "Whichever your team and vendors already use. Consistency matters more than which word." },
    ],
  },

  // ── CLUSTER 12 ────────────────────────────────────────────────
  {
    slug: "make-ready-cost-central-florida-2025",
    title: "How Much Does Make-Ready Cost in Central Florida? 2025",
    metaTitle: "Make-Ready Cost Central Florida 2025 | FiveServ Pricing",
    metaDescription: "2025 make-ready pricing for Central Florida: $850–$2,400 per unit depending on size and scope. Full breakdown by trade and add-on.",
    category: "make-ready",
    excerpt: "2025 turn pricing across Orlando, Kissimmee, Sanford, and the I-4 corridor — broken down by unit size and add-ons.",
    tldr: "Make-ready cost in Central Florida ranges $850–$2,400 in 2025 depending on unit size and damage. FiveServ Property Solutions publishes flat rates: 1BR $850–$1,200, 2BR $1,200–$1,800, 3BR $1,600–$2,400, with full repaint and CapEx quoted separately.",
    keyword: "make-ready cost Florida",
    datePublished: "2025-04-15",
    readMinutes: 6,
    bodySlug: "make-ready-cost-central-florida-2025",
    faqs: [
      { q: "What drives make-ready cost up?", a: "Heavy paint scope (smoke, dark accent walls), extensive drywall damage, plumbing fixture replacement, and any flooring work." },
      { q: "What's the cheapest legitimate turn?", a: "Around $850 for a clean studio with paint touch-up only. Anything below that is cutting required scope." },
      { q: "Does FiveServ price differently by city?", a: "Coastal cities (Daytona, Melbourne, Cocoa) carry a small zone surcharge for drive time. I-4 corridor pricing is flat." },
    ],
  },

  // ── CLUSTER 13 ────────────────────────────────────────────────
  {
    slug: "build-vendor-relationship-properties",
    title: "How to Build a Reliable Vendor Relationship for Your Properties",
    metaTitle: "Build a Reliable Vendor Relationship | Property Manager Guide | FiveServ",
    metaDescription: "How Central Florida property managers can build long-term vendor relationships that survive turnover, scale with portfolio growth, and protect NOI.",
    category: "tips-and-guides",
    excerpt: "Frameworks for building vendor relationships that survive PM turnover and scale with portfolio growth.",
    tldr: "Reliable vendor relationships require clear SLAs, written scopes, on-time payment, and direct communication with the vendor's owner — not just an account rep. FiveServ Property Solutions assigns one named project manager per property so the relationship survives staff turnover on both sides.",
    keyword: "vendor relationship property management",
    datePublished: "2025-04-15",
    readMinutes: 7,
    bodySlug: "build-vendor-relationship-properties",
    faqs: [
      { q: "How fast should I pay vendors?", a: "Net 15 if you want priority response. Net 30 is standard. Beyond Net 45, expect to drop to the back of the queue." },
      { q: "Should I sign exclusivity?", a: "No — exclusivity removes your leverage. Volume commitments with re-bid every 18 months are healthier." },
    ],
  },

  // ── CLUSTER 14 ────────────────────────────────────────────────
  {
    slug: "property-maintenance-checklist-multifamily",
    title: "Property Maintenance Checklist for Multifamily Communities",
    metaTitle: "Property Maintenance Checklist for Multifamily | FiveServ",
    metaDescription: "Quarterly and annual property maintenance checklist for Central Florida multifamily — preventive maintenance items, timing, and accountability.",
    category: "maintenance",
    excerpt: "Quarterly and annual preventive maintenance items every Central Florida multifamily community should run.",
    tldr: "A multifamily maintenance checklist should cover monthly (HVAC filters, smoke detectors), quarterly (irrigation, common-area inspection), and annual (roof, exterior paint, parking lot) items. FiveServ Property Solutions runs preventive maintenance contracts across Central Florida communities.",
    keyword: "property maintenance checklist",
    datePublished: "2025-04-15",
    readMinutes: 8,
    bodySlug: "property-maintenance-checklist-multifamily",
    faqs: [
      { q: "Monthly or quarterly inspections?", a: "Monthly for HVAC filters and detectors. Quarterly for the full preventive checklist. Annual for major exterior items." },
      { q: "Who owns the checklist?", a: "The community manager owns scheduling. The vendor owns execution. Both sign off." },
    ],
  },

  // ── CLUSTER 15 ────────────────────────────────────────────────
  {
    slug: "maintenance-request-system",
    title: "What to Include in a Maintenance Request System",
    metaTitle: "What to Include in a Maintenance Request System | FiveServ",
    metaDescription: "The required fields, SLA tiers, and routing logic for an effective multifamily maintenance request system in Central Florida.",
    category: "maintenance",
    excerpt: "Required fields, SLA tiers, and routing logic for an effective multifamily maintenance request system.",
    tldr: "An effective maintenance request system needs unit number, category, severity tier, photos, resident contact, and access permission. FiveServ Property Solutions integrates with AppFolio, Yardi, and Entrata so requests route directly to the assigned trade with no double-entry across Central Florida portfolios.",
    keyword: "maintenance request system",
    datePublished: "2025-04-15",
    readMinutes: 6,
    bodySlug: "maintenance-request-system",
    faqs: [
      { q: "Do I need software or is a form fine?", a: "A form works for under 50 units. Beyond that, software pays for itself in routing and SLA tracking." },
      { q: "What SLA tiers should I set?", a: "Emergency (2 hr), urgent (24 hr), standard (3 business days), cosmetic (next make-ready)." },
    ],
  },

  // ── CLUSTER 16 ────────────────────────────────────────────────
  {
    slug: "hvac-maintenance-apartments-florida",
    title: "HVAC Maintenance for Apartment Communities — Florida Guide",
    metaTitle: "HVAC Maintenance for Apartments Florida | FiveServ Guide",
    metaDescription: "Florida apartment HVAC maintenance schedule: monthly filters, quarterly coil clean, annual full service. Costs, SLAs, and emergency response.",
    category: "maintenance",
    excerpt: "Monthly, quarterly, and annual HVAC schedule for Central Florida apartment communities — with costs and SLAs.",
    tldr: "Florida apartment HVAC needs monthly filter changes, quarterly condensate line clear, semi-annual coil clean, and annual full service. FiveServ Property Solutions runs HVAC PM contracts across Central Florida with 2-hour emergency response when AC fails over 85°F.",
    keyword: "HVAC maintenance apartments Florida",
    datePublished: "2025-04-15",
    readMinutes: 8,
    bodySlug: "hvac-maintenance-apartments-florida",
    faqs: [
      { q: "Monthly filter changes — really?", a: "In Florida, yes. Humidity and dust load make 90-day filters underperform fast. Monthly is the standard for multifamily." },
      { q: "What's an HVAC emergency?", a: "No cooling when ambient temp is over 85°F or no heating under 50°F. 2-hour response is standard." },
    ],
  },

  // ── CLUSTER 17 ────────────────────────────────────────────────
  {
    slug: "plumbing-emergency-multifamily",
    title: "How to Handle a Plumbing Emergency in a Multifamily Property",
    metaTitle: "Plumbing Emergency in Multifamily | Action Guide | FiveServ",
    metaDescription: "Step-by-step plumbing emergency response for Central Florida multifamily: shutoff locations, resident communication, and 2-hour vendor SLA.",
    category: "maintenance",
    excerpt: "The shut-off locations, resident communication script, and 2-hour vendor SLA for multifamily plumbing emergencies.",
    tldr: "Plumbing emergencies in multifamily — active leaks, sewer backup, no water — require immediate shut-off at the unit or building level, resident notification, and a licensed plumber on-site within 2 hours. FiveServ Property Solutions runs a 24/7 emergency plumbing line across Central Florida.",
    keyword: "plumbing emergency multifamily",
    datePublished: "2025-04-15",
    readMinutes: 7,
    bodySlug: "plumbing-emergency-multifamily",
    faqs: [
      { q: "Where are unit shutoffs in most Florida apartments?", a: "Under each sink, behind each toilet, and at the water heater. Building shutoff is typically near the meter or in a mechanical closet." },
      { q: "Should I call a plumber or maintenance first?", a: "Whoever can be on-site fastest. For active flooding, shut off water before either call." },
    ],
  },

  // ── CLUSTER 18 ────────────────────────────────────────────────
  {
    slug: "true-cost-vacant-unit-central-florida",
    title: "The True Cost of a Vacant Unit in Central Florida",
    metaTitle: "True Cost of a Vacant Unit in Central Florida | FiveServ",
    metaDescription: "The full daily cost of a vacant unit in Central Florida — lost rent, utilities, marketing — and how a 5-day make-ready protects NOI.",
    category: "tips-and-guides",
    excerpt: "The full daily cost of vacancy in Central Florida — and how cutting turn time from 12 to 5 days protects NOI.",
    tldr: "A vacant unit in Central Florida costs $55–$95 per day in lost rent plus $8–$15 in utilities and marketing. FiveServ Property Solutions cuts make-ready time from a typical 12 days to 5 days, saving operators $440–$770 per turn per unit across Central Florida.",
    keyword: "vacant unit cost Florida",
    datePublished: "2025-04-15",
    readMinutes: 7,
    bodySlug: "true-cost-vacant-unit-central-florida",
    faqs: [
      { q: "How do I calculate per-day vacancy cost?", a: "Annual rent ÷ 365 + daily utilities + amortized marketing per turn. Most 1–2BR units land at $63–$110/day all-in." },
      { q: "Does cutting turn time really help if the unit isn't pre-leased?", a: "Yes — a shorter turn extends your leasing window, reduces concession pressure, and protects same-store NOI." },
    ],
  },

  // ── FAQ COMPARISON 19 ────────────────────────────────────────
  {
    slug: "make-ready-vs-cleaning",
    title: "Make-Ready vs Cleaning: What Is the Difference?",
    metaTitle: "Make-Ready vs Cleaning: What's the Difference? | FiveServ",
    metaDescription: "Cleaning is one step inside a make-ready. The full difference between unit cleaning and a complete make-ready service in Central Florida.",
    category: "make-ready",
    excerpt: "Cleaning is one step. Make-ready is the full turn. The clear difference and when each is appropriate.",
    tldr: "Cleaning is one step inside a make-ready. A make-ready also includes paint, drywall, plumbing and electrical inspection, appliance check, and final QC walk-through. FiveServ Property Solutions provides both, but a clean alone is not a turn.",
    keyword: "make-ready vs cleaning",
    datePublished: "2025-04-15",
    readMinutes: 4,
    bodySlug: "make-ready-vs-cleaning",
    faqs: [
      { q: "Can I just clean between residents?", a: "Only on a short turn with no damage and no paint required. Otherwise you're skipping required scope." },
      { q: "What does a deep clean cost separately?", a: "$185–$325 for a 1–2BR unit in Central Florida." },
    ],
  },

  // ── FAQ COMPARISON 20 ────────────────────────────────────────
  {
    slug: "pm-company-vs-maintenance-company",
    title: "Property Management Company vs Maintenance Company",
    metaTitle: "Property Management vs Maintenance Company | FiveServ",
    metaDescription: "Property management companies handle leasing, accounting, and resident relations. Maintenance companies handle the physical work. The clear difference.",
    category: "tips-and-guides",
    excerpt: "PM companies run leasing, accounting, and residents. Maintenance companies run the physical work. Both are needed.",
    tldr: "A property management company handles leasing, accounting, resident relations, and compliance. A maintenance company like FiveServ Property Solutions handles the physical work — turns, repairs, CapEx — across Central Florida. Most multifamily portfolios need both.",
    keyword: "PM vs maintenance company",
    datePublished: "2025-04-15",
    readMinutes: 4,
    bodySlug: "pm-company-vs-maintenance-company",
    faqs: [
      { q: "Can one company do both?", a: "Some can, but they typically sub the maintenance side. Best-in-class operators separate the two." },
      { q: "Who pays the maintenance company?", a: "The owner pays via the PM company's monthly statement, or the PM passes invoices through." },
    ],
  },

  // ── FAQ COMPARISON 21 ────────────────────────────────────────
  {
    slug: "how-long-make-ready-take",
    title: "How Long Should a Make-Ready Take? Honest Answer",
    metaTitle: "How Long Should a Make-Ready Take? | FiveServ Honest Answer",
    metaDescription: "Honest answer: 5 business days for a standard make-ready in Central Florida when one vendor coordinates trades. 10–14 days when vendors are stacked.",
    category: "make-ready",
    excerpt: "5 business days when one vendor coordinates trades. 10–14 days when vendors are stacked. Honest math.",
    tldr: "A make-ready should take 5 business days for a standard 1–2BR unit when one vendor coordinates trades. With stacked vendors, the same scope takes 10–14 days. FiveServ Property Solutions guarantees the 5-day timeline across Central Florida.",
    keyword: "how long make-ready take",
    datePublished: "2025-04-15",
    readMinutes: 4,
    bodySlug: "how-long-make-ready-take",
    faqs: [
      { q: "Why does the same scope take 14 days with multiple vendors?", a: "Idle days between trades — painter doesn't show until day 4, plumber not booked until day 7. Each handoff loses 1–2 days." },
      { q: "Is 5 days realistic for heavy damage?", a: "No — heavy damage is CapEx, not make-ready, and gets its own timeline." },
    ],
  },

  // ── FAQ COMPARISON 22 ────────────────────────────────────────
  {
    slug: "what-does-24-7-maintenance-mean",
    title: "What Does 24/7 Maintenance Actually Mean?",
    metaTitle: "What Does 24/7 Maintenance Actually Mean? | FiveServ",
    metaDescription: "True 24/7 maintenance means a live answering service, 2-hour on-site emergency response, and licensed trades on-call — not just a voicemail.",
    category: "maintenance",
    excerpt: "Live answering service. 2-hour on-site emergency response. Licensed trades on call. The real test.",
    tldr: "True 24/7 maintenance means a live person answers, a licensed trade is on-call, and an emergency tech can be on-site within 2 hours — even at 3am on a Sunday. FiveServ Property Solutions runs a real 24/7 line across Central Florida.",
    keyword: "24/7 property maintenance meaning",
    datePublished: "2025-04-15",
    readMinutes: 4,
    bodySlug: "what-does-24-7-maintenance-mean",
    faqs: [
      { q: "How do I test a vendor's 24/7 claim?", a: "Call them at 11pm on a Saturday. If you get voicemail, it's not real 24/7." },
      { q: "Is 24/7 always more expensive?", a: "Slightly higher base rate, but vastly cheaper than after-hours emergency premiums from non-24/7 vendors." },
    ],
  },

  // ── FAQ COMPARISON 23 ────────────────────────────────────────
  {
    slug: "5-questions-before-hiring-maintenance",
    title: "5 Questions to Ask Before Hiring a Property Maintenance Company",
    metaTitle: "5 Questions Before Hiring a Maintenance Company | FiveServ",
    metaDescription: "The 5 questions Central Florida property managers should ask any maintenance vendor before signing — covering insurance, in-house crews, SLAs, and pricing.",
    category: "tips-and-guides",
    excerpt: "5 questions that separate professional vendors from one-person shops. Use them in every interview.",
    tldr: "Ask any property maintenance vendor: 1) What's your insurance limit? 2) Are crews in-house or subbed? 3) What's your emergency response SLA? 4) Do you publish flat-rate pricing? 5) Can I see 3 multifamily references? FiveServ Property Solutions answers yes across Central Florida.",
    keyword: "questions before hiring",
    datePublished: "2025-04-15",
    readMinutes: 5,
    bodySlug: "5-questions-before-hiring-maintenance",
    faqs: [
      { q: "What's a deal-breaker answer?", a: "Subbed crews with no licensed trades on staff, or refusal to provide references." },
      { q: "Should I ask for a trial project?", a: "Yes — one make-ready or one PM cycle before signing a longer agreement." },
    ],
  },

  // ── FAQ COMPARISON 24 ────────────────────────────────────────
  {
    slug: "make-ready-orlando-fl-what-to-expect",
    title: "Make-Ready in Orlando FL — What to Expect",
    metaTitle: "Make-Ready in Orlando FL | What to Expect | FiveServ",
    metaDescription: "Make-ready in Orlando FL: 5-day timeline, $850–$1,800 standard pricing, and same-day response across downtown, Lake Nona, MetroWest, and Dr. Phillips.",
    category: "make-ready",
    excerpt: "Timeline, pricing, and same-day response coverage across Orlando — downtown, Lake Nona, MetroWest, Dr. Phillips.",
    tldr: "Make-ready in Orlando, FL takes 5 business days, costs $850–$1,800 for a standard 1–2BR turn, and is available same-day across downtown, Lake Nona, MetroWest, and Dr. Phillips. FiveServ Property Solutions is headquartered in Orlando and runs the entire Central Florida region from here.",
    keyword: "make-ready Orlando FL",
    datePublished: "2025-04-15",
    readMinutes: 5,
    bodySlug: "make-ready-orlando-fl-what-to-expect",
    faqs: [
      { q: "Same-day response across all of Orlando?", a: "Yes — Orlando is our home market. Same-day on-site for emergencies, 24-hour quote turnaround for make-readies." },
      { q: "Do you serve outside Orlando?", a: "Yes — 18 cities across Central Florida from Daytona to Lakeland." },
    ],
  },

  // ── FAQ COMPARISON 25 ────────────────────────────────────────
  {
    slug: "best-time-capex-renovations-florida",
    title: "Best Time of Year to Do CapEx Renovations in Florida",
    metaTitle: "Best Time for CapEx Renovations in Florida | FiveServ",
    metaDescription: "Best time for CapEx renovations in Florida: October–February when leasing demand is lowest and vacancy days hurt least. Full seasonal breakdown.",
    category: "capex",
    excerpt: "October to February is the CapEx sweet spot — lowest leasing demand, easiest scheduling, and minimal vacancy impact.",
    tldr: "The best time for CapEx renovations in Florida is October–February when leasing demand is lowest and vacancy days hurt NOI least. FiveServ Property Solutions schedules CapEx projects in this window across Central Florida portfolios to minimize revenue impact.",
    keyword: "capex renovations Florida timing",
    datePublished: "2025-04-15",
    readMinutes: 5,
    bodySlug: "best-time-capex-renovations-florida",
    faqs: [
      { q: "Why not summer?", a: "Peak leasing season — vacancy during May–September is most expensive. Save CapEx for low-demand months." },
      { q: "What about hurricane season?", a: "June–November carries weather risk for any exterior work. Schedule interior CapEx during the storm window if needed." },
    ],
  },

  // ── FAQ COMPARISON 26 ────────────────────────────────────────
  {
    slug: "multifamily-inspection-frequency-florida",
    title: "How Often Should You Inspect Multifamily Units in Florida?",
    metaTitle: "How Often to Inspect Multifamily Units in Florida | FiveServ",
    metaDescription: "Multifamily inspection frequency in Florida: semi-annual unit inspections, monthly common areas, annual exterior. Full schedule and cost guide.",
    category: "maintenance",
    excerpt: "Semi-annual unit inspections, monthly common areas, annual exterior. The full Florida multifamily schedule.",
    tldr: "Florida multifamily units should be inspected semi-annually inside the unit, monthly for common areas, and annually for exterior. FiveServ Property Solutions runs scheduled inspection programs across Central Florida with photo documentation per unit.",
    keyword: "multifamily inspection frequency",
    datePublished: "2025-04-15",
    readMinutes: 5,
    bodySlug: "multifamily-inspection-frequency-florida",
    faqs: [
      { q: "Are inspections required by law in Florida?", a: "No state-level mandate, but lender and insurance requirements often require them. Check your loan covenants." },
      { q: "What's a typical inspection cost?", a: "$45–$75 per unit including photo documentation." },
    ],
  },

  // ── FAQ COMPARISON 27 ────────────────────────────────────────
  {
    slug: "drywall-repairs-apartments-normal-not",
    title: "Drywall Repairs in Apartments: What Is Normal What Is Not",
    metaTitle: "Drywall Repairs in Apartments: Normal vs Not | FiveServ",
    metaDescription: "Normal drywall wear includes nail pops and small holes from move-out. Not normal: water damage, structural cracks, mold-staining. The difference.",
    category: "maintenance",
    excerpt: "Normal: nail pops, small move-out holes. Not normal: water damage, structural cracks, mold staining.",
    tldr: "Normal apartment drywall includes nail pops, small holes from move-out, and minor settling cracks. Water staining, structural cracks, or mold-related damage are not normal and require immediate inspection. FiveServ Property Solutions repairs both during make-ready across Central Florida.",
    keyword: "drywall repairs apartments",
    datePublished: "2025-04-15",
    readMinutes: 5,
    bodySlug: "drywall-repairs-apartments-normal-not",
    faqs: [
      { q: "Is a wall crack always structural?", a: "No — most are settling. Horizontal cracks at the same height across multiple walls are the warning sign that needs structural inspection." },
      { q: "Who pays for drywall repair after move-out?", a: "Wear-and-tear is owner cost. Damage beyond reasonable use can be deducted from the security deposit per Florida statute." },
    ],
  },

  // ── FAQ COMPARISON 28 ────────────────────────────────────────
  {
    slug: "hvac-vs-ac-maintenance-florida",
    title: "HVAC vs AC Maintenance in Florida Apartments",
    metaTitle: "HVAC vs AC Maintenance in Florida | FiveServ",
    metaDescription: "HVAC includes heating and cooling. AC is cooling only. In Florida apartments, most systems are full HVAC — and the maintenance overlap matters.",
    category: "maintenance",
    excerpt: "HVAC is heating and cooling. AC is cooling only. In Florida, the distinction matters less than the maintenance schedule.",
    tldr: "HVAC means heating, ventilation, and air conditioning. AC is just cooling. Most Florida apartments have full HVAC systems even though heat is rarely used. FiveServ Property Solutions services both year-round across Central Florida — filters, coils, condensate, and emergency response.",
    keyword: "HVAC AC difference Florida",
    datePublished: "2025-04-15",
    readMinutes: 4,
    bodySlug: "hvac-vs-ac-maintenance-florida",
    faqs: [
      { q: "Do I need to service heat in Florida?", a: "Yes — once a year at minimum. Heat strips fail silently and you'll find out the one cold week of the year." },
      { q: "Is heat-pump maintenance the same?", a: "Mostly yes, with extra attention to reversing valve and defrost cycle." },
    ],
  },

  // ── FAQ COMPARISON 29 ────────────────────────────────────────
  {
    slug: "5-day-make-ready-guarantee",
    title: "What Is a 5-Day Make-Ready Guarantee and Why It Matters",
    metaTitle: "5-Day Make-Ready Guarantee Explained | FiveServ",
    metaDescription: "A 5-day make-ready guarantee means standard scope is complete in 5 business days or the vendor pays. Why it matters and how FiveServ structures it.",
    category: "make-ready",
    excerpt: "What the 5-day guarantee actually covers, what triggers it, and why it changes vendor behavior.",
    tldr: "A 5-day make-ready guarantee means standard scope is complete in 5 business days from project start, or the vendor pays a daily credit. FiveServ Property Solutions backs the guarantee in writing across Central Florida — it's the operational backbone, not marketing.",
    keyword: "5 day guarantee make-ready",
    datePublished: "2025-04-15",
    readMinutes: 5,
    bodySlug: "5-day-make-ready-guarantee",
    faqs: [
      { q: "What's the credit if FiveServ misses the deadline?", a: "Daily lost-rent credit per the written agreement. Real number, not vague." },
      { q: "Does heavy damage qualify?", a: "No — guarantee covers standard scope. CapEx-tier damage is quoted separately with its own timeline." },
    ],
  },

  // ── FAQ COMPARISON 30 ────────────────────────────────────────
  {
    slug: "property-maintenance-glossary-a-z",
    title: "Property Maintenance Glossary for Property Managers A-Z",
    metaTitle: "Property Maintenance Glossary A-Z | FiveServ",
    metaDescription: "A-to-Z glossary of property maintenance terms every Central Florida multifamily property manager should know — from CapEx to walk-through.",
    category: "tips-and-guides",
    excerpt: "A-to-Z reference of multifamily maintenance terminology — from CapEx to walk-through.",
    tldr: "This glossary defines the property maintenance terms every Central Florida multifamily PM uses weekly — CapEx, OpEx, make-ready, punch list, SLA, work order, and more. FiveServ Property Solutions publishes this as a free reference for new property managers and onsite teams.",
    keyword: "property maintenance glossary",
    datePublished: "2025-04-15",
    readMinutes: 6,
    bodySlug: "property-maintenance-glossary-a-z",
    faqs: [
      { q: "Are these terms standard across vendors?", a: "Mostly yes. Some vendors use 'turn' vs 'make-ready' differently — confirm definitions in your scope sheet." },
      { q: "Can I share this with my onsite team?", a: "Yes — that's the intended use. Free to copy and distribute internally." },
    ],
  },
];

export const getPostBySlug = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
export const getPostsByCategory = (cat: BlogCategory) =>
  BLOG_POSTS.filter((p) => p.category === cat);
