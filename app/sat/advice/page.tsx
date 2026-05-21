const Page = () => {
    return (
      <main className="relative min-h-screen bg-stone-50 text-slate-900 antialiased">
        {/* Soft top gradient wash — matches the resources page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-gradient-to-b from-indigo-50/70 via-white/0 to-transparent"
        />
  
        <article className="relative mx-auto max-w-2xl px-5 pb-24 pt-12 sm:px-6 sm:pt-20">
          {/* ARTICLE HEADER */}
          <header className="mb-10 sm:mb-14">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Personal Advice
            </div>
  
            <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[2.75rem] lg:text-[3.25rem]">
              How I went from 1000 to 1200+ on the SAT
            </h1>
  
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500 sm:text-xl sm:leading-9">
              A few things I learned the hard way — and what finally moved my score.
            </p>
          </header>
  
          {/* LEAD PARAGRAPH — slightly larger than body */}
          <p className="text-lg leading-8 text-slate-700">
            Hi — I have a few pieces of advice that might help you boost your SAT
            score, based on my own experience taking the test. The SAT takes
            patience and tolerance. It's one of the hardest tests in the world.
          </p>
  
          {/* SECTION: Journey */}
          <h2 className="mt-14 text-[26px] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[30px]">
            My SAT journey
          </h2>
  
          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              My very first Bluebook mock exam — Practice 4 — came out to exactly{" "}
              <strong className="font-semibold text-slate-950">1000</strong>.
            </p>
            <p>
              After a few months of self-studying, I took another Bluebook
              practice test... and got the exact same result. I had no direction.
              No plan. I was studying, but I was studying wrong.
            </p>
          </div>
  
          {/* SCORE PROGRESSION CALLOUT */}
          <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/40 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Score progression
            </p>
  
            <div className="mt-4 flex items-center justify-between gap-2 sm:gap-4">
              <div className="text-center">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[32px]">
                  1000
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                  First mock
                </p>
              </div>
  
              <svg
                className="h-4 w-4 shrink-0 text-slate-300 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
  
              <div className="text-center">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[32px]">
                  1000
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                  Months later
                </p>
              </div>
  
              <svg
                className="h-4 w-4 shrink-0 text-slate-300 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
  
              <div className="text-center">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-indigo-700 sm:text-[32px]">
                  1200+
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-indigo-600">
                  Breakthrough
                </p>
              </div>
            </div>
          </div>
  
          {/* SECTION: What changed */}
          <h2 className="mt-14 text-[26px] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[30px]">
            What finally changed
          </h2>
  
          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              I realized that grinding my{" "}
              <strong className="font-semibold text-slate-950">weak areas</strong>{" "}
              — instead of the topics I was already comfortable with — was the
              thing that actually moved my score.
            </p>
          </div>
  
          {/* PULL QUOTE */}
          <blockquote className="my-9 border-l-2 border-indigo-500 pl-6">
            <p className="text-xl font-medium leading-8 tracking-[-0.015em] text-slate-800 sm:text-[22px] sm:leading-9">
              Grind your weak areas, not your strong ones. That's the one shift
              that dramatically boosted my score.
            </p>
          </blockquote>
  
          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              With that single change in mindset, I took another practice test
              and broke past 1200 for the first time.
            </p>
          </div>
  
          {/* ───────────────────────────────────────────────────────────────
              ADD MORE SECTIONS BELOW — DUPLICATE ANY OF THESE PATTERNS:
  
              <h2 className="mt-14 text-[26px] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[30px]">
                Section title
              </h2>
  
              <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
                <p>Paragraph one.</p>
                <p>Paragraph two.</p>
              </div>
  
              <blockquote className="my-9 border-l-2 border-indigo-500 pl-6">
                <p className="text-xl font-medium leading-8 tracking-[-0.015em] text-slate-800 sm:text-[22px] sm:leading-9">
                  Quote text here.
                </p>
              </blockquote>
  
              <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/40 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Tip</p>
                <p className="mt-2 text-[15px] leading-7 text-slate-700">Callout body text.</p>
              </div>
             ─────────────────────────────────────────────────────────────── */}
  
          <h2 className="mt-14 text-[26px] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[30px]">
            Your next section
          </h2>
  
          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              Write your next idea here. You can keep going for as long as you
              want — the page handles long-form reading well.
            </p>
          </div>
  
          {/* FOOTER — matches resources page */}
          <footer className="mt-20 border-t border-slate-200 pt-8 sm:mt-24">
            <p className="text-sm text-slate-500">
              One question at a time. You've got this.
            </p>
          </footer>
        </article>
      </main>
    );
  };
  
  export default Page;