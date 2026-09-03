# Mustang Insulation Services Website

This is a React + Vite frontend for Mustang Insulation Services, a family-owned residential and commercial insulation contractor serving the Dallas-Fort Worth Metroplex.

It is built as a conversion-focused marketing site with dark premium branding, service pages, and quote-request flows, without any backend integration.

## Logo asset (uploaded — use exactly as provided)

- File: `Mustang_Logo.png` — a hexagonal badge containing a stylized white "M" with a red chevron/tail at its base, sitting to the left of the wordmark "MUSTANG" (bold, condensed, white) stacked above "INSULATION SERVICES" (small-caps, wide letter-spacing, white) flanked by two short red rule lines.
- This version is white/red and is built for **dark backgrounds only**. Use it as-is in the header (on the dark nav bar) and footer.
- Crop the hexagon icon alone (left-most element) as a square asset for the favicon and any small/mobile-nav placements.
- Maintain clearspace around the logo equal to the height of the hexagon icon on all sides — never crowd it with nav links, text, or edge-of-viewport cropping.
- Never stretch, rotate, recolor, drop-shadow, or bevel the mark. If a light-background placement is ever needed (e.g. a white invoice-style footer block), fall back to a solid black or solid red version of the mark rather than distorting the supplied file.
- Minimum display size: ~24px icon-only for tiny UI contexts, ~0.5in-equivalent (roughly 48px height) for badges, full recommended scale in the header/hero.

## Brand identity (strict — follow the brand guideline exactly)

- **Colors**:
  - Black `#0D0D0D` — structure, type, backgrounds
  - White `#FFFFFF` — negative space, backgrounds
  - Red `#C8102E` — single accent detail only (buttons, underlines, dividers, highlights) — never a large fill
  - Gray `#6B6B6B` — secondary text, captions, body copy
  - Rule: black + white should carry ~90% of the visual weight. Red is used deliberately and sparingly — never as a full-section background except in isolated CTA bands.
- **Typography**:
  - Headlines: **Space Grotesk Bold** — geometric, technical, confident. Use for H1/H2 and section labels.
  - Body: **IBM Plex Sans Regular** — clean, neutral, highly legible. Use for paragraphs, UI text, forms.
  - Hierarchy: H1 ~40pt, H2 ~22pt, Body ~14–16pt, Captions ~10pt gray.
- **Visual style**: dark, technical, construction-industry-premium — angled diagonal line accents (like a faint chevron/slash motif), sharp edges (not overly rounded), high contrast photography treated with a subtle dark overlay. Think "tough, precise, trustworthy trade contractor," not soft or playful.
- **Don'ts**: never stretch/rotate the logo, never recolor it outside approved palette, no drop shadows or bevels on the mark, never make red the dominant color of a section.

## Business facts to use verbatim

- **Name**: Mustang Insulation Services
- **Ownership language**: Family-owned and locally operated. Do not identify a former owner.
- **Phone**: 817-770-1867
- **Email**: info@mustanginsulation.com
- **Service area**: Dallas-Fort Worth Metroplex — Arlington, Fort Worth, Dallas, Grand Prairie, Mansfield, Hurst, Euless, Bedford, North Richland Hills, Grapevine, Colleyville, Forney, Keller, Southlake, Trophy Club, Denton County, Dallas County
- **Socials**: Instagram (@mustanginsulationservices), Facebook, Thumbtack, Nextdoor

## Services to feature (from brand guideline + existing business)

1. Blown-in attic insulation
2. Fiberglass batt insulation
3. Spray foam insulation
4. Insulation removal
5. Attic air sealing
6. Radiant barriers
7. Attic encapsulation
8. Crawlspace & pier-and-beam insulation
9. Metal building & warehouse insulation (commercial)
10. Soundproofing
11. Rodent exclusion & attic sanitation
12. Intumescent fire-protective coatings over spray foam

Split the site into two clear tracks: **Residential** and **Commercial**, matching the existing site's structure (they currently have a dedicated `/commercial` page).

## Brand voice (pulled from their existing marketing — keep this tone)

Straightforward, local, no-nonsense trade-contractor voice. Confident but not corporate. Emphasizes: family-owned and locally operated, honest pricing, no sales gimmicks, professional installation by experienced crews, free estimates, service-specific warranty guidance, energy-efficiency and comfort benefits, and fast responsiveness.

Sample proof points to weave into copy:

- Free estimates and evaluations, every time
- Industry-leading product and workmanship warranties, explained by service
- Professional installation by experienced crews
- Eco-friendly products meeting current insulation standards
- Final attic recommendations depend on existing insulation, product, assembly, and code

