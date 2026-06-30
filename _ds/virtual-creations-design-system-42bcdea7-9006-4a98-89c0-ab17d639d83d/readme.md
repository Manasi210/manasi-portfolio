# Virtual Creations — Design System

> The brand system for **Manasi's Virtual Creations**, the creative portfolio of
> **Manasi Lodha** — VR developer & immersive experience designer (Swansea, UK).
> *"Crafting Virtual Experiences with Imagination and Innovation."*

This system turns a plain Wix portfolio into a **bright, energetic, immersive**
brand: deep-space surfaces, electric-cyan light, chunky display headlines, and
bold animated reveals — built to showcase VR / AR / XR work made in Unity & Unreal.

---

## Sources

- **Live site:** https://manasilodha01.wixsite.com/portfolio
  - Home · https://manasilodha01.wixsite.com/portfolio
  - About · https://manasilodha01.wixsite.com/portfolio/about-4
  - Portfolio · https://manasilodha01.wixsite.com/portfolio/portfolio
- **LinkedIn:** https://www.linkedin.com/in/manasi-lodha-3b56a41b2/
- **Instagram:** https://www.instagram.com/_i_am_manasi
- **Email:** manasiylodha@gmail.com

> ⚠️ The original site imagery is hosted on `static.wixstatic.com` and could not be
> downloaded into this project (cross-origin). The UI kit uses styled placeholders
> and drop-in image slots — **add your real project screenshots/renders** to make
> it sing. See CAVEATS at the bottom.

The visual direction (colors, type, motion) was **defined for this system** — the
source site is intentionally plain; the brief was to make it "lively."

---

## The work it showcases

Nine immersive projects (engine in brackets):

1. **Empathy Machine for Hard to Hear** *(Unity, VR)* — accessibility empathy sim. VR IK full-body embodiment, Meta Haptics, Yarn dialogue, reactive NPCs.
2. **Vault Raiders: The Quest to Save Verdantia** *(Unity, VR)* — action adventure. XR Interaction Toolkit, hand grab/throw, power-ups, boss fights.
3. **Harry Potter Magical Mini-Golf** *(Unity, PC VR)* — story-driven golf across HP scenes; portals, animator system, Sorting Hat finale.
4. **Gambling Room** *(Unity, VR)* — AI-driven den. Yarn dialogue, head-tracking NPCs, dynamic lighting, in-game music player.
5. **Climate Change Awareness** *(Unity, VR)* — educational recycling mini-games, ambisonic audio, recycled-art gallery.
6. **Modern Architectural Office Designs** *(Unreal)* — early environment design; open-concept, wood + white, digital displays.
7. **Modern Office Interiors** *(Unreal)* — detailed head-office environment, themed sections, material/lighting craft.
8. **Cafe Design** *(Unity)* — intricate interior environment.
9. **Unreal Animation** *(Unreal)* — cinematic scene, tense woman on a ship; character + environment animation.

Themes that recur: **empathy & social impact**, **AI-driven NPCs (Yarn)**,
**environment/architectural craft**, **playful game worlds**.

---

## CONTENT FUNDAMENTALS — how Virtual Creations writes

**Voice:** first-person, warm, curious, mission-driven. Manasi speaks as a maker
who cares about *why* immersive tech matters, not just *how*. Example from the
About page: *"My goal is to work on impactful projects that drive change, using
immersive technology to create meaningful experiences."*

**Tone:** enthusiastic and exploratory but grounded in craft. Pairs big ideas
("generate empathy", "push the boundaries") with concrete technical detail
("inverse kinematics", "Yarn dialogue", "XR Interaction Toolkit").

