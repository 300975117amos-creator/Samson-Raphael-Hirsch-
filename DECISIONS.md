# DECISIONS.md

Append-only log of material decisions. Each: decision · date · reason ·
alternatives · risks · responsible.

---

### D-001 — Repository governance-first bootstrap
- **Decision:** Before any application code, establish the full governance/tracking
  file set and an honest research foundation.
- **Date:** 2026-07-14 · **Responsible:** Agent (project lead role)
- **Reason:** `PROJECT_BRIEF.md` requires source-first discipline and forbids
  writing content ahead of the chronology/source map. Governance must exist before
  the loop can run safely.
- **Alternatives:** Jump straight to a prototype (rejected — violates M0 gating and
  risks unsourced content); minimal README only (rejected — insufficient).
- **Risks:** Docs without code can drift; mitigated by making M1's first task the
  test harness. (R-S01)

### D-002 — Record source discrepancies as open risks, do not resolve by guessing
- **Decision:** Where reliable sources disagree (death day, Horeb year, Jeschurun
  years), log the disagreement and withhold a settled claim.
- **Date:** 2026-07-14 · **Responsible:** Agent (historical research / fact-check)
- **Reason:** Editorial policy §1/§5 forbid inventing or prematurely settling facts.
- **Alternatives:** Pick the most common value (rejected — that is guessing).
- **Risks:** Chronology remains partially open until verified (acceptable at M0).

### D-003 — Treat originals and modern translations as separate copyright objects
- **Decision:** No full-text of any modern translation without verified clearance;
  prefer quoting PD German originals with labeled translations.
- **Date:** 2026-07-14 · **Responsible:** Agent (copyright review)
- **Reason:** Core brief rule; protects against infringement (R-C01/R-C02).
- **Alternatives:** Rely on "available online" (rejected — availability ≠ license).

### D-004 — Defer creative-direction selection to a human
- **Decision:** Produce three directions and a recommendation; do not begin M1
  until a human selects.
- **Date:** 2026-07-14 · **Responsible:** Agent (creative director)
- **Reason:** Required-human-approval gate (R-D01); brief forbids production before
  selection.
- **Alternatives:** Auto-proceed with the recommended direction (rejected).

### D-006 — Creative direction selected: B ("Set in the Text")
- **Decision:** Human selected **Direction B — Set in the Text** (typographic /
  language-driven) for the M1 prototype. R-D01 resolved.
- **Date:** 2026-07-14 · **Responsible:** Human (project owner) + Agent
- **Reason:** Lowest copyright/accessibility/performance risk, truest to Hirsch as
  translator/commentator, fastest to a trustworthy prototype. Recommended in
  `CREATIVE_DIRECTIONS.md`.
- **Note:** Direction C's "binding" metaphor may be grafted into the concept map
  and dual-rail timeline (optional, to validate in-prototype).

### D-007 — M1 stack committed
- **Decision:** Next.js (App Router) + TypeScript · MDX + Zod-validated front
  matter (content separate from components) · CSS (custom properties + CSS
  Modules) with logical properties for RTL · variable-font-driven type motion via
  Web Animations API / CSS first, GSAP only if a scene needs it · Pagefind for
  static search · Vitest + Testing Library + Playwright + axe-core.
- **Date:** 2026-07-14 · **Responsible:** Agent (technical director)
- **Reason:** Direction B needs no WebGL; smallest reliable stack. Matches brief.
- **Alternatives:** Astro (rejected — team familiarity + React motion ecosystem);
  GSAP-everywhere (deferred — start with platform APIs, add GSAP only where needed).

### D-008 — M1 prototype scope decisions
- **Date:** 2026-07-14 · **Responsible:** Agent (technical director)
- **Decisions & reasons:**
  - **Type motion via CSS/Web Animations, no GSAP yet** — the Direction B morph and
    reveals don't need it; keeps the stack minimal (R-T01).
  - **System fonts only in the prototype** — no unlicensed fonts shipped
    (brief rule). A licensed OFL variable family (for true axis morphing) is a
    follow-up with a copyright-ledger entry (R-C05). The morph works with any font.
  - **Typed TS data + Zod now; MDX prose pipeline deferred** to the next task —
    satisfies "reusable content schemas" and "content separate from components"
    while keeping the build reliable. MDX lands for long-form biography/essays.
  - **Archival-image interaction deferred; source/citation overlays shipped
    instead** — image rights are uncleared (R-C03), so no portrait/scan is
    displayed. The "archival interaction" is currently source-based and honest.
- **Alternatives considered:** MDX immediately (rejected — extra config risk for no
  prototype benefit); ship a portrait now (rejected — rights uncleared).

### D-005 — (Superseded by D-007) M1 technical stack proposal
- **Proposed:** Next.js + TypeScript · MDX + Zod-validated front matter · CSS
  approach TBD with the selected direction · GSAP + ScrollTrigger for scroll/
  cinematic motion · a component motion lib for micro-interactions · Three.js/R3F
  **only** where a direction requires it · Pagefind for static search · Vitest +
  React Testing Library + Playwright + axe-core.
- **Status:** Not committed — depends on the selected direction. Recorded here so
  the decision is explicit when made. **Responsible:** Agent (technical director),
  pending human confirmation.
