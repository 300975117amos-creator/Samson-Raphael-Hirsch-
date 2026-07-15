"use client";

import { useState } from "react";
import type { Concept } from "@/lib/schemas";
import { ClaimBadge } from "./ClaimBadge";
import { CitationList } from "./CitationList";
import styles from "./ConceptExplorer.module.css";

/**
 * Concept exploration as a "glossary that thinks" (Direction B). It is a
 * keyboard-operable list: selecting a term reveals its gloss, sources, and
 * related terms. This IS the accessible alternative — no separate node-graph
 * fallback is needed because the primary form is already list/text based.
 */
export function ConceptExplorer({
  concepts,
  activeId: controlledId,
  onSelect,
}: {
  concepts: Concept[];
  activeId?: string;
  onSelect?: (id: string) => void;
}) {
  const [internalId, setInternalId] = useState(concepts[0]?.id ?? "");
  const activeId = controlledId ?? internalId;
  const setActiveId = onSelect ?? setInternalId;
  const active = concepts.find((c) => c.id === activeId) ?? concepts[0];
  const byId = (id: string) => concepts.find((c) => c.id === id);

  return (
    <div className={styles.wrap}>
      <ul className={styles.terms} role="list">
        {concepts.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={styles.term}
              data-active={c.id === activeId}
              aria-pressed={c.id === activeId}
              onClick={() => setActiveId(c.id)}
            >
              {c.title}
              {c.hebrew ? (
                <span className={styles.he} lang="he" dir="rtl">
                  {c.hebrew}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div className={styles.detail} aria-live="polite">
          <h2 className={styles.detailTitle}>
            {active.title}
            {active.hebrew ? (
              <span className={styles.detailHe} lang="he" dir="rtl">
                {active.hebrew}
              </span>
            ) : null}
          </h2>
          <p className={styles.gloss}>{active.gloss}</p>
          <ClaimBadge claimType={active.claimType} status={active.status} />

          {active.related.length > 0 ? (
            <div className={styles.related}>
              <span className={styles.relatedLabel}>Connected ideas</span>
              <ul className={styles.relatedList}>
                {active.related.map((rid) => {
                  const r = byId(rid);
                  if (!r) return null;
                  return (
                    <li key={rid}>
                      <button
                        type="button"
                        className={styles.relatedLink}
                        onClick={() => setActiveId(rid)}
                      >
                        {r.title} →
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          <CitationList sources={active.sources} />
        </div>
      ) : null}
    </div>
  );
}
