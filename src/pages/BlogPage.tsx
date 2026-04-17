import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";

const BlogPage = () => (
  <>
    <Seo
      title="Blog | FiveServ Property Solutions Orlando FL"
      description="Insights for Central Florida property managers. Make-ready playbooks, CapEx ROI breakdowns, and maintenance benchmarks. Launching soon."
      path="/blog"
    />
    <SchemaOrg
      breadcrumbs={[
        { name: "Home", url: SITE.url },
        { name: "Blog", url: `${SITE.url}/blog` },
      ]}
    />
    <section className="bg-brand-black pt-32 pb-24">
      <div className="container max-w-3xl">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
          <BookOpen className="h-6 w-6" />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-wide text-brand-gold">{SITE.brand} Blog</p>
        <h1 className="mt-3 font-display text-4xl text-brand-white sm:text-5xl">
          Insights for Property Managers — <span className="text-brand-gold">Launching Soon</span>
        </h1>
        <p className="mt-6 text-brand-white/80">
          We're building a library of make-ready playbooks, CapEx ROI breakdowns, and maintenance benchmarks
          drawn from 300+ units turned across Central Florida. Want to be notified when the first post drops?
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="cta-gold inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
          >
            Get Notified <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 rounded-md border border-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-gold hover:bg-brand-gold/10"
          >
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default BlogPage;
