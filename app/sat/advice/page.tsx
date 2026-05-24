"use client";

const links = {
  bluebook: "https://bluebook.app.collegeboard.org/",
  questionBank: "https://satsuitequestionbank.collegeboard.org/",
  onePrep: "https://www.oneprep.xyz/",
  desmos: "https://youtu.be/e-O4nwVHQ-Y?si=CWeoJ6LrIQiq2Sto",
  strategyVideo: "https://youtu.be/NBECQxDBQQs?si=HFkn3zRIjxaneDVi",
  collegePandaMath:
    "https://drive.google.com/file/d/1JyqiykL6cJuSm_vyzU6p59srffC6mrzo/view",
};

const ResourceLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-indigo-600 underline decoration-indigo-300 underline-offset-4 transition hover:text-indigo-800"
  >
    {children}
  </a>
);

const adviceCards = [
  {
    title: "Find your weak area first",
    text: "Use official mock tests to discover what is actually stopping your score from increasing.",
  },
  {
    title: "Protect grammar points",
    text: "Grammar, transitions, and notes questions are usually more controllable. Try not to lose easy points there.",
  },
  {
    title: "Use a smart question order",
    text: "Start with easier Reading and Writing questions first, then spend more time on harder reading questions.",
  },
  {
    title: "Review every answer choice",
    text: "Do not only ask why the correct answer is correct. Ask why the other three choices are wrong.",
  },
  {
    title: "Use Desmos after learning the logic",
    text: "Desmos can save a lot of time, but it works best after you understand the math foundation.",
  },
];

