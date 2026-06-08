"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { formatHistoryDate, learningHistoryStorageKey, mockLearningHistory } from "../../learningHistoryData";

function findNote(id) {
  if (typeof window === "undefined") {
    return mockLearningHistory.find((item) => item.id === id) ?? null;
  }

  try {
    const stored = window.localStorage.getItem(learningHistoryStorageKey);
    const history = stored ? JSON.parse(stored) : mockLearningHistory;
    return history.find((item) => item.id === id) ?? null;
  } catch {
    return mockLearningHistory.find((item) => item.id === id) ?? null;
  }
}

export default function NoteDetailClient() {
  const params = useParams();
  const router = useRouter();
  const [note] = useState(() => findNote(params.id));

  function deleteNote() {
    const shouldDelete = window.confirm("Delete this saved note from local Learning History?");

    if (!shouldDelete) {
      return;
    }

    try {
      const stored = window.localStorage.getItem(learningHistoryStorageKey);
      const history = stored ? JSON.parse(stored) : mockLearningHistory;
      const nextHistory = history.filter((item) => item.id !== params.id);
      window.localStorage.setItem(learningHistoryStorageKey, JSON.stringify(nextHistory));
    } finally {
      router.push("/projects/ai-study-assistant/history");
    }
  }

  if (!note) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080b12] px-5 text-white">
        <div className="max-w-xl rounded-3xl border border-white/10 bg-white/[0.055] p-6 text-center">
          <h1 className="text-3xl font-semibold">没有找到这条 History</h1>
          <p className="mt-3 text-slate-300">这可能是本地 localStorage 被清理了，或者链接里的 id 不存在。</p>
          <Link className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950" href="/projects/ai-study-assistant/history">
            Back to History
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(168,85,247,0.2),transparent_34%),radial-gradient(circle_at_76%_16%,rgba(16,185,129,0.16),transparent_30%),linear-gradient(180deg,#080b12_0%,#111526_54%,#07080d_100%)]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-white" href="/projects/ai-study-assistant/history">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(110,231,183,0.9)]" />
          Back to History
        </Link>
        <div className="flex items-center gap-2">
          <button
            className="rounded-full border border-rose-200/25 bg-rose-200/10 px-4 py-2 text-sm font-semibold text-rose-100 transition hover:border-rose-100/50 hover:text-white"
            type="button"
            onClick={deleteNote}
          >
            Delete Note
          </button>
          <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            Note Detail
          </span>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
          Learning Note
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
          {note.title}
        </h1>
        <p className="mt-5 text-sm text-slate-400">Saved at {formatHistoryDate(note.createdAt)}</p>
        <Link
          className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-100/40"
          href="/projects/ai-study-assistant/history"
        >
          Back to History
        </Link>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Original Content</p>
            <p className="mt-5 whitespace-pre-wrap text-sm leading-8 text-slate-300">{note.content}</p>
          </article>

          <div className="grid gap-5">
            <article className="rounded-3xl border border-cyan-300/15 bg-cyan-300/10 p-6">
              <p className="text-sm font-semibold text-cyan-100">Summary</p>
              <p className="mt-3 text-sm leading-8 text-cyan-50/80">{note.summary}</p>
            </article>

            <article className="rounded-3xl border border-violet-300/15 bg-violet-300/10 p-6">
              <p className="text-sm font-semibold text-violet-100">Key Points</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-violet-50/80">
                {note.keyPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-emerald-300/15 bg-emerald-300/10 p-6">
              <p className="text-sm font-semibold text-emerald-100">Review Questions</p>
              <ol className="mt-3 space-y-2 text-sm leading-7 text-emerald-50/80">
                {note.questions.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-mono text-emerald-100">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
