import { Paintbrush, Sparkles, Wrench, Hammer, Key, ClipboardCheck, Camera, Layers } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { MAKE_READY_FAQS } from "@/lib/service-faqs";
import ServicePageLayout from "@/components/fiveserv/ServicePageLayout";
import BeforeAfterSlider from "@/components/fiveserv/BeforeAfterSlider";
import VacancyCalculator from "@/components/fiveserv/VacancyCalculator";

const MakeReadyPage = () => {
  const path = "/make-ready";
  const title = "Make-Ready Services Orlando FL | 5-Day Guarantee | FiveServ";
  const description =
    "Make-ready services Orlando FL. FiveServ completes every unit turn in 5 business days, guaranteed. Painting, cleaning, repairs, drywall, inspection, rekeying. One call. One invoice.";
  const service = SERVICES.find((s) => s.slug === "make-ready")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Make-Ready", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={MAKE_READY_FAQS}
      />
      <ServicePageLayout
        config={{
          category: "Multifamily Service",
          h1: "Make-Ready & Unit Turn Services — 5-Day Guarantee",
          description: "Central Florida property managers trust FiveServ for make-ready. One call. Our team. 5 business days. Guaranteed in writing.",
          offer: { title: "Lock In Your 5-Day Turn", desc: "Free on-site assessment within 24 hours. Written quote before any work starts." },
          intro: {
            h2: "Every unit, rent-ready in 5 business days.",
            body: "We handle paint, drywall, flooring assessment, cleaning, minor repairs, rekeying, inspection and a photo report on every turn. No subcontractors disappearing on you. No vendor chain. One accountable team that shows up, finishes, and hands you the keys.",
            emphasis: "If we miss the 5-day window, we credit you. That's the written guarantee.",
          },
          ourServices: [
            { name: "Maintenance & Repairs", href: "/maintenance", icon: Wrench },
            { name: "CapEx Renovations", href: "/renovations", icon: Hammer },
            { name: "Painting", href: "/painting", icon: Paintbrush },
            { name: "Cleaning", href: "/cleaning", icon: Sparkles },
          ],
          subServices: [
            { name: "Vacant Unit Turns", desc: "Full make-ready on vacant apartments. Paint, clean, repair, inspect, rekey, photo report.", href: "/make-ready" },
            { name: "Move-Out Inspection", desc: "Documented walk-through with photos and a line-item scope before any work begins.", href: "/cleaning" },
            { name: "Rekey & Lock Service", desc: "Locks rekeyed or replaced on every unit. New keys delivered with the photo report.", href: "/maintenance" },
            { name: "Painting & Touch-Up", desc: "Full repaint or strategic touch-up depending on wall condition and budget.", href: "/painting" },
          ],
          checklist: [
            "Paint touch-up or full repaint",
            "Deep cleaning of every room",
            "Minor plumbing & electrical repairs",
            "Drywall repairs & patching",
            "Move-out inspection with photos",
            "Rekeying & key delivery",
            "Photo report on completion",
            "Flooring assessment & spot repair",
          ],
          faqs: MAKE_READY_FAQS,
          extras: (
            <>
              <VacancyCalculator />
              <section className="bg-white">
                <div className="container py-20">
                  <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">See the Transformation</h2>
                  <p className="mt-3 max-w-2xl text-gray-700">Drag the handle to compare. Same unit, 5 business days apart.</p>
                  <div className="mt-10"><BeforeAfterSlider /></div>
                </div>
              </section>
            </>
          ),
        }}
      />
    </>
  );
};

export default MakeReadyPage;
