
## 2024-06-11 - Communicating State to Screen Readers
**Learning:** Found interactive elements (like the mobile menu toggle and async submit buttons) that visually show state changes but fail to communicate these changes to screen readers. Relying solely on visual changes leaves visually impaired users unaware of context.
**Action:** Always include `aria-expanded` and `aria-controls` on elements that toggle visibility of other content. Add `aria-busy={true}` on forms or buttons during async submissions.
