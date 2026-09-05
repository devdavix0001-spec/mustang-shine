import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import project1 from "@/assets/old-site/mustang-project-1.jpg";
import project2 from "@/assets/Blown-In Attic Insulation.jpg";
import project3 from "@/assets/Blown-In Attic Insulation-2.jpg";
import project4 from "@/assets/Blown-In Attic Insulation-3.jpg";
import project5 from "@/assets/Fiberglass Batt Insulation.jpg";
import project6 from "@/assets/Fiberglass Batt Insulation-2.jpg";
import project7 from "@/assets/Fiberglass Batt Insulation-3.jpg";
import project8 from "@/assets/Spray Foam Insulation.jpg";
import project9 from "@/assets/Spray Foam Insulation-2.jpg";
import project10 from "@/assets/Spray Foam Insulation-3.jpg";
import project11 from "@/assets/Insulation Removal.jpg";
import project12 from "@/assets/Insulation Removal-2.jpg";
import project13 from "@/assets/Insulation Removal-3.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { cities, serviceDetails, services, site } from "@/lib/site";

const serviceImages: Record<string, string> = {
  "blown-in-attic-insulation": project2,
  "fiberglass-batt-insulation": project5,
  "spray-foam-insulation": project8,
  "insulation-removal": project11,
  "attic-air-sealing": project5,
  "radiant-barriers": project6,
  "attic-encapsulation": project7,
  "crawlspace-insulation": project8,
  "metal-building-insulation": project9,
  soundproofing: project10,
  "rodent-exclusion": project11,
  "fire-protective-coatings": project12,
};

const serviceImageSets: Record<string, string[]> = {
  "blown-in-attic-insulation": [project2, project3, project4],
  "fiberglass-batt-insulation": [project5, project6, project7],
  "spray-foam-insulation": [project8, project9, project10],
  "insulation-removal": [project11, project12, project13],
  "attic-air-sealing": [project5, project7, project2],
  "radiant-barriers": [project6, project10, project3],
  "attic-encapsulation": [project7, project1, project5],
  "crawlspace-insulation": [project8, project11, project4],
  "metal-building-insulation": [project9, project10, project12],
  soundproofing: [project10, project6, project9],
  "rodent-exclusion": [project11, project4, project8],
  "fire-protective-coatings": [project12, project9, project1],
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);

    return {
      meta: [
        { title: service ? `${service.title} | Mustang Insulation Services` : "Service | Mustang" },
        {
          name: "description",
          content: service
            ? `${service.title} in Dallas-Fort Worth. ${service.blurb}`
            : "Insulation service information from Mustang Insulation Services.",
        },
        {
          property: "og:title",
          content: service ? `${service.title} | Mustang` : "Service | Mustang",
        },
        {
          property: "og:description",
          content: service
            ? `${service.title} by Mustang Insulation Services in Dallas-Fort Worth.`
            : "Insulation services by Mustang Insulation Services.",
        },
        { property: "og:url", content: service ? `/services/${service.slug}` : "/services" },
      ],
      links: [{ rel: "canonical", href: service ? `/services/${service.slug}` : "/services" }],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
      <p className="eyebrow text-red">Service not found</p>
      <h1 className="mt-4 text-4xl uppercase">This service is not currently listed.</h1>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 bg-red px-6 py-3 font-display text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
      >
        View all services <ArrowRight className="size-4" />
      </Link>
    </div>
  ),
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  const detail = serviceDetails[service.slug] ?? serviceDetails["blown-in-attic-insulation"]!;
  const images = serviceImageSets[service.slug] ?? [project1, project2, project3];

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={
          service.track === "commercial"
            ? "Commercial"
            : service.track === "residential"
              ? "Residential"
              : "Residential & Commercial"
        }
        title={service.title}
        body={service.blurb}
        image={serviceImages[service.slug] ?? project1}
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

      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:pt-14">
        <div className="grid gap-3 md:grid-cols-[1.45fr_0.78fr]">
          <img
            src={images[0]}
            alt={`${service.title} project view by Mustang Insulation Services`}
            className="aspect-[16/9] h-full w-full object-cover"
            loading="lazy"
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            {images.slice(1).map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${service.title} ${index === 0 ? "installation detail" : "completed work"} by Mustang Insulation Services`}
                className="aspect-[16/9] h-full w-full object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow text-red">What this service is</p>
          <h2 className="mt-4 max-w-3xl text-3xl uppercase sm:text-4xl">
            A measured approach to better-performing spaces
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={60}>
            <div className="border border-border bg-card p-8">
              <p className="text-base leading-relaxed text-muted-foreground">{detail.what}</p>
              <h3 className="mt-8 text-xl uppercase">When it makes sense</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail.when}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border border-border bg-muted p-8">
              <p className="eyebrow text-red">Mustang's approach</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {detail.approach}
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 bg-red px-6 py-3 font-display text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
              >
                Get an Estimate <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Options and benefits</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">Designed around the building</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal delay={40}>
              <div className="h-full border border-border bg-background p-8">
                <h3 className="text-xl uppercase">Available systems</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {detail.options.map((option) => (
                    <li key={option}>· {option}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full border border-border bg-background p-8">
                <h3 className="text-xl uppercase">What it can improve</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {detail.benefits.map((benefit) => (
                    <li key={benefit}>· {benefit}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <p className="eyebrow text-red">Common questions</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">Before you get started</h2>
            <div className="mt-8 space-y-6">
              {detail.faqs.map((faq) => (
                <div key={faq.question} className="border-t border-border pt-5">
                  <h3 className="text-lg">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border border-border bg-muted p-8">
              <p className="eyebrow text-red">Service area</p>
              <h2 className="mt-4 text-2xl uppercase">Dallas-Fort Worth and nearby communities</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Mustang serves homeowners, property managers, and commercial teams across the DFW
                Metroplex.
              </p>
              <p className="mt-5 text-xs font-bold tracking-[0.12em] text-muted-foreground uppercase">
                {cities.join(" · ")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Related services</p>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">Explore more solutions</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 40}>
                <Link
                  to="/services/$slug"
                  params={{ slug: item.slug }}
                  className="hover-lift block h-full border border-border bg-background p-6"
                >
                  <h3 className="text-xl uppercase">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[0.14em] text-red uppercase">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
