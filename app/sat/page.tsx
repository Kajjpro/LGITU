"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const SAT_EXAM_DATE = new Date("2026-06-06T08:00:00Z");

const modules = [
  {
    n: "01",
    label: "Resources",
    title: "Study Resources",
    text: "Official tools, platforms and preparation resources actually worth using.",
    href: "/sat/resources",
  },
  {
    n: "02",
    label: "Books",
    title: "Books",
    text: "Workbooks and prep books ranked by usefulness instead of popularity.",
    href: "/sat/books",
  },
  {
    n: "03",
    label: "Plan",
    title: "Study Plan",
    text: "Structured preparation timelines based on your score and exam date.",
    href: "/sat/study-plan",
  },
  {
    n: "04",
    label: "Practice",
    title: "Practice System",
    text: "A repeatable review system for solving, analyzing and improving.",
    href: "/sat/practice",
  },
];

const startSteps = [
  {
    n: "01",
    t: "Read the overview",
    d: "Understand the structure before starting random practice.",
  },
  {
    n: "02",
    t: "Take a diagnostic",
    d: "Establish your starting point before building a study plan.",
  },
  {
    n: "03",
    t: "Choose a timeline",
    d: "Select a realistic preparation schedule based on your exam date.",
  },
];

const ZERO_CD = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  done: false,
};

