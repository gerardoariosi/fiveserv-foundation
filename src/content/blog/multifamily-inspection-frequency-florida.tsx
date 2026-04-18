import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> runs scheduled inspection programs across Central Florida multifamily. Here's the standard frequency for each inspection type.</> },
  { type: "h2", text: "Inspection schedule" },
  { type: "table", headers: ["Inspection", "Frequency", "Owner"], rows: [
    ["Common areas", "Monthly", "Onsite manager"],
    ["Unit interior", "Semi-annual", "Vendor + onsite"],
    ["Roof (visual)", "Semi-annual", "Vendor"],
    ["Roof (detailed)", "Annual", "Roofer"],
    ["Exterior", "Annual", "Vendor"],
    ["HVAC", "Quarterly + annual", "HVAC vendor"],
    ["Plumbing", "Annual", "Plumber"],
  ]},
  { type: "h2", text: "Why semi-annual interior" },
  { type: "p", text: "Catches small issues (slow leaks, slow electrical issues, HVAC underperformance) before they become emergency calls. Cost: $45–$75 per unit including photo doc." },
  { type: "h2", text: "Compliance and lender requirements" },
  { type: "p", text: "Many lenders require annual unit inspections and documentation. Insurance carriers may require roof and exterior inspection cadence. Confirm your loan covenants." },
  { type: "h2", text: "How residents react" },
  { type: "p", text: "Provide 24-hour notice per Florida statute. Most residents prefer scheduled inspections over surprise emergency repairs." },
  { type: "h2", text: "Book inspections" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
