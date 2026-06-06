## 2023-11-20 - Adding Accessibility Labels to Icon Buttons
**Learning:** Icon-only buttons using title attributes do not reliably communicate their purpose to screen readers and need proper aria-labels.
**Action:** Replaced title with aria-label on icon-only buttons for screen readers and added aria-hidden="true" to the SVGs inside.
