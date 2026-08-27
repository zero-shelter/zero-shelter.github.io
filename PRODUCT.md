# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers and security-conscious maintainers who need to decide which dependency findings to act on now. Contributors also need a clear, public route for proposing product and website changes.

## Product Purpose

zero-shelter turns dependency-scanner output into a short, deterministic list of the fixes that need attention. It exists because reviewing long, overlapping security reports can cost more attention than making the fixes.

## Positioning

The judgement layer reconciles overlapping scanner findings and ranks the result with inspectable, deterministic rules. It does not add a runtime LLM, telemetry, or network calls of its own.

## Operating Context

The CLI runs locally in JavaScript projects, including terminal, CI, and coding-agent workflows. Contributions follow a public Issue-to-PR process; product contribution rules live in the source repository, while website bugs and changes use this repository's Issue Forms.

## Capabilities and Constraints

- Reads npm audit and optional osv-scanner output.
- Produces terminal, JSON, HTML, and SARIF output, plus a coding-agent hook.
- Uses a baseline so CI can fail only on newly introduced findings.
- Product contributions require a public Issue before implementation, except focused documentation or test fixes that may use the PR template directly.
- Security vulnerabilities must not be reported in public Issues or pull requests.

## Brand Commitments

The official zero-shelter mark is `assets/zero-shelter-mark.png`. The public website is bilingual in Korean and English and uses separate static routes on GitHub Pages. Copy is direct, evidence-led, and avoids claims beyond public project documentation.

## Evidence on Hand

- Official website source: this repository.
- Product source and contribution guide: `https://github.com/zero-shelter/zero-shelter` and `CONTRIBUTING.md`.
- Project governance: `GOVERNANCE.md` in the product repository.
- Security reporting policy: `SECURITY.md` in the product repository and this repository's security policy.
- Public website Issue Forms: `.github/ISSUE_TEMPLATE/website_bug.yml` and `.github/ISSUE_TEMPLATE/website_change.yml`.

## Product Principles

- Keep one inspectable path from raw finding to next action.
- Preserve deterministic results across runs and environments.
- Keep project data local by default.
- Keep public contribution and security-reporting boundaries explicit.

## Accessibility & Inclusion

The public site must preserve keyboard navigation, visible focus, semantic headings, readable Korean and English typography, and responsive layouts.
