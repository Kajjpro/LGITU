"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useSite } from "@/app/context";

// ─── types ────────────────────────────────────────────────────────────────────

type ScoreEntry = { date: string; score: number };

// ─── constants ────────────────────────────────────────────────────────────────

const SCORE_KEY  = "lgitu_sat_scores";
const TARGET_KEY = "lgitu_sat_score_target";
const ERROR_KEY  = "lgitu_sat_errors";

const dayKey = (d = new Date()) => {
  const m  = `${d.getMonth() + 1}`.padStart(2, "0");
  const dd = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${dd}`;
};

const testDates = [
  { label: "Jun 6, 2026",  value: "2026-06-06" },
  { label: "Aug 22, 2026", value: "2026-08-22" },
  { label: "Sep 12, 2026", value: "2026-09-12" },
  { label: "Oct 3, 2026",  value: "2026-10-03" },
  { label: "Nov 7, 2026",  value: "2026-11-07" },
  { label: "Dec 5, 2026",  value: "2026-12-05" },
];

const ZERO_CD = { days: 0, hours: 0, minutes: 0, seconds: 0, done: false };

function getClosestDate() {
  const now = Date.now();
  const future = testDates.find(d => new Date(`${d.value}T08:00:00`).getTime() > now);
  return future?.value ?? testDates[0].value;
}

function getCountdown(dateValue: string) {
  const distance = new Date(`${dateValue}T08:00:00`).getTime() - Date.now();
  if (distance <= 0) return { ...ZERO_CD, done: true };
  return {
    days:    Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    done: false,
  };
}

// ─── translations ─────────────────────────────────────────────────────────────

const T = {
  en: {
    eyebrow: "DIGITAL SAT PREP",
    h1: "Start SAT prep without overthinking it.",
    sub: "Real resources, honest advice, and the books that actually helped — nothing padded, nothing wasted.",
    cta: "Choose an area",
    testDateLabel: "SAT TEST DATE",
    examPassed: "Exam passed",
    until: "Until",
    starterNote: "Set your target date and count backward from the timer.",
    quickFacts: [
      { label: "Score Range", value: "400–1600", text: "Combined total" },
      { label: "Sections",    value: "R&W + Math", text: "Two modules each" },
    ],
    bestOrder: "Best Order",
    bestOrderValue: "Resources → Books → Advice",
    bestOrderText: "Start here if you're just getting going.",
    errorsToday: "Errors Today",
    errorsTotal: "total logged",
    errorsNone: "None yet — start a session",
    scoreLabel: "SCORE TRACKER",
    scoreTitle: "Are you actually improving?",
    scoreSub: "Log each practice test score. See the trend. Know exactly how far you have left.",
    latestScore: "LATEST SCORE",
    targetScore: "TARGET",
    logBtn: "Log score",
    pointsToGo: "pts to go",
    goalReached: "Target reached",
    noScores: "Log your first practice score above — it will show up here.",
    recentLabel: "RECENT",
    progressLabel: "PROGRESS",
    sessionsLabel: "Sessions",
    avgLabel: "Average",
    bestLabel: "Best",
    areasKicker: "PREPARATION AREAS",
    areasTitle: "Pick where you want to start.",
    areasSub: "One area at a time — depth beats breadth every time.",
    openSection: "Open section",
    modules: [
      { n: "01", label: "Resources", title: "Study Resources", text: "The tools that actually move the needle.", href: "/sat/resources", accent: "blue",   bullets: ["Official tools", "Key websites"] },
      { n: "02", label: "Books",     title: "Books",           text: "The prep books worth reading — and what to skip.", href: "/sat/books",     accent: "purple", bullets: ["Book list", "What to skip"] },
      { n: "03", label: "Advice",    title: "SAT Advice",      text: "Real strategies from someone who's been through it.", href: "/sat/advice",   accent: "green",  bullets: ["Strategy", "Mindset", "Mistakes"] },
      { n: "04", label: "Review Mistakes", title: "Review Mistakes", text: "Log every wrong answer, master your weak spots, and review them until they stick.", href: "/sat/errors",   accent: "orange", bullets: ["Track mistakes", "Review mode", "Master weak spots"] },
    ],
  },
  mn: {
    eyebrow: "DIGITAL SAT БЭЛТГЭЛ",
    h1: "SAT бэлтгэлийг хэт их бодолгүйгээр эхэл.",
    sub: "Бодит эх сурвалж, шударга зөвлөгөө, үнэхээр тус болсон номнууд — хэрэггүй юм алга.",
    cta: "Хэсэг сонгох",
    testDateLabel: "SAT ШАЛГАЛТЫН ОГНОО",
    examPassed: "Шалгалт өнгөрсөн",
    until: "Хүртэл",
    starterNote: "Зорьж буй огноогоо сонго. Тоолуураас хойшлон суд.",
    quickFacts: [
      { label: "Оноо",     value: "400–1600",     text: "Нийт нийлбэр"     },
      { label: "Хэсгүүд", value: "УБ + Математик", text: "Хоёр модуль тус бүр" },
    ],
    bestOrder: "Зөвлөмж дараалал",
    bestOrderValue: "Эх сурвалж → Ном → Зөвлөгөө",
    bestOrderText: "Яг эхэлж байгаа бол энэ дарааллаар яв.",
    errorsToday: "Өнөөдрийн алдаа",
    errorsTotal: "нийт тэмдэглэсэн",
    errorsNone: "Одоохондоо байхгүй",
    scoreLabel: "ОНОО ХЯНАХ",
    scoreTitle: "Та үнэхээр ахиж байна уу?",
    scoreSub: "Дадлага шалгалт бүрийн оноогоо бич. Чиг хандлагаа хар. Хэр үлдснийг мэд.",
    latestScore: "СҮҮЛИЙН ОНОО",
    targetScore: "ЗОРИЛТ",
    logBtn: "Оноо бичих",
    pointsToGo: "оноо үлдсэн",
    goalReached: "Зорилт хүрсэн",
    noScores: "Дадлагын анхны оноогоо дээр нэм — энд харагдана.",
    recentLabel: "СҮҮЛИЙН",
    progressLabel: "АХИЦ",
    sessionsLabel: "Дадлага",
    avgLabel: "Дундаж",
    bestLabel: "Хамгийн сайн",
    areasKicker: "БЭЛТГЭЛИЙН ХЭСГҮҮД",
    areasTitle: "Хаанаас эхлэхээ сонго.",
    areasSub: "Нэг хэсэг нэг удаа — гүнзгийрэл нь өргөнийг ялна.",
    openSection: "Хэсэг нээх",
    modules: [
      { n: "01", label: "Эх сурвалж", title: "Сурах материалууд",   text: "Үнэхээр тус болдог хэрэгсэл, вэбсайтууд.",    href: "/sat/resources", accent: "blue",   bullets: ["Албан ёсны хэрэгсэл", "Вэбсайтууд"] },
      { n: "02", label: "Номнууд",     title: "Номнууд",              text: "Цагаа зүйтэй бэлтгэлийн номнууд.",            href: "/sat/books",     accent: "purple", bullets: ["Номны жагсаалт", "Юуг алгасах вэ"] },
      { n: "03", label: "Зөвлөгөө",   title: "SAT Зөвлөгөө",         text: "Туулж өнгөрсөн хүний бодит стратеги.",        href: "/sat/advice",   accent: "green",  bullets: ["Стратеги", "Оюун ухаан", "Алдаанууд"] },
      { n: "04", label: "Алдаа дахин харах", title: "Алдаа дахин харах", text: "Алдаа бүрийг бич, сул талаа эзэмш, тогттол нь дахин дав.", href: "/sat/errors",   accent: "orange", bullets: ["Алдаа бичих", "Давтах горим", "Сул талаа эзэмших"] },
    ],
  },
};

// ─── icons ────────────────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 10h10M11 6l4 4-4 4" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function SATOverviewPage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;

  // Countdown
  const [selectedDate, setSelectedDate] = useState(getClosestDate);
  const [countdown, setCountdown] = useState(ZERO_CD);
  const selectedDateLabel = useMemo(
    () => testDates.find(d => d.value === selectedDate)?.label,
    [selectedDate],
  );
  useEffect(() => {
    setCountdown(getCountdown(selectedDate));
    const id = setInterval(() => setCountdown(getCountdown(selectedDate)), 1000);
    return () => clearInterval(id);
  }, [selectedDate]);

  // Score tracker
  const [scores, setScores]         = useState<ScoreEntry[]>([]);
  const [target, setTarget]         = useState(1400);
  const [scoreDraft, setScoreDraft] = useState("");
  const [targetDraft, setTargetDraft] = useState("1400");
  const [errorStats, setErrorStats] = useState({ today: 0, total: 0 });
  const [mounted, setMounted]       = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(SCORE_KEY);
      if (raw) setScores(JSON.parse(raw));
      const tgt = localStorage.getItem(TARGET_KEY);
      if (tgt) { setTarget(+tgt); setTargetDraft(tgt); }
    } catch { /* ignore */ }
    try {
      const raw = localStorage.getItem(ERROR_KEY);
      if (raw) {
        const entries: { date: string }[] = JSON.parse(raw);
        const today = dayKey();
        setErrorStats({ total: entries.length, today: entries.filter(e => e.date === today).length });
      }
    } catch { /* ignore */ }
  }, []);

  const logScore = () => {
    const s = parseInt(scoreDraft);
    if (isNaN(s) || s < 400 || s > 1600) return;
    const next = [{ date: dayKey(), score: s }, ...scores].slice(0, 10);
    setScores(next);
    localStorage.setItem(SCORE_KEY, JSON.stringify(next));
    setScoreDraft("");
  };

  const saveTarget = (v: string) => {
    const n = parseInt(v);
    if (!isNaN(n) && n >= 400 && n <= 1600) {
      setTarget(n);
      localStorage.setItem(TARGET_KEY, String(n));
    }
  };

  const latestScore = scores[0]?.score ?? null;
  const gap = latestScore !== null ? Math.max(0, target - latestScore) : null;
  const barPct = latestScore !== null
    ? Math.min(100, Math.round(((latestScore - 400) / 1200) * 100))
    : 0;
  const targetPct = Math.min(100, Math.round(((target - 400) / 1200) * 100));

  return (
    <div className="sat-page">
      <style>{css}</style>


      <main className="sat-shell">
        <a href="/" className="back-btn">← Home</a>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.h1}</h1>
            <p className="subtitle">{t.sub}</p>
            <div className="hero-actions">
              <a href="#areas" className="btn-primary">
                {t.cta}
                <ArrowRight />
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="exam-widget">
              <div className="exam-top">
                <div className="exam-select-wrap">
                  <div className="exam-label">{t.testDateLabel}</div>
                  <div className="date-pills">
                    {testDates.map(d => (
                      <button
                        key={d.value}
                        onClick={() => setSelectedDate(d.value)}
                        className={`date-pill${selectedDate === d.value ? " date-pill-active" : ""}`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="exam-count">
                  {countdown.done ? "0" : String(countdown.days).padStart(2, "0")}
                  <span>d</span>
                </div>
              </div>
              <div className="exam-sub">
                {countdown.done ? t.examPassed : `${t.until} ${selectedDateLabel}`}
              </div>
              <div className="exam-time">
                <span>{String(countdown.hours).padStart(2, "0")}h</span>
                <span>{String(countdown.minutes).padStart(2, "0")}m</span>
                <span>{String(countdown.seconds).padStart(2, "0")}s</span>
              </div>
            </div>
            <div className="starter-note">{t.starterNote}</div>
          </aside>
        </section>

        {/* ── QUICK STATS ──────────────────────────────────────────────── */}
        <section className="quick-grid">
          {t.quickFacts.map(item => (
            <div key={item.label} className="quick-card">
              <div className="quick-label">{item.label}</div>
              <div className="quick-value">{item.value}</div>
              <p>{item.text}</p>
            </div>
          ))}

          <div className="quick-card dark-card">
            <div className="quick-label">{t.bestOrder}</div>
            <div className="quick-value">{t.bestOrderValue}</div>
            <p>{t.bestOrderText}</p>
          </div>
        </section>

        {/* ── SCORE TRACKER ────────────────────────────────────────────── */}
        <section className="score-section">
          <div className="score-header">
            <span className="score-eyebrow">{t.scoreLabel}</span>
            <h2>{t.scoreTitle}</h2>
            <p>{t.scoreSub}</p>
          </div>

          <div className="score-body">
            {/* Inputs */}
            <div className="score-inputs">
              <div className="score-field">
                <label className="score-field-label">{t.latestScore}</label>
                <input
                  type="number" min="400" max="1600"
                  value={scoreDraft}
                  onChange={e => setScoreDraft(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && logScore()}
                  placeholder="400–1600"
                  className="score-input"
                />
              </div>
              <div className="score-field">
                <label className="score-field-label">{t.targetScore}</label>
                <input
                  type="number" min="400" max="1600"
                  value={targetDraft}
                  onChange={e => setTargetDraft(e.target.value)}
                  onBlur={() => saveTarget(targetDraft)}
                  onKeyDown={e => e.key === "Enter" && saveTarget(targetDraft)}
                  className="score-input"
                />
              </div>
              <button onClick={logScore} className="score-log-btn">{t.logBtn}</button>
            </div>

            {/* Visual */}
            <div className="score-visual">
              {!mounted || scores.length === 0 ? (
                <p className="score-empty">{t.noScores}</p>
              ) : (
                <>
                  {/* Numbers + trend */}
                  <div className="score-callout">
                    <span className="score-num score-current">{latestScore}</span>
                    <span className="score-sep">→</span>
                    <span className="score-num score-target-num">{target}</span>
                    {gap !== null && gap > 0 && (
                      <span className="score-badge">{gap} {t.pointsToGo}</span>
                    )}
                    {gap === 0 && (
                      <span className="score-badge score-badge-done">{t.goalReached} ✓</span>
                    )}
                    {scores.length >= 2 && (() => {
                      const delta = scores[0].score - scores[1].score;
                      if (delta === 0) return null;
                      return (
                        <span className={`score-trend-badge ${delta > 0 ? "up" : "down"}`}>
                          {delta > 0 ? "↑" : "↓"} {Math.abs(delta)}
                        </span>
                      );
                    })()}
                  </div>

                  {/* Progress bar */}
                  <div className="score-bar-wrap">
                    <div className="score-bar-track">
                      <div className="score-bar-fill" style={{ width: `${barPct}%` }} />
                      <div className="score-bar-target-marker" style={{ left: `${targetPct}%` }} />
                    </div>
                    <div className="score-bar-ends">
                      <span>400</span>
                      <span>1600</span>
                    </div>
                  </div>

                  {/* Stats row */}
                  {(() => {
                    const avg = Math.round(scores.reduce((s, e) => s + e.score, 0) / scores.length);
                    const best = Math.max(...scores.map(e => e.score));
                    return (
                      <div className="score-stats-row">
                        <div className="score-stat">
                          <span className="score-stat-val">{scores.length}</span>
                          <span className="score-stat-lbl">{t.sessionsLabel}</span>
                        </div>
                        <div className="score-stat">
                          <span className="score-stat-val">{avg}</span>
                          <span className="score-stat-lbl">{t.avgLabel}</span>
                        </div>
                        <div className="score-stat">
                          <span className="score-stat-val">{best}</span>
                          <span className="score-stat-lbl">{t.bestLabel}</span>
                        </div>
                      </div>
                    );
                  })()}

                  {/* SVG line chart */}
                  {scores.length >= 2 && (() => {
                    const ordered = [...scores].reverse();
                    const W = 300, H = 72;
                    const PL = 6, PR = 40, PT = 14, PB = 4;
                    const cW = W - PL - PR, cH = H - PT - PB;
                    const toX = (i: number) => PL + (i / (ordered.length - 1)) * cW;
                    const toY = (s: number) => PT + (1 - (s - 400) / 1200) * cH;
                    const pts = ordered.map((e, i) => ({ x: toX(i), y: toY(e.score), score: e.score }));
                    const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
                    const areaD = `${pathD} L${pts[pts.length-1].x.toFixed(1)},${(H-PB).toFixed(1)} L${pts[0].x.toFixed(1)},${(H-PB).toFixed(1)} Z`;
                    const tgtY = toY(target);
                    const overallDelta = ordered[ordered.length-1].score - ordered[0].score;
                    return (
                      <div className="score-chart-wrap">
                        <div className="score-chart-header">
                          <span className="score-chart-label">{t.progressLabel}</span>
                          {overallDelta !== 0 && (
                            <span className={`score-chart-delta ${overallDelta > 0 ? "up" : "down"}`}>
                              {overallDelta > 0 ? "+" : ""}{overallDelta} {lang === "mn" ? "нийт" : "overall"}
                            </span>
                          )}
                        </div>
                        <svg viewBox={`0 0 ${W} ${H}`} className="score-svg" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="scoreAreaGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* target dashed line */}
                          <line x1={PL} y1={tgtY} x2={W - PR + 4} y2={tgtY}
                            stroke="#059669" strokeWidth="1.2" strokeDasharray="4,3" opacity="0.7" />
                          <text x={W - PR + 8} y={tgtY + 3} fontSize="8" fontWeight="700" fill="#059669" opacity="0.85">{target}</text>
                          {/* area fill */}
                          <path d={areaD} fill="url(#scoreAreaGrad)" />
                          {/* score line */}
                          <path d={pathD} fill="none" stroke="#f59e0b" strokeWidth="2.5"
                            strokeLinejoin="round" strokeLinecap="round" />
                          {/* dots + score labels */}
                          {pts.map((p, i) => (
                            <g key={i}>
                              <circle cx={p.x} cy={p.y} r="3.5" fill="#f59e0b" stroke="white" strokeWidth="1.5" />
                              <text x={p.x} y={p.y - 7} textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#b45309">
                                {p.score}
                              </text>
                            </g>
                          ))}
                        </svg>
                      </div>
                    );
                  })()}
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── AREAS ────────────────────────────────────────────────────── */}
        <section id="areas" className="areas-section">
          <div className="areas-header">
            <div>
              <div className="areas-kicker">{t.areasKicker}</div>
              <h2>{t.areasTitle}</h2>
            </div>
            <p>{t.areasSub}</p>
          </div>

          <div className="module-grid">
            {t.modules.map(m => {
              const isAdvice = m.href.endsWith("/advice");
              return (
                <Link key={m.href} href={m.href} className={`module-card ${m.accent}${isAdvice ? " module-star" : ""}`}>
                  <div className="module-top">
                    <span className="module-number">{m.n}</span>
                    {isAdvice
                      ? <span className="module-key-badge">{lang === "mn" ? "★ Хамгийн чухал" : "★ Most Important"}</span>
                      : <span className="module-arrow"><ArrowUpRight /></span>}
                  </div>
                  <div className="module-body">
                    <div className="module-label">{m.label}</div>
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                    <div className="module-bullets">
                      {m.bullets.map(b => <span key={b}>{b}</span>)}
                    </div>
                  </div>
                  <div className="module-footer">
                    {t.openSection}
                    <ArrowRight />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── ERROR LOG ────────────────────────────────────────────────── */}
        <a href="/sat/errors" className="error-log-banner">
          <div className="error-log-left">
            <div className="error-log-icon">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="10" r="8" />
                <path d="M10 6v4M10 14h.01" />
              </svg>
            </div>
            <div>
              <div className="error-log-label">{t.errorsToday}</div>
              <div className="error-log-title">{lang === "mn" ? "Алдаа дахин харах" : "Review Mistakes"}</div>
              <div className="error-log-sub">
                {mounted
                  ? errorStats.total > 0
                    ? `${errorStats.today} ${lang === "mn" ? "өнөөдөр" : "today"} · ${errorStats.total} ${t.errorsTotal}`
                    : t.errorsNone
                  : t.errorsNone}
              </div>
            </div>
          </div>
          <div className="error-log-right">
            {mounted && <span className="error-log-count">{errorStats.today}</span>}
            <ArrowRight />
          </div>
        </a>
      </main>
    </div>
  );
}

// ─── styles ───────────────────────────────────────────────────────────────────

const css = `
:root {
  --bg:      #FFFFFF;
  --text:    #17171C;
  --muted:   #6F7280;
  --muted-2: #9CA0AE;
  --border:  #E4E7EF;
  --dark:    #111118;
  --blue:    #4F46E5;
  --purple:  #7C3AED;
  --green:   #059669;
  --orange:  #EA580C;
}

html.dark .sat-page {
  --bg:      #09090E;
  --text:    #F1F0F5;
  --muted:   #9CA0AE;
  --muted-2: #6B7280;
  --border:  rgba(255,255,255,0.08);
}

html.dark .hero-copy {
  background: rgba(255,255,255,0.04);
  border-color: rgba(255,255,255,0.07);
}

html.dark .quick-card {
  background: rgba(255,255,255,0.04);
  border-color: rgba(255,255,255,0.07);
}

html.dark .score-section {
  background: rgba(255,255,255,0.03);
  border-color: rgba(255,255,255,0.07);
}

html.dark .score-visual {
  background: rgba(255,255,255,0.03);
  border-color: rgba(255,255,255,0.06);
}

html.dark .score-bar-track {
  background: rgba(255,255,255,0.1);
}

html.dark .score-input {
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.1);
  color: #F1F0F5;
}

