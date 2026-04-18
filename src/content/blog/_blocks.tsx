import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/**
 * Structured-content body system for cluster + FAQ articles.
 * Each article is described as an array of blocks. The renderer
 * outputs Tailwind-styled JSX matching the pillar article look.
 *
 * Why structured: keeps 27 articles editable in one file while still
 * producing real, indexable, SEO-ready HTML in initial render.
 */

export type Block =
  | { type: "p"; text: ReactNode }
  | { type: "h2"; text: string }
  | { type: "ul"; items: ReactNode[] }
  | { type: "ol"; items: ReactNode[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; text: ReactNode };

export const renderBlocks = (blocks: Block[]) => (
  <div className="space-y-6 text-base leading-relaxed text-brand-white/90">
    {blocks.map((b, i) => {
      switch (b.type) {
        case "p":
          return <p key={i}>{b.text}</p>;
        case "h2":
          return (
            <h2 key={i} className="font-display text-2xl text-brand-white">
              {b.text}
            </h2>
          );
        case "ul":
          return (
            <ul key={i} className="list-disc space-y-1 pl-6">
              {b.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          );
        case "ol":
          return (
            <ol key={i} className="list-decimal space-y-1 pl-6">
              {b.items.map((it, j) => <li key={j}>{it}</li>)}
            </ol>
          );
        case "table":
          return (
            <div key={i} className="overflow-x-auto rounded-lg border border-brand-gold/30">
              <table className="w-full text-sm">
                <thead className="bg-brand-gray/40">
                  <tr>
                    {b.headers.map((h) => (
                      <th key={h} className="p-3 text-left text-brand-gold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-gold/15 text-brand-white">
                  {b.rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => <td key={ci} className="p-3">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        case "callout":
          return (
            <div key={i} className="rounded-lg border-l-4 border-brand-gold bg-brand-gray/40 p-4">
              <p className="text-brand-white">{b.text}</p>
            </div>
          );
      }
    })}
  </div>
);

/** Common internal-link snippets used at end of every cluster article */
export const InternalLinkCluster = () => (
  <p>
    Explore <Link to="/make-ready" className="text-brand-gold underline">make-ready</Link>,{" "}
    <Link to="/maintenance" className="text-brand-gold underline">maintenance</Link>,{" "}
    <Link to="/renovations" className="text-brand-gold underline">CapEx and renovations</Link>, and{" "}
    <Link to="/residential" className="text-brand-gold underline">residential services</Link>.
    Active across all{" "}
    <Link to="/cities" className="text-brand-gold underline">Central Florida cities</Link>{" "}
    including{" "}
    <Link to="/maintenance-orlando-fl" className="text-brand-gold underline">Orlando</Link> and{" "}
    <Link to="/maintenance-kissimmee-fl" className="text-brand-gold underline">Kissimmee</Link>.
    Get a free quote at our{" "}
    <Link to="/contact" className="text-brand-gold underline">contact page</Link>.
  </p>
);
