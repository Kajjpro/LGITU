"use client";

type Resource = {
  title: string;
  url: string;
  description: string;
  tag: string;
  bestFor: string;
  image?: string;
};

type ResourceGroup = {
  title: string;
  subtitle: string;
  description: string;
  resources: Resource[];
};

const resourceGroups: ResourceGroup[] = [
  {
    title: "Start Here",
    subtitle: "First resources to open",
    description: "Use these before collecting more materials.",
    resources: [
      {
        title: "College Board SAT Question Bank",
        url: "https://satsuiteeducatorquestionbank.collegeboard.org",
        description: "Official SAT practice questions for both sections.",
        tag: "Official",
        bestFor: "Finding real SAT-style questions",
      },
      {
        title: "OnePrep",
        url: "https://www.oneprep.app/",
        description: "Free SAT practice with explanations and timed sections.",
        tag: "Practice",
        bestFor: "Daily practice and quick feedback",
      },
    ],
  },
  {
    title: "Reading & Writing",
    subtitle: "Grammar and passage skills",
    description: "Use these to improve rules, logic, and question patterns.",
    resources: [
      {
        title: "Ultimate Guide to SAT Grammar",
        url: "https://drive.google.com/file/d/1rl8A4KmK10iFDYwaTzsfbvVayfdn2G8I/view",
        description: "Grammar, punctuation, transitions, and writing rules.",
        tag: "Grammar",
        bestFor: "Fixing writing mistakes",
      },
      {
        title: "Erica Reading",
        url: "https://drive.google.com/file/d/1kea_OuzH7eOpaplNKUhQcb2t2mn8Ri8A/view",
        description: "Reading strategy, evidence questions, and main ideas.",
        tag: "Reading",
        bestFor: "Improving passage accuracy",
      },
      {
        title: "SexyJ SAT Channel",
        url: "https://youtube.com/@sexyj?si=Y60BOx9w2dK5RNSe",
        description: "SAT tricks, patterns, and shortcut explanations.",
        tag: "Video",
        bestFor: "Learning question patterns",
      },
    ],
  },
  {
    title: "Math",
    subtitle: "Concepts and problem solving",
    description: "Use these for formulas, algebra, graphs, and calculator skills.",
    resources: [
      {
        title: "College Panda Math Book",
        url: "https://drive.google.com/file/d/1JyqiykL6cJuSm_vyzU6p59srffC6mrzo/view",
        description: "Key SAT Math concepts, formulas, and practice methods.",
        tag: "Math",
        bestFor: "Reviewing weak math topics",
        image: "https://imgv2-2-f.scribdassets.com/img/document/507493389/original/eaf6baf109/1?v=1",
      },
      {
        title: "Desmos Tutorial",
        url: "https://youtu.be/e-O4nwVHQ-Y?si=CWeoJ6LrIQiq2Sto",
        description: "Learn faster Desmos methods for Digital SAT Math.",
        tag: "Tool",
        bestFor: "Saving time on math questions",
        image: "https://i.ytimg.com/vi/o4qporxAPmM/maxresdefault.jpg",
      },
    ],
  },
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

const Page = () => {
  const totalResources = resourceGroups.reduce((sum, group) => sum + group.resources.length, 0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F6F7FB] text-slate-950 antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-8 sm:pt-12">
        <header className="mb-5 rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md sm:mb-10 sm:rounded-[2rem] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600 sm:text-[11px]">
              SAT Resource Library
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-500">
              {totalResources} resources
            </div>
          </div>

          <h1 className="mt-4 max-w-3xl text-[2rem] font-bold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:mt-5 sm:text-5xl lg:text-[3.35rem]">
            Start with resources that are actually useful.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
            A short, organized list of SAT materials for Reading & Writing,
            Math, official practice, and useful tools.
          </p>
        </header>

        <nav className="sticky top-3 z-30 mb-5 sm:mb-10">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-slate-200/80 bg-white/90 p-1.5 shadow-sm backdrop-blur-md">
            {resourceGroups.map((group) => (
              <a
                key={group.title}
                href={`#${slugify(group.title)}`}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 sm:px-3.5 sm:py-2 sm:text-sm"
              >
                {group.title}
                <span className="ml-1.5 text-slate-400">{group.resources.length}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="space-y-7 sm:space-y-12">
          {resourceGroups.map((group, groupIndex) => (
            <section key={group.title} id={slugify(group.title)} className="scroll-mt-24">
              <div className="mb-3 flex flex-col justify-between gap-1 sm:mb-5 sm:flex-row sm:items-end">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
                    Step {String(groupIndex + 1).padStart(2, "0")} · {group.subtitle}
                  </div>
                  <h2 className="mt-1 text-[24px] font-bold tracking-[-0.045em] text-slate-950 sm:mt-2 sm:text-[34px]">
                    {group.title}
                  </h2>
                </div>

                <p className="max-w-md text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-2.5 sm:gap-3">
                {group.resources.map((resource, index) => (
                  <a
                    key={resource.url}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[42px_1fr_32px] items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-sm transition duration-200 hover:border-slate-300 hover:shadow-md sm:grid-cols-[auto_1fr_auto] sm:gap-5 sm:p-4"
                  >
                    {resource.image ? (
                      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 sm:h-[72px] sm:w-[72px]">
                        <img src={resource.image} alt={resource.title} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xs font-bold tabular-nums text-slate-400 ring-1 ring-slate-200 sm:h-[72px] sm:w-[72px] sm:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="line-clamp-1 text-[14px] font-bold tracking-[-0.015em] text-slate-950 transition group-hover:text-indigo-700 sm:text-[17px]">
                          {resource.title}
                        </h3>
                        <span className="hidden rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600 sm:inline-flex">
                          {resource.tag}
                        </span>
                      </div>

                      <p className="mt-0.5 line-clamp-1 text-xs leading-5 text-slate-500 sm:mt-1 sm:line-clamp-2 sm:text-sm sm:leading-6">
                        {resource.description}
                      </p>

                      <div className="mt-1 line-clamp-1 text-[11px] font-semibold text-slate-400 sm:mt-2 sm:text-xs">
                        Best for: <span className="text-slate-600">{resource.bestFor}</span>
                      </div>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 ring-1 ring-slate-200 transition group-hover:bg-slate-950 group-hover:text-white sm:h-10 sm:w-10">
                      <ArrowUpRight />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-5 sm:mt-14 sm:pt-7">
          <p className="text-xs text-slate-500 sm:text-sm">
            Start small. Use one resource well before adding another.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Page;