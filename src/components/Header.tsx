import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/Mustang_Logo.png";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/residential", label: "Residential" },
  { to: "/commercial", label: "Commercial" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink-line bg-ink/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 sm:px-8">
        <Link to="/" className="shrink-0" aria-label={`${site.name} home`}>
          <img
            src={logo}
            alt="Mustang Insulation Services"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-12"}`}
            width={474}
            height={158}
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="link-underline font-display text-[0.8rem] font-bold tracking-[0.14em] text-white/80 uppercase transition-colors hover:text-white data-[status=active]:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 xl:ml-0">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 font-display text-sm font-bold tracking-wide text-white sm:flex"
          >
            <Phone className="size-4 text-red" strokeWidth={2.5} />
            {site.phone}
          </a>
          <Link
            to="/contact"
            className="hidden bg-red px-5 py-2.5 font-display text-[0.78rem] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark sm:inline-block"
          >
            Free Estimate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 shrink-0 place-items-center border border-ink-line text-white xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-line bg-ink xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-ink-line py-3 font-display text-sm font-bold tracking-[0.14em] text-white/85 uppercase last:border-0 data-[status=active]:text-red"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 py-4 sm:hidden">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 font-display font-bold text-white"
              >
                <Phone className="size-4 text-red" /> {site.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-red px-5 py-3 text-center font-display text-xs font-bold tracking-[0.14em] text-white uppercase"
              >
                Free Estimate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
