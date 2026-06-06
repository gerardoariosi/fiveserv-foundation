import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  FileText,
  Camera,
  Users,
  Award,
  Star,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/site-config";
import FaqAccordion from "./FaqAccordion";
import ContactCTA from "./ContactCTA";
import { useReveal } from "@/hooks/use-fiveserv";

export type ServiceLayoutConfig = {
  category: string;
  h1: string;
  description: string;
  heroImage?: string;
  offer: { title: string; desc: string };
  intro: { h2: string; body: string; emphasis?: string };
  ourServices: { name: string; href: string; icon: LucideIcon }[];
  subServices: { name: string; desc: string; href: string }[];
  checklist: string[];
  faqs: { q: string; a: string }[];
  reviews?: { text: string; name: string }[];
  relatedHeading?: string;
  extras?: ReactNode;
};

const DOT_GRID_DARK = {
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg width=%2728%27 height=%2728%27 viewBox=%270 0 28 28%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27rgba(255,215,0,0.18)%27%3E%3Cpath d=%27M7 3 Q7.6 6.4 10 7 Q7.6 7.6 7 11 Q6.4 7.6 4 7 Q6.4 6.4 7 3 Z%27/%3E%3Cpath d=%27M21 17 Q21.6 20.4 24 21 Q21.6 21.6 21 25 Q20.4 21.6 18 21 Q20.4 20.4 21 17 Z%27/%3E%3C/g%3E%3C/svg%3E")',
  backgroundSize: "48px 48px",
};

const DOT_GRID_CARD = {
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg width=%2728%27 height=%2728%27 viewBox=%270 0 28 28%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27rgba(255,215,0,0.18)%27%3E%3Cpath d=%27M7 3 Q7.6 6.4 10 7 Q7.6 7.6 7 11 Q6.4 7.6 4 7 Q6.4 6.4 7 3 Z%27/%3E%3Cpath d=%27M21 17 Q21.6 20.4 24 21 Q21.6 21.6 21 25 Q20.4 21.6 18 21 Q20.4 20.4 21 17 Z%27/%3E%3C/g%3E%3C/svg%3E")',
  backgroundSize: "20px 20px",
};

