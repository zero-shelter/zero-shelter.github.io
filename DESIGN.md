---
name: zero-shelter
description: A quiet, evidence-led static reading surface for security decisions.
colors:
  paper: "#f5f6f2"
  paper-deep: "#e7e9e3"
  ink: "#101314"
  forest: "#1c2520"
  moss: "#526659"
  signal: "#6f8f0d"
  lime: "#c8f33a"
  npm-mark: "#C12127"
  terminal: "#161b1c"
  mist: "#e7ebe3"
  line: "rgba(16,19,20,.17)"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(3.6rem,6vw,6.4rem)"
    fontWeight: 650
    lineHeight: 1.01
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.012em"
  mono:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
rounded:
  control: "2px"
  language-selector: "999px"
spacing:
  page-inline: "clamp(1.25rem,7vw,8rem)"
  section-block: "clamp(5rem,11vw,10rem)"
components:
  command-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.mono}"
    rounded: "{rounded.control}"
    padding: ".75rem .8rem .75rem 1rem"
  command-button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.control}"
    padding: ".75rem .8rem .75rem 1rem"
---

# Design System: zero-shelter

## Overview

**Creative North Star: "The Signal Path"**

This is a reading surface for a judgement that should feel calm, checkable, and complete. Paper-like fields, near-black evidence blocks, lime signals, serif statements, and monospaced facts create the contrast between considered interpretation and inspectable output.

**Brand Mark:** `assets/zero-shelter-mark.png` is the official square source mark. It appears beside the zero-shelter wordmark and supplies the browser icon; its dark field and lime signal are intentional and must not be recoloured or redrawn in CSS.

**Key Characteristics:**

- Editorial rather than dashboard-like.
- The official mark's near-black, white, and lime signal define the product's contrast system.
- Static-first: home, method, use, and about are separate GitHub Pages routes. The home page gives the product path once, then directs visitors to GitHub and npm; Korean copy loads the pinned Pretendard webfont from jsDelivr, with local system fallbacks.

## Colors

The palette combines a clean paper reading field with the official mark's near-black evidence field and lime signal.

| Token | Value | Role |
| --- | --- | --- |
| Paper | `#f5f6f2` | Main reading ground |
| Paper Deep | `#e7e9e3` | Documentary band |
| Ink | `#101314` | Official-mark black and primary decision surface |
| Forest | `#1c2520` | Secondary dark field and structural emphasis |
| Moss | `#526659` | Small ordinal and restrained structural detail |
| Signal | `#6f8f0d` | Accessible lime-derived emphasis on paper |
| Lime | `#c8f33a` | Official-mark signal on dark fields only |
| npm mark | `#C12127` | Unmodified npm service mark in the home start link only |
| Terminal / Mist | `#161b1c` / `#e7ebe3` | Inverted terminal pair |
| Terminal accents | `#f5a68d`, `#d8ed7e`, `#c8f33a` | Severity and score reinforcement; labels remain visible |

### Primary

- **Ink:** the dominant dark evidence field, taken from the official mark.
- **Lime:** the official mark's signal color; use it for action or live status only on dark fields, never as the only carrier of status.

### Neutral

- **Paper / Paper Deep:** the primary reading field and alternating documentary band.
- **Ink:** default text and the strongest action surface.
- **Terminal / Mist:** the inverted evidence pair for the signature terminal example.
- **Line:** quiet division between related records.

**The Evidence-First Rule.** Use colour to reinforce a visible label, rank, or position; do not encode severity, state, or meaning by colour alone.

## Typography

**English Display and Body Font:** Pretendard Variable, with platform sans-serif fallbacks. It shares the Korean system's clear proportions without adding another network font.

**Korean Display and Body Font:** Pretendard Variable, loaded from the pinned jsDelivr v1.3.9 dynamic subset; Apple SD Gothic Neo, Noto Sans KR, and Malgun Gothic are fallbacks.

**Label/Mono Font:** SFMono-Regular with Consolas and Liberation Mono fallbacks.

**Character:** A single bilingual sans-serif system keeps statements and body copy equally direct; mono type marks commands, evidence, indices, and machine-readable facts.

### Hierarchy

- **Display:** large, confident sans-serif headlines with compact leading; reserve for the hero and section conclusions.
- **Body:** readable sans-serif paragraphs at a relaxed 1.55 line-height; constrain explanatory copy to narrow measures.
- **Label:** small, uppercase mono overlines with increased tracking for section context.
- **Mono:** compact terminal and code text; preserve commands as literal, unwrapped evidence where space permits.

