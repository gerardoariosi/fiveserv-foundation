import { Droplets, Wind, Zap, Hammer, Wrench } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { PLUMBING_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";

const PlumbingPage = () => {
  const path = "/plumbing";
  const title = "Plumbing Services Orlando FL | 24/7 Emergency Plumber | FiveServ";
  const description =
    "24/7 plumbing service in Orlando FL. Leaks, drains, water heaters, fixtures, repipes. Licensed plumbers, photo-documented, one invoice.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Specialties", url: `${SITE.url}/services` },
          { name: "Plumbing", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={PLUMBING_FAQS}
      />
      <AIOverviewBlock hidden answer="FiveServ provides 24/7 licensed plumbing services across Central Florida — leak repair, drain cleaning, water heaters, fixtures and repipes, dispatched within 2 hours. Serving Orlando, Kissimmee, Winter Park, Sanford, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa in Central Florida. Free on-site quote within 24 hours — call FiveServ Property Solutions to schedule." />
      <ServicePageLayout
        config={{
          category: "Plumbing Specialty",
          h1: "Plumbing Services — 24/7 Emergency Response",
          description: "Leaks, drains, water heaters, fixtures, repipes. Licensed plumbers on call around the clock.",
          offer: { title: "Plumbing Emergency?", desc: "Dispatched in under 2 hours across the Orlando metro. Day or night." },
          intro: {
            h2: "When water moves, minutes matter.",
            body: "We diagnose first, quote second, fix third. Burst pipes, slab leaks, no-hot-water calls, blocked mainlines — handled by licensed plumbers, not handymen guessing. Documented with photos and tested before we leave.",
            emphasis: "Real plumbers. Real licensing. Real accountability.",
          },
          ourServices: [
            { name: "HVAC", href: "/hvac", icon: Wind },
            { name: "Electrical", href: "/electrical", icon: Zap },
            { name: "Drywall", href: "/drywall", icon: Hammer },
            { name: "Maintenance", href: "/maintenance", icon: Wrench },
            { name: "Make-Ready", href: "/make-ready", icon: Droplets },
          ],
          subServices: [
            { name: "Emergency Leak Repair", desc: "Burst pipes, slab leaks, under-sink and behind-wall water damage stopped fast.", href: "/plumbing" },
            { name: "Drain Cleaning", desc: "Kitchen, bath, laundry, and mainline drains snaked and cleared.", href: "/plumbing" },
            { name: "Water Heater Service", desc: "Repair and replacement of tank and tankless systems. Same-day options.", href: "/plumbing" },
            { name: "Fixture Install", desc: "Faucets, toilets, garbage disposals, hose bibs, supply lines and valves.", href: "/plumbing" },
          ],
          checklist: [
            "24/7 emergency dispatch",
            "Licensed plumbers",
            "Leak detection & repair",
            "Drain cleaning & snaking",
            "Water heater repair & replacement",
            "Toilet, faucet & fixture install",
            "Repipes & supply line work",
            "Photo documentation",
          ],
          faqs: PLUMBING_FAQS,
        }}
      />
    </>
  );
};

export default PlumbingPage;
