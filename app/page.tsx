"use client";

import Link from "next/link";
import { useState } from "react";
import SiteLogo from "./sitecomponents/logo";
import { useSite } from "./context";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────

const T = {
  en: {
    nav: ["Guides", "About", "Focus Room"],
    hero: {
      tag: "study together · go further",
      h1a: "Together",
      h1b: "to the top.",
      sub: "SAT, IELTS, and HSK guides — no noise, no paywalls. Just what actually helps you get in.",
      cta: "Pick a guide",
      cta2: "About",
      focus: "Focus Room",
    },
    guides: {
      label: "Pick one",
      h: "Which exam?",
      items: [
        { label: "College Admission", desc: "Digital SAT prep — resources, books, and step-by-step advice that actually makes sense." },
        { label: "Study Abroad",      desc: "IELTS prep — what each section really tests and how to improve your band score." },
        { label: "Chinese Proficiency", desc: "HSK prep — vocabulary, listening, and reading the way that actually sticks." },
      ],
      open: "Open guide",
    },
    about: {
      h: "Made for students\nwho want to get in.",
      p: "Free study guides with no ads, no signups, no noise. Just the stuff that helps.",
      vals: ["No account needed", "Based on real prep", "Clear and beginner-friendly"],
    },
    footer: { tagline: "Let's Go Into Top Universities", copy: "Free · No signup" },
  },
  mn: {
    nav: ["Гарын авлага", "Тухай", "Фокус өрөө"],
    hero: {
      tag: "хамт суралц · хамт дэвш",
      h1a: "Хамтдаа их",
      h1b: "сургуульд ороё",
      sub: "SAT, IELTS, HSK гарын авлага — дэмий зүйлгүй, төлбөргүй. Орохыг зорьж буй хүн бүрт.",
      cta: "Гарын авлага сонгох",
      cta2: "Тухай",
      focus: "Фокус өрөө",
    },
    guides: {
      label: "Нэгийг сонго",
      h: "Аль шалгалт?",
      items: [
        { label: "Их сургуульд элсэлт", desc: "SAT бэлтгэл — эх сурвалж, ном, алхам алхмаар утга бүхий зөвлөгөө." },
        { label: "Гадаадад суралцах",   desc: "IELTS бэлтгэл — хэсэг бүр юу шалгадаг, оноогоо хэрхэн нэмэгдүүлэх вэ." },
        { label: "Хятад хэлний мэдлэг", desc: "HSK бэлтгэл — үгийн сан, сонсох, уншлагыг үнэхээр тогтдог аргаар." },
      ],
      open: "Нээх",
    },
    about: {
      h: "Орохыг зорьж буй\nоюутнуудад зориулсан.",
      p: "Зар байхгүй, бүртгэл байхгүй, дэмий зүйлгүй. Зөвхөн хэрэгтэй зүйлс.",
      vals: ["Бүртгэл шаардлагагүй", "Бодит туршлагад суурилсан", "Анхлан суралцагчдад"],
    },
    footer: { tagline: "Шилдэг их сургуулиудад орцгооё", copy: "Үнэгүй · Бүртгэл шаардлагагүй" },
  },
};

const exams = [
  { exam: "SAT",   href: "/sat",   accent: "sat"   },
  { exam: "IELTS", href: "/ielts", accent: "ielts" },
  { exam: "HSK",   href: "/hsk",   accent: "hsk"   },
];

