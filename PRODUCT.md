# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers and security-conscious maintainers who need to decide which dependency findings to act on now. Contributors also need a clear, public route for proposing product and website changes.

## Product Purpose

zero-shelter combines dependency scanner reports, ranks findings with documented rules, and shows available upgrade guidance. The website explains direct use, CI, and coding-agent integration.

## Positioning

The judgement layer reconciles overlapping scanner findings and ranks the result with inspectable, deterministic rules. It does not add a runtime LLM, telemetry, or network calls of its own.

## Operating Context

The CLI runs locally in JavaScript projects, including terminal, CI, and coding-agent workflows. Contributions follow a public Issue-to-PR process; product contribution rules live in the source repository, while website bugs and changes use this repository's Issue Forms.

## Capabilities and Constraints

- Reads supported npm/pnpm audit and OSV-Scanner output. Lockfiles and available scanners determine live collection; saved reports can also be supplied.
- Produces terminal, JSON, HTML, and SARIF output, plus a coding-agent hook.
- Compares current findings with accepted risks recorded in a baseline. New findings and expired acceptances can fail CI.
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

- Link product explanations and examples to their source and reproduction steps.
- Preserve deterministic results across runs and environments.
- Keep judgement local; state that invoked scanners may access the network and repository configuration.
- Keep public contribution and security-reporting boundaries explicit.

## Accessibility & Inclusion

The public site must preserve keyboard navigation, visible focus, semantic headings, readable Korean and English typography, and responsive layouts.