html.dark .score-input:focus {
  border-color: #f59e0b;
  background: rgba(255,255,255,0.08);
}

html.dark .module-card {
  background: #18181f;
  color: #F1F0F5;
}

html.dark .module-bullets span {
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.08);
}

html.dark .error-stat-card {
  border-color: rgba(234,88,12,0.25);
  background: rgba(124,45,18,0.15);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

.sat-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background:
    var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.page-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(to right,  rgba(16,16,20,0.022) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(16,16,20,0.022) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: linear-gradient(to bottom, black 0%, transparent 72%);
}

.sat-shell {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 42px 24px 80px;
  display: flex;
  flex-direction: column;
}

/* Score tracker rendered last — below the practice/prep areas */
.score-section { order: 1; }

/* ── Back button ── */
.back-btn {
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 6px;
  margin-bottom: 18px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.75);
  color: var(--muted);
  font-size: 12px;
  font-weight: 650;
  text-decoration: none;
  transition: border-color 0.15s, color 0.15s;
}

.back-btn:hover {
  border-color: rgba(100,100,120,0.4);
  color: var(--text);
}

html.dark .back-btn {
  background: rgba(255,255,255,0.04);
  border-color: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.5);
}

html.dark .back-btn:hover {
  color: rgba(255,255,255,0.85);
}

