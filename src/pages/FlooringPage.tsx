import { Layers, Paintbrush, Hammer, Sparkles, Wrench } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { FLOORING_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";

const FlooringPage = () => {
  const path = "/flooring";
  const title = "Flooring Installation Orlando FL | LVP, Tile & Carpet | FiveServ";
  const description =
    "Flooring installation in Orlando FL. LVP, tile, laminate and carpet. Apartment turns, homes and commercial spaces. One invoice.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Specialties", url: `${SITE.url}/services` },
          { name: "Flooring", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={FLOORING_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "Flooring Specialty",
          h1: "Flooring Installation — LVP, Tile, Laminate & Carpet",
          description: "Single rooms, whole units, full properties. Material allowances clear up front, install clean and on schedule.",
          offer: { title: "Get a Flooring Quote", desc: "Free on-site measure, material samples, and a written quote." },
          intro: {
            h2: "Flooring that looks installed — not just laid down.",
            body: "Straight cuts at transitions, baseboards reinstalled or replaced, edges scribed cleanly to walls, and the whole space cleaned before we leave. We carry LVP, tile, laminate, and carpet, with material allowances that fit your property class.",
            emphasis: "Apartment turns or homes. Same crew, same standard.",
          },
          ourServices: [
            { name: "Painting", href: "/painting", icon: Paintbrush },
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Cleaning", href: "/cleaning", icon: Sparkles },
            { name: "Maintenance", href: "/maintenance", icon: Wrench },
            { name: "Make-Ready", href: "/make-ready", icon: Layers },
          ],
          subServices: [
            { name: "Luxury Vinyl Plank (LVP)", desc: "Waterproof, scratch-resistant, fast install. Our most-requested apartment finish.", href: "/flooring" },
            { name: "Tile Install", desc: "Bathroom, kitchen, entry. Straight lines, clean grout, finished trim.", href: "/flooring" },
            { name: "Carpet Replacement", desc: "Pad, stretch and finish. Apartment turns and homes.", href: "/flooring" },
            { name: "Laminate & Engineered", desc: "Click-lock laminate and engineered hardwood for residential and amenity spaces.", href: "/flooring" },
          ],
          checklist: [
            "Free on-site measure",
            "Material samples & allowances",
            "LVP installation",
            "Tile installation",
            "Carpet replacement",
            "Laminate & engineered wood",
            "Baseboard & transition install",
            "Job site cleaned on completion",
          ],
          faqs: FLOORING_FAQS,
        }}
      />
    </>
  );
};

export default FlooringPage;
