import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import { Link } from "react-router-dom";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="dark" /> Property Solutions</strong> is headquartered in Orlando and runs make-ready service across the entire Central Florida region from here. Here's exactly what to expect when you book a turn in Orlando.</> },
  { type: "h2", text: "Service area within Orlando" },
  { type: "ul", items: [
    "Downtown",
    "Lake Nona",
    "MetroWest",
    "Dr. Phillips",
    "Baldwin Park",
    "College Park",
    "All 32801–32839 ZIP codes",
  ]},
  { type: "h2", text: "Timeline" },
  { type: "p", text: "Same-day on-site response for urgent items. 24-hour quote turnaround for make-readies. 5-business-day standard turn from project start." },
  { type: "h2", text: "Pricing" },
  { type: "ul", items: [
    "1BR standard turn — $850 to $1,200",
    "2BR standard turn — $1,200 to $1,800",
    "3BR standard turn — $1,600 to $2,400",
    "No Orlando zone surcharge",
  ]},
  { type: "h2", text: "What's included" },
  { type: "p", text: "Trash-out, deep clean, paint touch-up or repaint, drywall and trim repair, plumbing and electrical inspection, appliance check, HVAC filter, final walk-through with photo log." },
  { type: "h2", text: "Why Orlando is our home market" },
  { type: "p", text: <><BrandName variant="dark" /> was founded in Orlando and runs the broader Central Florida operation from here. See the dedicated <Link to="/maintenance-orlando-fl" className="text-gray-900 underline">Orlando service page</Link> for full coverage detail.</> },
  { type: "h2", text: "Book a turn" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
