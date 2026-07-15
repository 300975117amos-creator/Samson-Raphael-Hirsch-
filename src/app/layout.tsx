import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `${site.title} — ${site.tagline}`,
    template: `%s — ${site.title}`,
  },
  description:
    "A source-first digital experience devoted to Rabbi Samson Raphael Hirsch (1808–1888). Every claim is traceable to a source; every quotation is cited.",
  openGraph: {
    title: `${site.title} — ${site.tagline}`,
    description:
      "A source-first digital experience devoted to Rabbi Samson Raphael Hirsch (1808–1888).",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <footer className="reading" style={{ paddingBlock: "3rem", color: "var(--muted)", fontSize: "0.85rem" }}>
            <p>
              Prototype (M1) · Direction B — “Set in the Text.” Content shown here
              is verified or clearly labeled as unverified/editorial. See the{" "}
              <a href="/method">Editorial Method</a>. Nothing is cleared for
              full-text republication yet.
            </p>
          </footer>
        </MotionProvider>
      </body>
    </html>
  );
}
