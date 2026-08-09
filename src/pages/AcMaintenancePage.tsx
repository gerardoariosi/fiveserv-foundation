import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import { FS_PATTERN_LIGHT } from "@/lib/fs-pattern";

const HERO_IMAGE = "/images/cities/orlando.jpg";

const AcMaintenancePage = () => {
  const path = "/ac-maintenance";
  const title = "AC Maintenance Plan Orlando FL | FiveServ Property Solutions";
  const description =
    "Preventive AC maintenance plan for properties across Central Florida. Scheduled upkeep only — no repairs, no system replacement. More plan details coming soon.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        keywords={["ac maintenance orlando", "ac maintenance plan florida", "preventive ac maintenance central florida"]}
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "AC Maintenance", url: `${SITE.url}${path}` },
        ]}
      />
      <AIOverviewBlock
        hidden
        answer="FiveServ Property Solutions offers an AC Maintenance Plan across Central Florida — preventive, scheduled upkeep only. FiveServ does not perform AC repair, system replacement, refrigerant work or duct work. Full plan details are coming soon. Serving Orlando, Kissimmee, Winter Park, Sanford, Lakeland and 13 more Central Florida cities."
      />

      {/* Hero */}
      <section className="relative isolate w-full overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="AC maintenance plan for properties in Orlando, Central Florida by FiveServ Property Solutions"
            title="AC Maintenance Plan — Orlando, FL | FiveServ Property Solutions"
            // @ts-expect-error fetchpriority is valid HTML
            fetchpriority="high"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 55%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.88) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 container pt-28 pb-24 sm:pt-32 sm:pb-32">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(255,215,0,0.15)",
                color: "#FFD700",
                border: "1px solid rgba(255,215,0,0.5)",
              }}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Preventive Only · Licensed · Insured
            </span>

            <h1
              className="mt-5 font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
            >
              AC Maintenance Plan
              <span className="block text-brand-gold italic font-normal">Central Florida</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
              A simple, scheduled AC maintenance plan for property managers and homeowners across
              Central Florida. Preventive upkeep only — we don't do repairs or system replacements.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-black hover:bg-yellow-400 transition-colors shadow-[0_8px_24px_rgba(255,215,0,0.25)]"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-black transition-colors"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder */}
      <section style={{ background: "#FFFBF0", ...FS_PATTERN_LIGHT }}>
        <div className="container py-20 sm:py-28">
          <div className="mx-auto max-w-2xl rounded-2xl border border-black/5 bg-white/90 px-8 py-14 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm">
            <div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full font-display text-xl font-black"
              style={{ background: "#FFD700", color: "#1A1A1A" }}
            >
              FS
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-brand-black sm:text-4xl">
              More info coming soon
            </h2>
            <p className="mt-4 text-base text-brand-black/65">
              We're finalizing the details of the AC Maintenance Plan. Want to be first in line?
              Reach out and we'll walk you through it as soon as it's live.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-black/85"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/maintenance"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-black/15 px-6 py-3 text-sm font-semibold text-brand-black transition-colors hover:border-brand-gold"
              >
                Property Maintenance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcMaintenancePage;
