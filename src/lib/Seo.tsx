import { Helmet } from "react-helmet-async";
import { SITE } from "./site-config";
import BrandName from "@/components/fiveserv/BrandName";

type SeoProps = {
  title: string;
  description: string;
  path: string; // e.g. "/make-ready/orlando-fl"
  ogImage?: string;
  noIndex?: boolean;
};

/**
 * Per-page SEO: title, meta, canonical, hreflang en-US (and /es/ prepared),
 * Open Graph, Twitter cards.
 *
 * SEO RULES enforced elsewhere: only 1 H1 per page, brand name in first 100 chars.
 */
export const Seo = ({ title, description, path, ogImage, noIndex }: SeoProps) => {
  const url = `${SITE.url}${path}`;
  const image = ogImage || `${SITE.url}/og-default.png`;
  const fullTitle = title.includes("FiveServ") ? title : `${title} | ${SITE.brand}`;

  return (
    <Helmet>
      <html lang="en-US" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-US" href={url} />
      <link rel="alternate" hrefLang="es" href={`${SITE.url}/es${path}`} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE.brand} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
