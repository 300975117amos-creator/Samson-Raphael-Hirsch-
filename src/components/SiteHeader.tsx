"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { useMotion } from "./MotionProvider";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const { reduced, cycle } = useMotion();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark}>
        <span className={styles.mark} lang="he" dir="rtl" aria-hidden="true">
          שרה
        </span>
        <span className={styles.name}>{site.title}</span>
      </Link>

      <nav className={styles.nav} aria-label="Sections">
        <ul className={styles.list}>
          {site.nav
            .filter((n) => n.href !== "/")
            .map((n) => {
              const active = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={styles.link}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className={styles.chapter} aria-hidden="true">
                      {n.chapter}
                    </span>
                    {n.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>

      <button
        type="button"
        className={styles.motion}
        onClick={cycle}
        aria-pressed={reduced}
      >
        <span aria-hidden="true">{reduced ? "▮" : "▷"}</span>
        {reduced ? "Motion off" : "Motion on"}
      </button>
    </header>
  );
}
