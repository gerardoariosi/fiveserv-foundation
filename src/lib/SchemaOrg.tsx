import { Helmet } from "react-helmet-async";
import { SITE, SERVICES, CITIES, TEAM } from "./site-config";

/**
 * SchemaOrg — injects all 9 JSON-LD schemas via react-helmet.
 * Pass the `schemas` array of which to render on the current page.
 */

type Crumb = { name: string; url: string };

type SchemaProps = {
  /** BreadcrumbList — required on every page */
  breadcrumbs?: Crumb[];
  /** Render Organization + LocalBusiness — homepage */
  organization?: boolean;
  /** Render Service schema for a single service */
  service?: (typeof SERVICES)[number];
  /** Render LocalBusiness for a single city page */
  city?: (typeof CITIES)[number];
  /** Render FAQPage with array of Q/A */
  faqs?: { q: string; a: string }[];
  /** Render Person schemas (About page) */
  team?: typeof TEAM;
  /** Render BlogPosting */
  blog?: { title: string; description: string; url: string; datePublished: string; author?: string };
  /** Render HowTo (make-ready process) */
  howTo?: { name: string; steps: { name: string; text: string }[] };
  /** Render AggregateRating placeholder */
  aggregateRating?: boolean;
};

export const SchemaOrg = ({
  breadcrumbs,
  organization,
  service,
  city,
  faqs,
  team,
  blog,
  howTo,
  aggregateRating,
}: SchemaProps) => {
  const blocks: object[] = [];

  // 1. Organization + LocalBusiness — entity-building schema (AEO)
  if (organization) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      legalName: SITE.legal,
      alternateName: SITE.brand,
      url: SITE.url,
      logo: `${SITE.url}/images/logo-fs.png`,
      image: `${SITE.url}/images/og-default.jpg`,
      description:
        "Family-owned property maintenance company serving multifamily communities across Central Florida. Make-ready in 5 business days guaranteed. One call, one team, one invoice.",
      foundingLocation: "Orlando, Florida",
      slogan: SITE.tagline,
      email: SITE.email,
      telephone: SITE.phone,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.baseCity,
        addressRegion: SITE.baseState,
        addressCountry: "US",
      },
      areaServed: CITIES.map((c) => `${c.name} ${c.state}`),
      sameAs: [
        "https://www.facebook.com/FiveServ",
        "https://www.instagram.com/FiveServ",
        "https://www.linkedin.com/company/fiveserv",
        "https://g.co/kgs/fiveserv",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Property Maintenance Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Make-Ready / Unit Turns", url: `${SITE.url}/make-ready/` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Maintenance & Repairs", url: `${SITE.url}/maintenance/` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "CapEx & Renovations", url: `${SITE.url}/renovations/` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Services", url: `${SITE.url}/residential/` } },
        ],
      },
    });
  }

  // 2. Service
  if (service) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.name,
      provider: { "@type": "Organization", name: SITE.legal, url: SITE.url },
      areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
      description: service.description,
    });
  }

  // 3. FAQPage
  if (faqs && faqs.length > 0) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  // 4. BreadcrumbList — every page
  if (breadcrumbs && breadcrumbs.length > 0) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    });
  }

  // 5. LocalBusiness per city
  if (city) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `${SITE.brand} — ${city.name}, ${city.state}`,
      url: `${SITE.url}/maintenance-${city.slug}`,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: city.state,
        postalCode: city.zips[0],
        addressCountry: "US",
      },
      areaServed: { "@type": "City", name: `${city.name}, ${city.state}` },
      additionalProperty: city.zips.map((z) => ({ "@type": "PropertyValue", name: "zipCode", value: z })),
    });
  }

  // 6. Person x5
  if (team && team.length > 0) {
    team.forEach((p) => {
      blocks.push({
        "@context": "https://schema.org",
        "@type": "Person",
        name: p.name,
        jobTitle: p.role,
        worksFor: { "@type": "Organization", name: SITE.legal },
        image: `${SITE.url}${p.photo}`,
      });
    });
  }

  // 7. BlogPosting
  if (blog) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      url: blog.url,
      datePublished: blog.datePublished,
      author: { "@type": "Organization", name: SITE.legal },
      publisher: { "@type": "Organization", name: SITE.legal, logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` } },
    });
  }

  // 8. HowTo
  if (howTo) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: howTo.name,
      step: howTo.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    });
  }

  // 9. AggregateRating — placeholder
  if (aggregateRating) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      itemReviewed: { "@type": "Organization", name: SITE.legal },
      ratingValue: "5.0",
      reviewCount: "1",
      bestRating: "5",
      worstRating: "1",
      // [PLACEHOLDER] — replace with real reviews from Google Business Profile
    });
  }

  return (
    <Helmet>
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  );
};

export default SchemaOrg;
