# CONTRIBUTING.md — How to work on AceWerk (acewerk.com)

This file is for humans and AI agents working on this repo.
It defines how to safely edit the site, especially index.html, without
accidentally undoing previous work.

## 1. index.html is the live canonical page

- This is the production landing page.
- Any visual or interactive change to the home page must be merged into this file.
- Do NOT:
  - Replace index.html with an older “design version” (e.g. indexV12)
    without explicitly confirming what will be lost.
  - Silently overwrite it from another file or branch.

## 2. Must-keep elements in index.html

Unless specifically asked to change, preserve:

- <title>Ace Werk</title> and primary meta tags
- The “Ace Werk” title styling (Orbitron or current brand font)
- The “See what we do” call-to-action (#entercta / .enter-cta)
- The WebGL vortex / wormhole canvas and:
  - The screenlink element
  - The click-to-enter animation config

If you’re unsure, prefer keeping it.

## 3. Syncing from design repos

When pulling or syncing from another design repo:

- Treat index.html as the base.
- Apply:
  - Visual/layout tweaks
  - Script / animation updates
  - Font / style refinements
- Preserve:
  - CTA button
  - SEO / meta
  - Accessibility attributes
- If there’s a conflict between “the new design HTML” and existing index.html:
  - Don’t auto-pick one.
  - Highlight the difference and ask for a decision.

## 4. Version control (git) rules

- Use git for all changes:
  - Commit every meaningful edit.
  - Use short, clear messages (e.g. “Home: adjust vortex hover behaviour”).
- Prefer small, focused commits:
  - One logical change per commit.
- Don’t push large, ambiguous overwrites of index.html without a clear explanation
  in the commit message (why, what is preserved, what is removed).

## 5. For AI agents / automation

- If AGENTS.md exists, follow it.
- If a task says “use this HTML as the new home page”:
  - Diff it against the current index.html.
  - Keep CTA, SEO, and vortex config unless explicitly told to drop them.
