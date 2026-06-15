## 2024-06-15 - Dynamic States & Menu Accessibility
**Learning:** Found that dynamic success states like the contact form were silently updating for screen reader users. Also observed that mobile menus and floating action buttons without explicit ARIA labels/controls left keyboard/screen-reader users guessing their purpose.
**Action:** Always add `role="status" aria-live="polite"` to dynamic success messages. Always ensure interactive toggle buttons have `aria-expanded` and `aria-controls` linked to their target containers, and provide `aria-label`s for icon-only buttons.
