import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { site } from "@/lib/site";

export function CtaBand({
  variant = "red",
  eyebrow = "Free Estimate",
  title = "Ready for an attic that finally holds temperature?",
  body = "Tell us what's going on and we'll get out, measure it, and give you a straight quote — no gimmicks, no pressure.",
}: {
  variant?: "red" | "dark";
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  const isRed = variant === "red";
  return (
    <section
      className={`${isRed ? "slash-texture-red bg-red" : "slash-texture bg-ink"} text-white`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <p
            className={`font-display text-xs font-bold tracking-[0.22em] uppercase ${
              isRed ? "text-white/80" : "text-red"
            }`}
          >
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
          <p
            className={`mt-4 text-base leading-relaxed ${isRed ? "text-white/85" : "text-white/65"}`}
          >
            {body}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={site.phoneHref}
            className={`inline-flex items-center justify-center gap-2 px-7 py-4 font-display text-sm font-bold tracking-[0.14em] uppercase transition-colors ${
              isRed ? "bg-white text-ink hover:bg-white/85" : "bg-red text-white hover:bg-red-dark"
            }`}
          >
            <Phone className="size-4" strokeWidth={2.5} /> {site.phone}
          </a>
          <Link
            to="/contact"
            className={`inline-flex items-center justify-center px-7 py-4 font-display text-sm font-bold tracking-[0.14em] uppercase transition-colors ${
              isRed
                ? "border border-white/70 text-white hover:bg-white/10"
                : "border border-white/40 text-white hover:bg-white/10"
            }`}
          >
            Get an Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
