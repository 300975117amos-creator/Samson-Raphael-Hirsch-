"use client";

import { useState } from "react";
import type { Work } from "@/lib/schemas";
import styles from "./WorksChart.module.css";

const MIN = 1830;
const MAX = 1905;
const ticks = [1830, 1845, 1860, 1875, 1890, 1905];

/** Marker shape encodes the kind (secondary encoding, not color-alone). */
const KIND_LABEL: Record<Work["kind"], string> = {
  book: "Book",
  commentary: "Commentary",
  periodical: "Periodical",
  collection: "Collection",
};

function x(year: number) {
  return ((year - MIN) / (MAX - MIN)) * 100;
}

/**
 * Publication timeline (infographic). A horizontal year axis with one marker per
 * work; hover/focus reveals detail. A data table is always present below for
 * non-visual access (dataviz: a table view exists).
 */
export function WorksChart({ works }: { works: Work[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = works.find((w) => w.id === activeId);

  return (
    <div className={styles.wrap}>
      <div className={styles.plot}>
        <svg
          className={styles.svg}
          viewBox="0 0 100 26"
          preserveAspectRatio="none"
          role="img"
          aria-label="Timeline of Rabbi Hirsch's major works by publication year, from The Nineteen Letters (1836) to the collected writings."
        >
          <line className={styles.axis} x1={0} y1={18} x2={100} y2={18} />
          {ticks.map((t) => (
            <g key={t}>
              <line className={styles.tick} x1={x(t)} y1={17} x2={x(t)} y2={19} />
            </g>
          ))}
          {works.map((w, i) => {
            const cx = x(w.sortYear);
            const isActive = w.id === activeId;
            const stemTop = 6 + (i % 2) * 3;
            return (
              <g
                key={w.id}
                className={styles.mark}
                data-active={isActive}
                onMouseEnter={() => setActiveId(w.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <line className={styles.stem} x1={cx} y1={18} x2={cx} y2={stemTop} />
                <circle className={styles.dot} cx={cx} cy={stemTop} r={isActive ? 1.9 : 1.3} />
              </g>
            );
          })}
        </svg>
        <div className={styles.axisLabels} aria-hidden="true">
          {ticks.map((t) => (
            <span key={t} style={{ insetInlineStart: `${x(t)}%` }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <p className={styles.readout} aria-live="polite">
        {active ? (
          <>
            <strong>{active.title}</strong> · {active.year} ·{" "}
            {KIND_LABEL[active.kind]} · original text:{" "}
            {active.originalCopyright.replace("-", " ")}
          </>
        ) : (
          <span className={styles.hint}>Hover a marker for details.</span>
        )}
      </p>

      {/* Always-present data table for non-visual access. */}
      <details className={styles.tableWrap}>
        <summary>Publication data (table)</summary>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Work</th>
              <th scope="col">Year</th>
              <th scope="col">Kind</th>
              <th scope="col">Original text</th>
            </tr>
          </thead>
          <tbody>
            {works.map((w) => (
              <tr key={w.id}>
                <th scope="row">{w.title}</th>
                <td>{w.year}</td>
                <td>{KIND_LABEL[w.kind]}</td>
                <td>{w.originalCopyright.replace("-", " ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}
