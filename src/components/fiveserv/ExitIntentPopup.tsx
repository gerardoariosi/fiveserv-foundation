import { useState } from "react";
import { X, Download } from "lucide-react";
import { useExitIntent } from "@/hooks/use-fiveserv";
import GhlFormEmbed from "./GhlFormEmbed";

const KEY = "fiveserv-exit-shown";

/**
 * ExitIntentPopup — triggers when cursor exits viewport.
 * Offers the Make-Ready Checklist PDF via embedded GHL form.
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
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-lg rounded-lg border-2 border-brand-gold bg-brand-black p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-brand-white hover:text-brand-gold"
        >
          <X className="h-5 w-5" />
        </button>
        <Download className="h-10 w-10 text-brand-gold" />
        <h2 className="mt-4 font-display text-2xl text-brand-white">
          Free: <span className="text-brand-gold">Make-Ready Checklist</span>
        </h2>
        <p className="mt-2 text-brand-white/80">The 47-item checklist we use on every unit. Yours, free.</p>

        <div className="mt-4 rounded-md bg-white p-2">
          <GhlFormEmbed variant="checklist" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
