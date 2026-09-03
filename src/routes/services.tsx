import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import servicesImage from "@/assets/old-site/mustang-project-17.jpg";
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
        image={servicesImage}
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

      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-20">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 35} className="h-full">
            <article
              id={service.slug}
              className="hover-lift flex h-full flex-col border border-border bg-card p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-3xl text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-right text-[0.65rem] font-bold tracking-[0.16em] text-red uppercase">
                  {trackLabel[service.track]}
                </p>
              </div>
              <h2 className="mt-8 text-2xl uppercase">{service.title}</h2>
              <div className="mt-4 h-0.5 w-10 bg-red" />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.blurb}
              </p>
              <div className="mt-7">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="inline-flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[0.14em] text-red uppercase"
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="py-4" />
      <CtaBand variant="dark" />
    </>
  );
}
