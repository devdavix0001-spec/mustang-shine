import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Flame, Ruler, Volume2 } from "lucide-react";

import commercialImg from "@/assets/old-site/mustang-project-19.jpg";

import amazon1 from "@/assets/Commercial/Amazon/Amazon-1.jpg";
import amazon2 from "@/assets/Commercial/Amazon/Amazon-2.jpg";
import amazon3 from "@/assets/Commercial/Amazon/Amazon-3.jpg";
import amazon4 from "@/assets/Commercial/Amazon/Amazon-4.jpg";

import autoShop1 from "@/assets/Commercial/Auto Shop/Autoshop-1.jpg";
import autoShop2 from "@/assets/Commercial/Auto Shop/Autoshop-2.jpg";
import autoShop3 from "@/assets/Commercial/Auto Shop/Autoshop-3.jpg";
import autoShop4 from "@/assets/Commercial/Auto Shop/Autoshop-4.jpg";

import baumanSprings1 from "@/assets/Commercial/Bauman Springs/Bauman Springs-1.jpg";
import baumanSprings2 from "@/assets/Commercial/Bauman Springs/Bauman Springs-2.jpg";
import baumanSprings3 from "@/assets/Commercial/Bauman Springs/Bauman Springs-3.jpg";
import baumanSprings4 from "@/assets/Commercial/Bauman Springs/Bauman Springs-4.jpg";

import closedCellFoamCommercial1 from "@/assets/Commercial/Closed Cell Foam Commercial/Closed Cell Foam Commercial-1.jpg";
import closedCellFoamCommercial2 from "@/assets/Commercial/Closed Cell Foam Commercial/Closed Cell Foam Commercial-2.jpg";
import closedCellFoamCommercial3 from "@/assets/Commercial/Closed Cell Foam Commercial/Closed Cell Foam Commercial-3.jpg";
import closedCellFoamCommercial4 from "@/assets/Commercial/Closed Cell Foam Commercial/Closed Cell Foam Commercial-4.jpg";

import commercialClosedCellSprayFoam1 from "@/assets/Commercial/Commercial Closed Cell Spray Foam/Commercial Closed Cell Spray Foam-1.jpg";
import commercialClosedCellSprayFoam2 from "@/assets/Commercial/Commercial Closed Cell Spray Foam/Commercial Closed Cell Spray Foam-2.jpg";
import commercialClosedCellSprayFoam3 from "@/assets/Commercial/Commercial Closed Cell Spray Foam/Commercial Closed Cell Spray Foam-3.jpg";
import commercialClosedCellSprayFoam4 from "@/assets/Commercial/Commercial Closed Cell Spray Foam/Commercial Closed Cell Spray Foam-4.jpg";

import freseniusMedical1 from "@/assets/Commercial/Fresenius Medical/Fresenius Medical-1.jpg";
import freseniusMedical2 from "@/assets/Commercial/Fresenius Medical/Fresenius Medical-2.jpg";
import freseniusMedical3 from "@/assets/Commercial/Fresenius Medical/Fresenius Medical-3.jpg";
import freseniusMedical4 from "@/assets/Commercial/Fresenius Medical/Fresenius Medical-4.jpg";

import pinUpFieldVerified1 from "@/assets/Commercial/Pin-Up Insulation-Field Verified/Pin-up Insulation-Field Verified-1.jpg";
import pinUpFieldVerified2 from "@/assets/Commercial/Pin-Up Insulation-Field Verified/Pin-up Insulation-Field Verified-2.jpg";
import pinUpFieldVerified3 from "@/assets/Commercial/Pin-Up Insulation-Field Verified/Pin-up Insulation-Field Verified-3.jpg";
import pinUpFieldVerified4 from "@/assets/Commercial/Pin-Up Insulation-Field Verified/Pin-up Insulation-Field Verified-4.jpg";

import pinWeldCeiling1 from "@/assets/Commercial/Pin-Weld Ceiling Insulation/Pin-Weld Ceiling Insulation-1.jpg";
import pinWeldCeiling2 from "@/assets/Commercial/Pin-Weld Ceiling Insulation/Pin-Weld Ceiling Insulation-2.jpg";
import pinWeldCeiling3 from "@/assets/Commercial/Pin-Weld Ceiling Insulation/Pin-Weld Ceiling Insulation-3.jpg";
import pinWeldCeiling4 from "@/assets/Commercial/Pin-Weld Ceiling Insulation/Pin-Weld Ceiling Insulation-4.jpg";

import pinWeldCommercial1 from "@/assets/Commercial/Pin-Weld Commercial/Pin-Weld Commercial-1.jpg";
import pinWeldCommercial2 from "@/assets/Commercial/Pin-Weld Commercial/Pin-Weld Commercial-2.jpg";
import pinWeldCommercial3 from "@/assets/Commercial/Pin-Weld Commercial/Pin-Weld Commercial-3.jpg";
import pinWeldCommercial4 from "@/assets/Commercial/Pin-Weld Commercial/Pin-Weld Commercial-4.jpg";

import texasAquatics1 from "@/assets/Commercial/Texas Aquatics/Texas Aquatics-1.jpg";
import texasAquatics2 from "@/assets/Commercial/Texas Aquatics/Texas Aquatics-2.jpg";
import texasAquatics3 from "@/assets/Commercial/Texas Aquatics/Texas Aquatics-3.jpg";
import texasAquatics4 from "@/assets/Commercial/Texas Aquatics/Texas Aquatics-4.jpg";

