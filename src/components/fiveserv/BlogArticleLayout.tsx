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

      {/* Hero — dark */}
      <section className="bg-brand-black pt-32 pb-12">
        <div className="container max-w-3xl">
          <Link
            to="/blog"
            className="text-xs font-bold uppercase tracking-widest text-amber-700 hover:underline"
          >
            ← Back to Blog
          </Link>
          <p className="mt-6 inline-block rounded bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700">
            {post.category.replace(/-/g, " ")}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-brand-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-brand-gray-muted">
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

      {/* TL;DR — light */}
      <section className="bg-white pt-12">
        <div className="container max-w-3xl">
          <div className="rounded-xl border-l-4 border-brand-gold bg-gray-50 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">TL;DR</p>
            <p className="mt-2 text-base leading-relaxed text-brand-black">{post.tldr}</p>
          </div>
        </div>
      </section>

      {/* Body — light */}
      <article className="bg-white pb-16 pt-8">
        <div className="container max-w-3xl prose-blog text-brand-black">
          {children}
        </div>
      </article>

      {/* Internal links — light gray */}
      <section className="bg-gray-50 py-16">
        <div className="container max-w-3xl">
          <p className="text-gray-900 text-xs font-medium uppercase tracking-[0.12em] mb-3">— Keep Reading</p>
          <h2 className="text-gray-900 font-display font-bold text-3xl lg:text-4xl">Related FiveServ resources</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="rounded-xl border border-gray-100 bg-white p-4 text-sm transition-all hover:border-brand-gold hover:shadow-sm"
              >
                <span className="font-bold text-brand-black">{s.name}</span>
                <p className="mt-1 text-gray-600">{s.short}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {linkedCities.map((c) => (
              <Link
                key={c.slug}
                to={`/maintenance-${c.slug}`}
                className="rounded-xl border border-gray-100 bg-white p-4 text-sm transition-all hover:border-brand-gold hover:shadow-sm"
              >
                <span className="font-bold text-brand-black">
                  Maintenance in {c.name}, {c.state}
                </span>
                <p className="mt-1 text-gray-600">{c.zones}</p>
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="cta-dark mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
          >
            Contact FiveServ <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ mini — light */}
      <section className="bg-white py-16">
        <div className="container max-w-3xl">
          <p className="text-gray-900 text-xs font-medium uppercase tracking-[0.12em] mb-3">— FAQ</p>
          <h2 className="text-gray-900 font-display font-bold text-3xl lg:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {post.faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold text-brand-black">{f.q}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — gold */}
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

      <ContactCTA />
    </>
  );
};

export default BlogArticleLayout;
