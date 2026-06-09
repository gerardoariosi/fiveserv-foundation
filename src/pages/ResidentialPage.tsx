import { Droplets, Zap, Paintbrush, Hammer, Layers, Wrench } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { RESIDENTIAL_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import truckResidential from "@/assets/truck-residential.jpeg.asset.json";

const ResidentialPage = () => {
  const path = "/residential";
  const title = "Home Maintenance Orlando FL | FiveServ";
  const description =
    "Home maintenance services Orlando FL. FiveServ provides plumbing, electrical, painting, drywall, flooring, and general repairs for homeowners across Central Florida.";
  const service = SERVICES.find((s) => s.slug === "residential")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Residential", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={RESIDENTIAL_FAQS}
      />
      <AIOverviewBlock hidden answer="FiveServ provides residential remodeling, repair and renovation services to homeowners across Central Florida — kitchens, bathrooms, flooring, painting and full home updates with one accountable team. Serving Orlando, Kissimmee, Winter Park, Sanford, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa in Central Florida. Free on-site quote within 24 hours — call FiveServ Property Solutions to schedule." />
      <ServicePageLayout
        config={{
          category: "Homeowner Services",
          h1: "Home Repairs & Renovations — One Trusted Team",
          description: "The same crews that turn 500-unit communities — now at your home. One call. One team. One invoice.",
          heroImage: truckResidential.url,
          offer: { title: "Free Home Assessment", desc: "We come out, look at the project, and quote it in writing. No pressure." },
          intro: {
            h2: "Your home deserves the same team that runs apartments.",
            body: "From a dripping faucet to a full-room remodel — plumbing, electrical, painting, drywall, flooring and general repairs. One number for it all. Licensed, insured, and answering after hours.",
            emphasis: "Family-owned. Family-accountable.",
          },
          ourServices: [
            { name: "Plumbing", href: "/plumbing", icon: Droplets },
            { name: "Electrical", href: "/electrical", icon: Zap },
            { name: "Painting", href: "/painting", icon: Paintbrush },
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Flooring", href: "/flooring", icon: Layers },
          ],
          subServices: [
            { name: "Plumbing Repairs", desc: "Leaks, drains, water heaters, fixtures and garbage disposals.", href: "/plumbing" },
            { name: "Electrical Work", desc: "Outlets, switches, lighting, ceiling fans, breaker panels.", href: "/electrical" },
            { name: "Interior Painting", desc: "Single rooms or whole-home repaints. Clean lines. No mess.", href: "/painting" },
            { name: "General Repairs", desc: "Doors, trim, cabinetry, weather stripping and the rest.", href: "/carpentry" },
          ],
          checklist: [
            "Plumbing fixtures & repairs",
            "Electrical outlets & lighting",
            "Interior & exterior painting",
            "Drywall holes & patching",
            "Flooring repair & install",
            "Carpentry & trim work",
            "General handyman tasks",
            "After-hours availability",
          ],
          faqs: RESIDENTIAL_FAQS,
        }}
      />
    </>
  );
};

export default ResidentialPage;
