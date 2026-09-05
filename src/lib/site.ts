export const site = {
  name: "Mustang Insulation Services",
  owner: "Mustang Insulation Services",
  phone: "817-770-1867",
  phoneHref: "tel:+18177701867",
  email: "info@mustanginsulation.com",
  emailHref: "mailto:info@mustanginsulation.com",
  instagram: "https://www.instagram.com/mustanginsulationservices/",
  facebook: "https://www.facebook.com/share/1977fFSGVv/?mibextid=wwXIfr",
  google: "https://www.google.com/search?q=Mustang+Insulation+Services",
  thumbtack:
    "https://www.thumbtack.com/tx/grapevine/insulation/mustang-insulation-services/service/368499260921913344?utm_medium=ios",
  nextdoor: "https://nextdoor.com/pages/mustang-insulation-services-hurst-tx/",
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

export type ServiceDetail = {
  what: string;
  when: string;
  approach: string;
  options: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
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

export const serviceDetails: Record<string, ServiceDetail> = {
  "blown-in-attic-insulation": {
    what: "Loose-fill fiberglass installed across the attic floor to create consistent coverage and slow unwanted heat transfer.",
    when: "A good fit for hot upstairs rooms, uneven temperatures, high energy bills, or an attic with thin, settled, or uneven insulation.",
    approach:
      "We inspect the attic, measure existing depth, identify air leaks and moisture concerns, prepare the space, then install to the recommended final coverage.",
    options: [
      "Common attic targets include R-38, R-44, R-49, and R-60",
      "Air sealing before insulation when the attic needs it",
      "Removal and replacement when existing material is damaged or contaminated",
    ],
    benefits: [
      "More even room temperatures",
      "Reduced heat gain through the attic",
      "Better coverage across difficult areas",
    ],
    faqs: [
      {
        question: "How much insulation does my attic need?",
        answer:
          "There is no single depth for every home. Mustang evaluates the existing material, product, attic configuration, and local requirements before recommending a target.",
      },
      {
        question: "Can you add insulation over what is already there?",
        answer:
          "Often, yes. We first check the condition, coverage, moisture, wiring, and air leakage so the new system is installed on a sound foundation.",
      },
    ],
  },
  "fiberglass-batt-insulation": {
    what: "Pre-cut fiberglass insulation installed between framing members in walls, floors, garages, knee walls, and other accessible cavities.",
    when: "Useful for renovations, unfinished walls, garages, floors, and projects where a fitted batt system suits the framing and access.",
    approach:
      "We verify the cavity dimensions and condition, cut batts to fit, and install them without gaps, compression, or exposed voids.",
    options: [
      "Wall, floor, garage, and knee-wall applications",
      "Product selection based on the cavity and target performance",
      "Coordination with renovation or new-construction schedules",
    ],
    benefits: [
      "Improved comfort between rooms",
      "Thermal control in walls and floors",
      "A clean, practical system for accessible framing",
    ],
    faqs: [
      {
        question: "Can batts be used in an existing home?",
        answer:
          "Yes, when the framing is accessible and the cavity is prepared correctly. We will explain whether batts or another system makes more sense for the project.",
      },
    ],
  },
  "spray-foam-insulation": {
    what: "Open-cell or closed-cell foam that insulates and helps air seal irregular cavities, roof decks, walls, and commercial assemblies.",
    when: "Consider spray foam for difficult-to-reach areas, roof-deck applications, air leakage, renovation details, or projects requiring a more continuous seal.",
    approach:
      "We review the assembly, ventilation, moisture, access, and code considerations before selecting the foam type and installing it to the specified thickness.",
    options: [
      "Open-cell and closed-cell systems",
      "Roof-deck, wall, crawlspace, and metal-building applications",
      "Intumescent thermal-barrier coatings where required",
    ],
    benefits: [
      "Air sealing and insulation in one system",
      "Reduced unwanted heat transfer",
      "Better control of difficult details and penetrations",
    ],
    faqs: [
      {
        question: "Which foam is right for my project?",
        answer:
          "The choice depends on the assembly, moisture exposure, required R-value, access, and code requirements. Mustang recommends a system after evaluating those conditions.",
      },
    ],
  },
  "insulation-removal": {
    what: "Professional vacuum removal of old, settled, wet, or contaminated attic insulation so the space can be prepared for a new system.",
    when: "Removal may make sense after pest activity, water damage, contamination, severe settling, or when the existing material prevents a proper upgrade.",
    approach:
      "We protect the home, remove the material with commercial equipment, clean the work area, and identify preparation work before replacement.",
    options: [
      "Attic vacuum-out",
      "Preparation for new blown-in, batt, or spray foam systems",
      "Coordination with rodent exclusion and sanitation",
    ],
    benefits: [
      "A cleaner starting point",
      "Better visibility of attic conditions",
      "A properly prepared surface for replacement insulation",
    ],
    faqs: [
      {
        question: "Do I always need insulation removed?",
        answer:
          "No. We recommend removal when the existing material is damaged, contaminated, or otherwise unsuitable. Sound insulation may be incorporated into the upgrade.",
      },
    ],
  },
  "attic-air-sealing": {
    what: "Targeted sealing of top plates, penetrations, chases, can lights, and other gaps between the conditioned home and attic.",
    when: "Air sealing is often recommended for drafts, hot rooms, high HVAC run times, dusty rooms, or before adding attic insulation.",
    approach:
      "We inspect the attic plane, locate leakage paths, use compatible materials, and complete sealing before the insulation system is installed.",
    options: [
      "Top plates and framing joints",
      "Plumbing, wiring, duct, and chase penetrations",
      "Coordination with attic insulation and ventilation work",
    ],
    benefits: [
      "Fewer drafts and hot spots",
      "Less conditioned air lost to the attic",
      "A stronger building envelope",
    ],
    faqs: [
      {
        question: "Should air sealing happen before insulation?",
        answer:
          "Usually. Sealing the accessible leakage paths first helps the new insulation perform as intended.",
      },
    ],
  },
  "radiant-barriers": {
    what: "A reflective roof-deck barrier designed to reduce radiant heat entering an attic during intense North Texas summer conditions.",
    when: "It can complement an attic upgrade when radiant heat is a significant concern and the roof assembly is suitable for the application.",
    approach:
      "We inspect the roof deck and attic layout, explain where a radiant barrier helps, and coordinate it with insulation and ventilation decisions.",
    options: [
      "Roof-deck applications",
      "Combination with attic insulation",
      "Project-specific evaluation of roof and ventilation conditions",
    ],
    benefits: [
      "Reduced radiant heat transfer",
      "More manageable attic temperatures",
      "A complementary building-performance measure",
    ],
    faqs: [
      {
        question: "Does a radiant barrier replace insulation?",
        answer:
          "No. It addresses radiant heat and is typically considered alongside the appropriate insulation and air-sealing strategy.",
      },
    ],
  },
  "attic-encapsulation": {
    what: "A building-envelope approach that brings the attic inside the conditioned boundary using insulation, air sealing, and assembly-specific details.",
    when: "It may suit homes with ductwork in the attic, comfort problems, renovation plans, or a roof-deck system that needs a more complete approach.",
    approach:
      "We evaluate roof and HVAC conditions, moisture, ventilation, access, and code requirements before recommending the assembly.",
    options: [
      "Open-cell or closed-cell roof-deck systems",
      "Air-sealed roofline assemblies",
      "Coordination with HVAC and ventilation requirements",
    ],
    benefits: [
      "More stable attic-adjacent temperatures",
      "Better control around ductwork",
      "A more intentional building envelope",
    ],
    faqs: [
      {
        question: "Can every attic be encapsulated?",
        answer:
          "No. The roof assembly, ventilation, moisture conditions, HVAC setup, and local requirements all need to be reviewed first.",
      },
    ],
  },
  "crawlspace-insulation": {
    what: "Insulation and air-sealing work for crawlspaces, pier-and-beam homes, and subfloors with cold floors, drafts, or moisture concerns.",
    when: "Consider it for cold floors, uncomfortable rooms above crawlspaces, drafts, uneven temperatures, or an older home with exposed or deteriorated insulation.",
    approach:
      "We inspect access, moisture, plumbing, wiring, and existing material before selecting a subfloor or crawlspace system.",
    options: [
      "Subfloor insulation",
      "Pier-and-beam applications",
      "Coordination with moisture and pest-related preparation",
    ],
    benefits: ["Warmer floors", "Fewer drafts", "Better control of the lower building envelope"],
    faqs: [
      {
        question: "Does insulation fix crawlspace moisture by itself?",
        answer:
          "No. Moisture conditions need to be addressed as part of the project plan. We identify concerns and explain the preparation required.",
      },
    ],
  },
  "metal-building-insulation": {
    what: "Large-scale insulation for metal buildings, warehouses, shops, tenant improvements, and commercial spaces.",
    when: "It is designed for new construction, retrofit work, expansion, tenant improvement, and facilities that need better thermal or acoustic performance.",
    approach:
      "We review drawings or walk the building, confirm square footage and assembly requirements, coordinate the schedule, and provide a clear scope for the GC or owner.",
    options: [
      "Pin-weld insulation systems",
      "Spray foam and batt insulation",
      "VRR systems and specialty applications",
      "Intumescent coatings where required",
    ],
    benefits: [
      "Better building performance",
      "Coordination around active operations",
      "A documented scope for commercial decision-makers",
    ],
    faqs: [
      {
        question: "Can Mustang bid work for a general contractor?",
        answer:
          "Yes. Share plans, square footage, building type, schedule, and specification requirements so we can review the scope and coordinate next steps.",
      },
    ],
  },
  soundproofing: {
    what: "Acoustic insulation for offices, shared walls, media rooms, mechanical spaces, and commercial interiors where sound control matters.",
    when: "It is useful when a project needs less sound transfer between rooms, tenants, work areas, or equipment spaces.",
    approach:
      "We review the wall, ceiling, floor, or mechanical assembly and coordinate the insulation with the rest of the construction details.",
    options: [
      "Shared walls and demising partitions",
      "Office and media-room applications",
      "Mechanical-room acoustic control",
    ],
    benefits: [
      "Reduced sound transfer",
      "More comfortable work and living areas",
      "A system matched to the assembly",
    ],
    faqs: [
      {
        question: "Does insulation make a room completely soundproof?",
        answer:
          "No single insulation product eliminates every sound path. We address the assembly and explain what level of improvement the proposed system is designed to provide.",
      },
    ],
  },
  "rodent-exclusion": {
    what: "A coordinated attic service that identifies entry points, supports sanitation, and prepares the space for safe insulation replacement.",
    when: "It may be needed after rodent activity, damaged insulation, droppings, nesting, or visible openings around the attic envelope.",
    approach:
      "We identify accessible openings and affected insulation, coordinate the required preparation, and complete insulation work only after the space is ready.",
    options: [
      "Entry-point sealing",
      "Attic sanitation coordination",
      "Removal and replacement of affected insulation",
    ],
    benefits: [
      "A cleaner attic",
      "Fewer accessible entry paths",
      "A coordinated path back to a functioning insulation system",
    ],
    faqs: [
      {
        question: "Does this replace pest-control service?",
        answer:
          "It addresses the insulation-side preparation and accessible building-envelope issues. We explain when a separate pest-control provider is also needed.",
      },
    ],
  },
  "fire-protective-coatings": {
    what: "Intumescent fire-protective coatings applied over qualifying spray foam assemblies where a thermal barrier is required.",
    when: "Commercial and specialty projects may require a coating system to meet the specified assembly and code requirements.",
    approach:
      "We review the foam system, project requirements, substrate, access, and specification before applying the appropriate coating system.",
    options: [
      "Commercial spray foam assemblies",
      "Specification-led coating systems",
      "Coordination with GCs, owners, and inspectors",
    ],
    benefits: [
      "Supports thermal-barrier requirements",
      "Clearer coordination on specialty scopes",
      "A documented commercial installation approach",
    ],
    faqs: [
      {
        question: "Is every coating approved for every foam system?",
        answer:
          "No. The coating, foam, thickness, substrate, and required assembly must be compatible and reviewed for the specific project.",
      },
    ],
  },
};

export const testimonials = [
  {
    name: "Brian Scoles",
    location: "Google Review",
    source: "Google",
    quote:
      "They were very prompt and professional. Matt was good to do business with — honest and quick to get the work scheduled.",
  },
  {
    name: "Benjamin Moody",
    location: "Google Review",
    source: "Google",
    quote:
      "Great pricing, amazing communication. Nothing but professionalism coming from Mustang Insulation. 10/10 would highly recommend.",
  },
  {
    name: "David Cooksey",
    location: "Google Review",
    source: "Google",
    quote:
      "They removed everything from the attic, sealed the floor, and added more insulation than I've ever had. My AC now comes on half as often.",
  },
  {
    name: "Bruce Strum",
    location: "Google Review",
    source: "Google",
    quote:
      "Paul and the crew showed up early, worked late, were thorough, and kept us informed the whole way through.",
  },
  {
    name: "Natasha Cortés",
    location: "Google Review",
    source: "Google",
    quote:
      "Outstanding experience from the very beginning — their team was incredibly thorough during the inspection and completely transparent throughout.",
  },
  {
    name: "Chris Storey",
    location: "Google Review",
    source: "Google",
    quote:
      "They removed all the old insulation, cleaned out years of debris, and gave me a great price on new insulation. Very professional and on time every time.",
  },
  {
    name: "Valentyn Tsuper",
    location: "Google Review",
    source: "Google",
    quote:
      "Truly a top-of-the-line spray foam company. They handled our large metal barn project and exceeded expectations in every way.",
  },
  {
    name: "Phil Poland",
    location: "Google Review",
    source: "Google",
    quote:
      "Absolutely 5 stars all the way! Excellent communication about what should be done, at a great price point.",
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
    body: "Experienced crews protect your home and work toward the specified depth and coverage with careful installation.",
  },
  {
    step: "04",
    title: "Warranty",
    body: "We explain the product and workmanship coverage relevant to your scope so you know exactly what is protected.",
  },
];
