import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> runs a real 24/7 line — live person, licensed trades on-call, 2-hour on-site response. Here's how to verify any vendor's 24/7 claim before you sign.</> },
  { type: "h2", text: "What 24/7 should mean" },
  { type: "ul", items: [
    "Live human answers within 3 rings — any hour, any day",
    "Licensed plumbing and electrical trades on-call",
    "2-hour on-site response for true emergencies",
    "Phone triage to confirm severity before dispatch",
    "Same SLA on Sundays and holidays as Tuesday at 2pm",
  ]},
  { type: "h2", text: "What it usually means" },
  { type: "ul", items: [
    "Voicemail box checked next business day",
    "Answering service that takes a message",
    "Emergency premium pricing 2x to 3x normal",
    "Trade not actually licensed — sub-of-sub",
  ]},
  { type: "h2", text: "How to test before signing" },
  { type: "p", text: "Call them at 11pm on a Saturday. If you get voicemail or a generic answering service, it's not real 24/7." },
  { type: "h2", text: "Is real 24/7 worth it?" },
  { type: "p", text: "Yes. After-hours emergency premiums from non-24/7 vendors typically eclipse the small base-rate increase of a true 24/7 partner." },
  { type: "h2", text: "Get a real 24/7 partner" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
