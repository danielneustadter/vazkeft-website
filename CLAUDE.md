# Vazkeft website

Astro 7 static site for Vazkeft LLC (cybersecurity research & engineering).
Dark minimal red design system (near-black + #e50914 accents) lives in `src/styles/global.css`; capability page
content lives in `src/data/capabilities.ts` (the four `/capabilities/*` pages
are generated from it).

## Rules

- No fabricated company facts: no invented CAGE/UEI numbers, certifications,
  clearances, contract awards, customer names, or metrics. Placeholders in
  `contracting.astro` stay "available on request" until real data exists.
- Keep the site fully static — no client frameworks, vanilla JS only.
- Respect `prefers-reduced-motion` for any new animation.

## Development

Dev server: `npm run dev` (port 4321). Build: `npm run build`.
