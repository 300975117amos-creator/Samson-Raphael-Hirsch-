import type { Metadata } from "next";
import { concepts } from "@/content/concepts";
import { morphById } from "@/content/living-text";
import { ConceptExplorer } from "@/components/ConceptExplorer";
import { LivingText } from "@/components/LivingText";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "An explorable network of the ideas associated with Rabbi Samson Raphael Hirsch, including Torah im Derech Eretz.",
};

export default function ConceptsPage() {
  const tide = morphById("torah-im-derech-eretz");
  return (
    <div className="page">
      <div className="reading">
        <p className="eyebrow">Chapter 04</p>
        <h1>Ideas</h1>
        <p style={{ maxInlineSize: "60ch", color: "var(--muted)" }}>
          Select a term to read its gloss, its sources, and the ideas it connects
          to. Glosses are labeled as editorial summaries; scholarly readings will
          be attributed as they are added.
        </p>

        {tide ? (
          <div style={{ marginBlock: "2.5rem" }}>
            <LivingText phrase={tide} intervalMs={3600} />
          </div>
        ) : null}
      </div>

      <div className="reading" style={{ maxInlineSize: "78ch", marginBlockStart: "1rem" }}>
        <ConceptExplorer concepts={concepts} />
      </div>
    </div>
  );
}
