"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const testDates = [
  { label: "Jun 6, 2026", value: "2026-06-06" },
  { label: "Aug 22, 2026", value: "2026-08-22" },
  { label: "Sep 12, 2026", value: "2026-09-12" },
  { label: "Oct 3, 2026", value: "2026-10-03" },
  { label: "Nov 7, 2026", value: "2026-11-07" },
  { label: "Dec 5, 2026", value: "2026-12-05" },
];

const modules = [
  {
    n: "01",
    label: "Resources",
    title: "Study Resources",
    text: "Useful SAT tools and platforms to start with.",
    href: "/sat/resources",
    accent: "blue",
    bullets: ["Official tools", "Websites"],
  },
  {
    n: "02",
    label: "Books",
    title: "Books",
    text: "Prep books ranked by real usefulness.",
    href: "/sat/books",
    accent: "purple",
    bullets: ["Book list", "What to skip"],
  },
  {
    n: "03",
    label: "Advice",
    title: "SAT Advice",
    text: "Simple tips to avoid confusion and study smarter.",
    href: "/sat/advice",
    accent: "green",
    bullets: ["Strategy", "Mistakes", "Mindset"],
  },
];

const quickFacts = [
  { label: "Score Range", value: "400–1600", text: "Total score" },
  { label: "Sections", value: "Reading + Math", text: "Main areas" },
];

const ZERO_CD = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  done: false,
};

function getClosestDate() {
  const now = Date.now();

  const future = testDates.find((date) => {
    const testDate = new Date(`${date.value}T08:00:00`);
    return testDate.getTime() > now;
  });

  return future?.value ?? testDates[0].value;
}

function getCountdown(dateValue: string) {
  const target = new Date(`${dateValue}T08:00:00`);
  const distance = target.getTime() - Date.now();

  if (distance <= 0) return { ...ZERO_CD, done: true };

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    done: false,
  };
}

function ArrowRight() {
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
      <path d="M5 10h10M11 6l4 4-4 4" />
    </svg>
  );
}

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

