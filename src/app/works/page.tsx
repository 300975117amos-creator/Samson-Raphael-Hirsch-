import type { Metadata } from "next";
import Link from "next/link";
import { works } from "@/content/works";
import { ClaimBadge } from "@/components/ClaimBadge";
import styles from "./works.module.css";

export const metadata: Metadata = {
  title: "Major Works",
  description:
    "The major works of Rabbi Samson Raphael Hirsch, with original-language titles, dates, and copyright status of the original text.",
};

export default function WorksPage() {
  return (
    <div className="reading page">
      <p className="eyebrow">Chapter 03</p>
      <h1>Major Works</h1>
      <p style={{ maxInlineSize: "60ch", color: "var(--muted)" }}>
        A bibliography that keeps original and translation distinct. The copyright
        note describes the <em>original</em> text only; modern translations are
        separate objects and are not cleared for full text here.
      </p>

      <ul className={styles.list}>
        {works.map((w) => (
          <li key={w.id} className={styles.item}>
            <Link href={`/works/${w.id}`} className={styles.link}>
              <span className={styles.year}>{w.year}</span>
              <span className={styles.titles}>
                <span className={styles.title}>{w.title}</span>
                {w.originalTitle ? (
                  <span className={styles.original} lang="de">
                    {w.originalTitle}
                  </span>
                ) : null}
              </span>
              <span className={styles.kind}>{w.kind}</span>
            </Link>
            <div className={styles.badge}>
              <ClaimBadge status={w.status} />
              <span className={styles.copyright}>
                Original: {w.originalCopyright.replace("-", " ")}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
