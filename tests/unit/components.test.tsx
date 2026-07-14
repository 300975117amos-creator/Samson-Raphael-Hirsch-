import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import axe from "axe-core";
import { ClaimBadge } from "@/components/ClaimBadge";
import { CitationList } from "@/components/CitationList";

describe("ClaimBadge", () => {
  it("labels claim type and status in text (not color alone)", () => {
    render(<ClaimBadge claimType="quotation" status="disputed" />);
    expect(screen.getByText("Direct quotation")).toBeInTheDocument();
    expect(screen.getByText("Disputed")).toBeInTheDocument();
  });
});

describe("CitationList", () => {
  it("renders registered sources as external links with safe rel", () => {
    render(<CitationList sources={[{ id: "SRC-002" }]} />);
    const link = screen.getByRole("link", { name: /Britannica/i });
    expect(link).toHaveAttribute("href");
    expect(link.getAttribute("rel")).toContain("noopener");
  });

  it("does not fabricate metadata for unregistered sources", () => {
    // SRC-999 has a valid shape but is not in the registry — must be flagged.
    render(<CitationList sources={[{ id: "SRC-999" }]} />);
    expect(screen.getByText(/unregistered/i)).toBeInTheDocument();
  });
});

describe("accessibility smoke (axe-core)", () => {
  it("CitationList has no serious/critical violations", async () => {
    const { container } = render(
      <main>
        <CitationList sources={[{ id: "SRC-001" }, { id: "SRC-010" }]} />
      </main>,
    );
    const results = await axe.run(container, {
      resultTypes: ["violations"],
    });
    const serious = results.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical",
    );
    expect(serious, JSON.stringify(serious.map((v) => v.id))).toHaveLength(0);
  });
});
