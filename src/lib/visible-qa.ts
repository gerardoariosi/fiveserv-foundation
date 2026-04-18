import type { QAItem } from "@/components/fiveserv/VisibleQA";

/**
 * Shared visible Q&A items rendered as H3 + 2-sentence answers (40-60 words each)
 * across the homepage, /make-ready/, and /maintenance/ pages.
 */
export const VISIBLE_QA: QAItem[] = [
  {
    q: "How long does a make-ready take in Central Florida?",
    a: "A standard FiveServ make-ready is completed in 5 business days, guaranteed. We coordinate paint, cleaning, repairs, drywall, rekey, and the final photo report on one schedule so the unit is rent-ready by day five without juggling separate vendors or chasing status updates.",
  },
  {
    q: "What is included in a make-ready service?",
    a: "Our make-ready covers paint touch-up or full repaint, deep cleaning, minor repairs, drywall patching, flooring assessment, rekeying, and a move-out inspection with a photo report. Everything is bundled under one team and one invoice so the unit is fully rent-ready when we hand back the keys.",
  },
  {
    q: "How much does property maintenance cost in Orlando FL?",
    a: "Property maintenance in Orlando typically runs $65–$125 per hour for skilled trades, plus parts. FiveServ quotes flat-rate work orders and transparent hourly rates with no markup games, so property managers see one clear price up front and one consolidated monthly invoice across every trade.",
  },
  {
    q: "Do you offer 24/7 emergency maintenance in Central Florida?",
    a: "Yes. FiveServ provides true 24/7 emergency maintenance across Central Florida with a 2-hour on-site response for water leaks, power loss, AC failures, and lockouts. One number reaches a real dispatcher — no answering service, no hold music, no waiting until business hours.",
  },
  {
    q: "What cities do you serve in Central Florida?",
    a: "FiveServ serves Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, Cocoa, and the Tampa Bay area. If you manage multifamily properties anywhere in Central Florida, we cover you.",
  },
];
