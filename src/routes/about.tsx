import { createFileRoute } from "@tanstack/react-router";

import heroAttic from "@/assets/hero-attic.jpg";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mustang Insulation | Family-Owned DFW Contractor" },
      {
        name: "description",
        content:
          "Meet Matt and the Mustang team — family-owned insulation contractors serving Dallas-Fort Worth with honest pricing, no subcontractors, and a lifetime warranty.",
      },
      { property: "og:title", content: "About Mustang Insulation | Family-Owned DFW Contractor" },
      {
        property: "og:description",
        content:
          "Learn about the Mustang difference — family-owned, no subs, transparent quotes, and insulation work that stands behind itself.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  "Straight answers from the first walkthrough to the final cleanup.",
  "No subcontractors — every tech is a Mustang employee.",
  "We install the right depth, then stand behind it with a lifetime warranty.",
  "Residential and commercial work, handled with the same standard.",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built on service, accountability, and real workmanship"
        body="Matt started Mustang Insulation to do things the right way: honest estimates, respectful crews, and insulation work that solves the problem instead of covering it up."
        image={heroAttic}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-red">Who we are</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">
              A local contractor that shows up and does the work
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Mustang Insulation Services is a family-owned business serving Dallas-Fort Worth,
              from older homes with air leaks and poor attic depth to warehouses and metal buildings
              with big-scope insulation needs. We keep it simple: listen, measure, explain the
              problem, and install it the way it should be done.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We do not use sales gimmicks. We do not hand off pricing to a rotating cast of
              subcontractors. We do the work with our own employees, keep the communication clear,
              and leave your property cleaner than we found it.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-border bg-muted p-8">
              <p className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-red uppercase">
                Core values
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
                {values.map((value) => (
                  <li key={value} className="flex gap-3">
                    <span className="mt-1 block size-2 rounded-full bg-red" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Why homeowners trust us</p>
            <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
              The job is easier when the crew is accountable from start to finish
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal delay={0}>
              <div className="h-full border border-border bg-background p-7">
                <p className="font-display text-xs font-bold tracking-[0.18em] text-red uppercase">
                  Honest quoting
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We explain the scope, the insulation depth, and the reason behind it — no pressure,
                  no tricks, and no hidden add-ons.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full border border-border bg-background p-7">
                <p className="font-display text-xs font-bold tracking-[0.18em] text-red uppercase">
                  Real jobsite experience
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We inspect the actual attic or building envelope, not just the symptoms. That means
                  better fixes and fewer callbacks.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="h-full border border-border bg-background p-7">
                <p className="font-display text-xs font-bold tracking-[0.18em] text-red uppercase">
                  Lifetime warranty
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We stand behind our installs. If the job is built correctly, it stays built correctly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Service area"
        title="Serving homes and buildings across the Metroplex"
        body="From Arlington and Fort Worth to Dallas, Grand Prairie, and beyond, we work with homeowners, property managers, and builders who want insulation done properly."
      />
    </>
  );
}
