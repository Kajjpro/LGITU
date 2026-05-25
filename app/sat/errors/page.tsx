"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/app/context";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type ErrorEntry = {
  id: string;
  category: string;
  note: string;
  date: string;
};

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const CATEGORIES_EN = [
  { id: "grammar",     label: "Grammar / Style",         color: "indigo" },
  { id: "transitions", label: "Transitions / Purpose",    color: "violet" },
  { id: "reading",     label: "Reading / Evidence",       color: "sky"    },
  { id: "notes",       label: "Notes / Main Idea",        color: "blue"   },
  { id: "algebra",     label: "Math · Algebra",           color: "emerald"},
  { id: "advanced",    label: "Math · Advanced Math",     color: "teal"   },
  { id: "geo",         label: "Math · Geometry / Stats",  color: "amber"  },
  { id: "other",       label: "Other",                    color: "zinc"   },
] as const;

const CATEGORIES_MN = [
  { id: "grammar",     label: "Дүрэм / Хэлбэр",           color: "indigo" },
  { id: "transitions", label: "Шилжилт / Зорилго",         color: "violet" },
  { id: "reading",     label: "Унших / Нотолгоо",          color: "sky"    },
  { id: "notes",       label: "Тэмдэглэл / Үндсэн санаа",  color: "blue"   },
  { id: "algebra",     label: "Математик · Алгебр",        color: "emerald"},
  { id: "advanced",    label: "Математик · Нийлмэл",       color: "teal"   },
  { id: "geo",         label: "Математик · Геометр / Статистик", color: "amber"},
  { id: "other",       label: "Бусад",                     color: "zinc"   },
] as const;

type Category = typeof CATEGORIES_EN[number];

