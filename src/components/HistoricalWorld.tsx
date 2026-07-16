"use client";

import { useState } from "react";
import type { TimelineEvent } from "@/lib/schemas";
import { ClaimBadge } from "./ClaimBadge";
import { CitationList } from "./CitationList";
import styles from "./HistoricalWorld.module.css";

const MIN = 1806;
const MAX = 1892;
const ticks = [1810, 1830, 1850, 1870, 1890];

function x(year: number) {
  return ((year - MIN) / (MAX - MIN)) * 100;
}

/**
 * "Two worlds, one binding" as a sourced dual-lane infographic: the surrounding
 * world above the spine, Rabbi Hirsch below, aligned by year. Markers are real
 * buttons (keyboard-operable); a live region and the always-present lists below
 * make it fully non-visual too.
 */
export function HistoricalWorld({ events }: { events: TimelineEvent[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = events.find((e) => e.id === activeId);
  const world = events.filter((e) => e.world === "world");
  const hirsch = events.filter((e) => e.world === "torah");

  const lane = (items: TimelineEvent[], side: "top" | "bottom") =>
    items.map((e) => (
      <button
        key={e.id}
        type="button"
        className={styles.marker}
        data-side={side}
        data-active={e.id === activeId}
        style={{ insetInlineStart: `${x(e.sortYear)}%` }}
        aria-label={`${e.title}, ${e.year}`}
        aria-pressed={e.id === activeId}
        onMouseEnter={() => setActiveId(e.id)}
        onFocus={() => setActiveId(e.id)}
        onClick={() => setActiveId(e.id)}
      >
        <span className={styles.dot} />
        <span className={styles.mYear}>{e.sortYear}</span>
      </button>
    ));

  return (
    <div className={styles.wrap}>
      <div className={styles.laneLabels}>
        <span>The surrounding world</span>
        <span>Rabbi Hirsch</span>
      </div>

      <div className={styles.band}>
        <div className={styles.laneTop}>{lane(world, "top")}</div>
        <div className={styles.spine} aria-hidden="true">
          {ticks.map((t) => (
            <span key={t} className={styles.tick} style={{ insetInlineStart: `${x(t)}%` }}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.laneBottom}>{lane(hirsch, "bottom")}</div>
      </div>

      <div className={styles.readout} aria-live="polite">
        {active ? (
          <div className={styles.detail}>
            <h3 className={styles.detailTitle}>
              <span className={styles.detailYear}>{active.year}</span>
              {active.title}
            </h3>
            <p className={styles.detailDesc}>{active.description}</p>
            <ClaimBadge claimType={active.claimType} status={active.status} />
            <CitationList sources={active.sources} />
          </div>
        ) : (
          <p className={styles.hint}>
            Select an event above to read it, with its sources.
          </p>
        )}
      </div>
    </div>
  );
}
