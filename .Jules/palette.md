## 2024-05-24 - [Floating Actions & Mobile Menu A11y]
**Learning:** Found that floating action buttons (like WhatsApp/Phone) often miss keyboard focus states and rely only on `title` attributes, which isn't sufficient for screen readers. Additionally, mobile menu toggles frequently miss dynamic `aria-expanded` and `aria-controls` attributes, and both needed `focus-visible` states.
**Action:** Always verify icon-only floating buttons have explicit `aria-label`s and `focus-visible` styles. For toggle buttons, dynamically update `aria-label` or `aria-expanded` based on state.
