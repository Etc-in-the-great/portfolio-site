import Link from "next/link";

const heroModules = [
  "AI Study Assistant",
  "DeepSeek API",
  "Learning History",
  "Python Utilities",
];

const snapshot = [
  {
    label: "Current Stage",
    value: "Stage 4.5",
    detail: "Mentor Display Version",
  },
  {
    label: "Core Progress",
    value: "6 modules",
    detail: "Prototype, API, history, utilities, docs, screenshots",
  },
  {
    label: "Next Milestone",
    value: "Database Design",
    detail: "After final exam period",
  },
];

const productModules = [
  {
    title: "Portfolio Site",
    status: "Live",
    badge: "Vercel",
    description:
      "AI Learning System 的展示入口，用来呈现项目定位、模块进度、case study 和导师查看材料。",
    evidence: "Deployed homepage, mentor docs, screenshot archive",
    tags: ["Next.js", "Tailwind", "Vercel"],
    href: "/projects/personal-portfolio",
    accent: "from-cyan-300 to-blue-500",
  },
  {
    title: "AI Study Assistant",
    status: "API Prototype",
    badge: "DeepSeek Connected",
    description:
      "把课程笔记生成 Summary、Key Points 和 Review Questions，已经通过服务器端 API Route 接入 DeepSeek。",
    evidence: "Generate Summary, server route, API key by env",
    tags: ["AI Tools", "DeepSeek API", "React"],
    href: "/projects/ai-study-assistant",
    accent: "from-violet-300 to-fuchsia-500",
  },
  {
    title: "Learning History Module",
    status: "Core Module",
    badge: "localStorage Prototype",
    description:
      "保存 AI 生成后的学习记录，支持 History、Detail 和 Delete，是后续数据库设计的核心基础。",
    evidence: "Save Note, History Page, Note Detail, Delete Note",
    tags: ["localStorage", "Data Model", "Case Study"],
    href: "/projects/ai-study-assistant/learning-history",
    accent: "from-emerald-300 to-cyan-400",
    featured: true,
  },
  {
    title: "Python Study Utilities",
    status: "Toolkit Roadmap",
    badge: "Student Tools",
    description:
      "用 Python 做学习资料整理、批量处理和文本清理，把重复学习动作变成可复用工具。",
    evidence: "Utility roadmap, file tools direction",
    tags: ["Python", "Automation", "File Tools"],
    href: "/projects/python-study-utilities",
    accent: "from-lime-300 to-emerald-500",
  },
  {
    title: "Batch File Renamer",
    status: "Dry-run Ready",
    badge: "Safe Script",
    description:
      "真实 Python dry-run 脚本，可以预览批量重命名结果，并在目标文件冲突时给出 warning。",
    evidence: "No overwrite, no recursion, conflict warning",
    tags: ["Python CLI", "Dry-run", "Safety"],
    href: "/projects/python-study-utilities/batch-file-renamer",
    accent: "from-amber-200 to-emerald-400",
  },
];

const roadmap = [
  { stage: "Stage 1", title: "Portfolio Site", state: "Done" },
  { stage: "Stage 2", title: "AI Study Assistant", state: "Done" },
  { stage: "Stage 3", title: "DeepSeek API", state: "Done" },
  { stage: "Stage 4", title: "Learning History", state: "Done" },
  { stage: "Stage 4.5", title: "Mentor Display", state: "Now" },
  { stage: "Stage 5", title: "Database Design", state: "Next" },
];

