"use client";

import { useEffect, useRef, useState } from "react";
import { useMotion } from "./MotionProvider";
import { morphById } from "@/content/living-text";
import { site } from "@/content/site";
import styles from "./OpeningSequence.module.css";

const SEEN_KEY = "srh-seen-intro";

/**
 * Homepage opening (Direction B). Requirements met:
 *  - Skippable (Skip button + Escape), never blocks navigation.
 *  - Works without sound; no audio.
 *  - Respects reduced motion (static, immediate, focus on Enter).
 *  - Does not replay for returning visitors (localStorage flag).
 *  - No WebGL; pure type + CSS staging → strong weak-device behavior.
 */
export function OpeningSequence() {
  const { reduced } = useMotion();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(true);
  const enterRef = useRef<HTMLButtonElement>(null);
  const name = morphById("name");

  // Decide whether to show at all (returning visitors skip). Runs client-side.
  useEffect(() => {
    setMounted(true);
    const seen = window.localStorage.getItem(SEEN_KEY);
    if (seen) setOpen(false);
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(SEEN_KEY, "1");
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    // Move focus to the Enter control so keyboard users are oriented.
    const t = setTimeout(() => enterRef.current?.focus(), reduced ? 0 : 1600);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, reduced]);

  // Before mount (SSR/first paint) we render nothing here; the page content below
  // is always present, so the site is usable with no JS at all.
  if (!mounted || !open) return null;

  const he = name?.renderings.find((r) => r.lang === "he");
  const en = name?.renderings.find((r) => r.lang === "en");

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Introduction"
      data-reduced={reduced}
    >
      <button className={styles.skip} type="button" onClick={dismiss}>
        Skip intro
      </button>

      <div className={styles.stage}>
        <span className={styles.caret} aria-hidden="true" />
        {he ? (
          <p className={`${styles.line} ${styles.he}`} lang="he" dir="rtl">
            {he.text}
          </p>
        ) : null}
        <p className={styles.line} lang="en">
          {en?.text ?? site.title}
        </p>
        <p className={styles.tagline}>{site.tagline}</p>

        <button
          ref={enterRef}
          type="button"
          className={styles.enter}
          onClick={dismiss}
        >
          Enter →
        </button>
      </div>
    </div>
  );
}
