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
_None yet._ Each future entry: date · page/component · tool · findings · fixes ·
retest result.
