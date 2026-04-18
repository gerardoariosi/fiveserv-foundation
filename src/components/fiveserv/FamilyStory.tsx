import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";

export const FamilyStory = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-white">
      <div ref={ref} className="container reveal py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <img
              src="/images/family-fiveserv.jpg"
              alt={`The ${SITE.brand} Venezuelan-American family — property maintenance Central Florida`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover aspect-[4/3]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='%23F5F5F5'/><text x='50%25' y='50%25' fill='%231A1A1A' font-family='Arial' font-size='28' text-anchor='middle' dominant-baseline='middle'>family-fiveserv.jpg</text></svg>";
              }}
            />
          </div>

          <div>
            <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.15em] mb-3">
              Built by a Family
            </p>
            <h2 className="text-gray-900 font-display font-bold text-4xl lg:text-5xl leading-tight">
              A <span className="text-brand-gold">Venezuelan-American Family</span> Trusted Across Central Florida.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We started in maintenance — wrenches, ladders, late nights — and built something to last generations.
            </p>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              300+ units completed. 50+ communities served. 18 cities active. 15+ years of combined experience.
              Our name is on every job. We show up. We finish. We deliver.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-gray-800"
            >
              Meet the Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyStory;
