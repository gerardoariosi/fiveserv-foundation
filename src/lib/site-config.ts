/**
 * FiveServ — single source of truth for brand, contact, services, cities.
 * Pulls overridable values from VITE_ env vars at build time.
 */

const env = import.meta.env;

export const SITE = {
  name: env.VITE_COMPANY_NAME || "FiveServ Property Solutions",
  legal: env.VITE_COMPANY_LEGAL || "FiveServ Group LLC",
  brand: "FiveServ",
  tagline: "One Call. One Team. Done.",
  domain: env.VITE_DOMAIN || "fiveserv.net",
  url: `https://${env.VITE_DOMAIN || "fiveserv.net"}`,
  email: env.VITE_EMAIL || "info@fiveserv.net",
  phone: env.VITE_PHONE || "(407) 881-4942",
  baseCity: env.VITE_BASE_CITY || "Orlando",
  baseState: env.VITE_BASE_STATE || "FL",
  hours: "Available 24/7",
  social: {
    instagram: "https://instagram.com/FiveServ",
    facebook: "https://facebook.com/FiveServ",
    linkedin: "https://linkedin.com/company/FiveServ",
    handle: "@FiveServ",
  },
  tracking: {
    ga4: env.VITE_GA4_ID || "G-S6BNXJZ1XL",
    gsc: env.VITE_GSC_CODE || "",
    clarity: env.VITE_CLARITY_CODE || "wdsziferws",
  },
} as const;

export const STATS = [
  { value: 300, suffix: "+", label: "Units Completed" },
  { value: 50, suffix: "+", label: "Communities Served" },
  { value: 18, suffix: "", label: "Cities Covered" },
  { value: 15, suffix: "+", label: "Years Combined Experience" },
  { value: 24, suffix: "/7", label: "Available" },
] as const;

export type ServiceSlug = "make-ready" | "maintenance" | "renovations" | "residential";

export const SERVICES: {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
  cta: string;
}[] = [
  {
    slug: "make-ready",
    name: "Make-Ready / Unit Turns",
    short: "5-day guarantee. Painting, cleaning, repairs, inspection.",
    description:
      "Your unit ready in 5 days. Painting, cleaning, repairs, and final inspection. One invoice. No surprises.",
    cta: "Get Your 5-Day Make-Ready",
  },
  {
    slug: "maintenance",
    name: "Maintenance and Repairs",
    short: "24/7 emergency. Plumbing, electrical, HVAC, drywall.",
    description:
      "Plumbing, electrical, HVAC, drywall. We answer the phone. We show up. We finish.",
    cta: "Call for Service",
  },
  {
    slug: "renovations",
    name: "CapEx and Renovations",
    short: "Increase NOI. Increase property value.",
    description:
      "CapEx projects that move the needle. Built for property managers who track returns.",
    cta: "Plan Your CapEx Project",
  },
  {
    slug: "residential",
    name: "Residential Services",
    short: "Home maintenance for homeowners.",
    description:
      "The same crews that turn 500-unit communities. Now at your home.",
    cta: "Book a Home Visit",
  },
];

export type CitySlug =
  | "orlando-fl"
  | "kissimmee-fl"
  | "sanford-fl"
  | "winter-park-fl"
  | "lakeland-fl"
  | "altamonte-springs-fl"
  | "apopka-fl"
  | "ocoee-fl"
  | "winter-garden-fl"
  | "clermont-fl"
  | "st-cloud-fl"
  | "davenport-fl"
  | "deltona-fl"
  | "daytona-beach-fl"
  | "palm-coast-fl"
  | "melbourne-fl"
  | "palm-bay-fl"
  | "cocoa-fl";

