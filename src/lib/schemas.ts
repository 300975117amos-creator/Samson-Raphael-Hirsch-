import { z } from "zod";

/**
 * Content schemas. Content is validated against these at module load so that no
 * page can render a claim without the metadata the editorial policy requires.
 * These schemas intentionally make source + verification status *required* on
 * every historical claim (EDITORIAL_POLICY.md §1, §2, §4).
 */

/** How confident are we in this claim? Mirrors SOURCE_REGISTRY.md legend. */
export const VerificationStatus = z.enum([
  "corroborated", // ✅ ≥2 independent reliable sources
  "single-source", // 🟡 recorded, not yet independently confirmed
  "disputed", // 🔴 reliable sources disagree — never render as settled
]);
export type VerificationStatus = z.infer<typeof VerificationStatus>;

/** The claim-type labels from EDITORIAL_POLICY.md §2. */
export const ClaimType = z.enum([
  "quotation",
  "paraphrase",
  "historical-fact",
  "scholarly-interpretation",
  "editorial-interpretation",
  "ai-assisted-summary",
  "unresolved-question",
]);
export type ClaimType = z.infer<typeof ClaimType>;

export const CopyrightStatus = z.enum([
  "public-domain",
  "in-copyright",
  "permission-granted",
  "open-license",
  "limited-quotation-approved",
  "not-cleared",
  "unverified",
]);
export type CopyrightStatus = z.infer<typeof CopyrightStatus>;

/** A pointer to a registered source (SOURCE_REGISTRY.md). */
export const SourceRef = z.object({
  id: z.string().regex(/^SRC-\d{3}$/), // e.g. SRC-001
  locator: z.string().optional(), // page/section/verse — omit until verified
  note: z.string().optional(),
});
export type SourceRef = z.infer<typeof SourceRef>;

export const TimelineEvent = z.object({
  id: z.string(),
  /** Display year or range as a string so disputed/approximate values stay honest. */
  year: z.string(),
  /** Machine-sortable anchor year. */
  sortYear: z.number().int(),
  title: z.string(),
  place: z.string().optional(),
  description: z.string(),
  claimType: ClaimType.default("historical-fact"),
  status: VerificationStatus,
  sources: z.array(SourceRef).min(1), // no event without a source
  /** Which of the "two worlds" this belongs to (Direction C graft). */
  world: z.enum(["torah", "world", "both"]).default("both"),
});
export type TimelineEvent = z.infer<typeof TimelineEvent>;

export const Work = z.object({
  id: z.string(),
  title: z.string(),
  originalTitle: z.string().optional(),
  originalLanguage: z.enum(["German", "Hebrew"]),
  year: z.string(),
  sortYear: z.number().int(),
  kind: z.enum(["book", "commentary", "periodical", "collection"]),
  summary: z.string(),
  status: VerificationStatus,
  sources: z.array(SourceRef).min(1),
  /** Copyright posture of the ORIGINAL text (translations tracked separately). */
  originalCopyright: CopyrightStatus,
  copyrightNote: z.string().optional(),
});
export type Work = z.infer<typeof Work>;

export const Concept = z.object({
  id: z.string(),
  title: z.string(),
  hebrew: z.string().optional(),
  gloss: z.string(),
  claimType: ClaimType,
  status: VerificationStatus,
  related: z.array(z.string()).default([]), // concept ids
  sources: z.array(SourceRef).min(1),
});
export type Concept = z.infer<typeof Concept>;

/** A single "token" that morphs across scripts/languages in the Living Text demo. */
export const MorphPhrase = z.object({
  id: z.string(),
  /** Ordered renderings; the UI interpolates between them. Each labeled. */
  renderings: z
    .array(
      z.object({
        lang: z.enum(["he", "de", "en"]),
        dir: z.enum(["rtl", "ltr"]),
        text: z.string(),
        /** e.g. "original", "transliteration", "editorial translation" */
        label: z.string(),
      }),
    )
    .min(2),
  claimType: ClaimType,
  status: VerificationStatus,
  sources: z.array(SourceRef).min(1),
  note: z.string().optional(),
});
export type MorphPhrase = z.infer<typeof MorphPhrase>;

/** Validate an array against a schema, throwing a readable error at load time. */
export function parseAll<S extends z.ZodTypeAny>(
  schema: S,
  rows: unknown[],
): z.infer<S>[] {
  return rows.map((row, i) => {
    const result = schema.safeParse(row);
    if (!result.success) {
      throw new Error(
        `Content validation failed at index ${i}: ${result.error.message}`,
      );
    }
    return result.data as z.infer<S>;
  });
}
