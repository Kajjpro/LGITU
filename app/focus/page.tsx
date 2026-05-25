"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSite } from "@/app/context";
import { SiteControls } from "@/app/sitecomponents/controls";

// ─── COPY ────────────────────────────────────────────────────────────────────

const T = {
  en: {
    back: "Home",
    badge: "Focus Room",
    title: "Lock in.",
    sub: "Track your focus sessions, study streak, and exam countdown in one place.",
    focus: "Focus",
    brk: "Break",
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    sessionDone: "Session done!",
    breakDone: "Break over — back to it.",
    length: "min",
    studying: "Studying:",
    studyPh: "e.g. SAT Grammar, HSK vocab, IELTS Reading…",
    todayLog: "Today's sessions",
    noLog: "No sessions yet — start your first focus block.",
    streak: "Day streak",
    totalSess: "Total sessions",
    totalMin: "Minutes focused",
    daysLeft: "days left",
    dayLeft: "day left",
    examToday: "Exam day — you've got this.",
    examPast: "Exam passed.",
    noExam: "Set exam date",
    examName: "Exam",
    examNamePh: "HSK 6, SAT, IELTS…",
    examDate: "Date",
    setExam: "Save",
    clearExam: "Clear",
    editExam: "Edit",
  },
  mn: {
    back: "Нүүр",
    badge: "Фокус өрөө",
    title: "Анхаар.",
    sub: "Фокус сешн, судлах тасрал, шалгалтын тоолуурыг нэг дор дагна.",
    focus: "Фокус",
    brk: "Амралт",
    start: "Эхлүүлэх",
    pause: "Зогсоох",
    reset: "Дахин",
    sessionDone: "Сешн дууслаа!",
    breakDone: "Амралт дууслаа — буцаж ор.",
    length: "мин",
    studying: "Судалж байна:",
    studyPh: "жнь: SAT дүрэм, HSK үг, IELTS унших…",
    todayLog: "Өнөөдрийн сешнүүд",
    noLog: "Сешн байхгүй — анхны фокус блокоо эхлүүл.",
    streak: "Өдрийн тасрал",
    totalSess: "Нийт сешн",
    totalMin: "Фокус минут",
    daysLeft: "хоног үлдсэн",
    dayLeft: "хоног үлдсэн",
    examToday: "Шалгалтын өдөр — чи чадна.",
    examPast: "Шалгалт өнгөрсөн.",
    noExam: "Шалгалт оруулах",
    examName: "Нэр",
    examNamePh: "HSK 6, SAT, IELTS…",
    examDate: "Огноо",
    setExam: "Хадгалах",
    clearExam: "Арилгах",
    editExam: "Засах",
  },
};

const FOCUS_PRESETS = [15, 25, 50];
const BREAK_PRESETS = [5, 10, 15];

const KEYS = {
  streak: "lgitu_streak",
  lastDay: "lgitu_lastDay",
  sessions: "lgitu_sessions",
  minutes: "lgitu_minutes",
  todayDay: "lgitu_todayDay",
  todayLog: "lgitu_todayLog",
  focusMin: "lgitu_focusMin",
  breakMin: "lgitu_breakMin",
  examName: "lgitu_examName",
  examDate: "lgitu_examDate",
};

type SessionLog = { time: string; topic: string; duration: number };

const dayKey = (d = new Date()) => {
  const m = `${d.getMonth()+1}`.padStart(2,"0");
  const dd = `${d.getDate()}`.padStart(2,"0");
  return `${d.getFullYear()}-${m}-${dd}`;
};

const isYest = (stored: string, today: string) => {
  const y = new Date(today); y.setDate(y.getDate()-1); return dayKey(y) === stored;
};

const fmt = (s: number) => `${Math.floor(s/60)}:${`${s%60}`.padStart(2,"0")}`;

