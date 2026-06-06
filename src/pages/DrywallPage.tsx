import { Hammer, Paintbrush, Layers, Wrench, Sparkles } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { DRYWALL_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";

const DrywallPage = () => {
  const path = "/drywall";
  const title = "Drywall Repair Orlando FL | Holes, Water Damage & Finishing | FiveServ";
  const description =
    "Drywall repair in Orlando FL. Holes, water damage, full-sheet replacement, taping and finishing. Paint-ready turnover.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Specialties", url: `${SITE.url}/services` },
          { name: "Drywall", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={DRYWALL_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "Drywall Specialty",
          h1: "Drywall Repair & Finishing — Paint-Ready Turnover",
          description: "Holes, water damage, popcorn ceiling fixes, full-sheet replacement. Taped, mudded, sanded, and ready for paint.",
          offer: { title: "Drywall Damage?", desc: "Free assessment. Quoted in writing. Paint-ready when we leave." },
          intro: {
            h2: "Drywall you can't tell was repaired.",
            body: "Patches feathered to disappear under paint, full sheets hung straight and screwed off properly, water damage cut back and replaced — not painted over. We finish to a Level 4 or Level 5 depending on the room.",
            emphasis: "Paint-ready means paint-ready. No bumps, no flashing, no rework.",
          },
          ourServices: [
            { name: "Painting", href: "/painting", icon: Paintbrush },
            { name: "Flooring", href: "/flooring", icon: Layers },
            { name: "Carpentry", href: "/carpentry", icon: Hammer },
            { name: "Maintenance", href: "/maintenance", icon: Wrench },
            { name: "Cleaning", href: "/cleaning", icon: Sparkles },
          ],
          subServices: [
            { name: "Hole & Crack Repair", desc: "Door knob holes, hairline cracks, nail pops — feathered and paint-ready.", href: "/drywall" },
            { name: "Water Damage Repair", desc: "Cut out, dried, replaced and finished. Not painted over.", href: "/drywall" },
            { name: "Full Sheet Replacement", desc: "Hung, taped, mudded, sanded. Straight walls and clean corners.", href: "/drywall" },
            { name: "Texture & Finishing", desc: "Knockdown, orange peel, smooth Level 5 — matched to existing walls.", href: "/drywall" },
          ],
          checklist: [
            "Patch & repair small holes",
            "Cut-and-replace water damage",
            "Full-sheet hang & finish",
            "Tape, mud & sand to Level 4/5",
            "Texture matching",
            "Popcorn ceiling repair",
            "Paint-ready turnover",
            "Clean job site",
          ],
          faqs: DRYWALL_FAQS,
        }}
      />
    </>
  );
};

export default DrywallPage;
