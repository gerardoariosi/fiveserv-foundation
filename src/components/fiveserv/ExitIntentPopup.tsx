import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Clock, BadgeCheck, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BrandName from "@/components/fiveserv/BrandName";

const KEY = "exit_intent_shown";
const SUPPRESSED_PATHS = ["/thank-you-b2b", "/thank-you-residential", "/contact"];

type Offer = {
  headline: string;
  body: string;
  /** Short highlighted offer line shown in the gold-accent box. */
  offerLine: string;
  ctaLabel: string;
  ctaHref: string;
};

const getOffer = (pathname: string): Offer | null => {
  const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";

  if (SUPPRESSED_PATHS.some((p) => path.startsWith(p))) return null;

  if (path === "/" || path === "/make-ready") {
    return {
      headline: "Before you go — grab your free checklist",
      body: "Our 40-point Make-Ready Checklist used by property managers across Central Florida.",
      offerLine: "Free download · 40-point Make-Ready Checklist",
      ctaLabel: "Download free checklist",
      ctaHref: "/make-ready",
    };
  }

  if (path === "/maintenance") {
    return {
      headline: "Before you go — get our Vendor Scorecard",
      body: "See exactly what to look for before you sign with any maintenance vendor.",
      offerLine: "Free download · Vendor Scorecard",
      ctaLabel: "Get free Vendor Scorecard",
      ctaHref: "/#lead-magnets",
    };
  }

  // City pages: /maintenance-[city]-fl
  if (/^\/maintenance-[a-z0-9-]+-fl$/.test(path)) {
    return {
      headline: "Get a free quote before you go",
      body: "Our team covers your area and responds within 2 business hours.",
      offerLine: "Free quote · 2-hour response in your area",
      ctaLabel: "Get a free quote",
      ctaHref: "/contact",
    };
  }

  const servicePages = [
    "/plumbing", "/electrical", "/hvac", "/drywall", "/painting",
    "/flooring", "/carpentry", "/cleaning", "/renovations", "/residential",
  ];
  if (servicePages.some((p) => path === p || path.startsWith(p + "/"))) {
    return {
      headline: "We offer free estimates — no commitment",
      body: "One call and our team handles everything. No surprises on the invoice.",
      offerLine: "Free estimate · No commitment",
      ctaLabel: "Get a free estimate",
      ctaHref: "/contact",
    };
  }

  return {
    headline: "One call handles everything",
    body: "Make-ready in 5 days. Guaranteed in writing. One invoice. No excuses.",
    offerLine: "Free quote · 5-day make-ready guarantee",
    ctaLabel: "Get a free quote",
    ctaHref: "/contact",
  };
};

const isMobileViewport = () =>
  typeof window !== "undefined" &&
  (window.matchMedia?.("(max-width: 768px)").matches ?? window.innerWidth < 768);

/**
 * ExitIntentPopup — page-aware exit-intent offer.
 * Desktop: cursor leaves through top. Mobile: 45s inactivity or back-button.
 * Shows once per session.
 */
export const ExitIntentPopup = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const offer = getOffer(pathname);

  useEffect(() => {
    if (!offer) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY) === "1") return;

    let inactivityTimer: number | undefined;
    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      if (sessionStorage.getItem(KEY) === "1") return;
      triggered = true;
      sessionStorage.setItem(KEY, "1");
      setOpen(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 10 && !e.relatedTarget) trigger();
    };

    const resetInactivity = () => {
      if (inactivityTimer) window.clearTimeout(inactivityTimer);
      inactivityTimer = window.setTimeout(trigger, 45000);
    };

    const onPopState = () => {
      if (isMobileViewport()) trigger();
    };

    if (isMobileViewport()) {
      window.history.pushState({ exitGuard: true }, "");
      window.addEventListener("popstate", onPopState);
      ["touchstart", "scroll", "click", "keydown"].forEach((evt) =>
        window.addEventListener(evt, resetInactivity, { passive: true }),
      );
      resetInactivity();
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("popstate", onPopState);
      ["touchstart", "scroll", "click", "keydown"].forEach((evt) =>
        window.removeEventListener(evt, resetInactivity),
      );
      if (inactivityTimer) window.clearTimeout(inactivityTimer);
    };
  }, [pathname, offer]);

  const close = () => {
    sessionStorage.setItem(KEY, "1");
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 180);
  };

  if (!offer || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-headline"
      onClick={close}
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 transition-opacity duration-200 ease-out ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <style>{`
        @keyframes exitPopupIn {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[90%] max-w-[480px] bg-white rounded-2xl p-8 sm:p-10 transition-all duration-200 ease-out ${
          closing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
        style={{
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          animation: closing ? undefined : "exitPopupIn 220ms ease-out",
        }}
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Eyebrow */}
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold">
          <BrandName variant="dark" /> · Property Solutions
        </p>

        {/* Headline */}
        <h2
          id="exit-intent-headline"
          className="font-display mt-2 text-gray-900"
          style={{
            fontSize: "24px",
            lineHeight: 1.2,
            fontWeight: 700,
            marginBottom: "8px",
            paddingRight: "32px",
          }}
        >
          {offer.headline}
        </h2>

        {/* Body */}
        <p
          className="text-gray-600"
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            marginBottom: "24px",
          }}
        >
          {offer.body}
        </p>

        {/* Gold accent offer box */}
        <div
          className="text-gray-800 font-medium text-sm"
          style={{
            borderLeft: "4px solid #FFD700",
            backgroundColor: "#FFFBEA",
            borderRadius: "0 8px 8px 0",
            padding: "12px 16px",
            marginBottom: "24px",
          }}
        >
          {offer.offerLine}
        </div>

        {/* Primary CTA */}
        <Link
          to={offer.ctaHref}
          onClick={close}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-3 text-[15px] font-semibold text-brand-black transition-colors duration-200 hover:bg-[#ECC900]"
        >
          {offer.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Secondary "no thanks" link */}
        <button
          type="button"
          onClick={close}
          className="mt-3 block w-full text-center text-[13px] text-gray-400 underline hover:text-gray-600 transition-colors"
        >
          No thanks
        </button>

        {/* Divider */}
        <div
          aria-hidden="true"
          style={{
            borderTop: "1px solid #F3F4F6",
            margin: "20px 0 16px",
          }}
        />

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3 w-3 text-brand-gold" />
            Licensed &amp; Insured
          </span>
          <span aria-hidden="true" className="text-gray-300">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-brand-gold" />
            24/7 Available
          </span>
          <span aria-hidden="true" className="text-gray-300">·</span>
          <span className="inline-flex items-center gap-1.5">
            <BadgeCheck className="h-3 w-3 text-brand-gold" />
            5-Day Guarantee
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
