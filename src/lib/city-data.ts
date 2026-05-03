import { SITE } from "./site-config";
import type { CitySlug } from "./site-config";

/**
 * Per-city editorial overrides used by the /maintenance-[city]-fl pages.
 * - `zones`: human-readable list shown in copy/grid (overrides site-config zones if present)
 * - `zips`: ZIPs to feature in body copy + AI Overview (subset is fine)
 * - `responseMinutes`: drive time from Orlando base
 * - `angle`: optional bespoke "Why FiveServ in [city]" paragraph
 * - `faqs`: 5–8 city-specific Q&As
 */

export type CityFaq = { q: string; a: string };

export type CityEditorial = {
  zones: string[];
  zips: string[];
  responseMinutes: number;
  angle?: string;
  faqs: CityFaq[];
  heroImage: string;
  heroImagePosition?: string;
};

const DEFAULT_HERO = "/images/cities/default-central-florida.jpg";

const baseFaqs = (city: string, zips: string[], minutes: number, zones: string[]): CityFaq[] => [
  {
    q: `What property maintenance services does ${SITE.brand} offer in ${city}, FL?`,
    a: `${SITE.brand} provides make-ready, maintenance, CapEx renovations, and residential repair services in ${city}. One call covers plumbing, electrical, HVAC, drywall, painting, flooring, and general work orders. One invoice. One accountable team.`,
  },
  {
    q: `What ZIP codes do you serve in ${city}?`,
    a: `We currently serve ${zips.join(", ")} and the surrounding ${city} area. Coverage includes ${zones.slice(0, 3).join(", ")}.`,
  },
  {
    q: `How fast can ${SITE.brand} reach my ${city} property?`,
    a: `From our Orlando base we typically reach ${city} within ${minutes} minutes. Emergency calls — water, power, AC, lockouts — get a 2-hour on-site response 24/7.`,
  },
  {
    q: `Do you offer 24/7 emergency maintenance in ${city}?`,
    a: `Yes. Call ${SITE.phone} any time. A real person answers, day or night, weekends and holidays. No answering service.`,
  },
  {
    q: `Are you licensed and insured to work in ${city}, FL?`,
    a: `Yes. ${SITE.brand} is fully licensed and insured in Florida. Plumbing, electrical, and HVAC work is performed by licensed contractors under our coordination. FiveServ Group LLC is fully licensed and insured in the state of Florida.`,
  },
];

/** Extra FAQs only the two flagship cities get (Orlando + Kissimmee require 8 questions). */
const extendedFaqs = (city: string, neighborhoods: string[]): CityFaq[] => [
  {
    q: `Do you work with property management companies in ${city}?`,
    a: `Yes. ${SITE.brand} runs ongoing maintenance partnerships with PM companies across the ${city} market — single buildings up to 500-unit portfolios. One point of contact, one invoice cycle.`,
  },
  {
    q: `Which ${city} neighborhoods do you cover most often?`,
    a: `Our highest volume in ${city} is across ${neighborhoods.join(", ")}. We work the entire city — these are simply where we run the most jobs each week.`,
  },
  {
    q: `How do I get a quote for a ${city} property?`,
    a: `Call ${SITE.phone} or fill out the form on this page. Free on-site assessment within 24 hours in ${city}. Line-item quote before any work begins.`,
  },
];

