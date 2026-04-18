import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> consolidates all property work into one monthly invoice across Central Florida. Here's the math behind why one-invoice maintenance saves PMs real time and money.</> },
  { type: "h2", text: "The hidden admin cost" },
  { type: "p", text: "Every vendor invoice triggers AP processing, GL coding, approval routing, and month-end accrual. At a fully-loaded $75/hr admin cost, each invoice runs $12–$18 in processing." },
  { type: "h2", text: "Real-portfolio math" },
  { type: "table", headers: ["Metric", "Stacked vendors", "One invoice"], rows: [
    ["Vendors", "8–12", "1"],
    ["Invoices/month", "30–50", "1"],
    ["AP processing time", "8–12 hr", "1 hr"],
    ["GL coding errors", "3–5/month", "0–1/month"],
    ["Approval cycle", "5–10 days", "Same day"],
  ]},
  { type: "h2", text: "Beyond AP" },
  { type: "p", text: "One-invoice also means one point of contact for scheduling, one SLA, one accountability owner. The admin savings extend to onsite managers and regionals, not just the corporate AP team." },
  { type: "h2", text: "What 'one invoice' should still include" },
  { type: "ul", items: [
    "Line-item scope per project",
    "Photos of completed work",
    "Job number for each line",
    "Per-unit detail when applicable",
    "Net 30 (or Net 15 with discount)",
  ]},
  { type: "h2", text: "Common objections" },
  { type: "p", text: "'I lose pricing visibility.' False — flat rates are still flat rates. 'I lose vendor accountability.' False — accountability concentrates instead of diffusing across 8 vendors." },
  { type: "h2", text: "How to start" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
