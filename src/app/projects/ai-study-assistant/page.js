import Link from "next/link";
import AssistantPrototype from "./AssistantPrototype";

const stack = ["Next.js", "React", "Tailwind CSS", "OpenAI API later"];

const nextSteps = [
  "接入真实 AI API，让输入内容可以生成 Summary 和复习问题",
  "支持 PDF 上传，先完成文本提取和预览",
  "保存学习记录，方便回看每次总结和复习进度",
  "补充 README 和截图，让项目能作为独立作品展示",
];

const prototypeNotes = [
  "当前没有接入真实 API，页面不会把输入内容发送到服务器。",
  "交互结果来自本地 mock data，用来模拟未来 AI 生成后的效果。",
  "这个页面用于展示产品想法、交互流程和后续扩展方向。",
];

const prototypeFlow = [
  "Paste or select a study note",
  "Click Generate Summary",
  "Review the generated summary",
  "Read key points and review questions",
];

const milestones = [
  "接入 OpenAI API",
  "支持 PDF / Text 上传",
  "保存学习历史",
  "生成 Quiz",
  "移动端优化",
];

export const metadata = {
  title: "AI Study Assistant Case Study",
  description: "Static prototype for an AI study assistant built with Next.js, React, and Tailwind CSS.",
};

export default function AIStudyAssistantPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(168,85,247,0.24),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(56,189,248,0.18),transparent_32%),linear-gradient(180deg,#080b12_0%,#111526_52%,#07080d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-white" href="/">
          <span className="h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_22px_rgba(196,181,253,0.9)]" />
          Back to Portfolio
        </Link>
        <span className="rounded-full border border-violet-200/20 bg-violet-200/10 px-4 py-2 text-sm font-semibold text-violet-100">
          Static Prototype · No API connected yet
        </span>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">
            Prototype / AI Study Assistant
          </p>
          <p className="mb-4 text-xl font-semibold text-violet-100 sm:text-2xl">
            AI Study Assistant
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            正在开发中的 AI 学习工具原型。
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            把课程笔记转成 Summary、Key Points 和 Review Questions。目标是帮助我把课程笔记或 PDF 内容整理成更清晰的总结、重点和复习问题，
            先把产品界面和学习流程做出来，后续再接入真实 OpenAI API。
          </p>
          <div className="mt-5 inline-flex max-w-full flex-col gap-1 rounded-2xl border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-sm text-cyan-50/85 sm:flex-row sm:items-center sm:gap-3">
            <span className="font-semibold text-cyan-100">当前版本：Static Prototype</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-cyan-200 sm:block" />
            <span>No API connected yet</span>
          </div>
          <p className="mt-4 max-w-3xl rounded-2xl border border-violet-200/15 bg-violet-200/10 p-4 text-sm leading-7 text-violet-50/80">
            这是一个静态原型，当前用于展示产品结构和交互流程；点击示例和 Generate Summary 只会读取本地 mock data，
            不会上传内容，也不会调用真实 AI API。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-violet-500/20 via-cyan-400/10 to-fuchsia-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] shadow-2xl shadow-violet-950/30 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="font-mono text-xs text-white/45">study-assistant.jsx</span>
            </div>
            <div className="grid gap-4 p-5">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Input Notes</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  React 是构建 UI 的 JavaScript library。组件可以复用，props 用来传递数据，state 用来记录会变化的界面状态...
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-sm font-semibold text-cyan-100">Summary</p>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/75">
                    这段笔记主要解释 React 的核心概念：component、props 和 state。
                  </p>
                </div>
                <div className="rounded-2xl border border-violet-300/15 bg-violet-300/10 p-4">
                  <p className="text-sm font-semibold text-violet-100">Status</p>
                  <p className="mt-2 text-sm leading-6 text-violet-50/75">
                    当前是静态原型，暂时不调用 API。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Goal
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">项目目标</h2>
          <p className="mt-5 leading-8 text-slate-300">
            帮助我把课程笔记、PDF 内容或零散学习资料转成 Summary、Key Points 和 Review Questions。
            这样复习时不用反复翻长资料，可以先抓结构，再补细节。
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Problem
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">我想解决什么问题？</h2>
          <p className="mt-5 leading-8 text-slate-300">
            初学者经常资料很多，但重点抓不住。课程 PPT、PDF、视频笔记和作业文档分散在一起，
            复习时容易变成“重新看一遍”，效率比较低。这个原型先把学习流程拆成输入、总结、重点和自测四个区域。
          </p>
        </div>
      </section>

      <AssistantPrototype />

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0d111c] p-5 shadow-2xl shadow-black/20 sm:p-6">
          <div className="mb-6">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
              Prototype Evidence
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">真实前端交互原型，当前使用 mock data</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              这个页面已经可以在浏览器里完成基本交互：选择示例笔记、点击 Generate Summary、查看 Summary、Key Points 和 Review Questions。
              当前结果来自本地 mock data，no API connected yet。
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {prototypeFlow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-violet-300/15 bg-violet-300/10 p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-violet-100">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6 text-violet-50/75">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-2xl border border-cyan-200/15 bg-cyan-200/10 p-4 text-sm leading-7 text-cyan-50/80">
            Evidence status: frontend prototype is real; AI generation is simulated; no user content is sent to an API in this version.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Prototype Notes
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">当前原型说明</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {prototypeNotes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Next Milestones
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">接下来要补的能力</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {milestones.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Next Steps
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">下一步计划</h2>
          <p className="mt-5 leading-8 text-slate-300">
            当前状态是静态原型，重点是把页面结构和使用流程先跑通。后面再逐步接入真实能力。
          </p>
        </div>
        <ol className="space-y-4">
          {nextSteps.map((item, index) => (
            <li key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                {index + 1}
              </span>
              <p className="pt-2 text-slate-300">{item}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
