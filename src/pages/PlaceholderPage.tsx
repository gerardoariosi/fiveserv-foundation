import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";

/** Generic placeholder page used for foundation-phase routes (services list, cities list, about, blog, contact, privacy, terms). */
type PlaceholderPageProps = {
  title: string;
  description: string;
  path: string;
  heading: string;
};

const PlaceholderPage = ({ title, description, path, heading }: PlaceholderPageProps) => (
  <>
    <Seo title={title} description={description} path={path} />
    <SchemaOrg breadcrumbs={[{ name: "Home", url: SITE.url }, { name: heading, url: `${SITE.url}${path}` }]} />
    <section className="bg-brand-black pt-stack pb-24">
      <div className="container">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-gold"><BrandName variant="light" /> Property Solutions</p>
        <h1 className="mt-3 font-display text-4xl text-brand-black sm:text-5xl">{heading}</h1>
        <p className="mt-6 max-w-2xl text-gray-300">
          This page is part of the foundation. Content will be built in the next phase.
        </p>
      </div>
    </section>
  </>
);

export default PlaceholderPage;
