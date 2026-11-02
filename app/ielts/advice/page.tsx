"use client";

import { useSite } from "@/app/context";

const T = {
  en: {
    badge: "IELTS Advice",
    subbadge: "Personal experience",
    title: "How I got Band 7 on IELTS",
    subtitle: "I once thought Band 7 was impossible. Here is the full story — and the resources that changed everything.",
    label1: "01 · The full story",
    section1: "Personal Story",
    label2: "02 · Skill by skill",
    section2: "What worked for each skill",
    label3: "03 · Resources",
    section3: "What actually helped",
    finalLabel: "Final result",
    finalNote: "Overall — once I thought it was completely out of reach.",
    footer: "Improvement takes time. Keep going.",
    recommended: "Recommended",

    p1: "I once believed IELTS was so difficult that getting Band 7 felt completely out of reach. In 2025, I enrolled in the Absolute IELTS course for two months. It helped somewhat. My first mock exam score was 4. As the course progressed, I reached 5, then 5.5, and even 6. But I still could not break past 6.5. My listening and reading were very weak. I was stuck at Band 6 for around five months.",
    p2: "I used to think it was an extremely difficult test. But then I realised — it is just a language test. The whole purpose is to measure your English ability. So I changed my approach entirely and made English a real part of my daily life.",

    speakingLabel: "Speaking",
    speakingScore: "Band 6",
    pSpeaking: "My speaking was very poor — my pronunciation and fluency were both weak. The first thing I did was speak English every day, even when I could not express myself well. My fluency was stiff at first, but over time it became genuinely natural. How? I talked to myself every single day — about what happened, what I was thinking, anything at all. It may sound strange, but it is extremely effective. If you do not have an English-speaking environment, create one for yourself. I scored Band 6 on the real exam — I went slightly off-topic at one point, which cost me.",

    listeningLabel: "Listening",
    listeningScore: "Band 8",
    pListening: "I improved my listening by watching films and series entirely in English. Watch whatever you love — just watch it in English. I got completely hooked on Stranger Things. It is genuinely one of the best shows I have ever seen, and I highly recommend it. I also listened to many podcasts. The key is to choose topics you actually enjoy so it never feels like studying. I scored Band 8 in Listening on the real exam.",

    readingLabel: "Reading",
    readingScore: "Band 6.5",
    pReading: "Reading was the hardest skill for me. I knew English comprehension was important, but at that time I rarely read anything — and that was a serious mistake. I studied many reading strategies and completed a large number of mock exams. Even so, my score did not improve as much as I had hoped. I ended up with Band 6.5 in Reading.",

    writingLabel: "Writing",
    writingScore: "Band 7",
    pWriting: "Writing was also very challenging. I did not know how to structure a paragraph or generate ideas under pressure. What eventually worked was daily practice — just consistently sitting down and writing every day. Daily practice makes perfect. I achieved Band 7 overall — something I once thought was completely impossible. Believe in yourself. If you do not have the right environment, build it.",

    resourcesNote: "These are the tools and websites I personally used — or wish I had found earlier.",
  },

  mn: {
    badge: "IELTS Зөвлөгөө",
    subbadge: "Хувийн туршлага",
    title: "Би IELTS-т Band 7 хэрхэн авсан бэ",
    subtitle: "Нэгэн цагт Band 7 авах боломжгүй гэж бодож байлаа. Энд миний бүтэн түүх болон бүх зүйлийг өөрчилсөн эх сурвалжууд.",
    label1: "01 · Бүтэн түүх",
    section1: "Хувийн Түүх",
    label2: "02 · Чадвар тус бүрээр",
    section2: "Юу тус болсон бэ",
    label3: "03 · Эх сурвалжууд",
    section3: "Үнэхээр тус болсон зүйлс",
    finalLabel: "Эцсийн үр дүн",
    finalNote: "Нийт — нэгэн цагт огт боломжгүй гэж бодож байлаа.",
    footer: "Сайжрах нь цаг хугацаа шаарддаг. Үргэлжлүүл.",
    recommended: "Санал болгож байна",

    p1: "Нэгэн цагт IELTS маш хэцүү гэж бодож, Band 7 авах нь огт боломжгүй мэт санагдаж байлаа. 2025 онд би 2 сарын турш Absolute IELTS курсд суралцлаа. Бага зэрэг тус болсон. Анхны загвар шалгалтын дүн 4 байсан. Хичээлийн явцад 5, 5.5, тэр ч байтугай 6 болсон. Гэвч 6.5-аас дээш гарч чадаагүй. Миний сонсох болон унших чадвар маш муу байсан. Тавхан орчим сарын турш Band 6-д зогслоо.",
    p2: "Би энэ нь маш хэцүү шалгалт гэж бодож байлаа. Гэтэл ухаарав: энэ зүгээр л хэлний шалгалт. Гол зорилго нь таны англи хэлний чадварыг хэмжих явдал. Тийм учраас би хандлагаа бүрэн өөрчилж, англи хэлийг өдөр тутмын амьдралдаа оруулав.",

    speakingLabel: "Ярих",
    speakingScore: "Band 6",
    pSpeaking: "Миний ярих чадвар маш муу байсан — дуудлага болон урсгал хоёулаа сул байлаа. Хийсэн анхны зүйл маань сайн илэрхийлж чадахгүй байсан ч өдөр бүр англиар ярих байсан. Эхэндээ урсгал минь хатуу байсан ч цаг хугацааны явцад маш уян болов. Яаж? Би өөртэйгөө өдөр бүр ярьдаг байлаа — өнөөдөр юу болсон, юу бодсон гэх мэт. Өөртэйгөө ярих нь хачирхалтай сонсогдож болох ч маш үр дүнтэй. Тохиромжтой орчин байхгүй бол өөрт нь зохиогоорой. Жинхэнэ шалгалтанд Band 6 авсан — нэг их сэдвээсээ хазайчихсан нь оноонд нөлөөлсөн.",

    listeningLabel: "Сонсох",
    listeningScore: "Band 8",
    pListening: "Би сонсох чадварыг бүрэн англи хэлний кино, цуврал үзэж сайжруулсан. Юу дуртайгаа үзэж бай — зүгээр л англиар үз. Stranger Things-д автсан — үзсэн хамгийн шилдэг цуврал байсан бөгөөд та бүхэнд ч санал болгож байна. Мөн маш олон подкаст сонссон. Гол нь сонирхдог сэдвээ сонгоход суралцаж байгаа мэт санагдахгүй. Жинхэнэ шалгалтанд Сонсох хэсэгт Band 8 авсан.",

    readingLabel: "Унших",
    readingScore: "Band 6.5",
    pReading: "Унших надад хамгийн хэцүү байлаа. Англи хэлийг ойлгох чадвар чухал гэдгийг мэдэж байсан ч тэр үед бараг юм уншдаггүй байсан — энэ ноцтой алдаа байлаа. Олон унших стратеги судалж, маш олон загвар шалгалт хийсэн. Гэсэн ч оноо тийм их нэмэгдсэнгүй. Унших хэсэгт Band 6.5 авсан.",

    writingLabel: "Бичих",
    writingScore: "Band 7",
    pWriting: "Бичих мөн маш хэцүү байлаа. Даралтанд параграф хэрхэн бүтэцлэхийг мэдэхгүй, санаа ч төрдөггүй байсан. Эцэстээ тус болсон зүйл бол өдөр бүр бичих дадлага хийх байсан. Өдөр бүрийн дадлага төгс болгодог. Нийт оноогоор Band 7 авсан — нэгэн цагт огт боломжгүй гэж бодож байсан зүйл. Өөртөө итгэ. Тохиромжтой орчин байхгүй бол — өөрт нь зохиогоорой.",

    resourcesNote: "Эдгээр нь би хувийн хэрэглэсэн буюу эрт олсон байсан бол сайн байх байсан хэрэгсэл, сайтууд.",
  },
};

