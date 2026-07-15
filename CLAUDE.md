# CLAUDE.md — Operating Manual

This file is the operational quick-reference for anyone (human or agent) working
in this repository. The full mission, creative brief, and governing rules live in
[`PROJECT_BRIEF.md`](./PROJECT_BRIEF.md). Read that file in full before doing
substantive work. This file summarizes the rules that must never be broken and
the loop that drives the work.

---

## What this project is

The most authoritative, visually spectacular, accessible, and useful digital
experience devoted to **Rabbi Samson Raphael Hirsch (1808–1888)**. It is a
**source-first digital knowledge and learning platform** presented as a
world-class interactive digital exhibition — not a biography site, museum
template, or synagogue website.

Core creative concept: **A World Built From Words.** The visual environment
emerges from Hebrew letters, German typography, English translation, printed
books, manuscripts, and layers of interpretation.

## Non-negotiable rules (the short list)

1. **Never invent** facts, dates, quotations, citations, page numbers, editions,
   translations, relationships, events, interpretations, copyright permissions,
   academic consensus, test results, performance results, or source availability.
2. **Every historical claim** must trace to a source record in
   `SOURCE_REGISTRY.md`. **Every quotation** must carry full citation metadata.
3. **Copyright:** treat a 19th-century original and any modern translation as
   **separate copyrighted objects.** Publish source text only when
   `COPYRIGHT_LEDGER.md` records public domain, written permission, a compatible
   open license, or approved limited quotation.
4. **Never** write in the first person as Rabbi Hirsch. Never fabricate
   quotations. Never issue religious rulings. The future AI feature is
   **"Ask the Library"**, never "Ask Rabbi Hirsch," and must never impersonate him.
5. **Distinguish clearly** among: direct quotation, paraphrase, historical fact,
   scholarly interpretation, editorial interpretation, AI-assisted summary, and
   unresolved question.
6. **Accessibility (WCAG 2.2 AA) and reduced-motion are designed in, not bolted
   on.** Every experience has a keyboard-accessible, motion-free, and non-WebGL
   fallback.
7. **Performance claims come from real measurements only.** So do accessibility
   and test claims.
8. **Creator ≠ sole reviewer** for any important page, historical claim, or
   feature. Use separate creator/reviewer passes.
9. **Never push to production.** Work on branches; open PRs. This project's
   working branch is `claude/rabbi-hirsch-digital-exhibition-vofwee`.

## Stop and request human approval when

A creative direction must be selected; a material visual-identity decision is
needed; reliable sources materially disagree; copyright status is unclear;
theological interpretation needs expert review; production/DNS/credentials/
payment/irreversible/public-communication actions are requested. (Full list in
`PROJECT_BRIEF.md`.)

## The loop (production engine)

At the start of every iteration, read: `CLAUDE.md`, `PROJECT_STATE.md`,
`RISKS.md`, `CONTENT_BACKLOG.md`, `DECISIONS.md`, and the current milestone.
Then: pick the highest-priority **unblocked** task that serves the milestone →
define measurable acceptance criteria → do one meaningful unit of work → verify
every fact/quote/citation/edition/image/copyright touched → run relevant tests →
review the real rendered result (incl. mobile, keyboard, reduced-motion) → fix
material issues → update the tracking files → record evidence → commit only when
acceptance criteria pass.

Do not repeat completed work, create filler, add unnecessary dependencies, or
redesign functioning components without a documented reason.

## Repository files (maintained)

`PROJECT_BRIEF.md` · `PROJECT_STATE.md` · `SOURCE_REGISTRY.md` ·
`COPYRIGHT_LEDGER.md` · `CONTENT_BACKLOG.md` · `EDITORIAL_POLICY.md` ·
`DESIGN_SYSTEM.md` · `MOTION_SYSTEM.md` · `PERFORMANCE_BUDGET.md` ·
`ACCESSIBILITY_LOG.md` · `SEO_PLAN.md` · `DECISIONS.md` · `RISKS.md` ·
`CHANGELOG.md` · plus `CREATIVE_DIRECTIONS.md` (the First Assignment deliverable).

## Current milestone

**M0 — Research foundation & creative direction selection.** See
`PROJECT_STATE.md` for live status. Full production is **blocked** on human
selection of a creative direction.
