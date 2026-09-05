import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ThermometerSun, Wallet, Wind } from "lucide-react";

import residential1 from "@/assets/Residential/residential-1.png";
import residential2 from "@/assets/Residential/residential-2.png";
import residential3 from "@/assets/Residential/residential-3.png";
import residential4 from "@/assets/Residential/residential-4.png";
import residential5 from "@/assets/Residential/residential-5.png";

import closedCell1 from "@/assets/Residential/New Construction - Closed Cell/New Construction - Closed Cell-1.jpg";
import closedCell2 from "@/assets/Residential/New Construction - Closed Cell/New Construction - Closed Cell-2.jpg";

import openCell1 from "@/assets/Residential/New Construction - Open Cell/New Construction - Open Cell-1.jpg";
import openCell2 from "@/assets/Residential/New Construction - Open Cell/New Construction - Open Cell-2.jpg";
import openCell3 from "@/assets/Residential/New Construction - Open Cell/New Construction - Open Cell-3.jpg";
import openCell4 from "@/assets/Residential/New Construction - Open Cell/New Construction - Open Cell-4.jpg";
import openCell5 from "@/assets/Residential/New Construction - Open Cell/New Construction - Open Cell-5.jpg";
import openCell6 from "@/assets/Residential/New Construction - Open Cell/New Construction - Open Cell-6.jpg";
import openCell7 from "@/assets/Residential/New Construction - Open Cell/New Construction - Open Cell-7.jpg";
import openCell8 from "@/assets/Residential/New Construction - Open Cell/New Construction - Open Cell-8.jpg";

import nmf1 from "@/assets/Residential/New multi family build - 17 unit condos Arlington/Nmf-1.png";
import nmf2 from "@/assets/Residential/New multi family build - 17 unit condos Arlington/Nmf-2.png";
import nmf3 from "@/assets/Residential/New multi family build - 17 unit condos Arlington/Nmf-3.png";
import nmf4 from "@/assets/Residential/New multi family build - 17 unit condos Arlington/Nmf-4.png";
import nmf5 from "@/assets/Residential/New multi family build - 17 unit condos Arlington/Nmf-5.png";
import nmf6 from "@/assets/Residential/New multi family build - 17 unit condos Arlington/Nmf-6.png";
import nmf7 from "@/assets/Residential/New multi family build - 17 unit condos Arlington/Nmf-7.png";
import nmf8 from "@/assets/Residential/New multi family build - 17 unit condos Arlington/Nmf-8.png";

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
          "Home attic insulation, air sealing, removal, and crawlspace solutions across Dallas-Fort Worth. We recommend insulation systems based on the home, existing materials, and local code needs.",
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

type ProjectCategory = "all" | "homes" | "closed-cell" | "open-cell" | "multifamily";

type Project = {
  src: string;
  alt: string;
  category: Exclude<ProjectCategory, "all">;
};

const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "homes", label: "Homes" },
  { id: "closed-cell", label: "New Construction — Closed Cell" },
  { id: "open-cell", label: "New Construction — Open Cell" },
  { id: "multifamily", label: "17-Unit Condos, Arlington" },
];

