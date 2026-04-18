import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> services HVAC across Central Florida apartment communities. Florida humidity and dust load demand a more aggressive PM schedule than national averages — here's the full playbook.</> },
  { type: "h2", text: "Florida-specific HVAC realities" },
  { type: "p", text: "Year-round cooling load, high humidity, salt air on the coast, and pollen seasons mean filters, coils, and condensate lines need more frequent attention than northern climates." },
  { type: "h2", text: "Recommended schedule" },
  { type: "table", headers: ["Frequency", "Task"], rows: [
    ["Monthly", "Filter replacement"],
    ["Quarterly", "Condensate line clear and treat"],
    ["Semi-annual", "Coil clean (indoor + outdoor)"],
    ["Annual", "Full inspection + refrigerant check"],
    ["Annual", "Heat-cycle test (catches dead heat strips)"],
  ]},
  { type: "h2", text: "Emergency thresholds" },
  { type: "ul", items: [
    "No cooling, ambient temp over 85°F → 2-hour response",
    "No heat, ambient under 50°F → 2-hour response",
    "Refrigerant leak detected → urgent same-day",
    "Compressor failure → 24-hour replacement quote",
  ]},
  { type: "h2", text: "Cost benchmarks" },
  { type: "ul", items: [
    "Filter replacement — $8–$15 per unit + labor",
    "Quarterly condensate clear — $35–$55 per unit",
    "Coil clean — $125–$185 per unit",
    "Full annual service — $185–$285 per unit",
    "Compressor replacement — $1,400–$2,400 per unit",
  ]},
  { type: "h2", text: "What kills HVAC fast in Florida" },
  { type: "p", text: "Skipped filter changes. Clogged condensate lines. Salt corrosion on coastal units. Running undersized systems on max-cool 24/7." },
  { type: "h2", text: "Get a PM contract" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
