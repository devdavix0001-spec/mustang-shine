import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Flame, Ruler, Volume2 } from "lucide-react";

import commercialImg from "@/assets/old-site/mustang-project-19.jpg";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial & Metal Building Insulation DFW | Mustang Insulation" },
      {
        name: "description",
        content:
          "Metal building, warehouse and office insulation across Dallas-Fort Worth. Spray foam, soundproofing and intumescent fire-protective coatings. Get an estimate.",
      },
      {
        property: "og:title",
        content: "Commercial Insulation Contractor DFW | Mustang Insulation",
      },
      {
        property: "og:description",
        content:
          "Large-scale insulation for metal buildings, warehouses and offices in DFW — phased schedules, in-house crews, code-compliant coatings.",
      },
      { property: "og:url", content: "/commercial" },
    ],
    links: [{ rel: "canonical", href: "/commercial" }],
  }),
  component: CommercialPage,
});

const capabilities = [
  {
    icon: Ruler,
    title: "Large-Scale Scope",
    body: "Metal buildings, warehouses, shops, retail build-outs and multi-unit properties — measured, specified and priced clearly.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled Around You",
    body: "Phased and after-hours work so production, tenants and customers aren't interrupted.",
  },
  {
    icon: Volume2,
    title: "Acoustic Control",
    body: "Soundproofing for offices, demising walls, mechanical rooms and shared tenant spaces.",
  },
  {
    icon: Flame,
    title: "Fire-Protective Coatings",
    body: "Intumescent coatings applied over spray foam to satisfy thermal-barrier requirements.",
  },
];

function CommercialPage() {
  const list = services.filter((s) => s.track !== "residential");

  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Commercial insulation built for the job"
        body="From tenant improvements and retail to warehouses, metal buildings, and new construction, Mustang coordinates the insulation scope around your drawings, schedule, and performance requirements."
        image={commercialImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">Capabilities</p>
          <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
            A commercial insulation partner GCs can bid with confidence
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="hover-lift h-full border border-border p-7 hover:border-red">
                <c.icon className="size-6 text-red" strokeWidth={2.5} />
                <h3 className="mt-5 text-lg">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Commercial process</p>
            <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
              We scope the work around your building, your schedule, and your code requirements
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Walk the building, measure square footage, and determine where thermal loss and air leakage are happening.",
              "Recommend a product and R-value strategy to match the building type, occupancy, and climate demands.",
              "Install in phases if needed so production, tenants, or operations are not interrupted.",
              "Finish with a clear walkthrough and a written scope that explains the materials, coverage, and performance goals.",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="h-full border border-border bg-background p-6">
                  <span className="font-display text-3xl text-red">0{i + 1}</span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Commercial Services</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">Scopes we handle</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((service, i) => (
              <Reveal key={service.slug} delay={i * 50}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="slash-texture bg-ink py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="eyebrow text-red">Commercial estimate</p>
            <h2 className="mt-4 text-3xl text-white uppercase sm:text-4xl">
              Send the drawings, scope, or building details
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Share square footage, building type and timeline. We'll walk the site, confirm scope,
              and put a transparent best-rate quote in writing — including materials, R-value and
              any code requirements.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li>· Free site evaluations for commercial projects</li>
              <li>· In-house crews, fully insured</li>
              <li>· Eco-friendly products meeting current standards</li>
              <li>· Coordination with GCs and property management</li>
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <QuoteForm dark heading="Commercial quote request" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
