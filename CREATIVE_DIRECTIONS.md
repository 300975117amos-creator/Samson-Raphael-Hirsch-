# CREATIVE_DIRECTIONS.md — First Assignment

Three radically different creative directions for the Rabbi Samson Raphael Hirsch
digital experience. They are not palette variations of one idea: they differ in
**core metaphor, composition, navigation model, motion language, technology, and
risk profile.** Each is specified against all 22 required fields. A human must
select one before M1 implementation begins (R-D01).

> **Language note.** Vague words are avoided. Where "cinematic," "spatial," etc.
> appear, they are followed by concrete composition/motion/interaction/tech
> detail. Any quotation used in a built prototype must first clear
> `COPYRIGHT_LEDGER.md`; the copy examples below are placeholders, not final text.

---

# Direction A — "Field of Reading"
### (Cinematic & spatial)

**1. Name.** Field of Reading.

**2. Central concept.** The visitor moves *through* a dark, deep three-dimensional
field in which printed text, manuscript fragments, and archival scraps hang at
different depths like dust in a shaft of light. Nothing is a flat page pasted on a
background; you travel between layers of text that resolve, as you approach, into
structures — a Torah page, the facade of the Frankfurt synagogue, the spine-wall
of a library, a timeline drawn in light. The organizing feeling is *depth of
field*: what you attend to sharpens; the rest stays as legible atmosphere.

**3. Connection to Hirsch's life or ideas.** Hirsch's method is layered reading —
translation beneath original, commentary beside verse, the surrounding world held
in relation to Torah. A field of text at varying depths literalizes
*interpretation as depth*: the reader chooses a focal plane. His life also moves
across real places (Hamburg → Oldenburg → Emden → Nikolsburg → Frankfurt), which
the spatial field renders as travel through distinct atmospheres.

**4. Homepage opening, scene by scene.**
- *Scene 1 (Silence):* near-black field, slow-moving film grain, one distant point
  of light; faint ambient tone available only if the visitor has enabled sound.
- *Scene 2 (Language appears):* fragments of Hebrew, German, and English — drawn
  only from verified titles/dates/places — drift forward at three depth planes,
  parallaxing as the pointer or device tilts (gated by reduced-motion).
- *Scene 3 (Structure forms):* the fragments align onto an implied page grid, then
  the grid tilts into space and reads as an architectural elevation (a building of
  text).
- *Scene 4 (Identity reveal):* the name **שמשון רפאל הירש / Samson Raphael Hirsch**
  is cut *through* the text field as a mask; behind the mask, a print-textured
  portrait resolves from dot-screen to detail as the camera settles. Never a plain
  static hero image.
- *Scene 5 (Central tension):* one restrained, source-grounded statement about
  Torah and engagement with the surrounding world fades up in the cleared focal
  plane.
- *Scene 6 (Enter the world):* the camera pushes through the portrait's eye-line;
  the building of text unfolds into the main navigation — a line in the field
  becomes the timeline; a spine becomes the works library.

**5. Navigation behavior.** A persistent, quiet top-left wordmark + a "chapters"
control that opens a full-field navigation: large section titles float at depth;
choosing one flies the camera to that region. A always-available, conventional
text menu (and URL routes) sits behind a visible "Menu / Index" control for
keyboard and no-motion users — navigation never depends on the fly-through.

**6. Motion language.** Camera-led cinematic moves (1.2–2.4s, emphasized easing)
for openings and section entry; responsive parallax and depth-of-field focus pull
on hover/scroll; ambient grain and slow light drift. Reading views lock the camera
and still the field entirely.

**7. Typography.** A high-legibility serif for reading (English/German with full
diacritics) paired with a grotesque for UI; a licensed Hebrew face with nikud
support, never a novelty face. Titles use large scale and print-texture masking;
body text is fixed, calm, 60–72ch.

**8. Color & atmosphere.** Deliberately **not** parchment/gold. A near-black
ink-blue ground; paper-white text; one restrained signal color (a cold vermilion
used only for focus, active state, and "you are here"). Light is the emotional
tool, not hue. A light reading mode (ink on warm-white, still no parchment) for
long-form pages.

**9. Timeline concept.** A line of light recedes into the field; dated events sit
as depth-staggered nodes. The visitor flies along it (guided narrative mode) or
scrubs it (exploration). Filters (chronology/topic/location/works) reorganize the
node cloud with animated transitions. Accessible mode: a vertical, static,
keyboard-navigable list/table with the same data.

