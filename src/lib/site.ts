export const site = {
  name: "Mustang Insulation Services",
  owner: "Mustang Insulation Services",
  phone: "817-770-1867",
  phoneHref: "tel:+18177701867",
  email: "info@mustanginsulation.com",
  emailHref: "mailto:info@mustanginsulation.com",
  instagram: "https://www.instagram.com/mustanginsulationservices/",
  facebook: "https://www.facebook.com/",
  thumbtack: "https://www.thumbtack.com/",
  nextdoor: "https://nextdoor.com/",
};

export const cities = [
  "Arlington",
  "Fort Worth",
  "Dallas",
  "Grand Prairie",
  "Mansfield",
  "Hurst",
  "Euless",
  "Bedford",
  "North Richland Hills",
  "Grapevine",
  "Colleyville",
  "Forney",
  "Keller",
  "Southlake",
  "Trophy Club",
  "Denton County",
  "Dallas County",
];

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  track: "residential" | "commercial" | "both";
};

export const services: Service[] = [
  {
    slug: "blown-in-attic-insulation",
    title: "Blown-In Attic Insulation",
    blurb:
      "Loose-fill fiberglass blown to an even depth across your attic floor — the fastest way to cut summer heat gain in DFW homes.",
    track: "residential",
  },
  {
    slug: "fiberglass-batt-insulation",
    title: "Fiberglass Batt Insulation",
    blurb:
      "Cut-to-fit batts for walls, floors, garages and knee walls, installed tight with no gaps or compression.",
    track: "both",
  },
  {
    slug: "spray-foam-insulation",
    title: "Spray Foam Insulation",
    blurb:
      "Open- and closed-cell foam that insulates and air seals in one pass, ideal for roof decks and hard-to-reach cavities.",
    track: "both",
  },
  {
    slug: "insulation-removal",
    title: "Insulation Removal",
    blurb:
      "Clean vacuum-out of old, settled, wet or contaminated insulation, with the attic left ready for a fresh install.",
    track: "residential",
  },
  {
    slug: "attic-air-sealing",
    title: "Attic Air Sealing",
    blurb:
      "Sealing top plates, can lights, chases and penetrations so conditioned air stops leaking into the attic.",
    track: "residential",
  },
  {
    slug: "radiant-barriers",
    title: "Radiant Barriers",
    blurb:
      "Reflective barrier applied to the underside of the roof deck to knock down radiant heat during North Texas summers.",
    track: "residential",
  },
  {
    slug: "attic-encapsulation",
    title: "Attic Encapsulation",
    blurb:
      "Bring the attic inside the building envelope for steadier temperatures, cleaner air and lower run times.",
    track: "residential",
  },
  {
    slug: "crawlspace-insulation",
    title: "Crawlspace & Pier-and-Beam",
    blurb:
      "Subfloor and crawlspace insulation for older DFW homes with cold floors, drafts and moisture problems.",
    track: "residential",
  },
  {
    slug: "metal-building-insulation",
    title: "Metal Building & Warehouse",
    blurb:
      "Large-scale insulation for metal buildings, shops and warehouses — scheduled around your operations.",
    track: "commercial",
  },
  {
    slug: "soundproofing",
    title: "Soundproofing",
    blurb:
      "Acoustic insulation for offices, media rooms, shared walls and mechanical spaces where noise control matters.",
    track: "both",
  },
  {
    slug: "rodent-exclusion",
    title: "Rodent Exclusion & Attic Sanitation",
    blurb:
      "Seal the entry points, sanitize the affected areas, then re-insulate so pests stay out for good.",
    track: "both",
  },
  {
    slug: "fire-protective-coatings",
    title: "Intumescent Fire-Protective Coatings",
    blurb:
      "Code-compliant intumescent coatings applied over spray foam for thermal-barrier requirements.",
    track: "commercial",
  },
];

export const testimonials = [
  {
    name: "John",
    location: "Arlington, TX",
    source: "Google",
    quote:
      "Mustang showed up on time, explained everything clearly, and left the attic cleaner than they found it.",
  },
  {
    name: "Laura",
    location: "Fort Worth, TX",
    source: "Thumbtack",
    quote:
      "The crew responded quickly, gave us a clear quote, and took the time to explain what needed to be done before the job started.",
  },
  {
    name: "Dana",
    location: "Hurst, TX",
    source: "Nextdoor",
    quote:
      "The attention to detail stood out. They caught ductwork issues in the attic instead of just covering up the old insulation.",
  },
  {
    name: "Brian",
    location: "Mansfield, TX",
    source: "Nextdoor",
    quote:
      "Better than expected from start to finish. Honest pricing, no sales pitch, and the attic was cleaner when they left than when they arrived.",
  },
];

export const trustPoints = [
  "Family Owned & Operated",
  "Professional Installation by Experienced Crews",
  "Free Estimates",
  "Industry-Leading Product & Workmanship Warranties",
];

export const process = [
  {
    step: "01",
    title: "Inspect",
    body: "We get in the attic or crawlspace, measure existing R-value, and document air leaks, moisture and pest damage.",
  },
  {
    step: "02",
    title: "Quote",
    body: "A transparent, best-rate quote in writing. Scope, materials and R-value spelled out — no gimmicks, no pressure.",
  },
  {
    step: "03",
    title: "Install",
    body: "Our own employees do the work, protect your home, and hit the specified depth and coverage the first time.",
  },
  {
    step: "04",
    title: "Warranty",
    body: "We explain the product and workmanship coverage relevant to your scope so you know exactly what is protected.",
  },
];
