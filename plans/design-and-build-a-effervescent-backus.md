# StratNovo Hero Redesign — Addendum Plan

## Context

The current hero (`src/components/Hero.tsx`) was redesigned once to add a right-side image mosaic (3 stacked Unsplash photos), but it still feels generic and template-like. The right side is just photos — no product ecosystem identity, no depth, no brand distinctiveness. The brief demands a complete rethink: the right side must become a rich, layered **product ecosystem composition** representing StratNovo's four areas (Build / Grow / Learn / Live) through interface fragments, not stock photography.

Only `src/components/Hero.tsx` changes. No other files touched.

---

## New Hero Architecture

### Layout
- Full-viewport height (`min-h-screen`) asymmetric split: ~52% left / ~48% right
- No Container wrapper for the outer shell — full-bleed right panel
- Left: standard horizontal padding matching the site's content grid
- Right: a dark charcoal panel (`#171716`) that bleeds to the edge, acting as the product ecosystem canvas

### Left Side (text)
Unchanged in structure from the brief requirements:
1. Eyebrow: `STRATNOVO / TECHNOLOGY & VENTURES` — small, tracked, muted
2. H1: `"We build what moves ideas forward."` — Instrument Serif, large but not absurd, 3 lines
3. Supporting paragraph: concise, max-width ~440px
4. Two CTAs: solid charcoal primary ("Start a conversation →") + understated secondary ("Explore our work")
5. Bottom area-nav strip (Build / Grow / Learn / Live) anchored to bottom — **now on a beige strip** to visually separate it from the left canvas

### Right Side — The Ecosystem Panel
A dark charcoal full-height panel (`#171716`) serving as the product ecosystem canvas. Inside it, **5 layered elements** using absolute positioning within a `position: relative` container:

**Layer 1 — Background structure:**
Extremely subtle horizontal rule grid inside the dark panel (opacity ~0.06) — gives the panel materiality without decoration.

**Layer 2 — Main interface window (focal point):**
A mid-panel "product window" — slightly lighter dark surface (`#1E1E1C`), with:
- Thin top bar with 3 small dots + product name label
- 2–3 rows of abstracted content lines (varying widths, CSS rectangles)
- A minimal bar chart (4–5 CSS bars, varying heights)
- Status pill ("Active") 
- Labeled: `01 / RUMIA` in top corner — tiny uppercase muted text
- Positioned: centered, taking ~65% width, ~50% height of the panel

**Layer 3 — Learn card (ValidBridge Academy):**
Smaller floated card in top-right area of panel, overlapping the main window:
- Warm beige surface (`#E8E0D2`)
- Small "02 / VALIDBRIDGE" label
- 3 horizontal course-row lines
- A progress bar element
- Slight shadow to create depth

**Layer 4 — Live card (Rumia / Property):**
Bottom-left of panel, partially overlapping main window:
- Property Unsplash photo cropped square (`photo-1560185007-cde436f6a4d0`)
- Overlaid: "03 / RUMIA" label in porcelain pill
- Small status "Available" tag

**Layer 5 — Grow fragment (ValidPost / Marketing):**
Small card floating bottom-right of panel:
- Dark surface slightly lighter than background
- `04 / VALIDPOST` label
- Abstracted "post" UI: avatar circle + text lines + engagement metric row

**Layer 6 — Vertical identity label (right edge):**
Rotated `STRATNOVO` text along the far right edge of the panel — tiny, tracked, porcelain at ~30% opacity. Becomes a subtle brand device.

### Load-in Animation
CSS `@keyframes fadeSlideUp` — 6 elements animate in sequentially:
- Background panel: instant (0ms)
- Left text block: fade + translateY(16px→0), 300ms, ease-out
- Main interface window: 400ms delay
- Learn card: 550ms delay
- Live card: 650ms delay
- Grow fragment: 750ms delay

All animations use `animation-fill-mode: both`.

Define keyframes in `src/index.css` under a named block `@keyframes fadeSlideIn`.

### Hover interactions
- Each product card: `translateY(-3px)` on hover, 250ms ease
- Main window: `translateY(-2px)`, 200ms
- Image in Live card: `scale(1.04)`, 500ms

### Mobile
Stack order: eyebrow → headline → paragraph → CTAs → ecosystem grid (2×2 compact grid of the 4 areas with beige background, no dark panel) → area nav strip.

The dark panel is hidden on mobile. A simple 2×2 grid of area tiles (beige background, label + description) replaces it at mobile breakpoints.

---

## Files to Modify

- **`src/components/Hero.tsx`** — complete replacement of the component
- **`src/index.css`** — add `@keyframes fadeSlideIn` keyframe definition

---

## Verification
Preview the page at the dev server URL. Check:
1. Right dark panel fills full height with no empty zones
2. All 4 product layers are visible and clearly labeled
3. Load-in animation fires on page load (staggered, fast)
4. Hover interactions work on each card
5. No overflow or horizontal scroll
6. Mobile at 375px: dark panel hidden, 2×2 area grid visible
7. No gradients, blobs, or generic AI visuals

---

# StratNovo Website — Implementation Plan

## Context

The current `src/App.tsx` is essentially empty (a blank div). This is a full build from scratch: a complete, production-quality, multi-section website for StratNovo, a technology and digital ventures company spanning software products, digital marketing, ValidBridge Academy, and real estate services.