import texasCardHouse1 from "@/assets/Commercial/Texas Card House/Texas Card House-1.jpg";
import texasCardHouse2 from "@/assets/Commercial/Texas Card House/Texas Card House-2.jpg";
import texasCardHouse3 from "@/assets/Commercial/Texas Card House/Texas Card House-3.jpg";
import texasCardHouse4 from "@/assets/Commercial/Texas Card House/Texas Card House-4.jpg";

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

type ProjectId =
  | "all"
  | "amazon"
  | "auto-shop"
  | "bauman-springs"
  | "closed-cell-foam-commercial"
  | "commercial-closed-cell-spray-foam"
  | "fresenius-medical"
  | "pin-up-field-verified"
  | "pin-weld-ceiling"
  | "pin-weld-commercial"
  | "texas-aquatics"
  | "texas-card-house";

type ProjectGroup = {
  id: Exclude<ProjectId, "all">;
  name: string;
  location: string;
  note?: string;
  images: string[];
};

const projectGroups: ProjectGroup[] = [
  { id: "amazon", name: "Amazon", location: "1851 NE Loop 820, Fort Worth, TX", images: [amazon1, amazon2, amazon3, amazon4] },
  { id: "texas-aquatics", name: "Texas Aquatics", location: "7504 26th Blvd, North Richland Hills, TX", images: [texasAquatics1, texasAquatics2, texasAquatics3, texasAquatics4] },
  { id: "texas-card-house", name: "Texas Card House", location: "Austin, TX", images: [texasCardHouse1, texasCardHouse2, texasCardHouse3, texasCardHouse4] },
  { id: "fresenius-medical", name: "Fresenius Medical", location: "7610 Military Pkwy, Dallas, TX", images: [freseniusMedical1, freseniusMedical2, freseniusMedical3, freseniusMedical4] },
  {
    id: "bauman-springs",
    name: "Bauman Springs",
    location: "3075 N Great Southwest Pkwy",
    note: "Pin-weld ceiling install, 3-inch board on walls",
    images: [baumanSprings1, baumanSprings2, baumanSprings3, baumanSprings4],
  },
  {
    id: "commercial-closed-cell-spray-foam",
    name: "Fikes Family Office",
    location: "Dallas, TX",
    note: "Commercial closed-cell spray foam",
    images: [commercialClosedCellSprayFoam1, commercialClosedCellSprayFoam2, commercialClosedCellSprayFoam3, commercialClosedCellSprayFoam4],
  },
  { id: "closed-cell-foam-commercial", name: "Closed-Cell Foam Commercial", location: "DFW Metroplex", images: [closedCellFoamCommercial1, closedCellFoamCommercial2, closedCellFoamCommercial3, closedCellFoamCommercial4] },
  { id: "pin-up-field-verified", name: "Pin-Up Insulation — Field Verified", location: "Dallas, TX", images: [pinUpFieldVerified1, pinUpFieldVerified2, pinUpFieldVerified3, pinUpFieldVerified4] },
  { id: "pin-weld-ceiling", name: "Pin-Weld Ceiling Insulation", location: "Dallas, TX", images: [pinWeldCeiling1, pinWeldCeiling2, pinWeldCeiling3, pinWeldCeiling4] },
  { id: "pin-weld-commercial", name: "Pin-Weld Commercial", location: "DFW Metroplex", images: [pinWeldCommercial1, pinWeldCommercial2, pinWeldCommercial3, pinWeldCommercial4] },
  { id: "auto-shop", name: "Auto Shop", location: "DFW Metroplex", images: [autoShop1, autoShop2, autoShop3, autoShop4] },
];

const filterTabs: { id: ProjectId; label: string }[] = [
  { id: "all", label: "All Projects" },
  ...projectGroups.map((p) => ({ id: p.id, label: p.name })),
];

function CommercialPage() {
  const list = services.filter((s) => s.track !== "residential");
  const [activeFilter, setActiveFilter] = useState<ProjectId>("all");

  const visibleGroups =
    activeFilter === "all" ? projectGroups : projectGroups.filter((p) => p.id === activeFilter);

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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">Recent Commercial Projects</p>
          <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
            Warehouses, offices, medical, and specialty builds across DFW
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A sample of recent commercial work — pin-weld and closed-cell spray foam systems,
            field-verified installs, and large-scale metal building scopes.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`border px-4 py-2 font-display text-xs font-bold tracking-[0.12em] uppercase transition-colors ${
                activeFilter === tab.id
                  ? "border-red bg-red text-white"
                  : "border-border text-foreground hover:border-red hover:text-red"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-14">
          {visibleGroups.map((group) => (
            <Reveal key={group.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                <h3 className="text-xl uppercase">{group.name}</h3>
                <p className="font-display text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                  {group.location}
                  {group.note ? ` · ${group.note}` : ""}
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.images.map((src, i) => (
                  <div
                    key={src}
                    className="hover-lift group relative isolate aspect-[4/3] overflow-hidden border border-border"
                  >
                    <img
                      src={src}
                      alt={`${group.name} commercial insulation project, photo ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
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
