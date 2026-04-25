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
          We got your request!
        </h1>
        <div className="mx-auto mt-6 h-[2px] w-24 bg-brand-gold" />
        <p className="mt-8 max-w-xl text-base text-gray-600 sm:text-lg">
          Someone from our team will reach out within{" "}
          <span className="font-bold text-brand-black">2 hours</span> to schedule your free estimate.
        </p>
        <p className="mt-4 font-display italic text-brand-gold text-lg">
          We show up. We finish. We deliver.
        </p>
        <Link
          to="/residential"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-brand-black hover:bg-brand-gold/90 transition-colors"
        >
          See Our Services →
        </Link>
        <div className="mt-10">
          <p className="text-sm text-gray-500">Can't wait? Call us now.</p>
          <a href={telHref} className="mt-2 inline-block font-bold text-2xl text-brand-black hover:text-brand-gold transition-colors">
            {phone}
          </a>
        </div>
      </main>
    </>
  );
};

export default ThankYouResidentialPage;
