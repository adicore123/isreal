## UX Learnings
## 2025-05-30 - Added loading spinner and aria labels
**Learning:** The project had icon-only floating buttons with a `title` but no explicit screen-reader `aria-label`, leaving them visually clear but audibly ambiguous. Adding accessible states to async forms (spinner + `aria-live`) drastically improves perception of reliability for users of all abilities.
**Action:** Ensure floating and icon-only interactive elements always use `aria-label` along with visually hidden `aria-hidden="true"` SVG icons. Add `aria-live` polite regions to form feedback.