**10. Works library concept.** Book spines stand in a shallow spatial landscape;
approaching a spine opens its face; a face opens to verified metadata, a cleared
sample page, and links. Works re-sort by language/topic/date/difficulty with
smooth spatial reordering. Non-motion mode: a filterable list of the same items.

**11. Concept exploration.** A depth-arranged constellation of ideas (Torah im
Derech Eretz, education, community, symbolism, language…). Selecting a node pulls
it to the focal plane and reveals related sources/works/paths. Accessible
alternative: an expandable outline/list with the same relationships.

**12. Archival material treatment.** Portraits/letters/title pages appear as
layered planes with masked reveals and controlled zoom-to-detail; annotations
animate in as callouts; original and translation shown side by side, translation
labeled. Authentic archival material is always visually distinguished from
interpretive rendering (a persistent "archival" marker + provenance on open).

**13. Desktop behavior.** Full WebGL field, pointer-parallax, camera fly-throughs.

**14. Mobile adaptation.** Reduced depth (2–3 planes), gyroscope parallax optional
and off by default, camera moves shortened; heavy scenes lazy-loaded; effect tier
chosen by device capability, not a shrunk desktop scene.

**15. Reduced-motion adaptation.** Camera moves replaced by cross-fades; grain and
drift disabled; the field renders as a still, layered composition; all travel
becomes instant section changes. Designed, not stripped.

**16. Proposed technology.** Next.js + TypeScript; **React Three Fiber / Three.js**
for the field; GSAP + ScrollTrigger for choreography; MDX + Zod content; Pagefind
search. WebGL is capability-gated with a non-WebGL DOM fallback of the same IA.

**17. Performance risks.** Highest of the three: WebGL init cost, texture memory,
mobile GPU/battery, and the discipline never to load the field on reading pages.
Requires strict tiering and lazy loading (R-P01).

**18. Accessibility risks.** Highest: pointer-parallax vs "avoid pointer-following
motion" (must be gated), non-WebGL fallback parity, focus management inside a 3D
canvas, and ensuring all data has a non-visual equivalent (R-A01/R-A03).

**19. Copyright risks.** Uses archival imagery prominently → image-rights clearance
is on the critical path (R-C03/AST-020). Portrait cannot ship until cleared.

**20. Most memorable moment.** The name cut as a mask through a field of text, the
portrait resolving from print-dot to detail behind it, then the camera passing
*through* into the world. High "show a friend" potential.

**21. Reasons it could fail.** WebGL could feel heavy or gimmicky if motion isn't
excellent; fallbacks could feel second-class; image-rights delays could hollow out
its archival core; risk of drifting toward "dark page + particles" cliché if
discipline slips.

**22. Implementation complexity.** **High.** Largest engineering + performance +
accessibility surface; longest prototype.

---

# Direction B — "Set in the Text"
### (Typography-, language-, and text-driven)

**1. Name.** Set in the Text.

**2. Central concept.** The whole experience behaves like a living typesetting and
commentary environment. There is (almost) no photographic imagery: **text is the
architecture.** The recurring structure is the classical commentary page — a
central text ringed by margins of commentary and translation (echoing a
Mikraot-Gedolot / Talmud-page layout) — reinterpreted as the site's grid. Words
become navigation; a phrase opens into commentary; a term morphs between Hebrew,
German, and English by variable-font interpolation. Black, white, and one precise
color; editorial rhythm over spectacle.

**3. Connection to Hirsch's life or ideas.** Hirsch *is* text: a translator and
commentator whose life's work was setting Torah beside the German language and the
modern reader. A site made of type, with commentary in the margins and living
translation, mirrors both his method and the printed page he worked in. The
language-morph enacts his bridging of Hebrew and German.

**4. Homepage opening, scene by scene.**
- *Scene 1 (Silence):* white field (or its dark-mode inverse), a single blinking
  typesetter's caret.
- *Scene 2 (Language appears):* one line sets itself, letter by letter, first in
  Hebrew, then interpolating via variable-font axes into German, then English —
  the *same* verified phrase, transforming, translation always labeled.
- *Scene 3 (Structure forms):* the line multiplies into a column; margins open on
  both sides; the commentary-page grid assembles from type alone — no images.
