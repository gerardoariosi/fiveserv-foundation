import { Link } from "react-router-dom";
import BrandName from "@/components/fiveserv/BrandName";

/**
 * Pillar 3 — Property Maintenance Costs in Central Florida — 2025 Pricing Guide
 */
const PricingGuideBody = () => (
  <div className="space-y-6 text-base leading-relaxed text-gray-700">
    <p>
      <strong><BrandName variant="dark" /> Property Solutions</strong> publishes flat-rate pricing because
      every property manager we've ever worked with has the same complaint: they can't
      build an accurate annual maintenance budget when every vendor quotes differently.
      This 2025 pricing guide gives you the actual numbers across hourly labor,
      make-ready turns, CapEx benchmarks, and trip charges for the I-4 corridor and the
      Space Coast.
    </p>

    <h2 className="font-display text-2xl text-gray-900">Hourly labor rates in Central Florida — 2025</h2>
    <div className="overflow-x-auto rounded-lg border border-brand-gold/30">
      <table className="w-full text-sm">
        <thead className="bg-brand-gray/40">
          <tr>
            <th className="p-3 text-left text-gray-900">Trade</th>
            <th className="p-3 text-left text-gray-900">Rate range</th>
            <th className="p-3 text-left text-gray-900">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          <tr><td className="p-3">General handyman</td><td className="p-3">$75 – $125 / hr</td><td className="p-3">1-hr minimum standard</td></tr>
          <tr><td className="p-3">Painter</td><td className="p-3">$55 – $85 / hr</td><td className="p-3">Crews quoted per unit, not hourly</td></tr>
          <tr><td className="p-3">Drywall</td><td className="p-3">$70 – $110 / hr</td><td className="p-3">Or per-patch flat rate</td></tr>
          <tr><td className="p-3">Licensed plumber</td><td className="p-3">$135 – $185 / hr</td><td className="p-3">$45 trip charge typical</td></tr>
          <tr><td className="p-3">Licensed electrician</td><td className="p-3">$135 – $175 / hr</td><td className="p-3">$45 trip charge typical</td></tr>
          <tr><td className="p-3">HVAC tech</td><td className="p-3">$140 – $190 / hr</td><td className="p-3">Diagnostic fee $89–$129</td></tr>
          <tr><td className="p-3">Cleaning crew</td><td className="p-3">$45 – $65 / hr / person</td><td className="p-3">2-person crew standard</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="font-display text-2xl text-gray-900">Make-ready turn pricing</h2>
    <p>
      Most of the year, a "standard" make-ready in Orange, Osceola, Seminole, or Polk
      County will fall in these ranges:
    </p>
    <ul className="list-disc space-y-1 pl-6">
      <li>Studio / 1BR standard turn — $850 to $1,200</li>
      <li>2BR standard turn — $1,200 to $1,800</li>
      <li>3BR standard turn — $1,600 to $2,400</li>
      <li>Full repaint add-on — $400 to $900</li>
      <li>Carpet cleaning add-on — $95 to $185 per unit</li>
      <li>LVP touch-up / board swap — $125 to $350</li>
    </ul>

    <h2 className="font-display text-2xl text-gray-900">CapEx benchmarks</h2>
    <div className="overflow-x-auto rounded-lg border border-brand-gold/30">
      <table className="w-full text-sm">
        <thead className="bg-brand-gray/40">
          <tr>
            <th className="p-3 text-left text-gray-900">Project</th>
            <th className="p-3 text-left text-gray-900">Per unit (1BR)</th>
            <th className="p-3 text-left text-gray-900">Per unit (2BR)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          <tr><td className="p-3">Full LVP flooring</td><td className="p-3">$2,400 – $3,200</td><td className="p-3">$3,400 – $4,600</td></tr>
          <tr><td className="p-3">Cabinet reface</td><td className="p-3">$1,800 – $2,800</td><td className="p-3">$2,200 – $3,400</td></tr>
          <tr><td className="p-3">Cabinet replace</td><td className="p-3">$3,800 – $5,500</td><td className="p-3">$4,800 – $7,200</td></tr>
          <tr><td className="p-3">Quartz countertops</td><td className="p-3">$1,400 – $2,200</td><td className="p-3">$1,800 – $2,800</td></tr>
          <tr><td className="p-3">Bath vanity + fixtures</td><td className="p-3">$950 – $1,650</td><td className="p-3">$1,650 – $2,800</td></tr>
          <tr><td className="p-3">Stainless appliance package</td><td className="p-3">$2,200 – $3,400</td><td className="p-3">$2,200 – $3,400</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="font-display text-2xl text-gray-900">Trip charges and zone surcharges</h2>
    <p>
      Trip charges are normal across Central Florida and reflect drive time. Most vendors
      waive them when total billable hours exceed 2 hours.
    </p>
    <ul className="list-disc space-y-1 pl-6">
      <li><strong>Orlando, Kissimmee, Winter Park, Sanford, Altamonte:</strong> $40 – $65 trip charge, often waived</li>
      <li><strong>Lakeland, Clermont, St. Cloud, Davenport:</strong> $55 – $85 trip charge</li>
      <li><strong>Daytona, Palm Coast, Melbourne, Palm Bay, Cocoa:</strong> $75 – $125 zone surcharge</li>
      <li><strong>After-hours / weekend:</strong> 1.5x billable rate, $95+ trip minimum</li>
    </ul>

    <h2 className="font-display text-2xl text-gray-900">How to use these numbers in your budget</h2>
    <p>
      For a 200-unit community, plan on roughly $185 – $245 per unit per year in
      reactive maintenance, plus your full make-ready cost on every turn. CapEx is
      a separate budget line and should be amortized over the project's useful life
      (typically 7 years for cabinets, 10 for flooring, 15+ for appliances).
    </p>

    <h2 className="font-display text-2xl text-gray-900">Get quoted scope, not estimates</h2>
    <p>
      Pricing only matters when it matches the actual scope of work. <BrandName variant="dark" /> publishes
      flat rates for our most common scopes and quotes anything custom in writing before
      work starts. Browse{" "}
      <Link to="/make-ready" className="text-gray-900 underline">make-ready</Link>,{" "}
      <Link to="/maintenance" className="text-gray-900 underline">maintenance</Link>,
      or{" "}
      <Link to="/renovations" className="text-gray-900 underline">CapEx and renovations</Link>{" "}
      to see what's included in each tier. We service every city on our{" "}
      <Link to="/cities" className="text-gray-900 underline">Central Florida coverage map</Link>{" "}
      — request a portfolio quote at our{" "}
      <Link to="/contact" className="text-gray-900 underline">contact page</Link>.
    </p>
  </div>
);

export default PricingGuideBody;
