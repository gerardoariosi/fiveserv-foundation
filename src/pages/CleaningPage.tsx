import { Sparkles, Paintbrush, Hammer, Layers, Wrench } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { CLEANING_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";

const CleaningPage = () => {
  const path = "/cleaning";
  const title = "Cleaning Services Orlando FL | Move-Out & Deep Cleaning | FiveServ";
  const description =
    "Move-out, make-ready and deep cleaning in Orlando FL. Apartment turns, homes, post-construction. Photo-documented, rent-ready finish.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Specialties", url: `${SITE.url}/services` },
          { name: "Cleaning", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={CLEANING_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "Cleaning Specialty",
          h1: "Cleaning Services — Move-Out, Make-Ready & Deep Clean",
          description: "Apartment turns, post-construction, homes and commercial spaces. Photo report on every cleaning.",
          heroImage: "/images/services/cleaning.jpg",
          offer: { title: "Book a Clean", desc: "Free walk-through. Written quote. Photo-documented finish." },
          intro: {
            h2: "A clean that holds up to inspection.",
            body: "Make-ready cleans, post-construction cleans, deep cleans and recurring service. Same crew, same checklist, photo report on every job so you can sign off without re-walking the unit.",
            emphasis: "Rent-ready means rent-ready. Inspection-grade finish.",
          },
          ourServices: [
            { name: "Painting", href: "/painting", icon: Paintbrush },
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Flooring", href: "/flooring", icon: Layers },
            { name: "Maintenance", href: "/maintenance", icon: Wrench },
            { name: "Make-Ready", href: "/make-ready", icon: Sparkles },
          ],
          subServices: [
            { name: "Move-Out / Make-Ready Clean", desc: "Full unit deep clean integrated with our 5-day make-ready turn.", href: "/make-ready" },
            { name: "Post-Construction Clean", desc: "Dust, debris, residue and final detail after renovation work.", href: "/cleaning" },
            { name: "Deep Cleaning", desc: "Whole-property reset. Appliances, baseboards, vents, windows, fixtures.", href: "/cleaning" },
            { name: "Recurring Service", desc: "Common areas, leasing offices and clubhouses on a recurring schedule.", href: "/cleaning" },
          ],
          checklist: [
            "Kitchen deep clean",
            "Bathroom deep clean",
            "Appliances inside & out",
            "Baseboards & vents",
            "Windows & sills",
            "Floors mopped & vacuumed",
            "Fixtures & hardware polished",
            "Photo report on completion",
          ],
          faqs: CLEANING_FAQS,
        }}
      />
    </>
  );
};

export default CleaningPage;
