import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";
import { SITE } from "@/lib/site-config";

/**
 * SofiaChat — fully scripted bilingual (EN/ES) chat widget.
 * No external API. All responses generated client-side from a state machine.
 * Persists conversation in sessionStorage so it survives page navigation within the tab.
 */

type Lang = "en" | "es";
type UserType = "b2b" | "b2c" | null;
type Sender = "sofia" | "user";

type CtaAction = { kind: "link"; label: string; href: string };

type Message = {
  id: string;
  sender: Sender;
  text: string;
  quickReplies?: string[];
  ctas?: CtaAction[];
};

type Step =
  | "opening"
  // B2B
  | "b2b_service"
  | "b2b_units"
  | "b2b_city"
  | "b2b_capture"
  | "b2b_done"
  // B2C
  | "b2c_service"
  | "b2c_urgency"
  | "b2c_city"
  | "b2c_capture"
  | "b2c_done"
  // free chat after main flow
  | "free";

type CollectedData = {
  userType: UserType;
  service?: string;
  units?: string;
  city?: string;
  urgency?: string;
  contact?: string;
};

const PHONE = SITE.phone;
const SS_KEY = "sofia.chat.v1";
const SOFIA_AVATAR = "https://randomuser.me/api/portraits/women/44.jpg";

/** Realistic typing delay based on the longest message about to be shown. */
const typingDelayFor = (msgs: Message[]): number => {
  const longest = msgs.reduce((max, m) => Math.max(max, m.text.length), 0);
  if (longest < 60) return 800;
  if (longest < 140) return 1200;
  return 1800;
};

const COVERED_CITIES = [
  "orlando", "kissimmee", "sanford", "winter park", "lakeland",
  "altamonte springs", "apopka", "ocoee", "winter garden", "clermont",
  "st. cloud", "st cloud", "saint cloud", "davenport", "deltona",
  "daytona beach", "palm coast", "melbourne", "palm bay", "cocoa",
];

const SPANISH_TRIGGERS = [
  "hola", "quiero", "necesito", "tengo", "busco", "soy", "para",
  "propiedad", "casa", "mantenimiento", "ciudad", "ayuda", "estimado",
  "cuanto", "cuánto", "garantia", "garantía", "emergencia", "urgente",
];