**The Statement-and-Record Rule.** Use the display weight for a human conclusion and mono type for the data or command that supports it; avoid treating code as decoration.

## Layout

The home page uses a wide editorial canvas with a two-column hero, a short three-link route map, and one dark start section for GitHub and npm. Method, Use, and About are separate pages, each with one focused page hero before its supporting content. Generous spacing and hairline rules organize repeated records without card clutter.

At 850px and below, the hero, evidence, and scope layouts become single-column; the four-step method becomes two columns, and the use cases stack. At 540px and below, method steps become one column, hero actions stack, the primary navigation is absent, and page padding tightens without reducing the headline hierarchy.

## Elevation & Depth

The page is almost flat. Depth comes from tonal bands, inversion, and rules; only the terminal sheet and command buttons use offset shadows to suggest a physical record placed on the paper. The terminal sheet uses `14px 16px 0 rgba(23,36,31,.11)`; command buttons use a short moss or signal offset shadow that contracts on hover.

**The Flat-by-Default Rule.** Do not add soft shadows, floating cards, gradients, glass effects, or decorative charts.

## Shapes

Forms are squared and documentary. Controls use the shallow `2px` corner radius; rectangular sections, rules, and grid divisions do most of the grouping. The terminal's faint circular line is a contained signature detail, not a reusable decorative motif.

## Components

### Navigation

The header is a compact three-part grid: wordmark, route links, and utility actions. English route labels are `HOW IT WORKS`, `USE`, `CONTRIBUTE`, and `ABOUT`; Korean labels are `작동 방식`, `사용하기`, `기여하기`, and `소개`. It stays fixed at the top while scrolling on a solid paper surface. The current page is exposed with `aria-current="page"` and the active language with `aria-pressed`, not colour alone. At narrow widths, replace the route links with an explicit menu trigger; never hide navigation without a reachable replacement.

### Command Buttons

The command is the primary action and remains visibly executable: mono command text, a separated uppercase copy label, high-contrast fill, and a small offset shadow. On hover, translate the control by `2px` in both axes and reduce its shadow; respect reduced-motion preferences by removing the transition.

### Terminal Sheet

The signature component is an inverted figure, not an application dashboard. Keep its caption, command, labelled finding rows, explicit scores, remedy, and evidence line in a single bounded sheet. Severity labels, ordering, and numbers must remain legible without relying on their accent colours.

### Feedback

Copy feedback is a compact fixed status message with `role="status"` and `aria-live="polite"`. It appears briefly near the bottom centre, never shifts document layout, and must retain the current language.

### Language Selector

English and Korean use one compact two-segment control with the documented `999px` radius. The active language is the dark filled segment; the inactive option remains quiet until hover or focus. Localize accessible names, document language, metadata description, title, and transient copy feedback together; do not substitute translated content with a visually different layout.

### Footer

The footer is a utility register, not a second hero. Keep the wordmark, `Apache-2.0`, the organization GitHub link, and a quiet route list. Do not repeat the product description or add a competing repository action to the header.

### Start Links

The home-page start section may use the unmodified GitHub and npm vector marks only as secondary link identifiers, paired with their service names and direct destinations. Render them as inline SVG with explicit dimensions, never as auto-sized replaced images. They must never compete with the zero-shelter mark or suggest sponsorship or endorsement.

### Page Actions

The home flow explains the product path once: read findings, reconcile overlap, then keep the next fix. It links to the method page rather than duplicating the primary navigation. Method and Use each end with one direct route to the public README, so a visitor can continue from concept to installation or CI detail.

### Maintainer Cards

The About section may identify public contributors as maintainers. Render them as a quiet, ruled register: public GitHub avatar, name, handle, and one icon-only GitHub link per person. Do not imply organization-owner status unless it is independently established and intended for publication.

## Do's and Don'ts

### Do:

- **Do** preserve the paper, near-black, and lime hierarchy across both languages.
- **Do** pair each signal with a textual label, rank, or numerical value.
- **Do** keep the site static and privacy-respecting. The pinned Pretendard font and public GitHub profile avatars are the only allowed external visual resources.
- **Do** keep keyboard focus, the skip link, semantic headings, and reduced-motion behavior intact when changing the interface.

### Don't:

- **Don't** introduce dashboard chrome, score gauges, alert-banner styling, or celebratory empty-state imagery.
- **Don't** turn every section into a rounded card or add decorative visual noise.
- **Don't** add analytics, embedded media, or visual dependencies beyond the pinned font and explicitly listed public GitHub avatars.