export const CITIES: {
  slug: CitySlug;
  name: string;
  state: string;
  zips: string[];
  zones: string;
  responseTime: string;
}[] = [
  { slug: "orlando-fl", name: "Orlando", state: "FL", zips: ["32801", "32803", "32804", "32806", "32807", "32808", "32809", "32810", "32811", "32812", "32814", "32819", "32822", "32824", "32827", "32828", "32829", "32832", "32835", "32839"], zones: "Downtown, Lake Nona, MetroWest, Dr. Phillips", responseTime: "Same day" },
  { slug: "kissimmee-fl", name: "Kissimmee", state: "FL", zips: ["34741", "34743", "34744", "34746", "34747", "34758", "34759"], zones: "Celebration, Poinciana, Buenaventura Lakes", responseTime: "Same day" },
  { slug: "sanford-fl", name: "Sanford", state: "FL", zips: ["32771", "32773"], zones: "Lake Mary border, Historic Downtown", responseTime: "Same day" },
  { slug: "winter-park-fl", name: "Winter Park", state: "FL", zips: ["32789", "32792"], zones: "Park Avenue, Hannibal Square", responseTime: "Same day" },
  { slug: "lakeland-fl", name: "Lakeland", state: "FL", zips: ["33801", "33803", "33805", "33809", "33810", "33811", "33812", "33813", "33815"], zones: "South Lakeland, North Lakeland", responseTime: "Within 24 hours" },
  { slug: "altamonte-springs-fl", name: "Altamonte Springs", state: "FL", zips: ["32701", "32714", "32779"], zones: "Cranes Roost, Uptown Altamonte", responseTime: "Same day" },
  { slug: "apopka-fl", name: "Apopka", state: "FL", zips: ["32703", "32712"], zones: "Wekiva, Errol Estate", responseTime: "Same day" },
  { slug: "ocoee-fl", name: "Ocoee", state: "FL", zips: ["34761"], zones: "Health Central, Crown Point", responseTime: "Same day" },
  { slug: "winter-garden-fl", name: "Winter Garden", state: "FL", zips: ["34787"], zones: "Plant Street, Horizon West", responseTime: "Same day" },
  { slug: "clermont-fl", name: "Clermont", state: "FL", zips: ["34711", "34714", "34715"], zones: "Kings Ridge, Four Corners", responseTime: "Within 24 hours" },
  { slug: "st-cloud-fl", name: "St. Cloud", state: "FL", zips: ["34769", "34771", "34772", "34773"], zones: "Narcoossee, Harmony", responseTime: "Same day" },
  { slug: "davenport-fl", name: "Davenport", state: "FL", zips: ["33837", "33896", "33897"], zones: "ChampionsGate, Reunion", responseTime: "Within 24 hours" },
  { slug: "deltona-fl", name: "Deltona", state: "FL", zips: ["32725", "32738", "32763"], zones: "Deltona Lakes, Eastern Deltona", responseTime: "Within 24 hours" },
  { slug: "daytona-beach-fl", name: "Daytona Beach", state: "FL", zips: ["32114", "32117", "32118", "32119"], zones: "Beachside, LPGA, Daytona Mainland", responseTime: "Within 24 hours" },
  { slug: "palm-coast-fl", name: "Palm Coast", state: "FL", zips: ["32137", "32164"], zones: "European Village, Hammock Dunes", responseTime: "Within 24 hours" },
  { slug: "melbourne-fl", name: "Melbourne", state: "FL", zips: ["32901", "32904", "32934", "32935"], zones: "Eau Gallie, Suntree", responseTime: "Within 24 hours" },
  { slug: "palm-bay-fl", name: "Palm Bay", state: "FL", zips: ["32905", "32907", "32908", "32909"], zones: "Bayside Lakes, Port Malabar", responseTime: "Within 24 hours" },
  { slug: "cocoa-fl", name: "Cocoa", state: "FL", zips: ["32922", "32926", "32927"], zones: "Cocoa Village, Port St. John", responseTime: "Within 24 hours" },
];

export const COMING_SOON_CITIES = [{ name: "Tampa Bay", state: "FL", slug: "tampa-bay-fl" }];

export const TEAM = [
  { name: "Gerardo Rios", role: "Founder & CEO", photo: "/images/team/team-member-1.jpg" },
  { name: "Gerardo Andrés Rios", role: "Client Relations & Systems Operations", photo: "/images/team/team-member-2.jpg" },
  { name: "Mariel Iragorry", role: "Accounting & Administration", photo: "/images/team/team-member-3.jpg" },
  { name: "Jose Rios", role: "Marketing & Growth", photo: "/images/team/team-member-4.jpg" },
  { name: "Luis Mora", role: "Lead Technician", photo: "/images/team/team-member-5.jpg" },
];

export const FIVE_PILLARS = [
  { number: 1, title: "We Show Up", description: "On time. Every time. No excuses." },
  { number: 2, title: "We Quote Fast", description: "Quote in 24 hours. Start in 48." },
  { number: 3, title: "We Finish in 5 Days", description: "Make-ready guaranteed in 5 business days." },
  { number: 4, title: "We Send One Invoice", description: "One call. One invoice. No surprises." },
  { number: 5, title: "We Stand Behind It", description: "Family name on every job." },
];