export default function SATOverviewPage() {
  const [selectedDate, setSelectedDate] = useState(getClosestDate);
  const [countdown, setCountdown] = useState(ZERO_CD);

  const selectedDateLabel = useMemo(() => {
    return testDates.find((date) => date.value === selectedDate)?.label;
  }, [selectedDate]);

  useEffect(() => {
    setCountdown(getCountdown(selectedDate));

    const id = setInterval(() => {
      setCountdown(getCountdown(selectedDate));
    }, 1000);

    return () => clearInterval(id);
  }, [selectedDate]);

  return (
    <div className="sat-page">
      <style>{css}</style>
      <div className="page-bg" />

      <main className="sat-shell">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">DIGITAL SAT PREP</div>

            <h1>Start SAT prep without overthinking it.</h1>

            <p className="subtitle">
              A simple SAT guide for resources, books, and practical advice.
            </p>

            <div className="hero-actions">
              <a href="#areas" className="btn-primary">
                Choose an area
                <ArrowRight />
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="exam-widget">
              <div className="exam-top">
                <div className="exam-select-wrap">
                  <div className="exam-label">SAT TEST DATE</div>

                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="exam-select"
                    aria-label="Choose SAT test date"
                  >
                    {testDates.map((date) => (
                      <option key={date.value} value={date.value}>
                        {date.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="exam-count">
                  {countdown.done ? "0" : String(countdown.days).padStart(2, "0")}
                  <span>d</span>
                </div>
              </div>

              <div className="exam-sub">
                {countdown.done ? "Exam passed" : `Until ${selectedDateLabel}`}
              </div>

              <div className="exam-time">
                <span>{String(countdown.hours).padStart(2, "0")}h</span>
                <span>{String(countdown.minutes).padStart(2, "0")}m</span>
                <span>{String(countdown.seconds).padStart(2, "0")}s</span>
              </div>
            </div>

            <div className="starter-note">
              Pick the SAT date you are aiming for and study backward from the
              countdown.
            </div>
          </aside>
        </section>

        <section className="quick-grid">
          {quickFacts.map((item) => (
            <div key={item.label} className="quick-card">
              <div className="quick-label">{item.label}</div>
              <div className="quick-value">{item.value}</div>
              <p>{item.text}</p>
            </div>
          ))}

          <div className="quick-card dark-card">
            <div className="quick-label">Best Order</div>
            <div className="quick-value">Resources → Books → Advice</div>
            <p>Use this if you feel lost.</p>
          </div>
        </section>

        <section id="areas" className="areas-section">
          <div className="areas-header">
            <div>
              <div className="areas-kicker">PREPARATION AREAS</div>
              <h2>Choose what you need first</h2>
            </div>

            <p>Pick one area and start there.</p>
          </div>

          <div className="module-grid">
            {modules.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className={`module-card ${m.accent}`}
              >
                <div className="module-top">
                  <span className="module-number">{m.n}</span>

                  <span className="module-arrow">
                    <ArrowUpRight />
                  </span>
                </div>

                <div className="module-body">
                  <div className="module-label">{m.label}</div>

                  <h3>{m.title}</h3>

                  <p>{m.text}</p>

                  <div className="module-bullets">
                    {m.bullets.map((b) => (
                      <span key={b}>{b}</span>
                    ))}
                  </div>
                </div>

                <div className="module-footer">
                  Open section
                  <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const css = `
:root {
  --bg: #F6F7FB;
  --text: #17171C;
  --muted: #6F7280;
  --muted-2: #9CA0AE;
  --border: #E4E7EF;
  --dark: #111118;
  --blue: #4F46E5;
  --purple: #7C3AED;
  --green: #059669;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.sat-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 10% 0%, rgba(79,70,229,0.06), transparent 30%),
    var(--bg);
  color: var(--text);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.page-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(to right, rgba(16,16,20,0.022) 1px, transparent 1px),
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
  padding: 42px 24px 72px;
}

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
  font-size: clamp(38px, 5vw, 58px);
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
  justify-content: center;
  gap: 9px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 720;
  background: var(--dark);
  color: white;
}

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

.exam-select-wrap {
  min-width: 0;
  flex: 1;
}

.exam-label {
  color: rgba(255,255,255,0.5);
  font-size: 9px;
  font-weight: 780;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.exam-select {
  margin-top: 7px;
  width: 100%;
  min-width: 150px;
  height: 40px;
  padding: 0 12px;
  border-radius: 13px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 14px;
  font-weight: 760;
  outline: none;
  cursor: pointer;
  appearance: auto;
}

.exam-select option {
  color: black;
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

.dark-card .quick-value {
  color: white;
}

.dark-card p,
.dark-card .quick-label {
  color: rgba(255,255,255,0.58);
}

.areas-section {
  margin-top: 34px;
  padding: 24px;
  border-radius: 30px;
  background:
    linear-gradient(
      180deg,
      rgba(17,17,24,0.98),
      rgba(24,24,31,0.96)
    );
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
  font-size: clamp(30px, 3vw, 40px);
  line-height: 1.05;
  letter-spacing: -0.055em;
  font-weight: 760;
}

.areas-header p {
  max-width: 320px;
  margin: 0;
  color: rgba(255,255,255,0.58);
  font-size: 14px;
  line-height: 1.55;
}

.module-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.module-card {
  --accent: var(--blue);
  min-height: 270px;
  padding: 20px;
  border-radius: 24px;
  background: white;
  color: var(--text);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.16);
}

.module-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 6px;
  background: var(--accent);
}

.module-card.blue {
  --accent: var(--blue);
}

.module-card.purple {
  --accent: var(--purple);
}

.module-card.green {
  --accent: var(--green);
}

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
  font-size: 12px;
  font-weight: 780;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.module-card h3 {
  margin: 8px 0 0;
  font-size: 22px;
  line-height: 1.08;
  font-weight: 780;
}

.module-card p {
  margin: 11px 0 0;
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
  padding: 6px 9px;
  border-radius: 999px;
  background: #F6F7FB;
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
  font-weight: 650;
}

.module-footer {
  margin-top: auto;
  padding-top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 780;
}

@media (max-width: 1080px) {
  .hero,
  .quick-grid,
  .module-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .sat-shell {
    padding: 18px 12px 48px;
  }

  .hero {
    gap: 10px;
  }

  .hero-copy,
  .hero-panel,
  .areas-section {
    border-radius: 20px;
    padding: 16px;
  }

  .hero-copy {
    min-height: auto;
  }

  .hero h1 {
    margin-top: 14px;
    font-size: 34px;
    line-height: 1.02;
  }

  .subtitle {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1.55;
  }

  .hero-actions {
    margin-top: 18px;
    flex-direction: column;
    gap: 8px;
  }

  .btn-primary {
    width: 100%;
    height: 42px;
  }

  .hero-panel {
    display: block;
  }

  .exam-widget {
    padding: 13px;
    border-radius: 17px;
  }

  .exam-top {
    align-items: center;
    gap: 10px;
  }

  .exam-select {
    min-width: 0;
    width: 100%;
    height: 42px;
    font-size: 14px;
  }

  .exam-count {
    font-size: 24px;
  }

  .exam-time {
    margin-top: 12px;
  }

  .exam-time span {
    padding: 6px 9px;
    font-size: 11px;
  }

  .starter-note {
    margin-top: 10px;
    font-size: 12.5px;
  }

  .quick-grid {
    margin-top: 10px;
    gap: 8px;
  }

  .quick-card {
    min-height: auto;
    padding: 12px;
    border-radius: 16px;
  }

  .quick-value {
    margin-top: 8px;
    font-size: 16px;
  }

  .quick-card p {
    font-size: 12px;
  }

  .areas-section {
    margin-top: 20px;
  }

  .areas-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 14px;
  }

  .areas-header h2 {
    font-size: 28px;
  }

  .module-grid {
    gap: 10px;
  }

  .module-card {
    min-height: auto;
    padding: 14px;
    border-radius: 18px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px 12px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.13);
  }

  .module-card::before {
    width: 5px;
    height: auto;
    inset: 0 auto 0 0;
  }

  .module-top {
    grid-column: 2;
    grid-row: 1 / span 3;
    align-items: flex-start;
  }

  .module-number {
    display: none;
  }

  .module-label {
    margin-top: 0;
    font-size: 10px;
  }

  .module-card h3 {
    margin-top: 5px;
    font-size: 17px;
  }

  .module-card p {
    margin-top: 5px;
    font-size: 12.5px;
    line-height: 1.4;
  }

  .module-bullets,
  .module-footer {
    display: none;
  }
}
`;