import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> publishes flat-rate make-ready pricing across Central Florida so property managers can build accurate annual budgets. Here's the 2025 cost breakdown.</> },
  { type: "h2", text: "Standard turn pricing" },
  { type: "table", headers: ["Unit size", "Standard turn", "With repaint"], rows: [
    ["Studio / 1BR", "$850 – $1,200", "$1,250 – $1,800"],
    ["2BR", "$1,200 – $1,800", "$1,650 – $2,500"],
    ["3BR", "$1,600 – $2,400", "$2,100 – $3,300"],
  ]},
  { type: "h2", text: "Common add-ons" },
  { type: "ul", items: [
    "Carpet cleaning — $95 to $185 per unit",
    "LVP touch-up / board swap — $125 to $350",
    "Bathroom resurfacing — $295 to $495",
    "Smoke remediation — quoted as CapEx",
    "Cabinet refinish — $400 to $850",
  ]},
  { type: "h2", text: "What drives cost up" },
  { type: "ul", items: [
    "Heavy paint scope (smoke, dark walls)",
    "Extensive drywall damage",
    "Plumbing fixture replacement",
    "Coastal city zone surcharge ($25 to $75)",
  ]},
  { type: "h2", text: "What you should NOT pay extra for" },
  { type: "ul", items: [
    "Standard 5-day timeline",
    "Photo documentation",
    "Final QC walk-through",
    "Punch-list closure",
  ]},
  { type: "h2", text: "Get a quote" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
