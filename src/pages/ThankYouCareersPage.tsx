import { Link } from "react-router-dom";
import Seo from "@/lib/Seo";

/**
 * Thank You (Careers) — distraction-free confirmation page for job applicants.
 * No header. No footer. No nav.
 */
export const ThankYouCareersPage = () => {
  return (
    <>
      <Seo
        title="Application Received | FiveServ Careers"
        description="Thank you for your interest in joining FiveServ Property Solutions. We will review your information and reach out when the right opportunity opens up."
        path="/thank-you-careers"
        noIndex
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-brand-black px-6 py-12 text-center">
        <div className="mb-10">
          <div className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="text-brand-gold">F</span>iveServ
          </div>
          <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500 sm:text-xs">
            Property Solutions
          </div>
        </div>
        <p className="text-[13px] font-black uppercase tracking-[0.15em] text-brand-gold mb-4">
          — Application Received
        </p>
        <h1 className="font-display text-4xl text-white leading-tight sm:text-5xl">
          We Got Your Information.{" "}
          <span className="text-brand-gold">We Will Be in Touch.</span>
        </h1>
        <div className="mx-auto mt-6 h-[2px] w-24 bg-brand-gold" />
        <p className="mt-8 max-w-xl text-base text-gray-300 sm:text-lg">
          Thank you for your interest in joining the FiveServ team. We review every submission personally. If there is a fit we will reach out directly.
        </p>
        <Link
          to="/about"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-brand-black hover:bg-brand-gold/90 transition-colors"
        >
          Learn More About FiveServ →
        </Link>
      </main>
    </>
  );
};

export default ThankYouCareersPage;
