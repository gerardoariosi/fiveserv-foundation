import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> runs a 24/7 emergency plumbing line for Central Florida multifamily. Here's the step-by-step response playbook every onsite team should know cold.</> },
  { type: "h2", text: "Step 1 — Identify and shut off" },
  { type: "ul", items: [
    "Unit-level shutoff: under each sink, behind toilet, at water heater",
    "Building shutoff: near meter or in mechanical closet",
    "Property-level shutoff: at the meter (last resort, affects all units)",
  ]},
  { type: "h2", text: "Step 2 — Notify residents" },
  { type: "p", text: "If shutoff affects more than one unit, send notification within 15 minutes. Estimated restoration time, alternative water source, point of contact." },
  { type: "h2", text: "Step 3 — Call licensed plumber" },
  { type: "p", text: "2-hour on-site SLA standard. Provide unit number, leak source if known, and access status." },
  { type: "h2", text: "Step 4 — Document" },
  { type: "p", text: "Photos before, during, and after. Time-stamped. Filed against the unit and the work order." },
  { type: "h2", text: "Step 5 — Restore and follow up" },
  { type: "p", text: "Confirm restoration with all affected residents. Schedule moisture-meter check if water intrusion was prolonged." },
  { type: "h2", text: "Common emergencies and response" },
  { type: "table", headers: ["Issue", "First action", "Second action"], rows: [
    ["Burst supply line", "Shut off unit valve", "Call plumber"],
    ["Sewer backup", "Restrict water use", "Call licensed plumber"],
    ["Water heater leak", "Shut off cold supply", "Drain and replace"],
    ["No water (whole building)", "Check meter / city alerts", "Contact city if not vendor"],
  ]},
  { type: "h2", text: "Get a 24/7 partner" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
