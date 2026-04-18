import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> services HVAC year-round across Central Florida. The terminology trips up new property managers — here's the clear difference.</> },
  { type: "h2", text: "HVAC — Heating, Ventilation, Air Conditioning" },
  { type: "p", text: "A complete climate-control system. Includes a heat source (heat pump, heat strips, furnace), cooling (compressor, condenser, evaporator coil), and ventilation/air handler." },
  { type: "h2", text: "AC — Air Conditioning only" },
  { type: "p", text: "Cooling only. No heating component. Less common in modern multifamily — most Florida apartments have full HVAC even though heat is rarely used." },
  { type: "h2", text: "What Florida apartments actually have" },
  { type: "p", text: "Most modern Central Florida apartments have heat-pump HVAC systems — one outdoor unit handles both cooling and heating by reversing direction." },
  { type: "h2", text: "Why service heat in Florida" },
  { type: "ul", items: [
    "Heat strips fail silently — you find out the one cold week per year",
    "Reversing valve in heat pumps can fail in either mode",
    "Annual heat-cycle test is cheap and catches both",
  ]},
  { type: "h2", text: "Maintenance schedule (same for both)" },
  { type: "ul", items: [
    "Monthly filter replacement",
    "Quarterly condensate clear",
    "Semi-annual coil clean",
    "Annual full inspection + heat-cycle test",
  ]},
  { type: "h2", text: "Get HVAC service" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
