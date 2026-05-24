"use client";

import { useMemo, useState } from "react";

type Resource = {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
};

const mockResources: Resource[] = [
  {
    id: "1",
    title: "Cambridge IELTS",
    description: "Official IELTS practice materials and tests.",
    link: "#",
    category: "Books",
  },
  {
    id: "2",
    title: "IELTS Liz",
    description: "Writing, speaking, and listening strategies.",
    link: "#",
    category: "Website",
  },
  {
    id: "3",
    title: "IELTS Simon",
    description: "Band 9 style explanations and examples.",
    link: "#",
    category: "Advice",
  },
  {
    id: "4",
    title: "BBC Learning English",
    description: "Improve vocabulary and listening naturally.",
    link: "#",
    category: "Listening",
  },
];

const categories = ["All", "Books", "Website", "Advice", "Listening"];

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = useMemo(() => {
    if (activeCategory === "All") return mockResources;
    return mockResources.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(9,9,11,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,9,11,0.03)_1px,transparent_1px)] bg-[size:44px_44px]"
      />

      <section className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 sm:text-[11px]">
                IELTS RESOURCES
              </p>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                {filteredResources.length} resources
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Resources that are actually useful.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-8">
              A clean collection of IELTS books, websites, tools, and study
              materials.
            </p>
          </div>
        </div>

        {/* FILTER */}
        <div className="sticky top-3 z-20 mt-4 overflow-x-auto rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-sm backdrop-blur-md">
          <div className="flex gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={[
                  "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm",
                  activeCategory === category
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                ].join(" ")}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* RESOURCES */}
        <div className="mt-4 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-200 hover:border-sky-300 hover:shadow-md sm:block sm:rounded-[1.75rem] sm:p-5 sm:hover:-translate-y-1 sm:hover:shadow-xl sm:hover:shadow-slate-200/70"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-sky-500 sm:inset-x-0 sm:top-0 sm:h-1.5 sm:w-auto" />

              <div className="flex min-w-0 flex-1 flex-col sm:block">
                <div className="flex items-center justify-between gap-3">
                  <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600 sm:text-[11px]">
                    {resource.category}
                  </span>

                  <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white sm:flex">
                    <ArrowUpRight />
                  </span>
                </div>

                <h2 className="mt-2 line-clamp-1 text-[15px] font-semibold tracking-[-0.03em] text-slate-950 sm:mt-7 sm:line-clamp-none sm:text-2xl">
                  {resource.title}
                </h2>

                <p className="mt-1 line-clamp-1 text-xs leading-5 text-slate-500 sm:mt-3 sm:line-clamp-3 sm:text-sm sm:leading-7">
                  {resource.description}
                </p>

                <div className="mt-2 hidden items-center justify-between border-t border-slate-100 pt-4 sm:flex">
                  <span className="text-sm font-semibold text-slate-950">
                    Open resource
                  </span>

                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    External
                  </span>
                </div>
              </div>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white sm:hidden">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;