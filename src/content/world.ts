import { TimelineEvent, parseAll } from "@/lib/schemas";

/**
 * "His Historical World" — the surrounding-world events against which Rabbi
 * Hirsch's life unfolded, plus a few of his own anchors, aligned by year for a
 * dual-lane graphic. Every event is a historical FACT with registered sources;
 * `world: "world"` = the surrounding world, `world: "torah"` = Hirsch's lane.
 * Framing that interprets the relationship between the two is kept on the page
 * and labeled editorial — not embedded here as fact.
 */
const rows: unknown[] = [
  // --- Surrounding world ---
  {
    id: "w-hamburg-temple",
    year: "1818",
    sortYear: 1818,
    title: "The Hamburg Temple is dedicated",
    description:
      "The Hamburg Temple — the first permanent Reform congregation, with an organ, a choir, and an abridged prayer-book — is dedicated on 18 October 1818, in Hirsch's birthplace.",
    status: "single-source",
    world: "world",
    sources: [{ id: "SRC-021" }],
  },
  {
    id: "w-conferences",
    year: "1844–1846",
    sortYear: 1845,
    title: "Reform rabbinical conferences",
    description:
      "Reform rabbis meet in a series of conferences — Brunswick (1844), Frankfurt am Main (1845), and Breslau (1846) — formalizing the movement Hirsch opposed.",
    status: "single-source",
    world: "world",
    sources: [{ id: "SRC-020" }],
  },
  {
    id: "w-emancipation",
    year: "1867–1871",
    sortYear: 1871,
    title: "Jewish emancipation in the German states",
    description:
      "Legal restrictions on Jews are lifted across the German states — abolished in the North German Confederation (1867), passed into law (1869), and extended with German unification (1871).",
    status: "corroborated",
    world: "world",
    sources: [{ id: "SRC-018" }, { id: "SRC-019" }],
  },
  {
    id: "w-austritt",
    year: "1876",
    sortYear: 1876,
    title: "Prussia's Law of Secession (Austrittsgesetz)",
    description:
      "Prussia's Law of Secession (28 July 1876), introduced by Eduard Lasker, lets Jews leave a religious community without leaving Judaism — giving legal standing to independent Orthodox congregations. Hirsch was a leading advocate.",
    status: "corroborated",
    world: "world",
    sources: [{ id: "SRC-022" }, { id: "SRC-001" }],
  },

  // --- Hirsch's lane (anchors; full detail on the timeline) ---
  {
    id: "h-born",
    year: "1808",
    sortYear: 1808,
    title: "Hirsch is born in Hamburg",
    description: "Samson Raphael Hirsch is born in Hamburg on 20 June 1808.",
    status: "corroborated",
    world: "torah",
    sources: [{ id: "SRC-001" }, { id: "SRC-002" }],
  },
  {
    id: "h-letters",
    year: "1836",
    sortYear: 1836,
    title: "The Nineteen Letters",
    description:
      "Hirsch publishes The Nineteen Letters under the pseudonym Ben Uziel — a defense of traditional Judaism for a modern reader.",
    status: "corroborated",
    world: "torah",
    sources: [{ id: "SRC-001" }, { id: "SRC-002" }],
  },
  {
    id: "h-frankfurt",
    year: "1851",
    sortYear: 1851,
    title: "Leads the IRG in Frankfurt",
    description:
      "Hirsch becomes rabbi of the Israelitische Religionsgesellschaft (IRG) in Frankfurt am Main, which grows to about 500 families.",
    status: "corroborated",
    world: "torah",
    sources: [{ id: "SRC-001" }, { id: "SRC-022" }],
  },
  {
    id: "h-died",
    year: "1888",
    sortYear: 1888,
    title: "Hirsch dies in Frankfurt",
    description: "Hirsch dies in Frankfurt am Main in December 1888.",
    status: "corroborated",
    world: "torah",
    sources: [{ id: "SRC-001" }, { id: "SRC-004" }],
  },
];

export const worldTimeline: TimelineEvent[] = parseAll(TimelineEvent, rows).sort(
  (a, b) => a.sortYear - b.sortYear,
);
