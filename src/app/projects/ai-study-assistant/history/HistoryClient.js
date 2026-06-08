"use client";

import Link from "next/link";
import { useState } from "react";
import { formatHistoryDate, learningHistoryStorageKey, mockLearningHistory } from "../learningHistoryData";

function loadHistory() {
  if (typeof window === "undefined") {
    return mockLearningHistory;
  }

  try {
    const stored = window.localStorage.getItem(learningHistoryStorageKey);
    return stored ? JSON.parse(stored) : mockLearningHistory;
  } catch {
    return mockLearningHistory;
  }
}

export default function HistoryClient() {
  const [history] = useState(loadHistory);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(168,85,247,0.18),transparent_30%),linear-gradient(180deg,#080b12_0%,#111526_54%,#07080d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-white" href="/projects/ai-study-assistant">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.9)]" />
          Back to AI Study Assistant
        </Link>
        <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100">
          Local Mock History
        </span>
      </nav>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
          Learning History Module
        </p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
              保存每次生成后的学习笔记。
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              这里先用本地 mock data 和浏览器 localStorage 展示 History 结构。后续如果接数据库，可以把同样的数据结构迁移到后端。
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-sm leading-7 text-slate-300">
            <p className="font-semibold text-white">Data fields</p>
            <p className="mt-2 font-mono text-cyan-100">
              title · content · summary · keyPoints · questions · createdAt
            </p>
            <p className="mt-4 rounded-2xl border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 font-semibold text-cyan-50">
              Saved Notes: {history.length}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        {history.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-8 text-center shadow-2xl shadow-black/20">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Empty State
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">还没有保存任何学习记录。</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              回到 AI Study Assistant，输入笔记并生成 Summary 后，点击 Save Note 就会出现在这里。
            </p>
            <Link
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              href="/projects/ai-study-assistant"
            >
              Create First Note
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {history.map((item) => (
            <Link
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.08]"
              href={`/projects/ai-study-assistant/history/${item.id}`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Saved Note
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                    {item.summary.length > 120 ? `${item.summary.slice(0, 120)}...` : item.summary}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-300">
                  {formatHistoryDate(item.createdAt)}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
                  {item.keyPoints.length} Key Points
                </span>
                <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-3 py-1 text-xs text-emerald-100">
                  {item.questions.length} Review Questions
                </span>
                <span className="rounded-full border border-violet-200/20 bg-violet-200/10 px-3 py-1 text-xs text-violet-100 transition group-hover:border-violet-100/50">
                  View Detail
                </span>
              </div>
            </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