const nowHHMM = () => {
  const d = new Date();
  return `${`${d.getHours()}`.padStart(2,"0")}:${`${d.getMinutes()}`.padStart(2,"0")}`;
};

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function FocusPage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;

  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"focus"|"break">("focus");
  const [running, setRunning] = useState(false);
  const [focusMin, setFocusMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const [left, setLeft] = useState(25*60);
  const [topic, setTopic] = useState("");

  const [streak, setStreak] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [todayLog, setTodayLog] = useState<SessionLog[]>([]);
  const [flash, setFlash] = useState<string|null>(null);

  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [nameDraft, setNameDraft] = useState("");
  const [dateDraft, setDateDraft] = useState("");
  const [editingExam, setEditingExam] = useState(false);

  const audioRef = useRef<AudioContext|null>(null);

  useEffect(() => {
    setMounted(true);
    const num = (k:string,d:number) => { const v=Number(localStorage.getItem(k)); return Number.isFinite(v)&&v>0?v:d; };
    const fm = num(KEYS.focusMin,25); const bm = num(KEYS.breakMin,5);
    setFocusMin(fm); setBreakMin(bm); setLeft(fm*60);

    const today = dayKey();
    const storedLast = localStorage.getItem(KEYS.lastDay) ?? "";
    const storedStreak = Number(localStorage.getItem(KEYS.streak)) || 0;
    setStreak(storedLast===today||isYest(storedLast,today)?storedStreak:0);
    setSessions(Number(localStorage.getItem(KEYS.sessions))||0);
    setMinutes(Number(localStorage.getItem(KEYS.minutes))||0);

    const tdl = localStorage.getItem(KEYS.todayDay)===today ? (() => { try { return JSON.parse(localStorage.getItem(KEYS.todayLog)||"[]"); } catch { return []; } })() : [];
    setTodayLog(tdl);

    const en = localStorage.getItem(KEYS.examName)??"";
    const ed = localStorage.getItem(KEYS.examDate)??"";
    setExamName(en); setNameDraft(en); setExamDate(ed); setDateDraft(ed);
  }, []);

  const chime = useCallback(() => {
    try {
      const Ctx = window.AudioContext||(window as unknown as {webkitAudioContext:typeof AudioContext}).webkitAudioContext;
      if (!audioRef.current) audioRef.current = new Ctx();
      const ac = audioRef.current, osc = ac.createOscillator(), gain = ac.createGain();
      osc.connect(gain); gain.connect(ac.destination);
      osc.frequency.setValueAtTime(660,ac.currentTime); osc.frequency.setValueAtTime(880,ac.currentTime+0.15);
      gain.gain.setValueAtTime(0.0001,ac.currentTime); gain.gain.exponentialRampToValueAtTime(0.3,ac.currentTime+0.02); gain.gain.exponentialRampToValueAtTime(0.0001,ac.currentTime+0.5);
      osc.start(); osc.stop(ac.currentTime+0.5);
    } catch { /* no audio */ }
  }, []);

  const recordSession = useCallback((dur:number, tp:string) => {
    const today = dayKey();
    const storedLast = localStorage.getItem(KEYS.lastDay)??"";
    let s = Number(localStorage.getItem(KEYS.streak))||0;
    if (storedLast!==today) s = isYest(storedLast,today)?s+1:1;
    localStorage.setItem(KEYS.streak,`${s}`); localStorage.setItem(KEYS.lastDay,today);

    const sess = (Number(localStorage.getItem(KEYS.sessions))||0)+1;
    const mins = (Number(localStorage.getItem(KEYS.minutes))||0)+dur;
    localStorage.setItem(KEYS.sessions,`${sess}`); localStorage.setItem(KEYS.minutes,`${mins}`);

    const entry: SessionLog = { time: nowHHMM(), topic: tp.trim()||"—", duration: dur };
    const prevLog: SessionLog[] = localStorage.getItem(KEYS.todayDay)===today ? (() => { try { return JSON.parse(localStorage.getItem(KEYS.todayLog)||"[]"); } catch { return []; } })() : [];
    const nextLog = [entry, ...prevLog];
    localStorage.setItem(KEYS.todayDay,today); localStorage.setItem(KEYS.todayLog,JSON.stringify(nextLog));

    setStreak(s); setSessions(sess); setMinutes(mins); setTodayLog(nextLog);
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLeft(prev => {
        if (prev>1) return prev-1;
        chime();
        if (mode==="focus") {
          recordSession(focusMin, topic);
          setFlash(t.sessionDone);
          setMode("break"); return breakMin*60;
        } else {
          setFlash(t.breakDone); setMode("focus"); return focusMin*60;
        }
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, mode, focusMin, breakMin, chime, recordSession, topic, t]);

  useEffect(() => { if (flash) { const id = setTimeout(()=>setFlash(null),3000); return ()=>clearTimeout(id); } }, [flash]);

  const total = (mode==="focus"?focusMin:breakMin)*60;
  const progress = total>0?1-left/total:0;
  const R=112, C=2*Math.PI*R;

  const switchMode = (m:"focus"|"break") => { if(m===mode) return; setMode(m); setRunning(false); setLeft((m==="focus"?focusMin:breakMin)*60); setFlash(null); };

  const setFP = (n:number) => { setFocusMin(n); localStorage.setItem(KEYS.focusMin,`${n}`); if(mode==="focus"){setLeft(n*60);setRunning(false);} };
  const setBP = (n:number) => { setBreakMin(n); localStorage.setItem(KEYS.breakMin,`${n}`); if(mode==="break"){setLeft(n*60);setRunning(false);} };

  const reset = () => { setRunning(false); setLeft(total); setFlash(null); };

  const saveExam = () => { setExamName(nameDraft.trim()); setExamDate(dateDraft); localStorage.setItem(KEYS.examName,nameDraft.trim()); localStorage.setItem(KEYS.examDate,dateDraft); setEditingExam(false); };
  const clearExam = () => { setExamName(""); setExamDate(""); setNameDraft(""); setDateDraft(""); localStorage.removeItem(KEYS.examName); localStorage.removeItem(KEYS.examDate); setEditingExam(false); };

  let daysLeft:number|null = null;
  if (examDate) {
    const today = new Date(dayKey()); const target = new Date(examDate);
    daysLeft = Math.round((target.getTime()-today.getTime())/86_400_000);
  }

  return (
    <main className="relative min-h-screen bg-[#F6F7FB] text-slate-950 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)] dark:opacity-30" />
      <div aria-hidden className={`pointer-events-none fixed -top-48 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full blur-3xl transition-colors duration-700 ${mode==="focus"?"bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_60%)]":"bg-[radial-gradient(circle,rgba(16,185,129,0.14),transparent_60%)]"}`} />

      {/* TOPBAR */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="group flex items-center gap-2 text-sm font-bold text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 transition group-hover:-translate-x-0.5 dark:border-zinc-700 dark:bg-zinc-800">‹</span>
            {t.back}
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">{t.badge}</span>
          <SiteControls />
        </div>
      </header>

      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-6 sm:px-6 sm:pt-8">

        {/* EXAM COUNTDOWN BANNER — always visible if set */}
        {mounted && examDate && daysLeft!==null && !editingExam && (
          <div className={`mb-5 flex items-center justify-between rounded-2xl px-4 py-3 ${daysLeft<0?"bg-zinc-100 dark:bg-zinc-800":daysLeft<=7?"bg-red-50 border border-red-100 dark:bg-red-900/20 dark:border-red-800":"bg-violet-50 border border-violet-100 dark:bg-violet-900/20 dark:border-violet-800"}`}>
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-black tracking-tight ${daysLeft<0?"text-zinc-400":daysLeft<=7?"text-red-600 dark:text-red-400":"text-violet-600 dark:text-violet-400"}`}>{Math.max(daysLeft,0)}</span>
              <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{daysLeft===1?t.dayLeft:t.daysLeft}</span>
              {examName && <span className="ml-1 text-sm font-bold text-slate-950 dark:text-zinc-100">&middot; {examName}</span>}
            </div>
            <div className="flex items-center gap-2">
              {daysLeft===0 && <span className="text-xs font-semibold text-red-600">{t.examToday}</span>}
              {daysLeft<0 && <span className="text-xs font-semibold text-zinc-400">{t.examPast}</span>}
              <button onClick={()=>setEditingExam(true)} className="text-[11px] font-semibold text-zinc-400 underline underline-offset-4 transition hover:text-zinc-700">{t.editExam}</button>
              <button onClick={clearExam} className="text-[11px] font-semibold text-zinc-400 underline underline-offset-4 transition hover:text-red-500">{t.clearExam}</button>
            </div>
          </div>
        )}

        {/* EXAM SET FORM — shown if no exam or editing */}
        {mounted && (!examDate || editingExam) && (
          <div className="mb-5 flex flex-wrap items-end gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{t.examName}</label>
              <input value={nameDraft} onChange={e=>setNameDraft(e.target.value)} placeholder={t.examNamePh} className="h-9 rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-sm outline-none transition focus:border-violet-400 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 sm:w-48" />
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{t.examDate}</label>
              <input type="date" value={dateDraft} onChange={e=>setDateDraft(e.target.value)} className="h-9 rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-sm outline-none transition focus:border-violet-400 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
            </div>
            <button onClick={saveExam} disabled={!dateDraft} className="h-9 rounded-xl bg-violet-600 px-4 text-sm font-bold text-white transition hover:bg-violet-700 disabled:opacity-40">{t.setExam}</button>
            {editingExam && <button onClick={()=>setEditingExam(false)} className="h-9 rounded-xl border border-zinc-200 px-4 text-sm font-semibold text-zinc-500 dark:border-zinc-700">{t.back}</button>}
          </div>
        )}

        <div className="grid gap-4 lg:grid-cols-[1fr_340px]">

          {/* ── TIMER PANEL ── */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">

            {/* Mode tabs */}
            <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 w-fit dark:border-zinc-800 dark:bg-zinc-800/60">
              {(["focus","break"] as const).map(m=>(
                <button key={m} onClick={()=>switchMode(m)} className={["rounded-full px-5 py-1.5 text-sm font-bold transition",mode===m?(m==="focus"?"bg-indigo-600 text-white shadow":"bg-emerald-600 text-white shadow"):"text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"].join(" ")}>
                  {m==="focus"?t.focus:t.brk}
                </button>
              ))}
            </div>

            {/* Ring + time */}
            <div className="relative mx-auto mt-6 flex h-[260px] w-[260px] items-center justify-center">
              <svg viewBox="0 0 260 260" className="h-full w-full -rotate-90">
                <circle cx="130" cy="130" r={R} fill="none" strokeWidth="12" className="stroke-zinc-100 dark:stroke-zinc-800"/>
                <circle cx="130" cy="130" r={R} fill="none" strokeWidth="12" strokeLinecap="round"
                  className={mode==="focus"?"stroke-indigo-500 transition-[stroke-dashoffset] duration-1000 ease-linear":"stroke-emerald-500 transition-[stroke-dashoffset] duration-1000 ease-linear"}
                  strokeDasharray={C} strokeDashoffset={mounted?C*(1-progress):C}/>
              </svg>
              <div className="absolute text-center">
                <p className="font-mono text-[54px] font-bold leading-none tracking-tight tabular-nums text-slate-950 dark:text-zinc-50">
                  {mounted?fmt(left):fmt(focusMin*60)}
                </p>
                {flash
                  ? <p className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">{flash}</p>
                  : running && topic
                  ? <p className="mt-2 max-w-[180px] truncate text-xs font-medium text-zinc-500 dark:text-zinc-400">{topic}</p>
                  : null}
              </div>
            </div>

            {/* What are you studying? */}
            {mode==="focus" && !running && (
              <div className="mt-4">
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">{t.studying}</label>
                <input value={topic} onChange={e=>setTopic(e.target.value)} placeholder={t.studyPh} className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
              </div>
            )}

            {/* Controls */}
            <div className="mt-5 flex items-center gap-3">
              <button onClick={()=>{setRunning(r=>!r);setFlash(null);}}
                className={["h-12 min-w-[140px] rounded-full px-6 text-base font-bold text-white shadow-lg transition active:scale-95",mode==="focus"?"bg-indigo-600 shadow-indigo-500/25 hover:bg-indigo-700":"bg-emerald-600 shadow-emerald-500/25 hover:bg-emerald-700"].join(" ")}>
                {running?t.pause:t.start}
              </button>
              <button onClick={reset} className="flex h-12 items-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-600 transition hover:border-zinc-300 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{t.reset}</button>
            </div>

            {/* Length presets */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-5 dark:border-zinc-800">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{t.focus} · {t.length}</p>
                <div className="flex gap-1.5">
                  {FOCUS_PRESETS.map(n=>(
                    <button key={n} onClick={()=>setFP(n)} className={["flex-1 rounded-lg py-1.5 text-sm font-bold transition",focusMin===n?"bg-indigo-600 text-white":"bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"].join(" ")}>{n}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{t.brk} · {t.length}</p>
                <div className="flex gap-1.5">
                  {BREAK_PRESETS.map(n=>(
                    <button key={n} onClick={()=>setBP(n)} className={["flex-1 rounded-lg py-1.5 text-sm font-bold transition",breakMin===n?"bg-emerald-600 text-white":"bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"].join(" ")}>{n}</button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── RIGHT PANEL ── */}
          <div className="flex flex-col gap-4">

            {/* STATS */}
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{t.streak}</p>
                  <p className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-4xl font-black tracking-tight text-slate-950 dark:text-zinc-50">{mounted?streak:0}</span>
                    <span className="text-xl">🔥</span>
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/50">
                  <p className="text-2xl font-bold text-slate-950 dark:text-zinc-100">{mounted?sessions:0}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">{t.totalSess}</p>
                </div>
                <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/50">
                  <p className="text-2xl font-bold text-slate-950 dark:text-zinc-100">{mounted?minutes:0}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">{t.totalMin}</p>
                </div>
              </div>
            </section>

            {/* TODAY LOG */}
            <section className="flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{t.todayLog}</p>
              {!mounted || todayLog.length===0 ? (
                <p className="text-xs text-zinc-400 dark:text-zinc-500">{t.noLog}</p>
              ) : (
                <div className="space-y-2">
                  {todayLog.map((log,i)=>(
                    <div key={i} className="flex items-center gap-2.5 rounded-xl border border-zinc-100 bg-zinc-50 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-800/50">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-black text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">{log.duration}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-slate-800 dark:text-zinc-200">{log.topic}</p>
                        <p className="text-[11px] text-zinc-400">{log.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
