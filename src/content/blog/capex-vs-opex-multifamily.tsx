import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> handles both CapEx and OpEx work for Central Florida multifamily portfolios, but the two are budgeted, accounted for, and quoted differently. Here's the complete breakdown.</> },
  { type: "h2", text: "OpEx — operating expense" },
  { type: "p", text: "Recurring expenses required to keep the property running. Expensed in the year incurred. Reduces NOI dollar-for-dollar." },
  { type: "ul", items: [
    "Make-ready / unit turns",
    "Reactive maintenance",
    "Cleaning and landscaping",
    "Pest control",
    "HVAC filters and PM",
    "Common-area repairs",
  ]},
  { type: "h2", text: "CapEx — capital expense" },
  { type: "p", text: "Investments that extend useful life or increase property value. Capitalized and depreciated over the asset's useful life. Doesn't reduce current-year NOI as heavily." },
  { type: "ul", items: [
    "Roof replacement",
    "Full-unit flooring replacement",
    "Cabinet and countertop replacement",
    "HVAC unit replacement (not repair)",
    "Parking lot repaving",
    "Major exterior paint",
  ]},
  { type: "h2", text: "Useful-life amortization" },
  { type: "table", headers: ["Asset", "Useful life"], rows: [
    ["Cabinets", "7 years"],
    ["Flooring (LVP / carpet)", "10 years"],
    ["Appliances", "10–12 years"],
    ["HVAC units", "15 years"],
    ["Roof", "20–25 years"],
    ["Parking lot resurfacing", "15–20 years"],
  ]},
  { type: "h2", text: "Why mis-classification hurts" },
  { type: "p", text: "Booking CapEx as OpEx understates NOI and inflates expense ratios. Booking OpEx as CapEx overstates NOI and creates audit risk. Get this right before year-end close." },
  { type: "h2", text: "Quoting CapEx vs OpEx" },
  { type: "p", text: "OpEx typically gets a flat-rate quote with quick turnaround. CapEx gets a project quote with scope, timeline, milestone payments, and warranty terms." },
  { type: "h2", text: <>Where <BrandName variant="dark" /> fits</> },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
