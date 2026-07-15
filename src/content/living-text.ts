import { MorphPhrase, parseAll } from "@/lib/schemas";

/**
 * Living-Text morph phrases. The signature interaction of Direction B: a token
 * that sets itself in one script and interpolates into the next. Every rendering
 * is LABELED (original / transliteration / editorial translation) so no
 * translation is presented as authoritative, and no synthetic quotation is used.
 *
 * The hero phrase is the SUBJECT'S NAME across scripts — a pure fact, not a
 * translation claim. The concept phrase uses an EDITORIAL gloss, clearly labeled.
 */
const rows: unknown[] = [
  {
    id: "name",
    claimType: "historical-fact",
    status: "corroborated",
    sources: [{ id: "SRC-001" }, { id: "SRC-002" }],
    renderings: [
      { lang: "he", dir: "rtl", text: "שמשון רפאל הירש", label: "Hebrew" },
      { lang: "de", dir: "ltr", text: "Samson Raphael Hirsch", label: "German" },
      { lang: "en", dir: "ltr", text: "Samson Raphael Hirsch", label: "English" },
    ],
  },
  {
    id: "torah-im-derech-eretz",
    claimType: "editorial-interpretation",
    status: "corroborated",
    note: "The Hebrew is the historical phrase; the English is an editorial translation, not a fixed rendering.",
    sources: [{ id: "SRC-002" }, { id: "SRC-004" }],
    renderings: [
      { lang: "he", dir: "rtl", text: "תורה עם דרך ארץ", label: "Hebrew (the phrase)" },
      {
        lang: "de",
        dir: "ltr",
        text: "Tora im Derech Erez",
        label: "transliteration",
      },
      {
        lang: "en",
        dir: "ltr",
        text: "Torah together with the way of the world",
        label: "editorial translation",
      },
    ],
  },
];

export const morphPhrases: MorphPhrase[] = parseAll(MorphPhrase, rows);

export function morphById(id: string): MorphPhrase | undefined {
  return morphPhrases.find((p) => p.id === id);
}
