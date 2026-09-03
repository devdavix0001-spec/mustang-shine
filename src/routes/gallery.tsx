import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import project1 from "@/assets/old-site/mustang-project-1.jpg";
import project2 from "@/assets/old-site/mustang-project-2.jpg";
import project3 from "@/assets/old-site/mustang-project-3.jpg";
import project4 from "@/assets/old-site/mustang-project-4.jpg";
import project5 from "@/assets/old-site/mustang-project-5.jpg";
import project6 from "@/assets/old-site/mustang-project-6.jpg";
import project7 from "@/assets/old-site/mustang-project-7.jpg";
import project8 from "@/assets/old-site/mustang-project-8.jpg";
import project9 from "@/assets/old-site/mustang-project-9.jpg";
import project10 from "@/assets/old-site/mustang-project-10.jpg";
import project11 from "@/assets/old-site/mustang-project-11.jpg";
import project12 from "@/assets/old-site/mustang-project-12.jpg";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Projects | Mustang Insulation Services" },
      {
        name: "description",
        content:
          "Explore recent Mustang insulation projects across Dallas-Fort Worth, from attic upgrades and crawlspace improvements to commercial metal-building work.",
      },
      { property: "og:title", content: "Projects | Mustang Insulation Services" },
      {
        property: "og:description",
        content:
          "Recent attic, crawlspace, and commercial insulation work completed by Mustang across DFW.",
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
  category: "Residential" | "Commercial" | "Building performance";
  images: string[];
  problem: string;
  solution: string;
  result: string;
};

const projects: Project[] = [
  {
    title: "Arlington Attic Upgrade",
    type: "Residential attic",
    category: "Residential",
    images: [project2, project3, project4],
    problem: "Thin and uneven attic coverage contributing to summer heat transfer.",
    solution:
      "Attic evaluation, preparation, air sealing, and blown-in fiberglass installed to a consistent final depth.",
    result: "Improved coverage and a more consistent insulation system throughout the attic.",
  },
  {
    title: "Grapevine Commercial Insulation",
    type: "Tenant improvement",
    category: "Commercial",
    images: [project9, project10, project11],
    problem: "A commercial interior needed a coordinated ceiling and wall insulation scope.",
    solution:
      "Commercial insulation planning around the building schedule and assembly requirements.",
    result: "A documented scope ready for coordination with the owner, GC, and other trades.",
  },
  {
    title: "DFW Building Performance",
    type: "Attic preparation",
    category: "Building performance",
    images: [project5, project6, project7],
    problem:
      "Air leakage and inconsistent insulation can leave rooms uncomfortable and HVAC systems working harder.",
    solution:
      "Targeted sealing of accessible penetrations paired with a measured insulation recommendation.",
    result: "A stronger building envelope plan based on the actual conditions of the property.",
  },
  {
    title: "Mansfield Home Comfort Upgrade",
    type: "Residential evaluation",
    category: "Residential",
    images: [project8, project1, project12],
    problem: "Uneven temperatures and an aging insulation system needed a practical next step.",
    solution:
      "Evaluation of existing material, attic access, air leakage, and the home's improvement goals.",
    result: "A clear, prioritized scope instead of a one-size-fits-all product recommendation.",
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
        body="A quick look at the kinds of projects we handle across North Texas — attics, crawlspaces, warehouses, and building-performance upgrades."
        image={project1}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border pb-6">
          <div>
            <p className="eyebrow text-red">Project archive</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">Work organized by scope</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {(["All", "Residential", "Commercial", "Building performance"] as const).map(
              (category) => (
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
              ),
            )}
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {visibleProjects.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <article className="overflow-hidden border border-border bg-muted">
                <div className="grid gap-px bg-border md:grid-cols-3">
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${item.title} ${imageIndex === 0 ? "project view" : imageIndex === 1 ? "installation view" : "completed work view"}`}
                      className="aspect-[4/3] w-full bg-background object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  ))}
                </div>
                <div className="grid gap-8 p-7 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
                  <div>
                    <p className="font-display text-[0.68rem] font-bold tracking-[0.2em] text-red uppercase">
                      {item.category} · {item.type}
                    </p>
                    <h2 className="mt-3 text-2xl uppercase sm:text-3xl">{item.title}</h2>
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
