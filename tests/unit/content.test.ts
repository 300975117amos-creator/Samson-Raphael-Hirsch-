import { describe, it, expect } from "vitest";
import { timeline } from "@/content/timeline";
import { works } from "@/content/works";
import { concepts } from "@/content/concepts";
import { morphPhrases } from "@/content/living-text";
import { journey } from "@/content/geo";
import { sources, sourceById } from "@/content/sources";

/**
 * These tests enforce the source-first invariant at build time: no content may
 * ship without registered sources, disputed items must stay honest, and no
 * locator may point at an unregistered source.
 */

describe("content loads and validates", () => {
  it("timeline is non-empty and chronologically sorted", () => {
    expect(timeline.length).toBeGreaterThan(0);
    for (let i = 1; i < timeline.length; i++) {
      expect(timeline[i].sortYear).toBeGreaterThanOrEqual(timeline[i - 1].sortYear);
    }
  });

  it("works and concepts load", () => {
    expect(works.length).toBeGreaterThan(0);
    expect(concepts.length).toBeGreaterThan(0);
  });
});

describe("referential integrity: every claim cites a registered source", () => {
  const claimBearing = [
    ...timeline.map((e) => ({ kind: "timeline", id: e.id, sources: e.sources })),
    ...works.map((w) => ({ kind: "work", id: w.id, sources: w.sources })),
    ...concepts.map((c) => ({ kind: "concept", id: c.id, sources: c.sources })),
    ...morphPhrases.map((m) => ({ kind: "morph", id: m.id, sources: m.sources })),
  ];

  it("has at least one source per item", () => {
    for (const item of claimBearing) {
      expect(item.sources.length, `${item.kind}:${item.id}`).toBeGreaterThan(0);
    }
  });

  it("references only registered source ids", () => {
    for (const item of claimBearing) {
      for (const ref of item.sources) {
        expect(
          sourceById(ref.id),
          `${item.kind}:${item.id} → unknown source ${ref.id}`,
        ).toBeDefined();
      }
    }
  });

  it("map (journey) places cite only registered sources", () => {
    for (const place of journey) {
      expect(place.sources.length, `place ${place.id}`).toBeGreaterThan(0);
      for (const id of place.sources) {
        expect(sourceById(id), `place ${place.id} → unknown ${id}`).toBeDefined();
      }
    }
  });
});

describe("editorial honesty invariants", () => {
  it("disputed timeline entries signal their uncertainty in the text", () => {
    const disputed = timeline.filter((e) => e.status === "disputed");
    // We intentionally have known disputes (death day, Horeb year, Jeschurun).
    expect(disputed.length).toBeGreaterThanOrEqual(2);
    for (const e of disputed) {
      const text = `${e.year} ${e.description}`.toLowerCase();
      expect(
        /vary|disputed|unresolved|or |unconfirmed/.test(text),
        `disputed entry ${e.id} should acknowledge uncertainty in its text`,
      ).toBe(true);
    }
  });

  it("living-text morph renderings are each labeled", () => {
    for (const phrase of morphPhrases) {
      for (const r of phrase.renderings) {
        expect(r.label.length, `${phrase.id} rendering ${r.lang}`).toBeGreaterThan(0);
      }
    }
  });

  it("no source claims higher trust than 'low' for Wikipedia (lead only)", () => {
    expect(sources["SRC-001"].reliability).toBe("low");
  });
});
