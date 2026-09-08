---
name: zero-shelter
description: Visual specifications for the zero-shelter public website.
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

# Website design

The site uses static pages, a light background, dark code examples and the existing lime brand accent. Preserve the colors, type sizes and spacing defined above.

`assets/zero-shelter-mark.png` is the official mark and browser icon. Do not recolor or redraw it. Existing GitHub and npm marks identify their links; keep the service names beside them and do not imply endorsement.

## Typography and color

Use Pretendard Variable for English and Korean, with the existing system fallbacks. The pinned jsDelivr v1.3.9 subset and public GitHub profile avatars are the existing external visual resources; do not add others. Commands use SFMono-Regular, Consolas or Liberation Mono.

Body text uses a 1.55 line height. Reserve the large display size for page and section headings. Keep commands literal and readable; allow horizontal scrolling when a narrow screen cannot fit an example.

Use `#f5f6f2` for the page, `#e7e9e3` for alternate sections and `#101314` for primary text. Dark examples use `#161b1c` with `#e7ebe3` text. The lime accent `#c8f33a` belongs on dark backgrounds; use `#6f8f0d` for emphasis on the light page. Severity, active state and actions also need visible text or accessible attributes.

## Layout

Home has a two-column introduction, links to the supporting pages and a GitHub/npm start section. Method, Use, Contribute and About each have a page heading followed by the relevant guidance.

At 850px and below, the main two-column sections stack. At 540px and below, method steps and hero actions stack and page padding narrows. Navigation must remain reachable through the mobile menu.

Keep the existing rules, square sections and 2px control corners. The language selector uses its existing 999px radius. Retain the terminal's `14px 16px 0 rgba(23,36,31,.11)` offset shadow and the command buttons' small offset shadow. Do not add gradients, floating cards, glass effects, decorative charts or score gauges.

## Controls and content

- Keep the header fixed on an opaque background. Mark the current route with `aria-current="page"` and the selected language with `aria-pressed`.
- Copy buttons show the literal command and a copy label. Respect reduced-motion preferences when animating hover or focus.
- Copy feedback uses `role="status"` and `aria-live="polite"`, follows the selected language and does not shift page layout.
- Translate visible text, accessible names, document language, title, description and copy feedback together. English and Korean use the same layout.
- Examples need a version, reproducible input and a source link. Label excerpts and omissions. Do not invent scores, remediation counts or claims that a report proves safety.
- Method and Use link to the README for installation and detailed behavior. Keep the footer focused on route links, GitHub and the license.
- Public maintainer entries preserve names, handles and GitHub links. Do not imply organization ownership from contribution activity.

Keep keyboard focus, the skip link, semantic headings and reduced-motion behavior. Do not add analytics, embedded media or new external visual dependencies.
