# Portfolio Site

A personal portfolio website for showing frontend learning, AI tool ideas, Python utilities, and project progress.

Live site:

https://portfolio-site-sepia-mu.vercel.app

## What This Project Includes

- Personal Portfolio: a deployed portfolio homepage and project case study.
- AI Study Assistant: an API prototype that turns notes into Summary, Key Points, and Review Questions through DeepSeek.
- Learning History Module: a local prototype and case study for saving generated study notes before database integration.
- Python Study Utilities: a student toolkit direction with one dry-run utility already started.
- Batch File Renamer: a safe dry-run Python script that previews batch rename results without changing files.

## Project Structure

- `src/app/`: Next.js app routes, homepage, layout, and global styles.
- `src/app/projects/`: project case study pages and interactive prototypes.
- `python-tools/`: real Python utility scripts and sample files.
- `AGENTS.md`: workspace rules for how Codex should work in this project.

## How To Run

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

## Python Tool Usage

Run the Batch File Renamer dry-run preview:

```bash
cd python-tools/batch-file-renamer
python rename_preview.py --folder ./sample-files --prefix cs101_
```

This script only prints the planned rename result. It does not rename, move, or overwrite files.

## Project Status

- Portfolio: deployed / active.
- AI Study Assistant: DeepSeek API prototype with local Learning History.
- Python Study Utilities: toolkit roadmap with Batch File Renamer dry-run script ready.
- Batch File Renamer: dry-run Python script ready, with conflict warnings.

## Graduation Project Direction

This project can continue evolving into an **AI-assisted Learning and Project Management System**.

Current direction:

- Learning History: save and review AI-generated study notes.
- Database: move local learning records from `localStorage` to Supabase or MySQL.
- Project Management: track project tasks, milestones, README status, and learning progress.
- AI-generated README: generate documentation drafts from project structure and journal notes.
- Admin Features: add basic user management, data views, and project status management later.

For mentor review, this repository includes documentation under `docs/`:

- `docs/project-links.md`
- `docs/mentor-project-overview.md`
- `docs/mentor-message-draft.md`
- `docs/project-architecture.md`
- `docs/screenshots/`

## Project Links

Use `docs/project-links.md` as the unified entry document for mentor review, competition submission, resume reference, graduation project discussion, and project defense preparation.

## Evidence / Demo

- Portfolio deployed: the live site is available at https://portfolio-site-sepia-mu.vercel.app.
- AI Study Assistant: set `DEEPSEEK_API_KEY` in `.env.local` or Vercel Environment Variables to generate real Summary, Key Points, and Review Questions through DeepSeek.
- Learning History Module: Save Note, History Page, and Note Detail are implemented with browser `localStorage`. This is the product prototype stage before connecting a real database.
- Learning History Case Study: `/projects/ai-study-assistant/learning-history` explains the problem, data model, user flow, current scope, and database-ready next steps.
- Batch File Renamer: dry-run Python utility ready. It previews rename results in the terminal and does not rename, move, or overwrite files.
- Screenshots archive: key screenshots are saved under `docs/screenshots/` for mentor review and later presentation materials.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- JavaScript
- Python
- DeepSeek API
- Vercel

## DeepSeek API Setup

Create a local `.env.local` file:

```bash
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

Then restart the dev server:

```bash
npm run dev
```

On Vercel, add the same `DEEPSEEK_API_KEY` under Project Settings -> Environment Variables, then redeploy.

## Learning History Module

Current implementation:

- Saves generated notes with browser `localStorage`.
- Stores `title`, `content`, `summary`, `keyPoints`, `questions`, and `createdAt`.
- Includes a History page for saved notes.
- Includes a Note Detail page for reading a saved note.
- Supports deleting a saved note from local history.
- Includes a portfolio case study page for explaining the product decision and next database milestone.

Current scope:

- No database yet.
- No authentication yet.
- Data is only saved in the current browser.

Future database direction:

- Supabase for a fast hosted prototype.
- MySQL for a more traditional relational database version.

## Next Improvements

- Add real screenshots for project pages.
- Test and deploy the Learning History Case Study page.
- Design the Learning History database schema before connecting Supabase or MySQL.
- Continue improving Batch File Renamer while keeping safe dry-run defaults.
- Build the next Python utility: Study Folder Organizer.
- Improve the AI Study Assistant prompt and add PDF / Text upload later.
