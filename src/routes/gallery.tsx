import { createFileRoute } from "@tanstack/react-router";

import commercialImg from "@/assets/commercial-metal-building.jpg";
import heroAttic from "@/assets/hero-attic.jpg";
import residentialImg from "@/assets/residential-home.jpg";
import insulationTexture from "@/assets/insulation-texture.jpg";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Insulation Gallery | Mustang Insulation Services" },
      {
        name: "description",
        content: "Explore recent insulation projects across Dallas-Fort Worth, from attics and crawlspaces to metal buildings and commercial spaces.",
      },
      { property: "og:title", content: "Insulation Gallery | Mustang Insulation Services" },
      {
        property: "og:description",
        content: "Recent attic, crawlspace, and commercial insulation work completed by Mustang across DFW.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const gallery = [
  { title: "Attic insulation upgrade", image: heroAttic },
  { title: "Residential exterior and attic work", image: residentialImg },
  { title: "Commercial metal building insulation", image: commercialImg },
  { title: "Blown-in insulation detail", image: insulationTexture },
  { title: "Crawlspace and air-sealing work", image: residentialImg },
  { title: "Building envelope improvements", image: commercialImg },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Recent work across homes and commercial jobs"
        body="A quick look at the kinds of projects we handle across North Texas — attics, crawlspaces, warehouses, and everything in between."
        image={heroAttic}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <figure className="group overflow-hidden border border-border bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="p-5 font-display text-sm font-bold tracking-[0.14em] text-foreground uppercase">
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand variant="dark" />
    </>
  );
}
