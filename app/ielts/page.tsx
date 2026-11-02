"use client";

import Link from "next/link";
import { useSite } from "@/app/context";

const T = {
  en: {
    badge: "IELTS PREPARATION",
    title: "Prepare for IELTS without making it complicated.",
    sub: "Resources and real advice for IELTS — kept simple so you can actually use it.",
    cta1: "Choose an area",
    cta2: "Start with resources",
    info1label: "Test Sections",
    info1value: "Listening, Reading, Writing, Speaking",
    info2label: "Recommended Start",
    info2value: "Format → Resources → Advice",
    info3label: "Important",
    info3value: "Consistency matters more than collecting links",
    areasKicker: "MAIN AREAS",
    areasTitle: "Choose where to start.",
    areasSub: "Start with one area and build from there.",
    openSection: "Open section",
    stepsKicker: "GET STARTED",
    stepsTitle: "Three simple steps",
    sections: [
      { n: "01", title: "Resources", text: "Websites, tools, and useful IELTS materials." },
      { n: "02", title: "Advice",    text: "Simple IELTS advice from real test experience." },
    ],
    steps: [
      { n: "01", title: "Understand the format",   text: "Know what each section actually tests before you start practicing." },
      { n: "02", title: "Pick a few, use them well", text: "One good resource used every day beats ten bookmarked ones." },
      { n: "03", title: "Progress takes repetition", text: "IELTS improvement comes from review — not just more practice hours." },
    ],
  },
  mn: {
    badge: "IELTS БЭЛТГЭЛ",
    title: "IELTS-ийг хүндрүүлэлгүйгээр бэлд.",
    sub: "IELTS-ийн эх сурвалж, бодит зөвлөгөө — энгийнээр боловсруулсан, ашиглахад хялбар.",
    cta1: "Хэсэг сонгох",
    cta2: "Эх сурвалжаас эхлэх",
    info1label: "Шалгалтын хэсгүүд",
    info1value: "Сонсох, Унших, Бичих, Ярих",
    info2label: "Зөвлөмж эхлэл",
    info2value: "Формат → Эх сурвалж → Зөвлөгөө",
    info3label: "Чухал",
    info3value: "Тогтмол байх нь линк цуглуулахаас илүү чухал",
    areasKicker: "ГОЛ ХЭСГҮҮД",
    areasTitle: "Хаанаас эхлэхээ сонго.",
    areasSub: "Нэг хэсгийг сонгоод тэндээсээ хөгж.",
    openSection: "Хэсэг нээх",
    stepsKicker: "ЭХЛЭХДЭЭ",
    stepsTitle: "Гурван энгийн алхам",
    sections: [
      { n: "01", title: "Эх сурвалж", text: "Вэбсайт, хэрэгсэл, IELTS-ийн хэрэгтэй материалууд." },
      { n: "02", title: "Зөвлөгөө",   text: "Бодит шалгалтын туршлагаас авсан энгийн зөвлөгөө." },
    ],
    steps: [
      { n: "01", title: "Форматыг мэд",          text: "Эхлэж дадлага хийхийн өмнө хэсэг бүр яг юу шалгадгийг ойлго." },
      { n: "02", title: "Цөөн, гүнзгий ашигла",  text: "Өдөр бүр нэг сайн эх сурвалж хэрэглэх нь арваар нь хадгалснаас дээр." },
      { n: "03", title: "Ахиц давталтаас үүснэ", text: "IELTS дахь ахиц давтан шалгахаас гарах — зөвхөн цаг нэмэхэд биш." },
    ],
  },
};

const sectionHrefs = ["/ielts/resources", "/ielts/advice"];
const sectionAccents = ["blue", "purple"];

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

