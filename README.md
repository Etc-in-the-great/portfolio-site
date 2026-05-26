# Portfolio Site

A personal portfolio website for showing frontend learning, AI tool ideas, Python utilities, and project progress.

Live site:

https://portfolio-site-sepia-mu.vercel.app

## What This Project Includes

- Personal Portfolio: a deployed portfolio homepage and project case study.
- AI Study Assistant prototype: an interactive static prototype for turning notes into Summary, Key Points, and Review Questions.
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
- AI Study Assistant: interactive static prototype.
- Python Study Utilities: toolkit roadmap with Batch File Renamer dry-run script ready.
- Batch File Renamer: dry-run Python script ready, with conflict warnings.

## Evidence / Demo

- Portfolio deployed: the live site is available at https://portfolio-site-sepia-mu.vercel.app.
- AI Study Assistant: static frontend prototype with mock data. It shows the intended flow from notes to summary, key points, and review questions, but no API is connected yet.
- Batch File Renamer: dry-run Python utility ready. It previews rename results in the terminal and does not rename, move, or overwrite files.
- Screenshots to add later: portfolio homepage, AI Study Assistant prototype state, and Batch File Renamer dry-run preview. These screenshots are not included yet.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- JavaScript
- Python
- Vercel

## Next Improvements

- Add real screenshots for project pages.
- Continue improving Batch File Renamer while keeping safe dry-run defaults.
- Build the next Python utility: Study Folder Organizer.
- Later connect AI Study Assistant to a real API after the static flow is clear.
