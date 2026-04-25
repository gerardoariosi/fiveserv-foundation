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
        {/* Logo wordmark */}
        <div className="mb-12 select-none">
          <div className="font-display text-3xl tracking-tight sm:text-4xl">
            <span className="text-brand-gold">F</span>
            <span className="text-brand-black">iveServ</span>
          </div>
          <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500 sm:text-xs">
            Property Solutions
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl leading-tight text-brand-black sm:text-5xl md:text-6xl">
          You're in good hands.
        </h1>

        {/* Gold accent line */}
        <div className="mx-auto mt-6 h-[2px] w-24 bg-brand-gold" aria-hidden="true" />

        {/* Subtext */}
        <p className="mt-8 max-w-xl text-base text-gray-600 sm:text-lg">
          We received your request. A <BrandName variant="dark" /> team member will contact you within{" "}
          <span className="font-bold text-brand-black">2 business hours</span>.
        </p>

        {/* Next steps */}
        <div className="mt-8 flex flex-col gap-3 text-left max-w-sm mx-auto">
          {[
            { step: "01", text: "Check your email — confirmation on its way" },
            { step: "02", text: "We call within 2 business hours" },
            { step: "03", text: "We schedule a site visit or send a quote" },
          ].map(({ step, text }) => (
            <div key={step} className="flex items-start gap-3">
              <span className="text-brand-gold font-bold text-sm mt-0.5">{step}</span>
              <span className="text-sm text-gray-600">{text}</span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-6 font-display italic text-brand-gold text-lg sm:text-xl">
          One Call. One Team. Done.
        </p>

        {/* Primary CTA */}
        <Link
          to="/make-ready"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 font-display text-base text-brand-black transition-colors hover:bg-brand-gold-hover sm:text-lg"
        >
          See How We Work →
        </Link>

        {/* Phone CTA */}
        <div className="mt-12">
          <p className="text-sm text-gray-500">Prefer to talk now? Call us directly.</p>
          <a
            href={telHref}
            className="mt-2 inline-block font-bold text-2xl text-brand-black hover:text-gray-700 sm:text-3xl"
          >
            {phone}
          </a>
          <div>
            <a
              href={`https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-2 text-sm text-gray-700 hover:border-brand-gold hover:text-brand-black transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default ThankYouB2BPage;
