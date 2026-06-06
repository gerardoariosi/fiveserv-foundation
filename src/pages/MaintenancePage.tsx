import { Droplets, Zap, Wind, Hammer, Wrench, Paintbrush } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { MAINTENANCE_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";
import truckResidential from "@/assets/truck-residential.jpeg.asset.json";

const MaintenancePage = () => {
  const path = "/maintenance";
  const title = "Property Maintenance Central Florida | 24/7 Emergency | FiveServ";
  const description =
    "24/7 property maintenance for multifamily and commercial properties across Central Florida. Plumbing, electrical, HVAC, drywall — one call, one team, one invoice.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Maintenance", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={MAINTENANCE_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "24/7 Property Service",
          h1: "Property Maintenance & Repairs — 24/7 Response",
          description: "Plumbing, electrical, HVAC, drywall. We answer the phone. We show up. We finish. Same crew on every job.",
          
          offer: { title: "Need It Fixed Now?", desc: "Emergency response across the Orlando metro in under 2 hours. Available 24/7." },
          intro: {
            h2: "One call replaces your whole vendor list.",
            body: "We are the only number you call for plumbing, electrical, HVAC, drywall, painting and general repairs. No coordinating four trades. No chasing invoices. No excuses when something falls through the cracks.",
            emphasis: "One team. One invoice. One accountable contact.",
          },
          ourServices: [
            { name: "Plumbing", href: "/plumbing", icon: Droplets },
            { name: "Electrical", href: "/electrical", icon: Zap },
            { name: "HVAC", href: "/hvac", icon: Wind },
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Painting", href: "/painting", icon: Paintbrush },
          ],
          subServices: [
            { name: "Emergency Plumbing", desc: "Leaks, burst pipes, water heaters, blocked drains. Dispatched 24/7.", href: "/plumbing" },
            { name: "Electrical Repairs", desc: "Outlets, breakers, panels, lighting. Licensed electricians on the team.", href: "/electrical" },
            { name: "HVAC Service", desc: "AC repair, replacement, preventive maintenance. Critical in Florida.", href: "/hvac" },
            { name: "Drywall & Patching", desc: "Holes, water damage, full-sheet replacement, finishing and paint-ready.", href: "/drywall" },
          ],
          checklist: [
            "24/7 emergency dispatch",
            "Licensed plumbers & electricians",
            "HVAC certified technicians",
            "Drywall repair & finishing",
            "Painting & touch-up",
            "General handyman repairs",
            "Photo documentation of every job",
            "One invoice across all trades",
          ],
          faqs: MAINTENANCE_FAQS,
        }}
      />
    </>
  );
};

export default MaintenancePage;
