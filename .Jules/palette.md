## 2024-05-17 - React Forms Success Unmounting Feedback
**Learning:** In a single-page React app, when a form completely unmounts upon successful submission and is replaced by a success message, screen readers often stay silent, leaving users unaware of the successful state change.
**Action:** Always wrap success message replacements (that unmount forms) with `role="status"` and `aria-live="polite"` so screen readers will announce the new content automatically without requiring a focus shift.
