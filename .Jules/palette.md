## 2024-05-24 - Accessible Async Form States
**Learning:** For async form submissions in this app, visual success messages were not announced by screen readers, and buttons lacked keyboard focus outlines and clear disabled cursor states.
**Action:** Always add `role="status"` and `aria-live="polite"` to success/error message wrappers. Add `disabled:cursor-not-allowed` and explicit focus styles (`focus-visible:ring-2 focus-visible:ring-offset-2`) to submit buttons to ensure state changes are fully accessible visually and via screen readers.
