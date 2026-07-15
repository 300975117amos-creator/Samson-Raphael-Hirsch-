import { Concept, parseAll } from "@/lib/schemas";

/**
 * Concept nodes. Glosses are labeled as editorial interpretation (our summaries),
 * grounded in reference sources; relationships are kept conservative. Nothing here
 * is presented as a settled scholarly reading (EDITORIAL_POLICY.md §2).
 */
const rows: unknown[] = [
  {
    id: "torah-im-derech-eretz",
    title: "Torah im Derech Eretz",
    hebrew: "תורה עם דרך ארץ",
    gloss:
      "The phrase associated above all with Hirsch, describing the observance of Torah together with engagement in the surrounding world and its culture. The precise interpretation is discussed and contested by scholars.",
    claimType: "editorial-interpretation",
    status: "corroborated",
    related: ["education", "community", "symbolism"],
    sources: [{ id: "SRC-002" }, { id: "SRC-004" }],
  },
  {
    id: "education",
    title: "Education and the Jewish Home",
    gloss:
      "Hirsch's concern with the formation of the individual and the family, and with schooling that unites religious and general learning. (Editorial summary; primary and academic sources to be added before publication.)",
    claimType: "editorial-interpretation",
    status: "single-source",
    related: ["torah-im-derech-eretz", "community"],
    sources: [{ id: "SRC-004" }],
  },
  {
    id: "community",
    title: "Community and Jewish Public Life",
    gloss:
      "Hirsch's leadership of an independent Orthodox community and his engagement with the organization of Jewish public life in his time. (Editorial summary; sources to be strengthened.)",
    claimType: "editorial-interpretation",
    status: "single-source",
    related: ["torah-im-derech-eretz", "education"],
    sources: [{ id: "SRC-002" }],
  },
  {
    id: "symbolism",
    title: "Symbolism of the Mitzvot",
    gloss:
      "The attention, prominent in Hirsch's commentaries, to the meanings and symbolic dimensions of the commandments. (Editorial summary; primary-source grounding to be added.)",
    claimType: "editorial-interpretation",
    status: "single-source",
    related: ["torah-im-derech-eretz", "language"],
    sources: [{ id: "SRC-010" }],
  },
  {
    id: "language",
    title: "Language and Interpretation",
    gloss:
      "Hirsch's close attention to the Hebrew language — roots and word-relationships — as a path into the meaning of the text. (Editorial summary; primary-source grounding to be added.)",
    claimType: "editorial-interpretation",
    status: "single-source",
    related: ["symbolism"],
    sources: [{ id: "SRC-010" }],
  },
];

export const concepts: Concept[] = parseAll(Concept, rows);

export function conceptById(id: string): Concept | undefined {
  return concepts.find((c) => c.id === id);
}
