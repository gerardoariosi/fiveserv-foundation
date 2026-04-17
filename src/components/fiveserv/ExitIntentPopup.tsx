import { useState } from "react";
import { X, Download } from "lucide-react";
import { useExitIntent } from "@/hooks/use-fiveserv";

const KEY = "fiveserv-exit-shown";

/**
 * ExitIntentPopup — triggers when cursor exits viewport.
 * Offers the Make-Ready Checklist PDF — submission posts to GHL form.
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

  const ghlForm = import.meta.env.VITE_FORM_GHL;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-md rounded-lg border-2 border-brand-gold bg-brand-black p-8">
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

        {ghlForm ? (
          <iframe
            src={ghlForm}
            title="Make-Ready Checklist Request"
            className="mt-4 h-[320px] w-full rounded-md border border-brand-gray"
          />
        ) : (
          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: wire to GHL — VITE_FORM_GHL
              setOpen(false);
            }}
          >
            <input type="email" required placeholder="your@email.com" className="w-full rounded-md bg-brand-gray px-4 py-3 text-brand-white outline-none focus:ring-2 focus:ring-brand-gold" />
            <button type="submit" className="cta-gold w-full rounded-md px-4 py-3 font-bold uppercase">
              Email Me the Checklist
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
