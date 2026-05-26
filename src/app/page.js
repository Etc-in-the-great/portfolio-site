import Link from "next/link";

const skills = [
  {
    name: "Frontend",
    level: "核心方向",
    score: "72%",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    name: "AI Tools",
    level: "产品方向",
    score: "58%",
    items: ["Prompt workflow", "OpenAI products", "Tool ideas", "Automation"],
  },
  {
    name: "Python Utilities",
    level: "工具方向",
    score: "46%",
    items: ["Scripts", "File processing", "Data cleanup", "Small utilities"],
  },
  {
    name: "CS Basics",
    level: "基础能力",
    score: "63%",
    items: ["Git", "Web fundamentals", "Debugging", "Learning notes"],
  },
];

const projects = [
  {
    title: "Personal Portfolio",
    status: "正在构建",
    problem: "把零散的学习记录、项目练习和后续 AI Tools 想法整理到一个可以分享的入口。",
    description:
      "当前这个网站本身就是第一个作品：用 Next.js 和 Tailwind 做一个能发给朋友、老师或面试官看的个人主页。",
    tags: ["Next.js", "Tailwind", "Vercel"],
    next: "补充项目截图和更完整的 case study，让这个作品本身也能讲清楚开发过程。",
    accent: "from-cyan-300 to-blue-500",
    href: "/projects/personal-portfolio",
  },
  {
    title: "AI Study Assistant",
    status: "Prototype / Planning",
    badge: "Interactive Prototype",
    problem: "学习资料和 PDF 笔记内容多，复习时很难快速抓重点和整理结构。",
    description:
      "正在开发中的 AI 学习工具原型，已经有 example notes、mock interaction 和本地生成结果展示。",
    tags: ["AI Tools", "React", "OpenAI API"],
    next: "继续打磨交互流程，再接入 OpenAI API、PDF / Text 上传和学习历史保存。",
    accent: "from-violet-300 to-fuchsia-500",
    href: "/projects/ai-study-assistant",
  },
  {
    title: "Python Study Utilities",
    status: "Dry-run Tool Ready",
    badge: "Student Toolkit",
    problem: "学习文件、作业资料和文档经常分散，手动整理、批量重命名和资料分类都很耗时间。",
    description:
      "正在整理一个学生学习工具箱，Batch File Renamer 已经有真实 Python dry-run script，可以安全预览批量重命名结果。",
    tags: ["Python", "Automation", "Markdown / TXT"],
    next: "继续完善 Batch File Renamer 的展示说明，再规划 Study Folder Organizer 的 safe mode。",
    accent: "from-emerald-300 to-teal-500",
    href: "/projects/python-study-utilities",
  },
];

const building = [
  { label: "已上线", value: "Personal Portfolio", detail: "首页已经部署到 Vercel，并保留项目 case study 入口。" },
  { label: "已完成基础版", value: "GitHub README", detail: "README 已包含线上地址、技术栈、运行命令和项目状态。" },
  { label: "已完成 dry-run", value: "Batch File Renamer", detail: "Python 脚本可以预览批量重命名结果，并提示冲突风险。" },
];