- *Scene 4 (Identity reveal):* the central column resolves into the name in large
  kinetic type; weight and width animate along variable axes so the name "sets"
  into place.
- *Scene 5 (Central tension):* a short source-grounded statement occupies the
  center column; a margin note (clearly labeled editorial) glosses one word.
- *Scene 6 (Enter the world):* margin words slide out to become the main index; the
  central column scrolls into the first chapter. A word literally *becomes*
  navigation.

**5. Navigation behavior.** Navigation lives in the margins as set words; a
"Contents" control opens a full-screen index of large type. Fully keyboard-first
(it is mostly links and text), URL-routed, and identical with motion off.

**6. Motion language.** Type-native motion only: setting/kerning animations,
variable-axis interpolation (weight/width/optical size), masked line reveals,
margin notes unfurling, cross-language morphs. Slow and legible; reading columns
never animate while being read.

**7. Typography.** The primary system. One or two variable fonts with real axes
(a text face + a display face) plus a licensed Hebrew variable/quality face with
nikud. Strong hierarchy, responsive measure, dedicated Hebrew and German
composition. Language morphs are always labeled as translation.

**8. Color & atmosphere.** Black on white (and a true dark inverse), one precise
accent (e.g., a single ink red) for links, notes, and "current." No photographic
texture, no parchment, no gradient atmosphere — the rhythm comes from type,
whitespace, and the margin structure.

**9. Timeline concept.** A typographic ledger: years set as large figures running
down a column; events as entries whose margins hold sources; scrolling advances
the year with figures re-setting. Filters restyle/reflow the list. It is *already*
list-shaped, so the accessible version is the primary version.

**10. Works library concept.** A bibliography that behaves like a living
colophon/catalog: works as set entries with title, edition, language, translator,
year, and status; hovering/focusing expands a note; sorting reflows the list along
language/date/topic axes. Covers only where rights-cleared; otherwise pure type.

**11. Concept exploration.** A "glossary that thinks": concepts as terms; selecting
one reflows the page so related terms, sources, and works gather around it as
margins — a text network rather than a node graph. Inherently list/outline
accessible.

**12. Archival material treatment.** Sparing. When an image is cleared, it enters as
a framed plate with full provenance and is clearly marked as archival; the default
mode quotes *text* from documents (cleared originals) rather than showing images,
lowering copyright dependency.

**13. Desktop behavior.** Multi-column commentary grid; margins active; language
morphs on interaction.

**14. Mobile adaptation.** Margins collapse into inline, tap-to-open notes; single
column; morphs simplified to cross-fades; layout is naturally responsive because
it is text.

**15. Reduced-motion adaptation.** Morphs become instant labeled swaps or
side-by-side static bilingual display; setting animations become plain text.
Because the base is type, reduced-motion loses almost nothing.

**16. Proposed technology.** Next.js + TypeScript; **variable fonts** + CSS +
lightweight GSAP/SVG for type motion; **no WebGL required**; MDX + Zod; Pagefind.
Smallest, most robust stack.

**17. Performance risks.** Lowest. Main cost is font payload (Latin + German
diacritics + Hebrew nikud + variable axes) → subsetting and `font-display`
discipline (R-P02). Otherwise light JS.

**18. Accessibility risks.** Lowest. Text-first is inherently accessible; watch
that language morphs announce changes, `lang`/`dir` are correct, and RTL Hebrew is
first-class. Contrast is easy to guarantee.

**19. Copyright risks.** Lowest. Leans on public-domain *original* text and labeled
translation, minimizing image and modern-translation exposure.

**20. Most memorable moment.** A single phrase morphing Hebrew → German → English
along variable-font axes, translation labeled — a "show a friend" moment made of
pure type, matched to Hirsch's own bridging work.

**21. Reasons it could fail.** Could read as austere or "just a nice text site" if
the type motion and margin system aren't executed with real craft; less
immediately spectacular to audiences expecting imagery; demands excellent
multilingual type licensing.

**22. Implementation complexity.** **Medium-low.** Fastest to a strong prototype;
most of the risk is craft and font licensing, not engineering.

---

# Direction C — "Two Worlds, One Binding"
### (Experimental & conceptually unexpected)

**1. Name.** Two Worlds, One Binding.

