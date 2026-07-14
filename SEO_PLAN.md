# SEO_PLAN.md

_Build for long-term authority, not tricks. Every published page must have genuine
educational value. To implement during M1/M2._

## Foundations
- Meaningful `<title>` + meta description per page; canonical URLs; descriptive,
  stable URL slugs; ordered semantic headings.
- XML sitemap + `robots.txt`; breadcrumbs.
- Internal linking between biography ↔ works ↔ concepts ↔ sources.
- Multilingual annotations: `hreflang` for en/he/de; correct `lang`/`dir`.
- Social sharing metadata (Open Graph / Twitter) with accurate titles/images
  (image rights cleared first).
- Image metadata (alt, provenance-aware).

## Structured data (only where accurate)
- `Person` for Rabbi Hirsch (with verified vitals once R-H01 resolved).
- `Book` for each work (edition-accurate; original vs translation distinguished).
- `Article` for essays/biography pages, with author + reviewer, publication and
  revision dates, and correction history where relevant.
- `Organization` for the project.
- **Never** emit structured data containing unverified facts.

## Authority & trust signals
- Visible sources/citations on every content page.
- Author + reviewer attribution; publication + revision dates.
- Editorial method + corrections pages linked site-wide.

## Anti-patterns (forbidden)
- No pages created solely to target keywords.
- No thin/filler content. No fabricated review dates or authorship.

## Status
🔴 Not implemented. Sitemap/robots/metadata/structured-data land with the M1 app
scaffold.
