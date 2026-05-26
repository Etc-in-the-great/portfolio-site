# Small-Step Iteration Workflow

Use this when adding a new feature, page, project section, Python utility, or documentation improvement.

## Principle

Ship one useful, reviewable step at a time.

## Steps

1. Define the user-visible improvement.
2. Identify the smallest file set needed.
3. Avoid adding dependencies unless the task cannot be solved with the current stack.
4. Implement one slice:
   - one page section,
   - one prototype interaction,
   - one Python script behavior,
   - or one documentation improvement.
5. Verify with the smallest useful command.
6. Report what changed and what should wait.

## Stop Conditions

Stop and reassess if:

- the change touches unrelated project areas,
- the implementation needs new architecture,
- the UI copy starts making claims that are not true yet,
- or rollback would become hard.
