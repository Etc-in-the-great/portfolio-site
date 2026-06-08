import Link from "next/link";

const dataFields = ["title", "content", "summary", "keyPoints", "questions", "createdAt"];

const builtFeatures = [
  {
    title: "Save Note",
    text: "生成 Summary 后才能保存，避免把空内容或未生成结果写入 History。",
  },
  {
    title: "History Page",
    text: "集中展示 Saved Notes 数量、summary 预览、Key Points 数量和 Review Questions 数量。",
  },
  {
    title: "Note Detail",
    text: "把原始笔记、Summary、Key Points 和 Review Questions 分区展示，方便回看。",
  },
  {
    title: "Delete Note",
    text: "删除前用 confirm 确认，删除后返回 History，当前只影响本地 localStorage。",
  },
];

const userFlow = [
  "在 AI Study Assistant 输入课程笔记",
  "点击 Generate Summary 生成总结和复习问题",
  "点击 Save Note 保存到本地 Learning History",
  "进入 History Page 查看所有 saved notes",
  "打开 Note Detail 复盘单条学习记录",
];

const nextSteps = [
  "设计数据库表结构",
  "评估 Supabase / MySQL",
  "按课程、标签、日期筛选学习记录",
  "增加登录后跨设备同步",
  "把 Learning History 接入 Project Management Module",
];

export const metadata = {
  title: "Learning History Case Study",
  description: "A portfolio case study for the localStorage Learning History prototype in AI Study Assistant.",
};

export default function LearningHistoryCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_78%_14%,rgba(168,85,247,0.2),transparent_30%),linear-gradient(180deg,#080b12_0%,#111526_54%,#07080d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-white" href="/projects/ai-study-assistant">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.9)]" />
          Back to AI Study Assistant
        </Link>
        <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100">
          Case Study · localStorage
        </span>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Learning History Case Study
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            把一次 AI 总结，变成可以回看的学习记录。
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Learning History 是 AI Study Assistant 的保存模块。它先用 localStorage 跑通产品流程：
            生成 Summary 后保存笔记，再进入 History 和 Detail 页面复盘。当前不接数据库，重点是先把数据结构和使用路径设计清楚。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              href="/projects/ai-study-assistant/history"
            >
              Open History Prototype
            </Link>
            <Link
              className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-100/40"
              href="/projects/ai-study-assistant"
            >
              Try AI Study Assistant
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-emerald-400/10 to-violet-500/20 blur-2xl" />
          <div className="relative rounded-3xl border border-white/12 bg-white/[0.07] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Current Version
              </p>
              <h2 className="mt-3 text-2xl font-semibold">localStorage Prototype</h2>
              <p className="mt-3 text-sm leading-7 text-cyan-50/80">
                当前数据只保存在浏览器本地，适合展示交互流程和数据结构。刷新页面后仍可保留，但换浏览器或清理缓存后不会同步。
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dataFields.map((field) => (
                <span key={field} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 font-mono text-sm text-slate-200">
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Problem
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">为什么要做 Learning History？</h2>
          <p className="mt-5 leading-8 text-slate-300">
            AI 生成的总结如果只能停留在当前页面，很容易看完就丢。对学习场景来说，更重要的是把一次生成结果变成可复盘的记录：
            原始笔记是什么、AI 总结了什么、重点有哪些、下次应该用什么问题自测。
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Product Decision
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">为什么先不接数据库？</h2>
          <p className="mt-5 leading-8 text-slate-300">
            这一阶段先验证产品流程，而不是急着上后端。localStorage 可以快速证明 Save、History、Detail、Delete 这条路径是否清楚，
            也能提前确认未来数据库需要哪些字段，减少后面返工。
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0d111c] p-5 shadow-2xl shadow-black/20 sm:p-6">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Built Features
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">当前已经完成的功能</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {builtFeatures.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            User Flow
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">使用流程</h2>
          <p className="mt-5 leading-8 text-slate-300">
            这个模块的重点不是炫技，而是让访客能看懂一个学习工具从“生成结果”到“保存复盘”的产品闭环。
          </p>
        </div>
        <ol className="space-y-4">
          {userFlow.map((item, index) => (
            <li key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                {index + 1}
              </span>
              <p className="pt-2 text-slate-300">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-3">
        <article className="rounded-3xl border border-cyan-300/15 bg-cyan-300/10 p-6">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
            Portfolio Value
          </p>
          <p className="mt-4 text-sm leading-7 text-cyan-50/80">
            展示了 AI 工具不只是“能生成”，还要考虑记录、复盘和后续持久化。
          </p>
        </article>
        <article className="rounded-3xl border border-violet-300/15 bg-violet-300/10 p-6">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-violet-100">
            Engineering Value
          </p>
          <p className="mt-4 text-sm leading-7 text-violet-50/80">
            用清晰的数据字段提前约束未来数据库设计，避免直接堆功能。
          </p>
        </article>
        <article className="rounded-3xl border border-emerald-300/15 bg-emerald-300/10 p-6">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Learning Value
          </p>
          <p className="mt-4 text-sm leading-7 text-emerald-50/80">
            适合练习 React state、localStorage、动态路由和产品流程拆解。
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Next Milestones
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {nextSteps.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
