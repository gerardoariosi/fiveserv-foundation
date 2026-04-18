import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> is a maintenance company, not a property management company. The two work together — here's the clear distinction.</> },
  { type: "h2", text: "Property management company" },
  { type: "p", text: "Handles leasing, marketing, accounting, resident relations, lease enforcement, and regulatory compliance. Acts as the owner's representative." },
  { type: "h2", text: "Maintenance company" },
  { type: "p", text: "Handles the physical work — make-ready, reactive maintenance, CapEx projects, preventive maintenance. Acts as a vendor to the PM company or directly to the owner." },
  { type: "h2", text: "Side-by-side" },
  { type: "table", headers: ["Function", "PM company", "Maintenance company"], rows: [
    ["Leasing", "Yes", "No"],
    ["Accounting", "Yes", "No"],
    ["Resident relations", "Yes", "No"],
    ["Make-ready", "Coordinates", "Performs"],
    ["Reactive repairs", "Coordinates", "Performs"],
    ["CapEx projects", "Approves", "Performs"],
  ]},
  { type: "h2", text: "Do you need both?" },
  { type: "p", text: "Most multifamily portfolios need both. A few smaller owners self-manage and contract maintenance directly." },
  { type: "h2", text: "Get the right partner" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
