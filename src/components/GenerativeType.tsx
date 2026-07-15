"use client";

import { useMemo } from "react";
import styles from "./GenerativeType.module.css";

/**
 * Ambient "world built from words" backdrop: a field of letterforms and verified
 * tokens drifting slowly behind the hero. Purely decorative (aria-hidden), never
 * reduces readability (low opacity, sits behind content), and holds still under
 * reduced motion. Layout is deterministic (index-seeded) for stable hydration —
 * no Math.random, no hydration mismatch.
 */

// Only letters and VERIFIED tokens (no invented quotations).
const GLYPHS = [
  "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס",
  "A", "R", "H", "S", "ß", "W", "T",
  "1808", "1836", "1851", "1888", "תורה", "Horeb", "Hamburg", "Frankfurt",
];

// Simple deterministic pseudo-random from an integer seed.
function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

type Frag = {
  text: string;
  left: number;
  top: number;
  size: number;
  opacity: number;
  rotate: number;
  delay: number;
  dur: number;
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
        left: rand(i + 1) * 100,
        top: rand(i + 7) * 100,
        size: 0.9 + rand(i + 13) * 3.4,
        opacity: 0.04 + rand(i + 19) * 0.09,
        rotate: (rand(i + 23) - 0.5) * 24,
        delay: -rand(i + 29) * 18,
        dur: 16 + rand(i + 31) * 16,
        hebrew,
      });
    }
    return out;
  }, [count]);

  return (
    <div className={styles.field} aria-hidden="true">
      {frags.map((f, i) => {
        const style: React.CSSProperties = {
          left: `${f.left}%`,
          top: `${f.top}%`,
          fontSize: `${f.size}rem`,
          opacity: f.opacity,
          animationDelay: `${f.delay}s`,
          animationDuration: `${f.dur}s`,
        };
        // custom property consumed by the keyframes
        (style as Record<string, string | number>)["--rot"] = `${f.rotate}deg`;
        return (
          <span
            key={i}
            className={`${styles.frag} ${f.hebrew ? styles.he : ""}`}
            style={style}
          >
            {f.text}
          </span>
        );
      })}
    </div>
  );
}
