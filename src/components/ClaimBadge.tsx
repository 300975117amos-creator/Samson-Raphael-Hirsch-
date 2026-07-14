import type { ClaimType, VerificationStatus } from "@/lib/schemas";
import styles from "./ClaimBadge.module.css";

const CLAIM_LABEL: Record<ClaimType, string> = {
  quotation: "Direct quotation",
  paraphrase: "Paraphrase",
  "historical-fact": "Historical fact",
  "scholarly-interpretation": "Scholarly interpretation",
  "editorial-interpretation": "Editorial interpretation",
  "ai-assisted-summary": "AI-assisted summary",
  "unresolved-question": "Unresolved question",
};

const STATUS_LABEL: Record<VerificationStatus, string> = {
  corroborated: "Corroborated",
  "single-source": "Single source",
  disputed: "Disputed",
};

const STATUS_MARK: Record<VerificationStatus, string> = {
  corroborated: "✓",
  "single-source": "•",
  disputed: "≠",
};

/**
 * Renders the claim-type and verification-status labels the editorial policy
 * requires. Status is conveyed by text + shape, never color alone (WCAG 1.4.1).
 */
export function ClaimBadge({
  claimType,
  status,
}: {
  claimType?: ClaimType;
  status: VerificationStatus;
}) {
  return (
    <span className={styles.badge} data-status={status}>
      {claimType ? (
        <span className={styles.claim}>{CLAIM_LABEL[claimType]}</span>
      ) : null}
      <span className={styles.status}>
        <span aria-hidden="true" className={styles.mark}>
          {STATUS_MARK[status]}
        </span>
        {STATUS_LABEL[status]}
      </span>
    </span>
  );
}
