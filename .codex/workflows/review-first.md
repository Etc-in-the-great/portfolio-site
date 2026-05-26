# Review-First Workflow

Use this before calling work complete.

## Review Order

1. Scope: did the change stay within the request?
2. Behavior: does the feature or document say what it actually does?
3. Safety: can the change be rolled back?
4. Verification: did lint, build, script run, or manual review pass?
5. Portfolio value: does this make the project clearer or more demonstrable?

## For Frontend Changes

- Check route paths.
- Check responsive layout risk.
- Check status labels such as `prototype`, `mock data`, or `dry-run`.
- Run `npm run lint` and `npm run build` when practical.

## For Python Tool Changes

- Keep dry-run default for file operations.
- Check path handling and conflict warnings.
- Run the targeted script with sample files.
- Do not add destructive behavior without explicit user request.

## Final Response

Lead with issues if any exist. If no major issue exists, summarize verification and the next small step.