const sections = [
  {
    id: "story",
    step: "01",
    subtitle: "How I got stuck",
    title: "Personal Story",
    description: "What my SAT preparation looked like before I improved.",
    content: (
      <>
        <p>
          My first <ResourceLink href={links.bluebook}>Bluebook</ResourceLink>{" "}
          practice test came out to exactly{" "}
          <strong className="font-semibold text-slate-950">1000</strong>.
        </p>

        <p>
          I thought the solution was simple: study more. So I watched SAT
          videos, solved random questions, downloaded more resources, and kept
          changing my study method.
        </p>

        <p>A few months later, I took another practice test.</p>

        <p>
          The score was still{" "}
          <strong className="font-semibold text-slate-950">1000</strong>.
        </p>

        <p>
          For my first real SAT exam, I got{" "}
          <strong className="font-semibold text-slate-950">1360</strong>:{" "}
          <strong className="font-semibold text-slate-950">580</strong> in
          Reading and Writing, and{" "}
          <strong className="font-semibold text-slate-950">780</strong> in Math.
          I understood that my Reading and Writing score did not work out as
          well because my English comprehension was not strong enough. I also
          had bad sleep and felt nervous on test day.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 sm:mt-7 sm:bg-white sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
            Score progression
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-xl font-bold tracking-[-0.03em] text-slate-950 sm:text-[32px]">
                1000
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                First
              </p>
            </div>

            <div>
              <p className="text-xl font-bold tracking-[-0.03em] text-slate-950 sm:text-[32px]">
                1000
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                Later
              </p>
            </div>

            <div>
              <p className="text-xl font-bold tracking-[-0.03em] text-indigo-700 sm:text-[32px]">
                1350+
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-600 sm:text-[11px]">
                Breakthrough
              </p>
            </div>
          </div>
        </div>

        <blockquote className="my-6 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/60 px-4 py-4 sm:my-7 sm:px-5">
          <p className="text-lg font-semibold leading-7 tracking-[-0.02em] text-slate-800 sm:text-[22px] sm:leading-9">
            I was studying hard, but I was studying in the wrong way.
          </p>
        </blockquote>

        <p>
          I kept practicing things I already felt comfortable with. But the
          topics I avoided were exactly the things limiting my score.
        </p>
      </>
    ),
  },
  {
    id: "advice",
    step: "02",
    subtitle: "What actually helped",
    title: "Personal Advice",
    description: "The study changes that finally moved my score.",
    content: (
      <>
        <div className="grid gap-4">
          {[
            {
              number: "01",
              title: "Find your weak area first",
              body: (
                <>
                  Use <ResourceLink href={links.bluebook}>Bluebook mock exams</ResourceLink>{" "}
                  to find your real weak areas. Bluebook is the most accurate
                  official SAT practice, but there are only a limited number of
                  tests, so use them carefully.
                </>
              ),
            },
            {
              number: "02",
              title: "Do not lose easy grammar points",
              body: (
                <>
                  Make your grammar, transitions, and notes questions almost 100%
                  correct. These are points you should protect because they are more
                  controllable than hard reading questions.
                </>
              ),
            },
            {
              number: "03",
              title: "Use a smarter question order",
              body: (
                <>
                  For Reading and Writing, start with grammar, transitions, and
                  notes questions first, usually around questions 15–27. Then go
                  back to vocabulary and reading questions.
                </>
              ),
            },
            {
              number: "04",
              title: "Review every wrong answer choice",
              body: (
                <>
                  When reviewing mistakes, do not only ask why the correct answer is
                  correct. Ask why the other three answers are wrong. This builds
                  stronger logic.
                </>
              ),
            },
            {
              number: "05",
              title: "Only choose fully supported answers",
              body: (
                <>
                  Never choose based on feeling. The correct answer must be 100%
                  supported by the passage. If an answer is only partly supported,
                  it is probably a trap.
                </>
              ),
            },
            {
              number: "06",
              title: "Read books — this is the real long-term weapon",
              body: (
                <>
                  For Reading, books are not optional. They are one of the most
                  powerful ways to improve English comprehension. If your
                  comprehension is weak, SAT reading will always feel painful.
                  Reading books consistently trains your brain to understand longer
                  sentences, difficult vocabulary, tone, logic, and passage
                  structure. This is not a quick trick, but it is one of the biggest
                  reasons students become truly stronger readers.
                </>
              ),
              highlight: true,
            },
            {
              number: "07",
              title: "Build your Math foundation first",
              body: (
                <>
                  SAT Math mainly tests basic math knowledge. Use the{" "}
                  <ResourceLink href={links.collegePandaMath}>
                    College Panda Math resource
                  </ResourceLink>{" "}
                  to build your foundation and push toward 700+.
                </>
              ),
            },
            {
              number: "08",
              title: "Use Desmos after you understand the logic",
              body: (
                <>
                  Do not depend on Desmos too early. First understand the math
                  concepts. After that, Desmos can save time and help push your Math
                  score to 750+ or even 800. Watch this{" "}
                  <ResourceLink href={links.desmos}>Desmos SAT Math video</ResourceLink>.
                </>
              ),
            },
            {
              number: "09",
              title: "Practice with official resources",
              body: (
                <>
                  Use the{" "}
                  <ResourceLink href={links.questionBank}>
                    College Board Question Bank
                  </ResourceLink>{" "}
                  and <ResourceLink href={links.onePrep}>OnePrep</ResourceLink>.
                  I recommend College Board most because it is official and has clear
                  explanations. OnePrep is also useful for Math practice.
                </>
              ),
            },
            {
              number: "10",
              title: "Watch out for trap answers",
              body: (
                <>
                  Ask yourself: is this answer fully supported or only partially
                  supported? Many wrong answers have one true part and one false
                  part, or extreme words like “always,” “never,” and “must.”
                </>
              ),
            },
          ].map((item) => (
            <div
              key={item.number}
              className={`rounded-2xl border p-4 sm:p-5 ${
                item.highlight
                  ? "border-indigo-200 bg-indigo-50/80"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="flex gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    item.highlight
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-indigo-600 ring-1 ring-slate-200"
                  }`}
                >
                  {item.number}
                </div>
    
                <div>
                  <h3 className="text-base font-bold tracking-[-0.03em] text-slate-950 sm:text-lg">
                    {item.title}
                  </h3>
    
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
        <blockquote className="my-6 rounded-2xl border-l-4 border-indigo-500 bg-white px-4 py-4 shadow-sm sm:my-7 sm:px-5">
          <p className="text-lg font-semibold leading-7 tracking-[-0.02em] text-slate-800 sm:text-[22px] sm:leading-9">
            Do it like a game. Each correct answer gives you points, so try to
            collect as many points as possible.
          </p>
        </blockquote>
    
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 sm:p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600 sm:text-[11px]">
            Useful links
          </p>
    
          <div className="mt-3 grid gap-2 text-sm leading-6 sm:grid-cols-2">
            <ResourceLink href={links.bluebook}>Bluebook mock tests</ResourceLink>
            <ResourceLink href={links.questionBank}>
              College Board Question Bank
            </ResourceLink>
            <ResourceLink href={links.onePrep}>OnePrep practice</ResourceLink>
            <ResourceLink href={links.desmos}>Desmos SAT Math video</ResourceLink>
            <ResourceLink href={links.collegePandaMath}>
              College Panda Math
            </ResourceLink>
            <ResourceLink href={links.strategyVideo}>
              SAT strategy video
            </ResourceLink>
          </div>
        </div>
      </>
    ),
  },
];

const Page = () => {
  return (
    <main className="relative min-h-screen scroll-smooth overflow-hidden bg-[#F6F7FB] text-slate-950 antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-14 pt-5 sm:px-8 sm:pb-16 sm:pt-12">
        <header className="mb-4 rounded-[1.25rem] border border-slate-200/80 bg-white/85 p-5 shadow-sm backdrop-blur-md sm:mb-10 sm:rounded-[2rem] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600 sm:text-[11px]">
              SAT Advice
            </div>

            <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-500 sm:py-1.5 sm:text-xs">
              Personal experience
            </div>
          </div>

          <h1 className="mt-4 max-w-3xl text-[2rem] font-bold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:mt-5 sm:text-5xl lg:text-[3.35rem]">
            How I went from 1000 to 1350+ on the SAT
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
            A few lessons I learned the hard way — and what finally changed my
            score.
          </p>
        </header>

        <nav className="sticky top-3 z-30 mb-5 sm:mb-10">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-slate-200/80 bg-white/95 p-1 shadow-sm backdrop-blur-md sm:p-1.5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 sm:px-3.5 sm:py-2 sm:text-sm"
              >
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="space-y-6 sm:space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="mb-3 flex flex-col justify-between gap-1 sm:mb-5 sm:flex-row sm:items-end">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
                    Step {section.step} · {section.subtitle}
                  </div>

                  <h2 className="mt-1 text-[24px] font-bold tracking-[-0.045em] text-slate-950 sm:mt-2 sm:text-[34px]">
                    {section.title}
                  </h2>
                </div>

                <p className="max-w-md text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  {section.description}
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-slate-200/80 bg-white p-4 shadow-sm sm:rounded-[1.7rem] sm:p-8">
                <div className="space-y-4 text-[15px] leading-7 text-slate-700 sm:space-y-5 sm:text-[17px] sm:leading-8">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-5 sm:mt-14 sm:pt-7">
          <p className="text-xs text-slate-500 sm:text-sm">
            Improvement takes time. Keep going.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
};

export default Page;