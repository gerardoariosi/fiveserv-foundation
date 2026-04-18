import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> uses 'unit turn' and 'make-ready' interchangeably across all Central Florida service. The terms mean the same thing — but here's the nuance.</> },
  { type: "h2", text: "Same scope, different word" },
  { type: "p", text: "Both terms refer to the maintenance work between one resident's move-out and the next resident's move-in. Trash-out, clean, paint, drywall, plumbing/electrical inspection, appliance check, final QC." },
  { type: "h2", text: "How operators use the terms" },
  { type: "ul", items: [
    "Some PMs use 'turn' for the whole project and 'make-ready' for final QC",
    "Some accounting systems require one specific term in the GL",
    "Vendors typically follow whatever term the client uses",
  ]},
  { type: "h2", text: <>Does <BrandName variant="dark" /> care?</> },
  { type: "p", text: "No. We follow your team's terminology. What matters is the scope sheet, not the vocabulary." },
  { type: "h2", text: "Related" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
