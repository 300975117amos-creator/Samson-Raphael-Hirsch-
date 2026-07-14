/**
 * Site-level content. The "central statement" is labeled editorial framing,
 * grounded in the well-attested association of Hirsch with Torah im Derech Eretz.
 * It makes no quotation claim and puts nothing in Hirsch's own voice.
 */
export const site = {
  title: "Samson Raphael Hirsch",
  tagline: "A World Built From Words",
  /** Editorial framing — clearly not a quotation, not in Hirsch's voice. */
  centralStatement:
    "A nineteenth-century rabbi who set the study of Torah beside engagement with the surrounding world — and whose life's work was, above all, made of words: letters, commentary, translation, and the printed page.",
  centralStatementNote:
    "Editorial framing by this project, grounded in the association of Rabbi Hirsch with Torah im Derech Eretz. It is not a quotation and does not speak in his voice.",
  nav: [
    { href: "/", label: "Home", chapter: "00" },
    { href: "/who", label: "Who Was Rabbi Hirsch?", chapter: "01" },
    { href: "/timeline", label: "Life & Timeline", chapter: "02" },
    { href: "/works", label: "Major Works", chapter: "03" },
    { href: "/concepts", label: "Ideas", chapter: "04" },
    { href: "/method", label: "Editorial Method", chapter: "05" },
  ],
} as const;