/* ── Date pills ── */
.date-pills {
  margin-top: 7px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.date-pill {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  background: transparent;
  color: rgba(255,255,255,0.6);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.13s, color 0.13s, border-color 0.13s;
  white-space: nowrap;
  font-family: inherit;
}

.date-pill:hover {
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.9);
}

.date-pill-active {
  background: white;
  border-color: white;
  color: #111118;
}

/* ── Hero ── */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) 310px;
  gap: 18px;
  align-items: stretch;
}

.hero-copy,
.hero-panel,
.quick-card {
  border: 1px solid rgba(228,231,239,0.95);
  box-shadow: 0 14px 38px rgba(16,16,20,0.035);
}

.hero-copy {
  min-height: 270px;
  padding: 30px;
  border-radius: 28px;
  background: rgba(255,255,255,0.78);
}

.eyebrow {
  color: var(--blue);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 18px 0 0;
  max-width: 650px;
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1;
  letter-spacing: -0.055em;
  font-weight: 760;
}

.subtitle {
  margin: 18px 0 0;
  max-width: 520px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.6;
}

.hero-actions {
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn-primary {
  height: 44px;
  padding: 0 17px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 720;
  background: var(--dark);
  color: white;
  transition: opacity 0.15s;
}

.btn-primary:hover { opacity: 0.85; }

.hero-panel {
  padding: 17px;
  border-radius: 28px;
  background: #111118;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.exam-widget {
  padding: 15px;
  border-radius: 20px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
}

.exam-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
}

