"use client";

import { useEffect, useMemo, useState } from "react";

type Book = {
  id: string;
  name: string;
  img: string | null;
  link: string;
  category?: string;
  description?: string;
};

function toEmbedUrl(link: string): string {
  const fileMatch = link.match(/drive\.google\.com\/file\/d\/([^/?#]+)/);
  if (fileMatch) return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  const openMatch = link.match(/drive\.google\.com\/open\?.*[?&]id=([^&#]+)/);
  if (openMatch) return `https://drive.google.com/file/d/${openMatch[1]}/preview`;
  return link;
}

const Page = () => {
  const [allbooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [reader, setReader] = useState<Book | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/books/allbooks");
        setAllBooks(await res.json());
      } catch (e) {
        console.error("Failed to fetch books:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    document.body.style.overflow = reader ? "hidden" : "";
    if (reader) setIframeLoaded(false);
    return () => { document.body.style.overflow = ""; };
  }, [reader]);

  const categories = useMemo(() => {
    const unique = allbooks.map((b) => b.category).filter(Boolean) as string[];
    return ["All", ...Array.from(new Set(unique))];
  }, [allbooks]);

  const filteredBooks = useMemo(() => {
    if (activeCategory === "All") return allbooks;
    return allbooks.filter((b) => b.category === activeCategory);
  }, [allbooks, activeCategory]);

  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-zinc-950 dark:text-zinc-100">

      {/* ── IN-SITE READER MODAL ── */}
      {reader && (
        <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950">
          <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">SAT Books</p>
              <h2 className="truncate text-sm font-bold text-zinc-100">{reader.name}</h2>
            </div>
            <div className="flex shrink-0 items-center gap-2 pl-4">
              <a
                href={reader.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800 px-3 text-xs font-semibold text-zinc-300 transition hover:bg-zinc-700"
              >
                Open in new tab ↗
              </a>
              <button
                onClick={() => setReader(null)}
                aria-label="Close reader"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 transition hover:bg-zinc-700"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="relative min-h-0 flex-1">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-950">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-indigo-500" />
                <p className="text-xs text-zinc-500">Loading preview…</p>
                <a
                  href={reader.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-zinc-700"
                >
                  If it doesn&apos;t load, open here ↗
                </a>
              </div>
            )}
            <iframe
              key={reader.id}
              src={toEmbedUrl(reader.link)}
              className="h-full w-full border-0"
              allow="autoplay"
              title={reader.name}
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </div>
      )}

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <a href="/sat" className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← SAT</a>

        {/* Hero */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8 lg:p-10">
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">SAT Books</p>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                {allbooks.length} books
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.055em] text-slate-950 dark:text-zinc-50 sm:text-5xl">
              Books that are actually useful for SAT prep.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-zinc-400 sm:text-base sm:leading-8">
              Read any book directly here — no downloads, no redirects. Click a book to open it.
            </p>
          </div>
        </div>

        {/* Filter */}
        {categories.length > 1 && (
          <div className="sticky top-3 z-20 mt-5 overflow-x-auto rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90">
            <div className="flex gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
                    activeCategory === category
                      ? "bg-slate-950 text-white dark:bg-zinc-100 dark:text-zinc-950"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                  ].join(" ")}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Books grid */}
        <div className="mt-6">
          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-[330px] animate-pulse rounded-3xl border border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900" />
              ))}
            </div>
          ) : filteredBooks.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-bold text-slate-950 dark:text-zinc-100">No books found.</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">Try another category.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredBooks.map((book) => (
                <button
                  key={book.id}
                  onClick={() => setReader(book)}
                  className="group flex overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-700"
                >
                  <article className="flex w-full flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-zinc-800">
                      {book.img ? (
                        <img
                          src={book.img}
                          alt={book.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-zinc-800 dark:to-zinc-900">
                          <span className="text-3xl font-bold text-slate-300 dark:text-zinc-600">{book.name.charAt(0)}</span>
                        </div>
                      )}
                      {book.category && (
                        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200">
                          {book.category}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h2 className="line-clamp-2 text-[15px] font-bold leading-snug tracking-tight text-slate-950 dark:text-zinc-100">
                        {book.name}
                      </h2>
                      {book.description && (
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-zinc-400">
                          {book.description}
                        </p>
                      )}
                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-zinc-800">
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">Read now</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-900/30 dark:text-indigo-400 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                          →
                        </span>
                      </div>
                    </div>
                  </article>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
