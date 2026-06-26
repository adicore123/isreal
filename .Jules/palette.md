## 2024-05-18 - Missing Outline Focus on Floating Elements
**Learning:** Floating Action Buttons (FABs) and fixed-position mobile navigations using Tailwind often lack explicit `focus-visible` styles, resulting in no focus indication for keyboard navigation.
**Action:** When auditing Tailwind-based interfaces, systematically check all fixed/absolute interactive elements for `focus-visible:outline` utility classes to ensure keyboard accessibility.
