import { useParams } from "react-router-dom";
import CityPageTemplate from "@/components/fiveserv/CityPageTemplate";
import NotFound from "@/pages/NotFound";
import { CITIES, SERVICES, type CitySlug, type ServiceSlug } from "@/lib/site-config";

/**
 * /:service/:city — 72 dynamic pages (4 services × 18 cities).
 * Renders the CityPageTemplate with both city and service context.
 */
const ServiceCityPage = () => {
  const { service: serviceSlug, city: citySlug } = useParams<{ service: ServiceSlug; city: CitySlug }>();
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!service || !city) return <NotFound />;
  return <CityPageTemplate city={city} service={service} />;
};

export default ServiceCityPage;
