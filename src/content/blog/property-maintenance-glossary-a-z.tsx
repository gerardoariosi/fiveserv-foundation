import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="dark" /> Property Solutions</strong> publishes this glossary as a free reference for Central Florida property managers and onsite teams. Copy it, share it, use it in onboarding.</> },
  { type: "h2", text: "A – C" },
  { type: "ul", items: [
    <><strong>AOA</strong> — Annual Operating Agreement. Vendor contract covering 12 months of recurring scope.</>,
    <><strong>CapEx</strong> — Capital Expense. Investment that extends asset life or increases value.</>,
    <><strong>COI</strong> — Certificate of Insurance. Required from every vendor.</>,
    <><strong>Concession</strong> — Rent discount used to lease faster. Hurts NOI.</>,
  ]},
  { type: "h2", text: "D – L" },
  { type: "ul", items: [
    <><strong>Drywall</strong> — Interior wall material (gypsum). Repaired during every turn.</>,
    <><strong>GFCI</strong> — Ground Fault Circuit Interrupter. Required outlet near water sources.</>,
    <><strong>HVAC</strong> — Heating, Ventilation, Air Conditioning system.</>,
    <><strong>LVP</strong> — Luxury Vinyl Plank flooring. Standard in modern multifamily.</>,
  ]},
  { type: "h2", text: "M – P" },
  { type: "ul", items: [
    <><strong>Make-ready</strong> — Maintenance work between move-out and move-in.</>,
    <><strong>NOI</strong> — Net Operating Income. Revenue minus operating expense.</>,
    <><strong>OpEx</strong> — Operating Expense. Recurring cost expensed in current year.</>,
    <><strong>PM</strong> — Property Manager (or Preventive Maintenance, by context).</>,
    <><strong>Punch list</strong> — Final checklist of remaining items before turn closure.</>,
  ]},
  { type: "h2", text: "Q – Z" },
  { type: "ul", items: [
    <><strong>QC</strong> — Quality Control walk-through.</>,
    <><strong>SLA</strong> — Service Level Agreement. Vendor response commitment.</>,
    <><strong>Trip charge</strong> — Flat fee for vendor visit, often waived if work exceeds 2 hr.</>,
    <><strong>Turn</strong> — See make-ready.</>,
    <><strong>Walk-through</strong> — Inspection between trades or at project close.</>,
    <><strong>Work order</strong> — Resident-submitted maintenance request.</>,
  ]},
  { type: "h2", text: "Need a maintenance partner?" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