.exam-select-wrap { min-width: 0; flex: 1; }

.exam-label {
  color: rgba(255,255,255,0.5);
  font-size: 9px;
  font-weight: 780;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}


.exam-count {
  flex-shrink: 0;
  font-size: 30px;
  line-height: 0.9;
  font-weight: 800;
  letter-spacing: -0.06em;
}

.exam-count span {
  margin-left: 2px;
  color: rgba(255,255,255,0.5);
  font-size: 14px;
}

.exam-sub {
  margin-top: 12px;
  color: rgba(255,255,255,0.55);
  font-size: 12px;
}

.exam-time {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.exam-time span {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.72);
  font-size: 12px;
  font-weight: 700;
}

.starter-note {
  margin-top: 16px;
  color: rgba(255,255,255,0.64);
  font-size: 13px;
  line-height: 1.55;
}

/* ── Quick stats ── */
.quick-grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.quick-card {
  min-height: 96px;
  padding: 15px;
  border-radius: 20px;
  background: rgba(255,255,255,0.76);
}

.quick-label {
  color: var(--muted-2);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.quick-value {
  margin-top: 12px;
  color: var(--text);
  font-size: 18px;
  line-height: 1.1;
  font-weight: 720;
}

.quick-card p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
}

.dark-card {
  background: #17171C;
  border-color: #17171C;
}

