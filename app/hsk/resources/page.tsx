"use client";

import { useMemo, useState } from "react";
import { useSite } from "@/app/context";

type Resource = {
  id: string;
  title: string;
  descEn: string;
  descMn: string;
  link: string;
  category: string;
  tagEn: string;
  tagMn: string;
  level?: string;
  chinese?: string;
  highlight?: boolean;
};

const resources: Resource[] = [
  {
    id: "1",
    title: "Pleco",
    descEn: "The best Chinese dictionary app. Look up characters by drawing, pinyin, or radical. Includes stroke order, example sentences, and audio — essential for every learner.",
    descMn: "Хамгийн сайн хятад толь бичгийн апп. Зур, пиньин эсвэл бүрэлдэхүүн хэсгээр тайлбар хайна. Зурах дараалал, жишээ өгүүлбэр болон аудио — бүх сурагчдад зайлшгүй хэрэгтэй.",
    link: "https://www.pleco.com",
    category: "Apps",
    tagEn: "Dictionary · All levels",
    tagMn: "Толь · Бүх түвшин",
    highlight: true,
  },
  {
    id: "2",
    title: "HSK Academy",
    descEn: "Free vocabulary lists and practice quizzes for every HSK level (1–6). The cleanest place to study and test your word knowledge before the exam.",
    descMn: "HSK-ийн бүх түвшинд (1–6) үнэгүй үгийн сан болон дадлагын асуулга. Шалгалтын өмнө үгийн мэдлэгээ судлах, шалгах хамгийн цэвэрхэн газар.",
    link: "https://hsk.academy",
    category: "Vocabulary",
    tagEn: "Vocabulary · HSK 1–6",
    tagMn: "Үгийн сан · HSK 1–6",
  },
  {
    id: "3",
    title: "Chinese Grammar Wiki",
    descEn: "The most complete free Chinese grammar reference online. Every grammar point is explained with examples, organised by HSK level.",
    descMn: "Интернет дэх хамгийн бүрэн үнэгүй хятад хэлний дүрмийн лавлах. Бүх дүрмийн цэгийг HSK түвшнээр зохион байгуулж, жишээгээр тайлбарласан.",
    link: "https://resources.allsetlearning.com/chinese/grammar",
    category: "Grammar",
    tagEn: "Grammar · HSK 1–6",
    tagMn: "Дүрэм · HSK 1–6",
  },
  {
    id: "4",
    title: "MDBG Dictionary",
    descEn: "Fast, clean online Chinese–English dictionary. Great for quick character lookups when reading Chinese text on a computer.",
    descMn: "Хурдан, цэвэрхэн онлайн хятад–англи толь бичиг. Компьютерт хятад текст уншихдаа тэмдэгт хурдан хайхад маш сайн.",
    link: "https://www.mdbg.net/chinese/dictionary",
    category: "Tools",
    tagEn: "Dictionary · Online",
    tagMn: "Толь · Онлайн",
    chinese: "MDBG 汉英词典",
  },
  {
    id: "5",
    title: "HelloChinese",
    descEn: "A gamified learning app that takes you from zero to HSK 4. Covers vocabulary, characters, grammar, and speaking in short daily lessons.",
    descMn: "Тэгнээс HSK 4 хүртэл хөтөлдөг тоглоомжуулсан суралцах апп. Богино өдөр тутмын хичээлд үгийн сан, ханз, дүрэм болон ярианыг хамардаг.",
    link: "https://www.hellochinese.cc",
    category: "Apps",
    tagEn: "App · HSK 1–4",
    tagMn: "Апп · HSK 1–4",
    level: "HSK 1–4",
  },
  {
    id: "6",
    title: "ChinesePod",
    descEn: "Podcast-style audio lessons at every level. Great for improving listening comprehension and picking up natural spoken Chinese.",
    descMn: "Бүх түвшинд подкаст хэлбэрийн аудио хичээлүүд. Сонсох ойлголтыг сайжруулж, байгалийн ярианы хятад хэлийг олж авахад маш сайн.",
    link: "https://chinesepod.com",
    category: "Listening",
    tagEn: "Listening · All levels",
    tagMn: "Сонсох · Бүх түвшин",
    level: "HSK 3–6",
  },
  {
    id: "7",
    title: "Mandarin Corner (YouTube)",
    descEn: "Natural Chinese conversations at various speeds, with subtitles. Ideal for HSK 4+ learners who want real immersion listening practice.",
    descMn: "Харилцан яриа хурд бүрт байгалийн хятад хэлний харилцан яриа, хадмал орчуулгатай. Жинхэнэ умбалт сонсох дадлага хийхийг хүссэн HSK 4+ сурагчдад тохиромжтой.",
    link: "https://www.youtube.com/@MandarinCorner",
    category: "Listening",
    tagEn: "YouTube · HSK 4–6",
    tagMn: "YouTube · HSK 4–6",
    level: "HSK 4–6",
  },
  {
    id: "8",
    title: "Anki",
    descEn: "Spaced repetition flashcard software. Download a free HSK vocabulary deck and review characters daily — the single most efficient way to build vocabulary.",
    descMn: "Давтагдлын зайтай флэш карт програм. Үнэгүй HSK үгийн сангийн багц татаж, өдөр бүр ханзуудыг давт — үгийн сан хуримтлуулах хамгийн үр дүнтэй арга.",
    link: "https://apps.ankiweb.net",
    category: "Tools",
    tagEn: "Flashcards · Vocabulary",
    tagMn: "Флэш карт · Үгийн сан",
  },
  {
    id: "9",
    title: "Douyin (Chinese TikTok)",
    descEn: "The Chinese version of TikTok. Scroll it daily to immerse your brain in real, modern Chinese — slang, culture, and natural speech all included.",
    descMn: "TikTok-ийн хятад хувилбар. Өдөр бүр гүйлгэж тархиа жинхэнэ, орчин үеийн хятад хэлд умбуул — ярианы хэл, соёл болон байгалийн яриа бүгд багтсан.",
    link: "https://www.douyin.com",
    category: "Immersion",
    tagEn: "Immersion · Listening",
    tagMn: "Умбалт · Сонсох",
    chinese: "抖音",
  },
  {
    id: "10",
    title: "LingQ",
    descEn: "Read and listen to real Chinese content at your level. Unknown words are highlighted and saved automatically, making extensive reading much more efficient.",
    descMn: "Өөрийн түвшинд жинхэнэ хятад контент унш, сонс. Мэдэхгүй үгс автоматаар тодройж, хадгалагддаг тул уртас унших хамаагүй үр дүнтэй болдог.",
    link: "https://www.lingq.com/en/learn/zh/",
    category: "Reading",
    tagEn: "Reading · HSK 3–6",
    tagMn: "Унших · HSK 3–6",
    level: "HSK 3–6",
  },
];

