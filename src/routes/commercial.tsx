import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Flame, Ruler, Volume2 } from "lucide-react";

import commercialImg from "@/assets/commercial-metal-building.jpg";
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
          "Metal building, warehouse and office insulation across Dallas-Fort Worth. Spray foam, soundproofing and intumescent fire-protective coatings. Request a quote.",
      },
      { property: "og:title", content: "Commercial Insulation Contractor DFW | Mustang Insulation" },
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
        title="Metal building & warehouse insulation"
        body="Insulation built for the scale, schedule and code requirements of commercial property. Our employees do the work — never a rotating cast of subs."
        image={commercialImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">Capabilities</p>
          <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
            Built for property managers, GCs and building owners
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
            <p className="eyebrow text-red">Request a Quote</p>
            <h2 className="mt-4 text-3xl text-white uppercase sm:text-4xl">
              Send us the building, we'll send you the number
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Share square footage, building type and timeline. We'll walk the site, confirm
              scope, and put a transparent best-rate quote in writing — including materials,
              R-value and any code requirements.
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
