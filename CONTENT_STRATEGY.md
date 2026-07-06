# AceWerk Content Strategy (MVP)

## 1. Tone, Voice, Positioning

- Positioning: We are a technical creative studio for ambitious product companies. We build immersive web experiences, product-led marketing, and growth systems that prove competence without explaining it.
- Voice:
  - Confident, minimal, specific.
  - Built for decision-makers and engineers; we don't dumb down, we don't show off.
  - Lead with clarity and taste over volume and hype.
- Core sell:
  - "We turn high expectations into production-grade experiences" (web + creative tech + growth).
- Guardrails:
  - No filler ("passionate," "innovative," "cutting-edge," "world-class").
  - Prefer concrete signals: what we do, how we do it, for whom.
  - Use short, declarative sentences. One idea per section.

## 2. Per-page content outlines

### A. Mosaic landing (/)

- Purpose:
  - Establish tone and capability in 3 seconds.
  - Make the visitor choose to go deeper.

- Section order:
  - Fullscreen WebGL mosaic (ambient motion, no heavy copy).
  - Centered:
    - AceWerk wordmark / logo (small).
    - Short tagline:
      - e.g., "Digital experiences for ambitious product teams."
    - Prompt:
      - e.g., "Enter site" or "Explore our work"
      - Implement as subtle button or keypress hint.

- Copy directions:
  - Tagline must be short (max 8 words) and work as a statement of identity, not a promise.
  - Prompt should feel like an invitation, not a sales door.

- CTA strategy:
  - Single action: "Enter site" → smooth scroll/transition to main content page.
  - No secondary links here.

### B. Main content page (post-landing scroll)

This is the core page where we define who we are, what we do, and why it matters.

- Purpose:
  - Make our positioning immediately clear.
  - Impress technically minded visitors while generating inbound interest.

- Section order (top to bottom):

  1) Statement of identity
     - 2–3 sentences max.
     - Say:
       - What we are: digital studio / engineering + creative.
       - Who we serve: product-led companies, startups, Web3, fintech, SaaS.
       - How: design, creative development, growth.
     - Copy direction:
       - No "we are passionate" or "end-to-end solutions."
       - Example structure:
         - "AceWerk is a digital studio for ambitious product companies."
         - "We design and build web experiences, interactive product pages, and marketing systems that perform."
         - "Work with us if you care about craft and outcomes."

  2) What we do (services overview)
     - Four compact blocks. Each: name, 2 lines max, outcome-oriented.

     - Web design
       - Focus: product-grade interfaces, clear hierarchy, strong visual identity.
     - Web development
       - Focus: fast, maintainable, scalable builds (React, Next.js, WebGL).
     - Creative tech
       - Focus: WebGL, motion, interactive storytelling, immersive landing experiences.
     - Marketing and growth
       - Focus: positioning, messaging, landing pages that convert, content systems.

  3) Why AceWerk (differentiators)
     - 4 short bullets. Concrete, not fluff. Examples:
       - "Studio-level craft, not template work."
       - "Engineering and creative in one team."
       - "Built for complex products, not brochures."
       - "Fast turnaround without technical compromise."

  4) Selected work teaser
     - 2–3 featured projects only:
       - Project name + 1-line description + tech or outcome.
       - Visuals heavy, text lean.
     - CTA:
       - "View all projects" → /work

  5) How we work (ultra-short)
     - 3 steps, 1 line each:
       - Discover: clarify goals, audience, constraints.
       - Build: design, develop, iterate quickly.
       - Ship: launch with performance and maintainability in mind.
     - Keep this functional and dry.

  6) Final CTA
     - Short line:
       - e.g., "Have a project? Let’s talk."
     - CTA button:
       - "Get in touch" → /contact

- CTA strategy:
  - Primary: drive to /contact via final CTA.
  - Secondary: drive to /work via teaser section.

### C. /work (Selected work)

- Purpose:
  - Prove capability through examples.
  - Reinforce trust with clear context and measurable outcomes.

