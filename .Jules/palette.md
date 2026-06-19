## 2024-03-24 - Hidden Elements Retaining Tab Order
**Learning:** Elements hidden with `opacity-0` and height transitions (like a mobile accordion menu) are still focusable by keyboard, leading to an invisible "ghost focus" state.
**Action:** When animating visibility, always combine with `aria-hidden={!isVisible}` on the container and `tabIndex={isVisible ? 0 : -1}` on all interactive child elements to explicitly remove them from the accessibility tree and keyboard tab order when collapsed.
