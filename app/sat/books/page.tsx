"use client";

import { useEffect, useMemo, useState } from "react";

type Book = {
  id: string;
  name: string;
  img: string;
  link: string;
  category?: string;
  description?: string;
};

const Page = () => {
  const [allbooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const callBooks = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/books/allbooks", {
        method: "GET",
      });

      const data = await response.json();
      setAllBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callBooks();
  }, []);

  const categories = useMemo(() => {
    const unique = allbooks
      .map((book) => book.category)
      .filter(Boolean) as string[];

    return ["All", ...Array.from(new Set(unique))];
  }, [allbooks]);

  const filteredBooks = useMemo(() => {
    if (activeCategory === "All") return allbooks;

    return allbooks.filter((book) => book.category === activeCategory);
  }, [allbooks, activeCategory]);

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                SAT Books
              </p>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                {allbooks.length} books
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Books that are actually useful for SAT prep.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              A simple collection of SAT books for Math, Reading, Writing, and
              full test preparation. Pick one book and use it well.
            </p>
          </div>
        </div>

        {/* Filter */}
        {categories.length > 1 && (
          <div className="sticky top-3 z-20 mt-5 overflow-x-auto rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-sm backdrop-blur-md">
            <div className="flex gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
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
        )}

        {/* Books */}
        <div className="mt-6">
          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[330px] animate-pulse rounded-3xl border border-slate-200 bg-white"
                />
              ))}
            </div>
          ) : filteredBooks.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
              <h2 className="text-lg font-bold text-slate-950">
                No books found.
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Try another category.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredBooks.map((book) => (
                <a
                  key={book.id}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <article className="flex w-full flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={book.img}
                        alt={book.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />

                      {book.category && (
                        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur">
                          {book.category}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <h2 className="line-clamp-2 text-[16px] font-bold leading-snug tracking-[-0.025em] text-slate-950">
                        {book.name}
                      </h2>

                      {book.description && (
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                          {book.description}
                        </p>
                      )}

                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="text-sm font-bold text-slate-950">
                          Open book
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white">
                          ↗
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;