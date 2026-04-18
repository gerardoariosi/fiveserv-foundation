import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";
import BrandName from "@/components/fiveserv/BrandName";

const blocks: Block[] = [
  { type: "p", text: <><strong><BrandName variant="light" /> Property Solutions</strong> runs this 40-item make-ready checklist on every Central Florida unit turn. Free for property managers — copy it, adapt it, and standardize inspections across your portfolio.</> },
  { type: "h2", text: "Cleaning (5 items)" },
  { type: "ol", items: [
    "Kitchen appliances inside and out",
    "All bathroom surfaces and fixtures",
    "Baseboards, vents, blinds, and ceiling fans",
    "Inside cabinets and drawers",
    "Floors — vacuum, mop, or steam-clean as appropriate",
  ]},
  { type: "h2", text: "Paint and walls (5 items)" },
  { type: "ol", items: [
    "Paint touch-up or full repaint per scope",
    "Nail-pop repair throughout",
    "Drywall patches sanded smooth and primed",
    "Caulk replaced at tubs, sinks, and trim",
    "Trim and door frames inspected and touched up",
  ]},
  { type: "h2", text: "Plumbing (5 items)" },
  { type: "ol", items: [
    "All faucets — flow and leak test",
    "Toilet flappers and fill valves",
    "P-traps and supply lines under all sinks",
    "Water heater inspection and temperature check",
    "Disposal and dishwasher drain check",
  ]},
  { type: "h2", text: "Electrical (5 items)" },
  { type: "ol", items: [
    "All outlets tested with a tester",
    "GFCI outlets reset and tested",
    "Smoke detectors — test and replace battery",
    "CO detectors — test and replace battery",
    "All light fixtures and switches confirmed working",
  ]},
  { type: "h2", text: "Appliances (5 items)" },
  { type: "ol", items: [
    "Refrigerator — temperature, ice maker, water line",
    "Range and oven — burners, igniter, oven temp",
    "Dishwasher — full cycle test",
    "Microwave — heat test",
    "Garbage disposal — flow and noise check",
  ]},
  { type: "h2", text: "HVAC (5 items)" },
  { type: "ol", items: [
    "Filter replaced",
    "Condensate line cleared",
    "Thermostat function and battery check",
    "Vents inspected and cleaned",
    "Cool-cycle and heat-cycle test",
  ]},
  { type: "h2", text: "Doors, windows, locks (5 items)" },
  { type: "ol", items: [
    "All doors open, close, latch, and lock",
    "Deadbolts and locks rekeyed",
    "Window operation and locks tested",
    "Screens inspected and repaired",
    "Weatherstripping checked at exterior doors",
  ]},
  { type: "h2", text: "Final QC (5 items)" },
  { type: "ol", items: [
    "Walk-through with PM or onsite manager",
    "Photo documentation of every room",
    "Punch list signed and closed",
    "Keys returned and inventory confirmed",
    "Move-in inspection sheet attached to file",
  ]},
  { type: "h2", text: "Use this checklist on every turn" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
