import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> provides both unit cleaning and full make-ready service across Central Florida. The two are not the same — here's the clear difference.</> },
  { type: "h2", text: "Cleaning" },
  { type: "p", text: "A deep clean covers appliances, bathrooms, floors, baseboards, vents, blinds. It's one step. Cost: $185–$325 per 1–2BR unit." },
  { type: "h2", text: "Make-ready" },
  { type: "p", text: "A make-ready includes cleaning plus paint, drywall, plumbing/electrical inspection, appliance check, HVAC filter, and final QC walk. Cost: $850–$1,800 per 1–2BR unit." },
  { type: "h2", text: "When cleaning alone is appropriate" },
  { type: "p", text: "Short turns (under 30 days), no damage, no paint required, no fixture issues. Rare." },
  { type: "h2", text: "When you need a full make-ready" },
  { type: "p", text: "Standard tenant turnover. The cleaning is included; you also need everything else inspected and prepared for the next resident." },
  { type: "h2", text: "Get the right scope" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
