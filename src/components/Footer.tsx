import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/Mustang_Logo.png";
import { cities, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="slash-texture border-t border-ink-line bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-5">
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
            Locally owned and operated insulation contractor serving Dallas-Fort Worth with
            residential and commercial insulation solutions built around building performance.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
            Services
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/60">
            {[
              ["Attic Insulation", "blown-in-attic-insulation"],
              ["Spray Foam", "spray-foam-insulation"],
              ["Insulation Removal", "insulation-removal"],
              ["Commercial Insulation", "metal-building-insulation"],
              ["Air Sealing", "attic-air-sealing"],
              ["Radiant Barrier", "radiant-barriers"],
            ].map(([label, slug]) => (
              <li key={slug}>
                <Link to="/services/$slug" params={{ slug }} className="transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
            Company
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/60">
            <li>
              <Link to="/about" className="transition-colors hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/gallery" className="transition-colors hover:text-white">Projects</Link>
            </li>
            <li>
              <Link to="/reviews" className="transition-colors hover:text-white">Reviews</Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">Contact</Link>
            </li>
            <li>
              <Link to="/service-areas" className="transition-colors hover:text-white">Service Areas</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
            Service Area
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Dallas · Fort Worth · Arlington · Grand Prairie · Mansfield · Other DFW Areas
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
              <MapPin className="mt-0.5 size-4 shrink-0 text-red" /> Dallas-Fort Worth Metroplex,
              Texas
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
          <p>
            <Link to="/service-areas" className="hover:text-white">
              Insulation contractor · Dallas-Fort Worth, TX
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
