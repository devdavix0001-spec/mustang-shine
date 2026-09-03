import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/lib/site";

export function ServiceCard({ service, dark = false }: { service: Service; dark?: boolean }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={`hover-lift group block border p-6 ${
        dark
          ? "border-ink-line bg-ink-soft hover:border-red"
          : "border-border bg-card hover:border-red"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`font-display text-lg leading-tight ${dark ? "text-white" : "text-foreground"}`}
        >
          {service.title}
        </h3>
        <ArrowUpRight
          className={`size-5 shrink-0 transition-colors ${
            dark ? "text-white/40" : "text-muted-foreground"
          } group-hover:text-red`}
        />
      </div>
      <div className="mt-4 h-0.5 w-8 bg-red transition-all duration-300 group-hover:w-16" />
      <p
        className={`mt-4 text-sm leading-relaxed ${dark ? "text-white/60" : "text-muted-foreground"}`}
      >
        {service.blurb}
      </p>
    </Link>
  );
}