const WHY_REASONS = [
  { icon: Award, title: "15+ Years Experience", desc: "Combined experience across multifamily, commercial and residential property work." },
  { icon: Users, title: "One Call. One Team.", desc: "No vendor coordination. We are the team that shows up and gets it done." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed and insured in Florida. Documentation on every job." },
  { icon: Clock, title: "24/7 Emergency", desc: "Around-the-clock response with a 2-hour arrival window in the Orlando metro." },
  { icon: Camera, title: "Photo Documentation", desc: "Before-and-after photos for every unit and every job. Always." },
  { icon: FileText, title: "One Invoice", desc: "All trades, all line items, on a single clear invoice. No surprises." },
];

const ReviewsCarousel = ({ reviews }: { reviews: { text: string; name: string }[] }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6500);
    return () => clearInterval(t);
  }, [reviews.length]);
  const r = reviews[i];
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold mb-3">
        SEE WHAT OUR CLIENTS SAY
      </p>
      <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">Our Reviews</h2>
      <Quote className="mt-6 h-12 w-12 text-brand-gold" strokeWidth={1.5} />
      <div className="mt-3 flex gap-1">
        {[0,1,2,3,4].map((s) => <Star key={s} className="h-5 w-5 fill-brand-gold text-brand-gold" />)}
      </div>
      <p className="mt-5 text-lg text-gray-800 leading-relaxed min-h-[120px]">"{r.text}"</p>
      <p className="mt-4 font-bold text-brand-gold">— {r.name}</p>
      <div className="mt-6 flex gap-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Review ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand-gold" : "w-2.5 bg-gray-300"}`}
          />
        ))}
      </div>
      <Link
        to="/reviews"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#1A1A1A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-black transition-colors"
      >
        Read All Reviews <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
};

const DEFAULT_REVIEWS = [
  { text: "FiveServ turned 12 units for us in two weeks. Photo report on every one. We've never had this kind of consistency from a vendor.", name: "Maria S., Property Manager" },
  { text: "Called at 11pm with a major leak. They had a tech on site by 1am and the unit was dry by morning. Worth every dollar.", name: "James R., Regional Manager" },
  { text: "One invoice for paint, drywall, flooring and cleaning. No more chasing four vendors. This is the way it should work.", name: "Linda K., Asset Manager" },
];

export const ServicePageLayout = ({ config }: { config: ServiceLayoutConfig }) => {
  const reviews = config.reviews?.length ? config.reviews : DEFAULT_REVIEWS;

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full"
        style={{ minHeight: 480, background: "#1A1A1A" }}
      >
        {config.heroImage ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${config.heroImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)" }} />
          </>
        ) : (
          <div className="absolute inset-0" style={DOT_GRID_DARK} />
        )}
        <div className="relative z-10 container py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
            {/* Left 60% */}
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold">
                {config.category}
              </p>
              <h1 className="mt-3 font-display font-black text-white leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
                {config.h1}
              </h1>
              <p className="mt-5 text-white/80 text-base max-w-xl">
                {config.description}
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-7 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors"
                style={{ background: "#FFD700", color: "#1A1A1A" }}
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>
            {/* Right 40% — Coupon */}
            <div className="lg:col-span-2">
              <div
                className="relative rounded-lg p-6"
                style={{
                  background: "#1A1A1A",
                  border: "2px dashed rgba(255,215,0,0.6)",
                  ...DOT_GRID_CARD,
                }}
              >
                <p className="font-display font-bold text-xl text-white">{config.offer.title}</p>
                <p className="mt-2 text-sm text-gray-300">{config.offer.desc}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-brand-gold hover:underline"
                >
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-xs text-gray-400">Free quote within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRO + SERVICES BOX */}
      <section className="bg-white">
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="grid gap-12 lg:grid-cols-[65fr_35fr] lg:items-start">
            <div>
              <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">{config.intro.h2}</h2>
              <p className="mt-5 text-gray-700 leading-relaxed">{config.intro.body}</p>
              {config.intro.emphasis && (
                <p className="mt-4 font-bold text-gray-900 leading-relaxed">{config.intro.emphasis}</p>
              )}
              <a
                href={`tel:${SITE.phone}`}
                className="mt-7 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                style={{ background: "#FFD700", color: "#1A1A1A" }}
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold mb-3">
                Our Services
              </p>
              <div className="rounded-lg p-2" style={{ background: "#1A1A1A" }}>
                <ul className="flex flex-col gap-1.5">
                  {config.ourServices.map((s) => (
                    <li key={s.name}>
                      <Link
                        to={s.href}
                        className="group flex w-full items-center gap-3 rounded-full bg-[#FAFAF8] px-5 py-3 text-sm font-bold text-gray-900 transition-colors hover:bg-brand-gold"
                      >
                        <s.icon className="h-4 w-4 text-brand-gold group-hover:text-black" />
                        <span className="flex-1">{s.name}</span>
                        <ArrowRight className="h-4 w-4 text-brand-gold group-hover:text-black" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — SUB-SERVICES GRID */}
      {config.subServices.length > 0 && (
        <section style={{ background: "#FAFAF8" }}>
          <div className="container py-20 lg:py-[80px]">
            <Reveal>
              <h2 className="text-center font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                Specialized Services
              </h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {config.subServices.map((s) => (
                  <article
                    key={s.name}
                    className="overflow-hidden rounded-lg bg-white"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="flex h-[200px] items-center justify-center"
                      style={{ background: "#E5E7EB" }}
                    >
                      <div
                        className="flex h-20 w-20 items-center justify-center rounded-full font-display font-black text-3xl"
                        style={{ background: "#FFD700", color: "#1A1A1A" }}
                      >
                        FS
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-gray-900">{s.name}</h3>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{s.desc}</p>
                      <Link
                        to={s.href}
                        className="mt-4 inline-flex items-center gap-1 pb-0.5 text-sm font-bold text-brand-gold"
                        style={{ borderBottom: "1px solid #FFD700" }}
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* SECTION 4 — EMERGENCY BANNER */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#FFD700" }}
      >
        <div
          className="absolute inset-0 pointer-events-none select-none text-black/[0.04] text-2xl leading-[1.2] tracking-widest"
          aria-hidden
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}>{"✦ ".repeat(40)}</div>
          ))}
        </div>
        <div className="relative container py-8 lg:h-[120px] lg:py-0">
          <div className="grid h-full items-center gap-6 lg:grid-cols-[auto_1fr_auto]">
            <div className="hidden lg:flex h-20 w-20 items-center justify-center font-display font-black text-5xl text-black">
              FS
            </div>
            <div className="text-center lg:text-left">
              <p className="font-display font-bold text-2xl text-black lg:text-[28px]">Property Emergency?</p>
              <p className="text-gray-900 text-base">We respond in 2 hours. Available 24/7.</p>
            </div>
            <div className="flex items-center justify-center gap-4 lg:flex-col lg:items-end lg:justify-self-end">
              <a href={`tel:${SITE.phone}`} className="font-display font-black text-2xl text-black lg:text-[32px]">
                {SITE.phone}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="rounded-md bg-black px-5 py-2 text-sm font-bold uppercase tracking-wide text-white hover:bg-gray-900"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY FIVESERV */}
      <section className="relative" style={{ background: "#1A1A1A", ...DOT_GRID_DARK }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold">
              HOW WE DELIVER
            </p>
            <h2 className="mt-3 font-display font-bold text-3xl text-white sm:text-4xl">
              Why Choose FiveServ?
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_REASONS.map((r) => (
                <div
                  key={r.title}
                  className="rounded-lg p-6"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,215,0,0.15)",
                  }}
                >
                  <r.icon className="h-10 w-10 text-brand-gold" />
                  <h3 className="mt-4 font-display font-bold text-base text-white">{r.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{r.desc}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-md border-2 border-brand-gold bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-gold hover:bg-brand-gold hover:text-black transition-colors"
            >
              About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — CHECKLIST */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              What's Included
            </h2>
            <ul className="mx-auto mt-12 grid max-w-3xl gap-x-10 gap-y-3 sm:grid-cols-2">
              {config.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3" style={{ fontSize: 15, lineHeight: 1.8 }}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" />
                  <span className="text-gray-900">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <FaqAccordion faqs={config.faqs} emitSchema={false} />

      {/* SECTION 8 — REVIEWS */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex justify-center">
              <div className="max-w-md">
                <div
                  style={{
                    transform: "rotate(-2deg)",
                    borderRadius: 20,
                    border: "3px solid #FFD700",
                    overflow: "hidden",
                    background: "#1A1A1A",
                  }}
                >
                  <div
                    className="flex aspect-[4/5] items-center justify-center"
                    style={DOT_GRID_CARD}
                  >
                    <div
                      className="flex h-28 w-28 items-center justify-center rounded-full font-display font-black text-5xl"
                      style={{ background: "#FFD700", color: "#1A1A1A" }}
                    >
                      FS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ReviewsCarousel reviews={reviews} />
          </Reveal>
        </div>
      </section>

      {/* Extras (page-specific custom sections appended here) */}
      {config.extras}

      {/* SECTION 9 — CONTACT CTA */}
      <div className="relative" style={{ background: "#1A1A1A", ...DOT_GRID_DARK }}>
        <ContactCTA />
      </div>
    </>
  );
};

export default ServicePageLayout;
