"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteLogo from "./sitecomponents/logo";
import { useSite } from "./context";

// ─── ABOUT ME — edit these to change the profile section at the bottom ───────

const ME = {
  name: "Khaliun",
  email: "kmbqueensky@gmail.com",
  // Put your photo at /public/me.jpg (or change this path).
  photo: "/me.jpg",
};

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────

const T = {
  en: {
    nav: { guides: "Guides", about: "About", focus: "Focus Room", contact: "Contact" },
    hero: {
      tag: "Free · No signup · No ads",
      h1: "Together to the top.",
      sub: "Clear, honest guides for the SAT, IELTS and HSK. Pick your exam and know exactly what to do first.",
      cta: "Pick a guide",
      focus: "Open Focus Room",
    },
    guides: {
      label: "Guides",
      h: "Which exam are you preparing for?",
      items: [
        { label: "College admission", desc: "Digital SAT prep: resources, books, a score tracker and step-by-step advice." },
        { label: "Study abroad",      desc: "IELTS prep: what each section really tests and how to raise your band score." },
        { label: "Chinese proficiency", desc: "HSK prep: vocabulary, listening and reading, the way that actually sticks." },
      ],
      open: "Open guide",
    },
    about: {
      label: "About",
      h: "Made for students who want to get in.",
      p: "LGITU stands for “Let’s Go Into Top Universities”. Everything here is free and focused on what actually helps.",
      vals: [
        { t: "No account needed", d: "Open any guide and start right away." },
        { t: "Based on real prep", d: "Written from real experience, not filler." },
        { t: "Beginner-friendly",  d: "Plain language, one step at a time." },
      ],
    },
    me: {
      label: "Made by",
      hi: "Hi, I’m",
      role: "Creator of LGITU",
      p: "I built LGITU so students like me have one clear place to start preparing. Have a question, an idea, or found a mistake? Write to me anytime.",
      email: "Send me an email",
    },
    footer: { tagline: "Let’s Go Into Top Universities" },
  },
  mn: {
    nav: { guides: "Гарын авлага", about: "Тухай", focus: "Фокус өрөө", contact: "Холбоо барих" },
    hero: {
      tag: "Үнэгүй · Бүртгэлгүй · Зар сурталчилгаагүй",
      h1: "Хамтдаа оргилд.",
      sub: "SAT, IELTS, HSK-д зориулсан ойлгомжтой гарын авлага. Шалгалтаа сонгоод юунаас эхлэхээ мэд.",
      cta: "Гарын авлага сонгох",
      focus: "Фокус өрөө нээх",
    },
    guides: {
      label: "Гарын авлага",
      h: "Ямар шалгалтад бэлдэж байна вэ?",
      items: [
        { label: "Их сургуульд элсэлт", desc: "SAT бэлтгэл: эх сурвалж, ном, оноо хянагч, алхам алхмаар зөвлөгөө." },
        { label: "Гадаадад суралцах",   desc: "IELTS бэлтгэл: хэсэг бүр юу шалгадаг, оноогоо хэрхэн ахиулах вэ." },
        { label: "Хятад хэлний мэдлэг", desc: "HSK бэлтгэл: үгийн сан, сонсгол, уншлагыг үр дүнтэй аргаар." },
      ],
      open: "Нээх",
    },
    about: {
      label: "Тухай",
      h: "Шилдэг сургуульд орохыг зорьж буй сурагчдад.",
      p: "LGITU гэдэг нь “Шилдэг их сургуулиудад орцгооё” гэсэн утгатай. Энд байгаа бүх зүйл үнэгүй бөгөөд үнэхээр хэрэгтэй зүйлд төвлөрсөн.",
      vals: [
        { t: "Бүртгэл шаардлагагүй", d: "Гарын авлагаа нээгээд шууд эхэл." },
        { t: "Бодит туршлагад суурилсан", d: "Илүү дутуу зүйлгүй, бодит туршлагаас." },
        { t: "Анхлан суралцагчдад", d: "Энгийн хэлээр, алхам алхмаар." },
      ],
    },
    me: {
      label: "Бүтээгч",
      hi: "Сайн уу, би",
      role: "LGITU-г бүтээгч",
      p: "Над шиг сурагчдад бэлтгэлээ эхлэх нэг ойлгомжтой газар байгаасай гэж LGITU-г бүтээсэн. Асуулт, санаа байвал эсвэл алдаа олсон бол хүссэн үедээ надад бичээрэй.",
      email: "Имэйл илгээх",
    },
    footer: { tagline: "Шилдэг их сургуулиудад орцгооё" },
  },
};