.dark-card .quick-value { color: white; }
.dark-card p,
.dark-card .quick-label { color: rgba(255,255,255,0.58); }

.error-stat-card {
  text-decoration: none;
  display: block;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  border: 1px solid rgba(234,88,12,0.22) !important;
  background: rgba(255,237,213,0.55) !important;
}

.error-stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(234,88,12,0.14);
}

.error-stat-card .quick-label { color: #9a3412; }

.error-stat-value { color: #ea580c !important; }

html.dark .error-stat-card .quick-label { color: #fb923c; }
html.dark .error-stat-value { color: #fb923c !important; }
html.dark .error-stat-card p { color: rgba(251,146,60,0.7); }

/* ── Score tracker ── */
.score-section {
  margin-top: 16px;
  padding: 22px 24px 24px;
  border-radius: 28px;
  border: 1px solid rgba(228,231,239,0.95);
  background: rgba(255,255,255,0.82);
  box-shadow: 0 8px 28px rgba(16,16,20,0.04);
}

.score-header { margin-bottom: 18px; }

.score-eyebrow {
  display: block;
  color: #d97706;
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.score-header h2 {
  margin: 8px 0 0;
  font-size: clamp(20px, 2.2vw, 26px);
  font-weight: 780;
  letter-spacing: -0.04em;
  color: var(--text);
}

.score-header p {
  margin: 6px 0 0;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.55;
}

.score-body {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
  align-items: start;
}

.score-inputs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.score-field { display: flex; flex-direction: column; gap: 5px; }

.score-field-label {
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.score-input {
  height: 44px;
  padding: 0 13px;
  border-radius: 13px;
  border: 1px solid var(--border);
  background: #f9fafb;
  color: var(--text);
  font-size: 17px;
  font-weight: 720;
  outline: none;
  width: 100%;
  appearance: textfield;
  transition: border-color 0.15s, background 0.15s;
}

.score-input::-webkit-outer-spin-button,
.score-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.score-input:focus { border-color: #f59e0b; background: white; }
.score-input::placeholder { color: var(--muted-2); font-weight: 500; }

.score-log-btn {
  height: 44px;
  border-radius: 13px;
  background: #f59e0b;
  color: white;
  font-size: 14px;
  font-weight: 760;
  border: none;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}

.score-log-btn:hover { background: #d97706; transform: translateY(-1px); }
.score-log-btn:active { transform: translateY(0); }

.score-visual {
  padding: 18px;
  border-radius: 20px;
  background: rgba(0,0,0,0.018);
  border: 1px solid rgba(228,231,239,0.7);
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}

.score-empty {
  color: var(--muted);
  font-size: 14px;
  text-align: center;
  margin: 0;
  line-height: 1.55;
}

.score-callout {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.score-num {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.045em;
}

.score-current { color: var(--text); }
.score-target-num { color: #d97706; }
.score-sep { color: var(--muted-2); font-size: 16px; }

.score-badge {
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(245,158,11,0.12);
  color: #b45309;
  font-size: 12px;
  font-weight: 760;
}

html.dark .score-badge { background: rgba(245,158,11,0.15); color: #fbbf24; }

.score-badge-done {
  background: rgba(5,150,105,0.1) !important;
  color: #059669 !important;
}

/* Progress bar */
.score-bar-wrap { width: 100%; }

.score-bar-track {
  position: relative;
  height: 8px;
  border-radius: 999px;
  background: rgba(0,0,0,0.07);
  overflow: visible;
}

.score-bar-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #fde68a, #f59e0b);
  transition: width 0.7s cubic-bezier(.4,0,.2,1);
}

.score-bar-target-marker {
  position: absolute;
  top: -4px;
  width: 3px;
  height: 16px;
  border-radius: 2px;
  background: #059669;
  transform: translateX(-50%);
}

.score-bar-ends {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 10px;
  color: var(--muted-2);
  font-weight: 700;
}

/* History mini chart */
.score-history { display: flex; flex-direction: column; gap: 6px; }

.score-history-label {
  font-size: 9px;
  font-weight: 760;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.score-history-bars {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  height: 44px;
}

.score-bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
}

.score-mini-bar {
  width: 100%;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg, #fcd34d, #f59e0b);
  min-height: 4px;
  transition: height 0.5s ease;
}

.score-mini-val {
  font-size: 8px;
  font-weight: 760;
  color: var(--muted-2);
  white-space: nowrap;
  letter-spacing: -0.02em;
}

/* ── Score trend badge ── */
.score-trend-badge {
  font-size: 11px;
  font-weight: 760;
  padding: 3px 8px;
  border-radius: 999px;
}
.score-trend-badge.up {
  background: rgba(5,150,105,0.1);
  color: #059669;
}
.score-trend-badge.down {
  background: rgba(239,68,68,0.1);
  color: #dc2626;
}

/* ── Score stats row ── */
.score-stats-row {
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.score-stat {
  flex: 1;
  padding: 9px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  border-right: 1px solid var(--border);
}
.score-stat:last-child { border-right: none; }
.score-stat-val {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--text);
}
.score-stat-lbl {
  font-size: 9px;
  font-weight: 760;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-2);
}

/* ── Score SVG chart ── */
.score-chart-wrap { width: 100%; }
.score-chart-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.score-chart-label {
  font-size: 9px;
  font-weight: 760;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.score-chart-delta {
  font-size: 10px;
  font-weight: 800;
  padding: 1px 7px;
  border-radius: 999px;
}
.score-chart-delta.up {
  background: rgba(5,150,105,0.1);
  color: #059669;
}
.score-chart-delta.down {
  background: rgba(239,68,68,0.1);
  color: #dc2626;
}
.score-svg {
  width: 100%;
  height: 72px;
  overflow: visible;
  display: block;
}

html.dark .score-trend-badge.up { background: rgba(5,150,105,0.15); }
html.dark .score-trend-badge.down { background: rgba(239,68,68,0.15); }
html.dark .score-chart-delta.up { background: rgba(5,150,105,0.15); }
html.dark .score-chart-delta.down { background: rgba(239,68,68,0.15); }

/* ── Error log banner ── */
.error-log-banner {
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  border-radius: 24px;
  border: 1px solid rgba(234,88,12,0.22);
  background: rgba(255,237,213,0.55);
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
  cursor: pointer;
}
.error-log-banner:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(234,88,12,0.14);
  background: rgba(255,237,213,0.75);
}
html.dark .error-log-banner {
  border-color: rgba(234,88,12,0.25);
  background: rgba(124,45,18,0.15);
}
html.dark .error-log-banner:hover {
  background: rgba(124,45,18,0.22);
}
.error-log-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.error-log-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(234,88,12,0.12);
  border: 1px solid rgba(234,88,12,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ea580c;
  flex-shrink: 0;
}
.error-log-label {
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9a3412;
}
html.dark .error-log-label { color: #fb923c; }
.error-log-title {
  font-size: 17px;
  font-weight: 780;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-top: 2px;
}
.error-log-sub {
  font-size: 13px;
  color: #c2410c;
  margin-top: 2px;
}
html.dark .error-log-sub { color: rgba(251,146,60,0.8); }
.error-log-right {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ea580c;
  flex-shrink: 0;
}
.error-log-count {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.06em;
  color: #ea580c;
}

/* ── Areas section ── */
.areas-section {
  margin-top: 16px;
  padding: 24px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(17,17,24,0.98), rgba(24,24,31,0.96));
  box-shadow: 0 24px 72px rgba(16,16,20,0.13);
  border: 1px solid rgba(17,17,24,0.95);
}

.areas-header {
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
}

.areas-kicker {
  color: rgba(255,255,255,0.52);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.areas-header h2 {
  margin: 9px 0 0;
  color: white;
  font-size: clamp(28px, 3vw, 38px);
  line-height: 1.05;
  letter-spacing: -0.055em;
  font-weight: 760;
}

.areas-header p {
  max-width: 300px;
  margin: 0;
  color: rgba(255,255,255,0.58);
  font-size: 14px;
  line-height: 1.55;
}

/* Module grid: 2×2 */
.module-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.module-card {
  --accent: var(--blue);
  min-height: 240px;
  padding: 20px;
  border-radius: 24px;
  background: white;
  color: var(--text);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.14);
  transition: transform 0.2s, box-shadow 0.2s;
}

.module-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 24px 64px rgba(0,0,0,0.2);
}

.module-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 5px;
  background: var(--accent);
}

.module-card.blue   { --accent: var(--blue);   }
.module-card.purple { --accent: var(--purple);  }
.module-card.green  { --accent: var(--green);   }
.module-card.orange { --accent: var(--orange);  }

.module-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.module-number {
  color: var(--muted-2);
  font-size: 12px;
  font-weight: 760;
}

.module-arrow {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid var(--border);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
}

.module-label {
  margin-top: 22px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 780;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.module-card h3 {
  margin: 8px 0 0;
  font-size: 21px;
  line-height: 1.08;
  font-weight: 780;
}

.module-card p {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
}

.module-bullets {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.module-bullets span {
  padding: 5px 9px;
  border-radius: 999px;
  background: #F6F7FB;
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
  font-weight: 650;
}

.module-footer {
  margin-top: auto;
  padding-top: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 780;
  color: var(--text);
}

.module-key-badge {
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--green);
  color: white;
  font-size: 11px;
  font-weight: 780;
}

.module-star {
  box-shadow: 0 20px 60px rgba(5,150,105,0.22), 0 0 0 2px rgba(5,150,105,0.18);
  border-color: rgba(5,150,105,0.20) !important;
}

/* ── Responsive ── */
@media (max-width: 1080px) {
  .hero { grid-template-columns: 1fr; }
  .quick-grid { grid-template-columns: repeat(3, 1fr); }
  .score-body { grid-template-columns: 1fr; }
}

@media (max-width: 760px) {
  .quick-grid { grid-template-columns: repeat(2, 1fr); }
  .error-log-banner { padding: 14px 16px; border-radius: 18px; }
  .error-log-count { font-size: 20px; }
}

@media (max-width: 700px) {
  .sat-shell { padding: 18px 12px 56px; }

  .hero { gap: 10px; }

  .hero-copy,
  .hero-panel,
  .areas-section { border-radius: 20px; padding: 16px; }

  .hero-copy { min-height: auto; }

  .hero h1 { margin-top: 14px; font-size: 32px; }

  .subtitle { margin-top: 12px; font-size: 14px; }

  .hero-actions { margin-top: 18px; }

  .btn-primary { height: 42px; }

  .hero-panel { display: block; }

  .exam-widget { padding: 13px; border-radius: 17px; }

  .exam-count { font-size: 24px; }

  .exam-time span { padding: 6px 9px; font-size: 11px; }

  .quick-grid { margin-top: 10px; gap: 8px; }

  .quick-card { min-height: auto; padding: 12px; border-radius: 16px; }

  .quick-value { margin-top: 8px; font-size: 16px; }

  .quick-card p { font-size: 12px; }

  .score-section { padding: 16px; border-radius: 22px; margin-top: 10px; }

  .areas-section { margin-top: 10px; }

  .areas-header { flex-direction: column; gap: 6px; margin-bottom: 12px; }

  .module-grid { grid-template-columns: 1fr; gap: 10px; }

  .module-card {
    min-height: auto;
    padding: 14px;
    border-radius: 18px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px 12px;
    box-shadow: 0 10px 28px rgba(0,0,0,0.13);
  }

  .module-card::before { width: 5px; height: auto; inset: 0 auto 0 0; }

  .module-top { grid-column: 2; grid-row: 1 / span 3; align-items: flex-start; }

  .module-number { display: none; }

  .module-label { margin-top: 0; font-size: 10px; }

  .module-card h3 { margin-top: 5px; font-size: 17px; }

  .module-card p { margin-top: 5px; font-size: 13px; }

  .module-bullets,
  .module-footer { display: none; }
}
`;