const projects: Project[] = [
  { src: residential1, alt: "Residential attic insulation project in a DFW home", category: "homes" },
  { src: residential2, alt: "Residential attic insulation project in a DFW home", category: "homes" },
  { src: residential3, alt: "Residential attic insulation project in a DFW home", category: "homes" },
  { src: residential4, alt: "Residential attic insulation project in a DFW home", category: "homes" },
  { src: residential5, alt: "Residential attic insulation project in a DFW home", category: "homes" },
  {
    src: closedCell1,
    alt: "New construction closed-cell spray foam insulation install",
    category: "closed-cell",
  },
  {
    src: closedCell2,
    alt: "New construction closed-cell spray foam insulation install",
    category: "closed-cell",
  },
  { src: openCell1, alt: "New construction open-cell spray foam insulation install", category: "open-cell" },
  { src: openCell2, alt: "New construction open-cell spray foam insulation install", category: "open-cell" },
  { src: openCell3, alt: "New construction open-cell spray foam insulation install", category: "open-cell" },
  { src: openCell4, alt: "New construction open-cell spray foam insulation install", category: "open-cell" },
  { src: openCell5, alt: "New construction open-cell spray foam insulation install", category: "open-cell" },
  { src: openCell6, alt: "New construction open-cell spray foam insulation install", category: "open-cell" },
  { src: openCell7, alt: "New construction open-cell spray foam insulation install", category: "open-cell" },
  { src: openCell8, alt: "New construction open-cell spray foam insulation install", category: "open-cell" },
  { src: nmf1, alt: "17-unit condo build insulation project in Arlington, TX", category: "multifamily" },
  { src: nmf2, alt: "17-unit condo build insulation project in Arlington, TX", category: "multifamily" },
  { src: nmf3, alt: "17-unit condo build insulation project in Arlington, TX", category: "multifamily" },
  { src: nmf4, alt: "17-unit condo build insulation project in Arlington, TX", category: "multifamily" },
  { src: nmf5, alt: "17-unit condo build insulation project in Arlington, TX", category: "multifamily" },
  { src: nmf6, alt: "17-unit condo build insulation project in Arlington, TX", category: "multifamily" },
  { src: nmf7, alt: "17-unit condo build insulation project in Arlington, TX", category: "multifamily" },
  { src: nmf8, alt: "17-unit condo build insulation project in Arlington, TX", category: "multifamily" },
];

function ResidentialPage() {
  const list = services.filter((s) => s.track !== "commercial");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Insulation that makes your house feel right"
        body="Blown-in attic insulation, batts, spray foam, removal, air sealing and radiant barriers for homes across the Metroplex — installed by experienced crews."
        image={residential1}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-red px-7 py-4 font-display text-sm font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
        >
          Get an Estimate <ArrowRight className="size-4" />
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

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">What a proper attic upgrade includes</p>
            <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
              The right fix is more than just adding more insulation
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Measure the current attic depth, air leaks, and moisture issues before recommending a scope.",
              "Seal attic penetrations, top plates, and can-light gaps so conditioned air stops leaking out.",
              "Remove old, damaged or settled material when needed, then re-install to uniform depth and coverage.",
              "Walk the finished attic with you and explain what was done, what changed, and how it should perform.",
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

      <section className="slash-texture border-y border-ink-line bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-red">Common attic upgrade levels</p>
            <h2 className="mt-4 text-3xl text-white uppercase sm:text-4xl">
              Attic targets vary by home, roof system, and existing conditions
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              Typical upgrade levels we see in DFW homes include R-38, R-44, R-49, and R-60, with
              approximate insulation depths that vary based on the product and the attic
              configuration. Final recommendations depend on the existing insulation, the roof and
              framing assembly, local code requirements, and the condition of the home.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Mustang evaluates each attic before recommending a system. We look at what is already
              there, where air is leaking, and what will improve performance without overbuilding
              the space.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="border border-ink-line bg-ink-soft p-8">
              <div className="border-b border-ink-line pb-5">
                <dt className="font-display text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                  Typical target ranges
                </dt>
                <dd className="mt-2 font-display text-3xl text-white">R-38 · R-44 · R-49 · R-60</dd>
              </div>
              <div className="border-b border-ink-line py-5">
                <dt className="font-display text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                  Final recommendation
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/70">
                  Depends on the existing insulation, attic layout, product selected, local code,
                  and the condition of the home.
                </dd>
              </div>
              <div className="pt-5">
                <dt className="font-display text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                  Warranty guidance
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/70">
                  Product and workmanship coverage varies by system and installation scope.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">Recent Residential Projects</p>
          <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
            A look at homes, new builds and multi-family work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From single-family attics to new-construction spray foam and a 17-unit condo build in
            Arlington — a sample of recent residential work across DFW.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`border px-4 py-2 font-display text-xs font-bold tracking-[0.12em] uppercase transition-colors ${
                activeCategory === cat.id
                  ? "border-red bg-red text-white"
                  : "border-border text-foreground hover:border-red hover:text-red"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, i) => (
            <div
              key={project.src}
              className="hover-lift group relative isolate aspect-[4/3] overflow-hidden border border-border"
            >
              <img
                src={project.src}
                alt={project.alt}
                loading={i < 8 ? "eager" : "lazy"}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-24">
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