**Person:** **I / my** for bio and reflection ("I am Manasi Lodha…", "What I
Learned"). **We** when describing collaborative project goals ("we aimed to
create"). **You** to invite the reader into an experience ("Imagine stepping into
a restaurant where you can't hear a word").

**Casing:**
- Display headlines & nav: **UPPERCASE** ("PORTFOLIO", "ABOUT ME", "CONTACT").
- Project titles: **Title Case** ("Empathy Machine for Hard to Hear").
- Kickers / eyebrows / engine tags: **UPPERCASE mono** ("UNITY · VR", "CASE STUDY").
- Body: sentence case.

**Sentence shapes:** short punchy hook → expand with specifics. Rhetorical
questions to open a case study ("Can Virtual Reality Help Us Experience the World
Through Someone Else's Eyes?"). Feature lists are scannable, one line each.

**Emoji:** the source site uses emoji as feature bullets (✅ ✨ 🎮 ♻️ 🎯). In THIS
system we **retire decorative emoji** in favor of mono labels, neon dot-bullets,
and engine badges — cleaner and more "designed." Keep emoji only in casual
social captions if desired. (Documented choice — flag if you'd rather keep them.)

**Words the brand likes:** immersive, embodiment, reactive, dynamic, atmospheric,
empathy, impact, world-building, craft, push the boundaries, meaningful.

**Avoid:** corporate filler, hype without specifics, hashtag spam in long copy.

---

## VISUAL FOUNDATIONS — the look

**Overall mood:** an immersive "void" you step into — deep near-black space lit by
electric neon. Bright & playful energy comes from saturated brand pops against the
dark, NOT from light backgrounds. Reads as XR/game-tech, modern, alive.

**Color:**
- **Base** is dark: `--void #07060E` → `--bg-0 #0B0A14` (page) → `--bg-1 #12101F`
  (cards) → `--bg-2 #1A1830` (raised). Hairline borders are translucent white.
- **Primary** is **electric cyan `#19E3FF`** — the signature light. Used for
  glows, primary actions, links, VR tags, gradient text.
- **Pops:** magenta `#FF3DCB` (AI/energy), violet `#7B5BFF` (Unreal/depth),
  lime `#B6FF3C` (AR/success), amber `#FFB23D` (warm highlight). Use ONE pop per
  composition as the co-star to cyan — never all at once except in the aurora gradient.
- **Signature gradient — Aurora:** cyan → violet → magenta. Used sparingly for
  hero text, key CTAs, hero glows. `--grad-aurora`.
- Text: near-white headings (`--ink-1`, faint violet), lavender-grey body
  (`--ink-2`), dim captions (`--ink-3`).

**Type:** **Unbounded** (chunky geometric display, weights up to 900) for
headlines — playful, rounded, confident. **Space Grotesk** for body/UI — techy,
geometric, neutral. **Space Mono** for kickers, engine tags, code, metadata.
Headlines run **tight tracking (-0.03em)**, **uppercase or title case**, often
huge (`--fs-mega` clamps to 160px). Mono kickers run **wide (0.22em), uppercase**.

**Backgrounds:** dark radial "void" gradient (`--grad-void`) as the page base.
Optional faint **violet grid** (`.vc-grid-bg`, 44px) for an XR/holographic floor
feel. Imagery (project renders) sits in cards or full-bleed with a dark
gradient "protection" scrim so white display text stays legible. No light/paper
backgrounds. Subtle noise/grain is welcome but optional.

**Imagery vibe:** saturated, cinematic game renders — cool-leaning (cyans, deep
blues, violets) with warm key-light accents. Treat real screenshots with a slight
contrast/saturation boost and pair with a dark scrim. Where imagery is missing,
use a **neon gradient placeholder** carrying the project's initials + engine tag.

**Motion (bold reveals — the brand asks for energy):**
- Easing: **expo-out `--ease-out`** for big reveals, **overshoot bounce
  `--ease-bounce`** for playful pops (buttons, badges, cards landing).
- Patterns: `vc-rise` (translateY 40px + fade), `vc-pop` (scale 0.86→1),
  `vc-pulse-glow` (breathing neon), `vc-float` (idle hover lift), `vc-sheen`
  (gradient sweep across CTAs).
- Durations: 150 / 320 / 600 / 900ms. Reveals are generous and staggered.
- Always gate entrance animations so reduced-motion + print show the end state.

**Hover states:** lift (`translateY(-4px)`), **intensify glow** (cyan box-shadow
grows), border brightens to `--cyan`, image scales 1.04 inside its frame. Links
brighten to `--cyan-bright`.

**Press states:** quick scale-down `scale(0.97)` + glow dims — tactile, fast (150ms).

**Borders:** 1px translucent white default; on focus/active they become solid
neon. Buttons & tags often have a **1px neon ring as part of the glow** rather
than a hard border.

**Radii:** generous and rounded to match Unbounded's friendliness —
chips/pills `--r-pill`, buttons `--r-pill` or `--r-md`, cards `--r-lg` (24px) /
`--r-xl` (32px) for hero panels. Nothing sharp-cornered.

**Shadows & glows:** two systems. **Elevation** = soft black drop shadows
(`--shadow-card`, `--shadow-pop`) for depth on the dark base. **Glow** = colored
neon halos (`--glow-cyan`, `--glow-magenta`, …) for emphasis/interactivity. Cards
use elevation; interactive/brand elements add glow.

**Glass / blur:** sticky nav and overlays use `--glass-fill` + `--blur-glass`
(saturate + 16px blur) for a holographic HUD feel. Use blur for floating chrome
over content, not for everything.

**Cards:** `--bg-1` fill, 1px `--line` border, `--r-lg` radius, `--shadow-card`.
On hover: lift + cyan border + glow. Project cards are image-forward with a
gradient scrim, engine badge top-left, title + tags bottom.

**Layout:** max width `--container 1240px`, fluid `--gutter`. Big vertical rhythm
(`--section-y` up to 160px). Asymmetric, energetic grids over rigid symmetry.
Sticky glass nav; generous negative space around huge headlines.

**Transparency & blur:** used for HUD chrome (nav, badges over imagery, modals)
and for the grid backdrop — purposeful, never muddy.

---

## ICONOGRAPHY

- The source Wix site has **no custom icon system** — it used emoji as bullets and
  small PNG social icons. This system **standardizes on [Lucide](https://lucide.dev)**
  (via CDN) — a clean, geometric, 1.75px-stroke line set that matches Space Grotesk
  and Unbounded's geometry. *(Substitution flagged: Lucide is a stand-in for the
  emoji bullets; swap if you prefer a different set.)*
- **Usage:** line icons only, `stroke-width: 1.75`, sized 18–24px inline, 28–40px
  as feature markers. Color inherits `currentColor`; brand actions use `--cyan`.
- **Engine / tech identity** is communicated through **mono text badges**
  (`UNITY`, `UNREAL`, `VR`, `AR`, `AI`) — not logos — colored by `--tag-*` tokens.
- **Neon dot bullets** (a small glowing `--cyan` circle) replace emoji checkmarks
  in feature lists.
- **Emoji:** retired from product UI (see Content Fundamentals). Allowed only in
  informal social captions.
- Load Lucide: `<script src="https://unpkg.com/lucide@latest"></script>` then
  `lucide.createIcons()`, or use inline `<i data-lucide="name">`.
- `assets/` holds the brand wordmark lockup and social glyphs.

---

## INDEX — what's in this project

**Foundations**
- `styles.css` — root entry (consumers link this). `@import` lines only.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`
- `fonts/fonts.css` — Unbounded · Space Grotesk · Space Mono (Google Fonts CDN)
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Motion, Brand)

**Components** (`components/`) — `window.VirtualCreations.<Name>`
- `core/` — Button, Badge, Tag, Card
- `media/` — ProjectCard
- `navigation/` — Navbar, FilterTabs
- `forms/` — Field (input)
Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a directory `@dsCard`.

**UI kit** (`ui_kits/portfolio/`)
- `index.html` — interactive portfolio (hero → filter → grid → project detail)
- `Navbar.jsx` · `Hero.jsx` · `ProjectGrid.jsx` · `ProjectDetail.jsx` · `Footer.jsx`
- `data.js` — the nine projects as data

**Slides** (`slides/`) — `@dsCard group="Slides"`, 1280×720
- `TitleSlide.jsx` · `ProjectSlide.jsx` · `FeatureSlide.jsx` · `QuoteSlide.jsx` · `index.html`

**Meta**
- `assets/` — wordmark + glyphs
- `SKILL.md` — Agent-Skill manifest (for Claude Code use)
- `readme.md` — this file

---

## CAVEATS / OPEN QUESTIONS

- **Project imagery** couldn't be fetched from Wix — placeholders/slots are in
  place. Please drop real renders into `assets/projects/` and the UI kit slots.
- **Fonts** load from Google Fonts CDN (not bundled binaries). Fine for web; for
  offline/production, self-host `.woff2` and update `fonts/fonts.css`.
- **Icons** use Lucide as a documented substitution for the site's emoji bullets.
- **Emoji** were intentionally retired from product UI — tell me if you want them back.
