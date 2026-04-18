import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> runs a 24/7 emergency line because after-hours property failures don't wait for business hours. Here's how to structure emergency response so it actually works.</> },
  { type: "h2", text: "What counts as a true emergency" },
  { type: "ul", items: [
    "Active water intrusion or supply-line break",
    "Electrical hazard (sparking, exposed wiring)",
    "No AC when ambient temp is over 85°F",
    "No heat when ambient temp is under 50°F",
    "Gas smell of any kind",
    "Sewage backup",
    "Lockout when no other access exists",
  ]},
  { type: "h2", text: "What is NOT an emergency" },
  { type: "p", text: "Slow drains, single non-functional appliance, cosmetic damage, single light fixture out, dishwasher not running. These are next-business-day work orders." },
  { type: "h2", text: "Triage flow" },
  { type: "ol", items: [
    "Resident calls or submits emergency ticket",
    "Live answer within 3 rings (real person, not voicemail)",
    "Phone triage — confirm category and severity",
    "Dispatch on-site within 2 hours for true emergency",
    "Stabilize on-site (shut off water, power, etc.)",
    "Schedule full repair for next business day if needed",
  ]},
  { type: "h2", text: "Vendor SLA structure" },
  { type: "table", headers: ["Tier", "Response", "Examples"], rows: [
    ["Emergency", "2 hr on-site", "Active leak, no AC over 85°F"],
    ["Urgent", "24 hr", "Refrigerator not cooling"],
    ["Standard", "3 business days", "Drywall repair, faucet drip"],
    ["Cosmetic", "Next make-ready", "Paint scuff, baseboard"],
  ]},
  { type: "h2", text: "Resident communication script" },
  { type: "p", text: "Acknowledge within 15 minutes. Confirm dispatch ETA. Send tech name and photo on the way. Follow up within 24 hours of resolution." },
  { type: "h2", text: "Get a 24/7 partner" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