export default function IELTSPage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;

  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-zinc-950 dark:text-zinc-100">

      <section className="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <a href="/" className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← Home</a>
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 sm:text-[11px]">
              {t.badge}
            </p>
            <h1 className="mt-4 max-w-3xl text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 dark:text-zinc-50 sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 dark:text-zinc-400 sm:mt-5 sm:text-base sm:leading-8">
              {t.sub}
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="#areas"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-zinc-100 dark:text-zinc-950"
              >
                {t.cta1}
                <ArrowRight />
              </a>
              <Link
                href="/ielts/resources"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                {t.cta2}
              </Link>
            </div>
          </div>
        </div>

        {/* QUICK INFO */}
        <div className="mt-3 grid gap-2.5 sm:mt-5 md:grid-cols-3 md:gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-zinc-500 sm:text-[11px]">{t.info1label}</p>
            <h2 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] dark:text-zinc-100 sm:mt-3 sm:text-2xl">{t.info1value}</h2>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-zinc-500 sm:text-[11px]">{t.info2label}</p>
            <h2 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] dark:text-zinc-100 sm:mt-3 sm:text-2xl">{t.info2value}</h2>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-4 shadow-sm sm:rounded-3xl sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 sm:text-[11px]">{t.info3label}</p>
            <h2 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] text-white sm:mt-3 sm:text-2xl">{t.info3value}</h2>
          </div>
        </div>

        {/* MAIN AREAS */}
        <section id="areas" className="mt-5 rounded-3xl border border-slate-900 bg-slate-950 p-5 shadow-xl sm:mt-8 sm:rounded-[2rem] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 sm:text-[11px]">{t.areasKicker}</p>
              <h2 className="mt-2 text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:mt-3 sm:text-4xl">{t.areasTitle}</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55 sm:leading-7">{t.areasSub}</p>
          </div>

          <div className="mt-5 grid gap-2.5 sm:mt-7 md:grid-cols-2 md:gap-4">
            {t.sections.map((section, i) => (
              <Link
                key={sectionHrefs[i]}
                href={sectionHrefs[i]}
                className="group relative grid grid-cols-[1fr_auto] items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl dark:bg-zinc-900 sm:block sm:rounded-[1.75rem] sm:p-5"
              >
                <div className={["absolute inset-y-0 left-0 w-1 sm:inset-x-0 sm:top-0 sm:h-1.5 sm:w-auto", sectionAccents[i] === "blue" ? "bg-sky-500" : "bg-violet-500"].join(" ")} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400 dark:text-zinc-500 sm:text-xs">{section.n}</span>
                    {sectionHrefs[i].endsWith("/advice") && (
                      <span className="rounded-full bg-violet-600 px-2 py-0.5 text-[10px] font-bold text-white">★ {lang === "mn" ? "Хамгийн чухал" : "Most Important"}</span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] text-slate-950 dark:text-zinc-100 sm:mt-8 sm:text-2xl">{section.title}</h3>
                  <p className="mt-1 line-clamp-1 text-xs leading-5 text-slate-500 dark:text-zinc-400 sm:mt-3 sm:line-clamp-none sm:text-sm sm:leading-7">{section.text}</p>
                  <div className="mt-5 hidden items-center gap-2 text-sm font-semibold text-slate-950 dark:text-zinc-100 sm:flex">
                    {t.openSection} <ArrowRight />
                  </div>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white dark:border-zinc-700 dark:text-zinc-400 sm:absolute sm:right-5 sm:top-5">
                  <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* STEPS */}
        <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:mt-8 sm:rounded-[2rem] sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400 sm:text-[11px]">{t.stepsKicker}</p>
          <h2 className="mt-2 text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 dark:text-zinc-50 sm:mt-3 sm:text-4xl">{t.stepsTitle}</h2>

          <div className="mt-5 grid gap-2.5 sm:mt-7 lg:grid-cols-3 lg:gap-4">
            {t.steps.map((step) => (
              <div key={step.n} className="grid grid-cols-[36px_1fr] gap-3 rounded-2xl border border-slate-200 p-4 dark:border-zinc-800 sm:block sm:rounded-3xl sm:p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-xs font-bold text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 sm:h-10 sm:w-10 sm:rounded-2xl sm:text-sm">
                  {step.n}
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.03em] dark:text-zinc-100 sm:mt-5 sm:text-xl">{step.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-zinc-400 sm:mt-2 sm:text-sm sm:leading-7">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
