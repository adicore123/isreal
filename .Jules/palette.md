## 2024-11-20 - Skip-to-content links for React apps
**Learning:** React SPAs without skip links fail WCAG guidelines because keyboard users have to tab through every header navigation link to reach main content.
**Action:** Always add an absolutely positioned skip-to-content link mapped to `<main id="site-content" tabIndex={-1}>` at the start of the DOM.
