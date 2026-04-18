import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> backs every Central Florida make-ready with a written 5-business-day guarantee. Here's exactly what that means and why most vendors won't offer one.</> },
  { type: "h2", text: "What the guarantee covers" },
  { type: "p", text: "Standard make-ready scope (clean, paint, drywall, plumbing/electrical inspection, appliance check, HVAC filter, final QC) on a 1–2BR unit completed in 5 business days from project start." },
  { type: "h2", text: "What the guarantee does NOT cover" },
  { type: "ul", items: [
    "Heavy damage (smoke, hoarder trash-out)",
    "Full flooring or cabinet replacement",
    "Insurance claim work",
    "Delays caused by access issues outside vendor control",
  ]},
  { type: "h2", text: "What happens if the vendor misses the deadline" },
  { type: "p", text: "FiveServ pays a daily lost-rent credit per the written agreement. Real number, calculated from your actual rent rate." },
  { type: "h2", text: "Why most vendors won't offer this" },
  { type: "ul", items: [
    "Stacked-vendor turns can't hit 5 days reliably",
    "No accountability when 8 separate vendors share the project",
    "Margin doesn't support a credit clause",
  ]},
  { type: "h2", text: "Why FiveServ can" },
  { type: "p", text: "In-house painters and cleaners, named project manager per turn, licensed plumbing/electrical on-call, and one accountable team. The 5-day timeline is the operational backbone — not a marketing line." },
  { type: "h2", text: "See the guarantee" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
