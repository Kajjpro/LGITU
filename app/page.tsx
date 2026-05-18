const tests = [
  {
    code: "SAT",
    name: "Scholastic Aptitude Test",
    domain: "Standardized Admissions",
    metric: "Digital SAT · 400–1600",
    href: "/sat",
  },
  {
    code: "IELTS",
    name: "Academic Training",
    domain: "English Proficiency",
    metric: "Band Score · 0–9",
    href: "/ielts",
  },
  {
    code: "HSK",
    name: "Mandarin Proficiency",
    domain: "Chinese Language",
    metric: "Level-Based Certification",
    href: "/hsk",
  },
  {
    code: "CSCA",
    name: "Strategy & Competitive Analysis",
    domain: "Professional Certification",
    metric: "Strategic Frameworks",
    href: "/csca",
  },
];

const purposeText = "";

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M6 14L14 6M8 6h6v6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GridIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 4h7v7H4V4ZM13 4h7v7h-7V4ZM4 13h7v7H4v-7ZM13 13h7v7h-7v-7Z"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

const Page = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fb] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_34rem)]" />

      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
              <GridIcon className="h-4 w-4" />
            </span>

            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              Exam Matrix
            </span>
          </a>

          <p className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:block">
            Select an exam
          </p>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-600">
            Academic Resource Directory
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
            Choose a test.
            <br />
            Start focused.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Simple access to structured exam preparation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tests.map((test) => (
            <a
              key={test.code}
              href={test.href}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm outline-none transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100 active:translate-y-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-sky-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-3xl font-semibold tracking-[-0.06em] text-slate-950">
                  {test.code}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-500 group-hover:rotate-45 group-hover:bg-slate-950 group-hover:text-white">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </div>

              <h2 className="mt-8 text-base font-semibold text-slate-950">
                {test.name}
              </h2>

              <p className="mt-2 text-sm text-slate-500">{test.domain}</p>

              <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 transition duration-500 group-hover:bg-sky-50">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {test.metric}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-600">
                Purpose
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Why this platform exists.
              </h2>
            </div>

          </div>

          <div className="mt-8 min-h-36 rounded-3xl border border-dashed border-slate-200 bg-slate-50/70 p-5">
            <p className="text-sm leading-7 text-slate-600">We</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Page;