## Pages / structure

1. **Home**

- Hero: full-bleed dark photo of a technician/attic work or the truck wrap, dark overlay, H1 like "Smarter Insulation. Better-Performing Spaces." + red-accented subhead, primary CTA button "Get an Estimate" and secondary CTA "Call Mustang"
- Trust bar: locally owned · residential + commercial · professional installation · free estimates
- Services grid (icon + short label, linking to service detail sections/pages)
- "Residential vs Commercial" split section with two CTAs
- Why Mustang section (3–4 differentiators as cards)
- Service area map/list (cities served)
- Testimonials carousel (use paraphrased versions of real reviews below — do not quote verbatim)
- Before/after or process section: Inspect → Quote → Install → Warranty
- Final CTA band (red background, white text, phone + form)

2. **Residential** — services list, attic focus, comfort/energy-bill messaging, R-value guidance
3. **Commercial** — metal building/warehouse insulation, soundproofing, larger-scale project framing, request-a-quote form
4. **Services** (or individual service sub-pages/anchors) for each of the 12 services listed above, each with a short description and a "Get a Quote" CTA
5. **About** — family-owned and locally operated, service area, values (honesty, no gimmicks, quality)
6. **Gallery** — grid for project photos (build with placeholder images the user will swap in)
7. **Reviews** — paraphrased testimonial cards + links out to Thumbtack/Nextdoor/Facebook/Google
8. **Contact** — form (name, phone, email, city, service needed, message), click-to-call button, service area list, embedded map, social links

## Testimonial content (paraphrase for the site — do not reproduce verbatim)

- A Colleyville customer describes the team identifying and repairing roof openings squirrels were using to get in during an insulation quote.
- A homeowner in a 1950s house praised the team's responsiveness and speed getting a quote together.
- Nextdoor reviewers highlight the team's attention to detail, including catching ductwork issues while replacing old insulation, and describe the service as better than expected.

## Imagery direction

- Treat all photography with a subtle dark gradient overlay (black at ~40-60% opacity, heavier at the bottom for text legibility) so red/white text stays readable over any photo.
- Favor tight, confident shots: technicians in attics/crawlspaces mid-install, the truck wrap parked at a residential curb, close-ups of blown-in fiberglass texture, thermal-camera-style "before/after" imagery if available.
- Use a thin diagonal red or white line motif (matching the angled slashes in the brand guideline's background) as a recurring section-divider or hero background texture — subtle, never decorative clutter.
- Until real photos are uploaded, use high-quality stock/placeholder images of attic insulation work, insulation batting, and residential exteriors, treated with the same dark overlay so the site reads as finished, not templated.

## Motion & interaction

- Keep motion minimal and purposeful: fade/slide-in on scroll for section headers and cards, a subtle hover-lift + red underline reveal on service cards and nav links, smooth-scroll for in-page anchors (e.g. Home → Services).
- Sticky header should compress slightly (smaller logo, tighter padding) on scroll rather than disappearing, so the phone number and CTA stay reachable at all times.
- Buttons: red fill with white text as primary; on hover, darken red slightly (not lighten) to keep the confident/technical feel. Secondary buttons: white/outline on dark backgrounds, black outline on light backgrounds.

## Components to build

- Sticky header with logo, nav (Home / Residential / Commercial / Services / About / Gallery / Reviews / Contact), phone number pinned top-right, red "Free Estimate" button
- Reusable service card component (icon, title, 1-line description)
- Reusable CTA band component (red background variant + dark variant)
- Testimonial card component
- Contact/quote request form with validation (fields: name, phone, email, service type dropdown, city, message)
- Footer: logo, service area list, phone/email, social icons, service links, license/insurance line placeholder, copyright

## Technical requirements

- Fully responsive (mobile-first; this audience searches on mobile heavily)
- Fast-loading hero (optimize images, lazy-load below the fold)
- SEO: proper H1/H2 hierarchy, meta titles/descriptions per page targeting "insulation contractor Dallas Fort Worth," "attic insulation [city]," etc., alt text on all images
- Click-to-call phone links on mobile
- Accessible color contrast (verify red-on-black and white-on-black meet WCAG AA for text)
- Placeholder/stock construction and attic-insulation photography until real photos are uploaded (dark-toned treatment to match brand)

Build this as a clean, professional, conversion-focused site — the goal is homeowners and commercial property managers landing on it and immediately trusting Mustang enough to request a free estimate. https://www.mustanginsulationtx.com/ you can draw texxt copy detials from their old websiote too i want ti standadra and professional . i want you to use react vite so the and it just only the frontned pages i want no backed conecctions

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
