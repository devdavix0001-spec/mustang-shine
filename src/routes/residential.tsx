import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ThermometerSun, Wallet, Wind } from "lucide-react";

import residentialImg from "@/assets/residential-home.jpg";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Attic Insulation DFW | Mustang Insulation Services" },
      {
        name: "description",
        content:
          "Home attic insulation, air sealing, removal and crawlspace insulation across Dallas-Fort Worth. R-41 attic guidance, free estimates, lifetime warranty.",
      },
      { property: "og:title", content: "Residential Attic Insulation DFW | Mustang Insulation" },
      {
        property: "og:description",
        content:
          "Lower bills and fewer hot rooms with attic insulation, air sealing and radiant barriers from a family-owned DFW contractor.",
      },
      { property: "og:url", content: "/residential" },
    ],
    links: [{ rel: "canonical", href: "/residential" }],
  }),
  component: ResidentialPage,
});

const benefits = [
  {
    icon: Wallet,
    title: "Lower Energy Bills",
    body: "Under-insulated attics let conditioned air escape all summer. Correct depth and air sealing cut how hard your system has to work.",
  },
  {
    icon: ThermometerSun,
    title: "Even Comfort",
    body: "No more hot upstairs bedrooms or freezing floors. We fix the envelope, not just the symptom.",
  },
  {
    icon: Wind,
    title: "Cleaner Air",
    body: "Sealing attic penetrations keeps dust, fiberglass and attic air out of the rooms you live in.",
  },
];

function ResidentialPage() {
  const list = services.filter((s) => s.track !== "commercial");

  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Insulation that makes your house feel right"
        body="Blown-in attic insulation, batts, spray foam, removal, air sealing and radiant barriers for homes across the Metroplex — installed by our own employees."
        image={residentialImg}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-red px-7 py-4 font-display text-sm font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
        >
          Get a Free Estimate <ArrowRight className="size-4" />
        </Link>
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 border border-white/60 px-7 py-4 font-display text-sm font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-white/10"
        >
          <Phone className="size-4" strokeWidth={2.5} /> {site.phone}
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <div className="h-full border border-border p-7">
                <b.icon className="size-6 text-red" strokeWidth={2.5} />
                <h2 className="mt-5 text-xl">{b.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="slash-texture border-y border-ink-line bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-red">R-Value Guidance</p>
            <h2 className="mt-4 text-3xl text-white uppercase sm:text-4xl">
              For DFW attics, we recommend R-41 — about 14 inches
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              North Texas summers push attic temperatures well past 130°F. Most homes we open up
              are sitting at half the insulation they need, often settled, displaced by
              contractors, or damaged by pests. We measure what's actually there, air seal
              first, then bring the attic up to current standards with eco-friendly products.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="border border-ink-line bg-ink-soft p-8">
              <div className="border-b border-ink-line pb-5">
                <dt className="font-display text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                  Recommended attic R-value
                </dt>
                <dd className="mt-2 font-display text-4xl text-white">R-41</dd>
              </div>
              <div className="border-b border-ink-line py-5">
                <dt className="font-display text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                  Approximate depth
                </dt>
                <dd className="mt-2 font-display text-4xl text-white">14&quot;</dd>
              </div>
              <div className="pt-5">
                <dt className="font-display text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                  Warranty on installs
                </dt>
                <dd className="mt-2 font-display text-4xl text-white">Lifetime</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">Residential Services</p>
          <h2 className="mt-4 text-3xl uppercase sm:text-4xl">What we install in homes</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <Reveal key={service.slug} delay={i * 40}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Homeowners"
        title="Get your attic evaluated for free"
        body="We'll measure your existing insulation, check for air leaks and pest damage, and tell you exactly what your home needs."
      />
    </>
  );
}
