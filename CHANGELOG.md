# CHANGELOG.md

All notable changes to this project. Dates in ISO 8601.

## [Unreleased]

### 2026-07-15 — Portrait research + original typographic portrait plate
- **Researched** a public-domain portrait: identified real candidates — an
  **E. Schier lithograph (1847)** via Leo Baeck Institute (SRC-016) and the
  **Wikimedia Commons category** (SRC-017), which also holds the Drachman 1899
  *Nineteen Letters* (strengthens that translation's public-domain case).
- **Blocked:** this environment's network policy denies commons.wikimedia.org /
  wikipedia / archive.org (verified at the proxy: `connect_rejected 403`), so the
  specific file's license could not be read and the image could not be downloaded.
  Per editorial policy, **no unverified image is published.** Leads recorded in
  `SOURCE_REGISTRY.md` / `COPYRIGHT_LEDGER.md` (AST-020) with unblock paths.
- **Added** `TypographicPortrait` (AST-021) — an ORIGINAL engraving-style portrait
  plate built from Hirsch's name (Hebrew/Latin), dates, posts, and the motto
  *Torah im Derech Eretz*. No photograph, no third-party image; always labeled
  "typographic portrait — not a photograph." Realizes the brief's "portrait through
  typographic masks" idea with zero rights risk. Placed on the "Who" page.
- **Verified:** `tsc` 0 · `vitest` 12/12 · `next build` 15/15 · screenshot reviewed
  (posts line fitted within the frame after a fix).

### 2026-07-15 — Original visual systems (infographics, map, network, generative type)
- **Added** copyright-safe, hand-authored visuals (no stock/archival photos; image
  rights remain uncleared, R-C03):
  - `JourneyMap` — schematic SVG map of Hirsch's rabbinic posts (Hamburg →
    Oldenburg → Emden → Nikolsburg → Frankfurt), animated route, honest
    "schematic / approximate years" caption, with an accessible ordered-list
    companion carrying the same data. New verified `src/content/geo.ts`.
  - `WorksChart` — publication-timeline infographic with an always-present data
    table for non-visual access.
  - `ConceptConstellation` + `ConceptsExperience` — an interactive SVG concept
    network sharing one selection with the accessible explorer list; short graph
    labels, keyboard-operable nodes.
  - `GenerativeType` — ambient "world built from words" backdrop of Hebrew/German/
    English letterforms and verified tokens; low-opacity, edge-masked, holds still
    under reduced motion; deterministic layout (no hydration mismatch).
  - `StatTiles` — "at a glance" figures, each verifiable and labeled.
- **Fixed** constellation node click target (decorative circles no longer
  intercept pointer events); **fixed** graph label overflow (short labels).
- **Extended** the source-integrity test to cover the new map data (now 12/12).
- **Verified:** `tsc` 0 errors · `vitest` 12/12 · `next build` 15/15 pages, First
  Load JS 124 kB home / 107 kB others (SVG adds ~1 kB) · screenshots reviewed
  (home, timeline map, works chart, concept network, reduced-motion).

### 2026-07-14 — M0 foundation
- **Added** repository governance & operating docs: `CLAUDE.md`,
  `PROJECT_BRIEF.md`, `EDITORIAL_POLICY.md`.
- **Added** research foundation: `SOURCE_REGISTRY.md` (primary works, digitized
  editions, encyclopedic leads, candidate portrait source) with honest
  verification status; `COPYRIGHT_LEDGER.md` (per-work/translation posture,
  nothing cleared for full text).
- **Added** tracking docs: `PROJECT_STATE.md`, `RISKS.md`, `CONTENT_BACKLOG.md`,
  `DECISIONS.md`.
- **Added** system docs: `DESIGN_SYSTEM.md`, `MOTION_SYSTEM.md`,
  `PERFORMANCE_BUDGET.md`, `ACCESSIBILITY_LOG.md`, `SEO_PLAN.md`.
- **Added** `CREATIVE_DIRECTIONS.md` — three creative directions
  (cinematic-spatial / typographic / experimental-conceptual) with an honest
  recommendation. **First Assignment deliverable.**
- **Logged** genuine source discrepancies as OPEN risks (R-H01/H02/H03) rather
  than resolving by guessing.
- **Blocked:** full production pending human selection of a creative direction
  (R-D01).

### 2026-07-14 — M1 prototype (Direction B selected & built)
- **Selected** Direction B ("Set in the Text") — project owner (DECISIONS D-006);
  R-D01 resolved.
- **Added** Next.js 15 (App Router) + TypeScript app. Content separated from
  components: typed data in `src/content`, Zod schemas in `src/lib`, UI in
  `src/components`.
- **Added** source-first content model: schemas require a registered source +
  claim type + verification status on every claim; a referential-integrity test
  fails the build if any claim cites an unregistered source.
- **Added** Direction B design system (black/white + one ink-vermilion accent; no
  cliché palette), commentary-page grid, RTL via logical properties.
- **Added** prototype experiences: homepage opening sequence (skippable,
  reduced-motion aware, returning-visitor skip); sticky nav + chapter index +
  motion toggle; typographic-ledger timeline with world filter (disputed dates
  shown honestly); Living Text Hebrew↔German↔English morph (labeled renderings);
  works library + commentary-layout work detail; concept explorer; citation/claim
  components used throughout.
- **Added** tests: `content.test.ts` (source-first invariants) and
  `components.test.tsx` (labels, safe external links, axe smoke).
- **Verified (real evidence):** `tsc` 0 errors; `vitest` 11/11 pass; `next build`
  15/15 static pages, First Load JS 102–124 kB; 8 Chromium screenshots inspected
  across desktop/mobile/reduced-motion.
- **Deferred (honest):** archival-image interaction (image rights uncleared,
  R-C03); licensed variable fonts (R-C05); MDX prose pipeline; in-browser axe +
  Lighthouse (no CWV or WCAG-conformance claims made — see ACCESSIBILITY_LOG /
  PERFORMANCE_BUDGET).
