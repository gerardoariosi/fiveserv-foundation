import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> integrates with the major multifamily PMS platforms. Here's the field set, SLA tier, and routing logic an effective maintenance request system requires.</> },
  { type: "h2", text: "Required fields" },
  { type: "ul", items: [
    "Unit number / building",
    "Resident name and contact",
    "Permission to enter (yes/no/conditional)",
    "Pet info (for tech safety)",
    "Issue category (HVAC, plumbing, electrical, appliance, etc.)",
    "Severity tier",
    "Photo upload (resident)",
    "Description (free-text)",
  ]},
  { type: "h2", text: "Severity tiers" },
  { type: "table", headers: ["Tier", "SLA", "Routing"], rows: [
    ["Emergency", "2 hr on-site", "On-call vendor"],
    ["Urgent", "24 hr", "Next-day dispatch"],
    ["Standard", "3 business days", "Weekly route"],
    ["Cosmetic", "Next make-ready", "Bundle with turn"],
  ]},
  { type: "h2", text: "Routing logic" },
  { type: "p", text: "Severity + category determines vendor. Emergency + plumbing routes to licensed plumber on-call. Cosmetic + paint routes to next make-ready bundle. Software handles this; manual systems break under volume." },
  { type: "h2", text: "Integration with PMS" },
  { type: "p", text: <><BrandName variant="dark" /> accepts work orders from AppFolio, Yardi, Entrata, and ResMan via direct integration or shared work-order email. No double-entry.</> },
  { type: "h2", text: "Reporting that matters" },
  { type: "ul", items: [
    "Average response time by tier",
    "% closed within SLA",
    "Resident satisfaction post-close",
    "Vendor scorecard quarterly",
  ]},
  { type: "h2", text: "Set up the right system" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