const skills = (t: typeof T.en) => [
  { label: t.speakingLabel, score: t.speakingScore, text: t.pSpeaking, icon: "🗣" },
  { label: t.listeningLabel, score: t.listeningScore, text: t.pListening, icon: "🎧" },
  { label: t.readingLabel, score: t.readingScore, text: t.pReading, icon: "📖" },
  { label: t.writingLabel, score: t.writingScore, text: t.pWriting, icon: "✍️" },
];

type Res = { name: string; descEn: string; descMn: string; tag: string; url: string; highlight?: boolean };

const resources: Res[] = [
  {
    name: "IELTS Advantage",
    descEn: "The YouTube channel and VIP course gave me valuable listening, reading, and — most importantly — writing strategies. The explanations are clear and highly effective for English learners at any level.",
    descMn: "YouTube суваг болон VIP курс нь сонсох, унших болон хамгийн чухал нь бичих стратеги өгсөн. Тайлбар нь тод бөгөөд ямар ч түвшний англи хэл сурагчдад маш үр дүнтэй.",
    tag: "Writing · All skills",
    url: "https://www.ieltsadvantage.com",
    highlight: true,
  },
  {
    name: "IELTS Liz",
    descEn: "Free lessons for all four skills with clear band-level examples and tips. One of the most trusted free resources for IELTS preparation.",
    descMn: "Дөрвөн чадвар бүрт тод дүн-түвшний жишээ болон зөвлөмжтэй үнэгүй хичээлүүд. IELTS бэлтгэлд хамгийн итгэлтэй үнэгүй эх сурвалжуудын нэг.",
    tag: "All skills · Free",
    url: "https://ieltsliz.com",
  },
  {
    name: "IELTS Simon",
    descEn: "Short daily lessons and Band 9 model answers for Writing and Speaking. Excellent vocabulary ideas and sentence structures.",
    descMn: "Бичих болон Ярих хэсэгт богино өдөр тутмын хичээл болон Band 9 загвар хариултууд. Гайхалтай үгийн санаа болон өгүүлбэрийн бүтэцтэй.",
    tag: "Writing · Speaking",
    url: "https://ielts-simon.com",
  },
  {
    name: "BBC Learning English",
    descEn: "Natural English listening and vocabulary — ideal for improving your ear through authentic British English content.",
    descMn: "Байгалийн англи сонсох болон үгийн сан — жинхэнэ британи англи контентоор сонсох чадвараа сайжруулахад тохиромжтой.",
    tag: "Listening · Vocabulary",
    url: "https://www.bbc.co.uk/learningenglish",
  },
  {
    name: "Cambridge IELTS Practice Tests",
    descEn: "Login with wechat to use The official Cambridge series (books 4–20) offers the most authentic mock exam experience. Prioritise these over any other practice material.",
    descMn: "Кэмбрижийн албан ёсны цуврал (4-20-р ном) нь хамгийн жинхэнэ загвар шалгалтын туршлагыг өгдөг. Бусад дадлагын материалаас илүүд үзнэ үү.",
    tag: "Practice Tests · Official",
    url: "https://cap.baicizhan.com/ielts",
  },
  {
    name: "E2 IELTS (YouTube)",
    descEn: "Clear video lessons for every IELTS section with exam strategies and practice tasks. One of the best free channels for IELTS prep.",
    descMn: "IELTS-ийн бүх хэсэгт тод видео хичээлүүд, шалгалтын стратеги болон дадлагын даалгавруудтай. IELTS бэлтгэлд зориулсан хамгийн шилдэг үнэгүй сувгийн нэг.",
    tag: "YouTube · All skills",
    url: "https://www.youtube.com/@E2IELTS",
  },
];

