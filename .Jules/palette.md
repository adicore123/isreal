## 2024-11-20 - Contact Form Accessibility
**Learning:** Asynchronous form states without explicit `aria-live` announcements leave screen reader users unaware when a loading state concludes or a form succeeds/fails silently. Furthermore, missing focus outlines on buttons can degrade the experience for keyboard navigators.
**Action:** Add `role="status"` and `aria-live="polite"` to the feedback/success wrapper, and apply standard focus-visible rings (`focus-visible:ring-2 focus-visible:ring-[color]`) to all primary interactive elements like buttons.
