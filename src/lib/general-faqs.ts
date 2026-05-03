import { SITE } from "./site-config";

export type FaqCategory = "make-ready" | "maintenance" | "capex" | "getting-started";

export type GeneralFaq = { q: string; a: string; category: FaqCategory };

export const FAQ_CATEGORIES: { id: FaqCategory; label: string }[] = [
  { id: "make-ready", label: "Make-Ready" },
  { id: "maintenance", label: "Maintenance" },
  { id: "capex", label: "CapEx" },
  { id: "getting-started", label: "Getting Started" },
];

/**
 * 30 general FAQs across 4 categories.
 * All answers are rendered in HTML on /faq AND emitted as a single FAQPage JSON-LD block.
 */
export const GENERAL_FAQS: GeneralFaq[] = [
  // CATEGORY 1 — MAKE-READY (8)
  {
    category: "make-ready",
    q: "What is a make-ready?",
    a: `A make-ready prepares a vacant unit for a new tenant after move-out. ${SITE.brand} handles painting, cleaning, repairs, drywall, inspection, rekeying, and photo report — in 5 business days.`,
  },
  {
    category: "make-ready",
    q: `How long does ${SITE.brand} take?`,
    a: "5 business days — guaranteed in writing. Industry average with multiple vendors is 10+ days.",
  },
  {
    category: "make-ready",
    q: "What is included in a make-ready?",
    a: "Painting, deep cleaning, minor repairs, drywall, move-out inspection, rekeying, and full photo report.",
  },
  {
    category: "make-ready",
    q: "How much does a make-ready cost?",
    a: `1,500 to 4,000 dollars depending on unit condition. ${SITE.brand} provides a free line-item quote before work begins.`,
  },
  {
    category: "make-ready",
    q: "Is the 5-day guarantee real?",
    a: "Yes — in writing. If we miss the 5 days, we make it right. No excuses.",
  },
  {
    category: "make-ready",
    q: "What if damage is extensive?",
    a: "We assess first and give a clear quote — no surprises. Extensive damage is quoted separately with your approval.",
  },
  {
    category: "make-ready",
    q: "Do you provide a photo report?",
    a: "Yes — complete before and after photo documentation with every make-ready.",
  },
  {
    category: "make-ready",
    q: "How do I schedule a make-ready?",
    a: `Call ${SITE.phone} or fill the form. We respond within 24 hours.`,
  },

  // CATEGORY 2 — MAINTENANCE (8)
  {
    category: "maintenance",
    q: "Do you offer 24/7 emergency service?",
    a: `Yes — available 24/7 for emergency plumbing, electrical, and HVAC. Call ${SITE.phone} any time.`,
  },
  {
    category: "maintenance",
    q: "What repairs do you handle?",
    a: "Plumbing, electrical, HVAC, drywall, carpentry, and painting. In-house and licensed contractors under our coordination.",
  },
  {
    category: "maintenance",
    q: "How fast do you respond?",
    a: "Within 2 hours for emergencies across Central Florida.",
  },
  {
    category: "maintenance",
    q: "Are you licensed in Florida?",
    a: "Yes — fully licensed and insured. FiveServ Group LLC is fully licensed and insured in the state of Florida",
  },
  {
    category: "maintenance",
    q: "Do you do HVAC?",
    a: `Yes — licensed HVAC contractors work under ${SITE.brand} coordination.`,
  },
  {
    category: "maintenance",
    q: "Can I submit work orders?",
    a: "Yes — call or use our form. All tracked under one account per property.",
  },
  {
    category: "maintenance",
    q: "Do you handle multiple properties?",
    a: "Yes — we serve entire portfolios under ongoing service agreements.",
  },
  {
    category: "maintenance",
    q: "What areas do you cover?",
    a: "18 cities across Central Florida. See service areas page.",
  },

  // CATEGORY 3 — CAPEX (7)
  {
    category: "capex",
    q: "What is a CapEx project?",
    a: "Capital expenditure projects that improve property value and NOI — flooring, kitchen, bathroom, full unit rehabs.",
  },
  {
    category: "capex",
    q: "How do you quote CapEx work?",
    a: "Free assessment — clear line-item quote — your approval before any work starts.",
  },
  {
    category: "capex",
    q: "What is the timeline for CapEx?",
    a: "Depends on scope. We provide a detailed timeline at quote stage.",
  },
  {
    category: "capex",
    q: "Do you handle permits?",
    a: `Yes — ${SITE.brand} manages permitting for all projects that require it.`,
  },
  {
    category: "capex",
    q: "What is the ROI on value-add renovations?",
    a: "Value-add renovations in Central Florida multifamily average 15 to 20 percent rent increase.",
  },
  {
    category: "capex",
    q: "Can owners hire you directly?",
    a: "Yes — we work with PM companies and direct property owners.",
  },
  {
    category: "capex",
    q: "What types of projects do you handle?",
    a: "Flooring, kitchen upgrades, bathroom renovations, common areas, full unit rehabs, exterior improvements.",
  },

  // CATEGORY 4 — GETTING STARTED (7)
  {
    category: "getting-started",
    q: "How do I get started?",
    a: `Call ${SITE.phone} or fill the form at ${SITE.domain}. We respond within 24 hours.`,
  },
  {
    category: "getting-started",
    q: "Is there a minimum job size?",
    a: "No minimum — we serve properties of any size.",
  },
  {
    category: "getting-started",
    q: "Do you have service agreements?",
    a: "Yes — ongoing agreements for recurring make-readies and maintenance.",
  },
  {
    category: "getting-started",
    q: "How do you invoice?",
    a: "One invoice per job — detailed line items — easy to report to property owners.",
  },
  {
    category: "getting-started",
    q: "Can I see your work?",
    a: "Yes — photo reports for every completed job.",
  },
  {
    category: "getting-started",
    q: "Are you insured?",
    a: "Yes — fully licensed and insured in Florida. FiveServ Group LLC is fully licensed and insured in the state of Florida",
  },
  {
    category: "getting-started",
    q: `Why ${SITE.brand}?`,
    a: "Venezuelan-American family — written 5-day guarantee — one invoice — no excuses.",
  },
];
