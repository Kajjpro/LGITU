"use client";

const cards = [
  {
    title: "Study Resources",
    text: "Official tools, practice websites, and useful SAT platforms.",
    href: "/sat/resources",
    label: "Resources",
  },
  {
    title: "Books",
    text: "Guides, workbooks, and books you want to use for preparation.",
    href: "/sat/books",
    label: "Books",
  },
  {
    title: "Study Plan",
    text: "Your weekly SAT schedule and preparation structure.",
    href: "/sat/study-plan",
    label: "Plan",
  },
  {
    title: "Practice",
    text: "Your system for solving, reviewing, and improving.",
    href: "/sat/practice",
    label: "Practice",
  },
];

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <path
      d="M6 14 14 6M8 6h6v6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Page = () => {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-slate-950">SAT Hub</p>
            <p className="text-xs text-slate-500">Study dashboard</p>
          </div>

          <div className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 sm:block">
            Digital SAT Prep
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          {/* Main intro */}
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Digital SAT
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
                Build your SAT plan without the clutter.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Start with the advice, then use the pages below to organize your
                resources, books, study plan, and practice routine.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Score
                </p>
                <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                  400–1600
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Section
                </p>
                <p className="mt-2 text-base font-bold text-slate-950">
                  Reading & Writing
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Section
                </p>
                <p className="mt-2 text-base font-bold text-slate-950">Math</p>
              </div>
            </div>
          </section>

          {/* Advice card */}
          <aside className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8 lg:p-10">
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                  First step
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                  Read the advice before anything else.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Please review the advice section first. After that, choose the
                  resource, book, study plan, or practice page based on what you
                  need most.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">Recommended order</p>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <p>1. Advice</p>
                  <p>2. Study Plan</p>
                  <p>3. Resources and Books</p>
                  <p>4. Practice and Review</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Navigation */}
        <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:mt-6 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Pages
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-[-0.045em] text-slate-950 sm:text-3xl">
                Choose what to work on next.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Each page focuses on one part of your preparation, so your study
              routine stays clear and easy to follow.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {cards.map((card, index) => (
              <a
                key={card.href}
                href={card.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-white hover:shadow-md sm:p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-500 ring-1 ring-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {card.label}
                    </p>

                    <h3 className="mt-1 text-lg font-bold tracking-[-0.03em] text-slate-950">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {card.text}
                    </p>
                  </div>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition group-hover:bg-slate-950 group-hover:text-white">
                  <ArrowIcon className="h-5 w-5" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Note */}
        <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:mt-6 sm:p-6 lg:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
            Your note
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-[-0.045em] text-slate-950 sm:text-3xl">
            What is this SAT page for?
          </h2>

          <div className="mt-5 min-h-32 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
            <p className="text-sm leading-7 text-slate-500">
              Write your own purpose text here.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Page;
