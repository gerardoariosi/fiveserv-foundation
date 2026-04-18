import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-data";
import BrandName from "@/components/fiveserv/BrandName";

const BlogPage = () => {
  const [activeCat, setActiveCat] = useState<BlogCategory | "all">("all");

  const visiblePosts = useMemo(
    () => (activeCat === "all" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeCat)),
    [activeCat],
  );

  return (
    <>
      <Seo
        title="Property Maintenance Blog | FiveServ Property Solutions Central Florida"
        description="Property management maintenance insights for Central Florida: make-ready playbooks, CapEx ROI, vendor consolidation, and 2025 pricing benchmarks from FiveServ."
        path="/blog"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Blog", url: `${SITE.url}/blog` },
        ]}
      />
      {/* Blog collection schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            url: `${SITE.url}/blog`,
            name: "FiveServ Property Solutions — Property Management Maintenance Insights",
            blogPost: BLOG_POSTS.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${SITE.url}/blog/${p.slug}`,
              datePublished: p.datePublished,
              author: { "@type": "Organization", name: SITE.legal },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-12">
        <div className="container max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
            <span style={{ whiteSpace: "nowrap" }}>
              <span className="text-brand-gold font-bold">F</span>
              <span className="text-brand-white">iveServ</span>
            </span>{" "}
            Insights
          </p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Property Management Maintenance Insights — Central Florida
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Make-ready playbooks, CapEx ROI breakdowns, maintenance benchmarks, and the
            on-the-ground guides we use to turn 300+ units a year across Orlando, Kissimmee,
            and the I-4 corridor.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 z-30 border-y border-brand-gold/20 bg-brand-black/95 backdrop-blur">
        <div className="container max-w-5xl py-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCat("all")}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                activeCat === "all"
                  ? "bg-brand-gold text-gray-900"
                  : "border border-brand-gold/40 text-brand-white hover:border-brand-gold"
              }`}
            >
              All
            </button>
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveCat(c.slug)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                  activeCat === c.slug
                    ? "bg-brand-gold text-gray-900"
                    : "border border-brand-gold/40 text-brand-white hover:border-brand-gold"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-16">
        <div className="container max-w-5xl">
          {visiblePosts.length === 0 ? (
            <p className="text-brand-gray-muted">More articles coming soon in this category.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-brand-gold/20 bg-white border border-gray-100 shadow-sm transition hover:border-brand-gold"
                >
                  <div
                    className="aspect-[16/9] w-full bg-brand-gray"
                    style={{
                      backgroundImage: post.image
                        ? `url(${post.image})`
                        : `linear-gradient(135deg, hsl(var(--brand-gray)) 0%, hsl(var(--brand-black)) 100%)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="self-start rounded bg-brand-gold/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-900">
                      {BLOG_CATEGORIES.find((c) => c.slug === post.category)?.label}
                    </span>
                    <h2 className="mt-3 font-display text-lg text-gray-900 group-hover:text-gray-900">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-brand-gray-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-gray-900 group-hover:text-gray-900">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
