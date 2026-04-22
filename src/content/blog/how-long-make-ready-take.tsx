import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="dark" /> Property Solutions</strong> guarantees a 5-business-day make-ready on standard scope across Central Florida. The honest answer to 'how long should it take' depends on vendor coordination, not unit complexity.</> },
  { type: "h2", text: "Best case — 5 business days" },
  { type: "p", text: "1–2BR standard turn, one vendor coordinates trades, no surprise damage. Painter, cleaner, plumber/electrician scheduled back-to-back. Final QC on day 5." },
  { type: "h2", text: "Stacked-vendor reality — 10 to 14 days" },
  { type: "p", text: "Painter booked separately, cleaner booked separately, licensed trades scheduled when available. Idle days between trades. PM walk-through 'when I have time.'" },
  { type: "h2", text: "Heavy damage — 7 to 21 days" },
  { type: "p", text: "Smoke remediation, full flooring replacement, cabinet replacement, insurance claim work. Out of make-ready scope, into CapEx timeline." },
  { type: "h2", text: "Realistic timeline" },
  { type: "table", headers: ["Scenario", "Days"], rows: [
    ["Single-vendor 5-day program", "5 business days"],
    ["Stacked vendors, normal scope", "10–14 days"],
    ["Heavy damage / CapEx scope", "14–21+ days"],
  ]},
  { type: "h2", text: "Get to 5 days" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
