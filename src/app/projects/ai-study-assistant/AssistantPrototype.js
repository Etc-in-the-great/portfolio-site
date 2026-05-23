"use client";

import { useState } from "react";

const examples = [
  {
    id: "english",
    label: "English reading note",
    note:
      "The article explains that active reading is different from simply looking at words. A good reader asks questions, predicts the author's next point, marks confusing sentences, and writes a short summary after reading. The goal is not to memorize every sentence, but to understand the main idea and supporting details.",
    summary:
      "这篇 English reading note 主要讲 active reading：读者需要带着问题阅读，并在阅读后用自己的话总结 main idea 和 supporting details。",
    keyPoints: [
      "Active reading 不是被动看文字，而是边读边提问",
      "main idea 和 supporting details 是理解文章结构的关键",
      "读完后写 short summary，可以检查自己是否真正理解",
    ],
    questions: [
      "What is the difference between active reading and passive reading?",
      "Why should a reader write a short summary after reading?",
      "How do supporting details help explain the main idea?",
    ],
  },
  {
    id: "marxism",
    label: "Marxism class note",
    note:
      "马克思主义课程中提到，实践是认识的来源，也是检验认识真理性的标准。学习理论不能只停留在背概念，还要联系现实问题，理解理论为什么产生、解决什么问题，以及它如何指导实践。",
    summary:
      "这段 Marxism class note 的核心是“实践和认识的关系”：实践产生认识，也用来检验认识是否正确。",
    keyPoints: [
      "实践是认识的来源，不是单纯从书本中产生",
      "理论学习要联系现实问题，不能只背定义",
      "检验认识是否正确，需要回到实践中观察结果",
    ],
    questions: [
      "为什么说实践是认识的来源？",
      "理论学习为什么不能只停留在背概念？",
      "怎样理解实践对认识的检验作用？",
    ],
  },
  {
    id: "python",
    label: "Python string note",
    note:
      "Python string 是不可变序列。常用操作包括索引、切片、拼接、格式化和常见方法，例如 lower(), strip(), split()。处理文本时，先明确输入是什么，再决定要清理空格、拆分字段还是提取关键词。",
    summary:
      "这段 Python string note 总结了字符串的基本性质和常用处理方法，重点是把文本处理任务拆成清理、拆分和提取三个步骤。",
    keyPoints: [
      "Python string 是 immutable sequence，不能直接修改原字符串",
      "索引和切片适合提取局部文本",
      "strip、split、lower 等方法常用于文本清理和格式统一",
    ],
    questions: [
      "Python string 为什么说是不可变的？",
      "切片和 split 分别适合解决什么问题？",
      "处理学习资料文件名时，可以用哪些 string 方法？",
    ],
  },
];

export default function AssistantPrototype() {
  const [activeId, setActiveId] = useState(examples[0].id);
  const [note, setNote] = useState(examples[0].note);
  const [result, setResult] = useState(examples[0]);
  const [isLoading, setIsLoading] = useState(false);

  const activeExample = examples.find((example) => example.id === activeId) ?? examples[0];

  function selectExample(example) {
    setActiveId(example.id);
    setNote(example.note);
    setResult(example);
    setIsLoading(false);
  }

  function generateSummary() {
    setIsLoading(true);

    window.setTimeout(() => {
      setResult(activeExample);
      setIsLoading(false);
    }, 1000);
  }

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <div className="rounded-3xl border border-white/10 bg-[#0d111c] p-5 shadow-2xl shadow-black/20 sm:p-6">
        <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Interactive Mock
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">核心功能静态交互</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              选择不同 example notes 后，左侧输入和右侧输出会同步切换。Generate Summary 会模拟一次 AI 生成流程，
              但所有内容都来自本地 mock data。
            </p>
          </div>
          <div className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            Static Prototype · No API connected yet
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {examples.map((example) => (
            <button
              key={example.id}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeId === example.id
                  ? "border-violet-200/70 bg-violet-200/20 text-white shadow-[0_0_24px_rgba(196,181,253,0.2)]"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-200/40 hover:text-white"
              }`}
              type="button"
              onClick={() => selectExample(example)}
            >
              {example.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <label className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
            <span className="text-sm font-semibold text-slate-200">输入笔记区域</span>
            <textarea
              className="mt-4 min-h-80 w-full resize-none rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-7 text-slate-300 outline-none transition focus:border-cyan-200/40"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              aria-label="Input notes"
            />
            <button
              className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              type="button"
              onClick={generateSummary}
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Summary"}
            </button>
          </label>

          <div className="grid gap-4">
            <article className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-cyan-100">Summary 总结区</p>
                {isLoading ? (
                  <span className="rounded-full border border-cyan-100/20 bg-cyan-100/10 px-3 py-1 text-xs text-cyan-50/80">
                    thinking
                  </span>
                ) : null}
              </div>
              <p className={`mt-3 text-sm leading-7 text-cyan-50/75 ${isLoading ? "animate-pulse" : ""}`}>
                {isLoading ? "正在模拟整理笔记结构，生成 Summary..." : result.summary}
              </p>
            </article>

            <article className="rounded-2xl border border-violet-300/15 bg-violet-300/10 p-5">
              <p className="text-sm font-semibold text-violet-100">Key Points 重点区</p>
              <ul className={`mt-3 space-y-2 text-sm leading-7 text-violet-50/75 ${isLoading ? "animate-pulse" : ""}`}>
                {(isLoading ? ["识别主题中...", "提取重点中...", "整理复习结构中..."] : result.keyPoints).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-5">
              <p className="text-sm font-semibold text-emerald-100">Review Questions 复习问题区</p>
              <ol className={`mt-3 space-y-2 text-sm leading-7 text-emerald-50/75 ${isLoading ? "animate-pulse" : ""}`}>
                {(isLoading ? ["生成自测问题中...", "检查知识点覆盖中...", "准备输出结果中..."] : result.questions).map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-mono text-emerald-100">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
