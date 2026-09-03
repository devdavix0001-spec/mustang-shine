import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/Mustang_Logo.png";
import { cities, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="slash-texture border-t border-ink-line bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img
            src={logo}
            alt="Mustang Insulation Services"
            className="h-14 w-auto"
            width={474}
            height={158}
            loading="lazy"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            Locally owned and operated insulation contractor serving the Dallas-Fort Worth
            Metroplex with residential and commercial installation expertise.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center border border-ink-line transition-colors hover:border-red hover:bg-red"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center border border-ink-line transition-colors hover:border-red hover:bg-red"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
            Services
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/60">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
            Service Area
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            {cities.join(" · ")}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="size-4 shrink-0 text-red" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-2 hover:text-white">
                <Mail className="size-4 shrink-0 text-red" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-red" /> Dallas-Fort Worth
              Metroplex, Texas
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-white/40">
            Licensed &amp; insured — license / insurance details available on request.
          </p>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Insulation contractor · Dallas-Fort Worth, TX</p>
        </div>
      </div>
    </footer>
  );
}