const categoriesEn = ["All", "Apps", "Vocabulary", "Grammar", "Listening", "Reading", "Tools", "Immersion"];
const categoriesMn = ["Бүгд", "Апп", "Үгийн сан", "Дүрэм", "Сонсох", "Унших", "Хэрэгсэл", "Умбалт"];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

const Page = () => {
  const { lang } = useSite();
  const isMn = lang === "mn";
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const categories = isMn ? categoriesMn : categoriesEn;
  const activeCategory = categoriesEn[activeCategoryIdx];

  const filteredResources = useMemo(() => {
    if (activeCategory === "All") return resources;
    return resources.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-950 dark:bg-zinc-950 dark:text-zinc-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(9,9,11,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,9,11,0.025)_1px,transparent_1px)] bg-[size:44px_44px] dark:opacity-40"
      />

      <section className="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <a href="/hsk" className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← HSK</a>

        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-100 blur-3xl dark:bg-red-900/20" />
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 dark:text-red-400 sm:text-[11px]">
                {isMn ? "HSK ЭХ СУРВАЛЖ · 学习资源" : "HSK RESOURCES · 学习资源"}
              </p>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                {filteredResources.length} {isMn ? "эх сурвалж" : "resources"}
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 dark:text-zinc-50 sm:text-5xl">
              {isMn ? "HSK-д тус болдог эх сурвалжууд." : "Resources that actually help with HSK."}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 dark:text-zinc-400 sm:mt-5 sm:text-base sm:leading-8">
              {isMn
                ? "Апп, толь бичиг, подкаст, дадлага — бүгд нэг газар. Цөөн зүйлийг гүнзгий ашигла."
                : "Apps, dictionaries, podcasts, and practice — all in one place. Use fewer resources deeply."}
            </p>
          </div>
        </div>

        {/* FILTER */}
        <div className="sticky top-3 z-20 mt-4 overflow-x-auto rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90">
          <div className="flex gap-1">
            {categories.map((category, i) => (
              <button
                key={category}
                onClick={() => setActiveCategoryIdx(i)}
                className={[
                  "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm",
                  activeCategoryIdx === i
                    ? "bg-slate-950 text-white dark:bg-zinc-100 dark:text-zinc-950"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                ].join(" ")}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "group relative flex items-center gap-3 overflow-hidden rounded-2xl border bg-white p-3 shadow-sm transition duration-200 sm:block sm:rounded-[1.75rem] sm:p-5 sm:hover:-translate-y-1 sm:hover:shadow-xl",
                resource.highlight
                  ? "border-red-200 hover:border-red-300 dark:border-red-800 dark:bg-red-900/10 dark:hover:border-red-700"
                  : "border-slate-200 hover:border-red-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-red-700",
              ].join(" ")}
            >
              <div className={["absolute inset-y-0 left-0 w-1 sm:inset-x-0 sm:top-0 sm:h-1.5 sm:w-auto", resource.highlight ? "bg-red-500" : "bg-red-400"].join(" ")} />

              <div className="flex min-w-0 flex-1 flex-col sm:block">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600 dark:bg-zinc-800 dark:text-zinc-300 sm:text-[11px]">
                      {resource.category}
                    </span>
                    {resource.level && (
                      <span className="w-fit rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-700 dark:bg-red-900/30 dark:text-red-400 sm:text-[11px]">
                        {resource.level}
                      </span>
                    )}
                    {resource.highlight && (
                      <span className="w-fit rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300 sm:text-[11px]">
                        {isMn ? "Санал болгож байна" : "Recommended"}
                      </span>
                    )}
                  </div>
                  <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white dark:border-zinc-700 dark:text-zinc-400 sm:flex">
                    <ArrowUpRight />
                  </span>
                </div>

                <h2 className="mt-2 line-clamp-1 text-[15px] font-semibold tracking-[-0.03em] text-slate-950 dark:text-zinc-100 sm:mt-4 sm:line-clamp-none sm:text-xl">
                  {resource.title}
                  {resource.chinese && (
                    <span className="ml-2 text-sm font-normal text-slate-400 dark:text-zinc-500">{resource.chinese}</span>
                  )}
                </h2>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500 sm:text-[11px]">
                  {isMn ? resource.tagMn : resource.tagEn}
                </p>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-zinc-400 sm:mt-2 sm:line-clamp-3 sm:text-sm sm:leading-7">
                  {isMn ? resource.descMn : resource.descEn}
                </p>

                <div className="mt-2 hidden items-center justify-between border-t border-slate-100 pt-4 dark:border-zinc-800 sm:flex">
                  <span className="text-sm font-semibold text-slate-950 dark:text-zinc-100">
                    {isMn ? "Нээх" : "Open resource"}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400 dark:text-zinc-500">
                    {isMn ? "Гадаад" : "External"}
                  </span>
                </div>
              </div>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-400 sm:hidden">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
