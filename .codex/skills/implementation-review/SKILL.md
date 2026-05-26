---
name: implementation-review
description: Review AI-assisted code or documentation changes for scope control, bugs, missing verification, rollback safety, and beginner-readable structure. Use after implementation, before final delivery, or when the user asks whether a change is safe.
---

# Implementation Review

## Procedure

1. Check changed files and scope.
2. Look for likely bugs, broken imports, route issues, styling regressions, or unclear naming.
3. Check whether dependencies were added.
4. Check whether the change is reversible.
5. Run practical verification commands when available.
6. Report findings before summaries if issues exist.

## Review Priorities

- Correctness
- Scope control
- Rollback safety
- Portfolio quality
- Beginner readability

## Output Shape

If issues exist:

- Findings
- Risks
- Verification
- Suggested fix

If no major issues:

- Review result
- Verification
- Remaining risk
- Next small step
