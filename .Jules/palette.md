## 2024-03-20 - Combining Visual and Semantic Async Feedback
**Learning:** Adding a loading spinner provides necessary visual feedback, but it's not enough for screen reader users. Screen readers need semantic context (`aria-busy="true"`) to understand the form is processing. Furthermore, success messages that appear dynamically need `aria-live="polite"` so the change is announced without requiring focus to shift.
**Action:** Always pair visual loading states (like spinners) with `aria-busy` on submit buttons, and use `aria-live` regions for dynamic success/error messages.
