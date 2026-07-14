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

- **R-A01 (S1, OPEN) — Motion-heavy concept vs WCAG 2.2.** The mandate for
  cinematic/WebGL experiences risks reduced-motion, keyboard, and non-WebGL
  failures. *Mitigation:* every experience ships with a designed reduced-motion
  path, keyboard model, and non-WebGL fallback as acceptance criteria, not extras.
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

- **R-S01 (S2, OPEN) — No app scaffold yet.** Repo currently holds governance +
  research docs only; no build/test harness. Not debt yet, but M1 must establish
  tests before feature work.
- **R-T01 (S3, OPEN) — Dependency creep** across animation libraries. *Mitigation:*
  smallest reliable stack; every dep justified in `DECISIONS.md`.

## Editorial / theological / product

- **R-E01 (S2, OPEN) — "What would Hirsch say about modern X."** High
  misuse/misrepresentation risk. *Mitigation:* editorial-interpretation labeling +
  primary-source grounding required; Jewish-studies reviewer sign-off.
- **R-E02 (S1, OPEN) — Impersonation.** Any future AI feature must be
  "Ask the Library," never impersonate Hirsch, always cite. Not to be built until
  source/citation infrastructure exists.

## Unresolved human decisions

- **R-D01 (S1, OPEN) — Creative direction not selected.** Full production is
  blocked until a human selects one of the three directions in
  `CREATIVE_DIRECTIONS.md`.
