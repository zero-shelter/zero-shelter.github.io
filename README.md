# zero-shelter.github.io

Public website for [zero-shelter](https://github.com/zero-shelter/zero-shelter), hosted at [zero-shelter.github.io](https://zero-shelter.github.io).

The static pages introduce the product, explain its workflows, and link to installation, contribution, and security guidance. English and Korean content is maintained in `script.js`; the HTML also contains the English text for readers without JavaScript.

## Local preview

Serve the repository with a static HTTP server, for example `python3 -m http.server 8000`, then open `http://localhost:8000`. There is no build step.

## Changes

Use the repository's Website bug or Website change Issue Form. Include the affected page, expected result, accessibility impact, and validation. Website work is tracked in [Website Operations](https://github.com/orgs/zero-shelter/projects/2). Product implementation belongs in the product repository.

Check every changed page in English and Korean, with and without JavaScript, on desktop and narrow screens. Verify links, language selection, navigation, command copying, keyboard focus, and the accuracy of product examples. Keep the default HTML and translations in agreement.

GitHub Pages publishes the approved default branch. This repository does not contain product releases or private operating procedures. Follow [SECURITY.md](./SECURITY.md) for private vulnerability reporting.
