# Playwright Test Results

**Date:** 2026-03-19
**Project:** Lecture_Playwright_MCP

## Summary
- **Total tests:** 10
- **Passed:** 7
- **Failed:** 3

## Detailed Failure Report
The following 3 tests failed:

1. **TC-007: Broken Link Detection [EXPECTED FAIL]**
   - **Test:** `should verify broken image returns 200 status`
   - **File:** `07_broken_link.spec.js`
   - **Error:** Expected 200, Received 404 (Intentional failure test)

2. **TC-008: Page Title Verification [EXPECTED FAIL]**
   - **Test:** `should have correct page title`
   - **File:** `08_wrong_title.spec.js`
   - **Error:** Expected "Wrong Title That Does Not Exist", Received "The Internet" (Intentional failure test)

3. **TC-009: Timeout Handling [EXPECTED FAIL]**
   - **Test:** `should find element within timeout`
   - **File:** `09_timeout_page.spec.js`
   - **Error:** Timeout of 1ms reached for finding element (Intentional failure test)
