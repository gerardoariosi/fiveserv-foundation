import { useParams } from "react-router-dom";
import CityPageTemplate from "@/components/fiveserv/CityPageTemplate";
import NotFound from "@/pages/NotFound";
import { CITIES, type CitySlug } from "@/lib/site-config";

/** /cities/:city — single city overview (no specific service) */
const CityPage = () => {
  const { city: citySlug } = useParams<{ city: CitySlug }>();
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) return <NotFound />;
  return <CityPageTemplate city={city} />;
};

export default CityPage;
