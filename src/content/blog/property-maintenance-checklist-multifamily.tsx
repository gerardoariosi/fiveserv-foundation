import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> runs preventive maintenance contracts across Central Florida multifamily communities. Here's the full quarterly and annual checklist every property should run.</> },
  { type: "h2", text: "Monthly items" },
  { type: "ul", items: [
    "HVAC filter replacement (all units + common areas)",
    "Smoke and CO detector battery check",
    "Common-area light bulbs",
    "Pool chemicals and equipment (if applicable)",
    "Pest control rotation",
  ]},
  { type: "h2", text: "Quarterly items" },
  { type: "ul", items: [
    "Irrigation system inspection",
    "Common-area deep clean",
    "Trash compactor / dumpster maintenance",
    "Stairwell and breezeway inspection",
    "Fire extinguisher checks",
  ]},
  { type: "h2", text: "Semi-annual items" },
  { type: "ul", items: [
    "Unit-by-unit interior inspection",
    "HVAC coil clean",
    "Roof inspection (visual)",
    "Building exterior wash (if applicable)",
  ]},
  { type: "h2", text: "Annual items" },
  { type: "ul", items: [
    "Full HVAC service",
    "Roof inspection (detailed)",
    "Exterior paint touch-up",
    "Parking lot striping and repair",
    "Backflow preventer test",
  ]},
  { type: "h2", text: "Schedule template" },
  { type: "table", headers: ["Frequency", "Owner", "Notes"], rows: [
    ["Monthly", "Onsite tech", "Logged in software"],
    ["Quarterly", "Vendor + manager", "Photo doc"],
    ["Semi-annual", "Vendor", "Report to PM"],
    ["Annual", "Specialty vendor", "Capitalize if CapEx"],
  ]},
  { type: "h2", text: "Run this checklist with one vendor" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
