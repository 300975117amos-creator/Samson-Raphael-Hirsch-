"use client";

import { useMemo } from "react";
import styles from "./GenerativeType.module.css";

/**
 * Ambient "world built from words" backdrop: a field of letterforms and verified
 * tokens behind the hero. Rendered as a single decorative SVG (aria-hidden,
 * role="presentation") — appropriate for background graphics and, being SVG, not
 * subject to the HTML text-contrast rule (it is intentionally faint and carries
 * no information; the real content sits above it at full contrast). Holds still
 * under reduced motion. Layout is deterministic (index-seeded) for stable
 * hydration — no Math.random, no hydration mismatch.
 */

// Only letters and VERIFIED tokens (no invented quotations).
const GLYPHS = [
  "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס",
  "A", "R", "H", "S", "ß", "W", "T",
  "1808", "1836", "1851", "1888", "תורה", "Horeb", "Hamburg", "Frankfurt",
];

const VB_W = 120;
const VB_H = 70;

function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

type Frag = {
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotate: number;
  hebrew: boolean;
};

export function GenerativeType({ count = 34 }: { count?: number }) {
  const frags = useMemo<Frag[]>(() => {
    const out: Frag[] = [];
    for (let i = 0; i < count; i++) {
      const text = GLYPHS[i % GLYPHS.length];
      const hebrew = /[֐-׿]/.test(text);
      out.push({
        text,
        x: rand(i + 1) * VB_W,
        y: rand(i + 7) * VB_H,
        size: 1.6 + rand(i + 13) * 4.2,
        opacity: 0.05 + rand(i + 19) * 0.06,
        rotate: (rand(i + 23) - 0.5) * 22,
        hebrew,
      });
    }
    return out;
  }, [count]);

  return (
    <svg
      className={styles.field}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <g className={styles.drift}>
        {frags.map((f, i) => (
          <text
            key={i}
            className={`${styles.frag} ${f.hebrew ? styles.he : ""}`}
            x={f.x}
            y={f.y}
            fontSize={f.size}
            opacity={f.opacity}
            transform={`rotate(${f.rotate} ${f.x} ${f.y})`}
            textAnchor="middle"
          >
            {f.text}
          </text>
        ))}
      </g>
    </svg>
  );
}
