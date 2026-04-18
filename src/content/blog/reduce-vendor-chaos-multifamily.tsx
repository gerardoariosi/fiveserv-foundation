import { Link } from "react-router-dom";

/**
 * Pillar 2 — How to Reduce Vendor Chaos in Your Multifamily Portfolio
 */
const VendorChaosBody = () => (
  <div className="space-y-6 text-base leading-relaxed text-brand-white/90">
    <p>
      <strong>FiveServ Property Solutions</strong> works with multifamily operators across
      Central Florida who manage anywhere from one 80-unit community to portfolios of
      2,000+ doors. The single biggest operational drag we see — bigger than turn time,
      bigger than CapEx ROI — is vendor chaos: too many small specialty vendors, too many
      invoices, too many missed handoffs. Here's the playbook to fix it.
    </p>

    <h2 className="font-display text-2xl text-brand-white">What vendor chaos actually costs you</h2>
    <p>
      In a typical 200-unit Central Florida community we audit, we find:
    </p>
    <ul className="list-disc space-y-1 pl-6">
      <li>8–12 active maintenance vendors</li>
      <li>30–50 invoices per month flowing through accounts payable</li>
      <li>6–10 admin hours per unit per year coordinating, approving, and reconciling</li>
      <li>2–4 idle days between trades on every make-ready</li>
      <li>1–3 missed-trade incidents per quarter where the wrong vendor showed up</li>
    </ul>
    <p>
      At a $75/hr fully-loaded admin cost, that's $1,500–$2,500 per unit per year in pure
      coordination overhead — before the missed-trade incidents that actually delay rent.
    </p>

    <h2 className="font-display text-2xl text-brand-white">Why portfolios accumulate vendors</h2>
    <p>
      Most portfolios don't choose vendor chaos — they inherit it. A new community comes
      online, the prior PM had relationships, the regional likes "their guy" for HVAC, the
      onsite manager's brother does drywall. Three years later you have 11 vendors and
      nobody can tell you who owns the turn timeline.
    </p>

    <h2 className="font-display text-2xl text-brand-white">The consolidation playbook</h2>
    <p>
      Here's the 90-day process we use to consolidate a portfolio without disrupting
      operations:
    </p>
    <ol className="list-decimal space-y-1 pl-6">
      <li><strong>Days 1–14:</strong> Audit current vendor list — pull last 12 months of invoices, group by trade</li>
      <li><strong>Days 15–30:</strong> Identify your top 3 generalist vendors and your top 2 specialty vendors</li>
      <li><strong>Days 31–60:</strong> Route all new make-readies and scheduled maintenance to consolidated list</li>
      <li><strong>Days 61–90:</strong> Add reactive maintenance, then CapEx, to the consolidated list</li>
      <li><strong>Day 90+:</strong> Existing vendor relationships sunset naturally as their work dries up</li>
    </ol>

    <h2 className="font-display text-2xl text-brand-white">What to verify before consolidating</h2>
    <div className="overflow-x-auto rounded-lg border border-brand-gold/30">
      <table className="w-full text-sm">
        <thead className="bg-brand-gray/40">
          <tr>
            <th className="p-3 text-left text-brand-gold">Check</th>
            <th className="p-3 text-left text-brand-gold">Why it matters</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-gold/15 text-brand-white">
          <tr><td className="p-3">General liability $1M / $2M minimum</td><td className="p-3">Insurance industry standard for multifamily</td></tr>
          <tr><td className="p-3">Workers' comp on all crew</td><td className="p-3">Protects you from sub-of-sub claims</td></tr>
          <tr><td className="p-3">In-house painters &amp; cleaners</td><td className="p-3">Subbed work introduces the chaos you're solving</td></tr>
          <tr><td className="p-3">Licensed plumbing &amp; electrical</td><td className="p-3">Florida licensing is enforced — verify, don't assume</td></tr>
          <tr><td className="p-3">24/7 emergency response SLA</td><td className="p-3">After-hours leaks shouldn't require a 4th vendor</td></tr>
          <tr><td className="p-3">One invoice per project</td><td className="p-3">The whole point of consolidating</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="font-display text-2xl text-brand-white">Common objections from regionals</h2>
    <p>
      "What if the consolidated vendor goes down?" Real risk — mitigated by keeping one
      backup vendor warm in each trade. "What if pricing creeps up?" Re-bid every 18
      months and benchmark against your prior invoice data. "What about the relationships
      we'll lose?" The relationships that matter (responsive, accountable, on-time) come
      with you to the new vendor. The ones that don't were costing you money.
    </p>

    <h2 className="font-display text-2xl text-brand-white">What FiveServ actually consolidates</h2>
    <p>
      We replace painters, cleaners, drywall, basic plumbing, basic electrical, HVAC
      filters, appliance repair, make-ready coordination, and CapEx project management
      with one team. Specialty work (roofing, asphalt, pool resurfacing) stays with
      specialists — that's not where chaos lives. See the full{" "}
      <Link to="/services" className="text-brand-gold underline">services list</Link>,
      our{" "}
      <Link to="/maintenance" className="text-brand-gold underline">maintenance page</Link>,
      or jump straight to{" "}
      <Link to="/renovations" className="text-brand-gold underline">CapEx and renovations</Link>{" "}
      to see how we structure project scopes. We're active across all our{" "}
      <Link to="/cities" className="text-brand-gold underline">Central Florida cities</Link>{" "}
      — request a portfolio audit at our{" "}
      <Link to="/contact" className="text-brand-gold underline">contact page</Link>.
    </p>
  </div>
);

export default VendorChaosBody;
