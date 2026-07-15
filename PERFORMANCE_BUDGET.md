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

### 2026-07-15 — Lighthouse (measured, mobile-throttled)
Tool: Lighthouse 12.2.1, default mobile emulation (Moto G-class, simulated Slow 4G,
4× CPU throttle), Chromium headless, against the production build (`next start`).

| Page | Perf | A11y | Best-Pr. | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` (home) | **98** | **100** | **96** | **100** | 2.1 s | 0 | 100 ms |
| `/timeline` | **100** | **100** | — | **100** | 1.9 s | 0 | 60 ms |

Home LCP 2.1 s is within the ≤2.5 s home budget; timeline LCP 1.9 s is within the
≤2.0 s reading-page budget; CLS 0 beats the budget on both. FCP 0.9 s, Speed Index
1.0 s (home). These are real runs, re-runnable via the commands in DECISIONS/CI.

### Still to measure
- INP (field/real-interaction metric; lab TBT is the proxy above).
- Real-device (non-emulated) timing; more routes.

## Status
🟢 Bundle budget and lab performance both measured and within targets (Lighthouse
Perf 98/100, LCP within budget, CLS 0). Next: INP and additional routes; wire
Lighthouse into CI for regression tracking.
