import { Layers, Paintbrush, Hammer, Wrench, Sparkles } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { RENOVATIONS_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";

const RenovationsPage = () => {
  const path = "/renovations";
  const title = "Property Renovation Central Florida | Increase NOI | FiveServ";
  const description =
    "CapEx and renovation services for multifamily and commercial properties in Central Florida. Kitchen, bath, flooring, common areas. Projects designed to lift NOI.";
  const service = SERVICES.find((s) => s.slug === "renovations")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Renovations", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={RENOVATIONS_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "CapEx & Renovations",
          h1: "Renovations Built to Lift NOI",
          description: "CapEx projects that move the numbers. Built for property managers who track returns, not promises.",
          heroImage: "/images/renovation-project.jpg",
          offer: { title: "Plan Your CapEx Project", desc: "Free walk-through, line-item scope, and projected uplift. No pressure." },
          intro: {
            h2: "Renovations with a return.",
            body: "We renovate occupied and vacant units, common areas, exteriors, and full repositioning packages. Every scope is built with NOI in mind — what we touch, what we leave alone, and what the rent comp justifies. You get a project that pays back, not a wishlist.",
            emphasis: "Designed for property managers who track the spreadsheet.",
          },
          ourServices: [
            { name: "Flooring", href: "/flooring", icon: Layers },
            { name: "Painting", href: "/painting", icon: Paintbrush },
            { name: "Carpentry", href: "/carpentry", icon: Hammer },
            { name: "Plumbing", href: "/plumbing", icon: Wrench },
            { name: "Cleaning", href: "/cleaning", icon: Sparkles },
          ],
          subServices: [
            { name: "Kitchen Renovations", desc: "Cabinet refacing, countertops, hardware, appliances. Tuned for rent comp.", href: "/renovations" },
            { name: "Bathroom Renovations", desc: "Tile, vanities, fixtures, glass. Cost-controlled, lease-driver upgrades.", href: "/renovations" },
            { name: "Common Areas & Amenities", desc: "Leasing offices, clubhouses, fitness rooms, mail rooms, hallways.", href: "/renovations" },
            { name: "Exterior & Curb Appeal", desc: "Paint, signage, lighting, landscaping touch-ups that lift first impression.", href: "/renovations" },
          ],
          checklist: [
            "Free on-site CapEx walk-through",
            "Line-item scope before any work",
            "Kitchen & bath packages",
            "Flooring across all unit types",
            "Common area upgrades",
            "Exterior & curb appeal",
            "Photo documentation throughout",
            "One project manager, one invoice",
          ],
          faqs: RENOVATIONS_FAQS,
        }}
      />
    </>
  );
};

export default RenovationsPage;