const roadmap = [
  "保持 Portfolio 已部署状态，并继续同步项目页面和 README 文案。",
  "给每个 Projects 补上截图、开发记录和简短复盘。",
  "继续打磨 Batch File Renamer 的 dry-run 工具展示和使用说明。",
  "在 AI Study Assistant 静态流程稳定后，再考虑接入真实 API。",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(168,85,247,0.2),transparent_32%),linear-gradient(180deg,#080b12_0%,#101522_48%,#07080d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.9)]" />
          <span className="font-mono text-sm font-semibold tracking-wide text-white/90">
            Portfolio.dev
          </span>
        </a>
        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 backdrop-blur-xl sm:flex">
          <a className="px-3 transition hover:text-white" href="#about">
            About
          </a>
          <a className="px-3 transition hover:text-white" href="#skills">
            Skills
          </a>
          <a className="px-3 transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="px-3 transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32"
      >
        <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
            CS student building with AI
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Personal lab for{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
              AI tools
            </span>{" "}
            and polished web projects.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            我是计算机相关本科生，正在一边补基础，一边用项目练手。这个 Portfolio
            会记录我的 Frontend 练习、Python Utilities，以及用 AI 提高学习和开发效率的尝试。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              View Projects
              <span className="ml-2 transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#skills"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/[0.08]"
            >
              Explore Skill Tree
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
          <div className="float-slow relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="font-mono text-xs text-white/45">learning-lab.jsx</span>
            </div>
            <div className="space-y-5 p-5 sm:p-7">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5 font-mono text-sm text-slate-300">
                <p className="text-cyan-200">const focus = [</p>
                {["React pages", "AI tool ideas", "Python scripts", "GitHub portfolio"].map((item) => (
                  <p key={item} className="pl-5 text-white/85">
                    <span className="text-violet-200">&quot;</span>
                    {item}
                    <span className="text-violet-200">&quot;</span>,
                  </p>
                ))}
                <p className="text-cyan-200">];</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                  <p className="text-sm font-semibold text-emerald-100">Goal</p>
                  <p className="mt-1 text-sm text-emerald-50/70">做出能展示的项目</p>
                </div>
                <div className="rounded-2xl border border-blue-300/15 bg-blue-300/10 p-4">
                  <p className="text-sm font-semibold text-blue-100">Next</p>
                  <p className="mt-1 text-sm text-blue-50/70">Polish project status</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 shadow-[0_0_24px_rgba(103,232,249,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              About me
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              把学习过程整理成一个可以持续升级的 product lab。
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            我是计算机相关专业本科生，基础还在补，但希望尽早把学习变成具体作品。这个网站不是包装成“资深开发者”，
            而是诚实记录我怎么用 React、Next.js、Tailwind、Python 和 AI Tools 做出一个个能看的小项目。
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Skill Tree
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            先掌握一套能快速做出项目的 practical stack。
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group) => (
            <article
              key={group.name}
              className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.075]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {group.level}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{group.name}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 font-mono text-xs text-cyan-100">
                  {group.score}
                </span>
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 transition duration-500 group-hover:brightness-125"
                  style={{ width: group.score }}
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-6">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Now Building
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                作品集已经上线，下一步是把真实项目状态持续同步清楚。
              </h2>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {building.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.value}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative border-y border-white/10 bg-[#0d111c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.18),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
                Projects
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                先把 Projects 做清楚，再慢慢长成真正的产品。
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              这里放真实的项目计划和当前进度：已部署、静态原型、dry-run 工具和后续路线都会分开标注。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
                <div className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-r ${project.accent} opacity-20 blur-3xl transition group-hover:opacity-35`} />
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-white/80">
                        {project.status}
                      </span>
                      {project.badge ? (
                        <span className="rounded-full border border-violet-200/25 bg-violet-200/10 px-3 py-1 text-xs font-semibold text-violet-100">
                          {project.badge}
                        </span>
                      ) : null}
                    </div>
                    <span className="h-9 w-9 rounded-2xl border border-white/10 bg-white/[0.06] shadow-inner shadow-white/5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
                  <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Problem
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Next Step
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{project.next}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href ? (
                    <Link
                      className="mt-8 flex items-center text-sm font-semibold text-cyan-100"
                      href={project.href}
                    >
                      {project.title === "AI Study Assistant"
                        ? "Try prototype / Read case study"
                        : project.title === "Python Study Utilities"
                          ? "View toolkit / Dry-run utility"
                          : "View case study"}
                      <span className="ml-2 transition group-hover:translate-x-1">→</span>
                    </Link>
                  ) : (
                    <div className="mt-8 flex items-center text-sm font-semibold text-cyan-100">
                      Case study 待补充
                      <span className="ml-2 transition group-hover:translate-x-1">→</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Learning Route
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            小步推进，但每一步都留下真实输出。
          </h2>
        </div>
        <ol className="space-y-4">
          {roadmap.map((item, index) => (
            <li
              key={item}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-black/10 backdrop-blur-xl"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                {index + 1}
              </span>
              <p className="pt-2 text-slate-300">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="px-5 pb-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ready for the next build.</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              这个站点已经上线。你可以通过 GitHub 查看源码，也可以用 Gmail 或 QQ Mail 联系我；后续项目 demo 会继续补到这里。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/[0.08]"
              href="https://github.com/Etc-in-the-great"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-100 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white"
              href="https://mail.google.com/mail/?view=cm&to=rosecjy36@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Gmail
            </a>
            <a
              className="inline-flex h-11 items-center justify-center rounded-full border border-cyan-100/40 bg-cyan-100/10 px-5 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100 hover:bg-cyan-100/15"
              href="https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=3310729474@qq.com"
              target="_blank"
              rel="noreferrer"
            >
              QQ Mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
