"use client"
import React, { useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  EXAM DATA
// ─────────────────────────────────────────────────────────────────────────────
const tests = [
  {
    code: "SAT",
    name: "Scholastic Aptitude Test",
    domain: "Standardized Admissions",
    metric: "Digital SAT · 400–1600",
    href: "/sat",
    summary: "Section-by-section roadmap for the digital SAT, with score-targeted study plans.",
    tags: ["Roadmap", "Score targets", "Practice"],
  },
  {
    code: "IELTS",
    name: "Academic Training",
    domain: "English Proficiency",
    metric: "Band Score · 0–9",
    href: "/ielts",
    summary: "Skill-specific frameworks for Writing, Speaking, Reading and Listening, with band 7+ benchmarks.",
    tags: ["Band 7+", "Writing", "Speaking"],
  },
  {
    code: "HSK",
    name: "Mandarin Proficiency",
    domain: "Chinese Language",
    metric: "Level-Based · HSK 1–6",
    href: "/hsk",
    summary: "Level-by-level vocabulary, grammar, and listening systems built around spaced repetition.",
    tags: ["SRS", "HSK 1–6", "Listening"],
  },
  {
    code: "CSCA",
    name: "Strategy & Competitive Analysis",
    domain: "Professional Certification",
    metric: "Frameworks · Pass / Distinction",
    href: "/csca",
    summary: "Core frameworks, case practice and exam-day approach for the CSCA certification.",
    tags: ["Frameworks", "Case practice", "Strategy"],
  },
];

// How it works.
const steps = [
  { n: "01", t: "Diagnose", d: "Take a baseline test. Identify where you actually stand today." },
  { n: "02", t: "Plan", d: "Translate your baseline into a focused weekly study schedule." },
  { n: "03", t: "Practice", d: "Work targeted drills on your weakest two areas, not everything at once." },
  { n: "04", t: "Sit", d: "Walk in prepared. The system has already done most of the work." },
];

// Credibility stats.
const stats = [
  { n: "100%", l: "Independently written" },
  { n: "0", l: "Sponsored placements" },
];

// ─────────────────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function Homepage() {
  useEffect(() => {
    if (document.getElementById("atlas-fonts")) return;
    const pre1 = Object.assign(document.createElement("link"), {
      rel: "preconnect", href: "https://fonts.googleapis.com",
    });
    const pre2 = Object.assign(document.createElement("link"), {
      rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "",
    });
    const link = Object.assign(document.createElement("link"), {
      id: "atlas-fonts",
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;450;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",
    });
    document.head.append(pre1, pre2, link);
  }, []);

  return (
    <div className="root">
      <style>{css}</style>

      {/* ───────────── NAV ───────────── */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="Atlas">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 20 20" width="18" height="18">
                <path d="M10 1.5 L18.5 10 L10 18.5 L1.5 10 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10 6 L14 10 L10 14 L6 10 Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">Atlas</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#exams">Exams</a>
            <a href="#method">Method</a>
            <a href="#about">About</a>
          </nav>

          <div className="nav-actions">
            <a href="#exams" className="btn-primary">
              Browse exams
              <span className="arr">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* ───────────── HERO ───────────── */}
      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true">
          <div className="dot-grid" />
          <div className="hero-orb" />
        </div>

        <div className="hero-inner">
          <a href="#exams" className="hero-badge">
            <span className="pulse" />
            <span>Now covering SAT · IELTS · HSK · CSCA</span>
            <span className="arr">→</span>
          </a>

          <h1 className="hero-title">
            The preparation system<br />
            <span className="hero-title-accent">for the exams that matter.</span>
          </h1>

          <p className="hero-sub">
            Roadmaps, resources and study systems for the SAT, IELTS, HSK and CSCA — built by a student who took all four.
          </p>

          <div className="hero-ctas">
            <a href="#exams" className="btn-primary lg">
              Browse exams
              <span className="arr">→</span>
            </a>
            <a href="#method" className="btn-ghost lg">How it works</a>
          </div>

          <div className="hero-trust-wrapper">
            <span className="hero-trust-label">Author results</span>
            <ul className="hero-trust" aria-label="Author results">
              <li><span className="mono">SAT</span> <span className="score">1520</span></li>
              <li><span className="mono">IELTS</span> <span className="score">Band 7.5</span></li>
              <li><span className="mono">HSK</span> <span className="score">Level 5</span></li>
              <li><span className="mono">CSCA</span> <span className="score">Distinction</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── EXAMS ───────────── */}
      <section className="section exams" id="exams">
        <div className="section-head">
          <span className="eyebrow">Exams</span>
          <h2 className="section-title">Four guides. One system.</h2>
          <p className="section-sub">
            Each exam has its own dedicated guide — same structure, same depth, same standard.
          </p>
        </div>

        <div className="exam-grid">
          {tests.map((t) => (
            <a key={t.code} href={t.href} className="exam-card" aria-label={`${t.code} — ${t.name}`}>
              <div className="exam-card-inner">
                <div className="exam-card-header">
                  <div className="exam-code-wrap">
                    <span className="exam-code">{t.code}</span>
                    <svg className="exam-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="exam-metric">{t.metric}</span>
                </div>

                <div className="exam-card-body">
                  <h3 className="exam-card-title">{t.name}</h3>
                  <p className="exam-card-domain">{t.domain}</p>
                  <p className="exam-card-summary">{t.summary}</p>
                </div>

                <div className="exam-card-footer">
                  <ul className="exam-tags" aria-label="Focus areas">
                    {t.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ───────────── METHOD ───────────── */}
      <section className="section method-section" id="method">
        <div className="section-head">
          <span className="eyebrow">Method</span>
          <h2 className="section-title">How preparation actually works.</h2>
          <p className="section-sub">
            The same four-step system applies to every exam on the platform.
          </p>
        </div>

        <ol className="steps" role="list">
          {steps.map((s, i) => (
            <li key={s.n} className="step">
              <div className="step-indicator">
                <span className="step-n">{s.n}</span>
                {i < steps.length - 1 && <div className="step-line" />}
              </div>
              <div className="step-content">
                <h3 className="step-t">{s.t}</h3>
                <p className="step-d">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────────── STATS ───────────── */}
      <section className="section stats-section" id="about">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.l} className="stat">
              <span className="stat-n">{s.n}</span>
              <span className="stat-l">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── PROOF / ABOUT ───────────── */}
      <section className="section proof-section">
        <div className="proof-grid">
          <div className="proof-left">
            <span className="eyebrow">About</span>
            <h2 className="section-title">
              Built by one student.<br />
              Written without sponsors.
            </h2>
          </div>
          <div className="proof-right">
            <p>
              Atlas is independently authored by a student who personally sat for every exam on the platform. There is no editorial team, no paid placements, and no affiliate content.
            </p>
            <p>
              If a resource is recommended here, it was used in real preparation. If a timeline is listed, it was followed. The goal is to make standardized-exam prep less overwhelming and more transparent for the next student in line.
            </p>
            <a href="#" className="link-arrow">
              Read the full about page
              <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Start with the exam closest to you.</h2>
          <p className="cta-sub">Open a guide. Read the roadmap. Begin this week.</p>
          <div className="cta-row">
            {tests.map((t) => (
              <a key={t.code} href={t.href} className="cta-chip">
                {t.code}
                <span className="arr">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand">
                <span className="brand-mark" aria-hidden="true">
                  <svg viewBox="0 0 20 20" width="16" height="16">
                    <path d="M10 1.5 L18.5 10 L10 18.5 L1.5 10 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M10 6 L14 10 L10 14 L6 10 Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="brand-word">Atlas</span>
              </div>
              <p className="footer-tag">
                A student-led preparation platform for the SAT, IELTS, HSK and CSCA.
              </p>
            </div>

            <div>
              <h4>Exams</h4>
              <ul>
                {tests.map((t) => (
                  <li key={t.code}>
                    <a href={t.href}><span className="mono">{t.code}</span>&nbsp;&nbsp;{t.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Platform</h4>
              <ul>
                <li><a href="#method">Method</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Atlas</span>
            <span>Built independently. No sponsors.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  STYLES
// ─────────────────────────────────────────────────────────────────────────────
const css = `
  :root {
    --bg:           #FFFFFF;
    --bg-2:         #FAFAFA;
    --bg-3:         #F4F4F5;
    --border:       #E4E4E7;
    --border-2:     #D4D4D8;
    --ink:          #09090B;
    --ink-2:        #3F3F46;
    --ink-3:        #71717A;
    --ink-4:        #A1A1AA;
    --accent:       #18181B;
    --accent-soft:  #F4F4F5;
    --green:        #10B981;

    --f-sans:  'Geist', ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    --f-mono:  'Geist Mono', ui-monospace, "SF Mono", Menlo, monospace;

    --r-sm: 6px;
    --r-md: 10px;
    --r-lg: 14px;
    --r-xl: 20px;
  }

  .root {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--f-sans);
    font-size: 15px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-feature-settings: "ss01", "cv11";
  }
  .root *, .root *::before, .root *::after { box-sizing: border-box; }
  .root a { color: inherit; text-decoration: none; }
  .root h1, .root h2, .root h3, .root h4 { margin: 0; font-weight: 600; letter-spacing: -0.022em; }
  .mono { font-family: var(--f-mono); font-feature-settings: "tnum"; }

  .arr {
    display: inline-block;
    transition: transform .22s cubic-bezier(.2,.7,.2,1);
  }

  /* ───────── NAV ───────── */
  .nav {
    position: sticky; top: 0; z-index: 50;
    background: rgba(255,255,255,0.85);
    backdrop-filter: saturate(180%) blur(12px);
    -webkit-backdrop-filter: saturate(180%) blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .nav-inner {
    max-width: 1200px; margin: 0 auto;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .brand {
    display: inline-flex; align-items: center; gap: 8px;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.015em;
  }
  .brand-mark {
    display: inline-flex; align-items: center; justify-content: center;
    color: var(--ink);
  }
  .brand-word { color: var(--ink); }

  .nav-links {
    display: flex; gap: 24px;
  }
  .nav-links a {
    font-size: 13.5px;
    color: var(--ink-2);
    font-weight: 450;
    transition: color .18s ease;
  }
  .nav-links a:hover { color: var(--ink); }

  .nav-actions { display: flex; align-items: center; gap: 12px; }

  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: #09090B !important;
    color: #ffffff !important;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 13.5px;
    font-weight: 500;
    letter-spacing: -0.005em;
    border: 1px solid #09090B;
    transition: background .18s ease, transform .18s ease;
  }
  .btn-primary:hover { background: #27272a !important; }
  .btn-primary:hover .arr { transform: translateX(3px); }
  .btn-primary.lg { padding: 12px 20px; font-size: 14.5px; }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent;
    color: var(--ink);
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 13.5px;
    font-weight: 500;
    border: 1px solid var(--border-2);
    transition: background .18s ease, border-color .18s ease;
  }
  .btn-ghost:hover { background: var(--bg-3); border-color: var(--ink-4); }
  .btn-ghost.lg { padding: 12px 20px; font-size: 14.5px; }

  /* ───────── HERO ───────── */
  .hero {
    position: relative;
    padding: 60px 20px 80px;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
  }
  .hero-bg {
    position: absolute; inset: 0;
    pointer-events: none;
    z-index: 0;
  }
  .dot-grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(9,9,11,0.07) 1px, transparent 1px);
    background-size: 22px 22px;
    mask-image: radial-gradient(ellipse at 50% 35%, black 0%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 35%, black 0%, transparent 75%);
  }
  .hero-orb {
    position: absolute;
    width: 600px; height: 600px;
    left: 50%; top: -180px;
    transform: translateX(-50%);
    background: radial-gradient(circle at center, rgba(24,24,27,0.06), transparent 60%);
    filter: blur(20px);
  }
  .hero-inner {
    position: relative;
    z-index: 1;
    max-width: 800px; margin: 0 auto;
    text-align: center;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 6px 12px 6px 10px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 12px;
    color: var(--ink-2);
    font-weight: 450;
    margin-bottom: 28px;
    transition: border-color .2s ease, transform .2s ease;
  }
  .hero-badge:hover { border-color: var(--border-2); }
  .hero-badge:hover .arr { transform: translateX(3px); }
  .pulse {
    width: 6px; height: 6px;
    border-radius: 999px;
    background: var(--green);
    box-shadow: 0 0 0 0 rgba(16,185,129,0.5);
    animation: pulse 2.2s infinite;
  }
  @keyframes pulse {
    0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
    70%  { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
    100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
  }

  .hero-title {
    font-size: clamp(32px, 6vw, 56px);
    line-height: 1.05;
    letter-spacing: -0.035em;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 18px;
    text-wrap: balance;
  }
  .hero-title-accent {
    color: var(--ink-3);
  }
  .hero-sub {
    font-size: clamp(15px, 1.4vw, 17px);
    line-height: 1.6;
    color: var(--ink-2);
    max-width: 52ch;
    margin: 0 auto 28px;
    font-weight: 400;
    text-wrap: balance;
  }
  .hero-ctas {
    display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .hero-trust-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .hero-trust-label {
    font-size: 11px;
    font-weight: 500;
    color: var(--ink-4);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .hero-trust {
    display: flex; align-items: center; gap: 6px;
    padding: 0;
    list-style: none;
    margin: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero-trust li {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 12px;
    color: var(--ink-2);
    background: #fff;
    border: 1px solid var(--border);
    padding: 6px 12px;
    border-radius: 999px;
  }
  .hero-trust li .mono {
    font-size: 10px;
    color: var(--ink-4);
    letter-spacing: 0.04em;
  }
  .hero-trust li .score { color: var(--ink); font-weight: 600; }

  /* ───────── SECTIONS ───────── */
  .section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
  }
  .section-head {
    max-width: 600px;
    margin-bottom: 40px;
  }
  .eyebrow {
    display: inline-block;
    font-family: var(--f-mono);
    font-size: 11px;
    color: var(--ink-3);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 14px;
    font-weight: 500;
  }
  .section-title {
    font-size: clamp(26px, 3.4vw, 38px);
    line-height: 1.1;
    letter-spacing: -0.03em;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 12px;
    text-wrap: balance;
  }
  .section-sub {
    font-size: 15px;
    line-height: 1.6;
    color: var(--ink-2);
    max-width: 50ch;
  }

  /* ───────── EXAM GRID - TECH STYLE ───────── */
  .exam-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .exam-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    overflow: hidden;
    transition: border-color .2s ease, box-shadow .2s ease;
  }
  .exam-card:hover { 
    border-color: var(--ink-4);
    box-shadow: 0 4px 24px -8px rgba(0,0,0,0.08);
  }
  .exam-card-inner {
    display: flex;
    flex-direction: column;
    padding: 24px;
    flex: 1;
  }
  .exam-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border);
  }
  .exam-code-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .exam-code {
    font-family: var(--f-mono);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--ink);
  }
  .exam-icon {
    width: 16px;
    height: 16px;
    color: var(--ink-4);
    transition: transform .2s ease, color .2s ease;
  }
  .exam-card:hover .exam-icon {
    transform: translate(2px, -2px);
    color: var(--ink);
  }
  .exam-metric {
    font-family: var(--f-mono);
    font-size: 11px;
    color: var(--ink-4);
    letter-spacing: 0.02em;
  }
  .exam-card-body { flex: 1; margin-bottom: 20px; }
  .exam-card-title {
    font-size: 18px;
    line-height: 1.25;
    letter-spacing: -0.02em;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 4px;
  }
  .exam-card-domain {
    font-size: 12px;
    color: var(--ink-3);
    margin: 0 0 12px;
    font-weight: 450;
  }
  .exam-card-summary {
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--ink-2);
    margin: 0;
  }
  .exam-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .exam-tags {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; flex-wrap: wrap; gap: 6px;
  }
  .exam-tags li {
    font-size: 11px;
    color: var(--ink-3);
    background: var(--bg-2);
    padding: 4px 10px;
    border-radius: 4px;
    letter-spacing: 0.01em;
    font-weight: 450;
  }

  /* ───────── METHOD STEPS ───────── */
  .method-section {
    background: var(--bg-2);
    max-width: none;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  .method-section .section-head,
  .method-section .steps {
    max-width: 1200px; margin-left: auto; margin-right: auto;
  }
  .steps {
    list-style: none; padding: 0; margin: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  .step {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 20px;
    transition: border-color .2s ease, transform .2s ease;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .step:hover { border-color: var(--border-2); transform: translateY(-1px); }
  .step-indicator {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .step-n {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-family: var(--f-mono);
    font-size: 11px;
    color: var(--ink);
    background: var(--bg-3);
    border-radius: 50%;
    letter-spacing: 0.02em;
    font-weight: 600;
  }
  .step-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--border-2), transparent);
  }
  .step-content { flex: 1; }
  .step-t {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.015em;
    margin-bottom: 6px;
    color: var(--ink);
  }
  .step-d {
    font-size: 13px;
    line-height: 1.55;
    color: var(--ink-2);
    margin: 0;
  }

  /* ───────── STATS ───────── */
  .stats-section {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 500px;
    margin: 0 auto;
  }
  .stat {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 20px;
    display: flex; flex-direction: column; gap: 4px;
    text-align: center;
  }
  .stat-n {
    font-size: 28px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -0.03em;
    color: var(--ink);
    font-feature-settings: "tnum", "ss01";
  }
  .stat-l {
    font-size: 12px;
    color: var(--ink-3);
  }

  /* ───────── PROOF ───────── */
  .proof-section { padding-top: 60px; padding-bottom: 60px; }
  .proof-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }
  .proof-right p {
    font-size: 14px;
    line-height: 1.7;
    color: var(--ink-2);
    margin: 0 0 14px;
    max-width: 48ch;
  }
  .link-arrow {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 8px;
    font-size: 13px;
    font-weight: 500;
    color: var(--ink);
    border-bottom: 1px solid var(--ink);
    padding-bottom: 2px;
    transition: color .2s ease, border-color .2s ease;
  }
  .link-arrow:hover { color: var(--ink-3); border-color: var(--ink-3); }
  .link-arrow:hover .arr { transform: translateX(3px); }

  /* ───────── CTA ───────── */
  .cta-section {
    background: var(--ink);
    color: #fff;
    padding: 64px 20px;
    border-top: 1px solid var(--ink);
  }
  .cta-inner {
    max-width: 600px; margin: 0 auto;
    text-align: center;
  }
  .cta-title {
    font-size: clamp(24px, 3.4vw, 34px);
    line-height: 1.15;
    letter-spacing: -0.028em;
    font-weight: 600;
    margin-bottom: 10px;
    color: #fff;
    text-wrap: balance;
  }
  .cta-sub {
    font-size: 15px;
    color: rgba(255,255,255,0.65);
    margin: 0 auto 24px;
    max-width: 40ch;
  }
  .cta-row {
    display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
  }
  .cta-chip {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 16px;
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    font-family: var(--f-mono);
    color: #fff;
    transition: background .2s ease, border-color .2s ease;
  }
  .cta-chip:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.4);
  }
  .cta-chip:hover .arr { transform: translateX(3px); }

  /* ───────── FOOTER ───────── */
  .footer {
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding: 48px 20px 28px;
  }
  .footer-inner { max-width: 1200px; margin: 0 auto; }
  .footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 48px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--border);
  }
  .footer-tag {
    font-size: 13px;
    color: var(--ink-3);
    line-height: 1.55;
    margin-top: 12px;
    max-width: 28ch;
  }
  .footer h4 {
    font-family: var(--f-mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--ink-3);
    margin-bottom: 14px;
    font-weight: 500;
  }
  .footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  .footer ul a {
    font-size: 13px;
    color: var(--ink-2);
    transition: color .18s ease;
  }
  .footer ul a:hover { color: var(--ink); }
  .footer ul .mono { color: var(--ink-4); font-size: 11px; }

  .footer-bottom {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 18px;
    font-size: 12px;
    color: var(--ink-3);
  }

  /* ───────── RESPONSIVE ───────── */
  @media (max-width: 960px) {
    .nav-inner { gap: 12px; }
    .nav-links { display: none; }
    .hero { padding: 48px 16px 64px; }
    .section { padding: 60px 16px; }
    .exam-grid { grid-template-columns: 1fr; gap: 12px; }
    .steps { grid-template-columns: repeat(2, 1fr); }
    .stats-grid { max-width: 100%; }
    .proof-grid { grid-template-columns: 1fr; gap: 24px; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
    .footer-bottom { flex-direction: column; gap: 6px; align-items: flex-start; }
  }
  
  @media (max-width: 640px) {
    .nav-inner { padding: 10px 16px; }
    .btn-primary { padding: 8px 12px; font-size: 13px; }
    .btn-primary.lg { padding: 10px 16px; font-size: 13.5px; }
    .btn-ghost.lg { padding: 10px 16px; font-size: 13.5px; }
    
    .hero { padding: 40px 16px 56px; }
    .hero-badge { font-size: 11px; padding: 5px 10px; margin-bottom: 20px; }
    .hero-title { font-size: 28px; margin-bottom: 14px; }
    .hero-sub { font-size: 14px; margin-bottom: 20px; }
    .hero-ctas { margin-bottom: 32px; }
    .hero-trust { gap: 6px; }
    .hero-trust li { padding: 5px 10px; font-size: 11px; }
    
    .section { padding: 48px 16px; }
    .section-head { margin-bottom: 28px; }
    .section-title { font-size: 24px; }
    .section-sub { font-size: 14px; }
    
    .exam-card-inner { padding: 20px; }
    .exam-card-title { font-size: 16px; }
    .exam-card-summary { font-size: 13px; }
    .exam-tags li { font-size: 10px; padding: 3px 8px; }
    
    .steps { grid-template-columns: 1fr; gap: 10px; }
    .step { padding: 16px; gap: 12px; }
    .step-n { width: 28px; height: 28px; font-size: 10px; }
    .step-t { font-size: 14px; }
    .step-d { font-size: 12px; }
    
    .stats-grid { gap: 10px; }
    .stat { padding: 16px; }
    .stat-n { font-size: 24px; }
    .stat-l { font-size: 11px; }
    
    .proof-section { padding-top: 40px; padding-bottom: 40px; }
    .proof-right p { font-size: 13px; }
    
    .cta-section { padding: 48px 16px; }
    .cta-title { font-size: 22px; }
    .cta-sub { font-size: 14px; margin-bottom: 20px; }
    .cta-chip { padding: 8px 14px; font-size: 12px; }
    
    .footer { padding: 36px 16px 24px; }
    .footer-grid { grid-template-columns: 1fr; gap: 24px; }
    .footer-tag { font-size: 12px; }
    .footer ul a { font-size: 12px; }
    .footer-bottom { font-size: 11px; }
  }
`;
