import type { Metadata } from "next";
import Link from "next/link";
import { worldTimeline } from "@/content/world";
import { HistoricalWorld } from "@/components/HistoricalWorld";
import { ClaimBadge } from "@/components/ClaimBadge";

export const metadata: Metadata = {
  title: "His Historical World",
  description:
    "The nineteenth-century German-Jewish world in which Rabbi Samson Raphael Hirsch lived and worked — Reform, emancipation, and the Law of Secession — set beside his own life, source by source.",
};

export default function WorldPage() {
  return (
    <div className="reading page">
      <p className="eyebrow">Chapter 03</p>
      <h1>His Historical World</h1>

      <p style={{ fontSize: "1.15rem", lineHeight: 1.55, maxInlineSize: "60ch" }}>
        Rabbi Hirsch&rsquo;s life (1808–1888) ran alongside three great currents in
        German-Jewish life: the rise of Reform, the long struggle for civic
        emancipation, and the legal question of whether Orthodox Jews could form
        communities of their own.
      </p>

      <p
        style={{
          maxInlineSize: "60ch",
          color: "var(--muted)",
          fontSize: "0.95rem",
        }}
      >
        The graphic sets the surrounding world above the line and Hirsch below it,
        aligned by year. Each event is a sourced historical fact; select one to read
        it with its citations. The reading of <em>how</em> these currents shaped his
        work is offered separately, and labeled as editorial interpretation.
      </p>

      <div style={{ marginBlock: "2.5rem" }}>
        <HistoricalWorld events={worldTimeline} />
      </div>

      <section
        aria-labelledby="framing"
        style={{
          borderInlineStart: "2px solid var(--hair)",
          paddingInlineStart: "1rem",
          maxInlineSize: "62ch",
        }}
      >
        <p style={{ marginBlockStart: 0 }}>
          <ClaimBadge claimType="editorial-interpretation" status="single-source" />
        </p>
        <h2 id="framing" style={{ fontSize: "1.1rem" }}>
          How this world met his work
        </h2>
        <p>
          Read together, these events frame Hirsch&rsquo;s project: <em>The Nineteen
          Letters</em> (1836) and <em>Horeb</em> answered the questions Reform had
          raised, while his advocacy for the Law of Secession (1876) gave the
          independent Frankfurt community a legal footing. This paragraph is the
          project&rsquo;s own reading — an editorial interpretation, not a settled
          scholarly conclusion — and it rests on the sourced events above and on the{" "}
          <Link href="/works">works themselves</Link>.
        </p>
      </section>
    </div>
  );
}
