## 2024-11-20 - Enhanced Async Form Feedback
**Learning:** Combining a visual spinner with aria-busy and an aria-live region for the success message provides a complete, accessible feedback loop for asynchronous form submissions, preventing confusion for both sighted and screen-reader users during the wait.
**Action:** Always pair visual loading states (like spinners) with aria-busy and announce dynamic success/error states using aria-live.