## Stance & Visual System

**Swiss editorial** — strict grid, strong typographic hierarchy, restrained palette, function-first composition.

### Fonts (Google Fonts, loaded via CSS @import in src/index.css)
- **DM Sans** — body, UI, metadata (neo-grotesk, legible at all sizes)
- **Instrument Serif** — display headings, editorial moments (contrast with DM Sans)
- No mono unless genuinely needed for data labels

### Color Tokens (defined in src/index.css via @theme)
```
--color-porcelain: #F7F5EF      background
--color-beige: #E8E0D2          secondary surfaces, cards
--color-charcoal: #171716       dark sections, primary text
--color-muted: #68655E          secondary text, metadata
--color-border: #D9D4C9         hairlines, dividers
--color-accent: #2C2B28         near-black accent (restrained)
```

### Grid
- Max content width: 1280px
- Gutters: 24px mobile / 40px tablet / 80px desktop
- Column structure: 12-column CSS grid

---

## File Structure

All in `src/`:
- `App.tsx` — root, composes all sections
- `index.css` — fonts, tokens, global styles
- `components/Nav.tsx` — sticky minimal navigation + mobile menu
- `components/Hero.tsx` — editorial hero with four area links
- `components/Positioning.tsx` — company introduction, two-column
- `components/BusinessAreas.tsx` — Build/Grow/Learn/Live index
- `components/Products.tsx` — numbered venture/product rows
- `components/DigitalMarketing.tsx` — growth services section
- `components/Academy.tsx` — ValidBridge Academy section
- `components/RealEstate.tsx` — property services section
- `components/WhatWeBuild.tsx` — technology capabilities
- `components/SelectedWork.tsx` — portfolio index
- `components/HowWeWork.tsx` — process section
- `components/Technology.tsx` — technical credibility
- `components/DarkStatement.tsx` — dark charcoal statement break
- `components/FinalCTA.tsx` — closing call to action
- `components/Footer.tsx` — multi-column footer
- `components/ui.tsx` — shared primitives (Tag, SectionLabel, ArrowLink)

---

## Implementation Notes

### Navigation
- Logo left: "STRATNOVO" in DM Sans medium, tracked wide
- Links center-right: Work | Products | Services | Academy | Properties | About
- CTA: "Start a conversation" — minimal outlined or text button
- Sticky on scroll with subtle background transition
- Mobile: hamburger → full-screen overlay menu with large touch targets

### Hero
- Full-viewport height, porcelain background
- Large Instrument Serif display heading: "We build what moves ideas forward."
- Supporting DM Sans paragraph explaining four capabilities
- Four editorial area links: Build / Grow / Learn / Live — row of minimal label+arrow, not cards
- Subtle geometric composition (CSS grid lines / thin rule accents) — no blobs

### Business Areas (Build/Grow/Learn/Live)
- Numbered editorial rows (01–04), not cards
- Large number in muted tone, area name in display, description in body
- Alternating or asymmetric layout with border-bottom separators

### Products & Ventures
- Numbered index rows: 01 Rumia / 02 ValidBridge Academy / 03 ValidPost / 04 ValidTeam
- Each row: number + name + category tag + short description + status + arrow
- Hover: row background shifts to beige, name scales slightly, arrow translates right
- No invented features — use accurate brief descriptions only

### Digital Marketing
- Strong statement: "Growth is not noise. It is a system."
- Two-column: left = positioning text, right = service index list
- Services as clean text rows with separator lines, no icon grid

### ValidBridge Academy
- Positioning: "Learn skills that create movement."
- Course areas as text index (Digital Skills / Technology / Business / Productivity / Professional Development)
- Avoids course marketplace look — editorial, credible

### Real Estate / Property
- "Better ways to find, manage, and experience property."
- Featured property preview (Unsplash architectural/interior photo)
- Service list: Management / Listings / Accommodation Discovery
- Connection to Rumia product mentioned clearly

### Dark Section
- Full-bleed #171716 background
- Large Instrument Serif porcelain text: "Ideas are cheap.\nExecution is the product."
- Minimal, no decoration

### Footer
- 4-column: StratNovo / Products / Services / Company / Contact
- Very quiet, small DM Sans, muted text, thin top border

### Interactions
- CSS transitions only (transition-all 200-300ms ease)
- Hover states on all interactive rows
- Mobile menu with React useState
- No scroll animations, no parallax, no floating elements

### Unsplash Images
- Hero: abstract architectural/technology composition
- Real estate section: clean interior/architectural photography
- Academy section: purposeful learning/workspace photography
- All images: `images.unsplash.com/photo-{id}?w=...&h=...&fit=crop&auto=format`

---

## Critical Files to Create/Edit

1. `src/index.css` — Google Font imports + Tailwind + custom tokens
2. `src/App.tsx` — compose all section components
3. `src/components/` — all section components listed above

---

## Verification

1. Check dev server hot-reload at preview URL shows full page
2. Visually verify: porcelain background, charcoal text, beige cards, no AI gradients
3. Check mobile at 375px: nav overlay works, hero legible, sections stack cleanly
4. Check all four business areas are clearly represented
5. Verify no invented content (no fake clients, courses, statistics)
