import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES, CITIES } from "@/lib/site-config";
import type { BlogPost } from "@/lib/blog-data";
import ContactCTA from "./ContactCTA";

type Props = {
  post: BlogPost;
  children: React.ReactNode;
};

/**
 * BlogArticleLayout — wraps every blog article with:
 *   - Seo + BlogPosting + FAQPage + BreadcrumbList schemas
 *   - Hero (title, category, read time, TL;DR box)
 *   - Article body slot (children)
 *   - Internal links (3+ services, 2+ cities, /contact/)
 *   - FAQ mini section
 *   - Final CTA + ContactCTA form
 */
export const BlogArticleLayout = ({ post, children }: Props) => {
  const url = `${SITE.url}/blog/${post.slug}`;
  const linkedCities = CITIES.slice(0, 2);

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Blog", url: `${SITE.url}/blog` },
          { name: post.title, url },
        ]}
        blog={{
          title: post.title,
          description: post.metaDescription,
          url,
          datePublished: post.datePublished,
          author: SITE.legal,
        }}
        faqs={post.faqs}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-12">
        <div className="container max-w-3xl">
          <Link
            to="/blog"
            className="text-xs font-bold uppercase tracking-wider text-brand-gold hover:underline"
          >
            ← Back to Blog
          </Link>
          <p className="mt-6 inline-block rounded bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-gold">
            {post.category.replace(/-/g, " ")}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-brand-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-brand-gray-muted">
            <span>FiveServ Property Solutions</span>
            <span aria-hidden="true">•</span>
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {post.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="bg-brand-black pb-12">
        <div className="container max-w-3xl">
          <div className="rounded-lg border-l-4 border-brand-gold bg-brand-gray/40 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">TL;DR</p>
            <p className="mt-2 text-base leading-relaxed text-brand-white">{post.tldr}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-brand-black pb-16">
        <div className="container max-w-3xl prose-blog text-brand-white">
          {children}
        </div>
      </article>

      {/* Internal links cluster */}
      <section className="bg-brand-gray/30 py-12">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl text-brand-white">Related FiveServ resources</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="rounded-md border border-brand-gold/30 bg-brand-black p-4 text-sm text-brand-white hover:border-brand-gold"
              >
                <span className="font-bold text-brand-gold">{s.name}</span>
                <p className="mt-1 text-brand-gray-muted">{s.short}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {linkedCities.map((c) => (
              <Link
                key={c.slug}
                to={`/maintenance-${c.slug}`}
                className="rounded-md border border-brand-gold/30 bg-brand-black p-4 text-sm text-brand-white hover:border-brand-gold"
              >
                <span className="font-bold text-brand-gold">
                  Maintenance in {c.name}, {c.state}
                </span>
                <p className="mt-1 text-brand-gray-muted">{c.zones}</p>
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="cta-gold mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
          >
            Contact FiveServ <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ mini */}
      <section className="bg-brand-black py-16">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl text-brand-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {post.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-lg text-brand-gold">{f.q}</h3>
                <p className="mt-2 text-brand-white/80">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="bg-brand-gold py-12 text-center text-brand-black">
        <div className="container max-w-3xl">
          <p className="font-display text-2xl sm:text-3xl">
            Need make-ready services in Central Florida?
          </p>
          <p className="mt-2 text-base">
            Get a free quote at{" "}
            <Link to="/contact" className="underline">
              fiveserv.net
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Form */}
      <ContactCTA />
    </>
  );
};

export default BlogArticleLayout;
