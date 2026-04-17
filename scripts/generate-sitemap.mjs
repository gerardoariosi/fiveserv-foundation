// Generates public/sitemap.xml with priorities.
// Run after build: `node scripts/generate-sitemap.mjs`
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://fiveserv.net";

const SERVICES = ["make-ready", "maintenance", "renovations", "residential"];
const CITIES = [
  "orlando-fl", "kissimmee-fl", "sanford-fl", "winter-park-fl", "lakeland-fl",
  "altamonte-springs-fl", "apopka-fl", "ocoee-fl", "winter-garden-fl",
  "clermont-fl", "st-cloud-fl", "davenport-fl", "deltona-fl",
  "daytona-beach-fl", "palm-coast-fl", "melbourne-fl", "palm-bay-fl", "cocoa-fl",
];

const STATIC = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/cities", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.9 },
  { path: "/blog", priority: 0.6 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

const urls = [
  ...STATIC,
  ...SERVICES.map((s) => ({ path: `/${s}`, priority: 0.9 })),
  ...CITIES.map((c) => ({ path: `/cities/${c}`, priority: 0.8 })),
  ...SERVICES.flatMap((s) => CITIES.map((c) => ({ path: `/${s}/${c}`, priority: 0.8 }))),
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml);
console.log(`✔ Wrote public/sitemap.xml — ${urls.length} URLs`);
