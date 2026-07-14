# PERFORMANCE_BUDGET.md

_Targets set before production. **No measured results exist yet** — this iteration
produced no application code. Every future performance claim must cite a real
measurement (device, network, tool, date)._

## Targets (to validate at M1/M2)
| Metric | Target (reading pages) | Target (experience/home) |
|---|---|---|
| LCP (mobile, 4G, mid-tier) | ≤ 2.0 s | ≤ 2.5 s |
| CLS | ≤ 0.02 | ≤ 0.05 |
| INP | ≤ 200 ms | ≤ 200 ms |
| Total JS (initial route) | ≤ 130 KB gz | ≤ 200 KB gz (heavy exp. lazy-loaded) |
| Fonts (initial) | ≤ 100 KB (subset) | ≤ 100 KB |
| WebGL init | not on reading pages | lazy, after interaction/scroll, capability-gated |

## Rules
- Route-level code splitting; heavy experiences (WebGL/timeline) lazy-loaded and
  never initialized when not needed.
- No desktop effects on mobile; device-capability tiering decides effect level.
- Responsive images (AVIF/WebP), compressed textures, capped canvas resolution.
- Static generation where practical; minimal JS on reading pages.
- Verify under CPU (4–6×) and network (Slow 4G) throttling before claiming pass.
- Pause offscreen animation; avoid layout thrashing and unnecessary re-renders.

## Measurement protocol (record for every claim)
Tool (Lighthouse/WebPageTest/Playwright trace) · device/CPU throttle · network ·
URL · date · result. Store results here as a dated table when M1 begins.

## Status
🔴 No measurements taken. Harness (Lighthouse CI / Playwright tracing) to be set
up as part of the M1 prototype.
