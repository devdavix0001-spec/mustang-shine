import { Star } from "lucide-react";

export function TestimonialCard({
  quote,
  name,
  location,
  source,
  dark = false,
}: {
  quote: string;
  name: string;
  location: string;
  source: string;
  dark?: boolean;
}) {
  return (
    <figure
      className={`flex h-full flex-col border p-7 ${
        dark ? "border-ink-line bg-ink-soft" : "border-border bg-card"
      }`}
    >
      <div className="flex gap-1" aria-label="Five star review">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-red text-red" />
        ))}
      </div>
      <blockquote
        className={`mt-5 flex-1 text-[0.95rem] leading-relaxed ${
          dark ? "text-white/75" : "text-foreground/85"
        }`}
      >
        {quote}
      </blockquote>
      <figcaption
        className={`mt-6 border-t pt-4 font-display text-xs font-bold tracking-[0.16em] uppercase ${
          dark ? "border-ink-line text-white/70" : "border-border text-foreground"
        }`}
      >
        {name} · {location}
        <span className={`ml-2 font-normal tracking-normal normal-case ${dark ? "text-white/40" : "text-muted-foreground"}`}>
          via {source}
        </span>
      </figcaption>
    </figure>
  );
}
