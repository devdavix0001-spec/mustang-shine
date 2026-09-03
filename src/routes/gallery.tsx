import { createFileRoute } from "@tanstack/react-router";

import project2 from "@/assets/old-site/mustang-project-2.jpg";
import project5 from "@/assets/old-site/mustang-project-5.jpg";
import project8 from "@/assets/old-site/mustang-project-8.jpg";
import project9 from "@/assets/old-site/mustang-project-9.jpg";
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

const gallery = [
  {
    title: "Arlington Attic Upgrade",
    type: "Residential attic",
    image: project2,
    problem: "Thin and uneven attic coverage contributing to summer heat transfer.",
    solution:
      "Attic evaluation, preparation, air sealing, and blown-in fiberglass installed to a consistent final depth.",
    result: "Improved coverage and a more consistent insulation system throughout the attic.",
  },
  {
    title: "Grapevine Commercial Insulation",
    type: "Tenant improvement",
    image: project9,
    problem: "A commercial interior needed a coordinated ceiling and wall insulation scope.",
    solution:
      "Commercial insulation planning around the building schedule and assembly requirements.",
    result: "A documented scope ready for coordination with the owner, GC, and other trades.",
  },
  {
    title: "DFW Building Performance",
    type: "Attic preparation",
    image: project5,
    problem:
      "Air leakage and inconsistent insulation can leave rooms uncomfortable and HVAC systems working harder.",
    solution:
      "Targeted sealing of accessible penetrations paired with a measured insulation recommendation.",
    result: "A stronger building envelope plan based on the actual conditions of the property.",
  },
  {
    title: "Mansfield Home Comfort Upgrade",
    type: "Residential evaluation",
    image: project8,
    problem: "Uneven temperatures and an aging insulation system needed a practical next step.",
    solution:
      "Evaluation of existing material, attic access, air leakage, and the home's improvement goals.",
    result: "A clear, prioritized scope instead of a one-size-fits-all product recommendation.",
  },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Recent work across homes and commercial jobs"
        body="A quick look at the kinds of projects we handle across North Texas — attics, crawlspaces, warehouses, and building-performance upgrades."
        image={heroAttic}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <article className="group overflow-hidden border border-border bg-muted">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.type} insulation project`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="font-display text-[0.68rem] font-bold tracking-[0.2em] text-red uppercase">
                    {item.type}
                  </p>
                  <h2 className="mt-3 text-xl uppercase">{item.title}</h2>
                  <dl className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <dt className="font-display text-xs font-bold tracking-[0.12em] text-foreground uppercase">
                        Problem
                      </dt>
                      <dd className="mt-1">{item.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-display text-xs font-bold tracking-[0.12em] text-foreground uppercase">
                        Solution
                      </dt>
                      <dd className="mt-1">{item.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-display text-xs font-bold tracking-[0.12em] text-foreground uppercase">
                        Result
                      </dt>
                      <dd className="mt-1">{item.result}</dd>
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
