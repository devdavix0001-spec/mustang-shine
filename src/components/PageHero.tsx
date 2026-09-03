import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="photo-scrim absolute inset-0" />
      <div className="slash-texture absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow text-red">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] text-white uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{body}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
