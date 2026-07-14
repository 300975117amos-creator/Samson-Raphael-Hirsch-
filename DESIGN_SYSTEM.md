# DESIGN_SYSTEM.md

_Foundational tokens & principles. Concrete palette/type scale finalize with the
selected creative direction (see `CREATIVE_DIRECTIONS.md`). Nothing here is
implemented yet._

## Principles
1. **Typography is a primary visual system**, not decoration. Multilingual from
   the start: Latin (English), German (full diacritics), Hebrew (RTL, nikud-ready).
2. **No clichés.** No parchment/beige/brown/gold/burgundy/dark-green-by-default.
   No card grid as the primary system. No hero + feature boxes.
3. **Content is separate from presentation.** MDX + validated front matter;
   components never hard-code historical text.
4. **Every component has states for:** default, hover, focus-visible, active,
   reduced-motion, RTL, and loading.
5. **Fallbacks are first-class:** non-WebGL, no-JS-partial, reduced-motion, and
   weak-device variants are designed, not stripped.

## Token architecture (to instantiate per direction)
- **Color:** semantic tokens (`--surface`, `--ink`, `--accent`, `--muted`,
  `--focus-ring`) mapped from a per-direction palette. Contrast target: WCAG 2.2
  AA (≥4.5:1 body, ≥3:1 large text/UI). Support light + dark where the direction
  allows.
- **Type scale:** modular scale with a fluid `clamp()` range; responsive line
  length 60–75ch for reading columns. Variable fonts where licensed.
- **Space:** 4px base grid; logical properties (`margin-inline`, `padding-block`)
  for RTL safety.
- **Motion tokens:** durations & easings defined in `MOTION_SYSTEM.md`.
- **Elevation/among-depth:** direction-dependent (spatial depth vs flat typographic
  layering).

## Fonts (license-gated — none selected yet)
- Requirement: verified license + required glyph coverage (incl. Hebrew nikud and
  German ß/umlauts). **No font ships without a recorded license** (mirror to
  `COPYRIGHT_LEDGER.md`). Avoid novelty Hebrew faces and fake calligraphy.

## Components (initial inventory)
Reading column · citation block (quotation + full source metadata + claim-type
label) · source card · timeline node · concept node · works item · language
switcher (accessible, announces change) · sound toggle · skip-intro control ·
reduced-motion-aware media. Each ships with the state matrix above.

## Open decisions
Final palette, type pairing, and grid depend on direction selection (R-D01).
