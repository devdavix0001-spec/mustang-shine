import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import contactImage from "@/assets/old-site/mustang-project-14.jpg";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { cities, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mustang Insulation | Free Estimate" },
      {
        name: "description",
        content:
          "Request your free estimate with Mustang Insulation Services. Serving homeowners and commercial clients across Dallas-Fort Worth.",
      },
      { property: "og:title", content: "Contact Mustang Insulation | Free Estimate" },
      {
        property: "og:description",
        content:
          "Call or request a free estimate for attic insulation, spray foam, crawlspaces, commercial insulation, and more in DFW.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request your free estimate"
        body="Tell us what you need — attic work, spray foam, air sealing, or a project for a larger commercial property. We’ll follow up quickly with a clear next step."
        image={contactImage}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <QuoteForm dark={false} heading="Free estimate request" />
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-border bg-muted p-6 sm:p-8">
              <p className="eyebrow text-red">Reach us directly</p>
              <h2 className="mt-4 text-2xl uppercase">Dallas-Fort Worth service area</h2>

              <ul className="mt-7 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-red" strokeWidth={2.5} />
                  <a href={site.phoneHref} className="hover:text-foreground">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-red" strokeWidth={2.5} />
                  <a href={site.emailHref} className="hover:text-foreground">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-red" strokeWidth={2.5} />
                  <span>Dallas-Fort Worth Metroplex, Texas</span>
                </li>
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-[0.68rem] font-bold tracking-[0.18em] text-foreground uppercase">
                  Cities served
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {cities.map((city) => (
                    <span key={city} className="border border-border bg-background px-2.5 py-1.5">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-[0.68rem] font-bold tracking-[0.18em] text-foreground uppercase">
                  What happens next
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    • We review your project details and ask a few quick questions about the
                    building, age, and symptoms.
                  </li>
                  <li>
                    • If needed, we schedule a site visit to inspect the attic, crawlspace, walls,
                    or commercial envelope.
                  </li>
                  <li>• You receive a clear scope and quote with no pressure and no gimmicks.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
