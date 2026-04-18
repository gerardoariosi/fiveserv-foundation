import { Link } from "react-router-dom";
import Seo from "@/lib/Seo";
import { SITE } from "@/lib/site-config";

/**
 * Thank You (Residential) — distraction-free conversion confirmation page.
 * No header. No footer. No nav. Only CTAs: phone + "See Our Services".
 */
export const ThankYouResidentialPage = () => {
  const phone = SITE.phone;
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      <Seo
        title="Thank You — FiveServ Property Solutions"
        description="We got your request. Someone from our team will reach out within 2 hours to schedule your free estimate."
        path="/thank-you-residential"
        noIndex
      />

      <main className="flex min-h-screen flex-col items-center justify-center bg-brand-black px-6 py-12 text-center text-white">
        {/* Logo wordmark */}
        <div className="mb-12 select-none">
          <div className="font-display text-3xl tracking-tight sm:text-4xl">
            <span className="text-brand-gold">F</span>
            <span className="text-white">iveServ</span>
          </div>
          <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gray-muted sm:text-xs">
            Property Solutions
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          We got your request!
        </h1>

        {/* Gold accent line */}
        <div className="mx-auto mt-6 h-[2px] w-24 bg-brand-gold" aria-hidden="true" />

        {/* Subtext */}
        <p className="mt-8 max-w-xl text-base text-brand-gray-muted sm:text-lg">
          Someone from our team will reach out within{" "}
          <span className="font-bold text-white">2 hours</span> to schedule your free estimate.
        </p>

        {/* Tagline */}
        <p className="mt-6 font-display italic text-brand-gold text-lg sm:text-xl">
          We show up. We finish. We deliver.
        </p>

        {/* Primary CTA */}
        <Link
          to="/residential"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-4 font-display text-base text-gray-900 transition-colors hover:bg-brand-gold-hover sm:text-lg"
        >
          See Our Services →
        </Link>

        {/* Phone CTA */}
        <div className="mt-12">
          <p className="text-sm text-brand-gray-muted">Can't wait? Call us now.</p>
          <a
            href={telHref}
            className="mt-2 inline-block font-display text-2xl text-brand-gold hover:text-brand-gold-hover sm:text-3xl"
          >
            {phone}
          </a>
        </div>
      </main>
    </>
  );
};

export default ThankYouResidentialPage;
