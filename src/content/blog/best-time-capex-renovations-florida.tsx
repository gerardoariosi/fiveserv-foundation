import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> schedules CapEx renovations during the low-leasing window across Central Florida. Here's the full seasonal breakdown of when to do what.</> },
  { type: "h2", text: "Best window — October through February" },
  { type: "p", text: "Lowest leasing demand in Central Florida. Vacancy days hurt NOI least during this window. Schedule unit-by-unit CapEx here whenever possible." },
  { type: "h2", text: "Worst window — May through September" },
  { type: "p", text: "Peak leasing season + hurricane risk for exterior work. Reserve summer for emergency-only CapEx." },
  { type: "h2", text: "Seasonal CapEx by project type" },
  { type: "table", headers: ["Project", "Best window", "Why"], rows: [
    ["Full unit renovation", "Oct – Feb", "Low leasing demand"],
    ["Roof replacement", "Mar – May", "Dry season before hurricane"],
    ["Parking lot resurface", "Mar – May", "No rain, dry asphalt"],
    ["Exterior paint", "Oct – Apr", "Lower humidity"],
    ["HVAC unit replacement", "Oct – Mar", "Demand off-peak, lead time"],
    ["Pool resurfacing", "Oct – Feb", "Pool closed for winter"],
  ]},
  { type: "h2", text: "Hurricane season exception" },
  { type: "p", text: "June through November carries weather risk for any exterior CapEx. Interior work is fine; just plan around named-storm watches." },
  { type: "h2", text: "Plan your CapEx calendar" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