export default function IELTSAdvicePage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;

  return (
    <main className="min-h-screen bg-white text-slate-950 antialiased dark:bg-zinc-950 dark:text-zinc-100">

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10">
        <a href="/ielts" className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← IELTS</a>

        {/* HEADER */}
        <header className="mb-8 sm:mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">{t.badge}</span>
            <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">{t.subbadge}</span>
          </div>
          <h1 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.04em] text-slate-950 dark:text-zinc-50 sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-zinc-400 sm:text-[15px] sm:leading-7">{t.subtitle}</p>
        </header>

        {/* SECTION 1 — FULL STORY */}
        <section className="mb-10 sm:mb-14">
          <div className="mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">{t.label1}</div>
            <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">{t.section1}</h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-[1.5rem] sm:p-7">
            <div className="space-y-4 text-[15px] leading-7 text-slate-700 dark:text-zinc-300 sm:text-[16px] sm:leading-8">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">{t.finalLabel}</p>
                <p className="mt-3 text-3xl font-bold tracking-[-0.03em] text-sky-700 dark:text-sky-400 sm:text-4xl">Band 7</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">{t.finalNote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — SKILL BREAKDOWN */}
        <section className="mb-10 sm:mb-14">
          <div className="mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">{t.label2}</div>
            <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">{t.section2}</h2>
          </div>

          <div className="flex flex-col gap-3">
            {skills(t).map((skill) => (
              <div key={skill.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-5">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-lg dark:bg-sky-900/30">{skill.icon}</span>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-base font-bold tracking-[-0.025em] text-slate-950 dark:text-zinc-100 sm:text-lg">{skill.label}</h3>
                    {skill.score && (
                      <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-bold text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">{skill.score}</span>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-zinc-400 sm:text-[15px] sm:leading-7">{skill.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-6 rounded-xl border-l-4 border-sky-500 bg-sky-50/60 px-4 py-3 dark:bg-sky-900/20">
            <p className="text-base font-semibold leading-7 tracking-[-0.02em] text-slate-800 dark:text-zinc-100 sm:text-lg">
              {lang === "mn"
                ? "Өдөр бүрийн дадлага төгс болгодог. Чадна гэдэгт өөрт итгэ."
                : "Daily practice makes perfect. Believe in yourself — you can do it."}
            </p>
          </blockquote>
        </section>

        {/* SECTION 3 — RESOURCES (IELTS Advantage + others) */}
        <section className="mb-10 sm:mb-14">
          <div className="mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">{t.label3}</div>
            <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">{t.section3}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400">{t.resourcesNote}</p>
          </div>

          <div className="flex flex-col gap-2.5">
            {resources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "group flex items-center gap-3 rounded-2xl border p-4 shadow-sm transition duration-200 hover:shadow-md sm:gap-4 sm:p-5",
                  r.highlight
                    ? "border-sky-200 bg-sky-50/80 hover:border-sky-300 dark:border-sky-800 dark:bg-sky-900/20 dark:hover:border-sky-700"
                    : "border-slate-200 bg-white hover:border-slate-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700",
                ].join(" ")}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[15px] font-bold tracking-[-0.02em] text-slate-950 transition group-hover:text-sky-700 dark:text-zinc-100 dark:group-hover:text-sky-400">
                      {r.name}
                    </h3>
                    {r.highlight && (
                      <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                        {t.recommended}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">{r.tag}</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-slate-600 dark:text-zinc-400 sm:text-sm sm:leading-7">
                    {lang === "mn" ? r.descMn : r.descEn}
                  </p>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 ring-1 ring-zinc-200 transition group-hover:bg-sky-600 group-hover:text-white dark:bg-zinc-800 dark:ring-zinc-700 dark:group-hover:bg-sky-600 sm:h-9 sm:w-9">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">{t.footer}</p>
        </footer>
      </div>
      <div>Remember your potential is way more than band 9. just find your study method then get your ideal score!</div>
    </main>
  );
}
