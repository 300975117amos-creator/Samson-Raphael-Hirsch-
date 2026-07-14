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

### D-005 — (Proposed, pending) M1 technical stack
- **Proposed:** Next.js + TypeScript · MDX + Zod-validated front matter · CSS
  approach TBD with the selected direction · GSAP + ScrollTrigger for scroll/
  cinematic motion · a component motion lib for micro-interactions · Three.js/R3F
  **only** where a direction requires it · Pagefind for static search · Vitest +
  React Testing Library + Playwright + axe-core.
- **Status:** Not committed — depends on the selected direction. Recorded here so
  the decision is explicit when made. **Responsible:** Agent (technical director),
  pending human confirmation.