const t = {
  en: {
    headerTitle: "Sofia",
    headerSub: "FiveServ Assistant",
    online: "Online",
    inputPlaceholder: "Type your message…",
    opening:
      "Hi! I am Sofia from FiveServ. Are you a property manager, or looking for home maintenance services?",
    openingButtons: ["I am a Property Manager", "Home Services for my residence"],
    // B2B
    b2bService: "What service do you need?",
    b2bServiceButtons: [
      "Make-Ready / Unit Turns",
      "Maintenance & Repairs",
      "CapEx / Renovation",
      "Not sure yet",
    ],
    b2bUnits: "How many units do you manage?",
    b2bUnitsButtons: ["30-100", "100-250", "250-500", "500+"],
    b2bCity: "What city are your properties in?",
    b2bCapture: "Please share your name, company, phone, and email.",
    b2bClose:
      "You are all set! A FiveServ team member will call you within 2 business hours. One Call. One Team. One Invoice. No excuses.",
    b2bCloseCta: "Fill Out Our Quote Form",
    leadMagnet:
      "While you wait — grab our free 40-point Make-Ready Checklist.",
    leadMagnetCta: "Download Free Checklist",
    // B2C
    b2cService: "What do you need help with?",
    b2cServiceButtons: [
      "Plumbing", "Electrical", "Painting", "Drywall", "General Repair", "Other",
    ],
    b2cUrgency: "Is this an emergency or can it wait?",
    b2cUrgencyButtons: ["Emergency — need help now", "Not urgent"],
    b2cEmergency:
      "We are available 24/7. Our team will prioritize your call.",
    b2cCity: "What city are you in?",
    b2cCapture: "Please share your name, phone, email, and ZIP code.",
    b2cClose:
      "Our team will reach out shortly to schedule your free estimate. We show up. We finish. We deliver.",
    b2cCloseCta: "Request a Free Estimate",
    // city
    cityCovered: (c: string) => `Great — we cover ${c}! Let me connect you with our team.`,
    cityNotCovered: (c: string) => `We may still help in ${c} — our team will confirm coverage.`,
    // default
    fallback:
      "I am here to help! Ask me about services, cities, pricing, or get a free quote.",
    fallbackButtons: [
      "Get a Free Quote",
      "See Our Services",
      "Service Areas",
    ],
    reset: "Conversation reset.",
  },
  es: {
    headerTitle: "Sofia",
    headerSub: "Asistente FiveServ",
    online: "En línea",
    inputPlaceholder: "Escribe tu mensaje…",
    opening:
      "Hola! Soy Sofia de FiveServ. Eres property manager, o buscas servicios de mantenimiento para tu hogar?",
    openingButtons: ["Soy Property Manager", "Servicios para mi hogar"],
    b2bService: "Que servicio necesitas?",
    b2bServiceButtons: [
      "Make-Ready / Unit Turns",
      "Mantenimiento y Reparaciones",
      "CapEx / Renovacion",
      "No estoy seguro",
    ],
    b2bUnits: "Cuantas unidades administras?",
    b2bUnitsButtons: ["30-100", "100-250", "250-500", "500+"],
    b2bCity: "En que ciudad estan tus propiedades?",
    b2bCapture: "Comparte tu nombre, empresa, telefono y email.",
    b2bClose:
      "Todo listo! Un miembro del equipo te llamara en 2 horas habiles. Una llamada. Un equipo. Una factura. Sin excusas.",
    b2bCloseCta: "Completar Formulario",
    leadMagnet:
      "Mientras esperas — descarga nuestro Checklist Make-Ready de 40 puntos.",
    leadMagnetCta: "Descargar Checklist Gratis",
    b2cService: "Con que necesitas ayuda?",
    b2cServiceButtons: [
      "Plomeria", "Electricidad", "Pintura", "Drywall", "Reparacion General", "Otro",
    ],
    b2cUrgency: "Es una emergencia o puede esperar?",
    b2cUrgencyButtons: ["Emergencia — necesito ayuda ya", "No es urgente"],
    b2cEmergency:
      "Estamos disponibles 24/7. Nuestro equipo priorizara tu llamada.",
    b2cCity: "En que ciudad estas?",
    b2cCapture: "Comparte tu nombre, telefono, email y codigo postal.",
    b2cClose:
      "Nuestro equipo te contactara pronto para tu estimado gratis. Llegamos. Terminamos. Entregamos.",
    b2cCloseCta: "Solicitar Estimado Gratis",
    cityCovered: (c: string) => `Perfecto — cubrimos ${c}! Dejame conectarte con nuestro equipo.`,
    cityNotCovered: (c: string) => `Es posible que podamos ayudarte en ${c} — nuestro equipo confirmara cobertura.`,
    fallback:
      "Estoy aqui para ayudar! Preguntame sobre servicios, ciudades o solicita un estimado.",
    fallbackButtons: [
      "Solicitar Estimado",
      "Ver Servicios",
      "Areas de Servicio",
    ],
    reset: "Conversación reiniciada.",
  },
} as const;

const detectLanguage = (text: string): Lang => {
  const lc = text.toLowerCase();
  return SPANISH_TRIGGERS.some((w) => lc.includes(w)) ? "es" : "en";
};

const isCityCovered = (city: string) => {
  const lc = city.trim().toLowerCase();
  return COVERED_CITIES.some((c) => lc.includes(c));
};

const titleCase = (s: string) =>
  s.trim().split(/\s+/).map((w) => w[0]?.toUpperCase() + w.slice(1).toLowerCase()).join(" ");

