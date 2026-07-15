import type { Metadata } from "next";
import Link from "next/link";
import { ClaimBadge } from "@/components/ClaimBadge";
import { CitationList } from "@/components/CitationList";
import { TypographicPortrait } from "@/components/TypographicPortrait";

export const metadata: Metadata = {
  title: "Who Was Rabbi Samson Raphael Hirsch?",
  description:
    "A short, source-first introduction to Rabbi Samson Raphael Hirsch (1808–1888), a leading figure of nineteenth-century German Orthodoxy.",
};

export default function WhoPage() {
  return (
    <article className="page">
      <div className="reading" style={{ marginBlockEnd: "3rem" }}>
        <TypographicPortrait />
      </div>

      <div className="commentary">
        <div className="margin-start">
          <p>1808–1888</p>
          <p>Hamburg · Frankfurt am Main</p>
        </div>

        <div className="center">
          <p className="eyebrow">Chapter 01</p>
          <h1>Who Was Rabbi Samson Raphael Hirsch?</h1>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.55 }}>
            Samson Raphael Hirsch (1808–1888) was a rabbi and writer, a leading
            figure of Orthodox Judaism in nineteenth-century Germany, and the
            person most associated with the idea of{" "}
            <Link href="/concepts">Torah im Derech Eretz</Link> — the observance of
            Torah together with engagement in the surrounding world.
          </p>

          <p>
            Born in Hamburg in 1808, he studied under Rabbi Isaac Bernays and Rabbi
            Jacob Ettlinger and served as a rabbi in Oldenburg, Emden, and
            Nikolsburg before leading the Israelitische Religionsgesellschaft in
            Frankfurt am Main from 1851 until his death in 1888.
          </p>
          <ClaimBadge claimType="historical-fact" status="corroborated" />
          <CitationList
            sources={[{ id: "SRC-001" }, { id: "SRC-002" }, { id: "SRC-004" }]}
          />

          <p>
            He is best known today for his writings: <em>The Nineteen Letters</em>{" "}
            (1836), <em>Horeb</em>, and his commentaries on the{" "}
            <Link href="/works/pentateuch">Pentateuch</Link> and the Psalms — work
            that gives this project its guiding idea, a world built from words.
          </p>
          <ClaimBadge claimType="historical-fact" status="corroborated" />
          <CitationList sources={[{ id: "SRC-002" }, { id: "SRC-013" }]} />

          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            This introduction is deliberately short and conservative. A fuller
            biography follows the review workflow in the{" "}
            <Link href="/method">Editorial Method</Link>, and open questions (such
            as the exact day of his death) are shown on the{" "}
            <Link href="/timeline">timeline</Link> rather than resolved by guessing.
          </p>
        </div>

        <div className="margin-end">
          <p style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
            Reading note
          </p>
          <p>
            Every paragraph that makes a claim shows its claim type and its
            sources. Nothing on this page is written in Rabbi Hirsch&rsquo;s own
            voice.
          </p>
        </div>
      </div>
    </article>
  );
}
