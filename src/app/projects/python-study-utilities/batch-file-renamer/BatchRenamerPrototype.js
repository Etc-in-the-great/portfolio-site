"use client";

import { useState } from "react";

const mockFiles = ["lecture1.txt", "lecture2.txt", "homework_final.docx"];

function applyPattern(fileName, pattern) {
  const trimmedPattern = pattern.trim() || "cs101_{name}";
  const dotIndex = fileName.lastIndexOf(".");
  const name = dotIndex >= 0 ? fileName.slice(0, dotIndex) : fileName;
  const extension = dotIndex >= 0 ? fileName.slice(dotIndex) : "";

  return `${trimmedPattern.replaceAll("{name}", name)}${extension}`;
}

export default function BatchRenamerPrototype() {
  const [pattern, setPattern] = useState("cs101_{name}");
  const [hasPreviewed, setHasPreviewed] = useState(true);

  const previewFiles = mockFiles.map((fileName) => ({
    original: fileName,
    renamed: applyPattern(fileName, pattern),
  }));

  function previewRename() {
    setHasPreviewed(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <div className="rounded-3xl border border-white/10 bg-[#0d111c] p-5 shadow-2xl shadow-black/20 sm:p-6">
        <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Tool Prototype
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Batch File Renamer</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              输入 Rename Pattern 后，点击 Preview Rename 查看新文件名。当前只处理 mock files，不会操作真实文件。
            </p>
          </div>
          <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            Frontend Prototype · No Python backend yet
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Rename Pattern</span>
              <input
                className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-emerald-200/45"
                value={pattern}
                onChange={(event) => {
                  setPattern(event.target.value);
                  setHasPreviewed(false);
                }}
                placeholder="cs101_{name}"
                aria-label="Rename pattern"
              />
            </label>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              当前支持一个简单变量：<span className="font-mono text-emerald-100">{"{name}"}</span> 表示原文件名，不包含扩展名。
            </p>
            <button
              className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-emerald-100 sm:w-auto"
              type="button"
              onClick={previewRename}
            >
              Preview Rename
            </button>

            <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
              <p className="text-sm font-semibold text-emerald-100">Rename Result</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50/75">
                {hasPreviewed
                  ? "Preview ready. 这里只是预览新文件名，不会真的修改本地文件。"
                  : "Pattern changed. 点击 Preview Rename 更新右侧预览。"}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055]">
            <div className="grid grid-cols-[1fr_1fr] gap-0 border-b border-white/10 bg-black/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              <span>原文件名</span>
              <span>新文件名预览</span>
            </div>
            <div className="divide-y divide-white/10">
              {previewFiles.map((file) => (
                <div key={file.original} className="grid grid-cols-1 gap-3 px-4 py-4 text-sm sm:grid-cols-[1fr_1fr]">
                  <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-3 font-mono text-slate-300">
                    {file.original}
                  </div>
                  <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-3 font-mono text-emerald-100">
                    {hasPreviewed ? file.renamed : "Preview pending"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
