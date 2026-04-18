import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> gets asked this every week by new property managers and onsite teams: what exactly is a unit turn? Here is the full definition, the standard scope, and why the answer affects your operating budget.</> },
  { type: "h2", text: "Definition" },
  { type: "p", text: "A unit turn is the maintenance work performed between one resident's move-out and the next resident's move-in. It transforms a vacated unit back to lease-ready condition." },
  { type: "h2", text: "Standard scope of a turn" },
  { type: "ul", items: [
    "Trash-out and unit clearing",
    "Full deep clean (appliances, bathrooms, floors)",
    "Paint touch-up or full repaint",
    "Drywall and trim repair",
    "Plumbing inspection and minor repair",
    "Electrical inspection (outlets, GFCI, detectors)",
    "Appliance check (range, fridge, dishwasher, disposal)",
    "HVAC filter and condensate clear",
    "Final walk-through with photo documentation",
  ]},
  { type: "h2", text: "Standard timeline" },
  { type: "p", text: "5 business days for a 1–2 bedroom unit when one vendor coordinates trades. 10–14 days when painters, cleaners, and trades are stacked separately." },
  { type: "h2", text: "Standard pricing" },
  { type: "table", headers: ["Unit size", "2025 cost"], rows: [
    ["Studio / 1BR", "$850 – $1,200"],
    ["2BR", "$1,200 – $1,800"],
    ["3BR", "$1,600 – $2,400"],
  ]},
  { type: "h2", text: "What's NOT a turn" },
  { type: "p", text: "Heavy damage, smoke remediation, full flooring replacement, cabinet replacement, or any insurance work. These are CapEx scopes — quoted separately on a project timeline." },
  { type: "h2", text: "Where FiveServ fits" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
