"use client";

import { useSite } from "@/app/context";

type Resource = {
  title: string;
  url: string;
  descEn: string;
  descMn: string;
  tag: string;
  tagColor: string;
  bestForEn: string;
  bestForMn: string;
  image?: string;
  featured?: boolean;
  featuredNoteEn?: string;
  featuredNoteMn?: string;
};

type ResourceGroup = {
  titleEn: string;
  titleMn: string;
  id: string;
  labelEn: string;
  labelMn: string;
  resources: Resource[];
};

const resourceGroups: ResourceGroup[] = [
  {
    titleEn: "Practice Tests",   titleMn: "Дадлагын шалгалтууд",
    id: "practice-tests",
    labelEn: "Most accurate practice", labelMn: "Хамгийн нарийвчлалтай дадлага",
    resources: [
      {
        title: "Bluebook Mock Exam",
        url: "https://bluebook.app.collegeboard.org/",
        descEn: "The only fully official Digital SAT mock — exact adaptive format, real scoring, real test conditions. Use these before anything else.",
        descMn: "Цорын ганц бүрэн албан ёсны Digital SAT дадлагын шалгалт — яг адаптив форматтай, жинхэнэ оноотой, жинхэнэ шалгалтын нөхцөлтэй.",
        tag: "Official Mock", tagColor: "amber",
        bestForEn: "Most accurate full-length practice", bestForMn: "Хамгийн нарийвчлалтай бүтэн шалгалт",
        featured: true,
        featuredNoteEn: "★ Most accurate — start here",
        featuredNoteMn: "★ Хамгийн нарийвчлалтай — эндээс эхэл",
      },
      {
        title: "Bluebooky",
        url: "https://bluebooky.com",
        descEn: "Real SAT past papers in digital adaptive format. The closest thing to the actual test outside of Bluebook. Highly recommended.",
        descMn: "Жинхэнэ SAT-ийн өнгөрсөн шалгалтын асуулт — Bluebook-оос гадна бодит шалгалтын туршлагатай хамгийн дөхдөг. Маш чухал.",
        tag: "Past Papers", tagColor: "rose",
        bestForEn: "Real past paper practice", bestForMn: "Жинхэнэ өнгөрсөн шалгалт дадлага",
        featured: true,
        featuredNoteEn: "★ Real SAT past papers — highly recommended",
        featuredNoteMn: "★ Жинхэнэ SAT өнгөрсөн асуулт — маш чухал",
      },
      {
        title: "College Board SAT Question Bank",
        url: "https://satsuiteeducatorquestionbank.collegeboard.org",
        descEn: "Official SAT practice questions — the most accurate source available.",
        descMn: "Албан ёсны SAT дадлагын асуулт — хамгийн нарийвчлалтай эх сурвалж.",
        tag: "Official", tagColor: "indigo",
        bestForEn: "Real SAT-style questions", bestForMn: "Жинхэнэ SAT загвар асуулт",
      },
      {
        title: "OnePrep",
        url: "https://www.oneprep.xyz/",
        descEn: "Free SAT practice with explanations and timed sections.",
        descMn: "Тайлбар болон цагийн хязгаартай үнэгүй SAT дадлага.",
        tag: "Practice", tagColor: "blue",
        bestForEn: "Daily timed practice", bestForMn: "Өдөр тутмын цагт тулгуурласан дадлага",
      },
    ],
  },
  {
    titleEn: "Reading & Writing", titleMn: "Унших & Бичих",
    id: "reading-writing",
    labelEn: "Grammar & passages", labelMn: "Дүрэм & өгүүлбэр",
    resources: [
      {
        title: "Ultimate Guide to SAT Grammar",
        url: "https://drive.google.com/file/d/1rl8A4KmK10iFDYwaTzsfbvVayfdn2G8I/view",
        descEn: "Covers grammar, punctuation, transitions, and writing rules.",
        descMn: "Дүрэм, цэг таслал, шилжилт болон бичих дүрмийг хамарсан.",
        tag: "Grammar", tagColor: "violet",
        bestForEn: "Fixing writing mistakes", bestForMn: "Бичих алдааг засах",
      },
      {
        title: "Erica Reading",
        url: "https://drive.google.com/file/d/1kea_OuzH7eOpaplNKUhQcb2t2mn8Ri8A/view",
        descEn: "Reading strategy, evidence questions, and main idea skills.",
        descMn: "Унших стратеги, нотолгооны асуулт болон үндсэн санааны чадвар.",
        tag: "Reading", tagColor: "sky",
        bestForEn: "Improving passage accuracy", bestForMn: "Өгүүлбэр ойлголтыг сайжруулах",
      },
      {
        title: "SexyJ SAT Channel",
        url: "https://youtube.com/@sexyj?si=Y60BOx9w2dK5RNSe",
        descEn: "SAT tricks, patterns, and shortcut explanations on YouTube.",
        descMn: "YouTube дээр SAT-ийн аргачлал, загвар болон товчлол тайлбарууд.",
        tag: "Video", tagColor: "rose",
        bestForEn: "Learning question patterns", bestForMn: "Асуултын загвар судлах",
      },
    ],
  },
  {
    titleEn: "Math", titleMn: "Математик",
    id: "math",
    labelEn: "Formulas & problem solving", labelMn: "Томьёо & бодлого",
    resources: [
      {
        title: "College Panda Math Book",
        url: "https://drive.google.com/file/d/1JyqiykL6cJuSm_vyzU6p59srffC6mrzo/view",
        descEn: "Key SAT Math concepts, formulas, and practice methods.",
        descMn: "SAT Математикийн гол ойлголт, томьёо болон дадлагын арга.",
        tag: "Math", tagColor: "emerald",
        bestForEn: "Reviewing weak math topics", bestForMn: "Сул математикийн сэдвүүд давтах",
        image: "https://imgv2-2-f.scribdassets.com/img/document/507493389/original/eaf6baf109/1?v=1",
      },
      {
        title: "Desmos Tutorial",
        url: "https://youtu.be/e-O4nwVHQ-Y?si=CWeoJ6LrIQiq2Sto",
        descEn: "Learn faster Desmos methods for Digital SAT calculator questions.",
        descMn: "Digital SAT-ийн тооцооллын асуулт дахь хурдан Desmos аргууд.",
        tag: "Tool", tagColor: "amber",
        bestForEn: "Saving time on math", bestForMn: "Математикийн цаг хэмнэх",
        image: "https://i.ytimg.com/vi/o4qporxAPmM/maxresdefault.jpg",
      },
    ],
  },
];

