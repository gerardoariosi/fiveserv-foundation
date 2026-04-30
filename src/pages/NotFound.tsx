import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";
import Seo from "@/lib/Seo";

/** Custom 404 — branded, with logo, CTA, phone */
const NotFound = () => {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist. Call FiveServ Property Solutions." path="/404" noIndex />
      <section className="bg-brand-black pt-stack pb-24">
        <div className="container text-center">
          <Link to="/" className="font-display text-4xl">
            <span className="text-brand-gold">F</span>
            <span className="text-brand-white">iveServ</span>
          </Link>
          <h1 className="mt-12 font-display text-6xl text-brand-white">
            404 <span className="text-brand-gold">— Page Not Found</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-brand-white/80">
            That page doesn't exist. We do, though. Call us. We answer.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/" className="cta-gold btn-shimmer rounded-md px-6 py-3 font-bold uppercase tracking-wide">
              Back to Home
            </Link>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 rounded-md border-2 border-brand-gold px-6 py-3 font-bold uppercase tracking-wide text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
