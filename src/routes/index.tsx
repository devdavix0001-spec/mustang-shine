import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, CheckCircle2, Home, Phone, ShieldCheck, Users } from "lucide-react";

import project1 from "@/assets/old-site/mustang-project-1.jpg";
import project20 from "@/assets/old-site/mustang-project-20.jpg";
import project21 from "@/assets/old-site/mustang-project-21.jpg";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { cities, process, services, site, testimonials, trustPoints } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Insulation Contractor Dallas-Fort Worth | Mustang Insulation Services" },
      {
        name: "description",
        content:
          "Mustang Insulation Services provides residential and commercial insulation, spray foam, air sealing, and attic upgrades across Dallas-Fort Worth. Call 817-770-1867.",
      },
      {
        property: "og:title",
        content: "Insulation Contractor Dallas-Fort Worth | Mustang Insulation Services",
      },
      {
        property: "og:description",
        content:
          "DFW insulation contractor for homes and commercial buildings. Attic upgrades, spray foam, air sealing, and building-performance solutions designed to improve comfort and efficiency.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const why = [
  {
    icon: Users,
    title: "Experienced Crews",
    body: "Our team installs the work with the care, consistency, and accountability you expect from a professional contractor.",
  },
  {
    icon: ShieldCheck,
    title: "Product & Workmanship Warranties",
    body: "We explain the applicable product and installation coverage for your scope so you know exactly what is protected.",
  },
  {
    icon: CheckCircle2,
    title: "Straightforward Recommendations",
    body: "We measure the actual building envelope, discuss options clearly, and recommend what makes sense for your property and budget.",
  },
  {
    icon: Home,
    title: "Local & Family Owned",
    body: "Mustang is a locally owned company focused on quality workmanship, clear communication, and long-term customer relationships.",
  },
];

function Index() {
  const featuredServices = [
    services.find((service) => service.slug === "blown-in-attic-insulation"),
    services.find((service) => service.slug === "spray-foam-insulation"),
    services.find((service) => service.slug === "attic-air-sealing"),
    services.find((service) => service.slug === "metal-building-insulation"),
  ].filter(Boolean) as typeof services;

  return (
    <>
     <section className="relative isolate overflow-hidden bg-ink">
  <img
    src={project1}
    alt="Mustang Insulation technician installing blown-in attic insulation in a DFW home"
    className="absolute inset-0 size-full object-cover"
    width={1920}
    height={1088}
  />

  {/* Left-to-right gradient: dark on the left for text contrast, fades to transparent so the image shows on the right */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-r from-red-950/50 via-transparent to-transparent" />

  <div className="slash-texture absolute inset-0" />
  <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
    <p className="eyebrow inline-block rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase sm:text-sm">
      Arlington · Fort Worth · Dallas
    </p>
    <h1 className="mt-6 max-w-4xl text-5xl leading-[1.02] text-white uppercase sm:text-6xl lg:text-7xl">
      Smarter insulation.
      <br />
      Better-performing spaces.
    </h1>
    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
      Residential and commercial insulation solutions engineered for comfort, efficiency, and
      long-term building performance across Dallas-Fort Worth.
    </p>
    <div className="mt-9 flex flex-wrap gap-3">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-red px-7 py-4 font-display text-sm font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
      >
        Get an Estimate <ArrowRight className="size-4" />
      </Link>
      
        href={site.phoneHref}
        className="inline-flex items-center gap-2 border border-white/60 px-7 py-4 font-display text-sm font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-white/10"
      >
        <Phone className="size-4" strokeWidth={2.5} /> Call {site.phone}
      </a>
    </div>
  </div>
</section>

      <div className="border-y border-ink-line bg-ink-soft">
        <ul className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:px-8 md:grid-cols-4">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2.5 font-display text-[0.72rem] font-bold tracking-[0.14em] text-white/80 uppercase"
            >
              <CheckCircle2 className="size-4 shrink-0 text-red" strokeWidth={2.5} />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">What We Do</p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight uppercase sm:text-4xl">
            Insulation services for homes and commercial buildings
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From a single hot upstairs bedroom to a 40,000 sq ft metal building, we scope it, price
            it honestly, and install it with experienced crews.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 50}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="link-underline font-display text-sm font-bold tracking-[0.14em] uppercase"
          >
            View all 12 services
          </Link>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="group relative isolate overflow-hidden">
            <img
              src={project20}
              alt="Residential home in the Dallas-Fort Worth area at dusk"
              className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
              width={1600}
              height={1000}
            />
            <div className="photo-scrim absolute inset-0" />
            <div className="relative flex min-h-80 flex-col justify-end p-8">
              <Home className="size-7 text-red" strokeWidth={2.5} />
              <h3 className="mt-4 text-2xl text-white uppercase">Residential</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                Attics, walls, crawlspaces, and pier-and-beam homes. We evaluate the home, air
                leakage, and insulation condition before recommending the right approach.
              </p>
              <Link
                to="/residential"
                className="mt-6 inline-flex w-fit items-center gap-2 bg-red px-6 py-3 font-display text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
              >
                Residential services <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="group relative isolate overflow-hidden">
            <img
              src={project21}
              alt="Metal warehouse building insulated with spray foam and batt insulation"
              className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
              width={1600}
              height={1000}
            />
            <div className="photo-scrim absolute inset-0" />
            <div className="relative flex min-h-80 flex-col justify-end p-8">
              <Building2 className="size-7 text-red" strokeWidth={2.5} />
              <h3 className="mt-4 text-2xl text-white uppercase">Commercial</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                Metal buildings, warehouses, shops and offices. Soundproofing, fire-protective
                coatings and phased schedules that keep you operating.
              </p>
              <Link
                to="/commercial"
                className="mt-6 inline-flex w-fit items-center gap-2 bg-red px-6 py-3 font-display text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
              >
                Commercial services <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="slash-texture bg-ink py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Why Mustang</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight text-white uppercase sm:text-4xl">
              Building better spaces across DFW
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="hover-lift h-full border border-ink-line bg-ink-soft p-7 hover:border-red">
                  <item.icon className="size-6 text-red" strokeWidth={2.5} />
                  <h3 className="mt-5 text-lg text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Mustang brand statement</p>
            <h2 className="mt-4 max-w-4xl text-3xl uppercase sm:text-4xl">
              Not your typical insulation company.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Better processes. Better communication. Better workmanship. Better-performing spaces.
              Mustang combines experienced crews, modern tools, and practical recommendations to
              design insulation systems around the building instead of the lowest-cost shortcut.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">How It Works</p>
          <h2 className="mt-4 text-3xl uppercase sm:text-4xl">
            Inspect → Quote → Install → Warranty
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 60} as="li">
              <div className="border-t-2 border-red pt-5">
                <span className="font-display text-3xl text-muted-foreground">{item.step}</span>
                <h3 className="mt-2 text-xl uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Reviews</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">
              Unmatched customer service with quality work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.quote} delay={i * 60}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/reviews"
              className="link-underline font-display text-sm font-bold tracking-[0.14em] uppercase"
            >
              Read more reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">Service Area</p>
          <h2 className="mt-4 text-3xl uppercase sm:text-4xl">
            Serving the Dallas-Fort Worth Metroplex
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Based in the Mid-Cities and working across Tarrant, Dallas and Denton counties. Don't
            see your city? Call {site.phone} — chances are we're already nearby.
          </p>
        </Reveal>
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {cities.map((city) => (
            <li
              key={city}
              className="border border-border px-4 py-2 font-display text-xs font-bold tracking-[0.12em] uppercase"
            >
              {city}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
