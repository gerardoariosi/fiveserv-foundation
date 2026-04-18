import { useState } from "react";
import { X } from "lucide-react";
import { useExitIntent } from "@/hooks/use-fiveserv";
import GhlFormEmbed from "./GhlFormEmbed";
import BrandName from "./BrandName";

const KEY = "fiveserv-exit-shown";

/**
 * ExitIntentPopup — triggers when cursor exits viewport.
 * Offers the Make-Ready Checklist PDF via embedded GHL form.
 * Servpro-style light theme.
 */
export const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  useExitIntent(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY) === "1") return;
    sessionStorage.setItem(KEY, "1");
    setOpen(true);
  });

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="border-l-4 border-brand-gold bg-amber-50 p-4 rounded-r-lg">
          <p className="text-xs font-semibold tracking-widest text-gray-700 uppercase">
            Free Download
          </p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            Make-Ready Checklist (47 items)
          </p>
        </div>

        <h2 className="mt-6 font-display font-bold text-2xl text-gray-900">
          Free: Make-Ready Checklist from <BrandName variant="dark" />
        </h2>
        <p className="mt-2 text-base text-gray-600 leading-relaxed">
          The 47-item checklist we use on every unit. Yours, free.
        </p>

        <div className="mt-6">
          <GhlFormEmbed variant="checklist" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
