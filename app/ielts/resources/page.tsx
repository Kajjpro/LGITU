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
  highlight?: boolean;
};

const resources: Resource[] = [
  {
    id: "1",
    title: "IELTS Advantage",
    descEn: "Band 7+ writing templates, task-specific strategies, and model answers for every section. The single best site for IELTS writing preparation — the strategies here are exactly what pushed scores over Band 7.",
    descMn: "Band 7+ бичих загвар, даалгавар тус бүрийн стратеги болон бүх хэсгийн загвар хариултууд. IELTS бичих бэлтгэлд хамгийн шилдэг сайт — энд байгаа стратегиуд оноог Band 7-аас дээш гаргасан.",
    link: "https://www.ieltsadvantage.com",
    category: "Website",
    tagEn: "Writing · All skills",
    tagMn: "Бичих · Бүх чадвар",
    highlight: true,
  },
  {
    id: "7",
    title: "Cambridge IELTS Practice Tests",
    descEn: "Books 4–20 of official Cambridge IELTS tests — the most authentic mock exam material available. Log in with WeChat to access. Prioritise these over any other practice resource.",
    descMn: "Кэмбрижийн албан ёсны IELTS шалгалтын 4–20-р ном — боломжтой хамгийн жинхэнэ загвар шалгалтын материал. Нэвтрэхийн тулд WeChat-ээр нэвтрэнэ үү. Бусад дадлагын эх сурвалжаас илүүд үзнэ үү.",
    link: "https://cap.baicizhan.com/ielts",
    category: "Practice",
    tagEn: "Practice Tests · Books 4–20",
    tagMn: "Загвар шалгалт · 4–20-р ном",
    highlight: true,
  },
  {
    id: "2",
    title: "IELTS Liz",
    descEn: "Free lessons for all four skills with clear band-level examples and tips. One of the most trusted free resources for IELTS preparation.",
    descMn: "Дөрвөн чадвар бүрт тод дүн-түвшний жишээ болон зөвлөмжтэй үнэгүй хичээлүүд. IELTS бэлтгэлд хамгийн итгэлтэй үнэгүй эх сурвалжуудын нэг.",
    link: "https://ieltsliz.com",
    category: "Website",
    tagEn: "All skills · Free",
    tagMn: "Бүх чадвар · Үнэгүй",
  },
  {
    id: "3",
    title: "IELTS Simon",
    descEn: "Short daily lessons and Band 9 model answers for Writing and Speaking. Excellent vocabulary ideas and sentence structures.",
    descMn: "Бичих болон Ярих хэсэгт богино өдөр тутмын хичээл болон Band 9 загвар хариултууд. Гайхалтай үгийн санаа болон өгүүлбэрийн бүтэцтэй.",
    link: "https://ielts-simon.com",
    category: "Website",
    tagEn: "Writing · Speaking",
    tagMn: "Бичих · Ярих",
  },
  {
    id: "4",
    title: "E2 IELTS (YouTube)",
    descEn: "Clear video lessons for every IELTS section — writing, speaking, reading, and listening — with exam strategies and practice tasks.",
    descMn: "IELTS-ийн бүх хэсэгт — бичих, ярих, унших, сонсох — тод видео хичээлүүд, шалгалтын стратеги болон дадлагын даалгавруудтай.",
    link: "https://www.youtube.com/@E2IELTS",
    category: "YouTube",
    tagEn: "All skills · Video",
    tagMn: "Бүх чадвар · Видео",
  },
  {
    id: "5",
    title: "BBC Learning English",
    descEn: "Natural English listening and vocabulary exercises. Ideal for improving your listening ear through authentic British English content.",
    descMn: "Байгалийн англи сонсох болон үгийн санын дасгалууд. Жинхэнэ британи англи контентоор дамжуулан сонсох чадвараа сайжруулахад тохиромжтой.",
    link: "https://www.bbc.co.uk/learningenglish",
    category: "Listening",
    tagEn: "Listening · Vocabulary",
    tagMn: "Сонсох · Үгийн сан",
  },
  {
    id: "6",
    title: "TED Talks",
    descEn: "High-quality English talks on diverse topics. Excellent for listening practice and picking up academic vocabulary naturally.",
    descMn: "Олон төрлийн сэдвээр өндөр чанарын англи илтгэлүүд. Сонсох дадлага хийж, академик үгийн санг байгалиараа олж авахад гайхалтай.",
    link: "https://www.ted.com",
    category: "Listening",
    tagEn: "Listening · Vocabulary",
    tagMn: "Сонсох · Үгийн сан",
  },
  {
    id: "8",
    title: "British Council — Prepare for IELTS",
    descEn: "Official preparation resources, sample test questions, and band score explanations from the organisation that runs the IELTS exam.",
    descMn: "IELTS шалгалтыг зохион байгуулдаг байгууллагын албан ёсны бэлтгэл эх сурвалж, загвар асуулт болон дүн оноон тайлбарууд.",
    link: "https://www.britishcouncil.org/exam/ielts/preparation",
    category: "Practice",
    tagEn: "Official · Practice",
    tagMn: "Албан ёсны · Дадлага",
  },
  {
    id: "9",
    title: "Magoosh IELTS Blog",
    descEn: "Practical tips, vocabulary lists, and writing guides covering all sections. Good for understanding score requirements at each band level.",
    descMn: "Бүх хэсгийг хамарсан практик зөвлөмж, үгийн санны жагсаалт болон бичих хөтөч. Тус бүрийн дүн түвшний онооны шаардлагыг ойлгоход сайн.",
    link: "https://magoosh.com/ielts/",
    category: "Advice",
    tagEn: "Tips · Writing · Vocabulary",
    tagMn: "Зөвлөмж · Бичих · Үгийн сан",
  },
  {
    id: "10",
    title: "IELTS.org — Official Site",
    descEn: "The official IELTS website. Check band descriptors, test formats, and registration information directly from the source.",
    descMn: "IELTS-ийн албан ёсны сайт. Дүн тайлбарлагч, шалгалтын форматыг шалгаж, эх сурвалжаас шууд бүртгэлийн мэдээлэл авна уу.",
    link: "https://www.ielts.org",
    category: "Practice",
    tagEn: "Official · Info",
    tagMn: "Албан ёсны · Мэдээлэл",
  },
];