const newId = () => Math.random().toString(36).slice(2, 10);

const mkSofia = (text: string, opts?: { quickReplies?: string[]; ctas?: CtaAction[] }): Message => ({
  id: newId(),
  sender: "sofia",
  text,
  quickReplies: opts?.quickReplies,
  ctas: opts?.ctas,
});

const mkUser = (text: string): Message => ({ id: newId(), sender: "user", text });

// FAQ keyword detector — returns Sofia replies or null
const faqResponse = (input: string, lang: Lang): Message[] | null => {
  const lc = input.toLowerCase();
  const has = (...kws: string[]) => kws.some((k) => lc.includes(k));

  if (has("price", "cost", "how much", "precio", "costo", "cuanto", "cuánto")) {
    return [
      mkSofia(
        lang === "es"
          ? "Proveemos estimado gratis antes de comenzar — sin sorpresas."
          : "We provide a free estimate before any work — no surprises. Fill out our form.",
        { ctas: [{ kind: "link", label: lang === "es" ? "Solicitar Estimado" : "Get a Free Estimate", href: "/contact" }] },
      ),
    ];
  }
  if (has("guarantee", "garantia", "garantía", "5 days", "5 dias", "5 días")) {
    return [
      mkSofia(
        lang === "es"
          ? "Cada make-ready garantizado por escrito en 5 dias habiles. Sin excusas."
          : "Every make-ready is guaranteed in writing in 5 business days. No excuses.",
      ),
    ];
  }
  if (has("emergency", "emergencia", "urgent", "urgente")) {
    return [
      mkSofia(
        lang === "es"
          ? "Disponibles 24/7 para emergencias en Central Florida."
          : "Available 24/7 for emergencies across Central Florida. One call and our team is on the way.",
        { ctas: [{ kind: "link", label: lang === "es" ? "Llamar Ahora" : "Call Now", href: `tel:${PHONE}` }] },
      ),
    ];
  }
  if (has("cities", "ciudades", "areas", "where", "donde", "dónde")) {
    return [
      mkSofia(
        lang === "es"
          ? "Cubrimos 18 ciudades: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, Cocoa. Tampa Bay próximamente."
          : "We serve 18 cities: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, Cocoa. Tampa Bay coming soon.",
        { ctas: [{ kind: "link", label: lang === "es" ? "Ver Áreas" : "Service Areas", href: "/service-areas" }] },
      ),
    ];
  }
  if (has("invoice", "factura", "billing", "cobro")) {
    return [
      mkSofia(
        lang === "es"
          ? "Una sola factura — sin importar cuantos trabajos. Una factura detallada."
          : "One invoice — regardless of how many trades involved. One clean line-item invoice.",
      ),
    ];
  }
  if (has("licensed", "licenciado", "insured", "asegurado")) {
    return [
      mkSofia(
        lang === "es"
          ? "Completamente licenciado y asegurado en Florida."
          : "Fully licensed and insured in Florida. All specialized work by licensed contractors.",
      ),
    ];
  }
  if (has("make-ready", "make ready", "unit turn", "turnover")) {
    return [
      mkSofia(
        lang === "es"
          ? "5 dias habiles garantizado. Pintura, limpieza, reparaciones, drywall, re-keying, reporte fotografico."
          : "5 business days guaranteed in writing. Painting, cleaning, repairs, drywall, rekeying, photo report.",
        { ctas: [{ kind: "link", label: lang === "es" ? "Más Info" : "Learn More", href: "/make-ready" }] },
      ),
    ];
  }
  if (has("plumbing", "plomeria", "plomería")) {
    return [mkSofia(lang === "es" ? "Plomería licenciada 24/7." : "Licensed 24/7 plumbing.", { ctas: [{ kind: "link", label: lang === "es" ? "Ver Plomería" : "Plumbing", href: "/plumbing" }] })];
  }
  if (has("electrical", "electricidad")) {
    return [mkSofia(lang === "es" ? "Electricidad licenciada 24/7." : "Licensed 24/7 electrical.", { ctas: [{ kind: "link", label: lang === "es" ? "Ver Electricidad" : "Electrical", href: "/electrical" }] })];
  }
  if (has("hvac", "ac ", "aire", "a/c")) {
    return [mkSofia(lang === "es" ? "HVAC licenciado 24/7 — la ley de FL requiere AC funcionando." : "Licensed 24/7 HVAC — FL law requires working AC.", { ctas: [{ kind: "link", label: "HVAC", href: "/hvac" }] })];
  }
  if (has("painting", "pintura")) {
    return [mkSofia(lang === "es" ? "Interior + exterior + make-ready — Sherwin-Williams." : "Interior + exterior + make-ready — Sherwin-Williams.", { ctas: [{ kind: "link", label: lang === "es" ? "Ver Pintura" : "Painting", href: "/painting" }] })];
  }
  if (has("flooring", "piso", "pisos")) {
    return [mkSofia(lang === "es" ? "LVP, baldosa, alfombra, madera — 10-15% aumento de renta." : "LVP, tile, carpet, hardwood — 10-15% rent increase.", { ctas: [{ kind: "link", label: lang === "es" ? "Ver Pisos" : "Flooring", href: "/flooring" }] })];
  }
  if (has("drywall")) {
    return [mkSofia(lang === "es" ? "Reparación de huecos, grietas, daño de agua, igualación de textura." : "Hole repair, crack, water damage, texture matching.", { ctas: [{ kind: "link", label: "Drywall", href: "/drywall" }] })];
  }
  if (has("cleaning", "limpieza")) {
    return [mkSofia(lang === "es" ? "Limpieza move-out, deep clean, Airbnb, post-construcción." : "Move-out, deep clean, Airbnb, post-construction.", { ctas: [{ kind: "link", label: lang === "es" ? "Ver Limpieza" : "Cleaning", href: "/cleaning" }] })];
  }
  if (has("carpentry", "carpinteria", "carpintería", "door", "puerta", "cabinet", "gabinete")) {
    return [mkSofia(lang === "es" ? "Puertas, gabinetes, molduras, zócalos." : "Doors, cabinets, trim, baseboards.", { ctas: [{ kind: "link", label: lang === "es" ? "Carpintería" : "Carpentry", href: "/carpentry" }] })];
  }
  if (has("renovation", "renovacion", "renovación", "capex")) {
    return [mkSofia(lang === "es" ? "Proyectos CapEx — 15-20% aumento de renta." : "CapEx projects — 15-20% rent increase.", { ctas: [{ kind: "link", label: lang === "es" ? "Renovaciones" : "Renovations", href: "/renovations" }] })];
  }
  if (has("checklist", "scorecard", "download", "descargar")) {
    return [
      mkSofia(lang === "es" ? "Aquí tienes nuestros recursos gratis:" : "Here are our free resources:", {
        ctas: [
          { kind: "link", label: lang === "es" ? "Checklist Make-Ready (40 puntos)" : "40-Point Make-Ready Checklist", href: "/make-ready" },
          { kind: "link", label: lang === "es" ? "Vendor Scorecard" : "Vendor Scorecard", href: "/" },
        ],
      }),
    ];
  }
  return null;
};

