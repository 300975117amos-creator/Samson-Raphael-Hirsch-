import type { SourceRef } from "@/lib/schemas";
import { sourceById } from "@/content/sources";
import styles from "./CitationList.module.css";

/**
 * Renders the source(s) behind a claim. Every content block that makes a claim
 * pairs with one of these (EDITORIAL_POLICY.md §4). Locators are shown only when
 * present (none are invented — RISKS R-H06).
 */
export function CitationList({
  sources,
  label = "Sources",
}: {
  sources: SourceRef[];
  label?: string;
}) {
  return (
    <aside className={styles.wrap} aria-label={label}>
      <span className={styles.label}>{label}</span>
      <ul className={styles.list}>
        {sources.map((ref) => {
          const s = sourceById(ref.id);
          if (!s) {
            return (
              <li key={ref.id} className={styles.item}>
                {ref.id} <span className={styles.missing}>(unregistered)</span>
              </li>
            );
          }
          return (
            <li key={ref.id} className={styles.item}>
              <a href={s.url} target="_blank" rel="noopener noreferrer nofollow">
                {s.title}
              </a>{" "}
              <span className={styles.meta} data-reliability={s.reliability}>
                {s.institution} · {s.type} · reliability: {s.reliability}
              </span>
              {ref.locator ? (
                <span className={styles.locator}> — {ref.locator}</span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
