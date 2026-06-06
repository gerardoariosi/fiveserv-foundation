import { Wind, Droplets, Zap, Hammer, Wrench } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { HVAC_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";

const HvacPage = () => {
  const path = "/hvac";
  const title = "HVAC Services Orlando FL | AC Repair & Replacement | FiveServ";
  const description =
    "HVAC service in Orlando FL. AC repair, replacement, preventive maintenance. Licensed techs, same-day response, photo-documented.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Specialties", url: `${SITE.url}/services` },
          { name: "HVAC", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={HVAC_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "HVAC Specialty",
          h1: "HVAC Services — AC Repair, Replacement & PM",
          description: "AC down in Florida is an emergency. Same-day diagnostics, written quotes, and crews that finish the job.",
          offer: { title: "AC Out?", desc: "Same-day dispatch across the Orlando metro. 24/7 emergency response." },
          intro: {
            h2: "Florida AC service that actually shows up.",
            body: "Diagnostics first, quote second. We service every major brand, handle warranty claims, and stock common parts on the truck. PM programs available for multifamily and commercial portfolios.",
            emphasis: "Same techs, every job. No anonymous subcontractors.",
          },
          ourServices: [
            { name: "Plumbing", href: "/plumbing", icon: Droplets },
            { name: "Electrical", href: "/electrical", icon: Zap },
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Maintenance", href: "/maintenance", icon: Wrench },
            { name: "Make-Ready", href: "/make-ready", icon: Wind },
          ],
          subServices: [
            { name: "AC Repair", desc: "Not cooling, tripping, leaking, frozen coils — diagnosed and fixed same day.", href: "/hvac" },
            { name: "System Replacement", desc: "Full system swaps with code-compliant install and warranty registration.", href: "/hvac" },
            { name: "Preventive Maintenance", desc: "Scheduled PM programs to keep portfolios running and avoid summer outages.", href: "/hvac" },
            { name: "Ductwork & Vents", desc: "Sealing, cleaning, replacement of ducts, returns and supply vents.", href: "/hvac" },
          ],
          checklist: [
            "Same-day AC repair",
            "All major brands serviced",
            "System replacement & install",
            "Preventive maintenance programs",
            "Ductwork & vent service",
            "Refrigerant recharge",
            "24/7 emergency dispatch",
            "Photo documentation",
          ],
          faqs: HVAC_FAQS,
        }}
      />
    </>
  );
};

export default HvacPage;
