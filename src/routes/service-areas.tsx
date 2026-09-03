import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import serviceAreasImage from "@/assets/old-site/mustang-project-16.jpg";
import { cities, site } from "@/lib/site";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | DFW Insulation Contractor | Mustang" },
      {
        name: "description",
        content:
          "Mustang Insulation Services provides residential and commercial insulation, spray foam, air sealing, and building-performance work across Dallas-Fort Worth.",
      },
      { property: "og:title", content: "DFW Service Areas | Mustang Insulation Services" },
      {
        property: "og:description",
        content:
          "Insulation services for homes, businesses, warehouses, and new construction across the Dallas-Fort Worth Metroplex.",
      },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Insulation work across Dallas-Fort Worth"
        body="Mustang serves homeowners, property managers, general contractors, and building owners throughout the Metroplex with clear recommendations and professional installation."
        image={serviceAreasImage}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">Where we work</p>
          <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
            Local coverage with a building-first approach
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From hot attics in Arlington and Mansfield to commercial buildings in Grapevine and Fort
            Worth, we evaluate the property before recommending a system. Call {site.phone} if your
            city is nearby but not listed.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, i) => (
            <Reveal key={city} delay={i * 25}>
              <li className="border border-border bg-muted px-5 py-4 font-display text-sm font-bold tracking-[0.12em] uppercase">
                {city}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Common local requests</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">
              Homes, businesses, and new construction
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "Residential",
                "Attic upgrades, air sealing, crawlspaces, removal, and spray foam for homes across the Metroplex.",
              ],
              [
                "Commercial",
                "Metal buildings, warehouses, tenant improvements, retail, offices, and specialty insulation scopes.",
              ],
              [
                "New construction",
                "Batt, spray foam, pin-weld, VRR, and fire-protective systems coordinated around the build schedule.",
              ],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 50}>
                <div className="h-full border border-border bg-background p-7">
                  <h3 className="text-xl uppercase">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-red px-6 py-3 font-display text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
          >
            Get an Estimate <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
      <CtaBand variant="dark" />
    </>
  );
}
