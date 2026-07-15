# PROJECT_BRIEF.md — Rabbi Samson Raphael Hirsch Digital Experience

> This is the canonical brief. `CLAUDE.md` is the operational quick-reference.
> Where this file and any other disagree, this file governs the *intent*, and the
> editorial/copyright rules govern *what may be published*.

## Mission

Build the most authoritative, visually spectacular, accessible, and useful
digital experience devoted to **Rabbi Samson Raphael Hirsch**. It must not feel
like an ordinary biography site, educational portal, museum archive, or religious
institution website. It should feel like a **world-class interactive digital
exhibition** created by an exceptional creative studio, combining verified
historical research, primary sources, exceptional editorial writing, cinematic
storytelling, sophisticated motion design, experimental interaction, excellent
performance, accessibility, multilingual architecture, and long-term educational
value.

**Accuracy, transparency, source quality, and copyright compliance always take
priority over publishing speed.**

## Core creative concept — A World Built From Words

Explore Rabbi Hirsch through language, ideas, books, letters, and commentary, and
the relationship between Torah and the surrounding world. The visual environment
emerges from Hebrew letters, German typography, English translation, printed
books, manuscripts, quotations, historical dates, architectural lines, and layers
of interpretation. Words build spaces, reveal images, connect ideas, form
timelines, and transform between languages. Motion is part of the storytelling
system from the beginning — never a static site with animation added afterward.

The experience should reflect the tensions Hirsch's life and thought engage:
Torah and the surrounding world; permanence and transformation; tradition and
modernity; text and lived experience; individual responsibility and communal
life; Jewish continuity and cultural participation; nineteenth-century history
and contemporary relevance.

## Audiences

First-time encounterers; Jewish educators; students; readers of Orthodox Jewish
thought; researchers of 19th-century German Jewry; rabbis and community leaders;
parents and families; general readers interested in education, community,
tradition, and modernity; Hebrew-, German-, and English-speaking audiences.
**English is the first complete language.** Hebrew and German are supported in the
architecture from the start; Hebrew receives full RTL support and must never feel
like a secondary translation.

## Required launch pages (titles provisional until verified)

1. Home
2. Who Was Rabbi Samson Raphael Hirsch?
3. Life and Timeline
4. His Historical World
5. Major Works
6. The Nineteen Letters
7. Horeb
8. Torah Commentary
9. Psalms Commentary
10. Torah im Derech Eretz
11. Education and the Jewish Home
12. Community and Jewish Public Life
13. Language, Symbolism, and Mitzvot
14. Begin Learning
15. Source Library
16. Editorial Method
17. About the Project
18. Copyright and Attributions
19. Corrections and Contact
20. Accessibility

## Historical & editorial rules (summary — full policy in `EDITORIAL_POLICY.md`)

- Never invent facts, dates, quotations, citations, page numbers, book titles,
  editions, translations, relationships, events, interpretations, permissions,
  academic consensus, test/performance results, or source availability.
- Every historical claim traces to a source record. Every direct quotation
  carries: work title, edition, original language, translator (when applicable),
  publisher (when available), publication year, precise locator, copyright
  status, and link/archive reference when available.
- Distinguish direct quotation, paraphrase, historical fact, scholarly
  interpretation, editorial interpretation, AI-assisted summary, and unresolved
  question.
- Never write in the first person as Hirsch. Never create synthetic quotations.
  Never claim what Hirsch "would say" about a modern issue unless the page clearly
  labels it as interpretation with direct supporting sources. Do not issue
  religious rulings. Do not present the site as a substitute for rabbinic or
  scholarly guidance.

### Source hierarchy

1. Hirsch's original writings → 2. Historical documents from his lifetime →
3. Digitized editions from recognized libraries → 4. Academic books →
5. Peer-reviewed articles → 6. University collections → 7. National libraries →
8. Established Jewish educational institutions → 9. Reliable encyclopedias →
10. General websites only to discover stronger sources. Wikipedia may identify
leads but is never the final authority. When sources disagree: record the
disagreement, identify each position's source, explain the uncertainty, avoid
presenting one interpretation as settled, and request human review when material.

