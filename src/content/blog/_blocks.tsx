import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/**
 * Structured-content body system for cluster + FAQ articles.
 * Renders premium light-theme editorial typography on the white
 * article background defined by BlogArticleLayout.
 */

export type Block =
  | { type: "p"; text: ReactNode }
  | { type: "h2"; text: ReactNode }
  | { type: "ul"; items: ReactNode[] }
  | { type: "ol"; items: ReactNode[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; text: ReactNode };

export const renderBlocks = (blocks: Block[]) => (
  <div className="prose-blog space-y-6 text-[17px] leading-[1.8] font-light text-gray-800 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_a]:text-brand-black [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-brand-gold [&_a]:decoration-2 hover:[&_a]:text-brand-gold">
    {blocks.map((b, i) => {
      switch (b.type) {
        case "p":
          return <p key={i}>{b.text}</p>;
        case "h2":
          return (
            <h2
              key={i}
              className="mt-12 mb-2 border-l-4 border-brand-gold pl-4 font-display text-3xl font-bold text-gray-900"
            >
              {b.text}
            </h2>
          );
        case "ul":
          return (
            <ul
              key={i}
              className="list-disc space-y-2 pl-6 marker:text-brand-gold"
            >
              {b.items.map((it, j) => (
                <li key={j} className="pl-1">{it}</li>
              ))}
            </ul>
          );
        case "ol":
          return (
            <ol
              key={i}
              className="list-decimal space-y-2 pl-6 marker:font-bold marker:text-brand-gold"
            >
              {b.items.map((it, j) => (
                <li key={j} className="pl-1">{it}</li>
              ))}
            </ol>
          );
        case "table":
          return (
            <div
              key={i}
              className="my-4 overflow-x-auto rounded-xl border border-gray-200 shadow-sm"
            >
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    {b.headers.map((h) => (
                      <th
                        key={h}
                        className="border-b border-gray-200 p-4 text-left font-display font-bold text-gray-900"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-800">
                  {b.rows.map((row, ri) => (
                    <tr key={ri} className="even:bg-gray-50/60 hover:bg-amber-50/40 transition-colors">
                      {row.map((cell, ci) => (
                        <td key={ci} className="p-4 align-top">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        case "callout":
          return (
            <div
              key={i}
              className="my-2 rounded-r-lg border-l-4 border-brand-gold bg-amber-50/60 p-5 italic text-gray-900 shadow-sm"
            >
              <p className="text-[16px] leading-relaxed">{b.text}</p>
            </div>
          );
      }
    })}
  </div>
);

/** Common internal-link snippets used at end of every cluster article */
export const InternalLinkCluster = () => (
  <p className="text-gray-700">
    Explore{" "}
    <Link to="/make-ready" className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold">make-ready</Link>,{" "}
    <Link to="/maintenance" className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold">maintenance</Link>,{" "}
    <Link to="/renovations" className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold">CapEx and renovations</Link>, and{" "}
    <Link to="/residential" className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold">residential services</Link>.
    Active across all{" "}
    <Link to="/cities" className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold">Central Florida cities</Link>{" "}
    including{" "}
    <Link to="/maintenance-orlando-fl" className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold">Orlando</Link> and{" "}
    <Link to="/maintenance-kissimmee-fl" className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold">Kissimmee</Link>.
    Get a free quote at our{" "}
    <Link to="/contact" className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold">contact page</Link>.
  </p>
);
