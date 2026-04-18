import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";
import SectionHeading from "./SectionHeading";

export const FamilyStory = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section-light-gray">
      <div ref={ref} className="container reveal py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
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
            <SectionHeading eyebrow="Built by a Family">
              A <span className="text-brand-gold">Venezuelan-American Family</span> Trusted Across Central Florida.
            </SectionHeading>
            <p className="mt-6 text-gray-700 leading-relaxed">
              We started in maintenance — wrenches, ladders, late nights — and built something to last generations.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              300+ units completed. 50+ communities served. 18 cities active. 15+ years of combined experience.
              Our name is on every job. We show up. We finish. We deliver.
            </p>
            <Link
              to="/about"
              className="cta-dark mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 font-bold uppercase tracking-wide"
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
