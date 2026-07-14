# MOTION_SYSTEM.md

_Motion is part of storytelling from the start. This defines the system; specific
choreography finalizes with the selected direction. Nothing implemented yet._

## Governing rules
- **Reduced motion is a designed mode**, not "transitions removed." When
  `prefers-reduced-motion: reduce`, replace movement with instant/cross-fade
  states that preserve meaning and never leave a broken layout.
- **No motion blocks navigation.** The opening is skippable; content is reachable
  without animation.
- **No pointer-following motion** unless behind both reduced-motion off *and* an
  explicit user toggle (R-A03).
- **No flashing** (>3/sec) ever. Offscreen animation pauses; listeners are cleaned
  up; no layout thrashing.

## Motion tokens (defaults; per-direction may refine)
- Durations: `--dur-xfast 120ms`, `--dur-fast 200ms`, `--dur-base 320ms`,
  `--dur-slow 600ms`, `--dur-cinematic 1200–2400ms` (opening/chapter only).
- Easing: `--ease-standard cubic-bezier(.2,0,0,1)`, `--ease-emphasized
  cubic-bezier(.2,0,0,1)` with longer duration, `--ease-exit cubic-bezier(.4,0,1,1)`.
- Stagger: 40–80ms for lists; larger for cinematic reveals.

## Categories (from the brief)
1. **Cinematic** — homepage intro, chapter openings, major quotations, historical
   transitions. Slow, deliberate, choreographed. Never on reading pages.
2. **Responsive** — hover/focus/scroll-direction/scroll-velocity/selection. Feels
   intelligent, not decorative. Keyboard focus gets the same affordances as hover.
3. **Ambient** — grain, shifting light, typographic fragments, line systems.
   Must never reduce readability; pauses offscreen; off under reduced motion.
4. **Narrative** — scroll reveals sequence/cause-effect/relationships/place/
   language change. Meaning-bearing, not just vertical movement.

## Reduced-motion mapping (contract per effect)
Every animated component documents: **full behavior**, **reduced behavior**,
**no-JS behavior**. Example — kinetic title reveal: full = per-letter mask + depth;
reduced = single cross-fade in place; no-JS = static heading. Ship all three.

## Per-section budget
Each section: one primary motion idea + limited supporting effects + a clear
narrative purpose + a fallback + a measured performance budget
(`PERFORMANCE_BUDGET.md`). Stillness is deliberate: not every section moves.

## Verification checklist (run before any motion ships)
- [ ] Works with `prefers-reduced-motion: reduce` (meaningful, not broken).
- [ ] Fully operable by keyboard; focus visible throughout.
- [ ] No layout shift introduced (CLS budget).
- [ ] Offscreen instances paused; listeners removed on unmount.
- [ ] Mobile + weak-device variant verified (not desktop effects shrunk).
- [ ] Real frame-timing measured (no performance claim without measurement).