const fallbackResponse = (lang: Lang): Message =>
  mkSofia(t[lang].fallback, {
    ctas: [
      { kind: "link", label: t[lang].fallbackButtons[0], href: "/contact" },
      { kind: "link", label: t[lang].fallbackButtons[1], href: "/maintenance" },
      { kind: "link", label: t[lang].fallbackButtons[2], href: "/service-areas" },
    ],
  });

const SofiaChat = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [step, setStep] = useState<Step>("opening");
  const [data, setData] = useState<CollectedData>({ userType: null });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Restore from sessionStorage
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(SS_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        setLang(saved.lang ?? "en");
        setStep(saved.step ?? "opening");
        setData(saved.data ?? { userType: null });
        setMessages(saved.messages ?? []);
        return;
      }
    } catch { /* ignore */ }
    // First-time opening message
    setMessages([mkSofia(t.en.opening, { quickReplies: [...t.en.openingButtons] })]);
  }, []);

  // Persist
  useEffect(() => {
    try {
      sessionStorage.setItem(SS_KEY, JSON.stringify({ lang, step, data, messages }));
    } catch { /* ignore */ }
  }, [lang, step, data, messages]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const sayLater = (msgs: Message[], delay?: number) => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, ...msgs]);
    }, delay ?? typingDelayFor(msgs));
  };

  const handleReset = () => {
    sessionStorage.removeItem(SS_KEY);
    setLang("en");
    setStep("opening");
    setData({ userType: null });
    setMessages([mkSofia(t.en.opening, { quickReplies: [...t.en.openingButtons] })]);
  };

  const advance = (userText: string, fromQuickReply: boolean) => {
    // First user message → detect language (only if still on opening)
    let activeLang = lang;
    if (messages.filter((m) => m.sender === "user").length === 0) {
      activeLang = detectLanguage(userText);
      setLang(activeLang);
    }
    const L = t[activeLang];

    // Push user message immediately
    setMessages((prev) => [...prev, mkUser(userText)]);

    // FAQ keyword shortcut for free-text input (not quick reply)
    if (!fromQuickReply) {
      const faq = faqResponse(userText, activeLang);
      if (faq) {
        sayLater(faq);
        return;
      }
    }

    switch (step) {
      case "opening": {
        const isB2B =
          /property manager|soy property|i am a property/i.test(userText) ||
          userText.toLowerCase().includes("property manager");
        const isB2C =
          /home services|servicios para mi hogar|residence|hogar/i.test(userText);
        if (isB2B) {
          setData((d) => ({ ...d, userType: "b2b" }));
          setStep("b2b_service");
          sayLater([mkSofia(L.b2bService, { quickReplies: [...L.b2bServiceButtons] })]);
        } else if (isB2C) {
          setData((d) => ({ ...d, userType: "b2c" }));
          setStep("b2c_service");
          sayLater([mkSofia(L.b2cService, { quickReplies: [...L.b2cServiceButtons] })]);
        } else {
          // Free text on opening — try FAQ then fallback to re-asking
          const faq = faqResponse(userText, activeLang);
          if (faq) sayLater(faq);
          else sayLater([mkSofia(L.opening, { quickReplies: [...L.openingButtons] })]);
        }
        return;
      }
      case "b2b_service": {
        setData((d) => ({ ...d, service: userText }));
        setStep("b2b_units");
        sayLater([mkSofia(L.b2bUnits, { quickReplies: [...L.b2bUnitsButtons] })]);
        return;
      }
      case "b2b_units": {
        setData((d) => ({ ...d, units: userText }));
        setStep("b2b_city");
        sayLater([mkSofia(L.b2bCity)]);
        return;
      }
      case "b2b_city": {
        const cityName = titleCase(userText);
        setData((d) => ({ ...d, city: cityName }));
        const covered = isCityCovered(userText);
        const cityMsg = covered ? L.cityCovered(cityName) : L.cityNotCovered(cityName);
        setStep("b2b_capture");
        sayLater([mkSofia(cityMsg), mkSofia(L.b2bCapture)]);
        return;
      }
      case "b2b_capture": {
        setData((d) => ({ ...d, contact: userText }));
        // eslint-disable-next-line no-console
        console.log("[SofiaChat] B2B lead captured:", { ...data, contact: userText, lang: activeLang });
        setStep("b2b_done");
        sayLater([
          mkSofia(L.b2bClose, {
            ctas: [{ kind: "link", label: L.b2bCloseCta, href: "/contact" }],
          }),
          mkSofia(L.leadMagnet, {
            ctas: [{ kind: "link", label: L.leadMagnetCta, href: "/make-ready" }],
          }),
        ], 900);
        return;
      }
      case "b2c_service": {
        setData((d) => ({ ...d, service: userText }));
        setStep("b2c_urgency");
        sayLater([mkSofia(L.b2cUrgency, { quickReplies: [...L.b2cUrgencyButtons] })]);
        return;
      }
      case "b2c_urgency": {
        setData((d) => ({ ...d, urgency: userText }));
        const isEmergency = /emergency|emergencia/i.test(userText);
        const msgs: Message[] = [];
        if (isEmergency) msgs.push(mkSofia(L.b2cEmergency));
        msgs.push(mkSofia(L.b2cCity));
        setStep("b2c_city");
        sayLater(msgs);
        return;
      }
      case "b2c_city": {
        const cityName = titleCase(userText);
        setData((d) => ({ ...d, city: cityName }));
        const covered = isCityCovered(userText);
        const cityMsg = covered ? L.cityCovered(cityName) : L.cityNotCovered(cityName);
        setStep("b2c_capture");
        sayLater([mkSofia(cityMsg), mkSofia(L.b2cCapture)]);
        return;
      }
      case "b2c_capture": {
        setData((d) => ({ ...d, contact: userText }));
        // eslint-disable-next-line no-console
        console.log("[SofiaChat] B2C lead captured:", { ...data, contact: userText, lang: activeLang });
        setStep("b2c_done");
        sayLater([
          mkSofia(L.b2cClose, {
            ctas: [{ kind: "link", label: L.b2cCloseCta, href: "/residential" }],
          }),
        ], 900);
        return;
      }
      case "b2b_done":
      case "b2c_done":
      case "free":
      default: {
        setStep("free");
        const faq = faqResponse(userText, activeLang);
        sayLater(faq ?? [fallbackResponse(activeLang)]);
        return;
      }
    }
  };

  const handleSend = (text?: string) => {
    const value = (text ?? input).trim();
    if (!value) return;
    setInput("");
    advance(value, !!text);
  };

  const L = t[lang];

  return (
    <>
      {/* Collapsed bubble — white circle, gold icon */}
      {!open && (
        <button
          type="button"
          aria-label="Open Sofia chat"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-brand-gold/40"
        >
          <MessageCircle className="h-7 w-7" style={{ color: "#FFD700" }} />
          <span className="sr-only">Chat with Sofia</span>
        </button>
      )}

      {/* Expanded panel — white, modern */}
      {open && (
        <div
          role="dialog"
          aria-label="Sofia chat"
          className="fixed inset-0 z-[9999] flex flex-col bg-white sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[560px] sm:w-[380px] sm:overflow-hidden"
          style={{
            borderRadius: typeof window !== "undefined" && window.innerWidth >= 640 ? "16px" : 0,
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          {/* Header — dark */}
          <header
            className="flex items-center gap-3 px-4"
            style={{ background: "#1A1A1A", height: "64px" }}
          >
            <img
              src={SOFIA_AVATAR}
              alt="Sofia"
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover"
              style={{ border: "2px solid #FFD700" }}
            />
            <div className="flex-1 leading-tight">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-white" style={{ fontSize: "15px" }}>
                  {L.headerTitle}
                </p>
                <span
                  className="inline-block rounded-full bg-green-400"
                  style={{ width: "8px", height: "8px" }}
                  aria-hidden
                />
              </div>
              <p className="text-gray-400" style={{ fontSize: "12px" }}>
                FiveServ Assistant · {L.online}
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset conversation"
              title={L.reset}
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-white"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-white px-3 py-4 sofia-scroll"
          >
            {messages.map((m, idx) => {
              const isLast = idx === messages.length - 1;
              const isSofia = m.sender === "sofia";
              return (
                <div
                  key={m.id}
                  className={isSofia ? "flex justify-start gap-2" : "flex justify-end"}
                >
                  {isSofia && (
                    <img
                      src={SOFIA_AVATAR}
                      alt=""
                      aria-hidden
                      className="h-6 w-6 flex-shrink-0 rounded-full object-cover self-end"
                    />
                  )}
                  <div className="max-w-[85%] space-y-2">
                    <div
                      className="px-3 py-2"
                      style={{
                        background: isSofia ? "#F3F4F6" : "#1A1A1A",
                        color: isSofia ? "#111827" : "#FFFFFF",
                        fontSize: "13.5px",
                        lineHeight: 1.5,
                        borderRadius: isSofia
                          ? "4px 16px 16px 16px"
                          : "16px 4px 16px 16px",
                      }}
                    >
                      {m.text}
                    </div>

                    {isLast && m.quickReplies && m.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {m.quickReplies.map((qr) => (
                          <button
                            key={qr}
                            type="button"
                            onClick={() => handleSend(qr)}
                            className="font-medium transition-colors duration-200"
                            style={{
                              background: "#FFFFFF",
                              border: "1.5px solid #1A1A1A",
                              color: "#1A1A1A",
                              fontSize: "12px",
                              padding: "6px 14px",
                              borderRadius: "20px",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#1A1A1A";
                              e.currentTarget.style.color = "#FFFFFF";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "#FFFFFF";
                              e.currentTarget.style.color = "#1A1A1A";
                            }}
                          >
                            {qr}
                          </button>
                        ))}
                      </div>
                    )}

                    {m.ctas && m.ctas.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {m.ctas.map((c) => (
                          <a
                            key={c.label}
                            href={c.href}
                            className="rounded-full px-3 py-1.5 text-xs font-bold transition-colors"
                            style={{ background: "#FFD700", color: "#1A1A1A" }}
                          >
                            {c.label} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {typing && (
              <div className="flex justify-start gap-2">
                <img
                  src={SOFIA_AVATAR}
                  alt=""
                  aria-hidden
                  className="h-6 w-6 flex-shrink-0 rounded-full object-cover self-end"
                />
                <div
                  className="flex items-center gap-1 px-3 py-2.5"
                  style={{
                    background: "#F3F4F6",
                    borderRadius: "4px 16px 16px 16px",
                  }}
                >
                  <span
                    className="block animate-bounce rounded-full bg-gray-400"
                    style={{ width: "6px", height: "6px", animationDelay: "-0.3s" }}
                  />
                  <span
                    className="block animate-bounce rounded-full bg-gray-400"
                    style={{ width: "6px", height: "6px", animationDelay: "-0.15s" }}
                  />
                  <span
                    className="block animate-bounce rounded-full bg-gray-400"
                    style={{ width: "6px", height: "6px" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2 px-3 py-3"
            style={{ background: "#F9FAFB", borderTop: "1px solid #E5E7EB" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={L.inputPlaceholder}
              aria-label={L.inputPlaceholder}
              className="flex-1 rounded-full border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-brand-gold/40"
              style={{ padding: "8px 16px" }}
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim()}
              className="flex items-center justify-center rounded-full transition-opacity disabled:opacity-40"
              style={{
                background: "#FFD700",
                color: "#000000",
                width: "36px",
                height: "36px",
              }}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Thin scrollbar for messages area */}
      <style>{`
        .sofia-scroll::-webkit-scrollbar { width: 6px; }
        .sofia-scroll::-webkit-scrollbar-track { background: transparent; }
        .sofia-scroll::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 3px; }
        .sofia-scroll { scrollbar-width: thin; scrollbar-color: #E5E7EB transparent; }
      `}</style>
    </>
  );
};

export default SofiaChat;
