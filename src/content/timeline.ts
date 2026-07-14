import { TimelineEvent, parseAll } from "@/lib/schemas";

/**
 * Verified chronology skeleton. Every event carries a source and a verification
 * status. Disputed items (status: "disputed") are rendered WITH their uncertainty
 * — never smoothed into a single settled value (EDITORIAL_POLICY.md §5).
 *
 * NOTE: locators are omitted where the source page/section has not yet been
 * directly opened (the automated fetcher is blocked for archive.org/Wikipedia —
 * RISKS R-H06). No locator is invented.
 */
const rows: unknown[] = [
  {
    id: "born",
    year: "1808",
    sortYear: 1808,
    title: "Born in Hamburg",
    place: "Hamburg",
    description:
      "Samson Raphael Hirsch is born on 20 June 1808 in Hamburg, into an observant family engaged with the surrounding culture.",
    status: "corroborated",
    world: "both",
    sources: [{ id: "SRC-001" }, { id: "SRC-002" }, { id: "SRC-004" }],
  },
  {
    id: "ordination",
    year: "c. 1828–1830",
    sortYear: 1829,
    title: "Study and ordination",
    place: "Mannheim",
    description:
      "Studies Talmud under Rabbi Jacob Ettlinger; also a student of Rabbi Isaac Bernays in Hamburg. Receives ordination around 1830.",
    status: "corroborated",
    world: "torah",
    sources: [{ id: "SRC-001" }, { id: "SRC-004" }],
  },
  {
    id: "nineteen-letters",
    year: "1836",
    sortYear: 1836,
    title: "The Nineteen Letters",
    description:
      'Publishes "Neunzehn Briefe über Judentum" (The Nineteen Letters) under the pseudonym "Ben Uziel" — a defense of traditional Judaism addressed to a questioning modern reader.',
    claimType: "historical-fact",
    status: "corroborated",
    world: "both",
    sources: [{ id: "SRC-001" }, { id: "SRC-002" }, { id: "SRC-013" }],
  },
  {
    id: "horeb",
    year: "1837 / 1838 (sources vary)",
    sortYear: 1838,
    title: "Horeb",
    description:
      'Publishes "Horeb: Versuche über Jissroéls Pflichten in der Zerstreuung," a systematic account of the commandments. Reliable sources give the publication year as 1837 or 1838; the discrepancy is unresolved (see RISKS R-H02).',
    claimType: "historical-fact",
    status: "disputed",
    world: "torah",
    sources: [{ id: "SRC-001" }, { id: "SRC-003" }],
  },
  {
    id: "frankfurt",
    year: "1851",
    sortYear: 1851,
    title: "Rabbi of the IRG, Frankfurt am Main",
    place: "Frankfurt am Main",
    description:
      "Accepts the call to lead the Israelitische Religionsgesellschaft (IRG), the Orthodox community in Frankfurt am Main, which he serves until his death.",
    status: "corroborated",
    world: "both",
    sources: [{ id: "SRC-001" }, { id: "SRC-002" }, { id: "SRC-004" }],
  },
  {
    id: "jeschurun",
    year: "1854 / 1855 (sources vary)",
    sortYear: 1855,
    title: "Founds Jeschurun",
    description:
      "Founds and edits the monthly periodical Jeschurun. The starting year and run of the journal are given inconsistently across sources (see RISKS R-H03).",
    claimType: "historical-fact",
    status: "disputed",
    world: "world",
    sources: [{ id: "SRC-001" }, { id: "SRC-003" }, { id: "SRC-012" }],
  },
  {
    id: "pentateuch",
    year: "1860s–1870s",
    sortYear: 1867,
    title: "The Pentateuch commentary",
    description:
      'Publishes "Der Pentateuch, übersetzt und erläutert," his translation of and commentary on the Torah — the work for which he is most widely known. Exact per-volume years are not yet confirmed here (RISKS R-H05).',
    claimType: "historical-fact",
    status: "single-source",
    world: "torah",
    sources: [{ id: "SRC-002" }, { id: "SRC-010" }],
  },
  {
    id: "died",
    year: "1888",
    sortYear: 1888,
    title: "Dies in Frankfurt am Main",
    place: "Frankfurt am Main",
    description:
      "Dies in December 1888 in Frankfurt am Main. The exact day is given as 30 or 31 December across sources (see RISKS R-H01); the day is left unstated until confirmed.",
    claimType: "historical-fact",
    status: "disputed",
    world: "both",
    sources: [{ id: "SRC-001" }, { id: "SRC-004" }],
  },
];

export const timeline: TimelineEvent[] = parseAll(TimelineEvent, rows).sort(
  (a, b) => a.sortYear - b.sortYear,
);
