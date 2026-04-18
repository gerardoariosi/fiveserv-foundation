import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> audits Central Florida communities every month, and the warning signs of a maintenance program in distress are remarkably consistent. If 2+ of these apply to your community, it's time for an overhaul.</> },
  { type: "h2", text: "1. Work-order backlog over 7 days" },
  { type: "p", text: "Standard non-emergency work orders should close within 3 business days. A backlog over 7 days means your routing, vendor capacity, or both are broken." },
  { type: "h2", text: "2. Make-ready time over 10 days" },
  { type: "p", text: "If turns regularly take 10–14 days, you're losing $440–$770 per turn in vacancy cost. The fix is vendor consolidation, not more vendors." },
  { type: "h2", text: "3. 8 or more active vendors" },
  { type: "p", text: "Vendor sprawl is the silent killer of maintenance margin. 8+ vendors means 30+ invoices/month, multiple SLAs, and missed handoffs." },
  { type: "h2", text: "4. Resident satisfaction declining" },
  { type: "p", text: "Survey scores and Google reviews mentioning slow maintenance response are leading indicators. Don't wait for occupancy to drop." },
  { type: "h2", text: "5. CapEx is reactive instead of planned" },
  { type: "p", text: "If you're emergency-funding flooring or HVAC replacements, your preventive maintenance program isn't surfacing issues early enough." },
  { type: "h2", text: "Overhaul timeline" },
  { type: "table", headers: ["Phase", "Days", "Outcome"], rows: [
    ["Audit", "1–14", "Vendor + invoice + work-order analysis"],
    ["Consolidate", "15–60", "Route new work to 2–3 generalist vendors"],
    ["Optimize", "61–90", "PM contracts, SLAs, reporting in place"],
    ["Steady state", "90+", "Lower cost, faster response, planned CapEx"],
  ]},
  { type: "h2", text: "Where to start" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
