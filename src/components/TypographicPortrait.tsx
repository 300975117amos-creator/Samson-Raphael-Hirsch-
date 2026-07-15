import styles from "./TypographicPortrait.module.css";

/**
 * An ORIGINAL typographic portrait plate (AST-021) — an engraving-style emblem
 * built from Rabbi Hirsch's name, dates, posts, and motto. It contains no
 * photograph and no third-party image, so it carries no rights risk, and it
 * realizes the brief's "portrait revealed through typographic masks" idea
 * honestly. It is always labeled as NOT a photograph.
 *
 * Entrance motion is CSS-only and is neutralized by the global reduced-motion
 * rules; the plate is fully legible with no motion.
 */
const posts = ["Hamburg", "Oldenburg", "Emden", "Nikolsburg", "Frankfurt"];

export function TypographicPortrait() {
  return (
    <figure className={styles.figure}>
      <svg
        className={styles.svg}
        viewBox="0 0 360 460"
        role="img"
        aria-label="Typographic portrait plate of Samson Raphael Hirsch (1808–1888): his name in Hebrew and Latin script, his rabbinic posts, and the phrase Torah im Derech Eretz. This is an original typographic composition, not a photograph."
      >
        <defs>
          <radialGradient id="tp-light" cx="50%" cy="34%" r="70%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.10" />
            <stop offset="55%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <clipPath id="tp-clip">
            <path d="M20 120 Q20 20 180 20 Q340 20 340 120 L340 440 L20 440 Z" />
          </clipPath>
        </defs>

        {/* faint word-texture background, clipped to the plate */}
        <g clipPath="url(#tp-clip)" className={styles.texture} aria-hidden="true">
          {Array.from({ length: 15 }).map((_, r) => (
            <text key={r} x={16} y={40 + r * 28} className={styles.textureRow}>
              שמשון רפאל הירש · SAMSON RAPHAEL HIRSCH · תורה עם דרך ארץ ·
            </text>
          ))}
        </g>

        <rect x={0} y={0} width={360} height={460} fill="url(#tp-light)" />

        {/* engraving-style double frame with arched top */}
        <path
          className={styles.frameOuter}
          d="M12 120 Q12 12 180 12 Q348 12 348 120 L348 448 L12 448 Z"
          fill="none"
        />
        <path
          className={styles.frameInner}
          d="M22 122 Q22 22 180 22 Q338 22 338 122 L338 438 L22 438 Z"
          fill="none"
        />

        {/* Hebrew name — the focal element */}
        <text x={180} y={150} className={styles.heName} textAnchor="middle">
          שמשון רפאל הירש
        </text>

        <line className={styles.rule} x1={90} y1={182} x2={270} y2={182} />

        {/* Latin name */}
        <text x={180} y={224} className={styles.latinName} textAnchor="middle">
          SAMSON RAPHAEL
        </text>
        <text x={180} y={256} className={styles.latinName} textAnchor="middle">
          HIRSCH
        </text>

        {/* dates */}
        <text x={180} y={298} className={styles.dates} textAnchor="middle">
          1808 — 1888
        </text>

        {/* posts */}
        <text x={180} y={338} className={styles.posts} textAnchor="middle">
          {posts.join(" · ")}
        </text>

        <line className={styles.rule} x1={110} y1={366} x2={250} y2={366} />

        {/* motto */}
        <text x={180} y={402} className={styles.motto} textAnchor="middle">
          תורה עם דרך ארץ
        </text>

        {/* corner flourishes */}
        <g className={styles.flourish} aria-hidden="true">
          <path d="M34 134 L34 110 M34 110 L58 110" fill="none" />
          <path d="M326 134 L326 110 M326 110 L302 110" fill="none" />
          <path d="M34 426 L34 402 M34 426 L58 426" fill="none" />
          <path d="M326 426 L326 402 M326 426 L302 426" fill="none" />
        </g>
      </svg>

      <figcaption className={styles.caption}>
        <strong>Typographic portrait — not a photograph.</strong> An original
        composition built from Rabbi Hirsch&rsquo;s name, dates, posts, and the
        phrase <em lang="he" dir="rtl">תורה עם דרך ארץ</em>. A verified
        public-domain likeness may be added later — see{" "}
        <a href="/method">Editorial Method</a>.
      </figcaption>
    </figure>
  );
}