function getCountdown() {
  const distance = SAT_EXAM_DATE.getTime() - Date.now();

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      done: true,
    };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    done: false,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 10h10M11 6l4 4-4 4" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function SATOverviewPage() {
  const [countdown, setCountdown] = useState(ZERO_CD);

  useEffect(() => {
    setCountdown(getCountdown());

    const id = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (document.getElementById("geist-fonts")) return;

    const link = document.createElement("link");

    link.id = "geist-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

    document.head.appendChild(link);
  }, []);

  return (
    <div className="root">
      <style>{css}</style>

      <div className="bg-grid" />
      <div className="bg-glow" />

      <main className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <div className="breadcrumbs">
            <span>Atlas</span>
            <span className="sep">/</span>
            <span>SAT</span>
            <span className="sep">/</span>
            <span className="current">Overview</span>
          </div>

          <div className="topbar-right">
            <div className="pill">Digital SAT</div>
          </div>
        </header>

        <div className="container">
          {/* HERO */}
          <section className="hero">
            <div className="hero-left">
              <div className="eyebrow">SAT PREPARATION HUB</div>

              <h1 className="title">
                Build your SAT preparation system properly.
              </h1>

              <p className="subtitle">
                Structured resources, study systems, practice methods and
                realistic guidance written from actual preparation experience.
              </p>
            </div>

            <div className="hero-actions">
              <Link href="/sat/study-plan" className="btn-primary">
                <span>Start study plan</span>

                <span className="arr">
                  <ArrowRight />
                </span>
              </Link>

              <Link href="/sat/resources" className="btn-secondary">
                Browse resources
              </Link>
            </div>
          </section>

          {/* STATS */}
          <section className="stats">
            <div className="stat stat-dark">
              <div className="stat-label">
                <span className="pulse" />
                Countdown
              </div>

              <div className="stat-value">
                {String(countdown.days).padStart(2, "0")}
              </div>

              <div className="stat-sub">
                {String(countdown.hours).padStart(2, "0")}h{" "}
                {String(countdown.minutes).padStart(2, "0")}m{" "}
                {String(countdown.seconds).padStart(2, "0")}s
              </div>
            </div>

            <div className="stat">
              <div className="stat-label">Next Exam</div>

              <div className="stat-title">June 6, 2026</div>

              <div className="stat-sub">Saturday · 08:00 AM</div>
            </div>

            <div className="stat">
              <div className="stat-label">Score Range</div>

              <div className="stat-title">400–1600</div>

              <div className="stat-sub">Digital adaptive scoring</div>
            </div>

            <div className="stat">
              <div className="stat-label">Sections</div>

              <div className="stat-title">Reading · Math</div>

              <div className="stat-sub">2h 14m total duration</div>
            </div>
          </section>

          {/* MODULES */}
          <section>
            <div className="section-header">
              <div className="section-eyebrow">MODULES</div>

              <h2 className="section-title">Preparation areas</h2>
            </div>

            <div className="module-grid">
              {modules.map((m) => (
                <Link key={m.href} href={m.href} className="module">
                  <div className="module-top">
                    <span className="module-number">{m.n}</span>

                    <span className="module-icon">
                      <ArrowUpRight />
                    </span>
                  </div>

                  <div className="module-label">{m.label}</div>

                  <h3 className="module-title">{m.title}</h3>

                  <p className="module-text">{m.text}</p>

                  <div className="module-cta">
                    Open module

                    <span className="arr">
                      <ArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* START */}
          <section>
            <div className="section-header">
              <div className="section-eyebrow">GET STARTED</div>

              <h2 className="section-title">Three steps to begin</h2>
            </div>

            <div className="steps">
              {startSteps.map((s) => (
                <div key={s.n} className="step">
                  <div className="step-number">{s.n}</div>

                  <div className="step-title">{s.t}</div>

                  <p className="step-description">{s.d}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────

const css = `
:root {
  --bg: #F6F7F9;
  --card: #FFFFFF;
  --border: #E4E4E7;
  --text: #09090B;
  --muted: #71717A;
  --muted-2: #A1A1AA;
  --accent: #4F46E5;
  --dark: #09090B;
}

* {
  box-sizing: border-box;
}

.root {
  min-height: 100vh;
  background: var(--bg);
  font-family: Inter, sans-serif;
  color: var(--text);
  position: relative;
  overflow-x: hidden;
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at center, black 20%, transparent 90%);
  pointer-events: none;
}

.bg-glow {
  position: fixed;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(circle, rgba(79,70,229,0.10), transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}

.main {
  position: relative;
  z-index: 1;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 64px;
  padding: 0 32px;
  border-bottom: 1px solid var(--border);
  background: rgba(246,247,249,0.85);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
}

.sep {
  color: var(--muted-2);
}

.current {
  color: var(--text);
  font-weight: 600;
}

.pill {
  padding: 6px 10px;
  border-radius: 999px;
  background: white;
  border: 1px solid var(--border);
  font-size: 12px;
  font-weight: 500;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.hero-left {
  max-width: 700px;
}

.eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 14px;
}

.title {
  font-size: clamp(34px, 4vw, 54px);
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: 700;
  margin: 0;
}

.subtitle {
  margin-top: 14px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
  max-width: 60ch;
}

.hero-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all .18s ease;
}

.btn-primary {
  background: var(--dark);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-1px);
}

.btn-secondary {
  background: white;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--text);
}

.arr {
  display: inline-flex;
  transition: transform .18s ease;
}

.btn-primary:hover .arr {
  transform: translateX(3px);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.stat {
  background: white;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
}

.stat-dark {
  background: var(--dark);
  border-color: var(--dark);
  color: white;
}

.stat-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.stat-dark .stat-label {
  color: #A1A1AA;
}

.stat-value {
  margin-top: 12px;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.stat-title {
  margin-top: 14px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.stat-sub {
  margin-top: auto;
  font-size: 13px;
  color: var(--muted);
}

.stat-dark .stat-sub {
  color: #71717A;
}

.section-header {
  margin-bottom: 18px;
}

.section-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--muted-2);
  margin-bottom: 6px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.module-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.module {
  background: white;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: all .18s ease;
  display: flex;
  flex-direction: column;
}

.module:hover {
  border-color: var(--text);
  transform: translateY(-2px);
}

.module-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.module-number {
  font-size: 11px;
  color: var(--muted);
  font-weight: 600;
}

.module-icon {
  color: var(--muted);
}

.module-label {
  margin-top: 18px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted-2);
}

.module-title {
  margin-top: 6px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.module-text {
  margin-top: 8px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
}

.module-cta {
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
}

.module:hover .arr {
  transform: translateX(3px);
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.step {
  background: white;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
}

.step-number {
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
}

.step-title {
  margin-top: 10px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.step-description {
  margin-top: 8px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
}

.pulse {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #10B981;
}

@media (max-width: 960px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .module-grid {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .topbar {
    padding: 0 16px;
  }

  .container {
    padding: 24px 16px 64px;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 38px;
  }
}
`;