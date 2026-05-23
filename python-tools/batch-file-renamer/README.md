# Batch File Renamer

Batch File Renamer is a small Python utility for previewing batch file rename results.

It is part of the `Python Study Utilities` direction in this portfolio. The goal is to turn repeated study-file cleanup work into small, understandable Python scripts.

## Why Dry-Run First

Renaming files can be risky. A wrong rule can make files harder to find or overwrite useful names.

This first version is dry-run only:

- It reads files from one folder.
- It prints the planned rename result.
- It does not actually rename files.
- It warns if a target file name already exists.

Preview is important before batch renaming because one wrong pattern can affect many files at once. Checking the output first helps catch mistakes such as duplicated names, wrong course prefixes, or accidental overwrite risks.

## Usage

From this folder:

```powershell
python rename_preview.py --folder ./sample-files --prefix cs101_
```

If your Windows machine uses the Python launcher, this may also work:

```powershell
py rename_preview.py --folder ./sample-files --prefix cs101_
```

Example output:

```text
lecture1.txt -> cs101_lecture1.txt
lecture2.txt -> cs101_lecture2.txt
homework_final.docx -> cs101_homework_final.docx
```

## Conflict Detection

The script checks whether a target file name already exists in the selected folder.

For example, if `cs101_lecture1.txt` already exists, the script prints a clear warning:

```text
WARNING: target already exists, rename would be skipped:
lecture1.txt -> cs101_lecture1.txt
```

Even when a warning appears, this version still does not modify any real files.

## Current Limits

- Dry-run only.
- Only processes files in the selected folder.
- Does not process subfolders.
- Does not rename files for real yet.
- Does not overwrite existing files.
- Uses a simple prefix rule only.

## Future Plan

- Add a real rename mode after preview is safe.
- Add more rule templates.
- Add a small GUI or web UI.
- Support file date naming.
- Support PDF rename helper features.
