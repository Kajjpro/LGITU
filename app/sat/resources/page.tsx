"use client";

type Resource = {
  title: string;
  url: string;
  description: string;
  tag: string;
  image?: string;
};

type ResourceGroup = {
  title: string;
  description: string;
  accent: keyof typeof accentMap;
  resources: Resource[];
};

const resourceGroups: ResourceGroup[] = [
  {
    title: "Combined Resources",
    description:
      "Useful resources for both SAT Reading & Writing and SAT Math.",
    accent: "from-sky-500 to-indigo-500",
    resources: [
      {
        title: "College Board SAT Question Bank",
        url: "https://satsuiteeducatorquestionbank.collegeboard.org",
        description:
          "Official SAT question bank for Reading & Writing and Math practice.",
        tag: "Official",
      },
      {
        title: "OnePrep",
        url: "https://www.oneprep.app/",
        description:
          "A free SAT practice site with Reading & Writing and Math questions, detailed explanations, timed sections, and instant feedback.",
        tag: "Practice",
      },
    ],
  },

  {
    title: "Reading & Writing",
    description:
      "Grammar, reading strategy, passage logic, evidence questions, and writing rules.",
    accent: "from-violet-500 to-fuchsia-500",
    resources: [
      {
        title: "Ultimate Guide to SAT Grammar",
        url: "https://drive.google.com/file/d/1rl8A4KmK10iFDYwaTzsfbvVayfdn2G8I/view",
        description:
          "A useful grammar resource for punctuation, sentence structure, transitions, and SAT writing rules.",
        tag: "Grammar",
      },
      {
        title: "Erica Reading",
        url: "https://drive.google.com/file/d/1kea_OuzH7eOpaplNKUhQcb2t2mn8Ri8A/view",
        description:
          "A strong SAT reading resource for passages, evidence questions, main ideas, and reading strategy.",
        tag: "Reading",
      },
      {
        title: "SexyJ SAT Channel",
        url: "https://youtube.com/@sexyj?si=Y60BOx9w2dK5RNSe",
        description:
          "SexyJ has a lot of SAT tricks, shortcuts, and question patterns that we can learn for Reading & Writing.",
        tag: "SAT Tricks",
      },
    ],
  },

  {
    title: "Math",
    description:
      "Algebra, functions, equations, graphs, data analysis, and problem solving.",
    accent: "from-emerald-500 to-teal-500",
    resources: [
      {
        title: "College Panda Math Book",
        url: "https://drive.google.com/file/d/1JyqiykL6cJuSm_vyzU6p59srffC6mrzo/view",
        description:
          "A useful SAT Math resource for reviewing key concepts, formulas, and problem-solving methods.",
        tag: "Math",
        image:
          "https://imgv2-2-f.scribdassets.com/img/document/507493389/original/eaf6baf109/1?v=1",
      },
      {
        title: "Desmos Tutorial",
        url: "https://youtu.be/e-O4nwVHQ-Y?si=CWeoJ6LrIQiq2Sto",
        description:
          "A highlighted Desmos tutorial for SAT Math. It teaches how to use Desmos faster and more effectively during the SAT test.",
        tag: "Highlighted",
        image:
          "https://i.ytimg.com/vi/o4qporxAPmM/maxresdefault.jpg",
      },
    ],
  },
];

const accentMap = {
  "from-sky-500 to-indigo-500": {
    dot: "bg-indigo-500",
    hoverText: "group-hover:text-indigo-700",
  },
  "from-violet-500 to-fuchsia-500": {
    dot: "bg-fuchsia-500",
    hoverText: "group-hover:text-fuchsia-700",
  },
  "from-emerald-500 to-teal-500": {
    dot: "bg-teal-500",
    hoverText: "group-hover:text-teal-700",
  },
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const Page = () => {
  return (
    <main className="relative min-h-screen bg-stone-50 text-slate-900 antialiased">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-gradient-to-b from-indigo-50/70 via-white/0 to-transparent"
      />

      <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20">
        {/* HERO */}
        <header className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
            SAT Resource Library
          </div>

          <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[3.5rem]">
            Score 1600.
            <br />
            <span className="text-slate-400">
              Start with the right tools.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            A hand-picked collection of materials for Reading, Writing, and
            Math — from official practice to grammar deep-dives and Desmos
            tricks.
          </p>
        </header>

        {/* STICKY NAV */}
        <nav className="sticky top-3 z-30 mb-12 sm:mb-14">
          <div className="flex justify-center">
            <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-slate-200/80 bg-white/85 p-1.5 shadow-sm shadow-slate-200/60 backdrop-blur-md">
              {resourceGroups.map((group) => (
                <a
                  key={group.title}
                  href={`#${slugify(group.title)}`}
                  className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:px-4"
                >
                  {group.title}

                  <span className="ml-1.5 text-slate-400">
                    {group.resources.length}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* SECTIONS */}
        <div className="space-y-16 sm:space-y-20">
          {resourceGroups.map((group) => {
            const accent =
              accentMap[group.accent] ||
              accentMap["from-sky-500 to-indigo-500"];

            return (
              <section
                key={group.title}
                id={slugify(group.title)}
                className="scroll-mt-24"
              >
                {/* SECTION HEADER */}
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${accent.dot}`}
                  />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Section · {group.resources.length}{" "}
                    {group.resources.length === 1
                      ? "resource"
                      : "resources"}
                  </span>
                </div>

                <h2 className="text-[28px] font-semibold tracking-[-0.035em] text-slate-950 sm:text-[32px]">
                  {group.title}
                </h2>

                <p className="mt-2 max-w-2xl text-[15px] leading-7 text-slate-500">
                  {group.description}
                </p>

                {/* RESOURCE LIST */}
                <ul className="mt-7 space-y-2.5">
                  {group.resources.map((resource, idx) => (
                    <li key={resource.url}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-3 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-300/30 sm:gap-5 sm:p-4"
                      >
                        {/* IMAGE */}
                        {resource.image ? (
                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 sm:h-[72px] sm:w-[72px]">
                            <img
                              src={resource.image}
                              alt={resource.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.06]"
                            />
                          </div>
                        ) : (
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-sm font-semibold tabular-nums text-slate-400 ring-1 ring-slate-200/80 sm:h-[72px] sm:w-[72px]">
                            {(idx + 1).toString().padStart(2, "0")}
                          </div>
                        )}

                        {/* CONTENT */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                            <h3
                              className={`text-base font-semibold tracking-[-0.015em] text-slate-950 transition sm:text-[17px] ${accent.hoverText}`}
                            >
                              {resource.title}
                            </h3>

                            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                              {resource.tag}
                            </span>
                          </div>

                          <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500 sm:text-[15px]">
                            {resource.description}
                          </p>
                        </div>

                        {/* BUTTON */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 ring-1 ring-slate-200 transition duration-200 group-hover:bg-slate-900 group-hover:text-white group-hover:ring-slate-900 sm:h-10 sm:w-10">
                          <svg
                            className="h-4 w-4 transition duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px] sm:h-[17px] sm:w-[17px]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-slate-200 pt-8 sm:mt-24">
          <p className="text-sm text-slate-500">
            One question at a time. You've got this.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Page;