**2. Central concept.** A conceptual system built directly from *Torah im Derech
Eretz*. The screen is perpetually **two worlds meeting at a seam**: on one side,
the world of Torah (Hebrew letterforms, sacred text, vertical/eternal); on the
other, *Derech Eretz* — the surrounding 19th-century world (German civic life,
science, the city, the printed newspaper, horizontal/temporal). The interface
*lives on the binding between them* — the gutter of an open book, the join of two
facing pages. You navigate by moving the seam, weaving the two sides, or opening
the binding. It is deliberately unlike any historical-site layout.

**3. Connection to Hirsch's life or ideas.** This is Hirsch's central, contested,
generative idea made structural: not Torah *or* the world, but Torah *and* the
world held in one binding. Every page enacts the relationship rather than merely
describing it. It also foregrounds the honest tension (permanence/transformation,
tradition/modernity) the brief asks the site to reflect.

**4. Homepage opening, scene by scene.**
- *Scene 1 (Silence):* a single vertical seam of light down the center of a dark
  field — the binding.
- *Scene 2 (Language appears):* to the right of the seam, German/Latin text of the
  surrounding world; to the left, Hebrew — verified fragments only — both drifting
  toward the seam.
- *Scene 3 (Structure forms):* the two text-fields fold like facing pages meeting
  at the binding; a book (or a woven cloth of two thread colors) forms at the seam.
- *Scene 4 (Identity reveal):* the name assembles *along the binding itself*, half
  its strokes drawn from Hebrew-side letters, half from Latin-side letters, closing
  together at the seam.
- *Scene 5 (Central tension):* the source-grounded statement about Torah and the
  world sits astride the seam, one clause on each side.
- *Scene 6 (Enter the world):* the binding "opens"; the two pages spread to become
  the two primary axes of navigation (works/text on one side, historical world on
  the other), the seam remaining as a persistent home control.

**5. Navigation behavior.** A persistent central seam is the home/axis control.
Sections open by "turning" toward one world or the other (directional page
transitions). A conventional index is always available via a visible control and
URL routes; the seam metaphor never traps keyboard users.

**6. Motion language.** Directional, binding-based transitions (page turns, seam
slides, weave interlacings); a subtle two-directional tension (Hebrew reveals
RTL→seam, Latin LTR→seam). Reserved and meaning-bearing, not decorative. Reading
pages settle to a single calm world.

**7. Typography.** Two co-equal type voices held in balance: a licensed Hebrew face
(nikud, RTL, never novelty) and a German/Latin face, deliberately weighted so
**neither reads as secondary** — the whole point. Display type can bridge the seam;
translations always labeled.

**8. Color & atmosphere.** Two restrained palettes meeting at the seam — e.g., a
cool ink world and a warm-neutral world (explicitly **not** parchment/gold), with
the seam as the one bright axis. The contrast is conceptual (two worlds), not
decorative.

**9. Timeline concept.** A double timeline along the seam: Hirsch's life/works on
one side, surrounding historical/communal events on the other, aligned by year so
cause-and-context sit face to face. Guided or exploratory; filters reflow both
rails. Accessible mode: a two-column table aligned by date.

**10. Works library concept.** Works arranged by how they face the two worlds
(inward Torah commentary vs outward-facing writing like the Nineteen Letters and
Jeschurun), positioned relative to the seam; opening a work spreads it across the
binding with metadata and cleared samples. Non-motion: a grouped, filterable list.

**11. Concept exploration.** A **weave/loom**: concepts are threads that cross the
seam, showing which ideas bind Torah and world (education, community, symbolism,
public life). Selecting a thread highlights its crossings and related sources.
Accessible alternative: a relationships outline/list.

**12. Archival material treatment.** Documents open across the binding — original on
one side, translation/analysis on the other; letters and title pages placed to
show the two-worlds relation. Provenance and an "archival vs interpretation" marker
always present; images gated on rights clearance.

**13. Desktop behavior.** Full two-world seam with directional transitions and the
weave concept map.

**14. Mobile adaptation.** The seam becomes a horizontal divider or a swipe between
two stacked worlds; page-turns become slide transitions; the weave simplifies to a
two-column crossing list.

**15. Reduced-motion adaptation.** Page-turns/weaves become instant, clearly
labeled side-by-side states; the seam stays as a static divider; all two-world
content remains reachable without any transition.

