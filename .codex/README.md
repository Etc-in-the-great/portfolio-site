# AI Workflow Layer For Portfolio Site

This directory is the project-level AI collaboration layer. It is not business code and should not contain product implementation.

Use it to keep AI-assisted development controlled, reviewable, portfolio-oriented, and easy to roll back.

## Structure

- `workflows/`: step-by-step operating procedures for planning, review, rollback, and orchestration.
- `skills/`: project-specific skill documents written in Codex skill style.
- `templates/`: reusable task and review templates.

## Project Context

This repository currently includes:

- A deployed personal portfolio.
- An AI Study Assistant static prototype.
- Python Study Utilities roadmap pages.
- A Batch File Renamer dry-run Python script.

The workflow layer should help the project grow through honest, visible, small steps. It should not push the project toward heavy architecture, fake production claims, or hidden complexity.

## Important Status

- Official Codex skills are supported by the current environment, but skills normally need to be installed/discovered by Codex from its configured skill locations.
- The `skills/` folder here is a project documentation system. Treat it as a local source of truth and a candidate skill library.
- The `/skill` command may exist only in clients that expose slash-command UI. Do not assume this workspace folder creates slash commands automatically.
- Multi-agent tools are available in this session, but should be used only when the user explicitly asks for sub-agents or parallel agent work.
- Orchestration workflow here is mostly a documented working method unless paired with actual multi-agent tool calls.

## How To Use

Start with:

1. Read `AGENTS.md`.
2. Use `workflows/task-intake.md` to define the smallest useful task.
3. Use `workflows/scope-control.md` if the task is growing.
4. Use the most relevant project skill under `skills/`.
5. Make a focused change.
6. Use `workflows/review-first.md` and `workflows/review-checklist.md`.
7. Use `workflows/evidence-driven-portfolio.md` when updating claims or documentation.
8. Use `workflows/rollback.md` before risky work.

## Design Goal

The goal is not to make AI do more automatically. The goal is to make AI work smaller, clearer, easier to review, and easier to roll back.
