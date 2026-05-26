# Rollback Workflow

Use this before risky edits and after failed experiments.

## Before Risky Work

1. Check whether the target project is a git repository.
2. Check current status.
3. Identify the exact files you expect to touch.
4. Keep the task small enough to undo manually.

## Safe Change Rules

- Do not use destructive commands unless the user explicitly asks.
- Do not revert user changes.
- Do not mix unrelated cleanup with feature work.
- Prefer editing one area at a time.

## If Something Breaks

1. Stop expanding the change.
2. Identify the likely cause from errors or diffs.
3. Apply one focused fix.
4. Re-run the smallest useful verification command.
5. If the fix is uncertain, report the risk clearly.

## If Git Is Available

Useful non-destructive commands:

- `git status --short`
- `git diff -- <file>`
- `git diff --stat`

Avoid destructive commands such as reset or checkout unless explicitly requested.

## If Git Is Not Available

- Keep edits limited and documented.
- Use clear file names under `.codex/`.
- Report every changed file.
