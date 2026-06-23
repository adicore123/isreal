## 2025-01-01 - Missing screen reader context for floating actions
**Learning:** Floating action buttons (FABs) like WhatsApp and Phone links rely solely on `title` attributes which are insufficient for screen readers, and lack keyboard focus indicators.
**Action:** Always ensure icon-only floating buttons have explicit `aria-label` attributes, inner icons have `aria-hidden="true"`, and include `focus-visible` outline styles for keyboard navigation.
