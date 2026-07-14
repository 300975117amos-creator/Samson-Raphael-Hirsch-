import { Work, parseAll } from "@/lib/schemas";

/**
 * Works library data. `originalCopyright` describes the ORIGINAL text only.
 * Modern translations are separate copyrighted objects tracked in
 * COPYRIGHT_LEDGER.md and are NOT cleared for full text here.
 */
const rows: unknown[] = [
  {
    id: "nineteen-letters",
    title: "The Nineteen Letters",
    originalTitle: "Neunzehn Briefe über Judentum",
    originalLanguage: "German",
    year: "1836",
    sortYear: 1836,
    kind: "book",
    summary:
      "A defense of traditional Judaism written as letters between a young questioner and a teacher, published under the pseudonym Ben Uziel.",
    status: "corroborated",
    sources: [{ id: "SRC-001" }, { id: "SRC-013" }],
    originalCopyright: "public-domain",
    copyrightNote:
      "German original (1836) is public domain. English translations are separate objects; the Drachman edition's status is unconfirmed and modern editions (e.g., Elias/Feldheim) are in copyright — no full text until cleared (AST-001/002).",
  },
  {
    id: "horeb",
    title: "Horeb",
    originalTitle: "Horeb: Versuche über Jissroéls Pflichten in der Zerstreuung",
    originalLanguage: "German",
    year: "1837 / 1838 (sources vary)",
    sortYear: 1838,
    kind: "book",
    summary:
      "A systematic presentation of the commandments and their meanings for Jewish life in the modern world.",
    status: "disputed",
    sources: [{ id: "SRC-001" }, { id: "SRC-003" }],
    originalCopyright: "public-domain",
    copyrightNote:
      "German original is public domain. The Grunfeld/Soncino English translation is in copyright (AST-003).",
  },
  {
    id: "pentateuch",
    title: "The Pentateuch (Commentary & Translation)",
    originalTitle: "Der Pentateuch, übersetzt und erläutert",
    originalLanguage: "German",
    year: "1860s–1870s",
    sortYear: 1867,
    kind: "commentary",
    summary:
      "Hirsch's translation of and commentary on the Torah, notable for its attention to language, roots, and the symbolism of the commandments.",
    status: "single-source",
    sources: [{ id: "SRC-002" }, { id: "SRC-010" }],
    originalCopyright: "public-domain",
    copyrightNote:
      "German original is public domain (author d. 1888). The Isaac Levy English translation is in copyright (AST-004/005).",
  },
  {
    id: "psalms",
    title: "The Psalms (Commentary & Translation)",
    originalTitle: "Die Psalmen",
    originalLanguage: "German",
    year: "19th c. (per-volume years unconfirmed)",
    sortYear: 1882,
    kind: "commentary",
    summary:
      "A translation of and commentary on the Book of Psalms.",
    status: "single-source",
    sources: [{ id: "SRC-002" }],
    originalCopyright: "public-domain",
    copyrightNote:
      "German original is public domain. English translation is in copyright; a claimed public-domain English volume is unverified — do not rely on it (AST-006).",
  },
  {
    id: "jeschurun",
    title: "Jeschurun",
    originalTitle: "Jeschurun",
    originalLanguage: "German",
    year: "founded 1854/1855 (run disputed)",
    sortYear: 1855,
    kind: "periodical",
    summary:
      "A monthly periodical founded and edited by Hirsch, engaging questions of Jewish life, thought, and the surrounding culture.",
    status: "disputed",
    sources: [{ id: "SRC-001" }, { id: "SRC-012" }],
    originalCopyright: "public-domain",
    copyrightNote:
      "Issues within the author's lifetime are public domain; later issues by other hands are separate (AST-008). Run-years disputed (R-H03).",
  },
  {
    id: "gesammelte-schriften",
    title: "Collected Writings",
    originalTitle: "Gesammelte Schriften",
    originalLanguage: "German",
    year: "collected edition",
    sortYear: 1902,
    kind: "collection",
    summary:
      "A collected edition of Hirsch's essays and shorter writings.",
    status: "single-source",
    sources: [{ id: "SRC-011" }],
    originalCopyright: "public-domain",
    copyrightNote:
      "Original texts by Hirsch are public domain (author d. 1888); confirm the specific edition's added material (AST-007).",
  },
];

export const works: Work[] = parseAll(Work, rows).sort(
  (a, b) => a.sortYear - b.sortYear,
);
