import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { getPostBySlug } from "@/lib/blog-data";
import BlogArticleLayout from "@/components/fiveserv/BlogArticleLayout";

// Pillars
import MakeReadyGuideBody from "@/content/blog/make-ready-guide-florida-2025";
import VendorChaosBody from "@/content/blog/reduce-vendor-chaos-multifamily";
import PricingGuideBody from "@/content/blog/property-maintenance-costs-central-florida-2025";

// Cluster (4-18)
import WhatIsUnitTurn from "@/content/blog/what-is-a-unit-turn";
import MakeReadyChecklist from "@/content/blog/make-ready-checklist-40-items";
import FiveSignsOverhaul from "@/content/blog/5-signs-maintenance-overhaul";
import ChooseMaintenanceOrlando from "@/content/blog/how-to-choose-property-maintenance-company-orlando";
import EmergencyMaintenance from "@/content/blog/emergency-property-maintenance-after-hours";
import CapexVsOpex from "@/content/blog/capex-vs-opex-multifamily";
import OneInvoiceMaintenance from "@/content/blog/one-invoice-maintenance-saves-time";
import UnitTurnVsMakeReady from "@/content/blog/unit-turn-vs-make-ready";
import MakeReadyCost from "@/content/blog/make-ready-cost-central-florida-2025";
import VendorRelationship from "@/content/blog/build-vendor-relationship-properties";
import MaintenanceChecklistMultifamily from "@/content/blog/property-maintenance-checklist-multifamily";
import MaintenanceRequestSystem from "@/content/blog/maintenance-request-system";
import HvacApartments from "@/content/blog/hvac-maintenance-apartments-florida";
import PlumbingEmergency from "@/content/blog/plumbing-emergency-multifamily";
import VacantUnitCost from "@/content/blog/true-cost-vacant-unit-central-florida";

// FAQ comparison (19-30)
import MakeReadyVsCleaning from "@/content/blog/make-ready-vs-cleaning";
import PmVsMaintenance from "@/content/blog/pm-company-vs-maintenance-company";
import HowLongMakeReady from "@/content/blog/how-long-make-ready-take";
import What247Means from "@/content/blog/what-does-24-7-maintenance-mean";
import FiveQuestionsHiring from "@/content/blog/5-questions-before-hiring-maintenance";
import MakeReadyOrlando from "@/content/blog/make-ready-orlando-fl-what-to-expect";
import BestTimeCapex from "@/content/blog/best-time-capex-renovations-florida";
import InspectionFrequency from "@/content/blog/multifamily-inspection-frequency-florida";
import DrywallNormal from "@/content/blog/drywall-repairs-apartments-normal-not";
import HvacVsAc from "@/content/blog/hvac-vs-ac-maintenance-florida";
import FiveDayGuarantee from "@/content/blog/5-day-make-ready-guarantee";
import Glossary from "@/content/blog/property-maintenance-glossary-a-z";

const BODY_REGISTRY: Record<string, () => JSX.Element> = {
  // Pillars
  "make-ready-guide-florida-2025": MakeReadyGuideBody,
  "reduce-vendor-chaos-multifamily": VendorChaosBody,
  "property-maintenance-costs-central-florida-2025": PricingGuideBody,
  // Cluster
  "what-is-a-unit-turn": WhatIsUnitTurn,
  "make-ready-checklist-40-items": MakeReadyChecklist,
  "5-signs-maintenance-overhaul": FiveSignsOverhaul,
  "how-to-choose-property-maintenance-company-orlando": ChooseMaintenanceOrlando,
  "emergency-property-maintenance-after-hours": EmergencyMaintenance,
  "capex-vs-opex-multifamily": CapexVsOpex,
  "one-invoice-maintenance-saves-time": OneInvoiceMaintenance,
  "unit-turn-vs-make-ready": UnitTurnVsMakeReady,
  "make-ready-cost-central-florida-2025": MakeReadyCost,
  "build-vendor-relationship-properties": VendorRelationship,
  "property-maintenance-checklist-multifamily": MaintenanceChecklistMultifamily,
  "maintenance-request-system": MaintenanceRequestSystem,
  "hvac-maintenance-apartments-florida": HvacApartments,
  "plumbing-emergency-multifamily": PlumbingEmergency,
  "true-cost-vacant-unit-central-florida": VacantUnitCost,
  // FAQ comparison
  "make-ready-vs-cleaning": MakeReadyVsCleaning,
  "pm-company-vs-maintenance-company": PmVsMaintenance,
  "how-long-make-ready-take": HowLongMakeReady,
  "what-does-24-7-maintenance-mean": What247Means,
  "5-questions-before-hiring-maintenance": FiveQuestionsHiring,
  "make-ready-orlando-fl-what-to-expect": MakeReadyOrlando,
  "best-time-capex-renovations-florida": BestTimeCapex,
  "multifamily-inspection-frequency-florida": InspectionFrequency,
  "drywall-repairs-apartments-normal-not": DrywallNormal,
  "hvac-vs-ac-maintenance-florida": HvacVsAc,
  "5-day-make-ready-guarantee": FiveDayGuarantee,
  "property-maintenance-glossary-a-z": Glossary,
};

const BlogArticlePage = () => {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  if (!post || !post.bodySlug || !BODY_REGISTRY[post.bodySlug]) {
    return <NotFound />;
  }

  const Body = BODY_REGISTRY[post.bodySlug];
  return (
    <BlogArticleLayout post={post}>
      <Body />
    </BlogArticleLayout>
  );
};

export default BlogArticlePage;
