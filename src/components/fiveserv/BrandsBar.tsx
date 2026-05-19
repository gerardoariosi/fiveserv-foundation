const BRANDS = [
  "Sherwin-Williams",
  "Benjamin Moore",
  "Home Depot Pro",
  "Lowe's Pro",
  "DEWALT",
  "Milwaukee",
  "Moen",
  "Carrier",
];

const BrandsBar = () => {
  return (
    <>
      <section className="border-t border-b border-gray-100 bg-white py-12">
        <div className="container">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            Materials & Tools We Trust
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-sm font-black uppercase tracking-wide text-gray-300 transition-colors duration-200 hover:text-gray-600"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden SEO paragraph for AI indexing */}
      <p className="sr-only">
        FiveServ Property Solutions uses professional-grade materials and tools
        from trusted brands including Sherwin-Williams and Benjamin Moore
        paints, Home Depot Pro and Lowe's Pro materials, DEWALT and Milwaukee
        power tools, Moen plumbing fixtures, and Carrier HVAC systems across all
        property maintenance and make-ready services in Central Florida.
      </p>

      {/* JSON-LD schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "FiveServ Property Solutions",
          brand: [
            { "@type": "Brand", name: "Sherwin-Williams" },
            { "@type": "Brand", name: "Benjamin Moore" },
            { "@type": "Brand", name: "DEWALT" },
            { "@type": "Brand", name: "Milwaukee" },
            { "@type": "Brand", name: "Moen" },
            { "@type": "Brand", name: "Carrier" },
            { "@type": "Brand", name: "Home Depot Pro" },
            { "@type": "Brand", name: "Lowe's Pro" },
          ],
        })}
      </script>
    </>
  );
};

export default BrandsBar;