- Section order:

  1) Intro (1–2 lines)
     - No generic intro.
     - e.g., "A selection of projects we’ve designed, built, and shipped."

  2) Featured projects
     - 4–8 max for MVP.
     - Each card:
       - Project name.
       - 1-line context: client + problem.
       - 2–3 bullets:
         - What we did (design, dev, creative tech, marketing).
         - Key tech (e.g. "WebGL / React / headless CMS") where relevant.
       - Optional: short outcome (e.g. "Launched in 6 weeks", "Used as main fundraising page").
       - Strong visuals over long descriptions.

  3) Clients / partners strip (if applicable)
     - Simple logos row.
     - No extra commentary.
     - Use only if we have permission.

  4) Subtle impact line (if appropriate)
     - 1–2 bullets of aggregate statements (no exaggeration):
       - e.g., "Consistently ship high-complexity projects for fintech, Web3, and product-led startups."

  5) CTA
     - Short:
       - "Want something similar?"
       - Button: "Start a project" → /contact

- CTA strategy:
  - Single CTA: /contact.
  - No pricing, no "book a call" jargon.

### D. /contact

- Purpose:
  - Convert interest into a structured inquiry.
  - Signal speed, professionalism, and seriousness.

- Section order:

  1) Header (1 line)
     - Direct:
       - "Tell us about your project."

  2) Subtext (2–3 lines)
     - Set expectations:
       - "We usually respond within 1–2 business days."
       - "Tell us what you’re building and what you need from us."

  3) Contact form
     - Fields (lean):
       - Name
       - Email
       - Company (optional)
       - Project type (dropdown): Web design, Web development, Creative tech, Marketing & growth, Not sure yet.
       - Message.
     - Submit label:
       - "Send"

  4) Alternative contact line
     - For direct reach:
       - e.g., "Or email us at: info@acewerk.com"

  5) Tiny trust line
     - Optional, very short:
       - "We treat every inquiry as a real project."

- CTA strategy:
  - Single, clear CTA: form submission.
  - No secondary distractions.

## 3. Messaging pillars (reusable across pages)

Use these as consistent themes; do not repeat verbatim, but keep the intent.

- Craft as a differentiator
  - We don’t sell templates. Everything is custom, considered, and technically sound.

- Engineering and creative, aligned
  - We combine strong design with robust development; fewer handoffs, fewer compromises.

- Built for ambitious product teams
  - We target founders, product leads, and technical decision-makers who expect quality and speed.

- Outcome-focused, not decorative
  - Every page, animation, and campaign should serve clarity, trust, or conversion.

- Transparent and efficient
  - Fast response, direct communication, no sales theater.

- Comfortable with complexity
  - We’re built for technically complex briefs (Web3, fintech, design systems, WebGL).

## 4. Notes for design and dev

- Structural and UX implications:

  - Landing (/)
    - Must load quickly on average connections; optimize textures and shaders.
    - Ensure the mosaic doesn’t trap users: visible "Enter site" prompt + keyboard hint.
    - Provide reduced-motion fallback: static or subtle gradient background + clear CTA.

  - Main content page
    - Use dense visual hierarchy:
      - Hero: 2–3 lines max.
      - Services: grid (2x2 or 4 columns) with concise labels.
      - Portfolio teaser: large visuals, minimal captions.
    - Place trust signals:
      - "Why AceWerk" section near portfolio teaser.
      - Optional client logos in a restrained row before final CTA.
    - Use subtle motion (scroll reveals, parallax, hover effects) to reinforce capability without slowing reading.

  - /work
    - Treat as a living portfolio:
      - Card-based layout.
      - Keep metadata consistent: role, stack, timeframe.
      - Avoid long storytelling; let visuals and bullets do the work.
    - Internal linking:
      - Link key tech terms or project types back to main page (e.g., "creative tech" → main services section).

  - /contact
    - Use a clean, focused layout with generous spacing.
    - Keep secondary info (email address) visible but not prominent enough to distract from the form.

- Internal linking strategy (MVP):

  - From main page:
    - "View all projects" → /work
    - "Get in touch" → /contact
  - From /work:
    - "Start a project" → /contact
    - Select project type links → relevant section on main page.
  - From /contact:
    - Optional subtle link in footer: back to main page.

- SEO (MVP-level notes):

  - Use a clear H1 per page that includes:
    - Brand + core offering.
    - E.g., main page H1: "Digital studio for ambitious product companies."
  - Add concise meta descriptions:
    - 120–150 characters, focused on:
      - Who we are
      - What we do
      - For whom
  - Use semantic structure:
    - Proper headings (H1–H3), section tags, alt text, and descriptive URLs.