const highlights = [
  "DeepSeek API 已接入，API Key 通过环境变量管理",
  "Learning History 已完成 localStorage 原型和 case study",
  "Python Utilities 已有真实 Batch File Renamer dry-run script",
  "当前阶段聚焦导师展示，不继续堆复杂功能",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_50%_72%,rgba(16,185,129,0.12),transparent_34%),linear-gradient(180deg,#05070d_0%,#0b1020_48%,#05070d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_84%)]" />
        <div className="absolute left-1/2 top-0 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.9)]" />
          <span className="font-mono text-sm font-semibold tracking-wide text-white/90">
            AI Learning System
          </span>
        </a>
        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 shadow-2xl shadow-black/20 backdrop-blur-xl sm:flex">
          <a className="px-3 transition hover:text-white" href="#system">
            System
          </a>
          <a className="px-3 transition hover:text-white" href="#modules">
            Modules
          </a>
          <a className="px-3 transition hover:text-white" href="#roadmap">
            Roadmap
          </a>
          <a className="px-3 transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl gap-12 px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_0.92fr] lg:items-center"
      >
        <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="max-w-5xl">
          <div className="animate-hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
            Stage 4.5 · Mentor Display Version
          </div>
          <h1 className="animate-hero-in animation-delay-100 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
            AI Learning System for{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
              study notes
            </span>
            , project progress, and software growth.
          </h1>
          <p className="animate-hero-in animation-delay-200 mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            一个基于 Portfolio Site 演进的 AI 辅助学习与项目管理系统原型。当前已完成 DeepSeek API 接入、
            Learning History localStorage 原型、Python Utilities dry-run 脚本和导师展示材料，下一阶段进入 Database Design。
          </p>
          <div className="animate-hero-in animation-delay-300 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#modules"
              className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-[0_20px_70px_rgba(255,255,255,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 hover:shadow-[0_24px_80px_rgba(103,232,249,0.2)]"
            >
              View Product Modules
              <span className="ml-2 transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://github.com/Etc-in-the-great/portfolio-site/blob/main/docs/project-links.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/[0.08]"
            >
              Project Links
            </a>
          </div>
        </div>

        <div className="animate-hero-card relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
          <div className="float-slow relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="font-mono text-xs text-white/45">system-overview.jsx</span>
            </div>
            <div className="space-y-5 p-5 sm:p-7">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5 font-mono text-sm text-slate-300">
                <p className="text-cyan-200">const system = {"{"}</p>
                <p className="pl-5 text-white/85">stage: &quot;Mentor Display&quot;,</p>
                <p className="pl-5 text-white/85">next: &quot;Database Design&quot;,</p>
                <p className="pl-5 text-white/85">modules: [</p>
                {heroModules.map((item) => (
                  <p key={item} className="pl-10 text-white/80">
                    &quot;{item}&quot;,
                  </p>
                ))}
                <p className="pl-5 text-white/85">]</p>
                <p className="text-cyan-200">{"}"}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-sm font-semibold text-cyan-100">DeepSeek API</p>
                  <p className="mt-1 text-sm text-cyan-50/70">Connected by env key</p>
                </div>
                <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                  <p className="text-sm font-semibold text-emerald-100">Learning History</p>
                  <p className="mt-1 text-sm text-emerald-50/70">localStorage prototype</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-300 via-emerald-200 to-violet-300 shadow-[0_0_24px_rgba(103,232,249,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="reveal-section rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-6">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                System Snapshot
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                导师打开首页后，先看到系统状态，而不是普通个人介绍。
              </h2>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {snapshot.map((item, index) => (
              <div
                key={item.label}
                className="stagger-card rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.06]"
                style={{ "--stagger": `${index * 90}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.value}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="reveal-section mb-10 max-w-4xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Why It Matters
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            不是单个页面，而是一个正在成型的软件系统。
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            当前版本重点展示软件开发方向需要的系统拆分、API 调用、数据保存、工具脚本、安全默认值和后续数据库路线。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item, index) => (
            <div
              key={item}
              className="stagger-card rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-200/35 hover:bg-white/[0.075]"
              style={{ "--stagger": `${index * 80}ms` }}
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                {index + 1}
              </span>
              <p className="text-base leading-7 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="modules" className="relative border-y border-white/10 bg-[#0a0f1c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.18),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="reveal-section mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
                Current Product Modules
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
                从展示入口，到 AI 学习助手，再到可保存的学习记录。
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              每个模块都标注当前状态、证据和下一步价值，避免看起来像普通静态作品集。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {productModules.map((module, index) => (
              <article
                key={module.title}
                className={`stagger-card group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.085] ${
                  module.featured ? "md:col-span-2 xl:col-span-3" : "xl:col-span-3"
                }`}
                style={{ "--stagger": `${index * 90}ms` }}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${module.accent}`} />
                <div className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-r ${module.accent} opacity-20 blur-3xl transition group-hover:opacity-35`} />
                <div className="relative">
                  <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-white/80">
                        {module.status}
                      </span>
                      <span className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                        {module.badge}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{module.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{module.description}</p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{module.evidence}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {module.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link className="mt-8 flex items-center text-sm font-semibold text-cyan-100" href={module.href}>
                    Open module
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="reveal-section mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Roadmap Strip
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              小步推进，但每一步都能展示。
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            当前不继续堆功能，先把 Mentor Display Version 打磨到能清楚说明后续毕设路线。
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
          {roadmap.map((item, index) => (
            <div
              key={item.stage}
              className={`stagger-card rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 ${
                item.state === "Now"
                  ? "border-cyan-200/35 bg-cyan-200/10 shadow-[0_0_50px_rgba(34,211,238,0.12)]"
                  : item.state === "Next"
                    ? "border-violet-200/25 bg-violet-200/10"
                    : "border-white/10 bg-white/[0.055]"
              }`}
              style={{ "--stagger": `${index * 70}ms` }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {item.stage}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-center text-xs font-semibold text-slate-200">
                {item.state}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-5 pb-10 sm:px-8">
        <div className="reveal-section mx-auto flex max-w-7xl flex-col gap-7 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Share
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ready for mentor review.</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              当前版本适合发给导师查看：线上 demo、GitHub 源码、项目链接文档和导师展示材料都已整理完成。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/[0.08]"
              href="https://github.com/Etc-in-the-great/portfolio-site"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
            <a
              className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-100 px-5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white"
              href="https://portfolio-site-sepia-mu.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
