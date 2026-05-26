import Link from "next/link";

const stack = ["Python", "Automation", "File Tools", "Markdown / TXT", "CLI later"];

const scenarios = [
  "课程资料下载后文件名混乱，需要批量重命名",
  "不同课程的 PDF、作业和笔记散在多个文件夹里",
  "Markdown / TXT 笔记里有多余空行、格式不统一",
  "想把重复整理资料的动作变成可复用的小脚本",
];

const utilities = [
  {
    name: "Batch File Renamer",
    description: "按课程名、日期或编号规则批量重命名学习资料，减少手动改文件名的时间。",
    status: "Dry-run Ready",
    next: "继续完善展示说明，真实 rename 模式以后再做。",
    href: "/projects/python-study-utilities/batch-file-renamer",
  },
  {
    name: "Study Folder Organizer",
    description: "把 PDF、图片、作业和笔记按课程或文件类型自动分类到更清晰的文件夹。",
    status: "Planned",
    next: "先做一个只移动测试文件的 safe mode。",
  },
  {
    name: "Markdown Cleaner",
    description: "清理 Markdown / TXT 笔记里的多余空行、重复标题和简单格式问题。",
    status: "Idea",
    next: "先支持 TXT 和 Markdown 的基础文本清理。",
  },
  {
    name: "PDF Rename Assistant",
    description: "根据课程名、章节名或手动输入规则，辅助给 PDF 学习资料生成更好找的文件名。",
    status: "Idea",
    next: "先做命令行输入版本，后面再考虑接 AI 辅助命名。",
  },
];

const directions = [
  "把常用脚本整理成一个小型 toolkit",
  "继续给工具补 README、示例输入和示例输出",
  "保持 dry-run 优先，先预览再考虑执行，避免误改文件",
  "未来可以给常用功能做一个简单 Web UI",
];

export const metadata = {
  title: "Python Study Utilities Roadmap",
  description: "Roadmap for a student learning toolkit built with Python utilities and automation scripts.",
};

export default function PythonStudyUtilitiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(52,211,153,0.22),transparent_34%),radial-gradient(circle_at_80%_12%,rgba(56,189,248,0.16),transparent_32%),linear-gradient(180deg,#080b12_0%,#0f1720_52%,#07080d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-white" href="/">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(110,231,183,0.9)]" />
          Back to Portfolio
        </Link>
        <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-4 py-2 text-sm font-semibold text-emerald-100">
          Toolkit Roadmap · First dry-run ready
        </span>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
            Roadmap / Python Study Utilities
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            一个给学生用的 Python 学习工具箱。
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            这个项目用来展示我用 Python 做实用学习工具的方向。它不会一开始就做复杂系统，而是从文件整理、
            批量重命名、学习资料分类、Markdown / TXT 清理这些高频小问题开始。
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
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-emerald-400/20 via-cyan-400/10 to-teal-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] shadow-2xl shadow-emerald-950/30 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="font-mono text-xs text-white/45">study_tools.py</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-sm text-slate-300">
              <p className="text-emerald-200">tools = [</p>
              {["Batch File Renamer", "Study Folder Organizer", "Markdown Cleaner", "PDF Rename Assistant"].map((item) => (
                <p key={item} className="pl-5 text-white/85">
                  <span className="text-cyan-200">&quot;</span>
                  {item}
                  <span className="text-cyan-200">&quot;</span>,
                </p>
              ))}
              <p className="text-emerald-200">]</p>
              <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4 font-sans">
                <p className="text-sm font-semibold text-emerald-100">Goal</p>
                <p className="mt-1 text-sm leading-6 text-emerald-50/70">
                  把重复整理学习资料的动作，变成可以复用、可以解释、可以展示的 Python scripts。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Goal
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">项目目标</h2>
          <p className="mt-5 leading-8 text-slate-300">
            做一组适合学生日常使用的 Python Utilities，把学习资料整理、文本清理和重复文件操作变得更快、更稳定。
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Why
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">我为什么做它</h2>
          <p className="mt-5 leading-8 text-slate-300">
            学习过程中很多时间花在重复整理文件上。用 Python 写小工具，可以顺便练基础语法、文件路径、字符串处理和自动化思维。
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Python Role
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Python 的作用</h2>
          <p className="mt-5 leading-8 text-slate-300">
            Python 适合把小而重复的学习任务自动化：读文件、改名字、清理文本、移动资料、生成简单报告。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0d111c] p-5 shadow-2xl shadow-black/20 sm:p-6">
          <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Utilities Preview
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">工具路线图和当前进度</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              Batch File Renamer 已经有 dry-run Python script；其他工具仍按 roadmap 小步推进。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {utilities.map((utility) => (
              <article key={utility.name} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-emerald-200/35 hover:bg-white/[0.075]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{utility.name}</h3>
                  <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                    {utility.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{utility.description}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    当前状态 / 后续计划
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{utility.next}</p>
                </div>
                {utility.href ? (
                  <Link
                    className="mt-5 inline-flex items-center text-sm font-semibold text-emerald-100"
                    href={utility.href}
                  >
                    View dry-run utility
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Use Cases
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">适合哪些学习场景</h2>
          <p className="mt-5 leading-8 text-slate-300">
            这个方向不是为了做“大而全”的软件，而是把真实学习中频繁出现的小麻烦，一个个变成可运行的 Python scripts。
          </p>
        </div>
        <div className="grid gap-4">
          {scenarios.map((item, index) => (
            <div key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-black/10 backdrop-blur-xl">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                {index + 1}
              </span>
              <p className="pt-2 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Future Direction
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">后续扩展方向</h2>
        </div>
        <ol className="space-y-4">
          {directions.map((item, index) => (
            <li key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-slate-950">
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
