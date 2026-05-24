"use client";

import { useMemo, useState } from "react";

type Resource = {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  level?: string;
  chinese?: string;
};

const resources: Resource[] = [];

const fallbackCategories = ["All", "Vocabulary", "Grammar", "Listening", "Reading", "Tools"];

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

  const categories = useMemo(() => {
    const unique = resources.map((r) => r.category).filter(Boolean);
    return unique.length ? ["All", ...Array.from(new Set(unique))] : fallbackCategories;
  }, []);

  const filteredResources = useMemo(() => {
    if (activeCategory === "All") return resources;
    return resources.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

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
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 sm:text-[11px]">
                HSK RESOURCES · 学习资源
              </p>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                {resources.length} resources
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Useful resources for HSK study.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Add your HSK vocabulary, grammar, listening, reading, and tool resources here.
            </p>
          </div>
        </div>

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

        {filteredResources.length === 0 ? (
          <div className="mt-4 rounded-3xl border border-dashed border-slate-300 bg-white/70 p-6 text-center sm:mt-6 sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">
              Ready for your data
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              No resources added yet.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Connect your backend data to the <code className="rounded bg-slate-100 px-1 py-0.5">resources</code> array or replace it with your fetched data.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <a
                key={resource.id}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-200 hover:border-red-300 hover:shadow-md sm:block sm:rounded-[1.75rem] sm:p-5 sm:hover:-translate-y-1 sm:hover:shadow-xl sm:hover:shadow-slate-200/70"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-red-500 sm:inset-x-0 sm:top-0 sm:h-1.5 sm:w-auto" />

                <div className="flex min-w-0 flex-1 flex-col sm:block">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600 sm:text-[11px]">
                        {resource.category}
                      </span>

                      {resource.level && (
                        <span className="w-fit rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-700 sm:text-[11px]">
                          {resource.level}
                        </span>
                      )}
                    </div>

                    <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white sm:flex">
                      <ArrowUpRight />
                    </span>
                  </div>

                  <h2 className="mt-2 line-clamp-1 text-[15px] font-semibold tracking-[-0.03em] text-slate-950 sm:mt-7 sm:line-clamp-none sm:text-2xl">
                    {resource.title}
                  </h2>

                  {resource.chinese && (
                    <p className="mt-0.5 line-clamp-1 text-xs font-medium text-slate-400">
                      {resource.chinese}
                    </p>
                  )}

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
        )}
      </section>
    </main>
  );
};

export default Page;