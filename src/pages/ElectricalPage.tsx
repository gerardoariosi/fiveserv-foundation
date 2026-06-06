import { Zap, Droplets, Wind, Hammer, Wrench } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { ELECTRICAL_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";

const ElectricalPage = () => {
  const path = "/electrical";
  const title = "Electrician Orlando FL | Licensed Electrical Services | FiveServ";
  const description =
    "Licensed electricians in Orlando FL. Outlets, panels, lighting, ceiling fans, EV chargers, emergency calls. Photo-documented, one invoice.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Specialties", url: `${SITE.url}/services` },
          { name: "Electrical", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={ELECTRICAL_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "Electrical Specialty",
          h1: "Electrical Services — Licensed Electricians",
          description: "Outlets, switches, lighting, panels, ceiling fans, EV chargers. Code-compliant work, documented and tested.",
          offer: { title: "Power Problem?", desc: "Same-day diagnostics across the Orlando metro. 24/7 emergency line." },
          intro: {
            h2: "Electrical work that passes inspection — the first time.",
            body: "From a flickering outlet to a full panel swap, our licensed electricians work to code, label every breaker, and test every circuit before they leave. No shortcuts. No drywall mess we don't repair.",
            emphasis: "Licensed. Insured. Permit-ready.",
          },
          ourServices: [
            { name: "Plumbing", href: "/plumbing", icon: Droplets },
            { name: "HVAC", href: "/hvac", icon: Wind },
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Maintenance", href: "/maintenance", icon: Wrench },
            { name: "Make-Ready", href: "/make-ready", icon: Zap },
          ],
          subServices: [
            { name: "Outlet & Switch Repair", desc: "Replace, add, or upgrade outlets, switches and dimmers throughout the property.", href: "/electrical" },
            { name: "Lighting & Ceiling Fans", desc: "Interior, exterior, can lights, vanity lights and fan installation.", href: "/electrical" },
            { name: "Panel & Breaker Work", desc: "Breaker replacement, sub-panels, full panel upgrades. Permit-ready.", href: "/electrical" },
            { name: "Emergency Electrical", desc: "No power, tripping breakers, burning smells, exposed wiring — dispatched 24/7.", href: "/electrical" },
          ],
          checklist: [
            "Licensed electricians",
            "Outlet & switch repair",
            "Lighting & ceiling fans",
            "Breaker & panel work",
            "EV charger install",
            "Code-compliant wiring",
            "24/7 emergency dispatch",
            "Photo documentation",
          ],
          faqs: ELECTRICAL_FAQS,
        }}
      />
    </>
  );
};

export default ElectricalPage;
