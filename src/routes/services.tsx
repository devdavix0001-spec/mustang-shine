import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroAttic from "@/assets/hero-attic.jpg";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Insulation Services | Attic, Spray Foam & Removal | DFW" },
      {
        name: "description",
        content:
          "All 12 Mustang Insulation services: blown-in attic insulation, batts, spray foam, removal, air sealing, radiant barriers, encapsulation, soundproofing and more.",
      },
      { property: "og:title", content: "Insulation Services in Dallas-Fort Worth | Mustang" },
      {
        property: "og:description",
        content:
          "Attic insulation, spray foam, removal, air sealing, radiant barriers, encapsulation, crawlspace, metal building insulation and soundproofing across DFW.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const trackLabel: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  both: "Residential & Commercial",
};

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Twelve ways we tighten up a building"
        body="Every scope below is installed by experienced Mustang crews, quoted clearly, and built around the specific needs of the home or building."
        image={heroAttic}
      />

      <nav aria-label="Service list" className="border-b border-border bg-muted">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-x-5 gap-y-2 px-5 py-5 sm:px-8">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="link-underline font-display text-xs font-bold tracking-[0.12em] text-muted-foreground uppercase hover:text-foreground"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {services.map((service, i) => (
          <Reveal key={service.slug} as="section">
            <section
              id={service.slug}
              className="grid gap-6 border-b border-border py-12 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10"
            >
              <span className="font-display text-3xl text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display text-[0.68rem] font-bold tracking-[0.2em] text-red uppercase">
                  {trackLabel[service.track]}
                </p>
                <h2 className="mt-3 text-2xl uppercase sm:text-3xl">{service.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {service.blurb}
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 border border-foreground px-6 py-3 font-display text-xs font-bold tracking-[0.14em] uppercase transition-colors hover:bg-foreground hover:text-background"
              >
                Get a Quote <ArrowRight className="size-4" />
              </Link>
            </section>
          </Reveal>
        ))}
      </div>

      <div className="py-4" />
      <CtaBand variant="dark" />
    </>
  );
}
