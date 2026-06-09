import { Hammer, Paintbrush, Layers, Wrench, Sparkles } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { CARPENTRY_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";

const CarpentryPage = () => {
  const path = "/carpentry";
  const title = "Carpentry Services Orlando FL | Door Repair, Trim & Cabinets | FiveServ";
  const description =
    "Carpentry in Orlando FL. Doors, trim, baseboard, cabinets and finish carpentry. Apartment turns, homes and commercial properties.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Specialties", url: `${SITE.url}/services` },
          { name: "Carpentry", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={CARPENTRY_FAQS}
      />
      <AIOverviewBlock hidden answer="FiveServ provides carpentry services across Central Florida — door repair and replacement, trim, baseboard, cabinet repair and finish carpentry with tight tolerances and no call-backs. Serving Orlando, Kissimmee, Winter Park, Sanford, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa in Central Florida. Free on-site quote within 24 hours — call FiveServ Property Solutions to schedule." />
      <ServicePageLayout
        config={{
          category: "Carpentry Specialty",
          h1: "Carpentry — Doors, Trim, Cabinets & Finish Work",
          description: "Door repair and replacement, baseboard, casing, cabinet repair and finish carpentry. Clean cuts, clean caulk lines.",
          offer: { title: "Get a Carpentry Quote", desc: "Free assessment. Written scope. Quality finish work, every time." },
          intro: {
            h2: "Carpentry that fits — and stays fit.",
            body: "Doors that close on the first try, trim with mitred corners that don't open in two seasons, and cabinet repairs that don't look repaired. We do interior carpentry from a single door rehang up to full trim packages on renovations.",
            emphasis: "Tight tolerances. Clean caulk. No call-backs.",
          },
          ourServices: [
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Painting", href: "/painting", icon: Paintbrush },
            { name: "Flooring", href: "/flooring", icon: Layers },
            { name: "Maintenance", href: "/maintenance", icon: Wrench },
            { name: "Cleaning", href: "/cleaning", icon: Sparkles },
          ],
          subServices: [
            { name: "Door Repair & Replace", desc: "Interior, exterior, sliding and pocket doors. Hung, planed and adjusted.", href: "/carpentry" },
            { name: "Trim & Baseboard", desc: "Casing, baseboard, crown, chair rail — mitred, nailed, caulked, paint-ready.", href: "/carpentry" },
            { name: "Cabinet Repair", desc: "Hinges, soft-close, drawer slides, panel repair, full cabinet rehang.", href: "/carpentry" },
            { name: "Finish Carpentry", desc: "Built-ins, shelving, accent walls, paneling and detail work for renovations.", href: "/renovations" },
          ],
          checklist: [
            "Door rehang & replace",
            "Baseboard & trim install",
            "Casing & crown molding",
            "Cabinet repair",
            "Cabinet hardware install",
            "Built-ins & shelving",
            "Caulk & paint-ready finish",
            "Clean cuts, no call-backs",
          ],
          faqs: CARPENTRY_FAQS,
        }}
      />
    </>
  );
};

export default CarpentryPage;
