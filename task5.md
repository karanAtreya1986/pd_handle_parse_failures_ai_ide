# Task 5: Retrieved Mock Jira Tickets

**Date:** 2026-03-19
**Source:** `curl http://localhost:3001/rest/api/2/search`

## Ticket Results (JSON)

```json
{
  "startAt": 0,
  "maxResults": 50,
  "total": 2,
  "issues": [
    {
      "id": "1",
      "key": "STLC-1",
      "self": "http://localhost:3001/rest/api/2/issue/STLC-1",
      "fields": {
        "project": {
          "key": "STLC"
        },
        "summary": "Test Failure: should verify broken image returns 200 status",
        "description": "*Automated Test Failure Report*\n\n*Test:* should verify broken image returns 200 status\n*File:* 07_broken_link.spec.js\n*Duration:* 1200ms\n\n*Error Message:*\n{code}\nExpected 200, received 404\n{code}\n\n\n\n*Reported by:* STLC Automation Pipeline\n*Date:* 2026-03-19T07:10:51.895Z",
        "issuetype": {
          "name": "Bug"
        },
        "priority": {
          "name": "High"
        },
        "status": {
          "name": "Open"
        },
        "created": "2026-03-19T07:10:51.904Z",
        "labels": [
          "automation",
          "regression",
          "stlc-pipeline"
        ],
        "assignee": null
      }
    },
    {
      "id": "2",
      "key": "STLC-2",
      "self": "http://localhost:3001/rest/api/2/issue/STLC-2",
      "fields": {
        "project": {
          "key": "STLC"
        },
        "summary": "Test Failure: should have correct page title",
        "description": "*Automated Test Failure Report*\n\n*Test:* should have correct page title\n*File:* 08_wrong_title.spec.js\n*Duration:* 800ms\n\n*Error Message:*\n{code}\nExpected \"Wrong Title\", received \"The Internet\"\n{code}\n\n\n\n*Reported by:* STLC Automation Pipeline\n*Date:* 2026-03-19T07:10:51.912Z",
        "issuetype": {
          "name": "Bug"
        },
        "priority": {
          "name": "High"
        },
        "status": {
          "name": "Open"
        },
        "created": "2026-03-19T07:10:51.915Z",
        "labels": [
          "automation",
          "regression",
          "stlc-pipeline"
        ],
        "assignee": null
      }
    }
  ]
}
```
