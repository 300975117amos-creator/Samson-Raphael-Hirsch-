# RISKS.md

Living risk register. Severity: **S1** critical (blocks launch / legal / trust),
**S2** significant, **S3** minor. Status: OPEN / MITIGATING / RESOLVED.

## Historical accuracy

- **R-H01 (S2, OPEN) — Death date discrepancy.** Sources give **30 Dec 1888**
  (prabook) vs **31 Dec 1888** (Wikipedia/others). *Mitigation:* confirm against a
  reliable biography/period record before publishing; until then write "December
  1888."
- **R-H02 (S2, OPEN) — Horeb publication year.** Cited as **1837** and **1838**.
  *Mitigation:* verify title page / catalog record; present as "1837/1838
  (sources vary)" until resolved.
- **R-H03 (S2, OPEN) — Jeschurun run-years.** Search surfaced "1855–1870, new
  series 1882–"; other memory suggests 1854. *Mitigation:* verify from a catalog
  of the periodical; do not assert until confirmed.
- **R-H04 (S3, OPEN) — University of Bonn attendance dates** (and the noted
  overlap with Abraham Geiger) not yet confirmed against a reliable source.
- **R-H05 (S3, OPEN) — Per-volume years** of *Der Pentateuch* and *Die Psalmen*
  unconfirmed. Do not cite specific volume years yet.
- **R-H06 (S2, OPEN) — Automated-fetcher block.** archive.org and Wikipedia return
  403 to this environment. All URL-dependent locator checks are therefore
  *pending human/authenticated verification*; no page/verse locator has been
  directly opened. Content publication must not outrun this verification.

## Copyright

- **R-C01 (S1, OPEN) — Nineteen Letters edition ambiguity.** The archive scan
  (SRC-013) may be an in-copyright translation, not the PD Drachman 1899. *No
  quotation until edition confirmed* (AST-002).
- **R-C02 (S1, OPEN) — Modern translations are protected.** Grunfeld/Levy/
  Hirschler/Elias editions are in copyright; risk of over-quoting. *Mitigation:*
  quote PD German originals with labeled translations; conservative attributed
  quotation only from modern editions.
- **R-C03 (S1, OPEN) — Portrait rights (AST-020).** LBI image terms unread. Do not
  display until cleared.
- **R-C04 (S2, OPEN) — "Available ≠ licensed."** Sefaria/HathiTrust/archive
  availability does not grant republication rights; per-item license check needed.

## Accessibility

- **R-A01 (S2, MITIGATING) — Motion vs WCAG 2.2.** Direction B uses no WebGL, which
  removes the largest reduced-motion/non-WebGL risk. Reduced motion is implemented
  as a designed mode + manual toggle (verified). *Remaining:* in-browser axe,
  manual keyboard, and screen-reader audits not yet run (see ACCESSIBILITY_LOG) —
  so this stays open until those pass, but severity is lowered.
- **R-A02 (S2, OPEN) — RTL Hebrew parity.** Hebrew must not read as secondary;
  risk of LTR-first components breaking RTL. *Mitigation:* RTL in the architecture
  from day one; logical CSS properties; RTL in test matrix.
- **R-A03 (S2, OPEN) — Pointer-follow motion** can violate "avoid motion that
  follows pointer." Gate all cursor-reactive effects behind reduced-motion + a
  toggle.

## Performance

- **R-P01 (S2, OPEN) — WebGL/3D on mobile & weak devices.** Risk of jank and
  battery drain. *Mitigation:* device-capability tiering; static fallbacks;
  measured budgets in `PERFORMANCE_BUDGET.md`; no desktop effects on mobile.
- **R-P02 (S2, OPEN) — Font payload** (multilingual: Latin + Hebrew + German
  diacritics + variable fonts). *Mitigation:* subset, `font-display`, preload
  critical faces only.

## Security / technical debt / process

- **R-S01 (S2, RESOLVED) — App scaffold + test harness.** Next.js app scaffolded
  with typecheck + Vitest (11 passing) + production build (15 pages) as of
  2026-07-14. Playwright e2e + Lighthouse CI still to be added (tracked as next
  tasks), but the "no harness" risk is resolved.
- **R-T01 (S3, MITIGATING) — Dependency creep.** Prototype uses a deliberately
  small stack (next, react, zod; dev: vitest/testing-library/axe/playwright). No
  animation library added yet (type motion is CSS/WAAPI). GSAP only if a scene
  needs it (D-007).
- **R-A04 (S3, OPEN) — jsdom axe is a smoke test only.** Color-contrast and full
  ruleset are NOT covered in jsdom. *Mitigation:* run axe in Chromium via
  Playwright before any accessibility conformance claim.
- **R-C05 (S3, OPEN) — Font licensing.** Prototype ships system fonts only (safe).
  Any licensed/variable family must be recorded in the copyright ledger before use.
- **R-P03 (S3, OPEN) — Lab performance unmeasured.** Bundle budget is measured and
  within target, but Core Web Vitals under throttling are not. No CWV claim until
  measured.

## Editorial / theological / product

- **R-E01 (S2, OPEN) — "What would Hirsch say about modern X."** High
  misuse/misrepresentation risk. *Mitigation:* editorial-interpretation labeling +
  primary-source grounding required; Jewish-studies reviewer sign-off.
- **R-E02 (S1, OPEN) — Impersonation.** Any future AI feature must be
  "Ask the Library," never impersonate Hirsch, always cite. Not to be built until
  source/citation infrastructure exists.

## Unresolved human decisions

- **R-D01 (S1, RESOLVED) — Creative direction.** Direction B selected by the
  project owner on 2026-07-14 (DECISIONS D-006). M1 prototype built.
- **R-D02 (S2, OPEN) — M1 approval pending.** Proceeding to full launch pages (M2)
  awaits human sign-off on the prototype's direction execution.
