import { useEffect, useRef } from "react";
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

// Minimal editorial style — light cream, subtle roads, muted labels
const MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#F5F1E8" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#6B6B6B" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#FAF9F6" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#D4D0C4" }] },
  { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#FFFFFF" }] },
  { featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#E8E4D8" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#D4CFC0" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#C9D8DE" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#7A8B92" }] },
];

const fsPinSvg = (tier1: boolean, comingSoon = false) => {
  const size = tier1 ? 52 : 40;
  const pinW = size;
  const pinH = Math.round(size * 1.4);
  const cx = pinW / 2;
  const cy = pinW / 2;
  const r = pinW / 2 - 2;
  const fs = tier1 ? 14 : 11;
  const fill = comingSoon ? "#FFD700" : "#FFD700";
  const opacity = comingSoon ? 0.6 : 1;
  const dash = comingSoon ? 'stroke-dasharray="4 3"' : "";
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${pinW}" height="${pinH}" viewBox="0 0 ${pinW} ${pinH}">
      <path
        d="M${cx},${pinH - 2}
           C${cx - 4},${cy + r + 4} ${2},${cy + r * 0.6}
           ${2},${cy}
           A${r},${r} 0 1,1 ${pinW - 2},${cy}
           C${pinW - 2},${cy + r * 0.6} ${cx + 4},${cy + r + 4} ${cx},${pinH - 2}Z"
        fill="${fill}"
        fill-opacity="${opacity}"
        stroke="#1A1A1A"
        stroke-width="2"
        ${dash}
      />
      <text
        x="${cx}"
        y="${cy + fs * 0.37}"
        text-anchor="middle"
        font-family="Georgia, serif"
        font-weight="900"
        font-size="${fs}"
        fill="#1A1A1A"
        letter-spacing="-0.5"
      >FS</text>
    </svg>
  `;
};

const svgToDataUrl = (svg: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

let mapsLoadingPromise: Promise<typeof google> | null = null;

const loadGoogleMaps = (): Promise<typeof google> => {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if ((window as any).google?.maps) return Promise.resolve((window as any).google);
  if (mapsLoadingPromise) return mapsLoadingPromise;

  const key = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
  const channel = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID;
  if (!key) return Promise.reject(new Error("Missing Google Maps browser key"));

  mapsLoadingPromise = new Promise((resolve, reject) => {
    (window as any).__fsInitGoogleMaps = () => resolve((window as any).google);
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=__fsInitGoogleMaps${channel ? `&channel=${channel}` : ""}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
  return mapsLoadingPromise;
};

const ServiceAreaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadGoogleMaps()
      .then((g) => {
        if (cancelled || !mapRef.current) return;
        const map = new g.maps.Map(mapRef.current, {
          center: { lat: 28.6, lng: -81.4 },
          zoom: 8,
          styles: MAP_STYLE,
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "cooperative",
          backgroundColor: "#F5F1E8",
        });

        const infoWindow = new g.maps.InfoWindow();

        CITIES.forEach((city) => {
          const [lat, lng] = CITY_COORDS[city.slug];
          const tier1 = TIER_1.has(city.slug);
          const size = tier1 ? 52 : 40;
          const marker = new g.maps.Marker({
            position: { lat, lng },
            map,
            title: `${city.name}, ${city.state}`,
            icon: {
              url: svgToDataUrl(fsPinSvg(tier1)),
              scaledSize: new g.maps.Size(size, Math.round(size * 1.4)),
              anchor: new g.maps.Point(size / 2, Math.round(size * 1.4)),
            },
          });
          marker.addListener("click", () => {
            infoWindow.setContent(`
              <div style="font-family: 'Fira Sans', sans-serif; padding: 4px 2px; min-width: 160px;">
                <p style="margin:0; font-size:14px; font-weight:800; color:#1A1A1A;">
                  ${city.name}, ${city.state}
                </p>
                <p style="margin:4px 0 0; font-size:12px; font-weight:600; color:#B8860B;">
                  Within ${city.responseTime}
                </p>
                <a href="/maintenance-${city.slug}"
                   style="margin-top:8px; display:inline-block; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#1A1A1A; text-decoration:underline; text-decoration-color:#FFD700; text-underline-offset:3px;">
                  View services →
                </a>
              </div>
            `);
            infoWindow.open({ anchor: marker, map });
          });
        });

        COMING_SOON_CITIES.forEach((c) => {
          const marker = new g.maps.Marker({
            position: { lat: TAMPA_BAY[0], lng: TAMPA_BAY[1] },
            map,
            title: `${c.name}, ${c.state} — Coming Soon`,
            icon: {
              url: svgToDataUrl(fsPinSvg(false, true)),
              scaledSize: new g.maps.Size(40, 56),
              anchor: new g.maps.Point(20, 56),
            },
          });
          marker.addListener("click", () => {
            infoWindow.setContent(`
              <div style="font-family: 'Fira Sans', sans-serif; padding: 4px 2px;">
                <p style="margin:0; font-size:14px; font-weight:800; color:#1A1A1A;">
                  ${c.name}, ${c.state}
                </p>
                <p style="margin:4px 0 0; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#B8860B;">
                  Coming Soon
                </p>
              </div>
            `);
            infoWindow.open({ anchor: marker, map });
          });
        });
      })
      .catch((err) => {
        console.error("Google Maps failed to load:", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-brand-gold/30 shadow-md">
      <div ref={mapRef} style={{ height: 480, width: "100%", background: "#F5F1E8" }} />
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
};

export default ServiceAreaMap;
