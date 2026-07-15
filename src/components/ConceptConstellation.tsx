"use client";

import type { Concept } from "@/lib/schemas";
import styles from "./ConceptConstellation.module.css";

/** Deterministic layout (no randomness): a hub with satellites. */
const POS: Record<string, { x: number; y: number }> = {
  "torah-im-derech-eretz": { x: 50, y: 31 },
  education: { x: 21, y: 15 },
  community: { x: 23, y: 48 },
  symbolism: { x: 79, y: 18 },
  language: { x: 81, y: 46 },
};

/** Short labels for the graph; full titles live in the explorer list. */
const SHORT: Record<string, string> = {
  "torah-im-derech-eretz": "Torah im Derech Eretz",
  education: "Education",
  community: "Community",
  symbolism: "Symbolism",
  language: "Language",
};

/**
 * Decorative-but-interactive concept network. It mirrors the accessible list
 * (which remains the primary control). Nodes are real buttons so the SVG is
 * keyboard operable; the list below covers anything the graph can't.
 */
export function ConceptConstellation({
  concepts,
  activeId,
  onSelect,
}: {
  concepts: Concept[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const pos = (id: string) => POS[id] ?? { x: 50, y: 30 };

  // Unique edges from the related arrays.
  const edges: Array<[string, string]> = [];
  const seen = new Set<string>();
  for (const c of concepts) {
    for (const r of c.related) {
      const key = [c.id, r].sort().join("|");
      if (!seen.has(key) && POS[c.id] && POS[r]) {
        seen.add(key);
        edges.push([c.id, r]);
      }
    }
  }

  const activeRelated = new Set(
    concepts.find((c) => c.id === activeId)?.related ?? [],
  );

  return (
    <svg
      className={styles.svg}
      viewBox="0 0 100 62"
      role="group"
      aria-label="Concept network. Also available as the list below."
    >
      <g className={styles.edges} aria-hidden="true">
        {edges.map(([a, b]) => {
          const pa = pos(a);
          const pb = pos(b);
          const lit = a === activeId || b === activeId;
          return (
            <line
              key={`${a}-${b}`}
              x1={pa.x}
              y1={pa.y}
              x2={pb.x}
              y2={pb.y}
              className={lit ? styles.edgeLit : styles.edge}
            />
          );
        })}
      </g>

      {concepts.map((c) => {
        const p = pos(c.id);
        const isActive = c.id === activeId;
        const isRelated = activeRelated.has(c.id);
        const isHub = c.id === "torah-im-derech-eretz";
        return (
          <g
            key={c.id}
            transform={`translate(${p.x} ${p.y})`}
            className={styles.node}
            data-active={isActive}
            data-related={isRelated}
          >
            <circle
              className={styles.halo}
              r={isActive ? 6.5 : isRelated ? 5 : 0}
            />
            {/* focusable, clickable hit area */}
            <circle
              className={styles.hit}
              r={5.5}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`${c.title}${c.hebrew ? ", " + c.hebrew : ""}`}
              onClick={() => onSelect(c.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(c.id);
                }
              }}
            />
            <circle className={styles.dot} r={isHub ? 2.6 : 1.9} />
            <text className={styles.label} y={-4} textAnchor="middle">
              {SHORT[c.id] ?? c.title}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
