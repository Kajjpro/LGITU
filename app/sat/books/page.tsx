"use client"
import { useEffect, useState } from "react";

type Book = {
    id: string;
    name: string;
    img: string;
    link: string;
    category?: string;
    description?: string;
  };
  

  
  const Page = () => {
    const [allbooks, setAllBooks]= useState<Book[]>([])
    const Callbooks = async()=>{
const allbooky = await fetch("/api/books/allbooks",{
    method:"GET",

})
const res = await allbooky.json()
setAllBooks(res)

    }
    console.log(allbooks)
    useEffect(()=>{
Callbooks()
    },[])
    return (
      <main className="min-h-screen bg-[#f6f7fb] text-slate-950">
        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          {/* Header */}
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
              SAT Books
            </p>
  
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Books for SAT preparation.
            </h1>
  
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Browse recommended SAT books for Math, Reading, Writing, and full test preparation.
            </p>
          </div>
  
          {/* Books Grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allbooks?.map((book) => (
              <a
                key={book.id}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <div className="aspect-[5/4] overflow-hidden bg-slate-100">
                  <img
                    src={book.img}
                    alt={book.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
  
                <div className="p-3.5">
                  {book.category && (
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                      {book.category}
                    </span>
                  )}
  
                  <h2 className="mt-2 text-base font-bold tracking-[-0.03em] text-slate-950">
                    {book.name}
                  </h2>
  
                  {book.description && (
                    <p className="mt-2 line-clamp-1 text-xs leading-5 text-slate-500">
                      {book.description}
                    </p>
                  )}
  
                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                    <p className="text-sm font-semibold text-slate-950">Open book</p>
  
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
 
      </main>
    );
  };
  
  export default Page;
  