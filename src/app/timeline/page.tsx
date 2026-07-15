import type { Metadata } from "next";
import { timeline } from "@/content/timeline";
import { TimelineView } from "@/components/TimelineView";
import { JourneyMap } from "@/components/JourneyMap";

export const metadata: Metadata = {
  title: "Life & Timeline",
  description:
    "A verified chronology of Rabbi Samson Raphael Hirsch (1808–1888). Disputed dates are shown with their uncertainty and sources.",
};

export default function TimelinePage() {
  return (
    <div className="reading page">
      <p className="eyebrow">Chapter 02</p>
      <h1>Life &amp; Timeline</h1>
      <p style={{ maxInlineSize: "60ch", color: "var(--muted)" }}>
        A chronology built source-first. Where reliable sources disagree — the day
        of his death, the year of <em>Horeb</em>, the run of <em>Jeschurun</em> —
        the entry says so rather than choosing for you.
      </p>
      <section
        aria-labelledby="journey-h"
        style={{ marginBlockStart: "2.5rem" }}
      >
        <h2 id="journey-h" style={{ fontSize: "1.1rem" }}>
          A life across the German lands
        </h2>
        <JourneyMap />
      </section>

      <div style={{ marginBlockStart: "3rem" }}>
        <TimelineView events={timeline} />
      </div>
    </div>
  );
}
