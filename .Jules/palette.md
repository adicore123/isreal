## 2024-05-15 - RTL Skip to Content Positioning
**Learning:** In Right-to-Left (RTL) applications (like Hebrew), absolutely positioned elements that appear on screen (like a "Skip to content" link on focus) should be positioned using `right` instead of `left` to feel natural for the reading direction (e.g., `top-4 right-4` instead of `top-4 left-4`).
**Action:** Always check the text direction (`dir="rtl"`) when absolutely positioning new accessible elements to ensure they appear in the culturally correct flow.
