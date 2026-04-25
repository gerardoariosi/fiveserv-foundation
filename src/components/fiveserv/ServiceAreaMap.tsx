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
  const size = tier1 ? 48 : 38;
  const fs = tier1 ? 16 : 13;
  const html = `
    <svg width="${size}" height="${size + 8}" viewBox="0 0 ${size} ${size + 8}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="#FFD700" stroke="#1A1A1A" stroke-width="2.5"/>
      <text
        x="${size / 2}"
        y="${size / 2 + fs * 0.38}"
        text-anchor="middle"
        font-family="Georgia, serif"
        font-weight="900"
        font-size="${fs}"
        fill="#1A1A1A"
        letter-spacing="-0.5"
      >FS</text>
      <polygon
        points="${size / 2 - 5},${size - 1} ${size / 2 + 5},${size - 1} ${size / 2},${size + 7}"
        fill="#FFD700"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  `;
  return L.divIcon({
    html,
    className: "fiveserv-pin",
    iconSize: [size, size + 8],
    iconAnchor: [size / 2, size + 8],
    popupAnchor: [0, -(size + 8)],
  });
};

const comingSoonIcon = L.divIcon({
  html: `
    <svg width="38" height="46" viewBox="0 0 38 46" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="17" fill="#FFD700" stroke="#1A1A1A" stroke-width="2" stroke-dasharray="4 3" opacity="0.6"/>
      <text
        x="19"
        y="24"
        text-anchor="middle"
        font-family="Georgia, serif"
        font-weight="900"
        font-size="13"
        fill="#1A1A1A"
        letter-spacing="-0.5"
      >FS</text>
      <polygon
        points="14,37 24,37 19,45"
        fill="rgba(255,215,0,0.5)"
        stroke="#1A1A1A"
        stroke-width="1"
        stroke-linejoin="round"
      />
    </svg>
  `,
  className: "fiveserv-pin-soon",
  iconSize: [38, 46],
  iconAnchor: [19, 46],
  popupAnchor: [0, -46],
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
