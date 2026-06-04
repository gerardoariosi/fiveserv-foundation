import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";

const CHECKS = [
  "Family-owned & operated since day one",
  "300+ units completed across 18 cities",
  "One team handles every trade",
  "Our name on every job — accountability built-in",
];

export const FamilyStory = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-white">
      <div ref={ref} className="container reveal" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image side — outer wrapper not rotated, inner frame rotated */}
          <div className="flex items-center justify-center">
            <div
              className="bg-white flex items-center justify-center aspect-[4/3] w-full max-w-md"
              style={{
                borderRadius: 20,
                border: "3px solid #FFD700",
                transform: "rotate(-2deg)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="/images/logo-fs.webp"
                alt="FiveServ Property Solutions family team — family-owned property maintenance company Orlando Florida"
                width={256}
                height={256}
                loading="lazy"
                decoding="async"
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>

          <div>
            <p className="font-bold uppercase mb-3" style={{ color: "#FFD700", letterSpacing: "0.15em", fontSize: 11 }}>
              — Why FiveServ
            </p>
            <h2 className="text-gray-900 font-display font-bold text-4xl lg:text-5xl leading-tight">
              A Family <span className="text-gray-900">Trusted Across</span> Central Florida.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We started in maintenance — wrenches, ladders, late nights — and built something to last generations.
            </p>

            <ul className="mt-6 space-y-3">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#FFD700" }}
                  >
                    <Check className="h-4 w-4" style={{ color: "#1A1A1A" }} strokeWidth={3} />
                  </span>
                  <span className="text-gray-800 font-medium">{c}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
              style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
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