### Copyright

The 19th-century original and any modern translation are **separate copyrighted
objects.** A public-domain original does not make a modern translation public
domain. Do not publish an entire translation, commentary, annotation,
introduction, or edited edition without verified permission or public-domain
status. Publish source text only when `COPYRIGHT_LEDGER.md` records: public
domain, explicit written permission, a compatible open license, or approved
limited quotation. Every archival image records creator, date, holding
institution, source link, license, required attribution, and modification
disclosure. Never alter a historical image so as to imply the altered version is
authentic.

## Creative direction (anti-generic mandate)

The site must feel cinematic, spatial, choreographed, intellectually
sophisticated, emotionally powerful, visually memorable, experimental,
respectful, contemporary, and original. **Reject** anything describable as: a
clean modern website; a minimalist historical site; a standard editorial layout;
a museum/biography/religious-org template; a grid of cards; a hero + feature
boxes; alternating text/image sections; a dark page with gold text and particles;
a parchment site; a standard article library; a normal vertical timeline; or a
generic scroll-animation showcase. Do **not** use parchment/beige/brown/gold/
burgundy/dark-green merely because the subject is historical or Jewish. Every
major section has a distinct visual and interactive idea, one primary effect, a
clear narrative purpose, a fallback, and a measurable performance budget.
Stillness is part of the motion system; protect comfortable reading.

## Required interactive experiences

Interactive historical timeline (spatial, not a normal vertical timeline);
Living Text experience (meaningful passage animation, language transitions,
in-place sources); Concept Constellation (explorable network of ideas, with an
accessible list alternative); Animated Works Library (not a card grid); Spatial
Navigation; Archival material as active narrative elements; connected page
transitions. Each must be keyboard accessible and fully usable without motion.

## Technical architecture (evaluate, don't blindly install)

TypeScript; a modern React framework (Next.js suggested); static generation where
practical; MDX with validated front matter (Zod); content schemas kept **separate
from animation code**; motion via GSAP + ScrollTrigger and a component motion lib;
Three.js / React Three Fiber only where meaningful; static-friendly search
(Pagefind/Orama); testing via Vitest + React Testing Library + Playwright;
accessibility via axe-core + manual keyboard + screen-reader review; sitemap,
robots, structured metadata; staging + production; error monitoring; privacy-
conscious analytics. Use the smallest reliable motion stack. Avoid overlapping
tools and vendor lock-in.

## Milestones

- **M0 — Research foundation & creative direction.** Source map, primary sources,
  digitized editions, languages, copyright status, key biographies/scholars,
  verified chronology, disputed topics, common misunderstandings, missing
  sources, research-gaps report, initial bibliography, candidate archival images
  (all logged in the copyright ledger). Produce three creative directions,
  recommend one, receive human selection. **Full production is blocked on this
  selection.**
- **M1 — Creative prototype.** Functional browser prototype of the selected
  direction: opening sequence, navigation, timeline, living text, a works
  transition, concept exploration, an archival interaction, desktop + mobile +
  reduced-motion + weak-device fallback, measured performance. Receive human
  approval.
- **M2 — Launch (staging).** All launch acceptance criteria met (see below).

## Launch acceptance criteria (staging)

Approved IA, visual direction, and motion system; complete design system;
verified source registry and copyright ledger; complete launch pages; functional
search; mobile support; Hebrew-ready RTL architecture; verified citations;
automated testing; accessibility review; SEO; performance review; security
review; deployment docs; correction process; attributions; **no** placeholder
content, broken links, copyright violations, unsourced claims, unidentified
quotations, or critical accessibility failures.

## Final principle

The loop is the production engine, not the strategy. The project succeeds only
when the research is trustworthy, the experience memorable, the design original,
the motion meaningful, the writing excellent, the sources visible, the
performance good, and the experience accessible — and visitors discover something
valuable and return to learn more.
