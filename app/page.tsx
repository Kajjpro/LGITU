"use client";

import Link from "next/link";
import SiteLogo from "./sitecomponents/logo";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const guides = [
  {
    exam: "SAT",
    label: "College Admission",
    title: "Digital SAT",
    description:
      "Learn the test format, choose useful resources, and build a realistic practice routine.",
    start: "Take a diagnostic test first",
    problem: "Many students practice randomly without knowing their weak areas.",
    focus: ["Reading & Writing", "Math", "Practice Tests"],
    href: "/sat",
    accent: "sat",
  },
  {
    exam: "IELTS",
    label: "Study Abroad",
    title: "IELTS",
    description:
      "Prepare for Listening, Reading, Writing, and Speaking with a clear section-by-section guide.",
    start: "Understand the band descriptors",
    problem: "Students often study vocabulary but ignore task requirements.",
    focus: ["Listening", "Writing", "Speaking"],
    href: "/ielts",
    accent: "ielts",
  },
  {
    exam: "HSK",
    label: "Chinese Proficiency",
    title: "HSK",
    description:
      "Build vocabulary, grammar, reading, and listening skills through a structured Chinese study path.",
    start: "Check your current vocabulary level",
    problem: "Students memorize words but do not review them in context.",
    focus: ["Vocabulary", "Grammar", "Listening"],
    href: "/hsk",
    accent: "hsk",
  },
];

const steps = [
  {
    number: "01",
    title: "Pick your test",
    text: "Choose the exam you are preparing for instead of jumping between random online advice.",
  },
  {
    number: "02",
    title: "Understand the structure",
    text: "Read the overview first so you know what the exam actually tests and how it is scored.",
  },
  {
    number: "03",
    title: "Use the right resources",
    text: "Start with selected resources, books, and practice methods instead of collecting everything.",
  },
];

