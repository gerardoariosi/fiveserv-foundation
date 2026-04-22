import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="dark" /> Property Solutions</strong> turns 300+ units a year, and the math on vacancy cost is the single best argument for a fast make-ready. Here's the full daily cost of a vacant unit in Central Florida.</> },
  { type: "h2", text: "Daily cost components" },
  { type: "table", headers: ["Component", "Per day"], rows: [
    ["Lost rent (1BR avg)", "$55"],
    ["Lost rent (2BR avg)", "$72"],
    ["Lost rent (3BR avg)", "$95"],
    ["Utilities (vacant unit)", "$5–$10"],
    ["Marketing amortized", "$3–$5"],
  ]},
  { type: "h2", text: "Total daily cost by unit type" },
  { type: "ul", items: [
    "1BR — $63 to $70 per day",
    "2BR — $80 to $87 per day",
    "3BR — $103 to $110 per day",
  ]},
  { type: "h2", text: "What a 7-day faster turn saves" },
  { type: "p", text: "Cutting turn time from 12 days to 5 days saves 7 vacancy days per turn:" },
  { type: "ul", items: [
    "1BR — $441 to $490 saved per turn",
    "2BR — $560 to $609 saved per turn",
    "3BR — $721 to $770 saved per turn",
  ]},
  { type: "h2", text: "Annual portfolio impact" },
  { type: "p", text: "A 200-unit community with 35% annual turnover (70 turns/year) saves roughly $30,000 to $54,000 per year by cutting 7 vacancy days off every turn. That's pure NOI." },
  { type: "h2", text: "Why most operators leave this on the table" },
  { type: "p", text: "Vendor coordination. Stacked-vendor turns sit idle 4–7 days between trades. Consolidating to one make-ready vendor solves it." },
  { type: "h2", text: "Recover those days" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
