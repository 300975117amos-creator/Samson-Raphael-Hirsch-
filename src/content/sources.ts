/**
 * Minimal source directory for rendering citations. Mirrors SOURCE_REGISTRY.md.
 * `reliability` and `status` are this project's editorial ratings. URLs are
 * recorded leads; per RISKS R-H06 the automated fetcher is blocked for some hosts,
 * so locators are not yet attached to individual claims.
 */
export type SourceEntry = {
  id: string;
  title: string;
  institution: string;
  type: string;
  url: string;
  reliability: "high" | "medium" | "low";
  status: "corroborated" | "single-source" | "disputed";
};

export const sources: Record<string, SourceEntry> = {
  "SRC-001": {
    id: "SRC-001",
    title: 'Wikipedia: "Samson Raphael Hirsch"',
    institution: "Wikipedia",
    type: "Encyclopedia (lead only)",
    url: "https://en.wikipedia.org/wiki/Samson_Raphael_Hirsch",
    reliability: "low",
    status: "single-source",
  },
  "SRC-002": {
    id: "SRC-002",
    title: 'Encyclopædia Britannica: "Samson Raphael Hirsch"',
    institution: "Encyclopædia Britannica",
    type: "Encyclopedia",
    url: "https://www.britannica.com/biography/Samson-Raphael-Hirsch",
    reliability: "medium",
    status: "single-source",
  },
  "SRC-003": {
    id: "SRC-003",
    title: 'Jewish Encyclopedia (1901–06): "Hirsch, Samson Raphael"',
    institution: "JewishEncyclopedia.com",
    type: "Encyclopedia (historical)",
    url: "https://www.jewishencyclopedia.com/articles/7741-hirsch-samson-raphael",
    reliability: "medium",
    status: "single-source",
  },
  "SRC-004": {
    id: "SRC-004",
    title: 'Encyclopedia.com: "Samson Raphael Hirsch"',
    institution: "Encyclopedia.com",
    type: "Encyclopedia",
    url: "https://www.encyclopedia.com/people/philosophy-and-religion/judaism-biographies/samson-raphael-hirsch",
    reliability: "medium",
    status: "single-source",
  },
  "SRC-005": {
    id: "SRC-005",
    title: "Portrait record (Griffinger Portal)",
    institution: "Leo Baeck Institute",
    type: "Archival catalog record",
    url: "https://www.lbi.org/griffinger/record/246649",
    reliability: "high",
    status: "single-source",
  },
  "SRC-010": {
    id: "SRC-010",
    title: "Der Pentateuch (German original scan)",
    institution: "Internet Archive",
    type: "Primary work",
    url: "https://archive.org/details/derpentateuch03hirsuoft",
    reliability: "high",
    status: "single-source",
  },
  "SRC-011": {
    id: "SRC-011",
    title: "Gesammelte Schriften (German)",
    institution: "Internet Archive",
    type: "Primary works collection",
    url: "https://archive.org/details/gesammelteschrif00hirs",
    reliability: "high",
    status: "single-source",
  },
  "SRC-012": {
    id: "SRC-012",
    title: "Jeschurun (periodical, German)",
    institution: "Internet Archive",
    type: "Primary periodical",
    url: "https://archive.org/details/bub_gb__StBAQAAIAAJ",
    reliability: "high",
    status: "disputed",
  },
  "SRC-013": {
    id: "SRC-013",
    title: "The Nineteen Letters (English scan — edition unconfirmed)",
    institution: "Internet Archive",
    type: "Translation of primary work",
    url: "https://archive.org/details/nineteenletterso0000rabb_c9w2",
    reliability: "high",
    status: "disputed",
  },
  "SRC-018": {
    id: "SRC-018",
    title: "Jewish Virtual Library: “Emancipation”",
    institution: "Jewish Virtual Library",
    type: "Reference article",
    url: "https://www.jewishvirtuallibrary.org/emancipation",
    reliability: "medium",
    status: "corroborated",
  },
  "SRC-019": {
    id: "SRC-019",
    title: "Wikipedia: “Jewish emancipation”",
    institution: "Wikipedia",
    type: "Encyclopedia (lead only)",
    url: "https://en.wikipedia.org/wiki/Jewish_emancipation",
    reliability: "low",
    status: "corroborated",
  },
  "SRC-020": {
    id: "SRC-020",
    title: "Encyclopedia.com: “Rabbinical Conferences”",
    institution: "Encyclopedia.com",
    type: "Encyclopedia",
    url: "https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/rabbinical-conferences",
    reliability: "medium",
    status: "corroborated",
  },
  "SRC-021": {
    id: "SRC-021",
    title: "Wikipedia: “Hamburg Temple”",
    institution: "Wikipedia",
    type: "Encyclopedia (lead only)",
    url: "https://en.wikipedia.org/wiki/Hamburg_Temple",
    reliability: "low",
    status: "corroborated",
  },
  "SRC-022": {
    id: "SRC-022",
    title: "Encyclopedia.com: “Hirsch, Samson (ben) Raphael”",
    institution: "Encyclopedia.com",
    type: "Encyclopedia",
    url: "https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/hirsch-samson-ben-raphael",
    reliability: "medium",
    status: "corroborated",
  },
};

export function sourceById(id: string): SourceEntry | undefined {
  return sources[id];
}
