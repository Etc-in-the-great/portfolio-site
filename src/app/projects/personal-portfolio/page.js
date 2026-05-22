import Link from "next/link";

const highlights = [
  "用 Next.js 和 Tailwind CSS 搭建作品集首页",
  "完成 GitHub push 到 Vercel 自动部署的完整流程",
  "把 Contact、Projects、Skill Tree 改成更真实的个人展示内容",
  "保留后续扩展 AI Tools 和 Python Utilities 的入口",
];

const stack = ["Next.js", "React", "Tailwind CSS", "Vercel", "GitHub"];

const lessons = [
  {
    title: "项目不是只写页面",
    text: "这次练习让我把本地开发、Git 提交、GitHub 仓库、Vercel 部署串起来，真正走完一次上线流程。",
  },
  {
    title: "作品集要讲清楚过程",
    text: "如果只是放一个漂亮页面，很容易像模板。补上问题、下一步计划和 case study 后，别人更容易看出我在认真做项目。",
  },
  {
    title: "先简单，再逐步变强",
    text: "当前版本没有复杂后端，也没有重型依赖。先把能展示的页面做好，再继续加 AI Tools 页面和 Python Utilities。",
  },
];

const nextSteps = [
  "补一张真实项目截图或首屏预览图",
  "给 AI Study Assistant 做一个静态原型页面",
  "整理 README，让 GitHub 页面也能说明项目",
  "继续记录每次迭代学到的东西",
];

export const metadata = {
  title: "Personal Portfolio Case Study",
  description: "Case study for a personal portfolio built with Next.js, Tailwind CSS, GitHub, and Vercel.",
};

export default function PersonalPortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_30%),linear-gradient(180deg,#080b12_0%,#101522_50%,#07080d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-white" href="/">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.9)]" />
          Back to Portfolio
        </Link>
        <a
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/70 transition hover:border-cyan-200/40 hover:text-white"
          href="https://portfolio-site-sepia-mu.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
      </nav>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
          Case Study / Personal Portfolio
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
          从一个首页开始，走完整个上线流程。
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
          这是我的第一个正式 Portfolio 项目。目标不是做得特别复杂，而是把学习路线、项目计划和联系方式整理成一个可以公开分享的入口，
          同时熟悉 Frontend 项目从本地开发到 Vercel 部署的完整流程。
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Problem
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">我想解决什么问题？</h2>
          <p className="mt-5 leading-8 text-slate-300">
            学习编程时会做很多零散练习，但如果没有一个统一入口，很难向别人说明自己到底在学什么、做过什么、下一步要做什么。
            所以我先做一个个人作品集，用它来收纳 Frontend、AI Tools 和 Python Utilities 方向的项目。
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            What I built
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">当前已经完成</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0d111c] p-6 shadow-2xl shadow-black/20">
          <div className="mb-6">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Learning Notes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">这次我学到了什么</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {lessons.map((lesson) => (
              <article key={lesson.title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                <h3 className="text-lg font-semibold">{lesson.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{lesson.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Next Steps
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">下一步怎么继续升级</h2>
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
