import { Link } from "react-router-dom";
import Seo from "@/lib/Seo";
import { SITE } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";

/**
 * Thank You (B2B) — distraction-free conversion confirmation page.
 * No header. No footer. No nav. Only CTAs: phone + "See How We Work".
 */
export const ThankYouB2BPage = () => {
  const phone = SITE.phone;
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      <Seo
        title="Thank You — FiveServ Property Solutions"
        description="We received your request. A FiveServ team member will contact you within 2 business hours."
        path="/thank-you-b2b"
        noIndex
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12 text-center">
        <div className="mb-10">
          <div className="font-display text-3xl tracking-tight text-brand-black sm:text-4xl">
            <span className="text-brand-gold">F</span>iveServ
          </div>
          <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400 sm:text-xs">
            Property Solutions
          </div>
        </div>
        <h1 className="font-display text-4xl text-brand-black leading-tight sm:text-5xl">
          You're in good hands.
        </h1>
        <div className="mx-auto mt-6 h-[2px] w-24 bg-brand-gold" />
        <p className="mt-8 max-w-xl text-base text-gray-600 sm:text-lg">
          We received your request. A FiveServ team member will contact you within{" "}
          <span className="font-bold text-brand-black">2 business hours</span>.
        </p>
        <p className="mt-4 font-display italic text-brand-gold text-lg">
          One Call. One Team. Done.
        </p>
        <div className="mt-8 flex flex-col gap-3 text-left max-w-sm mx-auto">
          <Link to="/service-areas" className="text-sm font-medium text-gray-700 hover:text-brand-gold transition-colors underline underline-offset-2 decoration-brand-gold/40">
            See all cities we serve
          </Link>
          <Link to="/make-ready" className="text-sm font-medium text-gray-700 hover:text-brand-gold transition-colors underline underline-offset-2 decoration-brand-gold/40">
            Read how our Make-Ready process works
          </Link>
          <a
            href={`https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 hover:text-brand-gold transition-colors underline underline-offset-2 decoration-brand-gold/40"
          >
            Explore our full list of services
          </a>
        </div>
        <Link
          to="/make-ready"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-brand-black hover:bg-brand-gold/90 transition-colors"
        >
          See How We Work →
        </Link>
        <div className="mt-10">
          <p className="text-sm text-gray-500">Prefer to talk now?</p>
          <a href={telHref} className="mt-2 inline-block font-bold text-2xl text-brand-black hover:text-brand-gold transition-colors">
            {phone}
          </a>
        </div>
      </main>
    </>
  );
};

export default ThankYouB2BPage;
