import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Method",
  description:
    "How this project researches, labels, cites, and reviews every claim — and how it handles copyright and corrections.",
};

export default function MethodPage() {
  return (
    <div className="reading page">
      <p className="eyebrow">Chapter 05</p>
      <h1>Editorial Method</h1>
      <p style={{ fontSize: "1.15rem", lineHeight: 1.55, maxInlineSize: "60ch" }}>
        This is a source-first project. Accuracy, transparency, source quality, and
        copyright compliance come before publishing speed.
      </p>

      <h2>Every claim is labeled</h2>
      <p>
        Each statement is marked as one of: direct quotation, paraphrase,
        historical fact, scholarly interpretation, editorial interpretation,
        AI-assisted summary, or unresolved question — and carries a verification
        status (corroborated, single source, or disputed).
      </p>

      <h2>Nothing is invented</h2>
      <p>
        No facts, dates, quotations, citations, page numbers, editions,
        translations, or permissions are fabricated. Where reliable sources
        disagree, we record the disagreement and show it — for example, the day of
        Rabbi Hirsch&rsquo;s death and the year of <em>Horeb</em> on the{" "}
        <Link href="/timeline">timeline</Link>.
      </p>

      <h2>Sources, in order of authority</h2>
      <p>
        Rabbi Hirsch&rsquo;s own writings first; then historical documents from his
        lifetime, digitized editions from recognized libraries, academic books and
        peer-reviewed articles, and reliable encyclopedias. General reference works
        may point us toward stronger sources but never settle an important claim.
      </p>

      <h2>Original and translation are separate</h2>
      <p>
        A nineteenth-century original and any modern translation are separate
        copyrighted objects. We publish source text only when its rights are
        verified — public domain, permission, or an open license. We lean on
        public-domain originals with clearly labeled translations.
      </p>

      <h2>Two readers, not one</h2>
      <p>
        Important pages are checked by someone other than their writer — for
        sources, citations, copyright, clarity, theological and contextual
        sensitivity, and accessibility — before they are published.
      </p>

      <h2>We are not Rabbi Hirsch&rsquo;s voice</h2>
      <p>
        Nothing here is written in the first person as though Rabbi Hirsch is
        speaking, and the project does not issue religious rulings or claim to
        replace rabbinic or scholarly guidance. Any future research assistant will
        be called <strong>&ldquo;Ask the Library&rdquo;</strong> — it will cite its
        sources and will never impersonate him.
      </p>

      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBlockStart: "2rem" }}>
        This page summarizes the full policy kept in the project repository
        (EDITORIAL_POLICY.md). Corrections are welcome and are logged
        transparently.
      </p>
    </div>
  );
}
