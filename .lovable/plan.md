

## Popup Redesign Plan — Servpro-style Light Theme

### Audit Findings

Searched the codebase for all popup/modal/overlay components:

**Active popups found:**
1. `src/components/fiveserv/ExitIntentPopup.tsx` — **needs redesign** (currently dark `bg-brand-black` + gold border, old AI style)

**Other dialog/overlay components (shadcn primitives — already neutral, no redesign needed):**
- `src/components/ui/dialog.tsx`, `alert-dialog.tsx`, `sheet.tsx`, `drawer.tsx`, `popover.tsx`, `sonner.tsx`, `toast.tsx` — these use semantic tokens (`bg-background`) and are not styled "dark/gold". No instances of custom themed modals besides ExitIntentPopup.
- `SofiaChat.tsx` — chat widget, not a modal popup. Not in scope per request ("popups and modals").

**Conclusion:** Only `ExitIntentPopup.tsx` needs rework.

### Redesign Spec for ExitIntentPopup

**Backdrop:**
- `fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4` (no blur)

**Container:**
- `bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] max-w-[480px] w-full p-10 relative max-h-[90vh] overflow-y-auto`

**Close button (top-right):**
- `absolute top-4 right-4 text-gray-400 hover:text-gray-600`
- `<X className="h-5 w-5" />`

**Lead magnet offer card (gold accent block above form):**
- `border-l-4 border-brand-gold bg-amber-50 p-4 rounded-r-lg`
- Contains a small "FREE DOWNLOAD" eyebrow + checklist label

**Headline:**
- `font-display font-bold text-2xl text-gray-900`
- Copy: `Free: Make-Ready Checklist from <BrandName variant="dark" />`
- Use `BrandName` component with `variant="dark"` (gold F + gray-900 "iveServ") for light bg

**Body text:**
- `text-base text-gray-600 leading-relaxed mt-2`
- "The 47-item checklist we use on every unit. Yours, free."

**Form area:**
- White wrapper, no extra background needed (form is already on white)
- `mt-6`
- The embedded GHL form fields are controlled by GHL — we cannot restyle iframe inputs from outside. Keep wrapper clean. (Field-level styling spec applies only to native fields; GHL embed renders its own.)

**Note on CTA button styling:**
- The submit CTA lives inside the GHL iframe and cannot be restyled from our code. The spec's button/field rules will apply automatically to any future native React forms; for the GHL embed we just provide a clean white container.

### Files to Edit

1. `src/components/fiveserv/ExitIntentPopup.tsx` — full rewrite of JSX + classes per spec above. Logic (exit intent hook, sessionStorage gate, open state) stays identical.

### Out of Scope

- shadcn primitives (already neutral)
- `SofiaChat` (chat widget, not a popup)
- GHL iframe internals (cannot be styled from parent)

