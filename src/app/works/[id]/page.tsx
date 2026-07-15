import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/content/works";
import { ClaimBadge } from "@/components/ClaimBadge";
import { CitationList } from "@/components/CitationList";

export function generateStaticParams() {
  return works.map((w) => ({ id: w.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  if (!work) return { title: "Work not found" };
  return {
    title: work.title,
    description: work.summary,
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  if (!work) notFound();

  return (
    <article className="page">
      <div className="reading" style={{ marginBlockEnd: "1.5rem" }}>
        <p className="eyebrow">
          <Link href="/works">← Major Works</Link>
        </p>
      </div>

      {/* Commentary-page layout: center text with active margins (Direction B). */}
      <div className="commentary">
        <div className="margin-start">
          <p>{work.year}</p>
          <p>{work.kind}</p>
          <p lang="de">{work.originalTitle}</p>
        </div>

        <div className="center">
          <h1>{work.title}</h1>
          {work.originalTitle ? (
            <p lang="de" style={{ color: "var(--muted)", fontStyle: "italic", marginBlockStart: 0 }}>
              {work.originalTitle} · {work.originalLanguage}
            </p>
          ) : null}
          <p style={{ fontSize: "1.15rem", lineHeight: 1.55 }}>{work.summary}</p>
          <ClaimBadge status={work.status} />
          <CitationList sources={work.sources} />
        </div>

        <div className="margin-end">
          <p style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
            Copyright — original text
          </p>
          <p>
            <strong>{work.originalCopyright.replace("-", " ")}</strong>
          </p>
          {work.copyrightNote ? <p>{work.copyrightNote}</p> : null}
        </div>
      </div>
    </article>
  );
}
