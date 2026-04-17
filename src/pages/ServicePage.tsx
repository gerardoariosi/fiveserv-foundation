import { useParams } from "react-router-dom";
import ServicePageTemplate from "@/components/fiveserv/ServicePageTemplate";
import NotFound from "@/pages/NotFound";
import { SERVICES, type ServiceSlug } from "@/lib/site-config";

/** /:service — one of 4 service pages */
const ServicePage = () => {
  const { service: slug } = useParams<{ service: ServiceSlug }>();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  return <ServicePageTemplate service={service} />;
};

export default ServicePage;
