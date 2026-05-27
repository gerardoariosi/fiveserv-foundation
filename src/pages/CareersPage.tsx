import Seo from "@/lib/Seo";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import GhlFormEmbed from "@/components/fiveserv/GhlFormEmbed";
import SectionHeading from "@/components/fiveserv/SectionHeading";
import BrandName from "@/components/fiveserv/BrandName";

const VALUES = [
  {
    title: "Family Culture",
    body: "Everyone on our team is treated like family. No politics, no drama. Just good work and mutual respect.",
  },
  {
    title: "Consistent Work",
    body: "Property management never stops. Our crews have steady work year-round. No slow seasons, no uncertainty.",
  },
  {
    title: "Room to Grow",
    body: "We are expanding to Tampa Bay and beyond. The people who join us now grow with the company.",
  },
];

const CareersPage = () => {
  return (
    <>
      <Seo
        title="Careers | FiveServ Property Solutions Orlando FL"
        description="FiveServ Property Solutions is growing across Central Florida and looking for skilled maintenance technicians, painters, and make-ready crew. Leave your information and we will be in touch."
        path="/careers"
      />

      {/* Hero */}
      <section
        className="relative bg-brand-black pt-stack pb-16"
        style={{
          backgroundImage: 'url("/images/about-hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-black/75" />
        <div className="relative z-10">
          <div className="container">
            <p className="uppercase tracking-[0.12em] text-brand-gold text-base font-bold">
              — Careers at <BrandName variant="light" /> Property Solutions
            </p>
            <h1 className="mt-3 max-w-4xl font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
              We Are Growing.{" "}
              <span className="block text-brand-gold">Come Build Something With Us.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-300">
              We are expanding across Central Florida and looking for people who take pride in their work. No corporate nonsense. Just a family business that does things right.
            </p>

            <AIOverviewBlock
              hidden
              directAnswer="FiveServ Property Solutions is a growing property maintenance company in Orlando, FL expanding across Central Florida and looking for skilled maintenance technicians, painters, and make-ready crew to join their family-owned team."
              supportingFacts="Family-owned company based in Orlando. 2 active crews. 18 cities across Central Florida. Expanding to Tampa Bay. Looking for maintenance technicians, painters, drywall specialists, and make-ready crew."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="container py-24 lg:py-28">
          <SectionHeading
            eyebrow="Why Work With Us"
            subtext="A family-owned company that takes care of its people the same way it takes care of its clients."
          >
            What You Get When You Join Us
          </SectionHeading>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h3 className="font-display text-2xl font-bold text-brand-black">
                  {v.title}
                </h3>
                <div className="mt-3 h-[2px] w-12 bg-brand-gold" />
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-50">
        <div className="container py-24 lg:py-28">
          <SectionHeading
            eyebrow="Apply Now"
            subtext="We are always looking for great people even when we are not actively hiring. Fill out the form and we will reach out when the right opportunity opens up."
          >
            Leave Your Information
          </SectionHeading>
          <div className="mt-12">
            <GhlFormEmbed variant="careers" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
