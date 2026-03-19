# Test Result Analysis & Failure Details

**Date:** 2026-03-19
**Source:** `04_parse_results.js` execution

## Execution Summary
- **Total Tests:** 10
- **Passed:** 7
- **Failed:** 3

## Detailed Failure Information

The script identified the following 3 failure cases. These tests were specifically designed as part of the STLC practice to simulate real-world failure scenarios.

### 1. Broken Image Verification
- **Test Title:** `should verify broken image returns 200 status`
- **File:** `07_broken_link.spec.js`
- **Symptom:** The test expected an HTTP 200 status for an image that is actually missing (returning 404).

### 2. Page Title Validation
- **Test Title:** `should have correct page title`
- **File:** `08_wrong_title.spec.js`
- **Symptom:** The test asserted the page title should be "Wrong Title That Does Not Exist", which is incorrect for "The Internet" demo app.

### 3. Timeout Handling Simulation
- **Test Title:** `should find element within timeout`
- **File:** `09_timeout_page.spec.js`
- **Symptom:** The test was configured with an extremely low timeout of 1ms, resulting in an expected failure when searching for a non-existent element.

---
*Note: All failures recorded were 'Expected Fails' as per the test suite design.*