const colorMap: Record<string, { pill: string; bar: string; badge: string }> = {
  indigo:  { pill: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",  bar: "bg-indigo-500",  badge: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20"  },
  violet:  { pill: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",  bar: "bg-violet-500",  badge: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20"  },
  sky:     { pill: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",              bar: "bg-sky-500",     badge: "border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-900/20"              },
  blue:    { pill: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",          bar: "bg-blue-500",    badge: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20"          },
  emerald: { pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", bar: "bg-emerald-500", badge: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20" },
  teal:    { pill: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",          bar: "bg-teal-500",    badge: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20"          },
  amber:   { pill: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",      bar: "bg-amber-500",   badge: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20"      },
  zinc:    { pill: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",             bar: "bg-zinc-400",    badge: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800/50"          },
};

const KEY = "lgitu_sat_errors";

const dayKey = (d = new Date()) => {
  const m = `${d.getMonth()+1}`.padStart(2,"0");
  const dd = `${d.getDate()}`.padStart(2,"0");
  return `${d.getFullYear()}-${m}-${dd}`;
};

const T = {
  en: {
    back: "← SAT",
    badge: "SAT Error Log",
    subbadge: "Track your weak spots",
    title: "Log your mistakes. Fix your patterns.",
    sub: "Every time you miss a question, log it here. See which areas keep tripping you up — then go fix them.",
    addTitle: "Log a new error",
    pickCat: "Pick the question type you got wrong:",
    notePh: "Optional: what tricked you, which question number, any note…",
    addBtn: "Log Error",
    clearNote: "Clear",
    statsTitle: "Your weak spots",
    topWeak: "Weakest area",
    totalErrors: "Total logged",
    todayErrors: "Today",
    recentTitle: "Recent errors",
    noErrors: "No errors logged yet. Start a practice session and log your first miss.",
    deleteAria: "Delete entry",
    clearAll: "Clear all entries",
    clearConfirm: "Delete all logged errors?",
    today: "Today",
    yesterday: "Yesterday",
  },
  mn: {
    back: "← SAT",
    badge: "SAT Алдааны тэмдэглэл",
    subbadge: "Сул талаа дагна",
    title: "Алдааг нь тэмдэглэ. Загварыг нь засаа.",
    sub: "Дадлагын асуулт бүрт алдсан асуултаа энд тэмдэглэ. Ямар хэсэгт байнга алддгийг хар — тэгээд засаарай.",
    addTitle: "Шинэ алдаа нэмэх",
    pickCat: "Буруу хийсэн асуултын төрлийг сонго:",
    notePh: "Заавал биш: юу хуурсан, асуулт дугаар, тэмдэглэл…",
    addBtn: "Алдаа бичих",
    clearNote: "Цэвэрлэх",
    statsTitle: "Таны сул талууд",
    topWeak: "Хамгийн сул хэсэг",
    totalErrors: "Нийт тэмдэглэсэн",
    todayErrors: "Өнөөдөр",
    recentTitle: "Сүүлийн алдаанууд",
    noErrors: "Алдаа тэмдэглэгдээгүй байна. Дадлага хийгээд анхны алдаагаа нэм.",
    deleteAria: "Устгах",
    clearAll: "Бүгдийг устгах",
    clearConfirm: "Бүх алдааны тэмдэглэлийг устгах уу?",
    today: "Өнөөдөр",
    yesterday: "Өчигдөр",
  },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function SATErrorLogPage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;
  const cats = (lang === "mn" ? CATEGORIES_MN : CATEGORIES_EN) as readonly Category[];

  const [mounted, setMounted] = useState(false);
  const [entries, setEntries] = useState<ErrorEntry[]>([]);
  const [selectedCat, setSelectedCat] = useState<string>("");
  const [note, setNote] = useState("");
  const [filterCat, setFilterCat] = useState<string>("all");

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const save = (next: ErrorEntry[]) => {
    setEntries(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const addEntry = () => {
    if (!selectedCat) return;
    const entry: ErrorEntry = {
      id: `${Date.now()}-${Math.random()}`,
      category: selectedCat,
      note: note.trim(),
      date: dayKey(),
    };
    save([entry, ...entries]);
    setNote("");
  };

  const deleteEntry = (id: string) => save(entries.filter(e => e.id !== id));

  const clearAll = () => {
    if (confirm(t.clearConfirm)) save([]);
  };

  // Stats
  const today = dayKey();
  const yesterday = (() => { const d = new Date(); d.setDate(d.getDate()-1); return dayKey(d); })();
  const todayCount = entries.filter(e => e.date === today).length;

  const counts: Record<string, number> = {};
  for (const e of entries) counts[e.category] = (counts[e.category] ?? 0) + 1;
  const topCat = Object.entries(counts).sort((a,b) => b[1]-a[1])[0]?.[0] ?? null;
  const topCatData = cats.find(c => c.id === topCat);

  const maxCount = Math.max(...Object.values(counts), 1);

  const filtered = filterCat === "all" ? entries : entries.filter(e => e.category === filterCat);

  const formatDate = (d: string) => {
    if (d === today) return t.today;
    if (d === yesterday) return t.yesterday;
    return d;
  };

  const getCat = (id: string) => cats.find(c => c.id === id);

  return (
    <main className="min-h-screen bg-[#F6F7FB] text-slate-950 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:opacity-30" />

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10">
        <a href="/sat" className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">{t.back}</a>

        {/* HEADER */}
        <header className="mb-8 sm:mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">{t.badge}</span>
            <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">{t.subbadge}</span>
          </div>
          <h1 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.04em] text-slate-950 dark:text-zinc-50 sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-zinc-400 sm:text-[15px] sm:leading-7">{t.sub}</p>
        </header>

        {/* ADD ERROR */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-[1.5rem] sm:p-6">
          <h2 className="mb-4 text-base font-bold tracking-[-0.02em] text-slate-950 dark:text-zinc-100">{t.addTitle}</h2>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">{t.pickCat}</p>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => {
              const col = colorMap[c.color];
              const active = selectedCat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCat(active ? "" : c.id)}
                  className={[
                    "rounded-full border px-3 py-1.5 text-[12px] font-bold transition",
                    active ? `${col.pill} border-transparent shadow-sm` : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
                  ].join(" ")}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder={t.notePh}
            rows={2}
            className="mt-4 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-zinc-400 focus:border-indigo-400 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-indigo-600 dark:focus:bg-zinc-800"
          />
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={addEntry}
              disabled={!selectedCat}
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t.addBtn}
            </button>
            {(selectedCat || note) && (
              <button onClick={() => { setSelectedCat(""); setNote(""); }} className="text-xs font-semibold text-zinc-400 underline underline-offset-4 transition hover:text-zinc-700 dark:hover:text-zinc-200">{t.clearNote}</button>
            )}
          </div>
        </section>

        {/* STATS */}
        {mounted && entries.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">{t.statsTitle}</h2>

            <div className="mb-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-2xl font-bold text-slate-950 dark:text-zinc-100">{entries.length}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">{t.totalErrors}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-2xl font-bold text-slate-950 dark:text-zinc-100">{todayCount}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">{t.todayErrors}</p>
              </div>
              {topCatData && (
                <div className={`rounded-2xl border p-4 ${colorMap[topCatData.color].badge}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wide ${colorMap[topCatData.color].pill.split(" ").slice(1).join(" ")}`}>{t.topWeak}</p>
                  <p className="mt-1.5 text-sm font-bold text-slate-950 dark:text-zinc-100 leading-tight">{topCatData.label}</p>
                </div>
              )}
            </div>

            {/* Category breakdown bars */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-5">
              <div className="space-y-3">
                {cats
                  .filter(c => counts[c.id])
                  .sort((a, b) => (counts[b.id] ?? 0) - (counts[a.id] ?? 0))
                  .map(c => {
                    const count = counts[c.id] ?? 0;
                    const pct = Math.round((count / maxCount) * 100);
                    return (
                      <div key={c.id}>
                        <div className="mb-1 flex justify-between text-[12px]">
                          <span className="font-semibold text-slate-700 dark:text-zinc-300">{c.label}</span>
                          <span className="font-bold text-slate-950 dark:text-zinc-100">{count}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                          <div className={`h-full rounded-full transition-all duration-700 ${colorMap[c.color].bar}`} style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        )}

        {/* ENTRY LIST */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">{t.recentTitle}</h2>
            {mounted && entries.length > 0 && (
              <button onClick={clearAll} className="text-[11px] font-semibold text-zinc-400 underline underline-offset-4 transition hover:text-red-500 dark:hover:text-red-400">{t.clearAll}</button>
            )}
          </div>

          {/* Filter pills */}
          {mounted && entries.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              <button
                onClick={() => setFilterCat("all")}
                className={["rounded-full px-3 py-1 text-[12px] font-bold transition", filterCat === "all" ? "bg-slate-950 text-white dark:bg-zinc-100 dark:text-zinc-950" : "border border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"].join(" ")}
              >
                All
              </button>
              {cats.filter(c => counts[c.id]).map(c => (
                <button
                  key={c.id}
                  onClick={() => setFilterCat(filterCat === c.id ? "all" : c.id)}
                  className={["rounded-full px-3 py-1 text-[12px] font-bold transition", filterCat === c.id ? `${colorMap[c.color].pill} shadow-sm` : "border border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"].join(" ")}
                >
                  {c.label}
                  <span className="ml-1.5 opacity-60">{counts[c.id]}</span>
                </button>
              ))}
            </div>
          )}

          {!mounted || filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-white/50 p-8 text-center dark:border-zinc-800">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">{t.noErrors}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {filtered.map(entry => {
                const cat = getCat(entry.category);
                if (!cat) return null;
                const col = colorMap[cat.color];
                return (
                  <div key={entry.id} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${col.pill}`}>{cat.label}</span>
                        <span className="text-[11px] text-zinc-400 dark:text-zinc-500">{formatDate(entry.date)}</span>
                      </div>
                      {entry.note && (
                        <p className="mt-2 text-[13px] leading-5 text-slate-600 dark:text-zinc-400">{entry.note}</p>
                      )}
                    </div>
                    <button
                      onClick={() => deleteEntry(entry.id)}
                      aria-label={t.deleteAria}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-zinc-300 transition hover:bg-red-50 hover:text-red-500 dark:text-zinc-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                    >
                      <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M3 4h10M6 4V2.5h4V4M5 4l.5 9h5l.5-9" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
