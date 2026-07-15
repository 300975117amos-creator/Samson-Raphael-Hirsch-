import Link from "next/link";
import { OpeningSequence } from "@/components/OpeningSequence";
import { LivingText } from "@/components/LivingText";
import { site } from "@/content/site";
import { morphById } from "@/content/living-text";
import styles from "./home.module.css";

export default function HomePage() {
  const name = morphById("name");
  return (
    <>
      <OpeningSequence />

      <section className={styles.hero} aria-labelledby="hero-title">
        <p className="eyebrow">1808–1888 · A World Built From Words</p>
        <h1 id="hero-title" className="visually-hidden">
          {site.title}
        </h1>
        {name ? <LivingText phrase={name} as="div" /> : null}
        <p className={styles.statement}>{site.centralStatement}</p>
        <p className={styles.note}>{site.centralStatementNote}</p>
        <nav className={styles.enter} aria-label="Begin">
          <Link className={styles.cta} href="/who">
            Who was Rabbi Hirsch? →
          </Link>
          <Link className={styles.ctaGhost} href="/timeline">
            Life &amp; Timeline
          </Link>
        </nav>
      </section>

      <section className={`reading ${styles.chapters}`} aria-label="Sections">
        <ul className={styles.chapterList}>
          {site.nav
            .filter((n) => n.href !== "/")
            .map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={styles.chapterLink}>
                  <span className={styles.chapterNum}>{n.chapter}</span>
                  <span className={styles.chapterLabel}>{n.label}</span>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
