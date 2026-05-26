---
name: python-utility-safety
description: Build and review Python study utility scripts that touch files, paths, or automation. Use when adding dry-run scripts, file previews, rename helpers, folder organizers, or README instructions.
---

# Python Utility Safety

## Procedure

1. Identify whether the script reads files, writes files, renames files, or moves files.
2. Prefer dry-run first.
3. Use `pathlib` for paths.
4. Validate the input folder before processing.
5. Avoid recursion unless explicitly requested.
6. Detect conflicts before any future destructive operation.
7. Print clear terminal evidence of what would happen.
8. Update README usage and limitations.

## Safety Defaults

- Do not rename, delete, overwrite, or move files by default.
- Do not process subfolders unless explicitly requested.
- Do not operate on drive roots.
- Warn when target files already exist.
- Keep sample files small and harmless.

## Verification

Run the script with sample files, for example:

```powershell
python rename_preview.py --folder ./sample-files --prefix cs101_
```

Then verify frontend docs if the portfolio page references the tool.
