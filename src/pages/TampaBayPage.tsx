import { useState, type FormEvent } from "react";
import Seo from "@/lib/Seo";
import { Helmet } from "react-helmet-async";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import Logo from "@/components/fiveserv/Logo";
import { useToast } from "@/hooks/use-toast";

const TampaBayPage = () => {
  const path = "/tampa-bay-fl/";
  const title = "Make-Ready Services Tampa Bay FL — Coming Soon | FiveServ";
  const description =
    "FiveServ Property Solutions is expanding to Tampa Bay. Join the waitlist for make-ready and property maintenance services.";

  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", units: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Tampa Bay waitlist submission:", form);
    setSubmitted(true);
    toast({
      title: "You're on the list",
      description: "We'll be in touch before we launch in Tampa Bay.",
    });
  };

  const tampaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE.brand} — Tampa Bay, FL (Coming Soon)`,
    url: `${SITE.url}${path}`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33601",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "Tampa Bay, FL" },
  };

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <Helmet>
        <link rel="canonical" href={`${SITE.url}${path}`} />
        <script type="application/ld+json">{JSON.stringify(tampaSchema)}</script>
      </Helmet>
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Tampa Bay", url: `${SITE.url}${path}` },
        ]}
      />

      <section className="min-h-screen bg-brand-black px-6 pt-32 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Logo variant="light" imgClassName="h-20 w-auto object-contain" showTagline />
          </div>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            Coming Soon
          </p>
          <h1 className="mt-4 font-display font-black text-4xl text-white sm:text-5xl">
            FiveServ is Coming to <span className="text-brand-gold">Tampa Bay, Florida</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We are expanding to Tampa Bay. Be the first to know when we launch.
          </p>

          {/* Waitlist form */}
          <div className="mt-12 rounded-lg bg-[#2D2D2D] p-8 text-left shadow-xl">
            {submitted ? (
              <div className="py-8 text-center">
                <p className="font-display text-2xl text-brand-gold">You're on the list.</p>
                <p className="mt-2 text-gray-300">We'll be in touch before we launch.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h2 className="font-display text-xl text-white">Join the Waitlist</h2>
                {[
                  { name: "name", label: "Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "company", label: "Company", type: "text", required: true },
                  { name: "units", label: "Number of units", type: "number", required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-300"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={onChange}
                      className="mt-1 block w-full rounded-md border border-gray-600 bg-white px-3 py-2 text-brand-black placeholder:text-gray-500 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-black transition-opacity hover:opacity-90"
                >
                  Join the Waitlist
                </button>
              </form>
            )}
          </div>

          <p className="mt-12 text-sm text-gray-500">
            We'll contact you before we launch in the Tampa Bay area.
          </p>
        </div>
      </section>
    </>
  );
};

export default TampaBayPage;
