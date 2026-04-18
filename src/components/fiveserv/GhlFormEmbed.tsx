/**
 * GhlFormEmbed — renders a GoHighLevel inline form iframe.
 * The loader script (https://link.msgsndr.com/js/form_embed.js) is added
 * once in index.html, so we only render the iframe markup here.
 *
 * Use the `variant` prop to pick a pre-configured form, or pass a custom
 * `formId` / `name` / `height` for one-offs.
 */

type Variant = "b2b" | "b2c" | "checklist" | "scorecard";

const FORMS: Record<
  Variant,
  { id: string; name: string; height: number; title: string }
> = {
  b2b: {
    id: "z5uNJBg1vr6No9csHxoY",
    name: "Web Form B2B",
    height: 863,
    title: "Web Form B2B",
  },
  b2c: {
    id: "84fOz26uoCXM6kwUfDIr",
    name: "Web Form B2C",
    height: 788,
    title: "Web Form B2C",
  },
  checklist: {
    id: "8YQLypCpn0HEdq9gYi4R",
    name: "Lead Magnet Make Ready Checklist",
    height: 547,
    title: "Lead Magnet Make Ready Checklist",
  },
  scorecard: {
    id: "53afweSHFBc5R9ugE9qA",
    name: "Lead Magnet Vendor Scorecard",
    height: 626,
    title: "Lead Magnet Vendor Scorecard",
  },
};

type Props = {
  variant: Variant;
  className?: string;
};

export const GhlFormEmbed = ({ variant, className }: Props) => {
  const cfg = FORMS[variant];
  return (
    <div className={className ?? "max-w-2xl mx-auto"}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${cfg.id}`}
        style={{
          width: "100%",
          height: `${cfg.height}px`,
          border: "none",
          borderRadius: "3px",
        }}
        id={`inline-${cfg.id}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name={cfg.name}
        data-height={cfg.height}
        data-form-id={cfg.id}
        title={cfg.title}
      />
    </div>
  );
};

export default GhlFormEmbed;
