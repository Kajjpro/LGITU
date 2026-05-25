"use client";

import { useSite } from "../context";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.9" y1="4.9" x2="7.1" y2="7.1" />
      <line x1="16.9" y1="16.9" x2="19.1" y2="19.1" />
      <line x1="4.9" y1="19.1" x2="7.1" y2="16.9" />
      <line x1="16.9" y1="7.1" x2="19.1" y2="4.9" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function SiteControls({ className = "" }: { className?: string }) {
  const { dark, lang, toggleDark, setLang } = useSite();

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5 rounded-lg border border-zinc-200 bg-white px-1.5 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <button
          onClick={() => setLang("en")}
          className={`rounded-md px-2 py-0.5 text-[12px] font-bold transition-colors ${
            lang === "en"
              ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100"
              : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
          }`}
        >
          EN
        </button>
        <span className="text-[11px] text-zinc-300 dark:text-zinc-600">/</span>
        <button
          onClick={() => setLang("mn")}
          className={`rounded-md px-2 py-0.5 text-[12px] font-bold transition-colors ${
            lang === "mn"
              ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100"
              : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
          }`}
        >
          МН
        </button>
      </div>

      <button
        onClick={toggleDark}
        aria-label="Toggle theme"
        className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 transition-colors hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