// ─── ICONS ────────────────────────────────────────────────────────────────────

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open
        ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
        : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>}
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="5"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="5" y2="12"/>
      <line x1="19" y1="12" x2="22" y2="12"/>
      <line x1="4.9" y1="4.9" x2="7.1" y2="7.1"/>
      <line x1="16.9" y1="16.9" x2="19.1" y2="19.1"/>
      <line x1="4.9" y1="19.1" x2="7.1" y2="16.9"/>
      <line x1="16.9" y1="7.1" x2="19.1" y2="4.9"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h12M11 5l5 5-5 5"/>
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 15 15 5M7 5h8v8"/>
    </svg>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { dark, lang, toggleDark, setLang } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const c = T[lang];

  return (
    <div className="hp-root">
      <style>{css}</style>

      <div className="hp-grid-bg" />
      {dark && <><div className="hp-blob hp-b1" /><div className="hp-blob hp-b2" /></>}

      {/* TOPBAR */}
      <header className="hp-bar">
        <SiteLogo />

        <nav className="hp-nav">
          <a href="#guides">{c.nav[0]}</a>
          <a href="#about">{c.nav[1]}</a>
          <Link href="/focus" className="hp-nav-focus">{c.nav[2]}</Link>
        </nav>

        <div className="hp-bar-right">
          <div className="hp-lang">
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            <span>/</span>
            <button className={lang === "mn" ? "on" : ""} onClick={() => setLang("mn")}>МН</button>
          </div>
          <button className="hp-icon-btn" onClick={toggleDark} aria-label="Toggle theme">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="hp-icon-btn hp-menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="hp-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="hp-drawer" onClick={e => e.stopPropagation()}>
            <a href="#guides" onClick={() => setMenuOpen(false)}>{c.nav[0]}</a>
            <a href="#about"  onClick={() => setMenuOpen(false)}>{c.nav[1]}</a>
            <Link href="/focus" onClick={() => setMenuOpen(false)}>{c.nav[2]}</Link>
            <div className="hp-sep" />
            <Link href="/sat"   onClick={() => setMenuOpen(false)}><span className="hp-dot sat"/>SAT</Link>
            <Link href="/ielts" onClick={() => setMenuOpen(false)}><span className="hp-dot ielts"/>IELTS</Link>
            <Link href="/hsk"   onClick={() => setMenuOpen(false)}><span className="hp-dot hsk"/>HSK</Link>
          </nav>
        </div>
      )}

      <main className="hp-main">

        {/* HERO */}
        <section className="hp-hero">
          <p className="hp-tag">— {c.hero.tag}</p>

          <h1 className="hp-h1">
            <span className="hp-ha">{c.hero.h1a}</span>
            <span className="hp-hb">{c.hero.h1b}</span>
          </h1>

          <p className="hp-sub">{c.hero.sub}</p>

          <div className="hp-btns">
            <a href="#guides" className="hp-fill">{c.hero.cta} <ArrowRight /></a>
            <Link href="/focus" className="hp-focus">{c.hero.focus} <ArrowUpRight /></Link>
            <a href="#about"  className="hp-line">{c.hero.cta2}</a>
          </div>

          <div className="hp-chips">
            {exams.map(e => (
              <Link key={e.exam} href={e.href} className={`hp-chip ${e.accent}`}>{e.exam}</Link>
            ))}
          </div>
        </section>

        {/* GUIDES */}
        <section id="guides" className="hp-section">
          <p className="hp-slabel">{c.guides.label}</p>
          <h2 className="hp-sh">{c.guides.h}</h2>

          <div className="hp-ggrid">
            {exams.map((e, i) => {
              const item = c.guides.items[i];
              return (
                <Link key={e.exam} href={e.href} className={`hp-gcard ${e.accent}`}>
                  <div className="hp-gcard-head">
                    <span className={`hp-gbadge ${e.accent}`}>{e.exam}</span>
                    <span className="hp-garrow"><ArrowUpRight /></span>
                  </div>
                  <div className="hp-gname">{e.exam}</div>
                  <div className="hp-glabel">{item.label}</div>
                  <p className="hp-gdesc">{item.desc}</p>
                  <div className="hp-gfoot">{c.guides.open} <ArrowRight /></div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="hp-section hp-about">
          <div className="hp-about-text">
            <h2 className="hp-about-h">
              {c.about.h.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br/>}</span>)}
            </h2>
            <p className="hp-about-p">{c.about.p}</p>
          </div>
          <div className="hp-vals">
            {c.about.vals.map(v => <span key={v} className="hp-val">{v}</span>)}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hp-footer">
          <div>
            <strong className="hp-fname">LGITU</strong>
            <p className="hp-ftag">{c.footer.tagline}</p>
            <p className="hp-fcopy">© {new Date().getFullYear()} · {c.footer.copy}</p>
          </div>
          <div className="hp-flinks">
            <Link href="/sat">SAT</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/hsk">HSK</Link>
          </div>
        </footer>

      </main>
    </div>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const css = `
/* light default */
.hp-root {
  --bg:    #F7F6F2;
  --sf:    #FFFFFF;
  --sf2:   #EFEDE8;
  --bd:    rgba(0,0,0,0.08);
  --bd2:   rgba(0,0,0,0.15);
  --tx:    #18161F;
  --mu:    rgba(24,22,31,0.52);
  --mu2:   rgba(24,22,31,0.32);
  --sat:   #4F46E5; --satd: rgba(79,70,229,0.09);  --satg: rgba(79,70,229,0.18);
  --ielts: #0E7490; --ielsd: rgba(14,116,144,0.09); --ielsg: rgba(14,116,144,0.18);
  --hsk:   #C2410C; --hskd: rgba(194,65,12,0.09);  --hskg: rgba(194,65,12,0.18);

  min-height: 100vh;
  background: var(--bg);
  color: var(--tx);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* dark override via html.dark ancestor */
html.dark .hp-root {
  --bg:    #0E0D11;
  --sf:    #161520;
  --sf2:   #1E1D29;
  --bd:    rgba(255,255,255,0.07);
  --bd2:   rgba(255,255,255,0.14);
  --tx:    #EEEDF4;
  --mu:    rgba(238,237,244,0.50);
  --mu2:   rgba(238,237,244,0.28);
  --sat:   #818CF8; --satd: rgba(129,140,248,0.12); --satg: rgba(129,140,248,0.22);
  --ielts: #2DD4BF; --ielsd: rgba(45,212,191,0.12); --ielsg: rgba(45,212,191,0.22);
  --hsk:   #FB923C; --hskd: rgba(251,146,60,0.12);  --hskg: rgba(251,146,60,0.22);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

.hp-grid-bg {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse at 50% 0%, black 0%, transparent 65%);
}
html.dark .hp-grid-bg {
  background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
}

.hp-blob { position: fixed; border-radius: 50%; filter: blur(130px); pointer-events: none; z-index: 0; opacity: 0.07; }
.hp-b1 { width: 600px; height: 600px; top: -200px; left: -150px; background: #818CF8; }
.hp-b2 { width: 500px; height: 500px; bottom: -180px; right: -120px; background: #FB923C; }

/* logo dark/light */
html.dark .hp-root .logo-mark  { background: #fff; box-shadow: 0 6px 18px rgba(255,255,255,0.08); }
html.dark .hp-root .logo-cap   { background: #111118; }
html.dark .hp-root .logo-cap::after { background: #fff; }
html.dark .hp-root .logo-arrow { color: #818CF8; }
html.dark .hp-root .logo-name  { color: var(--tx); }
html.dark .hp-root .logo-tagline { color: var(--mu2); }
html.dark .hp-root .site-logo:hover .logo-name { color: var(--sat); }
.hp-root .logo-name  { color: var(--tx); }
.hp-root .logo-tagline { color: var(--mu2); }
.hp-root .site-logo:hover .logo-name { color: var(--sat); }
.hp-root .logo-mark, .hp-root .logo-name { transition: transform .18s, color .18s, box-shadow .18s; }

/* topbar */
.hp-bar {
  position: sticky; top: 0; z-index: 20;
  height: 60px; padding: 0 28px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--bd);
  background: rgba(247,246,242,0.9);
  backdrop-filter: blur(20px);
  transition: background .3s;
}
html.dark .hp-bar { background: rgba(14,13,17,0.9); }

.hp-nav { display: flex; gap: 22px; }
.hp-nav a { color: var(--mu); text-decoration: none; font-size: 14px; font-weight: 500; transition: color .18s; }
.hp-nav a:hover { color: var(--tx); }

.hp-bar-right { display: flex; align-items: center; gap: 8px; }

.hp-lang {
  display: flex; align-items: center; gap: 3px;
  padding: 4px 6px; border-radius: 8px;
  border: 1px solid var(--bd); background: var(--sf);
}
.hp-lang span { color: var(--mu2); font-size: 12px; }
.hp-lang button {
  background: none; border: none; cursor: pointer;
  color: var(--mu); font-size: 12px; font-weight: 700;
  padding: 2px 5px; border-radius: 5px;
  transition: color .15s, background .15s;
}
.hp-lang button.on { color: var(--tx); background: var(--sf2); }
.hp-lang button:not(.on):hover { color: var(--tx); }

.hp-icon-btn {
  width: 34px; height: 34px; border-radius: 9px;
  border: 1px solid var(--bd); background: var(--sf);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--mu);
  transition: color .18s, border-color .18s;
}
.hp-icon-btn:hover { color: var(--tx); border-color: var(--bd2); }
.hp-menu-btn { display: none; }

/* drawer */
.hp-overlay {
  position: fixed; inset: 0; z-index: 19;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(6px);
  animation: hpFade .18s ease;
}
.hp-drawer {
  position: absolute; top: 60px; left: 0; right: 0;
  background: var(--sf); border-bottom: 1px solid var(--bd);
  padding: 12px 14px; display: flex; flex-direction: column; gap: 2px;
  animation: hpSlide .2s ease;
}
.hp-drawer > a {
  text-decoration: none; color: var(--tx);
  font-size: 17px; font-weight: 700; letter-spacing: -0.02em;
  padding: 10px 12px; border-radius: 11px;
  transition: background .14s;
  display: flex; align-items: center; gap: 10px;
}
.hp-drawer > a:hover { background: var(--sf2); }
.hp-sep { height: 1px; background: var(--bd); margin: 6px 0; }
.hp-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.hp-dot.sat   { background: var(--sat); }
.hp-dot.ielts { background: var(--ielts); }
.hp-dot.hsk   { background: var(--hsk); }
@keyframes hpFade  { from{opacity:0} to{opacity:1} }
@keyframes hpSlide { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }

/* main */
.hp-main {
  position: relative; z-index: 1;
  max-width: 1140px; margin: 0 auto;
  padding: 0 28px 48px;
}

/* hero */
.hp-hero { padding: 80px 0 68px; text-align: center; display: flex; flex-direction: column; align-items: center; }
.hp-tag  { font-size: 13px; color: var(--mu2); font-weight: 500; letter-spacing: 0.01em; margin-bottom: 22px; }
.hp-h1   { display: flex; flex-direction: column; gap: 4px; margin-bottom: 22px; }
.hp-ha   {
  font-size: clamp(36px, 4.4vw, 58px);
  font-weight: 700; letter-spacing: -0.01em; line-height: 1.02; color: var(--mu);
}
.hp-hb   {
  font-size: clamp(50px, 6.4vw, 86px);
  font-weight: 900; letter-spacing: -0.018em; line-height: 0.98; color: var(--tx);
  text-wrap: balance;
}
.hp-sub  { max-width: 480px; color: var(--mu); font-size: 16px; line-height: 1.75; margin-bottom: 32px; }

.hp-btns { display: flex; align-items: center; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 44px; }
.hp-fill {
  height: 44px; padding: 0 18px; border-radius: 999px;
  background: var(--tx); color: var(--bg);
  font-size: 14px; font-weight: 700; text-decoration: none;
  display: inline-flex; align-items: center; gap: 8px;
  transition: opacity .18s, transform .18s;
}
.hp-fill:hover { opacity: 0.82; transform: translateY(-1px); }
.hp-line {
  height: 44px; padding: 0 18px; border-radius: 999px;
  background: transparent; border: 1px solid var(--bd2);
  color: var(--mu); font-size: 14px; font-weight: 600; text-decoration: none;
  display: inline-flex; align-items: center;
  transition: border-color .18s, color .18s, transform .18s;
}
.hp-line:hover { border-color: var(--bd2); color: var(--tx); transform: translateY(-1px); }
.hp-focus {
  height: 44px; padding: 0 18px; border-radius: 999px;
  background: linear-gradient(135deg, #7C3AED, #4F46E5);
  color: #fff; font-size: 14px; font-weight: 700; text-decoration: none;
  display: inline-flex; align-items: center; gap: 7px;
  box-shadow: 0 10px 26px rgba(124,58,237,0.30);
  transition: transform .18s, box-shadow .18s, filter .18s;
}
.hp-focus:hover { transform: translateY(-1px); filter: brightness(1.05); box-shadow: 0 14px 32px rgba(124,58,237,0.38); }
.hp-nav-focus {
  color: #7C3AED !important; font-weight: 700 !important;
}
html.dark .hp-nav-focus { color: #A78BFA !important; }

.hp-chips { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
.hp-chip  {
  padding: 8px 20px; border-radius: 999px;
  font-size: 14px; font-weight: 800; letter-spacing: -0.01em;
  text-decoration: none; border: 1px solid transparent;
  transition: transform .18s, filter .18s;
}
.hp-chip.sat   { background: var(--satd);  color: var(--sat);   border-color: var(--satg);  }
.hp-chip.ielts { background: var(--ielsd); color: var(--ielts); border-color: var(--ielsg); }
.hp-chip.hsk   { background: var(--hskd);  color: var(--hsk);   border-color: var(--hskg);  }
.hp-chip:hover { transform: translateY(-2px); filter: brightness(1.06); }

/* section */
.hp-section { padding: 64px 0; }
.hp-slabel  {
  font-size: 11px; font-weight: 800; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--mu2); margin-bottom: 8px;
}
.hp-sh {
  font-size: clamp(26px, 2.8vw, 38px);
  font-weight: 900; letter-spacing: -0.06em; line-height: 1.04;
  color: var(--tx); margin-bottom: 32px;
}

/* guide cards */
.hp-ggrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
.hp-gcard {
  display: block; text-decoration: none;
  border-radius: 22px; background: var(--sf); border: 1px solid var(--bd);
  overflow: hidden; position: relative;
  transition: transform .22s, border-color .22s, box-shadow .22s;
}
.hp-gcard::after {
  content:""; position: absolute; left: 20px; right: 20px; top: 0;
  height: 2px; border-radius: 0 0 4px 4px; opacity: 0.7;
  transition: opacity .22s;
}
.hp-gcard.sat::after   { background: var(--sat); }
.hp-gcard.ielts::after { background: var(--ielts); }
.hp-gcard.hsk::after   { background: var(--hsk); }
.hp-gcard:hover { transform: translateY(-6px); }
.hp-gcard:hover::after { opacity: 1; }
.hp-gcard.sat:hover   { border-color: color-mix(in srgb, var(--sat)   40%, transparent); box-shadow: 0 22px 56px var(--satg); }
.hp-gcard.ielts:hover { border-color: color-mix(in srgb, var(--ielts) 40%, transparent); box-shadow: 0 22px 56px var(--ielsg); }
.hp-gcard.hsk:hover   { border-color: color-mix(in srgb, var(--hsk)   40%, transparent); box-shadow: 0 22px 56px var(--hskg); }

.hp-gcard-head {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 20px 0;
}
.hp-gbadge {
  font-size: 10px; font-weight: 800; letter-spacing: 0.1em;
  text-transform: uppercase; padding: 4px 10px; border-radius: 999px;
}
.hp-gbadge.sat   { background: var(--satd);  color: var(--sat); }
.hp-gbadge.ielts { background: var(--ielsd); color: var(--ielts); }
.hp-gbadge.hsk   { background: var(--hskd);  color: var(--hsk); }
.hp-garrow {
  width: 30px; height: 30px; border-radius: 9px;
  border: 1px solid var(--bd); background: var(--sf2);
  display: flex; align-items: center; justify-content: center;
  color: var(--mu); transition: transform .2s, color .2s;
}
.hp-gcard:hover .hp-garrow { transform: translate(3px,-3px); color: var(--tx); }

.hp-gname   { padding: 14px 20px 0; font-size: 48px; font-weight: 900; letter-spacing: -0.02em; line-height: 0.92; color: var(--tx); }
.hp-glabel  { padding: 7px 20px 0; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--mu2); }
.hp-gdesc   { padding: 14px 20px 0; color: var(--mu); font-size: 14px; line-height: 1.68; }
.hp-gfoot   { padding: 18px 20px 20px; display: flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 700; color: var(--tx); }
.hp-gfoot svg { transition: transform .18s; }
.hp-gcard:hover .hp-gfoot svg { transform: translateX(4px); }

/* about */
.hp-about {
  display: flex; align-items: flex-start;
  justify-content: space-between; gap: 48px;
  padding-top: 56px; padding-bottom: 56px;
  border-top: 1px solid var(--bd);
}
.hp-about-text { max-width: 460px; }
.hp-about-h {
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 900; letter-spacing: -0.065em; line-height: 1.05;
  color: var(--tx); margin-bottom: 16px;
  white-space: pre-line;
}
.hp-about-p { color: var(--mu); font-size: 15px; line-height: 1.78; }
.hp-vals    { display: flex; flex-direction: column; gap: 8px; padding-top: 6px; }
.hp-val     {
  padding: 12px 18px; border-radius: 12px;
  border: 1px solid var(--bd); background: var(--sf);
  font-size: 14px; font-weight: 600; color: var(--mu);
  transition: border-color .2s, color .2s;
}
.hp-val:hover { border-color: var(--bd2); color: var(--tx); }

/* footer */
.hp-footer {
  border-top: 1px solid var(--bd);
  padding: 30px 0 22px;
  display: flex; justify-content: space-between; align-items: flex-start; gap: 24px;
}
.hp-fname { display: block; font-size: 15px; font-weight: 900; letter-spacing: -0.04em; color: var(--tx); margin-bottom: 6px; }
.hp-ftag  { font-size: 13px; color: var(--mu); }
.hp-fcopy { margin-top: 7px; font-size: 12px; color: var(--mu2); }
.hp-flinks { display: flex; gap: 8px; align-items: center; }
.hp-flinks a {
  padding: 7px 14px; border-radius: 999px;
  background: var(--sf); border: 1px solid var(--bd);
  color: var(--mu); text-decoration: none;
  font-size: 13px; font-weight: 700;
  transition: color .16s, border-color .16s;
}
.hp-flinks a:hover { color: var(--tx); border-color: var(--bd2); }

/* responsive */
@media (max-width: 1060px) {
  .hp-ggrid { grid-template-columns: repeat(2,1fr); }
  .hp-about { flex-direction: column; gap: 28px; }
}
@media (max-width: 720px) {
  .hp-bar { padding: 0 18px; }
  .hp-nav { display: none; }
  .hp-menu-btn { display: flex; }
  .hp-main { padding: 0 16px 32px; }
  .hp-hero { padding: 56px 0 48px; }
  .hp-ggrid { grid-template-columns: 1fr; }
  .hp-footer { flex-direction: column; gap: 20px; }
}
@media (max-width: 460px) {
  .hp-ha { font-size: 38px; }
  .hp-hb { font-size: 54px; }
  .hp-btns { flex-direction: column; align-items: center; }
  .hp-fill, .hp-line { width: 100%; justify-content: center; }
}
`;
