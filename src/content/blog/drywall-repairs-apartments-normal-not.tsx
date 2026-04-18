import { renderBlocks, InternalLinkCluster, type Block } from "./_blocks";

const blocks: Block[] = [
  { type: "p", text: <><strong>FiveServ Property Solutions</strong> repairs drywall on every Central Florida make-ready. Knowing what's normal wear vs. damage that needs root-cause investigation protects both your turn budget and security-deposit defensibility.</> },
  { type: "h2", text: "Normal wear" },
  { type: "ul", items: [
    "Nail pops from settling (a few per unit)",
    "Small holes from picture hangers",
    "Minor scuff marks at door handles",
    "Hairline cracks at door corners",
    "Light scratches from furniture",
  ]},
  { type: "h2", text: "Damage beyond normal wear" },
  { type: "ul", items: [
    "Holes larger than a quarter",
    "Multiple wall punctures",
    "Drywall removed for unauthorized installs",
    "Heavy graffiti or marker that bleeds through paint",
    "Pet damage at corners",
  ]},
  { type: "h2", text: "Not normal — root cause needed" },
  { type: "ul", items: [
    "Water staining (active or historical leak above)",
    "Mold-related discoloration",
    "Horizontal cracks across multiple walls (structural)",
    "Bubbling paint (moisture)",
    "Cracks at the same height through multiple rooms",
  ]},
  { type: "h2", text: "Repair vs replace" },
  { type: "table", headers: ["Damage", "Treatment"], rows: [
    ["Nail pop", "Patch + paint"],
    ["Hole < 1 inch", "Patch + sand + paint"],
    ["Hole 1–6 inches", "Mesh + mud + paint"],
    ["Hole > 6 inches", "Drywall section + tape + mud + paint"],
    ["Water-damaged section", "Find source first, then replace"],
  ]},
  { type: "h2", text: "Security deposit defensibility" },
  { type: "p", text: "Photo every wall before move-in and at move-out. Florida statute lets you deduct repair cost beyond reasonable wear from the deposit, but requires written itemization within 30 days." },
  { type: "h2", text: "Get drywall handled correctly" },
  { type: "p", text: <><InternalLinkCluster /></> },
];

const Body = () => renderBlocks(blocks);
export default Body;
