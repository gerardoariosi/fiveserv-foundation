import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { CITIES, COMING_SOON_CITIES } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";
import SectionHeading from "./SectionHeading";
import ServiceAreaMap from "./ServiceAreaMap";

const TIER_1 = new Set([
  "orlando-fl",
  "kissimmee-fl",
  "sanford-fl",
  "winter-park-fl",
  "lakeland-fl",
]);

const TIER_2 = new Set([
  "altamonte-springs-fl",
  "apopka-fl",
  "ocoee-fl",
  "winter-garden-fl",
  "clermont-fl",
  "st-cloud-fl",
  "davenport-fl",
]);

const getTier = (slug: string): 1 | 2 | 3 => {
  if (TIER_1.has(slug)) return 1;
  if (TIER_2.has(slug)) return 2;
  return 3;
};

const tierBorder = (tier: 1 | 2 | 3) => {
  switch (tier) {
    case 1:
      return "border border-brand-gold/40 hover:border-brand-gold";
    case 2:
      return "border border-gray-200 hover:border-brand-gold";
    case 3:
      return "border border-gray-100 hover:border-brand-gold";
  }
};

const tierIconSize = (tier: 1 | 2 | 3) => (tier === 1 ? 28 : tier === 2 ? 24 : 20);

export const CityGrid = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-gray-50">
      <div ref={ref} className="container reveal py-24 lg:py-32">
        <SectionHeading
          eyebrow="Service Areas"
          subtext="From Orlando to the Space Coast — we cover it all"
        >
          Serving 18 Cities Across <span className="text-gray-900">Central Florida</span>
        </SectionHeading>

        <div className="mt-12">
          <ServiceAreaMap />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((city) => {
            const tier = getTier(city.slug);
            return (
              <Link
                key={city.slug}
                to={`/maintenance-${city.slug}`}
                className={`group block rounded-lg bg-white p-6 border-l-4 border-l-brand-gold shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,215,0,0.2)] ${tierBorder(tier)}`}
              >
                <div className="flex items-start justify-between">
                  <MapPin className="text-brand-gold" strokeWidth={1.5} size={tierIconSize(tier)} />
                  {tier === 1 && (
                    <span className="rounded-full bg-brand-gold px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-black">
                      Primary Market
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-black group-hover:text-brand-gold">
                  {city.name}, {city.state}
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  Within {city.responseTime}
                </p>
              </Link>
            );
          })}

          {COMING_SOON_CITIES.map((c) => (
            <div
              key={c.slug}
              className="rounded-lg border border-dashed border-brand-gold/50 bg-brand-gold/5 p-6"
            >
              <div className="flex items-start justify-between">
                <MapPin className="text-brand-gold" strokeWidth={1.5} size={24} />
                <span className="rounded-full bg-brand-gold px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-black">
                  Coming Soon
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {c.name}, {c.state}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Launching soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityGrid;
