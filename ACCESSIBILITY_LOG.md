# ACCESSIBILITY_LOG.md

_Target: **WCAG 2.2 AA.** This log records real audits with dates and tools. **No
audits have run yet** — no application code exists. Nothing below is a claim of
conformance; it is the standard we will test against._

## Requirements checklist (to verify per component/page at M1+)
- [ ] Keyboard: all interaction operable; logical order; no traps.
- [ ] Visible focus (`:focus-visible`) meeting contrast/size.
- [ ] Semantic HTML: landmarks, one h1, ordered headings.
- [ ] Text alternatives for images/canvas/WebGL (meaningful, not "image").
- [ ] Contrast ≥ 4.5:1 (body), ≥ 3:1 (large text / UI / focus ring).
- [ ] Reflow & zoom to 200%+ without loss of content/function.
- [ ] `prefers-reduced-motion` honored as a designed mode.
- [ ] Reduced transparency respected where practical.
- [ ] No essential drag-only interaction; no flashing (>3/s).
- [ ] Captions/transcripts for any meaningful audio.
- [ ] Accessible names/labels on all controls; accessible error messaging.
- [ ] Accessible language switcher; announces language change; `lang`/`dir` correct.
- [ ] Correct RTL for Hebrew (logical properties, mirrored layout).
- [ ] Non-visual access to interactive data (timeline/concept map): list/table
      alternative reachable and complete.
- [ ] Skip-intro, pause-sequence, and "reach all content without motion" verified.

## Tooling (to wire up at M1)
axe-core (automated, in Playwright + Vitest), manual keyboard passes, screen
reader review (NVDA/VoiceOver), contrast tooling. Automated tools catch ~a third
of issues — manual + AT review are required, not optional.

## Audit records

### 2026-07-14 — M1 prototype (partial, honest scope)
- **Automated (jsdom smoke):** `axe-core` run in the component test on
  `CitationList` → **0 serious/critical violations**. NOTE: jsdom cannot run the
  color-contrast rule (no canvas), so this is a *smoke test only*, not a contrast
  audit.
- **Built-in by design (verified via code + screenshots, not yet AT-tested):**
  skip link to `#main`; visible `:focus-visible` rings (confirmed on Enter button
  and links in screenshots); semantic single `h1` per page + ordered headings;
  status conveyed by text + shape, never color alone (`ClaimBadge`); keyboard-
  operable radio filter (timeline) and button-list explorer (concepts);
  reduced-motion as a designed mode (verified: content fully present, Enter
  focused) + manual toggle persisted; correct `lang`/`dir` on Hebrew/German text;
  RTL via logical properties; external links carry `rel="noopener"`.
- **Responsive:** verified at 1280px and 390px; no horizontal overflow observed.

### Not yet done (top accessibility tasks)
- In-browser `axe` run (real color-contrast + full ruleset) via Playwright.
- Manual keyboard walkthrough of every interactive element and focus order.
- Screen-reader pass (NVDA/VoiceOver), incl. language-switch announcements.
- Zoom-to-200% reflow check. Contrast ratios measured against tokens.
No WCAG conformance is claimed until these run.
