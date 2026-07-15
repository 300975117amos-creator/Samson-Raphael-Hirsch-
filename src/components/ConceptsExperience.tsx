"use client";

import { useState } from "react";
import type { Concept } from "@/lib/schemas";
import { ConceptConstellation } from "./ConceptConstellation";
import { ConceptExplorer } from "./ConceptExplorer";
import styles from "./ConceptsExperience.module.css";

/**
 * Ties the visual constellation and the accessible explorer to one selection,
 * so clicking a node updates the reading panel and vice-versa.
 */
export function ConceptsExperience({ concepts }: { concepts: Concept[] }) {
  const [activeId, setActiveId] = useState(concepts[0]?.id ?? "");
  return (
    <div className={styles.wrap}>
      <div className={styles.map}>
        <ConceptConstellation
          concepts={concepts}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>
      <ConceptExplorer
        concepts={concepts}
        activeId={activeId}
        onSelect={setActiveId}
      />
    </div>
  );
}
