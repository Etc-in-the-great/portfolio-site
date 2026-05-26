# Review Checklist

Use this before calling a task done.

## Scope

- Changed only files related to the task.
- Did not add hidden dependencies.
- Did not rewrite unrelated code.
- Kept the implementation beginner-readable.

## Product Value

- The change improves a real workflow or portfolio signal.
- Status labels are honest: prototype, mock data, roadmap, dry-run, or production-ready.
- The user can see or understand the improvement quickly.

## Code Quality

- Names are readable.
- Structure follows the existing project.
- Comments explain only non-obvious logic.
- No large architecture added without need.

## Verification

Run what is practical:

- Frontend: `npm run lint`
- Frontend: `npm run build`
- Python: targeted script run or `python --version` when environment matters
- Manual UI check when visual behavior changed

## Final Report

Tell the user:

- What changed
- Which files changed
- Which commands ran
- Whether they passed
- What to learn from the change
- The next small step