const tagStyles: Record<string, string> = {
  indigo:  "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  blue:    "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  violet:  "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  sky:     "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  rose:    "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  amber:   "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
};

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
    </svg>
  );
}

const totalResources = resourceGroups.reduce((s, g) => s + g.resources.length, 0);

export default function SATResourcesPage() {
  const { lang } = useSite();
  const isMn = lang === "mn";

  const header = isMn
    ? { badge: "SAT Эх сурвалж", total: `${totalResources} нийт`, title: "Үнэхээр тус болдог эх сурвалжаас эхэл.", sub: "Богино, зохион байгуулагдсан жагсаалт. Цөөн эх сурвалжийг гүнзгий ашигла.", footer: "Нэг эх сурвалжийг сайн ашигласны дараа дараагийнх руу оч." }
    : { badge: "SAT Resources", total: `${totalResources} total`, title: "Start with resources that actually help.", sub: "A short, organized list. Use fewer resources deeply — don't collect more.", footer: "Use one resource well before adding another." };

  return (
    <main className="min-h-screen bg-[#F6F7FB] text-slate-950 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:opacity-30"
      />

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10">
        <a href="/sat" className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← SAT</a>
        {/* HEADER */}
        <header className="mb-8 sm:mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              {header.badge}
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              {header.total}
            </span>
          </div>
          <h1 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.04em] text-slate-950 dark:text-zinc-50 sm:text-4xl">
            {header.title}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-zinc-400 sm:text-[15px] sm:leading-7">
            {header.sub}
          </p>
        </header>

        {/* STICKY NAV */}
        <nav className="sticky top-3 z-30 mb-8 sm:mb-10">
          <div className="flex gap-1 overflow-x-auto rounded-full border border-zinc-200 bg-white/90 p-1.5 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90">
            {resourceGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 sm:text-sm"
              >
                {isMn ? group.titleMn : group.titleEn}
                <span className="text-zinc-400 dark:text-zinc-600">{group.resources.length}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* SECTIONS */}
        <div className="space-y-12 sm:space-y-16">
          {resourceGroups.map((group, groupIdx) => (
            <section key={group.id} id={group.id} className="scroll-mt-24">
              <div className="mb-4 sm:mb-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">
                  {String(groupIdx + 1).padStart(2, "0")} · {isMn ? group.labelMn : group.labelEn}
                </div>
                <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">
                  {isMn ? group.titleMn : group.titleEn}
                </h2>
              </div>

              <div className="flex flex-col gap-2.5 sm:gap-3">
                {group.resources.map((resource, idx) => {
                  const isFeatured = resource.featured;
                  const featuredNote = isMn ? resource.featuredNoteMn : resource.featuredNoteEn;

                  return (
                    <a
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={[
                        "group flex items-center gap-3 rounded-2xl border p-3 shadow-sm transition duration-200 sm:gap-4 sm:rounded-[1.25rem] sm:p-4",
                        isFeatured
                          ? resource.tagColor === "amber"
                            ? "border-amber-200 bg-amber-50/60 hover:border-amber-300 hover:shadow-md dark:border-amber-800/60 dark:bg-amber-900/10 dark:hover:border-amber-700"
                            : "border-rose-200 bg-rose-50/60 hover:border-rose-300 hover:shadow-md dark:border-rose-800/60 dark:bg-rose-900/10 dark:hover:border-rose-700"
                          : "border-zinc-200 bg-white hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800",
                      ].join(" ")}
                    >
                      {resource.image ? (
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200 dark:ring-zinc-800 sm:h-16 sm:w-16">
                          <img src={resource.image} alt={resource.title} loading="lazy" className="h-full w-full object-cover" />
                        </div>
                      ) : (
                        <div className={[
                          "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold tabular-nums ring-1 sm:h-16 sm:w-16",
                          isFeatured
                            ? resource.tagColor === "amber"
                              ? "bg-amber-100 text-amber-700 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-800"
                              : "bg-rose-100 text-rose-700 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:ring-rose-800"
                            : "bg-zinc-50 text-zinc-400 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700",
                        ].join(" ")}>
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className={[
                            "text-[14px] font-bold tracking-[-0.015em] transition sm:text-[16px]",
                            isFeatured
                              ? resource.tagColor === "amber"
                                ? "text-amber-900 group-hover:text-amber-700 dark:text-amber-200 dark:group-hover:text-amber-300"
                                : "text-rose-900 group-hover:text-rose-700 dark:text-rose-200 dark:group-hover:text-rose-300"
                              : "text-slate-950 group-hover:text-indigo-700 dark:text-zinc-100 dark:group-hover:text-indigo-400",
                          ].join(" ")}>
                            {resource.title}
                          </h3>
                          <span className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold sm:inline-flex ${tagStyles[resource.tagColor] ?? tagStyles.indigo}`}>
                            {resource.tag}
                          </span>
                        </div>

                        <p className="mt-0.5 line-clamp-2 text-[12px] leading-[1.5] text-zinc-500 dark:text-zinc-400 sm:text-sm">
                          {isMn ? resource.descMn : resource.descEn}
                        </p>

                        <div className="mt-1.5 flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 sm:text-xs">
                            {isMn ? "Хамгийн тохиромжтой:" : "Best for:"}{" "}
                            <span className="font-semibold text-zinc-600 dark:text-zinc-300">
                              {isMn ? resource.bestForMn : resource.bestForEn}
                            </span>
                          </span>
                          {isFeatured && featuredNote && (
                            <span className={[
                              "rounded-full px-2 py-0.5 text-[10px] font-bold",
                              resource.tagColor === "amber"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                                : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
                            ].join(" ")}>
                              {featuredNote}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className={[
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 transition sm:h-9 sm:w-9",
                        isFeatured
                          ? resource.tagColor === "amber"
                            ? "bg-amber-100 text-amber-600 ring-amber-200 group-hover:bg-amber-600 group-hover:text-white dark:bg-amber-900/30 dark:ring-amber-800 dark:group-hover:bg-amber-600"
                            : "bg-rose-100 text-rose-600 ring-rose-200 group-hover:bg-rose-600 group-hover:text-white dark:bg-rose-900/30 dark:ring-rose-800 dark:group-hover:bg-rose-600"
                          : "bg-zinc-100 text-zinc-500 ring-zinc-200 group-hover:bg-indigo-600 group-hover:text-white dark:bg-zinc-800 dark:ring-zinc-700 dark:group-hover:bg-indigo-600",
                      ].join(" ")}>
                        <ArrowUpRight />
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-14 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:mt-16">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">{header.footer}</p>
          <a href="/sat/advice" className="mt-4 flex items-center justify-between rounded-2xl border border-indigo-100 bg-indigo-50/70 px-5 py-4 transition hover:bg-indigo-50 dark:border-indigo-900 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/30">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-400">{isMn ? "Дараагийн алхам" : "Next step"}</p>
              <p className="mt-1 text-sm font-bold text-slate-950 dark:text-zinc-100">{isMn ? "★ Зөвлөгөө уншина уу — хамгийн чухал хэсэг" : "★ Read Advice — the most important section"}</p>
            </div>
            <span className="text-indigo-500 dark:text-indigo-400">→</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