const categoriesEn = ["All", "Website", "YouTube", "Listening", "Books", "Practice", "Advice"];
const categoriesMn = ["Бүгд", "Сайт", "YouTube", "Сонсох", "Ном", "Дадлага", "Зөвлөгөө"];

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
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(9,9,11,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,9,11,0.03)_1px,transparent_1px)] bg-[size:44px_44px] dark:opacity-40"
      />

      <section className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <a href="/ielts" className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← IELTS</a>

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl dark:bg-sky-900/20" />
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 sm:text-[11px]">
                {isMn ? "IELTS ЭХ СУРВАЛЖ" : "IELTS RESOURCES"}
              </p>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                {filteredResources.length} {isMn ? "эх сурвалж" : "resources"}
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 dark:text-zinc-50 sm:text-5xl">
              {isMn ? "Үнэхээр тус болдог эх сурвалжууд." : "Resources that actually work."}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 dark:text-zinc-400 sm:text-base sm:leading-8">
              {isMn
                ? "Сайт, ном, видео — бүгд нэг газар. Цөөн эх сурвалжийг гүнзгий ашигла."
                : "Websites, books, and videos — all in one place. Use fewer resources deeply, not many resources shallowly."}
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

        {/* RESOURCES */}
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
                  ? "border-sky-200 hover:border-sky-300 dark:border-sky-800 dark:bg-sky-900/10 dark:hover:border-sky-700"
                  : "border-slate-200 hover:border-sky-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-700",
              ].join(" ")}
            >
              <div className={["absolute inset-y-0 left-0 w-1 sm:inset-x-0 sm:top-0 sm:h-1.5 sm:w-auto", resource.highlight ? "bg-sky-500" : "bg-sky-400"].join(" ")} />

              <div className="flex min-w-0 flex-1 flex-col sm:block">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600 dark:bg-zinc-800 dark:text-zinc-300 sm:text-[11px]">
                      {isMn ? resource.tagMn.split(" · ")[0] : resource.tagEn.split(" · ")[0]}
                    </span>
                    {resource.highlight && (
                      <span className="w-fit rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-bold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 sm:text-[11px]">
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
