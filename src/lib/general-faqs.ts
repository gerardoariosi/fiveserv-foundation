import { SITE } from "./site-config";

export type FaqCategory = "make-ready" | "maintenance" | "capex" | "getting-started" | "services" | "residential";

export type GeneralFaq = { q: string; a: string; category: FaqCategory };

export const FAQ_CATEGORIES: { id: FaqCategory; label: string }[] = [
  { id: "make-ready", label: "Make-Ready" },
  { id: "maintenance", label: "Maintenance" },
  { id: "services", label: "Services" },
  { id: "residential", label: "Residential" },
  { id: "capex", label: "CapEx" },
  { id: "getting-started", label: "Getting Started" },
];

export const GENERAL_FAQS: GeneralFaq[] = [
  // MAKE-READY (8)
  {
    category: "make-ready",
    q: "What is a make-ready and what does it include?",
    a: "A make-ready is everything that needs to happen in a vacant unit before a new tenant moves in. Painting, deep cleaning, drywall repairs, minor fixes, rekeying, and a full photo report. At FiveServ we handle all of it with one call. No coordinating painters one day, cleaners the next, and repair crews a week later. We come in, we handle everything, and we hand you back a rent-ready unit. For standard units in good condition we target 5 business days. Larger properties or units with extensive damage may take longer and we will always be upfront about that timeline from the start.",
  },
  {
    category: "make-ready",
    q: "How long does a make-ready take in Central Florida?",
    a: "Most property managers in Orlando and Central Florida deal with 10 to 14 days of vacancy when they are juggling multiple vendors. For standard units in average condition FiveServ targets 5 business days. If a unit has extensive damage, major flooring issues, or is unusually large we will give you an honest timeline at the assessment before work begins. Every vacant day costs you money and we move as fast as the property allows.",
  },
  {
    category: "make-ready",
    q: "How much does a make-ready cost in Central Florida?",
    a: "Most make-readies in Central Florida run between 1,500 and 4,000 dollars depending on the unit condition, square footage, and what needs to be done. A light turn with paint touch-up, clean, and minor repairs lands closer to 1,500. A unit that needs full repaint, drywall work, flooring, and deep cleaning runs higher. FiveServ gives you a free line-item quote within 24 hours so you know exactly what you are paying before we touch anything.",
  },
  {
    category: "make-ready",
    q: "Is the 5-day make-ready guarantee real?",
    a: "Yes and we put it in writing for standard units in average condition. If we commit to 5 business days and miss it we make it right at our cost. Now, for larger properties or units with serious damage like major water issues, full flooring replacement, or structural repairs, the timeline will be longer. We will always tell you that upfront at the assessment. No surprises either way.",
  },
  {
    category: "make-ready",
    q: "Do you handle make-readies for large multifamily portfolios?",
    a: "Yes and that is actually our bread and butter. We work with property management companies across Central Florida that have anywhere from 30 to 500 units. We run 5 to 10 simultaneous make-readies per week with our active crews. If you have multiple properties and multiple turns happening at the same time we can handle it. One call, one schedule, one invoice per job.",
  },
  {
    category: "make-ready",
    q: "What cities do you serve for make-ready in Florida?",
    a: "We cover 18 cities across Central Florida. Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa. Tampa Bay is next. If your portfolio is in our zone we are your team.",
  },
  {
    category: "make-ready",
    q: "Do you provide a photo report after each make-ready?",
    a: "Every single time. You get before and after photos delivered with the invoice, organized by room and easy to share with the property owner or use for your move-in records. No more wondering what they actually did in there. You will see exactly what was done.",
  },
  {
    category: "make-ready",
    q: "What happens if damage is found during the make-ready?",
    a: "We document it with photos before we touch anything. If we find damage beyond the agreed scope like a subfloor issue under flooring or mold behind drywall we call you immediately and give you a clear quote for the additional work. You decide what is in scope. Nothing gets added to the invoice without your approval.",
  },

  // MAINTENANCE (8)
  {
    category: "maintenance",
    q: "What property maintenance services do you offer in Central Florida?",
    a: "We handle everything your property needs. Plumbing, electrical, HVAC, drywall, carpentry, interior painting, flooring, cleaning, and general repairs. In-house crew for the day-to-day work and licensed contractors for the specialty trades, all under our coordination. One call handles it. No building your own vendor list from scratch.",
  },
  {
    category: "maintenance",
    q: "Do you offer 24/7 emergency maintenance in Orlando?",
    a: "Yes, 24 hours a day, 7 days a week. Burst pipe at midnight, AC out on a Friday with tenants calling, electrical issue on a Sunday. We answer the phone. Our target is 2 hours on-site for true emergencies in our Central Florida core. Call us any time. A real person answers, no voicemail runaround.",
  },
  {
    category: "maintenance",
    q: "How fast do you respond to maintenance work orders?",
    a: "Emergencies like water, power, AC, and lockouts we target 2 hours on-site. Routine work orders get scheduled within 24 hours. We do not make you wait a week to get someone out there. Property managers across Orlando, Kissimmee, and Sanford come to us specifically because we actually show up when we say we will.",
  },
  {
    category: "maintenance",
    q: "Can you handle maintenance for an entire property portfolio?",
    a: "Absolutely. That is what we are built for. We work with property management companies across Central Florida as their primary maintenance vendor, handling everything from routine work orders to emergency calls to unit turns. One point of contact. One invoice cycle. No juggling 6 different contractors.",
  },
  {
    category: "maintenance",
    q: "Are your technicians licensed and insured in Florida?",
    a: "Yes. FiveServ Group LLC is fully licensed and insured in the state of Florida. Our in-house team handles general repairs, painting, and make-readies. For plumbing, electrical, and HVAC we use licensed contractors who work under our direct coordination and accountability. You are covered either way.",
  },
  {
    category: "maintenance",
    q: "Do you offer recurring or preventive maintenance plans?",
    a: "Yes. Preventive maintenance is one of the best investments you can make on a multifamily property. We offer quarterly HVAC checks, plumbing inspections, exterior walks, and common-area maintenance plans. Catch problems before they become expensive emergencies. Reduce resident complaints. Keep your property in shape year-round.",
  },
  {
    category: "maintenance",
    q: "How do you handle billing for property maintenance work?",
    a: "Per job or monthly retainer, your choice. Either way you get one clean itemized invoice that is easy to read and easy to forward to a property owner. No surprise charges. No we added this while we were there without your approval. What we quote is what you pay.",
  },
  {
    category: "maintenance",
    q: "What areas do you cover for property maintenance in Florida?",
    a: "18 cities across Central Florida. Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa. Same-day response in our Orlando metro core. Tampa Bay coming soon.",
  },

  // SERVICES (8)
  {
    category: "services",
    q: "Do you offer painting services for rental properties in Orlando?",
    a: "Yes, interior and exterior painting is one of our most requested services. Full unit repaints, touch-ups between tenants, common-area walls, exterior refresh. Our painters work on tight timelines because property managers need units ready fast. We coordinate painting inside the make-ready window when needed so nothing slows down the turn.",
  },
  {
    category: "services",
    q: "Do you handle plumbing repairs for property managers in Central Florida?",
    a: "Yes, licensed plumbing under our coordination. Leaks, pipe replacement, water heaters, drain cleaning, toilet and fixture repair. You do not need to find a plumber, vet them, and follow up to make sure they showed up. You call us, we handle the plumber, you get one invoice.",
  },
  {
    category: "services",
    q: "Do you do HVAC repair and maintenance in Central Florida?",
    a: "Yes. Florida law requires landlords to maintain working air conditioning year-round, so no AC is always an emergency. We have licensed HVAC contractors ready to respond. AC repair, unit replacement, coil cleaning, filter maintenance, duct work. We target 2 hours on-site for no-cool emergencies. Your tenants will not be waiting in the Florida heat.",
  },
  {
    category: "services",
    q: "Do you do drywall repair in Orlando and Central Florida?",
    a: "Yes, holes, cracks, water damage, full panel replacement. Texture matching too, smooth, orange peel, knockdown, popcorn. We do a lot of drywall on make-readies but we also handle standalone drywall repair calls for property managers and homeowners. Send us photos and we will get you a quote fast.",
  },
  {
    category: "services",
    q: "What flooring services do you offer in Central Florida?",
    a: "LVP is the most popular choice for rental units right now, waterproof, scratch-resistant, and looks great. We also do ceramic tile, carpet, hardwood, and engineered wood. Full removal and disposal of old flooring included. Subfloor repair handled before anything new goes down. We work with property managers on portfolio-wide flooring replacements and with homeowners on full-room installs.",
  },
  {
    category: "services",
    q: "Do you handle electrical repairs for rental properties?",
    a: "Yes, licensed electricians under our coordination. Outlet and switch repair, panel upgrades, lighting installation, ceiling fans, wiring repair. For property managers, having a licensed electrician under one vendor means zero liability headache. One call, one invoice, everything documented.",
  },
  {
    category: "services",
    q: "Do you offer carpentry services in Central Florida?",
    a: "Yes, door repair and replacement, cabinet installation, baseboards, trim work, shelving, closet systems. A lot of this comes up during make-readies but we also do standalone carpentry calls. Doors that will not close, cabinets falling apart, trim that needs replacing. Send us photos and we will quote it same day.",
  },
  {
    category: "services",
    q: "Do you offer cleaning services for rental units in Orlando?",
    a: "Yes, move-out cleaning, deep cleaning, make-ready cleaning, and post-construction cleaning. Our cleaning is coordinated as part of the make-ready process so painting, repairs, and cleaning happen in the right order without you managing the sequence. The unit comes back spotless every time.",
  },

  // RESIDENTIAL (4)
  {
    category: "residential",
    q: "Do you work with homeowners or only property managers?",
    a: "Both. We started in property management but we bring the exact same crew and the same standards to homeowners across Central Florida. The difference is most homeowners tell us it is the most professional home repair experience they have ever had because we actually show up, we finish what we start, and we send one clean invoice.",
  },
  {
    category: "residential",
    q: "What home repairs do you handle for homeowners in Central Florida?",
    a: "Plumbing, electrical, HVAC, interior painting, drywall, flooring, carpentry, and general repairs. Single repairs or full room renovations. If something is broken, worn out, or just needs updating in your home we handle it. One call. One team. One invoice.",
  },
  {
    category: "residential",
    q: "How much does home repair cost in Orlando Florida?",
    a: "It depends heavily on what needs to be done. A single repair like a leaky faucet or a drywall patch runs 150 to 400 dollars. Interior painting for a room runs 300 to 700 dollars. A bathroom renovation runs 3,000 to 8,000 dollars. We give you a free quote before we start anything so you know the number upfront. No surprises.",
  },
  {
    category: "residential",
    q: "How fast can you get to my home for a repair in Central Florida?",
    a: "Routine repairs are scheduled within 24 to 48 hours. Emergencies like water leak, no power, or no AC we target 2 hours on-site across the Orlando metro. We answer 24 hours a day, 7 days a week.",
  },

  // CAPEX (5)
  {
    category: "capex",
    q: "What is CapEx and how does FiveServ handle it?",
    a: "CapEx projects are the bigger investments that increase your property value and let you charge higher rents. Flooring replacements, kitchen and bathroom upgrades, full unit rehabs, common-area renovations. FiveServ manages the whole thing with one project manager, one contract, one invoice. You do not coordinate 5 different subs.",
  },
  {
    category: "capex",
    q: "What ROI can I expect on a value-add renovation in Central Florida?",
    a: "Value-add renovations in Central Florida multifamily typically produce a 15 to 20 percent rent increase per unit. Payback periods range from 18 to 36 months depending on scope. We include an estimated ROI breakdown in every project quote so you can show it to the owner before work begins.",
  },
  {
    category: "capex",
    q: "How long does a renovation project take?",
    a: "A single unit rehab typically takes 2 to 3 weeks. Common-area projects run 1 to 4 weeks. Full portfolio rollouts are scheduled in phases to minimize vacancy impact. You get a detailed timeline at quote stage and daily progress photos throughout the project.",
  },
  {
    category: "capex",
    q: "Do you handle permits for renovation projects in Florida?",
    a: "Yes. We pull all required permits and coordinate municipal inspections. Plumbing, electrical, and HVAC within renovation projects are performed by licensed contractors under our supervision. You do not chase the city. We handle it.",
  },
  {
    category: "capex",
    q: "Can property owners hire FiveServ directly without a PM company?",
    a: "Absolutely. We work with property management companies on large portfolio projects and directly with owners on single assets and small portfolios. If you own rental property in Central Florida and need renovation work done right, call us directly.",
  },

  // GETTING STARTED (5)
  {
    category: "getting-started",
    q: "How do I get started with FiveServ?",
    a: "Call us or fill out the form on our website. We get back to you within 24 hours. If it is an emergency, call. We answer 24 hours a day, 7 days a week. No voicemail, no answering service. A real person picks up.",
  },
  {
    category: "getting-started",
    q: "Do you require a contract or minimum commitment?",
    a: "No long-term contract required to get started. We work job by job and also offer ongoing service agreements for property managers who want a dedicated maintenance partner. Try us on one make-ready or one repair. We will earn the relationship.",
  },
  {
    category: "getting-started",
    q: "Why should I choose FiveServ over other maintenance companies in Orlando?",
    a: "Because we are the only company in Central Florida giving you a written guarantee on standard make-readies, one invoice for every trade, and a family with their name on every job. We are not a franchise. We are not a dispatch app. We are five family members who built this company from scratch and show up personally to make sure the work is done right. That is not something you find everywhere.",
  },
  {
    category: "getting-started",
    q: "Do you serve residential homeowners or only commercial properties?",
    a: "Both. Property managers are our primary clients but we serve homeowners across Central Florida with the exact same standards and the same crew. From a leaky faucet to a full kitchen remodel, same team, same accountability.",
  },
  {
    category: "getting-started",
    q: "Is FiveServ licensed and insured in Florida?",
    a: "Yes. FiveServ Group LLC is fully licensed and insured in the state of Florida. All specialty trade work including plumbing, electrical, and HVAC is performed by licensed contractors under our direct coordination. You are protected.",
  },
];
