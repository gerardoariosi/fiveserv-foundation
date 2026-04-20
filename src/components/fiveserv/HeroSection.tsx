import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const TRUST = ["300+ Units", "50+ Communities", "18 Cities", "24/7", "5-Day Guarantee"];

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

type HeroProps = {
  videoSrc?: string;
  posterSrc?: string;
};

export const HeroSection = ({
  videoSrc = "/images/hero-team-working.mp4",
  posterSrc,
}: HeroProps) => {
  const ref = useReveal<HTMLDivElement>();
  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;
  const heroTopOffset = "calc(var(--banner-h, 0px) + 5rem)";
  const heroVisibleHeight = "calc(100svh - (var(--banner-h, 0px) + 5rem))";

  // Smooth loop: crossfade between two video elements near the end
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");
  const FADE_DURATION = 1.2; // seconds before end to start crossfade

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    const handleTimeUpdate = (e: Event) => {
      const video = e.target as HTMLVideoElement;
      if (!video.duration || isNaN(video.duration)) return;
      const timeLeft = video.duration - video.currentTime;
      const isVideoA = video === videoA;
      const currentlyActive = isVideoA ? "A" : "B";

      if (timeLeft <= FADE_DURATION && activeVideo === currentlyActive) {
        const other = isVideoA ? videoB : videoA;
        other.currentTime = 0;
        other.play().catch(() => {});
        setActiveVideo(isVideoA ? "B" : "A");
      }
    };

    videoA.addEventListener("timeupdate", handleTimeUpdate);
    videoB.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      videoA.removeEventListener("timeupdate", handleTimeUpdate);
      videoB.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [activeVideo]);

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-brand-black"
      style={{ marginTop: heroTopOffset, minHeight: heroVisibleHeight }}
    >
      <video
        ref={videoARef}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={posterSrc}
        className="absolute inset-0 h-full w-full object-cover object-[center_30%] md:object-[center_18%] lg:object-[center_24%] transition-opacity duration-1000 ease-in-out"
        style={{ opacity: activeVideo === "A" ? 1 : 0 }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <video
        ref={videoBRef}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%] md:object-[center_18%] lg:object-[center_24%] transition-opacity duration-1000 ease-in-out"
        style={{ opacity: activeVideo === "B" ? 1 : 0 }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* 60% black overlay over the video for readability */}
      <div className="absolute inset-0 bg-brand-black/60" />

      <div className="relative z-10 flex items-center py-10 sm:py-14 lg:py-20" style={{ minHeight: heroVisibleHeight }}>
        <div ref={ref} className="container reveal">
          <h1 className="text-3xl text-brand-white sm:text-5xl lg:text-6xl leading-tight">
            One call handles your entire make-ready —
            <span className="block text-brand-gold italic">no vendor chaos. One invoice.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed sm:leading-[1.75]">
            Painting, cleaning, repairs, drywall, inspections. Our team. 5 business days. Guaranteed.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <button
              type="button"
              onClick={scrollToForm}
              className="cta-gold cta-pill w-full sm:w-auto justify-center"
            >
              Get a free quote <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-white px-6 sm:px-8 py-3 text-sm font-semibold text-brand-white hover:bg-brand-white hover:text-brand-black transition-colors w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" /> Call now
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 sm:px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
            </a>
          </div>

          <ul className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-xs sm:text-sm font-medium text-brand-white">
            {TRUST.map((t, i) => (
              <li key={t} className="flex items-center gap-2 sm:gap-3">
                {i > 0 && <span aria-hidden className="text-brand-gold">|</span>}
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <AIOverviewBlock
            answer={`${SITE.brand} Property Solutions provides property maintenance and make-ready services across Central Florida. We complete every unit turn in 5 business days, guaranteed. One call, one team, one invoice — serving property managers with 30 to 500 units.`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
