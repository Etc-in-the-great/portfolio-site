"""Preview batch file renames without changing files.

This script is intentionally dry-run only. It prints the rename plan so the
user can check the output before a future real rename mode is added.
"""

from __future__ import annotations

import argparse
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Preview file rename results for one folder. Dry-run only.",
    )
    parser.add_argument(
        "--folder",
        required=True,
        help="Folder that contains files to preview. Subfolders are ignored.",
    )
    parser.add_argument(
        "--prefix",
        required=True,
        help="Prefix to add before each original file name, such as cs101_.",
    )
    return parser.parse_args()


def validate_folder(folder_text: str) -> Path:
    folder = Path(folder_text).expanduser()

    if not folder.exists():
        raise SystemExit(f"Error: folder does not exist: {folder}")

    if not folder.is_dir():
        raise SystemExit(f"Error: path is not a folder: {folder}")

    resolved = folder.resolve()
    if resolved.parent == resolved:
        raise SystemExit("Error: refusing to preview files from a drive root.")

    return resolved


def build_preview(folder: Path, prefix: str) -> list[tuple[Path, Path, str | None]]:
    files = sorted(item for item in folder.iterdir() if item.is_file())
    planned_names: set[str] = set()
    preview: list[tuple[Path, Path, str | None]] = []

    for source in files:
        target = source.with_name(f"{prefix}{source.name}")
        warning = None

        if target.name in planned_names:
            warning = "warning: duplicate target name in this preview"
        elif target.exists() and target.resolve() != source.resolve():
            warning = "warning: target file already exists"

        planned_names.add(target.name)
        preview.append((source, target, warning))

    return preview


def main() -> None:
    args = parse_args()
    folder = validate_folder(args.folder)
    prefix = args.prefix

    if not prefix.strip():
        raise SystemExit("Error: prefix cannot be empty.")

    preview = build_preview(folder, prefix)

    print("Batch File Renamer preview")
    print(f"Folder: {folder}")
    print("Mode: dry-run only, no files will be renamed.")
    print()

    if not preview:
        print("No files found in this folder.")
        return

    for source, target, warning in preview:
        print(f"{source.name} -> {target.name}")
        if warning:
            print(f"  {warning}")


if __name__ == "__main__":
    main()
