# Plan: Hero Ecosystem Redesign + ValidBridge Architecture Distinction

## Context

The current hero right-side panel uses four generic Unsplash photo panels (BUILD / GROW / LEARN / LIVE). The product brief requires replacing these with actual product interface fragments from StratNovo's portfolio, and updating product representations throughout to correctly distinguish ValidBridge LMS (the technology platform, under BUILD) from ValidBridge Academy (the learning experience, under LEARN).

The hero should communicate: **StratNovo builds real software.** The strongest visual is a central ValidBridge LMS interface, flanked by Rumia, ValidPost, and ValidTeam fragments.

---

## Changes Required

### 1. `src/components/Hero.tsx` — Replace right-side photo grid with product UI ecosystem

**Current:** 2×2 `PhotoPanel` grid with Unsplash photos for BUILD / GROW / LEARN / LIVE.

**New layout (desktop right column):** A composed interface collage:

```
┌─────────────────────────────────────────┐
│                                         │
│   ┌──────────────────────────────────┐  │
│   │  VALIDBRIDGE LMS  (large, center)│  │
│   │  Learning infrastructure         │  │
│   │  [Course nav / progress / paths] │  │
│   └──────────────────────────────────┘  │
│                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │  RUMIA   │ │VALIDPOST │ │VALIDTEAM │ │
│  │ Property │ │Publishing│ │Collab    │ │
│  └──────────┘ └──────────┘ └──────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

Implementation approach:
- Replace the existing `PhotoPanel` sub-component and 2×2 photo grid with a new `ProductEcosystem` sub-component rendered inline in Hero.tsx.
- No external image dependencies — build all UI fragments as styled JSX using StratNovo's existing color tokens (`#171716`, `#F7F5EF`, `#E8E0D2`, `#B89A72`, `#68655E`).

**ValidBridge LMS fragment (large, ~60% height):**
- Dark header bar: `VALIDBRIDGE LMS` label + `Learning Infrastructure` tag
- Left sidebar: course navigation list (3–4 items, one "active" highlighted)
- Main area: learning path progress bar + two module rows with completion states
- Bottom strip: "Live Lesson" indicator dot + student count
- Visual tone: charcoal/porcelain, strong typography, no color gimmicks

**Rumia fragment (small card):**
- Property card: address label, availability badge, clean thumbnail placeholder (warm beige gradient)

**ValidPost fragment (small card):**
- Content publishing panel: scheduled post queue, platform icons (dots), publish status

**ValidTeam fragment (small card):**
- Workspace panel: task list with 2–3 items, member avatars (initials), status dots

All fragments use the same porcelain-charcoal-warm palette. No gradients from Unsplash.

**Updated headline copy:**
- Remove: existing headline
- Add: `We build what moves ideas forward.`
- Subtext: `StratNovo builds digital products, technology systems, growth experiences, learning platforms, and property solutions.`
- Keep: eyebrow tag `STRATNOVO / TECHNOLOGY & VENTURES`
- Keep: two CTAs

---

### 2. `src/components/Products.tsx` — Split ValidBridge into two entries

**Current:** Single "ValidBridge Academy" row.

**New:** Two rows replacing it:
- `02` — ValidBridge LMS, category: "Learning Technology", status: "Active", type: "StratNovo Platform"
  - Description: The core learning infrastructure. Courses, learning paths, assessments, live lessons, progress tracking, and instructor tools.
- `03` — ValidBridge Academy, category: "Professional Training", status: "Active", type: "StratNovo Venture"
  - Description: The education and training experience powered by ValidBridge LMS.

Re-number ValidPost → `04`, ValidTeam → `05`.

---

### 3. `src/components/BusinessAreas.tsx` — Clarify BUILD and LEARN descriptions

**Current BUILD:** category "Software & Technology"  
**New BUILD description:** Explicitly list ValidBridge LMS, Rumia, ValidPost, ValidTeam, custom software, automation, AI systems.

**Current LEARN:** category "ValidBridge Academy"  
**New LEARN description:** Clarify this is the education/training experience built on top of ValidBridge LMS — not the platform itself.

No structural changes needed, just copy updates in the `areas` data array.

---

### 4. `src/components/Academy.tsx` — Surface the LMS/Academy distinction

Add a short framing line near the top: e.g. a `<Tag>` or label that reads `Powered by ValidBridge LMS` to visually connect Academy → LMS without merging them.

Update the section label from "ValidBridge Academy" to "ValidBridge Academy" with a secondary `Powered by ValidBridge LMS` note underneath.

---

## Files to Modify

| File | Change scope |
|---|---|
| `src/components/Hero.tsx` | Full right-column replacement + headline copy |
| `src/components/Products.tsx` | Data array: split ValidBridge, renumber |
| `src/components/BusinessAreas.tsx` | Data array: copy update for BUILD and LEARN |
| `src/components/Academy.tsx` | Minor framing addition (LMS attribution) |

No new files needed.

---

## Visual Token Reference (existing palette)

```
#171716  charcoal / near-black (text, dark surfaces)
#F7F5EF  porcelain / off-white (page background, light surfaces)
#E8E0D2  warm sand (section backgrounds)
#B89A72  warm gold (accent, eyebrow)
#68655E  muted warm grey (secondary text)
#1A1917  near-black (hero right bg)
```

---

## Verification

1. Preview loads without build errors (hot reload via Vite on $PORT).
2. Desktop hero right column: ValidBridge LMS interface is the dominant visual, three smaller product fragments below/beside it.
3. Mobile: right column hidden (`hidden lg:grid` preserved), left copy is correct.
4. Products section: 5 rows total (Rumia, ValidBridge LMS, ValidBridge Academy, ValidPost, ValidTeam).
5. BusinessAreas BUILD entry reads as software/platform focused; LEARN reads as Academy experience.
6. Academy section attributes itself to ValidBridge LMS visually.
