import Link from "next/link";
import BatchRenamerPrototype from "./BatchRenamerPrototype";

const futureFeatures = [
  "自动课程分类",
  "文件时间命名",
  "PDF rename",
  "AI-generated naming suggestions",
];

export const metadata = {
  title: "Batch File Renamer Prototype",
  description: "Frontend prototype for a batch file renaming utility in the Python Study Utilities project.",
};

export default function BatchFileRenamerPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(52,211,153,0.22),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(56,189,248,0.16),transparent_32%),linear-gradient(180deg,#080b12_0%,#0f1720_52%,#07080d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-white" href="/projects/python-study-utilities">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(110,231,183,0.9)]" />
          Back to Python Utilities
        </Link>
        <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-4 py-2 text-sm font-semibold text-emerald-100">
          Static Frontend Prototype
        </span>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
            Utility Prototype / Batch File Renamer
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            批量文件重命名工具的前端原型。
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            这个页面展示未来 Python Study Utilities 里的第一个工具方向：把零散学习文件按课程前缀和命名规则批量整理。
            当前阶段只做前端交互 prototype，不读取、不修改真实文件。
          </p>
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
              <span className="font-mono text-xs text-white/45">rename_preview.py</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-sm text-slate-300">
              <p className="text-emerald-200">pattern = &quot;cs101_{"{name}"}&quot;</p>
              <p>lecture1.txt → <span className="text-emerald-100">cs101_lecture1.txt</span></p>
              <p>lecture2.txt → <span className="text-emerald-100">cs101_lecture2.txt</span></p>
              <p>homework_final.docx → <span className="text-emerald-100">cs101_homework_final.docx</span></p>
            </div>
          </div>
        </div>
      </section>

      <BatchRenamerPrototype />

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Prototype Explanation
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">当前原型说明</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
              <span>当前只是 frontend prototype，不会访问真实文件夹。</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
              <span>后续会接 Python 文件处理脚本，用 dry-run 先预览，再执行 rename。</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
              <span>未来可以扩展为批量整理学习资料的小工具。</span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Future Features
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">后续功能想法</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {futureFeatures.map((feature) => (
              <span key={feature} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-200">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
