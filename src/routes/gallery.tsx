import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

// Residential
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

// Commercial
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

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Projects | Mustang Insulation Services" },
      {
        name: "description",
        content:
          "Explore recent Mustang insulation projects across Dallas-Fort Worth, from attic upgrades and new-construction spray foam to commercial and multi-family work.",
      },
      { property: "og:title", content: "Projects | Mustang Insulation Services" },
      {
        property: "og:description",
        content:
          "Recent residential, new-construction, multi-family, and commercial insulation work completed by Mustang across DFW.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Project = {
  title: string;
  type: string;
  category: "Residential" | "Commercial";
  location: string;
  images: string[];
  problem: string;
  solution: string;
  result: string;
};

const projects: Project[] = [
  // Residential
  {
    title: "DFW Home Attic Upgrades",
    type: "Residential attic insulation",
    category: "Residential",
    location: "Dallas-Fort Worth Metroplex",
    images: [residential1, residential2, residential3, residential4, residential5],
    problem:
      "Homes across DFW with thin, uneven, or aging attic insulation and inconsistent room temperatures.",
    solution:
      "Evaluation of existing depth, air leaks, and moisture, followed by blown-in fiberglass or batt installation to the recommended coverage.",
    result: "More even comfort throughout the home and a properly insulated attic system.",
  },
  {
    title: "New Construction — Closed Cell",
    type: "New-construction spray foam",
    category: "Residential",
    location: "DFW Metroplex",
    images: [closedCell1, closedCell2],
    problem:
      "New builds requiring a continuous air barrier and higher R-value per inch in roof and wall assemblies.",
    solution:
      "Closed-cell spray foam applied to the specified thickness for structural rigidity and moisture resistance.",
    result: "A tighter building envelope built into the home from the start of construction.",
  },
  {
    title: "New Construction — Open Cell",
    type: "New-construction spray foam",
    category: "Residential",
    location: "DFW Metroplex",
    images: [openCell1, openCell2, openCell3, openCell4, openCell5, openCell6, openCell7, openCell8],
    problem:
      "Framing and roof assemblies needing air sealing and sound-dampening insulation before drywall.",
    solution:
      "Open-cell spray foam installed across roof decks and wall cavities to the specified depth.",
    result: "A well-sealed, quieter home ready for the next phase of construction.",
  },
  {
    title: "17-Unit Condos — Arlington",
    type: "Multi-family new construction",
    category: "Residential",
    location: "Arlington, TX",
    images: [nmf1, nmf2, nmf3, nmf4, nmf5, nmf6, nmf7, nmf8],
    problem:
      "A 17-unit condo development needing insulation coordinated across multiple units on a phased construction schedule.",
    solution:
      "Insulation scheduled unit-by-unit alongside the builder's timeline, with consistent coverage across every unit.",
    result: "A completed multi-family building insulated to spec across all 17 units.",
  },
  // Commercial
  {
    title: "Amazon",
    type: "Warehouse / distribution",
    category: "Commercial",
    location: "1851 NE Loop 820, Fort Worth, TX",
    images: [amazon1, amazon2, amazon3, amazon4],
    problem: "A large-scale distribution facility requiring insulation across significant square footage.",
    solution:
      "A coordinated commercial insulation scope scheduled around active warehouse operations.",
    result: "A completed large-format commercial insulation install with minimal disruption to operations.",
  },
  {
    title: "Texas Aquatics",
    type: "Commercial recreation facility",
    category: "Commercial",
    location: "7504 26th Blvd, North Richland Hills, TX",
    images: [texasAquatics1, texasAquatics2, texasAquatics3, texasAquatics4],
    problem: "A recreation facility needing insulation suited to a large open commercial space.",
    solution: "Commercial-grade insulation installed to the building's specification.",
    result: "Improved building performance for a high-traffic commercial facility.",
  },
  {
    title: "Texas Card House",
    type: "Commercial interior build-out",
    category: "Commercial",
    location: "Austin, TX",
    images: [texasCardHouse1, texasCardHouse2, texasCardHouse3, texasCardHouse4],
    problem: "A commercial interior build-out requiring insulation coordinated with other trades.",
    solution: "Insulation installed to the project specification as part of the build-out schedule.",
    result: "A finished commercial space ready for occupancy.",
  },
  {
    title: "Fresenius Medical",
    type: "Medical facility",
    category: "Commercial",
    location: "7610 Military Pkwy, Dallas, TX",
    images: [freseniusMedical1, freseniusMedical2, freseniusMedical3, freseniusMedical4],
    problem: "A medical facility requiring insulation that meets commercial code requirements.",
    solution: "Code-compliant commercial insulation installed to the specified scope.",
    result: "A properly insulated medical facility ready for its intended use.",
  },
  {
    title: "Bauman Springs",
    type: "Pin-weld ceiling & wall insulation",
    category: "Commercial",
    location: "3075 N Great Southwest Pkwy",
    images: [baumanSprings1, baumanSprings2, baumanSprings3, baumanSprings4],
    problem: "A commercial ceiling and wall assembly requiring a pin-weld insulation system.",
    solution: "Pin-weld ceiling install paired with 3-inch board insulation on the walls.",
    result: "A fully insulated ceiling and wall assembly to the project's specification.",
  },
  {
    title: "Fikes Family Office",
    type: "Commercial closed-cell spray foam",
    category: "Commercial",
    location: "Dallas, TX",
    images: [
      commercialClosedCellSprayFoam1,
      commercialClosedCellSprayFoam2,
      commercialClosedCellSprayFoam3,
      commercialClosedCellSprayFoam4,
    ],
    problem: "An office build-out needing a continuous air barrier and thermal performance.",
    solution: "Commercial closed-cell spray foam applied to the specified assemblies.",
    result: "A well-sealed, energy-efficient office space.",
  },
  {
    title: "Closed-Cell Foam Commercial",
    type: "Commercial spray foam",
    category: "Commercial",
    location: "DFW Metroplex",
    images: [
      closedCellFoamCommercial1,
      closedCellFoamCommercial2,
      closedCellFoamCommercial3,
      closedCellFoamCommercial4,
    ],
    problem: "A commercial project specifying closed-cell foam for its air-sealing and R-value performance.",
    solution: "Closed-cell spray foam installed to the project's specified thickness.",
    result: "A commercial assembly insulated to a high-performance standard.",
  },
  {
    title: "Pin-Up Insulation — Field Verified",
    type: "Commercial pin-up insulation",
    category: "Commercial",
    location: "Dallas, TX",
    images: [pinUpFieldVerified1, pinUpFieldVerified2, pinUpFieldVerified3, pinUpFieldVerified4],
    problem: "A commercial project requiring insulation installed and verified against the approved scope.",
    solution: "Pin-up insulation system installed and field-verified against the specification.",
    result: "A documented, field-verified commercial insulation install.",
  },
  {
    title: "Pin-Weld Ceiling Insulation",
    type: "Commercial ceiling insulation",
    category: "Commercial",
    location: "Dallas, TX",
    images: [pinWeldCeiling1, pinWeldCeiling2, pinWeldCeiling3, pinWeldCeiling4],
    problem: "A commercial ceiling assembly needing a pin-weld insulation system for consistent coverage.",
    solution: "Pin-weld insulation installed across the ceiling to the specified R-value.",
    result: "A consistently insulated commercial ceiling assembly.",
  },
  {
    title: "Pin-Weld Commercial",
    type: "Commercial pin-weld insulation",
    category: "Commercial",
    location: "DFW Metroplex",
    images: [pinWeldCommercial1, pinWeldCommercial2, pinWeldCommercial3, pinWeldCommercial4],
    problem: "A commercial building specifying a pin-weld insulation system for walls and ceilings.",
    solution: "Pin-weld insulation installed across the specified assemblies.",
    result: "A commercial building insulated to the pin-weld system specification.",
  },
  {
    title: "Auto Shop",
    type: "Commercial / automotive",
    category: "Commercial",
    location: "DFW Metroplex",
    images: [autoShop1, autoShop2, autoShop3, autoShop4],
    problem: "An automotive shop needing insulation for comfort and noise control in a working shop environment.",
    solution: "Commercial insulation installed to suit the shop's structure and use.",
    result: "A more comfortable, better-insulated shop space.",
  },
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | Project["category"]>("All");
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Recent work across homes and commercial jobs"
        body="A look at the kinds of projects we handle across North Texas — attics, new construction, multi-family builds, and commercial work."
        image={residential1}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border pb-6">
          <div>
            <p className="eyebrow text-red">Project archive</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">Work organized by scope</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {(["All", "Residential", "Commercial"] as const).map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`border px-4 py-2 font-display text-xs font-bold tracking-[0.12em] uppercase transition-colors ${
                  activeCategory === category
                    ? "border-red bg-red text-white"
                    : "border-border text-muted-foreground hover:border-red hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {visibleProjects.map((item, i) => (
            <Reveal key={item.title} delay={i * 40}>
              <article className="overflow-hidden border border-border bg-muted">
                <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4">
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${item.title} project photo ${imageIndex + 1}`}
                      className="aspect-[4/3] w-full bg-background object-cover"
                      loading={i === 0 && imageIndex === 0 ? "eager" : "lazy"}
                    />
                  ))}
                </div>
                <div className="grid gap-8 p-7 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
                  <div>
                    <p className="font-display text-[0.68rem] font-bold tracking-[0.2em] text-red uppercase">
                      {item.category} · {item.type}
                    </p>
                    <h2 className="mt-3 text-2xl uppercase sm:text-3xl">{item.title}</h2>
                    <p className="mt-2 font-display text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                      {item.location}
                    </p>
                  </div>
                  <dl className="grid gap-5 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
                    <div>
                      <dt className="font-display text-xs font-bold tracking-[0.12em] text-foreground uppercase">
                        Problem
                      </dt>
                      <dd className="mt-2">{item.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-display text-xs font-bold tracking-[0.12em] text-foreground uppercase">
                        Solution
                      </dt>
                      <dd className="mt-2">{item.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-display text-xs font-bold tracking-[0.12em] text-foreground uppercase">
                        Result
                      </dt>
                      <dd className="mt-2">{item.result}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand variant="dark" />
    </>
  );
}
