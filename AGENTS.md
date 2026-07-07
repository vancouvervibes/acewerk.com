# AGENTS.md — Rules for automated agents / tooling

Use this file as guidance whenever editing this repo (especially `index.html`).

## index.html is the live canonical page

- It is the only source of truth for the landing page.
- Any design or feature change must be merged into this file.
- Never blindly replace `index.html` with a previous “design version” (e.g. indexV12) unless:
  - The user has explicitly named it,
  - And you understand what will be lost.

## Things that must be preserved (unless explicitly asked to remove)

- Title and basic SEO:
  - `<title>Ace Werk</title>`
  - Any primary meta tags (viewport, description, og tags).
- Branding / typography:
  - The “Ace Werk” title styling (e.g. Orbitron or chosen brand font).
- CTA:
  - The “See what we do” call-to-action element (`#entercta` / `.enter-cta`).
- Core animation:
  - The WebGL vortex / wormhole canvas setup.
  - The `screenlink` and its click-to-enter animation configuration.

## Merge, don’t overwrite

- When syncing from a design repo:
  - Prefer incremental changes (scripts, styles, layout tweaks).
  - Preserve existing CTA, SEO, accessibility, and animation unless instructed otherwise.
- If a conflict appears between a “new design HTML” and current `index.html`:
  - Ask the user; do not silently discard the live version.

## Git rules

- Every meaningful change must be committed with a clear message.
- Include which page(s) you changed and why.