const values = [
  {
    title: "No login",
    text: "The website is made to be opened quickly. Students can start reading without creating an account.",
  },
  {
    title: "Real experience",
    text: "The guides are based on actual preparation and test-taking experience, not copied generic advice.",
  },
  {
    title: "Beginner-friendly",
    text: "The content is written for students who feel lost and need a clear first step.",
  },
];

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

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="root">
      <style>{css}</style>

      <div className="bg-noise" />

      <header className="topbar">
        <SiteLogo />

        <nav className="nav">
          <a href="#guides">Guides</a>
          <a href="#start">Start</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main className="main">
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="eyebrow">TEST PREP GUIDES</div>

            <h1>
              Start test prep
              <br />
              without feeling lost.
            </h1>

            <p className="hero-text">
              A simple website for students preparing for SAT, IELTS, and HSK.
              Pick your test, read the guide, and find out what to do first.
            </p>

            <div className="hero-actions">
              <a href="#guides" className="btn-primary">
                Choose a guide
                <ArrowRight />
              </a>

              <a href="#start" className="btn-secondary">
                See how it works
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>For students who ask</span>
              <span className="small-label">Start here</span>
            </div>

            <div className="question-stack">
              <div className="question-item">Where should I start?</div>
              <div className="question-item">Which resources are useful?</div>
              <div className="question-item">How should I study each week?</div>
              <div className="question-item">What mistakes should I avoid?</div>
            </div>

            <div className="note-box">
              This website is designed to reduce confusion, not add more
              information overload.
            </div>
          </div>
        </section>

        {/* GUIDES */}
        <section id="guides" className="section">
          <div className="section-header split">
            <div>
              <div className="section-eyebrow">THREE GUIDES</div>
              <h2>Choose your test</h2>
            </div>

            <p>
              Each guide gives students a practical overview, recommended
              resources, book suggestions, and a clear way to begin.
            </p>
          </div>

          <div className="guide-grid">
            {guides.map((guide) => (
              <Link
                key={guide.exam}
                href={guide.href}
                className={`guide-card ${guide.accent}`}
              >
                <div className="guide-top">
                  <div>
                    <div className="exam-name">{guide.exam}</div>
                    <div className="exam-label">{guide.label}</div>
                  </div>

                  <div className="guide-icon">
                    <ArrowUpRight />
                  </div>
                </div>

                <div className="guide-main">
                  <h3>{guide.title} Guide</h3>
                  <p>{guide.description}</p>
                </div>

                <div className="guide-info">
                  <div className="info-block">
                    <span>Start here</span>
                    <strong>{guide.start}</strong>
                  </div>

                  <div className="info-block">
                    <span>Common problem</span>
                    <strong>{guide.problem}</strong>
                  </div>
                </div>

                <div className="tag-row">
                  {guide.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="guide-footer">
                  <span>Open guide</span>
                  <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* START */}
        <section id="start" className="section start-section">
          <div className="section-header">
            <div className="section-eyebrow">HOW TO USE THIS WEBSITE</div>
            <h2>Three simple steps</h2>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="about-left">
            <div className="section-eyebrow">WHY THIS WEBSITE</div>
            <h2>Most students do not need more links. They need direction.</h2>
          </div>

          <div className="about-right">
            <p>
              When preparing for exams, many students waste time searching for
              resources, watching random videos, or switching between too many
              study methods. This website helps students begin with a clear
              overview and then move into resources, books, plans, and practice.
            </p>

            <div className="value-grid">
              {values.map((item) => (
                <div key={item.title} className="value-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div>
            <strong>LGITU</strong>
            <p>
              Let&apos;s Go Into Top Universities — simple test prep guides for
              ambitious students.
            </p>
          </div>

          <div className="footer-links">
            <Link href="/sat">SAT</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/hsk">HSK</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────

const css = `
:root {
  --bg: #F6F3ED;
  --paper: #FFFDF8;
  --text: #171717;
  --muted: #6F6A60;
  --muted-2: #9B9589;
  --border: #E2DCCF;
  --dark: #171717;

  --sat: #4F46E5;
  --ielts: #0E7490;
  --hsk: #C2410C;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

.root {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  position: relative;
  overflow-x: hidden;
}

.bg-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(to right, rgba(23, 23, 23, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(23, 23, 23, 0.035) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, black 0%, transparent 75%);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 66px;
  padding: 0 32px;
  border-bottom: 1px solid rgba(226, 220, 207, 0.9);
  background: rgba(246, 243, 237, 0.82);
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 550;
  transition: color .18s ease;
}

.nav a:hover {
  color: var(--text);
}

.main {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 54px 24px 34px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) 430px;
  gap: 36px;
  align-items: center;
  padding: 28px 0 54px;
}

.eyebrow,
.section-eyebrow {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.hero h1 {
  margin: 18px 0 0;
  max-width: 780px;
  font-size: clamp(46px, 6vw, 82px);
  line-height: 0.94;
  letter-spacing: -0.075em;
  font-weight: 860;
}

.hero-text {
  margin: 22px 0 0;
  max-width: 650px;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn-primary,
.btn-secondary {
  height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 750;
  transition:
    transform .18s ease,
    border-color .18s ease,
    background .18s ease;
}

.btn-primary {
  background: var(--dark);
  color: white;
}

.btn-primary:hover,
.btn-secondary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 253, 248, 0.76);
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: rgba(23, 23, 23, 0.3);
}

.hero-card {
  padding: 24px;
  border-radius: 28px;
  background: rgba(255, 253, 248, 0.82);
  border: 1px solid var(--border);
  box-shadow: 0 22px 60px rgba(23, 23, 23, 0.06);
}

.hero-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
}

.small-label {
  padding: 6px 10px;
  border-radius: 999px;
  background: #F1ECE2;
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 12px;
}

.question-stack {
  margin-top: 18px;
  display: grid;
  gap: 10px;
}

.question-item {
  padding: 14px 15px;
  border-radius: 16px;
  background: white;
  border: 1px solid rgba(226, 220, 207, 0.9);
  font-size: 14px;
  font-weight: 650;
  letter-spacing: -0.01em;
}

.note-box {
  margin-top: 18px;
  padding: 18px;
  border-radius: 18px;
  background: var(--dark);
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
  line-height: 1.65;
}

.section {
  padding: 44px 0;
}

.section-header {
  margin-bottom: 20px;
}

.section-header.split {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
}

.section-header h2,
.about-left h2 {
  margin: 9px 0 0;
  font-size: clamp(30px, 3.2vw, 44px);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.section-header p {
  max-width: 470px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.guide-card {
  --accent: #171717;

  min-height: 430px;
  padding: 22px;
  border-radius: 26px;
  background: rgba(255, 253, 248, 0.86);
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 42px rgba(23, 23, 23, 0.045);
  transition:
    transform .22s ease,
    box-shadow .22s ease,
    border-color .22s ease;
}

.guide-card::before {
  content: "";
  position: absolute;
  left: 22px;
  right: 22px;
  top: 0;
  height: 5px;
  border-radius: 0 0 999px 999px;
  background: var(--accent);
}

.guide-card.sat {
  --accent: var(--sat);
}

.guide-card.ielts {
  --accent: var(--ielts);
}

.guide-card.hsk {
  --accent: var(--hsk);
}

.guide-card:hover {
  transform: translateY(-6px);
  border-color: rgba(23, 23, 23, 0.25);
  box-shadow: 0 26px 70px rgba(23, 23, 23, 0.09);
}

.guide-top {
  display: flex;
  justify-content: space-between;
  gap: 18px;
}

.exam-name {
  font-size: 44px;
  line-height: 0.95;
  font-weight: 880;
  letter-spacing: -0.08em;
}

.exam-label {
  margin-top: 10px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.guide-icon {
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: white;
  border: 1px solid var(--border);
  color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform .2s ease,
    color .2s ease,
    border-color .2s ease;
}

.guide-card:hover .guide-icon {
  transform: translate(3px, -3px);
  color: var(--text);
  border-color: rgba(23, 23, 23, 0.26);
}

.guide-main {
  margin-top: 32px;
}

.guide-main h3 {
  margin: 0;
  font-size: 22px;
  line-height: 1.1;
  letter-spacing: -0.045em;
}

.guide-main p {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
}

.guide-info {
  margin-top: 20px;
  display: grid;
  gap: 10px;
}

.info-block {
  padding: 13px;
  border-radius: 16px;
  background: #F8F4EC;
  border: 1px solid rgba(226, 220, 207, 0.88);
}

.info-block span {
  display: block;
  color: var(--muted-2);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.info-block strong {
  display: block;
  margin-top: 6px;
  color: var(--text);
  font-size: 13px;
  line-height: 1.45;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 16px;
}

.tag-row span {
  padding: 6px 9px;
  border-radius: 999px;
  background: white;
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
  font-weight: 650;
}

.guide-footer {
  margin-top: auto;
  padding-top: 22px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  font-size: 14px;
  font-weight: 800;
}

.guide-footer svg {
  transition: transform .18s ease;
}

.guide-card:hover .guide-footer svg {
  transform: translateX(4px);
}

.start-section {
  border-top: 1px solid rgba(226, 220, 207, 0.82);
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.step-card {
  padding: 24px;
  border-radius: 24px;
  background: rgba(255, 253, 248, 0.82);
  border: 1px solid var(--border);
}

.step-number {
  color: var(--muted);
  font-size: 13px;
  font-weight: 850;
}

.step-card h3 {
  margin: 18px 0 0;
  font-size: 21px;
  letter-spacing: -0.045em;
}

.step-card p {
  margin: 9px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
}

.about-section {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 32px;
  padding: 34px;
  border-radius: 32px;
  background: var(--dark);
  color: white;
}

.about-section .section-eyebrow {
  color: rgba(255, 255, 255, 0.55);
}

.about-left h2 {
  color: white;
}

.about-right > p {
  margin: 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 15px;
  line-height: 1.8;
}

.value-grid {
  margin-top: 18px;
  display: grid;
  gap: 12px;
}

.value-card {
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.value-card h3 {
  margin: 0;
  color: white;
  font-size: 17px;
  letter-spacing: -0.035em;
}

.value-card p {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.64);
  font-size: 14px;
  line-height: 1.6;
}

.footer {
  margin-top: 42px;
  padding: 28px 0 10px;
  border-top: 1px solid rgba(226, 220, 207, 0.88);
  display: flex;
  justify-content: space-between;
  gap: 24px;
  color: var(--muted);
}

.footer strong {
  color: var(--text);
}

.footer p {
  margin: 6px 0 0;
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
}

.footer-links a:hover {
  color: var(--text);
}

@media (max-width: 1120px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-card {
    max-width: 720px;
  }

  .guide-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .topbar {
    padding: 0 18px;
  }

  .nav {
    display: none;
  }

  .main {
    padding: 32px 16px 30px;
  }

  .hero {
    padding: 18px 0 40px;
    gap: 26px;
  }

  .hero h1 {
    font-size: 44px;
  }

  .hero-text {
    font-size: 15px;
  }

  .section {
    padding: 34px 0;
  }

  .section-header.split {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .guide-grid,
  .steps {
    grid-template-columns: 1fr;
  }

  .guide-card {
    min-height: auto;
  }

  .about-section {
    padding: 24px;
    border-radius: 26px;
  }

  .footer {
    flex-direction: column;
  }
}

@media (max-width: 430px) {
  .hero h1 {
    font-size: 38px;
  }

  .exam-name {
    font-size: 38px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
`;