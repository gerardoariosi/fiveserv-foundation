import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, CITIES, COMING_SOON_CITIES } from "@/lib/site-config";
import ServiceAreaMap from "@/components/fiveserv/ServiceAreaMap";

type Props = { canonicalPath?: "/cities" | "/service-areas" };

const CitiesIndexPage = ({ canonicalPath = "/cities" }: Props) => (
  <>
    <Seo
      title="Service Areas | 18 Cities Across Central Florida | FiveServ"
      description="FiveServ Property Solutions serves Orlando, Kissimmee, Sanford, Winter Park, Lakeland, and 13 more cities across Central Florida. Tampa Bay coming soon."
      path={canonicalPath}
    />
    <SchemaOrg
      breadcrumbs={[
        { name: "Home", url: SITE.url },
        { name: "Service Areas", url: `${SITE.url}${canonicalPath}` },
      ]}
    />
    <section className="bg-brand-black pt-32 pb-16">
      <div className="container">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">— {SITE.brand} Property Solutions</p>
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">
          18 Cities Across <span className="text-brand-gold">Central Florida</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-700">
          Same-day or 24-hour response across Orlando metro, Polk, Volusia, Flagler, and Brevard counties. Tampa Bay launching soon.
        </p>
      </div>
    </section>

    <section className="bg-white pb-24 pt-16">
      <div className="container">
        <ServiceAreaMap />
      </div>
      <div className="container mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CITIES.map((city) => (
          <Link
            key={city.slug}
            to={`/maintenance-${city.slug}`}
            className="hover-card group rounded-lg border border-gray-100 bg-white shadow-sm p-6"
          >
            <div className="flex items-center gap-2 text-amber-700">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wide">{city.state}</span>
            </div>
            <h2 className="mt-2 font-display font-semibold text-xl text-gray-900 group-hover:text-amber-700">
              {city.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{city.zones}</p>
            <p className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <Clock className="h-3.5 w-3.5 text-amber-700" /> {city.responseTime}
            </p>
          </Link>
        ))}
        {COMING_SOON_CITIES.map((c) => (
          <Link
            key={c.slug}
            to={`/${c.slug}`}
            className="hover-card group rounded-lg border border-dashed border-brand-gold/50 bg-brand-gray/20 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-700">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wide">{c.state}</span>
              </div>
              <span className="rounded-sm bg-brand-gold px-1.5 py-0.5 text-[10px] font-bold uppercase text-gray-900">
                Coming Soon
              </span>
            </div>
            <h2 className="mt-2 font-display text-xl text-gray-700 group-hover:text-amber-700">{c.name}</h2>
            <p className="mt-2 text-sm text-gray-500">Launching soon — join the waitlist.</p>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default CitiesIndexPage;