const exams = [
  { exam: "SAT",   href: "/sat",   accent: "sat"   },
  { exam: "IELTS", href: "/ielts", accent: "ielts" },
  { exam: "HSK",   href: "/hsk",   accent: "hsk"   },
] as const;

// ─── ICONS ────────────────────────────────────────────────────────────────────

const svg = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...svg}>
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...svg}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M4.9 19.1l2.2-2.2M16.9 7.1l2.2-2.2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...svg}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" {...svg}>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" {...svg} strokeWidth={2.2}>
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" {...svg}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { dark, lang, toggleDark, setLang } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoOk, setPhotoOk] = useState(true);
  const photoRef = useRef<HTMLImageElement>(null);
  // The image may fail before React hydrates, so onError alone can miss it.
  useEffect(() => {
    const img = photoRef.current;
    if (img && img.complete && img.naturalWidth === 0) setPhotoOk(false);
  }, []);
  const c = T[lang];
  const close = () => setMenuOpen(false);

  return (
    <div className="hp-root">
      <style>{css}</style>

      {/* TOPBAR */}
      <header className="hp-bar">
        <div className="hp-bar-inner">
          <SiteLogo />

          <nav className="hp-nav">
            <a href="#guides">{c.nav.guides}</a>
            <Link href="/focus">{c.nav.focus}</Link>
            <a href="#about">{c.nav.about}</a>
            <a href="#contact">{c.nav.contact}</a>
          </nav>

          <div className="hp-bar-right">
            <div className="hp-lang" role="group" aria-label="Language">
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "mn" ? "on" : ""} onClick={() => setLang("mn")}>МН</button>
            </div>
            <button className="hp-icon-btn" onClick={toggleDark} aria-label="Toggle theme">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="hp-icon-btn hp-menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="hp-overlay" onClick={close}>
          <nav className="hp-drawer" onClick={e => e.stopPropagation()}>
            <a href="#guides" onClick={close}>{c.nav.guides}</a>
            <Link href="/focus" onClick={close}>{c.nav.focus}</Link>
            <a href="#about" onClick={close}>{c.nav.about}</a>
            <a href="#contact" onClick={close}>{c.nav.contact}</a>
            <div className="hp-sep" />
            {exams.map(e => (
              <Link key={e.exam} href={e.href} onClick={close}>
                <span className={`hp-dot ${e.accent}`} />{e.exam}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main>
        {/* HERO */}
        <section className="hp-hero hp-wrap">
          <p className="hp-tag">{c.hero.tag}</p>
          <h1 className="hp-h1">{c.hero.h1}</h1>
          <p className="hp-sub">{c.hero.sub}</p>
          <div className="hp-btns">
            <a href="#guides" className="hp-btn hp-btn-primary">{c.hero.cta} <ArrowRight /></a>
            <Link href="/focus" className="hp-btn hp-btn-ghost">{c.hero.focus}</Link>
          </div>
        </section>

        {/* GUIDES */}
        <section id="guides" className="hp-section hp-wrap">
          <p className="hp-label">{c.guides.label}</p>
          <h2 className="hp-h2">{c.guides.h}</h2>

          <div className="hp-grid">
            {exams.map((e, i) => {
              const item = c.guides.items[i];
              return (
                <Link key={e.exam} href={e.href} className={`hp-card ${e.accent}`}>
                  <div className="hp-card-top">
                    <span className={`hp-dot ${e.accent}`} />
                    <span className="hp-card-kicker">{item.label}</span>
                  </div>
                  <h3 className="hp-card-title">{e.exam}</h3>
                  <p className="hp-card-desc">{item.desc}</p>
                  <span className="hp-card-link">{c.guides.open} <ArrowRight /></span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="hp-section hp-wrap">
          <div className="hp-about">
            <div>
              <p className="hp-label">{c.about.label}</p>
              <h2 className="hp-h2">{c.about.h}</h2>
              <p className="hp-text">{c.about.p}</p>
            </div>
            <ul className="hp-vals">
              {c.about.vals.map(v => (
                <li key={v.t}>
                  <span className="hp-check"><CheckIcon /></span>
                  <div>
                    <strong>{v.t}</strong>
                    <span>{v.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="contact" className="hp-section hp-wrap">
          <div className="hp-me">
            <div className="hp-photo">
              <span className="hp-photo-fallback" aria-hidden="true">{ME.name.charAt(0)}</span>
              {photoOk && (
                // eslint-disable-next-line @next/next/no-img-element
                <img ref={photoRef} src={ME.photo} alt={ME.name} onError={() => setPhotoOk(false)} />
              )}
            </div>

            <div className="hp-me-body">
              <p className="hp-label">{c.me.label}</p>
              <h2 className="hp-me-name">
                <span>{c.me.hi}</span> {ME.name}
              </h2>
              <p className="hp-me-role">{c.me.role}</p>
              <p className="hp-text">{c.me.p}</p>

              <div className="hp-me-contact">
                <a href={`mailto:${ME.email}`} className="hp-btn hp-btn-primary">
                  <MailIcon /> {c.me.email}
                </a>
                <a href={`mailto:${ME.email}`} className="hp-me-email">{ME.email}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="hp-footer">
        <div className="hp-wrap hp-footer-inner">
          <div>
            <strong>LGITU</strong>
            <span>{c.footer.tagline} · © {new Date().getFullYear()}</span>
          </div>
          <nav>
            {exams.map(e => <Link key={e.exam} href={e.href}>{e.exam}</Link>)}
            <Link href="/focus">{c.nav.focus}</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const css = `
.hp-root {
  --bg:    #FFFFFF;
  --sf:    #FFFFFF;
  --sf2:   #F6F6F8;
  --bd:    #ECECF0;
  --bd2:   #D9D9E0;
  --tx:    #111118;
  --mu:    #5B5B66;
  --mu2:   #8E8E99;
  --acc:   #4F46E5;
  --sat:   #4F46E5;
  --ielts: #0E7490;
  --hsk:   #C2410C;

  min-height: 100vh;
  background: var(--bg);
  color: var(--tx);
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  overflow-x: hidden;
}
html.dark .hp-root {
  --bg:    #0E0E12;
  --sf:    #16161C;
  --sf2:   #1D1D24;
  --bd:    #26262E;
  --bd2:   #34343E;
  --tx:    #F2F2F5;
  --mu:    #A5A5B0;
  --mu2:   #74747F;
  --acc:   #818CF8;
  --sat:   #818CF8;
  --ielts: #2DD4BF;
  --hsk:   #FB923C;
}

html { scroll-behavior: smooth; }
.hp-root *, .hp-root *::before, .hp-root *::after { box-sizing: border-box; }
:where(.hp-root) :where(h1, h2, h3, p, ul) { margin: 0; padding: 0; }
.hp-root section[id] { scroll-margin-top: 72px; }

.hp-wrap { max-width: 1080px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }

/* logo */
.hp-root .logo-name    { color: var(--tx); }
.hp-root .logo-tagline { color: var(--mu2); }
.hp-root .site-logo:hover .logo-name { color: var(--acc); }

/* ── topbar ── */
.hp-bar {
  position: sticky; top: 0; z-index: 20;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: saturate(180%) blur(16px);
  border-bottom: 1px solid var(--bd);
}
.hp-bar-inner {
  max-width: 1080px; margin: 0 auto; padding: 0 24px; height: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}
.hp-nav { display: flex; gap: 28px; }
.hp-nav a { color: var(--mu); text-decoration: none; font-size: 14px; font-weight: 500; transition: color .15s; }
.hp-nav a:hover { color: var(--tx); }

.hp-bar-right { display: flex; align-items: center; gap: 8px; }
.hp-lang {
  display: flex; padding: 3px; gap: 2px; border-radius: 10px;
  background: var(--sf2);
}
.hp-lang button {
  border: 0; background: none; cursor: pointer;
  color: var(--mu2); font: inherit; font-size: 12px; font-weight: 600;
  padding: 5px 9px; border-radius: 7px; transition: color .15s, background .15s;
}
.hp-lang button.on { color: var(--tx); background: var(--sf); box-shadow: 0 1px 2px rgba(0,0,0,.06); }
.hp-lang button:not(.on):hover { color: var(--tx); }

.hp-icon-btn {
  width: 36px; height: 36px; border-radius: 10px;
  border: 1px solid var(--bd); background: var(--sf);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--mu); transition: color .15s, border-color .15s;
}
.hp-icon-btn:hover { color: var(--tx); border-color: var(--bd2); }
.hp-menu-btn { display: none; }

/* drawer */
.hp-overlay { position: fixed; inset: 0; z-index: 19; background: rgba(0,0,0,.25); animation: hpFade .15s ease; }
.hp-drawer {
  position: absolute; top: 64px; left: 0; right: 0;
  background: var(--bg); border-bottom: 1px solid var(--bd);
  padding: 10px 16px 16px; display: flex; flex-direction: column;
}
.hp-drawer > a {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 8px; color: var(--tx); text-decoration: none;
  font-size: 16px; font-weight: 600; border-radius: 10px;
}
.hp-drawer > a:hover { background: var(--sf2); }
.hp-sep { height: 1px; background: var(--bd); margin: 8px 0; }
@keyframes hpFade { from { opacity: 0 } to { opacity: 1 } }

.hp-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.hp-dot.sat   { background: var(--sat); }
.hp-dot.ielts { background: var(--ielts); }
.hp-dot.hsk   { background: var(--hsk); }

/* ── buttons ── */
.hp-btn {
  height: 46px; padding: 0 20px; border-radius: 12px;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-size: 15px; font-weight: 600; text-decoration: none;
  transition: background .15s, border-color .15s, color .15s, transform .15s;
}
.hp-btn-primary { background: var(--tx); color: var(--bg); }
.hp-btn-primary:hover { transform: translateY(-1px); opacity: .9; }
.hp-btn-ghost { border: 1px solid var(--bd2); color: var(--tx); background: var(--sf); }
.hp-btn-ghost:hover { border-color: var(--mu2); }

/* ── hero ── */
.hp-hero { padding-top: 112px; padding-bottom: 96px; text-align: center; display: flex; flex-direction: column; align-items: center; }
.hp-tag {
  display: inline-block; padding: 6px 14px; border-radius: 999px;
  background: var(--sf2); color: var(--mu);
  font-size: 13px; font-weight: 500; margin-bottom: 28px;
}
.hp-h1 {
  font-size: clamp(42px, 7vw, 76px); font-weight: 800;
  letter-spacing: -0.035em; line-height: 1.02; color: var(--tx);
  text-wrap: balance;
}
.hp-sub { max-width: 540px; margin-top: 22px; color: var(--mu); font-size: 18px; line-height: 1.6; text-wrap: pretty; }
.hp-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 36px; }

/* ── sections ── */
.hp-section { padding-top: 88px; padding-bottom: 88px; border-top: 1px solid var(--bd); }
.hp-label { font-size: 13px; font-weight: 600; color: var(--acc); margin-bottom: 10px; }
.hp-h2 {
  font-size: clamp(28px, 3.4vw, 40px); font-weight: 750;
  letter-spacing: -0.03em; line-height: 1.12; color: var(--tx);
  text-wrap: balance;
}
.hp-text { margin-top: 16px; color: var(--mu); font-size: 16px; line-height: 1.7; max-width: 520px; }

/* guide cards */
.hp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; }
.hp-card {
  display: flex; flex-direction: column;
  padding: 28px; border-radius: 18px;
  background: var(--sf); border: 1px solid var(--bd);
  text-decoration: none; color: inherit;
  transition: border-color .2s, box-shadow .2s, transform .2s;
}
.hp-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(17,17,24,.07); }
.hp-card.sat:hover   { border-color: color-mix(in srgb, var(--sat) 45%, var(--bd)); }
.hp-card.ielts:hover { border-color: color-mix(in srgb, var(--ielts) 45%, var(--bd)); }
.hp-card.hsk:hover   { border-color: color-mix(in srgb, var(--hsk) 45%, var(--bd)); }
.hp-card-top { display: flex; align-items: center; gap: 8px; }
.hp-card-kicker { font-size: 13px; font-weight: 500; color: var(--mu2); }
.hp-card-title { margin-top: 18px; font-size: 32px; font-weight: 800; letter-spacing: -0.02em; color: var(--tx); }
.hp-card-desc { margin-top: 10px; flex: 1; color: var(--mu); font-size: 15px; line-height: 1.6; }
.hp-card-link { margin-top: 24px; display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: var(--tx); }
.hp-card.sat   .hp-card-link { color: var(--sat); }
.hp-card.ielts .hp-card-link { color: var(--ielts); }
.hp-card.hsk   .hp-card-link { color: var(--hsk); }
.hp-card-link svg { transition: transform .2s; }
.hp-card:hover .hp-card-link svg { transform: translateX(3px); }

/* about */
.hp-about { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: start; }
.hp-vals { list-style: none; display: flex; flex-direction: column; gap: 24px; padding-top: 6px; }
.hp-vals li { display: flex; gap: 14px; align-items: flex-start; }
.hp-check {
  width: 26px; height: 26px; border-radius: 8px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--acc) 12%, transparent); color: var(--acc);
}
.hp-vals li > div > strong { display: block; font-size: 16px; font-weight: 650; color: var(--tx); }
.hp-vals li > div > span { display: block; margin-top: 3px; font-size: 15px; color: var(--mu); line-height: 1.55; }

/* about me */
.hp-me { display: grid; grid-template-columns: minmax(0, 440px) 1fr; gap: 64px; align-items: center; }
.hp-photo {
  position: relative; width: 100%; aspect-ratio: 4 / 5;
  border-radius: 24px; overflow: hidden;
  background: var(--sf2); border: 1px solid var(--bd);
}
.hp-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.hp-photo-fallback {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: 120px; font-weight: 800; color: var(--bd2); letter-spacing: -0.04em;
}
.hp-me-name {
  font-size: clamp(36px, 5vw, 56px); font-weight: 800;
  letter-spacing: -0.035em; line-height: 1.05; color: var(--tx);
}
.hp-me-name span { color: var(--mu2); font-weight: 700; }
.hp-me-role { margin-top: 10px; font-size: 17px; font-weight: 500; color: var(--mu); }
.hp-me-contact { margin-top: 32px; display: flex; flex-wrap: wrap; align-items: center; gap: 12px 20px; }
.hp-me-email {
  color: var(--tx); font-size: 15px; font-weight: 500; text-decoration: none;
  border-bottom: 1px solid var(--bd2); padding-bottom: 2px; transition: border-color .15s;
  word-break: break-all;
}
.hp-me-email:hover { border-color: var(--tx); }

/* footer */
.hp-footer { border-top: 1px solid var(--bd); }
.hp-footer-inner {
  padding-top: 28px; padding-bottom: 28px;
  display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;
}
.hp-footer strong { font-size: 14px; font-weight: 800; color: var(--tx); margin-right: 10px; }
.hp-footer span { font-size: 13px; color: var(--mu2); }
.hp-footer nav { display: flex; gap: 20px; }
.hp-footer nav a { font-size: 13px; font-weight: 500; color: var(--mu); text-decoration: none; }
.hp-footer nav a:hover { color: var(--tx); }

/* ── responsive ── */
@media (max-width: 900px) {
  .hp-grid { grid-template-columns: 1fr; }
  .hp-about { grid-template-columns: 1fr; gap: 36px; }
  .hp-me { grid-template-columns: 1fr; gap: 36px; }
  .hp-photo { max-width: 440px; }
}
@media (max-width: 720px) {
  .hp-wrap, .hp-bar-inner { padding-left: 16px; padding-right: 16px; }
  .hp-nav { display: none; }
  .hp-menu-btn { display: flex; }
  .hp-hero { padding-top: 72px; padding-bottom: 64px; }
  .hp-sub { font-size: 16px; }
  .hp-section { padding-top: 64px; padding-bottom: 64px; }
  .hp-card { padding: 22px; }
}
@media (max-width: 460px) {
  .hp-btns { flex-direction: column; width: 100%; }
  .hp-btns .hp-btn { width: 100%; }
}
`;
