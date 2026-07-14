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

## Measured results

### 2026-07-14 — M1 prototype build (bundle sizes)
Tool: `next build` (Next.js 15.5.20), production build output. These are real
build-reported First Load JS figures, not lab Core Web Vitals.

| Route | Route size | First Load JS |
|---|---|---|
| `/` (home) | 18 kB | 124 kB |
| `/concepts` | 3.32 kB | 106 kB |
| `/timeline` | 2.27 kB | 105 kB |
| `/who`, `/works`, `/works/[id]`, `/method` | ≤0.4 kB | 105–106 kB |
| Shared by all | — | 102 kB |

All routes are statically prerendered (15/15 pages). Home is at the ceiling of the
reading-page budget (≤130 kB) mainly due to the client `LivingText` + intro; other
reading routes sit ~106 kB. No WebGL is loaded anywhere.

### Not yet measured (do not claim)
- Lighthouse / Core Web Vitals (LCP, CLS, INP) under CPU + network throttling.
- Real-device mobile timing.

## Status
🟡 Bundle budget measured and within target. Lab performance (Lighthouse CI /
Playwright tracing under throttling) is the next performance task — no CWV scores
are claimed until then.
