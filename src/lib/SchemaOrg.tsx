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
      "@type": ["Organization", "LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      legalName: SITE.legal,
      alternateName: SITE.brand,
      url: SITE.url,
      logo: `${SITE.url}/images/logo-fs.webp`,
      image: `${SITE.url}/og-default.png`,
      description:
        "Full-service property maintenance and handyman company in Orlando, FL serving property managers and homeowners across Central Florida. Services include property maintenance and repairs, handyman services, bathroom remodeling, kitchen remodeling, interior and exterior painting, flooring installation, cleaning services, make-ready unit turns, plumbing, electrical, HVAC, drywall, carpentry, and CapEx renovations. One call, one team, one invoice.",
      foundingLocation: "Orlando, Florida",
      slogan: "One Call. One Team. Done.",
      email: SITE.email,
      telephone: SITE.phone,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.baseCity,
        addressRegion: SITE.baseState,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.5383",
        longitude: "-81.3792",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: CITIES.map((c) => `${c.name} ${c.state}`),
      sameAs: [
        "https://www.facebook.com/FiveServ",
        "https://www.instagram.com/fiveservps/",
        "https://www.linkedin.com/company/fiveserv-property-solutions/",
        "https://www.yelp.com/biz/fiveserv-property-solutions-orlando",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Property Maintenance Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Maintenance and Repairs", url: `${SITE.url}/maintenance` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Handyman Services", url: `${SITE.url}/handyman-orlando` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodel", url: `${SITE.url}/bathroom-remodel` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodel and Renovation", url: `${SITE.url}/kitchen-remodel` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior and Exterior Painting", url: `${SITE.url}/painting` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation", url: `${SITE.url}/flooring` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cleaning Services", url: `${SITE.url}/cleaning` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "CapEx and Renovations", url: `${SITE.url}/renovations` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Home Maintenance", url: `${SITE.url}/residential` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Make-Ready and Unit Turns", url: `${SITE.url}/make-ready` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Services", url: `${SITE.url}/plumbing` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Services", url: `${SITE.url}/electrical` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC and AC Repair", url: `${SITE.url}/hvac` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair and Installation", url: `${SITE.url}/drywall` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpentry Services", url: `${SITE.url}/carpentry` } },
        ],
      },
      knowsAbout: [
        "Property Maintenance",
        "Handyman Services",
        "Home Repair Orlando",
        "Bathroom Remodel Orlando",
        "Kitchen Remodel Orlando",
        "Interior Painting",
        "Exterior Painting",
        "Flooring Installation",
        "Luxury Vinyl Plank",
        "Cleaning Services",
        "Plumbing Repair",
        "Electrical Services",
        "HVAC Repair",
        "Drywall Repair",
        "Carpentry Services",
        "Make-Ready Unit Turns",
        "CapEx Renovations",
        "Multifamily Property Maintenance",
        "Central Florida Property Maintenance",
        "Orlando Property Maintenance",
      ],
      hasMap: "https://maps.google.com/?cid=fiveserv-property-solutions",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+14078814942",
          contactType: "customer service",
          availLanguage: ["English", "Spanish"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
          contactOption: "TollFree",
          areaServed: "US",
        },
        {
          "@type": "ContactPoint",
          telephone: "+14078814942",
          contactType: "emergency",
          availLanguage: ["English", "Spanish"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "License",
          name: "Licensed Contractor Florida",
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "State of Florida",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Insurance",
          name: "General Liability Insurance",
          description: "Fully insured in the State of Florida",
        },
      ],
    });

    // 1b. WebSite + SearchAction — homepage only
    blocks.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: "Licensed property maintenance and home services in Orlando FL and Central Florida",
      publisher: { "@id": `${SITE.url}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
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

  // 5. LocalBusiness + HomeAndConstructionBusiness per city — expanded with hasOfferCatalog (14 services)
  if (city) {
    const cityOffer = (name: string, description: string) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, description },
    });
    blocks.push({
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `https://fiveserv.net/maintenance-${city.slug}`,
      name: "FiveServ Property Solutions",
      description: `Licensed and insured property maintenance and home services company in ${city.name}, FL serving homeowners and property managers across Central Florida.`,
      url: `https://fiveserv.net/maintenance-${city.slug}`,
      telephone: "+14078814942",
      email: "info@fiveserv.net",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: city.state,
        postalCode: city.zips[0],
        addressCountry: "US",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "State", name: "Florida" },
      },
      additionalProperty: city.zips.map((z) => ({ "@type": "PropertyValue", name: "zipCode", value: z })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Home Services in ${city.name} FL`,
        itemListElement: [
          cityOffer("Property Maintenance and Repairs", `Licensed property maintenance and repair services in ${city.name} FL. Work orders, emergency repairs, preventive maintenance. Available 24/7.`),
          cityOffer("Handyman Services", `Professional handyman services in ${city.name} FL. Plumbing fixtures, drywall, painting, tile, carpentry, ceiling fans. Most jobs $150-$400.`),
          cityOffer("Bathroom Remodel", `Full bathroom remodeling in ${city.name} FL. Tile, vanity, shower, plumbing fixtures. Licensed and insured.`),
          cityOffer("Kitchen Remodel", `Kitchen remodeling in ${city.name} FL. Cabinets, countertops, backsplash, appliances, lighting.`),
          cityOffer("Interior and Exterior Painting", `Professional painting services in ${city.name} FL. Interior, exterior, cabinets, trim. Licensed and insured.`),
          cityOffer("Flooring Installation", `Flooring installation in ${city.name} FL. LVP, tile, laminate, carpet, epoxy. All types.`),
          cityOffer("Cleaning Services", `Professional cleaning services in ${city.name} FL. Move-out, move-in, deep clean, post-construction.`),
          cityOffer("Plumbing Services", `Licensed plumbing services in ${city.name} FL. Faucets, toilets, leaks, drains, water heaters.`),
          cityOffer("Electrical Services", `Licensed electrical services in ${city.name} FL. Outlets, switches, ceiling fans, lighting installation.`),
          cityOffer("HVAC and AC Repair", `HVAC and AC repair services in ${city.name} FL. AC repair, maintenance, thermostat installation. Available 24/7.`),
          cityOffer("Drywall Repair and Installation", `Drywall repair and installation in ${city.name} FL. Patching, crack repair, water damage, texture matching.`),
          cityOffer("Carpentry Services", `Professional carpentry in ${city.name} FL. Baseboards, crown molding, doors, shelving, trim work.`),
          cityOffer("Make-Ready and Unit Turns", `Make-ready and unit turn services in ${city.name} FL. Full unit turnover guaranteed in 5 business days.`),
          cityOffer("CapEx and Renovations", `CapEx and renovation projects in ${city.name} FL. Large-scale property improvements that increase value.`),
        ],
      },
      sameAs: [
        "https://www.instagram.com/fiveservps/",
        "https://www.facebook.com/FiveServ",
        "https://www.linkedin.com/company/fiveserv-property-solutions/",
        "https://www.yelp.com/biz/fiveserv-property-solutions-orlando",
      ],
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

  // 9. AggregateRating — 4 verified Google reviews, all 5 stars
  if (aggregateRating) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      itemReviewed: { "@type": "Organization", name: SITE.legal },
      ratingValue: "5.0",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1",
      sameAs: "https://g.page/r/fiveserv-property-solutions",
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
