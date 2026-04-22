import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="dark" /> Property Solutions</strong> answers all 5 of these questions before any new client signs. Use them in every vendor interview to separate real maintenance partners from one-person shops.</> },
  { type: "h2", text: "1. What's your insurance limit?" },
  { type: "p", text: "Looking for $1M general liability / $2M aggregate minimum. Get a COI before any work starts." },
  { type: "h2", text: "2. Are crews in-house or subbed?" },
  { type: "p", text: "Subbed crews reintroduce the vendor chaos you're trying to consolidate. Verify W-2 vs 1099." },
  { type: "h2", text: "3. What's your emergency response SLA in writing?" },
  { type: "p", text: "Need: 2-hour emergency, 24-hour standard, 5-day make-ready. Verbal commitments don't count." },
  { type: "h2", text: "4. Do you publish flat-rate pricing?" },
  { type: "p", text: "T&M-only pricing creates budget surprises. Flat rates for common scopes let you forecast." },
  { type: "h2", text: "5. Can I see 3 active multifamily references?" },
  { type: "p", text: "Single-family handyman experience doesn't translate. Want active (not historical) multifamily clients you can call." },
  { type: "h2", text: "Quick scoring" },
  { type: "table", headers: ["Question", "Pass", "Fail"], rows: [
    ["Insurance", "$1M+ COI", "'I have insurance'"],
    ["Crews", "In-house W-2", "All subbed"],
    ["SLA", "Written", "Verbal"],
    ["Pricing", "Flat-rate sheet", "T&M only"],
    ["References", "3 active multifamily", "Single-family"],
  ]},
  { type: "h2", text: "Interview FiveServ" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
