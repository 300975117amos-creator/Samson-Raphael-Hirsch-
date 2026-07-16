/**
 * Real in-browser accessibility audit (axe-core in Chromium), covering the full
 * ruleset including color-contrast — which the jsdom unit smoke test cannot run.
 *
 * Usage: start the app (npm run build && npm run start), then:
 *   BASE=http://localhost:3000 node scripts/a11y-audit.mjs
 * In CI, run `npx playwright install chromium` first; locally you can point at an
 * existing build via CHROMIUM_PATH.
 */
import { chromium } from "playwright";
import axe from "axe-core";

const BASE = process.env.BASE || "http://localhost:3000";
const execPath = process.env.CHROMIUM_PATH || undefined;

const routes = [
  "/",
  "/who",
  "/timeline",
  "/world",
  "/works",
  "/works/nineteen-letters",
  "/concepts",
  "/method",
];

const browser = await chromium.launch(
  execPath ? { executablePath: execPath } : {},
);
const ctx = await browser.newContext({
  // Skip the intro overlay so the underlying page is audited.
  storageState: {
    cookies: [],
    origins: [{ origin: BASE, localStorage: [{ name: "srh-seen-intro", value: "1" }] }],
  },
});

let totalSerious = 0;
const summary = [];

for (const route of routes) {
  const page = await ctx.newPage();
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.addScriptTag({ content: axe.source });
  const results = await page.evaluate(async () => {
    // WCAG 2.x A/AA rule tags.
    return await window.axe.run(document, {
      resultTypes: ["violations"],
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
    });
  });
  const serious = results.violations.filter(
    (v) => v.impact === "serious" || v.impact === "critical",
  );
  totalSerious += serious.length;
  summary.push({
    route,
    violations: results.violations.length,
    serious: serious.length,
    ids: results.violations.map((v) => `${v.id}(${v.impact}×${v.nodes.length})`),
  });
  await page.close();
}

await browser.close();

console.log("\n=== axe-core audit (wcag2a/2aa/21a/21aa) ===");
for (const s of summary) {
  console.log(
    `${s.route.padEnd(28)} violations=${s.violations} serious/critical=${s.serious}` +
      (s.ids.length ? `  [${s.ids.join(", ")}]` : ""),
  );
}
console.log(`\nTOTAL serious/critical across routes: ${totalSerious}`);
process.exit(totalSerious > 0 ? 1 : 0);
