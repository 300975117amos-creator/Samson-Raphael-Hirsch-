# PROJECT_STATE.md

_Last updated: 2026-07-14_

## Current phase
**M0 — Research foundation & creative direction.**

## Current milestone
Deliver three creative directions, recommend one, and obtain human selection.
Establish the research foundation (source map, chronology skeleton, copyright
posture). Full production is **blocked** on direction selection (R-D01).

## Completed work (this iteration)
- Established repository governance & tracking files: `CLAUDE.md`,
  `PROJECT_BRIEF.md`, `EDITORIAL_POLICY.md`, and all required tracking docs.
- Ran M0 research pass on Rabbi Hirsch: identified primary works, digitized
  editions, encyclopedic references, and a candidate portrait source.
- Recorded sources in `SOURCE_REGISTRY.md` with honest verification status; logged
  copyright posture per work/translation in `COPYRIGHT_LEDGER.md`.
- Recorded genuine source discrepancies (death day, Horeb year, Jeschurun years)
  as OPEN risks instead of resolving them by guessing (R-H01…R-H06).
- Authored `CREATIVE_DIRECTIONS.md`: three radically different directions
  (cinematic-spatial / typographic / experimental-conceptual) with an honest
  recommendation.
- Authored `DESIGN_SYSTEM.md`, `MOTION_SYSTEM.md`, `PERFORMANCE_BUDGET.md`,
  `ACCESSIBILITY_LOG.md`, `SEO_PLAN.md`, `CONTENT_BACKLOG.md`, `DECISIONS.md`,
  `CHANGELOG.md`.

## Active task
Await human selection of a creative direction (see `CREATIVE_DIRECTIONS.md` §
Recommendation).

## Blockers
- **R-D01 (S1):** Creative direction must be selected by a human before M1
  prototype implementation begins. This is a required-human-approval gate per
  `PROJECT_BRIEF.md`.

## Next recommended task (once a direction is selected)
Begin **M1 creative prototype**: scaffold a Next.js + TypeScript app with a real
test/accessibility harness (Vitest + Playwright + axe-core), MDX content schemas
(Zod) kept separate from animation code, and implement the opening sequence of the
selected direction with its designed reduced-motion and non-WebGL fallbacks —
smallest reliable motion stack first.

## Evidence of completion (this iteration)
- Files present in repo root (see `git log` for commit).
- Research corroboration recorded in `SOURCE_REGISTRY.md` (facts marked ✅ appear
  in ≥2 reference sources; disputed items marked 🔴 and cross-listed in `RISKS.md`).

## Test results
- **None run.** No application code exists yet; there is nothing to test this
  iteration. No test, performance, or accessibility results are claimed. A test
  harness is the first task of M1.

## Required human decisions
1. **Select a creative direction** (A / B / C) — R-D01.
2. Confirm the M1 technical stack (Next.js suggested) if any change is desired.
3. Provide or approve access to a rights-cleared portrait before it is displayed
   (R-C03 / AST-020).
