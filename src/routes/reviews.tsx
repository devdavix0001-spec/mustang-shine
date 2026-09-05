import { createFileRoute } from "@tanstack/react-router";

import reviewsImage from "@/assets/old-site/mustang-project-15.jpg";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { site, testimonials } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Mustang Insulation Services" },
      {
        name: "description",
        content:
          "Read what DFW homeowners and property managers say about Mustang Insulation Services — responsive, honest, and detail-focused.",
      },
      { property: "og:title", content: "Customer Reviews | Mustang Insulation Services" },
      {
        property: "og:description",
        content:
          "Homeowners and property managers across DFW trust Mustang for honest quotes, polished installs, and dependable follow-through.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Real feedback from homeowners and property managers"
        body="Clients call us for a fair quote and stay for the way we work — clean, clear communication, strong detail, and insulation done the right way."
        image={reviewsImage}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <div className="border border-border bg-muted p-7">
              <p className="font-display text-[0.68rem] font-bold tracking-[0.18em] text-red uppercase">
                What clients notice
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The biggest theme in the feedback is simple: we are responsive, thorough, and
                careful with the details other contractors miss.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border border-border bg-muted p-7">
              <p className="font-display text-[0.68rem] font-bold tracking-[0.18em] text-red uppercase">
                Why they call back
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Homeowners appreciate the clear pricing, the explanation of the scope, and the fact
                that our crews show up ready to do the work correctly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="border border-border bg-muted p-7">
              <p className="font-display text-[0.68rem] font-bold tracking-[0.18em] text-red uppercase">
                What we hear most
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                “No sales gimmicks,” “good communication,” and “they caught problems before they
                turned into bigger issues.”
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((review, i) => (
            <Reveal key={`${review.name}-${review.location}`} delay={i * 60}>
              <TestimonialCard {...review} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
          <p className="mr-2 font-display text-xs font-bold tracking-[0.16em] uppercase">
            Read more from Mustang clients
          </p>
          <a
            href={site.google}
            target="_blank"
            rel="noreferrer"
            className="border border-border px-4 py-2 font-display text-xs font-bold tracking-[0.12em] uppercase transition-colors hover:border-red hover:text-red"
          >
            Google
          </a>
        </div>
      </section>

      <CtaBand
        eyebrow="Need a reference?"
        title="Ask about our recent DFW projects"
        body="We can point you to the kind of work we do and talk through what to expect on your home or building before you commit."
      />
    </>
  );
}
