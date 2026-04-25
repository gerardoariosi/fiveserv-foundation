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
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <img
              src="/images/family-fiveserv.jpg"
              alt={`The ${SITE.brand} family — property maintenance Central Florida`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-4 left-4">
              <img
                src="/images/logo FS .png"
                alt="FiveServ logo"
                className="h-14 w-14 rounded-full object-cover shadow-lg ring-2 ring-white"
              />
            </div>
          </div>

          <div>
            <p className="text-gray-900 text-xs font-bold uppercase tracking-[0.15em] mb-3">
              Built by a Family
            </p>
            <h2 className="text-gray-900 font-display font-bold text-4xl lg:text-5xl leading-tight">
              A Family <span className="text-gray-900">Trusted Across</span> Central Florida.
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
