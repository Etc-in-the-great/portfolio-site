# Multi-Agent Orchestration Workflow

Use this only when the user explicitly asks for multi-agent, sub-agent, delegation, or parallel agent work.

## When To Use

Good cases:

- Independent research questions.
- Independent implementation slices with separate files.
- Parallel review of a risky change.
- One agent implements while another verifies a clearly separate area.

Avoid when:

- The next step is small.
- The work is tightly coupled.
- The main agent needs the answer immediately.
- File ownership would overlap.

## Roles

- Lead agent: owns product direction, task split, integration, final review.
- Explorer agent: answers a narrow codebase or product question.
- Worker agent: edits a clearly owned file set.
- Reviewer agent: checks risks, tests, and regressions.

## Delegation Rules

- Assign clear ownership.
- Give bounded tasks.
- Avoid duplicate work.
- Tell workers not to revert other people's changes.
- Integrate and review all results before final response.

## Example Split

- Lead: define MVP and final integration.
- Explorer: inspect existing patterns.
- Worker A: update one UI component.
- Worker B: update documentation.
- Reviewer: run checks and inspect edge cases.

## Final Integration

Before finishing:

- Review every changed file.
- Check for conflicting assumptions.
- Run practical verification commands.
- Summarize what each agent contributed.

## Status

This workflow is supported as a working method. Actual sub-agent execution depends on whether the current Codex environment exposes multi-agent tools and whether the user explicitly authorizes their use.
