import styles from "./StatTiles.module.css";

/**
 * "At a glance" tiles. Each figure is verifiable (lifespan, number of rabbinic
 * posts, the year of the first book, the project's languages). No invented
 * statistics; the label states exactly what the number counts.
 */
const tiles = [
  {
    figure: "1808–1888",
    label: "Lifespan",
    sub: "Hamburg → Frankfurt am Main",
  },
  {
    figure: "4",
    label: "Rabbinic posts",
    sub: "Oldenburg · Emden · Nikolsburg · Frankfurt",
  },
  {
    figure: "1836",
    label: "The Nineteen Letters",
    sub: "published under “Ben Uziel”",
  },
  {
    figure: "He · De · En",
    label: "Languages",
    sub: "English first; Hebrew & German in the architecture",
  },
];

export function StatTiles() {
  return (
    <dl className={styles.grid}>
      {tiles.map((t) => (
        <div className={styles.tile} key={t.label}>
          <dt className={styles.label}>{t.label}</dt>
          <dd className={styles.figure}>{t.figure}</dd>
          <p className={styles.sub}>{t.sub}</p>
        </div>
      ))}
    </dl>
  );
}
