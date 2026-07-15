"use client";

import { useState } from "react";
import type { TimelineEvent } from "@/lib/schemas";
import { ClaimBadge } from "./ClaimBadge";
import { CitationList } from "./CitationList";
import styles from "./TimelineView.module.css";

type Filter = "all" | "torah" | "world";

/**
 * Typographic ledger timeline. It is list/definition-shaped by construction, so
 * the accessible version IS the primary version (no separate fallback needed).
 * The filter is a keyboard-operable radio group; motion is limited to a short
 * reflow transition that reduced-motion removes via global CSS.
 */
export function TimelineView({ events }: { events: TimelineEvent[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = events.filter((e) =>
    filter === "all" ? true : e.world === filter || e.world === "both",
  );

  return (
    <div className={styles.wrap}>
      <fieldset className={styles.filter}>
        <legend className={styles.legend}>Filter by world</legend>
        {(
          [
            ["all", "All"],
            ["torah", "Torah"],
            ["world", "Surrounding world"],
          ] as [Filter, string][]
        ).map(([value, label]) => (
          <label key={value} className={styles.option} data-active={filter === value}>
            <input
              type="radio"
              name="world-filter"
              value={value}
              checked={filter === value}
              onChange={() => setFilter(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <ol className={styles.ledger}>
        {shown.map((e) => (
          <li key={e.id} className={styles.entry} data-world={e.world}>
            <div className={styles.year}>
              <span className={styles.yearFig}>{e.year}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>
                {e.title}
                {e.place ? <span className={styles.place}> · {e.place}</span> : null}
              </h3>
              <p className={styles.desc}>{e.description}</p>
              <ClaimBadge claimType={e.claimType} status={e.status} />
              <CitationList sources={e.sources} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
