import { Link } from "react-router-dom";

/**
 * Pillar 1 — The Complete Make-Ready Guide for Property Managers in Florida 2025
 * 2000+ words. Mentions FiveServ Property Solutions in first 100 chars.
 */
const MakeReadyGuideBody = () => (
  <div className="space-y-6 text-base leading-relaxed text-brand-white/90">
    <p>
      <strong>FiveServ Property Solutions</strong> turns 300+ multifamily units a year across
      Central Florida, and almost every conversation with a new property manager starts with
      the same question: how do we get our make-readies down from 12 days to 5? This guide
      walks through the exact process we use — scope, sequencing, pricing benchmarks, and the
      vendor coordination tactics that compress a turn without cutting corners.
    </p>

    <h2 className="font-display text-2xl text-brand-white">What a make-ready actually includes in 2025</h2>
    <p>
      A modern Florida make-ready (also called a "unit turn" or "vacate-to-lease prep") is
      the work between move-out and the next resident's move-in. The standard scope on a
      1–2 bedroom apartment in Orange, Osceola, Seminole, or Polk County is:
    </p>
    <ul className="list-disc space-y-1 pl-6">
      <li>Full unit deep clean — appliances, baseboards, vents, blinds, bathrooms</li>
      <li>Paint touch-up or full repaint (Sherwin-Williams ProMar 200 is the regional standard)</li>
      <li>Drywall and trim repair, nail-pop fix, caulk replacement</li>
      <li>Plumbing inspection — supply lines, P-traps, toilet flapper, leak check</li>
      <li>Electrical inspection — outlets, GFCI test, smoke and CO detector battery swap</li>
      <li>Appliance check and basic repair (ice maker, garbage disposal, range igniter)</li>
      <li>HVAC filter and condensate line clear</li>
      <li>Final walk-through with photo documentation for the file</li>
    </ul>

    <h2 className="font-display text-2xl text-brand-white">The 5-day timeline, hour by hour</h2>
    <p>
      The reason most Florida turns take 10–14 days is dead time between trades. Here is
      the sequence FiveServ runs to compress a standard turn into 5 business days:
    </p>

    <div className="overflow-x-auto rounded-lg border border-brand-gold/30">
      <table className="w-full text-sm">
        <thead className="bg-brand-gray/40">
          <tr>
            <th className="p-3 text-left text-brand-gold">Day</th>
            <th className="p-3 text-left text-brand-gold">Trade</th>
            <th className="p-3 text-left text-brand-gold">Scope</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-gold/15 text-brand-white">
          <tr><td className="p-3">Day 1 AM</td><td className="p-3">Inspection + scope</td><td className="p-3">Walk-through, photo log, scope sheet to PM</td></tr>
          <tr><td className="p-3">Day 1 PM</td><td className="p-3">Trash-out + drywall</td><td className="p-3">Clear unit, patch holes, prime patches</td></tr>
          <tr><td className="p-3">Day 2</td><td className="p-3">Paint</td><td className="p-3">Full ceiling + walls or touch-up program</td></tr>
          <tr><td className="p-3">Day 3</td><td className="p-3">Plumbing + electrical</td><td className="p-3">Fixture swaps, GFCI, detectors, leak check</td></tr>
          <tr><td className="p-3">Day 4</td><td className="p-3">Deep clean</td><td className="p-3">Appliances, bathrooms, floors, windows</td></tr>
          <tr><td className="p-3">Day 5</td><td className="p-3">Final QC</td><td className="p-3">Walk with PM, punch list closed, keys returned</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="font-display text-2xl text-brand-white">Why most Florida turns take 12+ days</h2>
    <p>
      Three reasons, in order of impact: (1) the painter and the cleaner aren't booked on
      consecutive days, (2) someone discovers a plumbing leak on day 3 and the licensed
      plumber can't get there until day 7, and (3) the PM's QC walk happens "when I have
      time." Consolidating with one make-ready vendor solves all three because scheduling,
      licensed trades, and walk-through are owned by one team.
    </p>

    <h2 className="font-display text-2xl text-brand-white">2025 pricing benchmarks for Central Florida</h2>
    <p>
      Pricing varies by unit size, paint scope, and damage. Use these as a budgeting guide:
    </p>
    <ul className="list-disc space-y-1 pl-6">
      <li><strong>Studio / 1BR standard turn:</strong> $850 – $1,200</li>
      <li><strong>2BR standard turn:</strong> $1,200 – $1,800</li>
      <li><strong>3BR standard turn:</strong> $1,600 – $2,400</li>
      <li><strong>Full repaint (add-on):</strong> $400 – $900 depending on ceiling height</li>
      <li><strong>Heavy damage / smoke remediation:</strong> quoted as CapEx, not turn</li>
    </ul>

    <h2 className="font-display text-2xl text-brand-white">The vendor coordination playbook</h2>
    <p>
      If you're not ready to consolidate to one vendor, these tactics still cut 3–5 days
      off the average turn:
    </p>
    <ol className="list-decimal space-y-1 pl-6">
      <li>Walk the unit within 24 hours of move-out — don't wait for the cleaner</li>
      <li>Send the scope sheet to all trades simultaneously, not sequentially</li>
      <li>Pre-stage paint and supplies in the unit on day 1</li>
      <li>Book the PM's final walk-through before day 1 starts</li>
      <li>Use one shared photo log so trades don't re-inspect</li>
    </ol>

    <h2 className="font-display text-2xl text-brand-white">When a 5-day turn isn't realistic</h2>
    <p>
      Heavy smoke, hoarder-level trash-out, full flooring replacement, cabinet replacement,
      or any insurance claim work moves out of make-ready and into CapEx. Trying to force
      these into a 5-day window is how PMs end up with rushed, callback-heavy work.
      Quote them separately on a project timeline.
    </p>

    <h2 className="font-display text-2xl text-brand-white">How FiveServ runs your turn</h2>
    <p>
      We send one project manager, in-house painters, in-house cleaners, and licensed
      plumbing/electrical subs we coordinate. You get one invoice, one point of contact,
      and a guaranteed 5-business-day timeline on standard scope across our{" "}
      <Link to="/cities" className="text-brand-gold underline">Central Florida service area</Link>.
      If you want the full breakdown, the{" "}
      <Link to="/make-ready" className="text-brand-gold underline">make-ready service page</Link>{" "}
      shows the included scope and pricing tiers, or you can{" "}
      <Link to="/contact" className="text-brand-gold underline">request a quote</Link> for
      your specific community.
    </p>
  </div>
);

export default MakeReadyGuideBody;