export const CITY_EDITORIAL: Partial<Record<CitySlug, CityEditorial>> = {
  "orlando-fl": {
    zones: ["Lake Nona", "Dr. Phillips", "Windermere", "Downtown Orlando", "College Park", "Winter Park border", "MetroWest", "Baldwin Park"],
    zips: ["32801", "32803", "32809", "32819"],
    responseMinutes: 30,
    heroImage: "/images/cities/orlando.jpg",
    angle: `${SITE.brand} is based in Orlando — this is our home market and where we have the fastest response times anywhere in Central Florida. Our crews live and work across Lake Nona, Dr. Phillips, Windermere, Downtown, College Park, MetroWest, and Baldwin Park. We know the buildings, we know the property managers, and we know the city.`,
    faqs: [
      ...baseFaqs("Orlando", ["32801", "32803", "32809", "32819"], 30, ["Lake Nona", "Dr. Phillips", "Windermere"]),
      ...extendedFaqs("Orlando", ["Lake Nona", "Dr. Phillips", "Downtown Orlando"]),
    ],
  },
  "kissimmee-fl": {
    zones: ["US-192 corridor", "Celebration adjacent", "Poinciana", "Old Town area"],
    zips: ["34741", "34743", "34744"],
    responseMinutes: 35,
    heroImage: "/images/cities/kissimmee.jpg",
    angle: `Kissimmee has one of Central Florida's largest Hispanic communities. ${SITE.brand} is a Venezuelan-American family business with a fully bilingual team — English and Spanish — which is a real advantage in this market for both residents and on-site staff. We know the US-192 corridor, the Celebration-adjacent communities, and the Poinciana market.`,
    faqs: [
      ...baseFaqs("Kissimmee", ["34741", "34743", "34744"], 35, ["US-192 corridor", "Celebration adjacent", "Poinciana"]),
      ...extendedFaqs("Kissimmee", ["US-192 corridor", "Poinciana", "Celebration adjacent"]),
      {
        q: "Do you have Spanish-speaking technicians for Kissimmee residents?",
        a: `Yes. ${SITE.brand} is a Venezuelan-American family — our entire team is bilingual English and Spanish. Residents and on-site staff in Kissimmee get clear communication every time.`,
      },
    ],
  },
  "sanford-fl": {
    zones: ["Historic Downtown", "Lake Mary border", "I-4 corridor"],
    zips: ["32771", "32773"],
    responseMinutes: 45,
    heroImage: "/images/cities/sanford.jpg",
    faqs: baseFaqs("Sanford", ["32771", "32773"], 45, ["Historic Downtown", "Lake Mary border", "I-4 corridor"]),
  },
  "winter-park-fl": {
    zones: ["Park Avenue area", "Maitland border"],
    zips: ["32789", "32792"],
    responseMinutes: 20,
    heroImage: "/images/cities/winter-park.jpg",
    heroImagePosition: "center 60%",
    faqs: baseFaqs("Winter Park", ["32789", "32792"], 20, ["Park Avenue area", "Maitland border"]),
  },
  "lakeland-fl": {
    zones: ["US-98 corridor", "Polk County"],
    zips: ["33801", "33803", "33813"],
    responseMinutes: 60,
    heroImage: "/images/cities/lakeland.jpg",
    faqs: baseFaqs("Lakeland", ["33801", "33803", "33813"], 60, ["US-98 corridor", "Polk County"]),
  },
  "altamonte-springs-fl": {
    zones: ["Semoran Blvd", "I-4 junction"],
    zips: ["32701", "32714"],
    responseMinutes: 25,
    heroImage: "/images/cities/altamonte-springs.jpg",
    faqs: baseFaqs("Altamonte Springs", ["32701", "32714"], 25, ["Semoran Blvd", "I-4 junction"]),
  },
  "apopka-fl": {
    zones: ["NW Orange County", "growing market"],
    zips: ["32703", "32712"],
    responseMinutes: 35,
    heroImage: "/images/cities/apopka.jpg",
    faqs: baseFaqs("Apopka", ["32703", "32712"], 35, ["NW Orange County", "growing market"]),
  },
  "ocoee-fl": {
    zones: ["West Orange County", "SR-50 corridor"],
    zips: ["34761"],
    responseMinutes: 30,
    heroImage: "/images/cities/ocoee.jpg",
    faqs: baseFaqs("Ocoee", ["34761"], 30, ["West Orange County", "SR-50 corridor"]),
  },
  "winter-garden-fl": {
    zones: ["West Orange Trail", "suburban growth"],
    zips: ["34787"],
    responseMinutes: 35,
    heroImage: "/images/cities/winter-garden.jpg",
    faqs: baseFaqs("Winter Garden", ["34787"], 35, ["West Orange Trail", "suburban growth"]),
  },
  "clermont-fl": {
    zones: ["US-27 corridor", "Lake County"],
    zips: ["34711", "34714"],
    responseMinutes: 45,
    heroImage: DEFAULT_HERO,
    faqs: baseFaqs("Clermont", ["34711", "34714"], 45, ["US-27 corridor", "Lake County"]),
  },
  "st-cloud-fl": {
    zones: ["Osceola County", "residential growth"],
    zips: ["34769", "34772"],
    responseMinutes: 40,
    heroImage: "/images/cities/st-cloud.jpg",
    faqs: baseFaqs("St. Cloud", ["34769", "34772"], 40, ["Osceola County", "residential growth"]),
  },
  "davenport-fl": {
    zones: ["US-27", "Polk-Osceola border"],
    zips: ["33837"],
    responseMinutes: 50,
    heroImage: "/images/cities/davenport.jpg",
    faqs: baseFaqs("Davenport", ["33837"], 50, ["US-27", "Polk-Osceola border"]),
  },
  "deltona-fl": {
    zones: ["Volusia County", "I-4 corridor"],
    zips: ["32725", "32738"],
    responseMinutes: 45,
    heroImage: DEFAULT_HERO,
    faqs: baseFaqs("Deltona", ["32725", "32738"], 45, ["Volusia County", "I-4 corridor"]),
  },
  "daytona-beach-fl": {
    zones: ["LPGA corridor", "beachside communities"],
    zips: ["32114", "32118"],
    responseMinutes: 70,
    heroImage: DEFAULT_HERO,
    faqs: baseFaqs("Daytona Beach", ["32114", "32118"], 70, ["LPGA corridor", "beachside communities"]),
  },
  "palm-coast-fl": {
    zones: ["Flagler County", "master-planned communities"],
    zips: ["32137"],
    responseMinutes: 80,
    heroImage: DEFAULT_HERO,
    faqs: baseFaqs("Palm Coast", ["32137"], 80, ["Flagler County", "master-planned communities"]),
  },
  "melbourne-fl": {
    zones: ["Space Coast", "Brevard County"],
    zips: ["32901", "32935"],
    responseMinutes: 75,
    heroImage: DEFAULT_HERO,
    faqs: baseFaqs("Melbourne", ["32901", "32935"], 75, ["Space Coast", "Brevard County"]),
  },
  "palm-bay-fl": {
    zones: ["South Brevard", "suburban growth"],
    zips: ["32905", "32907"],
    responseMinutes: 80,
    heroImage: DEFAULT_HERO,
    faqs: baseFaqs("Palm Bay", ["32905", "32907"], 80, ["South Brevard", "suburban growth"]),
  },
  "cocoa-fl": {
    zones: ["Historic district", "Space Coast adjacent"],
    zips: ["32922", "32926"],
    responseMinutes: 70,
    heroImage: DEFAULT_HERO,
    faqs: baseFaqs("Cocoa", ["32922", "32926"], 70, ["Historic district", "Space Coast adjacent"]),
  },
};
