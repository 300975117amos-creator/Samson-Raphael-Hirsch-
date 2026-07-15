"use client";

import { useEffect, useRef, useState } from "react";
import type { MorphPhrase } from "@/lib/schemas";
import { useMotion } from "./MotionProvider";
import { ClaimBadge } from "./ClaimBadge";
import styles from "./LivingText.module.css";

/**
 * Direction B signature interaction: a phrase that "sets" itself in one script
 * and interpolates into the next. Accessibility contract:
 *  - The full, labeled list of renderings is ALWAYS in the DOM (screen readers,
 *    no-JS, and reduced-motion all read the same truth).
 *  - When motion is enabled, an aria-hidden animated presentation is shown and the
 *    list is visually hidden. When reduced, the labeled list is shown as-is.
 *  - Every rendering is labeled (original / transliteration / translation); no
 *    translation is presented as authoritative.
 */
export function LivingText({
  phrase,
  auto = true,
  intervalMs = 3200,
  as = "div",
}: {
  phrase: MorphPhrase;
  auto?: boolean;
  intervalMs?: number;
  as?: "div" | "h1";
}) {
  const { reduced } = useMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const n = phrase.renderings.length;
  const current = phrase.renderings[index];

  useEffect(() => {
    if (reduced || !auto || paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % n), intervalMs);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reduced, auto, paused, intervalMs, n]);

  const Display = as === "h1" ? "h1" : "div";

  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Accessible / reduced-motion / no-JS truth: always rendered. */}
      <dl
        className={styles.list}
        data-visual-hidden={!reduced ? "true" : "false"}
      >
        {phrase.renderings.map((r) => (
          <div className={styles.row} key={r.lang + r.text} lang={r.lang} dir={r.dir}>
            <dt className={styles.rowLabel}>{r.label}</dt>
            <dd className={styles.rowText}>{r.text}</dd>
          </div>
        ))}
      </dl>

      {/* Animated presentation: only when motion is on. Hidden from AT. */}
      {!reduced && (
        <div className={styles.stage} aria-hidden="true">
          <Display
            key={current.lang + index}
            className={styles.morph}
            lang={current.lang}
            dir={current.dir}
          >
            {current.text}
          </Display>
          <div className={styles.controls}>
            <span className={styles.langTag}>{current.label}</span>
            <span className={styles.dots}>
              {phrase.renderings.map((r, i) => (
                <button
                  key={r.lang + i}
                  type="button"
                  className={styles.dot}
                  data-active={i === index}
                  aria-hidden="true"
                  tabIndex={-1}
                  onClick={() => setIndex(i)}
                />
              ))}
            </span>
          </div>
        </div>
      )}

      <div className={styles.meta}>
        <ClaimBadge claimType={phrase.claimType} status={phrase.status} />
        {phrase.note ? <p className={styles.note}>{phrase.note}</p> : null}
      </div>
    </div>
  );
}
