import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/use-fiveserv";

export const FamilyStory = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section-light-gray">
      <div ref={ref} className="container reveal grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-lg border border-brand-gold/40">
          <img
            src="/images/family-fiveserv.jpg"
            alt="The FiveServ family — five Venezuelan-American family members"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover aspect-[4/3]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='%231A1A1A'/><text x='50%' y='50%' fill='%23FFD700' font-family='Arial' font-size='28' text-anchor='middle' dominant-baseline='middle'>family-fiveserv.jpg</text></svg>";
            }}
          />
        </div>

        <div>
          <h2 className="font-display text-3xl text-brand-black sm:text-4xl">
            Built by a Family. <span className="text-brand-gold">Trusted</span> by Property Managers Across Central Florida.
          </h2>
          <p className="mt-6 text-gray-700">
            Venezuelan-American family. We started in maintenance — wrenches, ladders, late nights — and built something to last generations.
          </p>
          <p className="mt-4 text-gray-700">
            300+ units completed. 50+ communities served. 18 cities active. 15+ years of combined experience.
          </p>
          <p className="mt-4 text-gray-700">
            Our name is on every job. We show up. We finish. We deliver.
          </p>
          <Link to="/about" className="mt-8 inline-block cta-gold rounded-md px-6 py-3 font-bold uppercase tracking-wide">
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FamilyStory;