**16. Proposed technology.** Next.js + TypeScript; GSAP + ScrollTrigger + SVG (for
the seam/weave/page-turn); **optional** light WebGL only for the opening if it
earns its cost; MDX + Zod; Pagefind. Middle-weight stack.

**17. Performance risks.** Moderate. Page-turn/weave choreography and any optional
WebGL opening need budget discipline, but the core can be DOM/SVG and stay light.

**18. Accessibility risks.** Moderate-high conceptually: the two-world/seam model
must not confuse orientation or reading order; needs careful focus order,
`dir`/`lang` correctness across the seam, and a genuinely equivalent non-metaphor
layout. Strong RTL parity is central (and on-brief).

**19. Copyright risks.** Moderate. Uses some archival imagery (gated) but can lean
on cleared original text vs labeled translation across the binding.

**20. Most memorable moment.** The name assembling *along the binding*, half from
Hebrew strokes and half from Latin strokes, closing at the seam — a single image of
the whole thesis. Strong originality and recognizability.

**21. Reasons it could fail.** The metaphor is the biggest risk: executed poorly it
reads as a gimmick or forces content into an awkward split; two co-equal type
worlds are hard to balance; orientation/accessibility of the seam needs real care;
could over-simplify a nuanced idea into a binary.

**22. Implementation complexity.** **Medium-high.** Less GPU-heavy than A but
concept-heavy; the seam/weave interactions and dual-RTL/LTR balance are demanding
to get right and to keep accessible.

---

# Comparison at a glance

| | A — Field of Reading | B — Set in the Text | C — Two Worlds, One Binding |
|---|---|---|---|
| Core metaphor | Depth of field / travel through text | Living commentary page / type | The binding between Torah & world |
| Spectacle | Highest | Restrained, craft-led | High, concept-led |
| Tech weight | Heavy (WebGL) | Light (variable fonts) | Medium (SVG/GSAP, opt. WebGL) |
| Performance risk | High | Low | Medium |
| Accessibility risk | High | Low | Medium-high |
| Copyright exposure | High (imagery) | Low (text) | Medium |
| Time to strong prototype | Long | Short | Medium |
| Cliché-avoidance | Good if disciplined | Strong | Strongest (most original) |
| Multilingual/RTL centrality | Present | Strong | Central |

---

# Recommendation (honest)

**Primary recommendation: Direction B — "Set in the Text," with one signature
element of Direction C grafted in: the two-worlds/binding idea as the concept-map
and timeline layout.**

Reasoning, without flattery:

1. **It is the truest to the subject.** Hirsch's enduring footprint is *text* —
   translation, commentary, the printed page. A type-and-language system embodies
   the "World Built From Words" concept more honestly than imagery-led spectacle,
   and its signature moment (a phrase morphing Hebrew→German→English, translation
   labeled) *is* his life's work.
2. **It de-risks the two hardest constraints.** It has the **lowest copyright
   exposure** (leans on public-domain originals + labeled translation, minimal
   imagery — and image rights are currently uncleared, R-C03) and the **lowest
   accessibility and performance risk** (text-first, no required WebGL). Those are
   the constraints most likely to sink the project, and the brief explicitly ranks
   accuracy/rights/accessibility above spectacle.
3. **It reaches a trustworthy, spectacular prototype fastest**, letting us validate
   motion quality and the editorial/citation system early — which everything else
   (including any future "Ask the Library") depends on.
4. **Grafting C's binding metaphor** into the concept-constellation and the
   dual-rail timeline gives B a genuinely original, recognizable spatial idea and
   makes Hebrew first-class by construction — addressing B's one weakness (that it
   can read as austere) without taking on A's GPU/rights burden.

**When to choose otherwise.** If the primary goal is maximum visual spectacle and a
budget exists to clear archival imagery and to engineer/QA a WebGL experience to a
high bar across devices, choose **A**. If you want the boldest single conceptual
statement and are willing to invest in balancing the two-world interaction and its
accessibility, choose **C** in full.

**This is a recommendation, not a decision.** Per `PROJECT_BRIEF.md` and R-D01, no
full implementation begins until a human selects a direction. Mood boards and
motion reference reels were not fabricated for this document; they should be built
into the M1 prototype of whichever direction is chosen, where motion quality can be
demonstrated for real rather than asserted.
