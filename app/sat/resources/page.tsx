const resourceGroups = [
    {
      title: "Combined Resources",
      description: "Useful resources for both SAT Reading & Writing and SAT Math.",
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
      description: "Grammar, reading strategy, passage logic, evidence questions, and writing rules.",
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
      ],
    },
    {
      title: "Math",
      description: "Algebra, functions, equations, graphs, data analysis, and problem solving.",
      accent: "from-emerald-500 to-teal-500",
      resources: [
        {
          title: "College Panda Math Book",
          url: "https://drive.google.com/file/d/1JyqiykL6cJuSm_vyzU6p59srffC6mrzo/view",
          description:
            "A useful SAT Math resource for reviewing key concepts, formulas, and problem-solving methods.",
          tag: "Math",
        },
      ],
    },
  ];
  
  const Page = () => {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur sm:p-10 lg:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-indigo-200/60 blur-3xl" />
  
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500 shadow-sm">
                  SAT Resources
                </span>
  
                <h1 className="mt-6 text-4xl font-bold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
                Push you 1600 score resources!
                </h1>
  
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  All the resources are extremely useful that i once used
                </p>
              </div>
  
              <div className="grid grid-cols-3 gap-3 rounded-3xl border border-slate-200 bg-white/80 p-3 shadow-sm">
                <div className="rounded-2xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-bold tracking-[-0.04em]">3</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Groups</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-bold tracking-[-0.04em]">4</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Links</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-bold tracking-[-0.04em]">SAT</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Prep</p>
                </div>
              </div>
            </div>
          </section>
  
          <div className="grid gap-6">
            {resourceGroups.map((group) => (
              <section
                key={group.title}
                className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-lg shadow-slate-200/50 backdrop-blur"
              >
                <div className="flex flex-col gap-4 border-b border-slate-200/80 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className={`mb-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${group.accent}`} />
                    <h2 className="text-2xl font-bold tracking-[-0.045em] text-slate-950 sm:text-3xl">
                      {group.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                      {group.description}
                    </p>
                  </div>
                </div>
  
                <div className="grid gap-4 p-6 sm:p-8 lg:grid-cols-2">
                  {group.resources.map((resource) => (
                    <a
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
                    >
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`} />
  
                      <div className="flex min-h-full flex-col justify-between gap-6">
                        <div>
                          <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm ring-1 ring-slate-200">
                            {resource.tag}
                          </span>
  
                          <h3 className="mt-5 text-xl font-bold tracking-[-0.04em] text-slate-950">
                            {resource.title}
                          </h3>
  
                          <p className="mt-3 text-sm leading-6 text-slate-500">
                            {resource.description}
                          </p>
                        </div>
  
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-sm font-bold text-slate-950 transition group-hover:translate-x-1">
                            Open resource
                          </p>
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-bold text-slate-950 shadow-sm ring-1 ring-slate-200 transition group-hover:scale-105">
                            ↗
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    );
  };
  
  export default Page;
  