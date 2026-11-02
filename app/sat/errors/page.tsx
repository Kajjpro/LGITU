"use client";

import { useEffect, useMemo, useState } from "react";
import { useSite } from "@/app/context";


type ErrorEntry = {
  id: string;
  category: string;
  note: string;
  date: string;
  fixed?: boolean;
};



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

const colorMap: Record<string, { pill: string; bar: string; badge: string; text: string }> = {
  indigo:  { pill: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",  bar: "bg-indigo-500",  badge: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20",  text: "text-indigo-700 dark:text-indigo-300"  },
  violet:  { pill: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",  bar: "bg-violet-500",  badge: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20",  text: "text-violet-700 dark:text-violet-300"  },
  sky:     { pill: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",              bar: "bg-sky-500",     badge: "border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-900/20",              text: "text-sky-700 dark:text-sky-300"        },
  blue:    { pill: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",          bar: "bg-blue-500",    badge: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",          text: "text-blue-700 dark:text-blue-300"      },
  emerald: { pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", bar: "bg-emerald-500", badge: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300" },
  teal:    { pill: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",          bar: "bg-teal-500",    badge: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",          text: "text-teal-700 dark:text-teal-300"      },
  amber:   { pill: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",      bar: "bg-amber-500",   badge: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",      text: "text-amber-700 dark:text-amber-300"    },
  zinc:    { pill: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",             bar: "bg-zinc-400",    badge: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800/50",          text: "text-zinc-600 dark:text-zinc-300"      },
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
    badge: "Review Mistakes",
    subbadge: "Turn misses into mastery",
    title: "Log your mistakes. Review them. Master them.",
    sub: "Every time you miss a question, log it here. Run a quick review session to test yourself — and mark each weak spot mastered once it sticks.",
    addTitle: "Log a new mistake",
    pickCat: "Pick the question type you got wrong:",
    notePh: "Optional: what tricked you, which question number, the correct approach…",
    addBtn: "Log mistake",
    clearNote: "Clear",
    statsTitle: "Your weak spots",
    topWeak: "Weakest area",
    totalErrors: "Total logged",
    todayErrors: "Today",
    masteredStat: "Mastered",
    masteryTitle: "Mastery progress",
    masteryDone: "All logged mistakes mastered. Strong work.",
    masteryLeft: (n: number) => `${n} still to master`,
    recentTitle: "Your mistakes",
    noErrors: "No mistakes logged yet. Start a practice session and log your first miss.",
    noMatch: "Nothing matches your filters.",
    deleteAria: "Delete entry",
    masterAria: "Mark as mastered",
    unmasterAria: "Move back to active",
    clearAll: "Clear all",
    clearConfirm: "Delete all logged mistakes?",
    today: "Today",
    yesterday: "Yesterday",
    searchPh: "Search your notes…",
    masteredTag: "Mastered",
    showMastered: "Show mastered",
    hideMastered: "Hide mastered",
    startReview: "Start review",
    reviewLabel: "Review mode",
    reviewBlurb: "Test yourself on every active mistake, one at a time.",
    reviewEmpty: "Nothing to review — every mistake is already mastered. 🎉",
    recallPrompt: "Recall: what tricked you here, and what's the right approach?",
    reveal: "Reveal my note",
    noNote: "No note saved for this one — try to recall it anyway.",
    stillHard: "Still struggling",
    gotIt: "Got it — mastered",
    reviewProgress: (a: number, b: number) => `${a} of ${b}`,
    reviewDone: "Review complete!",
    reviewSummary: (r: number, m: number) => `Reviewed ${r} · mastered ${m} this session`,
    reviewAgain: "Review again",
    close: "Close",
  },
  mn: {
    back: "← SAT",
    badge: "Алдаа дахин харах",
    subbadge: "Алдаагаа мастер бол",
    title: "Алдаагаа бич. Давт. Эзэмш.",
    sub: "Алдсан асуулт бүрээ энд тэмдэглэ. Богино давталт хийж өөрийгөө шалга — тогтсон сул талаа эзэмшсэн гэж тэмдэглэ.",
    addTitle: "Шинэ алдаа нэмэх",
    pickCat: "Буруу хийсэн асуултын төрлийг сонго:",
    notePh: "Заавал биш: юу хуурсан, асуулт дугаар, зөв арга…",
    addBtn: "Алдаа бичих",
    clearNote: "Цэвэрлэх",
    statsTitle: "Таны сул талууд",
    topWeak: "Хамгийн сул хэсэг",
    totalErrors: "Нийт тэмдэглэсэн",
    todayErrors: "Өнөөдөр",
    masteredStat: "Эзэмшсэн",
    masteryTitle: "Эзэмшилтийн явц",
    masteryDone: "Бүх алдааг эзэмшсэн. Гайхалтай.",
    masteryLeft: (n: number) => `${n} эзэмших үлдсэн`,
    recentTitle: "Таны алдаанууд",
    noErrors: "Алдаа тэмдэглэгдээгүй байна. Дадлага хийгээд анхны алдаагаа нэм.",
    noMatch: "Шүүлтүүрт тохирох зүйл алга.",
    deleteAria: "Устгах",
    masterAria: "Эзэмшсэн гэж тэмдэглэх",
    unmasterAria: "Идэвхтэй рүү буцаах",
    clearAll: "Бүгдийг устгах",
    clearConfirm: "Бүх алдааг устгах уу?",
    today: "Өнөөдөр",
    yesterday: "Өчигдөр",
    searchPh: "Тэмдэглэлээс хайх…",
    masteredTag: "Эзэмшсэн",
    showMastered: "Эзэмшсэнийг харах",
    hideMastered: "Эзэмшсэнийг нуух",
    startReview: "Давтаж эхлэх",
    reviewLabel: "Давтах горим",
    reviewBlurb: "Идэвхтэй алдаа бүрээ нэг нэгээр нь шалга.",
    reviewEmpty: "Давтах зүйл алга — бүгдийг эзэмшсэн. 🎉",
    recallPrompt: "Эргэн сана: энд юу хуурсан, зөв арга нь юу вэ?",
    reveal: "Тэмдэглэлээ харах",
    noNote: "Энд тэмдэглэл алга — гэхдээ эргэн санахыг хичээ.",
    stillHard: "Хэцүү хэвээр",
    gotIt: "Ойлголоо — эзэмшсэн",
    reviewProgress: (a: number, b: number) => `${b}-аас ${a}`,
    reviewDone: "Давталт дууслаа!",
    reviewSummary: (r: number, m: number) => `${r} давтлаа · энэ удаа ${m} эзэмшлээ`,
    reviewAgain: "Дахин давтах",
    close: "Хаах",
  },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function SATReviewMistakesPage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;
  const cats = (lang === "mn" ? CATEGORIES_MN : CATEGORIES_EN) as readonly Category[];

  const [mounted, setMounted] = useState(false);
  const [entries, setEntries] = useState<ErrorEntry[]>([]);
  const [selectedCat, setSelectedCat] = useState<string>("");
  const [note, setNote] = useState("");
  const [filterCat, setFilterCat] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [showMastered, setShowMastered] = useState(false);

  // Review session
  const [reviewing, setReviewing] = useState(false);
  const [queue, setQueue] = useState<ErrorEntry[]>([]);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [masteredThisSession, setMasteredThisSession] = useState(0);

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
      fixed: false,
    };
    save([entry, ...entries]);
    setNote("");
  };

  const deleteEntry = (id: string) => save(entries.filter(e => e.id !== id));

  const toggleFixed = (id: string) =>
    save(entries.map(e => e.id === id ? { ...e, fixed: !e.fixed } : e));

  const clearAll = () => {
    if (confirm(t.clearConfirm)) save([]);
  };

  // ── Stats ──
  const today = dayKey();
  const yesterday = (() => { const d = new Date(); d.setDate(d.getDate()-1); return dayKey(d); })();
  const todayCount = entries.filter(e => e.date === today).length;
  const masteredCount = entries.filter(e => e.fixed).length;
  const activeEntries = entries.filter(e => !e.fixed);
  const masteryPct = entries.length ? Math.round((masteredCount / entries.length) * 100) : 0;

  // Weak spots count only unmastered (active) mistakes — that's what still needs work
  const counts: Record<string, number> = {};
  for (const e of activeEntries) counts[e.category] = (counts[e.category] ?? 0) + 1;
  const topCat = Object.entries(counts).sort((a,b) => b[1]-a[1])[0]?.[0] ?? null;
  const topCatData = cats.find(c => c.id === topCat);
  const maxCount = Math.max(...Object.values(counts), 1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter(e => {
      if (!showMastered && e.fixed) return false;
      if (filterCat !== "all" && e.category !== filterCat) return false;
      if (q) {
        const cat = cats.find(c => c.id === e.category);
        const hay = `${e.note} ${cat?.label ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [entries, filterCat, query, showMastered, cats]);

  const formatDate = (d: string) => {
    if (d === today) return t.today;
    if (d === yesterday) return t.yesterday;
    return d;
  };

  const getCat = (id: string) => cats.find(c => c.id === id);

  // ── Review session controls ──
  const startReview = () => {
    const q = entries.filter(e => !e.fixed);
    setQueue(q);
    setReviewIdx(0);
    setRevealed(false);
    setMasteredThisSession(0);
    setReviewing(true);
  };

  const closeReview = () => setReviewing(false);

  const reviewNext = () => {
    setRevealed(false);
    setReviewIdx(i => i + 1);
  };

  const reviewMaster = () => {
    const cur = queue[reviewIdx];
    if (cur) {
      toggleFixed(cur.id);
      setMasteredThisSession(n => n + 1);
    }
    reviewNext();
  };

  const reviewCur = queue[reviewIdx];
  const reviewCatData = reviewCur ? getCat(reviewCur.category) : undefined;
  const reviewDone = reviewing && reviewIdx >= queue.length;

  return (
    <main className="min-h-screen bg-white text-slate-950 antialiased dark:bg-zinc-950 dark:text-zinc-100">

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

        {/* REVIEW CTA */}
        {mounted && entries.length > 0 && (
          <section className="mb-8 flex flex-col gap-4 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-5 dark:border-indigo-900/50 dark:from-indigo-950/40 dark:to-zinc-900 sm:flex-row sm:items-center sm:justify-between sm:rounded-[1.5rem] sm:p-6">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">{t.reviewLabel}</p>
              <h2 className="mt-1 text-lg font-bold tracking-[-0.02em] text-slate-950 dark:text-zinc-100">{t.reviewBlurb}</h2>
              <p className="mt-1 text-[13px] text-slate-500 dark:text-zinc-400">
                {activeEntries.length > 0
                  ? `${activeEntries.length} ${lang === "mn" ? "идэвхтэй алдаа" : "active"} · ${masteredCount} ${t.masteredStat.toLowerCase()}`
                  : t.reviewEmpty}
              </p>
            </div>
            <button
              onClick={startReview}
              disabled={activeEntries.length === 0}
              className="shrink-0 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t.startReview}
            </button>
          </section>
        )}

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

            <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-2xl font-bold text-slate-950 dark:text-zinc-100">{entries.length}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">{t.totalErrors}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-2xl font-bold text-slate-950 dark:text-zinc-100">{todayCount}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">{t.todayErrors}</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20">
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{masteredCount}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-600/80 dark:text-emerald-400/80">{t.masteredStat}</p>
              </div>
              {topCatData ? (
                <div className={`rounded-2xl border p-4 ${colorMap[topCatData.color].badge}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wide ${colorMap[topCatData.color].text}`}>{t.topWeak}</p>
                  <p className="mt-1.5 text-sm font-bold leading-tight text-slate-950 dark:text-zinc-100">{topCatData.label}</p>
                </div>
              ) : (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">{t.topWeak}</p>
                  <p className="mt-1.5 text-sm font-bold leading-tight text-emerald-700 dark:text-emerald-300">—</p>
                </div>
              )}
            </div>

            {/* Mastery progress */}
            <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[12px] font-bold text-slate-700 dark:text-zinc-300">{t.masteryTitle}</span>
                <span className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400">{masteredCount}/{entries.length} · {masteryPct}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-700" style={{ width: `${masteryPct}%` }} />
              </div>
              <p className="mt-2 text-[12px] text-slate-500 dark:text-zinc-400">
                {activeEntries.length === 0 ? t.masteryDone : t.masteryLeft(activeEntries.length)}
              </p>
            </div>

            {/* Category breakdown bars (active mistakes) */}
            {Object.keys(counts).length > 0 && (
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
            )}
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

          {mounted && entries.length > 0 && (
            <>
              {/* Search */}
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={t.searchPh}
                className="mb-3 w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-zinc-400 focus:border-indigo-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-indigo-600"
              />

              {/* Filter pills */}
              <div className="mb-4 flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setFilterCat("all")}
                  className={["rounded-full px-3 py-1 text-[12px] font-bold transition", filterCat === "all" ? "bg-slate-950 text-white dark:bg-zinc-100 dark:text-zinc-950" : "border border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"].join(" ")}
                >
                  All
                </button>
                {cats.filter(c => entries.some(e => e.category === c.id && (showMastered || !e.fixed))).map(c => (
                  <button
                    key={c.id}
                    onClick={() => setFilterCat(filterCat === c.id ? "all" : c.id)}
                    className={["rounded-full px-3 py-1 text-[12px] font-bold transition", filterCat === c.id ? `${colorMap[c.color].pill} shadow-sm` : "border border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"].join(" ")}
                  >
                    {c.label}
                  </button>
                ))}
                {masteredCount > 0 && (
                  <button
                    onClick={() => setShowMastered(v => !v)}
                    className={["ml-auto rounded-full px-3 py-1 text-[12px] font-bold transition", showMastered ? "bg-emerald-600 text-white" : "border border-emerald-300 bg-emerald-50 text-emerald-700 hover:border-emerald-400 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"].join(" ")}
                  >
                    {showMastered ? t.hideMastered : t.showMastered}
                  </button>
                )}
              </div>
            </>
          )}

          {!mounted || entries.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-white/50 p-8 text-center dark:border-zinc-800">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">{t.noErrors}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-white/50 p-8 text-center dark:border-zinc-800">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">{t.noMatch}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {filtered.map(entry => {
                const cat = getCat(entry.category);
                if (!cat) return null;
                const col = colorMap[cat.color];
                return (
                  <div key={entry.id} className={["flex items-start gap-3 rounded-2xl border p-4 transition", entry.fixed ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20" : "border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"].join(" ")}>
                    <button
                      onClick={() => toggleFixed(entry.id)}
                      aria-label={entry.fixed ? t.unmasterAria : t.masterAria}
                      title={entry.fixed ? t.unmasterAria : t.masterAria}
                      className={["mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition", entry.fixed ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 text-transparent hover:border-emerald-400 dark:border-zinc-600"].join(" ")}
                    >
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 8.5 6.5 11.5 12.5 5" />
                      </svg>
                    </button>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${col.pill}`}>{cat.label}</span>
                        {entry.fixed && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">{t.masteredTag}</span>
                        )}
                        <span className="text-[11px] text-zinc-400 dark:text-zinc-500">{formatDate(entry.date)}</span>
                      </div>
                      {entry.note && (
                        <p className={["mt-2 text-[13px] leading-5", entry.fixed ? "text-slate-400 line-through dark:text-zinc-500" : "text-slate-600 dark:text-zinc-400"].join(" ")}>{entry.note}</p>
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

      {/* ── REVIEW SESSION OVERLAY ─────────────────────────────────────── */}
      {reviewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" onClick={closeReview}>
          <div
            className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 sm:p-7"
            onClick={e => e.stopPropagation()}
          >
            {!reviewDone && reviewCur && reviewCatData ? (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">{t.reviewLabel}</span>
                  <span className="text-[12px] font-bold text-zinc-400">{t.reviewProgress(reviewIdx + 1, queue.length)}</span>
                </div>

                {/* progress bar */}
                <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div className="h-full rounded-full bg-indigo-500 transition-all duration-300" style={{ width: `${((reviewIdx) / queue.length) * 100}%` }} />
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${colorMap[reviewCatData.color].pill}`}>{reviewCatData.label}</span>
                  <span className="text-[11px] text-zinc-400">{formatDate(reviewCur.date)}</span>
                </div>

                <p className="mb-5 text-[15px] font-semibold leading-6 text-slate-800 dark:text-zinc-200">{t.recallPrompt}</p>

                {!revealed ? (
                  <button
                    onClick={() => setRevealed(true)}
                    className="mb-3 w-full rounded-xl border border-indigo-200 bg-indigo-50 py-3 text-sm font-bold text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-300"
                  >
                    {t.reveal}
                  </button>
                ) : (
                  <div className="mb-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800">
                    <p className={["text-[14px] leading-6", reviewCur.note ? "text-slate-700 dark:text-zinc-200" : "italic text-zinc-400 dark:text-zinc-500"].join(" ")}>
                      {reviewCur.note || t.noNote}
                    </p>
                  </div>
                )}

                {revealed && (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={reviewNext}
                      className="rounded-xl border border-zinc-300 bg-white py-3 text-sm font-bold text-slate-700 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                    >
                      {t.stillHard}
                    </button>
                    <button
                      onClick={reviewMaster}
                      className="rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                    >
                      {t.gotIt}
                    </button>
                  </div>
                )}

                <button onClick={closeReview} className="mt-4 w-full text-center text-[12px] font-semibold text-zinc-400 underline underline-offset-4 transition hover:text-zinc-700 dark:hover:text-zinc-200">{t.close}</button>
              </>
            ) : (
              <div className="py-4 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-950 dark:text-zinc-100">{t.reviewDone}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">{t.reviewSummary(queue.length, masteredThisSession)}</p>
                <div className="mt-5 flex gap-2">
                  <button onClick={startReview} disabled={activeEntries.length === 0} className="flex-1 rounded-xl border border-zinc-300 bg-white py-3 text-sm font-bold text-slate-700 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">{t.reviewAgain}</button>
                  <button onClick={closeReview} className="flex-1 rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">{t.close}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
