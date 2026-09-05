import { createFileRoute } from "@tanstack/react-router";
import {
  ExternalLink,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import contactImage from "@/assets/old-site/mustang-project-14.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { cities, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mustang Insulation | Free Estimate" },
      {
        name: "description",
        content:
          "Reach Mustang Insulation Services by phone, email, or social media. Serving homeowners and commercial clients across Dallas-Fort Worth.",
      },
      { property: "og:title", content: "Contact Mustang Insulation | Free Estimate" },
      {
        property: "og:description",
        content:
          "Call, email, or message Mustang Insulation Services for attic insulation, spray foam, air sealing, crawlspaces, and commercial insulation in DFW.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const socialLinks = [
  { label: "Instagram", href: site.instagram, icon: Instagram },
  { label: "Facebook", href: site.facebook, icon: Facebook },
  { label: "Thumbtack", href: site.thumbtack, icon: Globe },
  { label: "Nextdoor", href: site.nextdoor, icon: Globe },
];

const servicesOffered = [
  "Blown-in attic insulation",
  "Fiberglass batt insulation",
  "Spray foam insulation",
  "Insulation removal",
  "Attic air sealing",
  "Radiant barriers",
  "Attic encapsulation",
  "Crawlspace and pier-and-beam insulation",
  "Metal building and warehouse insulation",
  "Soundproofing",
  "Rodent exclusion and attic sanitation",
  "Intumescent fire-protective coatings over spray foam",
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Mustang Insulation"
        body="Residential and commercial insulation for homeowners, builders, general contractors, and property owners across Dallas-Fort Worth. Reach out directly — we'll follow up quickly with a clear next step."
        image={contactImage}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="h-full border border-border bg-muted p-6 sm:p-8">
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
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full border border-border bg-muted p-6 sm:p-8">
              <p className="eyebrow text-red">Follow &amp; connect</p>
              <h2 className="mt-4 text-2xl uppercase">Find us on social media</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                See recent jobs, reviews, and updates, or reach out directly through any of these
                platforms.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-lift group flex items-center justify-between gap-3 border border-border bg-background px-5 py-4 transition-colors hover:border-red"
                  >
                    <span className="flex items-center gap-3">
                      <social.icon className="size-5 text-red" strokeWidth={2.25} />
                      <span className="font-display text-sm font-bold tracking-[0.08em] uppercase">
                        {social.label}
                      </span>
                    </span>
                    <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-red" />
                  </a>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-[0.68rem] font-bold tracking-[0.18em] text-foreground uppercase">
                  What happens next
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    • Call or email us with your project details — building type, age, and what
                    you're noticing.
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

      <section className="border-y border-border bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-red">Who we are</p>
            <h2 className="mt-4 max-w-3xl text-3xl text-white uppercase sm:text-4xl">
              A locally owned insulation contractor serving all of DFW
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
              Mustang Insulation Services is a locally owned insulation contractor serving
              homeowners, builders, general contractors, and commercial property owners throughout
              the Dallas-Fort Worth area. We provide professional insulation installation, removal,
              attic upgrades, spray foam, radiant barriers, soundproofing, and commercial insulation
              solutions. Our goal is to improve comfort, energy efficiency, indoor air quality, and
              long-term building performance through honest recommendations and quality workmanship.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOffered.map((serviceName, i) => (
              <Reveal key={serviceName} delay={i * 30}>
                <div className="border border-ink-line bg-ink-soft px-5 py-4 text-sm text-white/80">
                  {serviceName}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
