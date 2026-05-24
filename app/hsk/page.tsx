"use client";

import Link from "next/link";

const sections = [
  {
    n: "01",
    title: "Resources",
    chinese: "学习资源",
    text: "Useful HSK books, websites, vocabulary tools, and listening materials.",
    href: "/hsk/resources",
    accent: "red",
  },
  {
    n: "02",
    title: "Advice",
    chinese: "备考建议",
    text: "Simple advice for vocabulary, grammar, listening, reading, and review.",
    href: "/hsk/advice",
    accent: "amber",
  },
];

const steps = [
  {
    n: "01",
    title: "Know your level",
    chinese: "确认水平",
    text: "Start from your current vocabulary and grammar level.",
  },
  {
    n: "02",
    title: "Build vocabulary",
    chinese: "积累词汇",
    text: "Review words in context instead of only memorizing lists.",
  },
  {
    n: "03",
    title: "Practice daily",
    chinese: "每天练习",
    text: "Use short daily practice for listening, reading, and grammar.",
  },
];

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 10h10M11 6l4 4-4 4" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

const Page = () => {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(9,9,11,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,9,11,0.025)_1px,transparent_1px)] bg-[size:44px_44px]"
      />

      <section className="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-100 blur-3xl" />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 sm:text-[11px]">
              HSK PREPARATION · 汉语水平考试
            </p>

            <h1 className="mt-4 max-w-3xl text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Prepare for HSK with a clear and simple path.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              A clean HSK guide for useful resources, vocabulary building, and practical study advice.
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="#areas"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Choose an area
                <ArrowRight />
              </a>

              <Link
                href="/hsk/resources"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Start with resources
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-2.5 sm:mt-5 md:grid-cols-3 md:gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
              Core Skills
            </p>
            <h2 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] sm:mt-3 sm:text-2xl">
              词汇 · 语法 · 听力 · 阅读
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
              Recommended Start
            </p>
            <h2 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] sm:mt-3 sm:text-2xl">
              Level → Vocabulary → Practice
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-4 shadow-sm sm:rounded-3xl sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 sm:text-[11px]">
              Important
            </p>
            <h2 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] text-white sm:mt-3 sm:text-2xl">
              Review often. 不要只背新词。
            </h2>
          </div>
        </div>

        <section
          id="areas"
          className="mt-5 rounded-3xl border border-slate-900 bg-slate-950 p-5 shadow-xl sm:mt-8 sm:rounded-[2rem] sm:p-8"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 sm:text-[11px]">
                MAIN AREAS
              </p>

              <h2 className="mt-2 text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:mt-3 sm:text-4xl">
                Choose where to start.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/55 sm:leading-7">
              HSK is easier when you build vocabulary and review consistently.
            </p>
          </div>

          <div className="mt-5 grid gap-2.5 sm:mt-7 md:grid-cols-2 md:gap-4">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative grid grid-cols-[1fr_auto] items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl sm:block sm:rounded-[1.75rem] sm:p-5"
              >
                <div
                  className={[
                    "absolute inset-y-0 left-0 w-1 sm:inset-x-0 sm:top-0 sm:h-1.5 sm:w-auto",
                    section.accent === "red" && "bg-red-500",
                    section.accent === "amber" && "bg-amber-500",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />

                <div className="min-w-0">
                  <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400 sm:text-xs">
                    {section.n}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] text-slate-950 sm:mt-8 sm:text-2xl">
                    {section.title}
                  </h3>

                  <p className="mt-0.5 text-xs font-medium text-slate-400 sm:mt-1">
                    {section.chinese}
                  </p>

                  <p className="mt-1 line-clamp-1 text-xs leading-5 text-slate-500 sm:mt-3 sm:line-clamp-none sm:text-sm sm:leading-7">
                    {section.text}
                  </p>

                  <div className="mt-5 hidden items-center gap-2 text-sm font-semibold text-slate-950 sm:flex">
                    Open section
                    <ArrowRight />
                  </div>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white sm:absolute sm:right-5 sm:top-5">
                  <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:mt-8 sm:rounded-[2rem] sm:p-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 sm:text-[11px]">
              GET STARTED
            </p>

            <h2 className="mt-2 text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:mt-3 sm:text-4xl">
              Three simple steps
            </h2>
          </div>

          <div className="mt-5 grid gap-2.5 sm:mt-7 lg:grid-cols-3 lg:gap-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="grid grid-cols-[36px_1fr] gap-3 rounded-2xl border border-slate-200 p-4 sm:block sm:rounded-3xl sm:p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-xs font-bold text-red-700 sm:h-10 sm:w-10 sm:rounded-2xl sm:text-sm">
                  {step.n}
                </div>

                <div>
                  <h3 className="text-base font-semibold tracking-[-0.03em] sm:mt-5 sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-0.5 text-xs font-medium text-slate-400">
                    {step.chinese}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-7">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Page;