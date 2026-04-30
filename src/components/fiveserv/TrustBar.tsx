import { Link } from "react-router-dom";
import BrandName from "@/components/fiveserv/BrandName";

const PLACEHOLDER_CLIENTS = [
  "ABC Property Management",
  "Orlando Realty Group",
  "Central FL Properties",
  "Sunshine Communities",
  "Metro Property Group",
  "Premier PM Solutions",
  "Coastal Management Co.",
  "Sunstate Properties",
];

const TrustBar = () => {
  const strip = [...PLACEHOLDER_CLIENTS, ...PLACEHOLDER_CLIENTS];

  return (
    <section
      aria-label="Trusted by property managers across Central Florida"
      className="bg-white border-y border-gray-100"
    >
      <div className="container py-6">
        <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">
          Trusted by property managers across Central Florida
        </p>

        <div className="trustbar-mask mt-3 h-10 sm:h-12 overflow-hidden">
          <div className="trustbar-track flex w-max items-center gap-[60px] opacity-60 transition-opacity duration-300 hover:opacity-100">
            {strip.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-[13px] font-bold uppercase tracking-wide text-gray-400 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-center sm:gap-3">
          <p className="text-[12px] text-gray-400">
            Join 50+ property managers who trust <span className="text-gray-900"><BrandName variant="dark" /></span> across Central Florida
          </p>
          <Link
            to="/contact"
            className="text-[12px] font-bold text-brand-gold hover:underline"
          >
            Become a Partner →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
