import { Link } from "@tanstack/react-router";
import { Tag } from "lucide-react";

export function PromoBanner({
  headline = "Seasonal offer: 15% off attic clean-outs + blown-in fiber install",
  detail = "Limited-time pricing for DFW homeowners. Mention the offer when you request your free estimate.",
  ctaLabel = "Claim the offer",
}: {
  headline?: string;
  detail?: string;
  ctaLabel?: string;
}) {
  return (
    <aside className="border-y border-border bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <Tag className="mt-0.5 size-5 shrink-0 text-red" strokeWidth={2.5} />
          <div className="min-w-0">
            <p className="font-display text-sm font-bold tracking-wide text-foreground uppercase">
              {headline}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
          </div>
        </div>
        <Link
          to="/contact"
          className="shrink-0 bg-red px-6 py-3 text-center font-display text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
        >
          {ctaLabel}
        </Link>
      </div>
    </aside>
  );
}
