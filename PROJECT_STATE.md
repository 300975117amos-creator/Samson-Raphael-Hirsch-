# PROJECT_STATE.md

_Last updated: 2026-07-14_

## Current phase
**M1 — Creative prototype** (Direction B, "Set in the Text"). Direction selected by
the project owner; R-D01 resolved.

## Current milestone
Build a functional browser prototype of Direction B demonstrating the opening,
navigation, timeline, living text, a works transition, concept exploration, and
the source/citation system — across desktop, mobile, and reduced motion — on a
real test/build harness. Then obtain human approval to proceed toward M2.

## Completed work
### M0 (2026-07-14)
- Governance, research, and system docs; three creative directions; honest
  recommendation. Source discrepancies logged as OPEN risks.

### M1 prototype (2026-07-14)
- Scaffolded **Next.js 15 (App Router) + TypeScript** app; content kept separate
  from components (typed data in `src/content`, Zod schemas in `src/lib`,
  animation in `src/components`).
- **Source-first content model:** Zod schemas make a registered source + claim
  type + verification status *required* on every claim. Referential-integrity test
  fails the build if any claim cites an unregistered source.
- **Direction B system:** black/white + one ink-vermilion accent (no cliché
  palette), type-led layout, commentary-page grid, logical properties for RTL.
- **Demonstrations built & verified in a real browser (Chromium screenshots):**
  1. Homepage opening sequence (skippable, Escape, returning-visitor skip). ✅
  2. Main navigation (sticky header, chapter index, motion toggle). ✅
  3. Timeline — typographic ledger with world filter; disputed dates shown as
     "1837 / 1838 (sources vary)" with sources + reliability. ✅
  4. Living Text — Hebrew↔German↔English morph on the name and on
     "Torah im Derech Eretz," every rendering labeled. ✅
  5. Work-detail commentary layout (original vs translation copyright). ✅
  6. Concept exploration (accessible "glossary that thinks"). ✅
  7. Source/citation overlays throughout (the "archival interaction" is currently
     source-based; image-based archival deferred — image rights uncleared, R-C03).
  8. Desktop, 9. Mobile (390px), 10. Reduced motion — all verified. ✅
  11. Weak-device fallback: no WebGL anywhere; pure DOM/CSS, so weak devices get
      the same experience by construction.
- **Accessibility built in:** skip link, focus-visible rings, semantic headings,
  status conveyed by text+shape (not color alone), keyboard-operable filters/
  explorer, reduced-motion as a designed mode + manual toggle, correct `lang`/`dir`.

### M1 visual systems (2026-07-15)
- Added original, copyright-safe visuals: schematic **journey map**, **publication
  infographic** (with data table), interactive **concept network** (shares
  selection with the accessible explorer), ambient **generative-typography** hero
  backdrop, and **stat tiles**. Each ships a text/list/table equivalent and is
  reduced-motion aware. Verified: `tsc` 0, `vitest` 12/12, `next build` 15/15,
  screenshots reviewed. No stock/archival photos (image rights uncleared, R-C03).

## Active task
Await human review/approval of the M1 prototype direction execution before
expanding to full launch pages (M2). Meanwhile, next unblocked engineering tasks
are queued below.

## Blockers / required human decisions
- **Approve M1 prototype** to proceed toward M2 (Creative Prototype Milestone
  sign-off).
- **Portrait/archival image rights (R-C03/AST-020):** candidates identified
  (E. Schier 1847 lithograph via LBI; Wikimedia Commons), but the network policy
  blocks Commons/Wikipedia/archive.org, so the license can't be verified and the
  file can't be downloaded here. Interim: an original typographic portrait plate
  (AST-021) ships, clearly labeled "not a photograph." To add a real likeness:
  allow commons.wikimedia.org in the network policy, or add the rights-cleared file
  to `public/`.
- **Font licensing:** approve an OFL variable-font family (e.g. for true
  variable-axis morphing) to record in the copyright ledger; prototype currently
  ships only system fonts (no unlicensed fonts).

## Next recommended tasks (unblocked)
1. Add **Playwright e2e + axe-in-browser** (real contrast/keyboard audits; jsdom
   axe is a smoke test only) and wire Lighthouse CI for measured Core Web Vitals.
2. Add **MDX + Zod** long-form prose pipeline for the biography/essay pages.
3. Add **Pagefind** static search + the Source Library page.
4. Verify each open historical item (R-H01…R-H05) against a reliable biography via
   an authenticated fetch path (R-H06), then attach locators.

## Evidence of completion (this iteration)
- **Typecheck:** `tsc --noEmit` → exit 0.
- **Unit tests:** `vitest run` → **11 passed / 11**, 2 files (content invariants +
  components + axe smoke).
- **Build:** `next build` → success; 15 static pages generated. First Load JS:
  home 124 kB, other routes 105–106 kB, shared 102 kB (within the ≤130 kB
  reading-page budget). See `PERFORMANCE_BUDGET.md`.
- **Visual review:** 8 Chromium screenshots (desktop/mobile/reduced-motion) taken
  and inspected; described in `CHANGELOG.md`.

## Test results (actual)
- typecheck: pass (0 errors). unit: 11/11 pass. build: pass (15/15 pages).
- **Not yet measured:** Lighthouse / Core Web Vitals under throttling; in-browser
  axe contrast/keyboard audit; screen-reader pass. These are the top M1-continuation
  tasks and no scores are claimed until run.
