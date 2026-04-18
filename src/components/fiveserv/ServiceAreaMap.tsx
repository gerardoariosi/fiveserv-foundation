import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import { CITIES, COMING_SOON_CITIES, type CitySlug } from "@/lib/site-config";

// City coordinates [lat, lng] for all 18 service cities + Tampa Bay
const CITY_COORDS: Record<CitySlug, [number, number]> = {
  "orlando-fl": [28.5383, -81.3792],
  "kissimmee-fl": [28.2920, -81.4076],
  "sanford-fl": [28.8003, -81.2731],
  "winter-park-fl": [28.6000, -81.3392],
  "lakeland-fl": [28.0395, -81.9498],
  "altamonte-springs-fl": [28.6611, -81.3656],
  "apopka-fl": [28.6934, -81.5322],
  "ocoee-fl": [28.5694, -81.5439],
  "winter-garden-fl": [28.5653, -81.5859],
  "clermont-fl": [28.5494, -81.7728],
  "st-cloud-fl": [28.2489, -81.2812],
  "davenport-fl": [28.1611, -81.6017],
  "deltona-fl": [28.9005, -81.2637],
  "daytona-beach-fl": [29.2108, -81.0228],
  "palm-coast-fl": [29.5847, -81.2078],
  "melbourne-fl": [28.0836, -80.6081],
  "palm-bay-fl": [28.0345, -80.5887],
  "cocoa-fl": [28.3861, -80.7420],
};

const TAMPA_BAY: [number, number] = [27.9506, -82.4572];

const TIER_1 = new Set<CitySlug>([
  "orlando-fl",
  "kissimmee-fl",
  "sanford-fl",
  "winter-park-fl",
  "lakeland-fl",
]);

// Custom gold pin with FS monogram
const makeFsIcon = (tier1: boolean) => {
  const size = tier1 ? 44 : 36;
  const html = `
    <div style="
      width:${size}px;height:${size}px;
      background:#D4AF37;
      border:2px solid #1a1a1a;
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 4px 10px rgba(0,0,0,0.35);
    ">
      <span style="
        transform:rotate(45deg);
        color:#1a1a1a;
        font-weight:900;
        font-size:${tier1 ? 14 : 12}px;
        font-family:Georgia,serif;
        letter-spacing:-0.5px;
      ">FS</span>
    </div>
  `;
  return L.divIcon({
    html,
    className: "fiveserv-pin",
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

const comingSoonIcon = L.divIcon({
  html: `
    <div style="
      width:36px;height:36px;
      background:transparent;
      border:2px dashed #D4AF37;
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      display:flex;align-items:center;justify-content:center;
    ">
      <span style="
        transform:rotate(45deg);
        color:#D4AF37;
        font-weight:900;
        font-size:11px;
        font-family:Georgia,serif;
      ">FS</span>
    </div>
  `,
  className: "fiveserv-pin-soon",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

const ServiceAreaMap = () => (
  <div className="relative w-full overflow-hidden rounded-2xl border border-brand-gold/30 shadow-md">
    <MapContainer
      center={[28.6, -81.4]}
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: 480, width: "100%" }}
    >
      {/* Satellite imagery base */}
      <TileLayer
        attribution='Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      {/* Street labels & roads overlay */}
      <TileLayer
        attribution='Labels &copy; Esri'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
      />
      {CITIES.map((city) => {
        const coords = CITY_COORDS[city.slug];
        const tier1 = TIER_1.has(city.slug);
        return (
          <Marker key={city.slug} position={coords} icon={makeFsIcon(tier1)}>
            <Popup>
              <div className="font-sans">
                <p className="m-0 text-sm font-black text-brand-black">
                  {city.name}, {city.state}
                </p>
                <p className="m-0 mt-1 text-xs font-semibold text-brand-gold">
                  Within {city.responseTime}
                </p>
                <Link
                  to={`/maintenance-${city.slug}`}
                  className="mt-2 inline-block text-xs font-bold uppercase tracking-wide text-brand-black underline decoration-brand-gold underline-offset-2"
                >
                  View services →
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      })}
      {COMING_SOON_CITIES.map((c) => (
        <Marker key={c.slug} position={TAMPA_BAY} icon={comingSoonIcon}>
          <Popup>
            <div className="font-sans">
              <p className="m-0 text-sm font-black text-brand-black">
                {c.name}, {c.state}
              </p>
              <p className="m-0 mt-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                Coming Soon
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[400] px-5 pb-4 pt-6"
      style={{ background: "linear-gradient(to top, rgba(26,26,26,0.95), transparent)" }}
    >
      <p className="m-0 text-xs font-bold uppercase tracking-[0.1em] text-brand-gold">
        18 Cities · Central Florida · Tampa Bay Coming Soon
      </p>
    </div>
  </div>
);

export default ServiceAreaMap;
