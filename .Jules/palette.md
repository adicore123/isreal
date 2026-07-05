## 2026-07-05 - Async Form Status Accessibility
**Learning:** In Vite/React apps using conditional rendering for form success states (like `isSent ? <SuccessMessage /> : <Form />`), screen readers often miss the transition. Using `role="status"` and `aria-live="polite"` on the conditionally rendered wrapper is a lightweight pattern to ensure announcements without needing complex focus management.
**Action:** When adding or modifying async forms that replace the form content with a success/error message, wrap the message in a `div` with `role="status"` and `aria-live="polite"`.
