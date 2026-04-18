import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> has worked with multifamily operators in Central Florida for years, and the vendors that survive PM turnover and portfolio growth all share the same 5 traits. Here's how to build that kind of relationship.</> },
  { type: "h2", text: "1. Pay on time" },
  { type: "p", text: "Net 15 buys priority response. Net 30 is standard. Beyond Net 45, expect to drop to the back of the queue every time." },
  { type: "h2", text: "2. Communicate in writing" },
  { type: "p", text: "Verbal scope changes get forgotten. Email or work-order system every change so both sides have a record." },
  { type: "h2", text: "3. Build relationship with the owner, not just the rep" },
  { type: "p", text: "When the rep leaves, the relationship doesn't have to. Know the vendor's owner directly." },
  { type: "h2", text: "4. Set clear SLAs and review quarterly" },
  { type: "p", text: "2-hour emergency, 24-hour standard, 5-day turn. Review SLA performance every quarter." },
  { type: "h2", text: "5. Re-bid every 18 months — but tell them" },
  { type: "p", text: "Periodic re-bid keeps pricing honest. Surprise re-bids damage trust." },
  { type: "h2", text: "Quick reference" },
  { type: "table", headers: ["Practice", "Why it works"], rows: [
    ["Net 15 payment", "Buys priority"],
    ["Written scope", "Eliminates disputes"],
    ["Owner contact", "Survives turnover"],
    ["Quarterly SLA review", "Prevents drift"],
    ["Scheduled re-bid", "Keeps pricing honest"],
  ]},
  { type: "h2", text: "Get started with FiveServ" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
