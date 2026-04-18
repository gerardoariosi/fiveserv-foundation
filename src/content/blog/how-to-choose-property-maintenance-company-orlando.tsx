import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> is one of dozens of property maintenance companies in Orlando. Here are the 7 criteria you should use to evaluate any vendor — including us — before signing.</> },
  { type: "h2", text: "1. Insurance limits" },
  { type: "p", text: "$1M general liability / $2M aggregate is the multifamily standard. Anything lower exposes you to claim risk." },
  { type: "h2", text: "2. In-house crews vs subbed work" },
  { type: "p", text: "Vendors that sub everything reintroduce the chaos you're trying to consolidate. Verify which trades are W-2 vs subbed." },
  { type: "h2", text: "3. Florida-licensed plumbing and electrical" },
  { type: "p", text: "Florida licensing is enforced. Verify license numbers on the DBPR site, not just business cards." },
  { type: "h2", text: "4. 24/7 SLA in writing" },
  { type: "p", text: "Standard: 2-hour emergency response, 24-hour standard response, 5-day make-ready guarantee." },
  { type: "h2", text: "5. Flat-rate pricing" },
  { type: "p", text: "Hourly-only vendors create budget surprises. Flat-rate scopes for common work let you forecast accurately." },
  { type: "h2", text: "6. Multifamily references" },
  { type: "p", text: "Single-family handyman work doesn't translate to multifamily ops. Ask for 3 active multifamily clients." },
  { type: "h2", text: "7. One-invoice billing" },
  { type: "p", text: "All work for the month or project on one consolidated invoice. Cuts AP processing 60%." },
  { type: "h2", text: "Quick scorecard" },
  { type: "table", headers: ["Criterion", "Pass", "Fail"], rows: [
    ["Insurance", "$1M+", "Below $1M"],
    ["Crew model", "In-house", "All subbed"],
    ["Licensing", "Verified on DBPR", "'Trust us'"],
    ["SLA", "Written", "Verbal"],
    ["Pricing", "Flat-rate published", "Time + materials only"],
    ["References", "3+ multifamily", "Single-family only"],
    ["Billing", "One invoice", "Per-trade invoices"],
  ]},
  { type: "h2", text: "Next step" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
