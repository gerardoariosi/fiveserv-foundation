import { Paintbrush, Hammer, Layers, Sparkles, Wrench } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { PAINTING_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";

const PaintingPage = () => {
  const path = "/painting";
  const title = "Painting Contractor Orlando FL | Interior & Exterior Painting | FiveServ";
  const description =
    "Professional painting in Orlando FL. Interior, exterior, apartment turns, commercial repaints. Sherwin-Williams quality, photo-documented, one invoice.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Specialties", url: `${SITE.url}/services` },
          { name: "Painting", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={PAINTING_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "Painting Specialty",
          h1: "Painting Contractor — Interior, Exterior & Apartment Turns",
          description: "Crisp lines, even coats, and a clean job site. We repaint single rooms, full units, common areas, and exteriors.",
          heroImage: "/images/services/painting.jpg",
          offer: { title: "Get a Painting Quote", desc: "Free on-site measure. Color and finish recommendations included." },
          intro: {
            h2: "Painting that holds up — and looks like it.",
            body: "We use Sherwin-Williams paint and finishes built for Florida humidity. Walls patched, edges taped, trim cut cleanly, and the site cleaned before we leave. Every project gets before-and-after photos.",
            emphasis: "Same painters every time. No subcontracted no-shows.",
          },
          ourServices: [
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Flooring", href: "/flooring", icon: Layers },
            { name: "Cleaning", href: "/cleaning", icon: Sparkles },
            { name: "Carpentry", href: "/carpentry", icon: Hammer },
            { name: "Maintenance", href: "/maintenance", icon: Wrench },
          ],
          subServices: [
            { name: "Interior Painting", desc: "Walls, ceilings, trim, doors, accent walls. Single room or whole property.", href: "/painting" },
            { name: "Exterior Painting", desc: "Stucco, siding, trim, doors and shutters. Florida-grade product.", href: "/painting" },
            { name: "Apartment Turn Painting", desc: "Full unit repaints integrated with our 5-day make-ready process.", href: "/make-ready" },
            { name: "Commercial Repaints", desc: "Leasing offices, common areas, hallways, clubhouses, fitness rooms.", href: "/renovations" },
          ],
          checklist: [
            "Sherwin-Williams paint",
            "Wall prep & patching included",
            "Clean lines on trim & ceilings",
            "Drop cloths & masking on every job",
            "Daily clean-up of the work area",
            "Color consultation if needed",
            "Interior & exterior",
            "Before-and-after photos",
          ],
          faqs: PAINTING_FAQS,
        }}
      />
    </>
  );
};

export default PaintingPage;
