import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { CITIES, COMING_SOON_CITIES } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";

export const CityGrid = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section-light-gray">
      <div ref={ref} className="container reveal py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-brand-black">
          18 Cities Across <span className="text-brand-gold">Central Florida</span>
        </h2>
        <p className="mt-3 max-w-2xl text-gray-700">We serve Orlando, FL and 17 surrounding cities. Tampa Bay coming soon.</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              to={`/maintenance-${city.slug}`}
              className="hover-card group flex items-center gap-2 rounded-md border border-brand-gold/20 bg-white px-4 py-3 hover:border-brand-gold"
            >
              <MapPin className="h-4 w-4 text-brand-gold" />
              <span className="font-bold text-brand-black group-hover:text-brand-gold">{city.name}, {city.state}</span>
            </Link>
          ))}
          {COMING_SOON_CITIES.map((c) => (
            <Link key={c.slug} to={`/${c.slug}`} className="hover-card flex items-center justify-between gap-2 rounded-md border border-dashed border-brand-gold/50 bg-white/60 px-4 py-3">
              <span className="font-bold text-gray-500">{c.name}, {c.state}</span>
              <span className="rounded-sm bg-brand-gold px-1.5 py-0.5 text-[10px] font-bold uppercase text-brand-black">Soon</span>
            </Link>
          ))}
        </div>

        {/* Mini map placeholder — replace with SVG of Central Florida */}
        <div className="mt-12 rounded-lg border border-brand-gold/20 bg-white p-8 text-center text-gray-500">
          [ Central Florida service-area map — SVG placeholder ]
        </div>
      </div>
    </section>
  );
};

export default CityGrid;
