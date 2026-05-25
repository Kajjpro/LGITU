"use client";

import { useSite } from "@/app/context";

const T = {
  en: {
    badge: "IELTS Advice",
    subbadge: "Personal experience",
    title: "How I got Band 7 on IELTS",
    subtitle: "Once I thought 7 was impossible. Here is the full story.",
    label1: "01 · The full story",
    section1: "Personal Story",
    label2: "02 · Section by section",
    section2: "What worked for each skill",
    finalLabel: "Final result",
    finalNote: "Overall — once I thought it was impossible.",
    footer: "Improvement takes time. Keep going.",

    p1: "Once, i believed ielts was so so hard that once i think i cant get band 7. 2025, i went to Absolute Ielts course for 2 months. It worked a little for me. My first mock result was 4. As time went during the course, i got 5. 5,5. even 6. But still i cant get above 6.5. My listening and Reading are so bad. I stuck at 6 for around 5 months.",
    p2: "I think that it is a very hard test. But i realized that it is just a language test. The main purpose of the test is just checking my english langauge ability. So i switch my study method, make english into my daily life.",

    speakingLabel: "Speaking",
    speakingScore: "Band 6",
    pSpeaking: "My speaking was really bad, the prounanciation, fluency are so bad. The first thing i did was speaking english daily even i cant express it well. I started with a stuck english fluency, but as time go, my speaking becomes really fluency. How? i speak with myself everyday. Talk to myself that what thing has happened today, etc... It maybe sounds wierd to speak with yourself, but this is very efficient. (If you dont have the environment, create this for you.) i got 6 on the real exam. (i was a little off-topic during the speaking)",

    listeningLabel: "Listening",
    listeningScore: "Band 8",
    pListening: "I then try to improve my listening skill, i started to watch film with english. Watch your favourite things in english. I watched Stranger Things then addicted to that because it was the best US series film i have ever watched(also suggest you guys to watch hha). Also, i listened to a lot of podcasts, these helped a lot, just choose your favourite topics, and listened to that. then i got 8 on the real exam.",

    readingLabel: "Reading",
    readingScore: "Band 6.5",
    pReading: "For Reading sections, that was the hardest skill for me, i know that english comprehension is really important but at the time i didnt read a lot and that was a really bad decision. But i learned a lot of strategy. I did a lot of mock exam on reading, but it didnt improved my reading score so high. came up with 6.5 on reading.",

    writingLabel: "Writing",
    writingScore: "",
    pWriting: "For Writing, my writing was the hardest one too, i dont know how to start a paragraph and no any ideas. i started to I'm gonna say everyday's practice makes perfect. And i got band 7 overall, once i believed i cant get 7. Believe in yourself that you can do it. If you dont have the environment you want, just create that environment.",
  },

  mn: {
    badge: "IELTS Зөвлөгөө",
    subbadge: "Хувийн туршлага",
    title: "Би IELTS-т Band 7 хэрхэн авсан бэ",
    subtitle: "Нэгэн цагт 7 авах боломжгүй гэж бодож байлаа. Энд миний бүтэн түүх.",
    label1: "01 · Бүтэн түүх",
    section1: "Хувийн Түүх",
    label2: "02 · Чадвар тус бүрээр",
    section2: "Юу тус болсон бэ",
    finalLabel: "Эцсийн үр дүн",
    finalNote: "Нийт — нэгэн цагт боломжгүй гэж бодож байлаа.",
    footer: "Сайжрах нь цаг хугацаа шаарддаг. Үргэлжлүүл.",

    p1: "Нэгэн цагт IELTS маш хэцүү гэж бодож, Band 7 авч чадахгүй гэж бодож байлаа. 2025 онд би 2 сарын турш Absolute IELTS курсд сурлаа. Энэ надад бага зэрэг тус болсон. Анхны дүн маань 4 байсан. Хичээлийн явцад 5, 5.5, тэр ч байтугай 6 болсон. Гэвч 6.5-аас дээш гарч чадаагүй. Миний сонсох болон унших чадвар маш муу байсан. Тавхан орчим сарын турш 6-д зогслоо.",
    p2: "Би энэ нь маш хэцүү шалгалт гэж бодож байлаа. Гэтэл ухаарав: энэ зүгээр л хэлний шалгалт. Шалгалтын гол зорилго бол миний англи хэлний чадварыг шалгах явдал. Тийм учраас би сурах аргаа өөрчилж, англи хэлийг өдөр тутмын амьдралдаа оруулав.",

    speakingLabel: "Ярих",
    speakingScore: "Band 6",
    pSpeaking: "Миний ярих чадвар маш муу байсан, дуудлага болон урсгал хоёулаа муу байсан. Хийсэн анхны зүйл маань сайн илэрхийлж чадахгүй байсан ч өдөр бүр англиар ярих байсан. Миний ярианы урсгал эхэндээ хатуу байсан ч цаг хугацааны явцад маш уян болов. Яаж? Би өөртэйгөө өдөр бүр ярьдаг байлаа. Өнөөдөр юу болсон, юу бодов гэх мэт... Өөртэйгөө ярих нь хачирхалтай сонсогдож болох ч энэ нь маш үр дүнтэй. (Тохиромжтой орчин байхгүй бол өөрт нь зохиогоорой.) Жинхэнэ шалгалтанд 6 авсан. (Ярих хэсэгт нэг их сэдвээсээ хазайчихсан байлаа.)",

    listeningLabel: "Сонсох",
    listeningScore: "Band 8",
    pListening: "Дараа нь сонсох чадварыг сайжруулахыг оролдов. Англи хэлтэй кино үзэж эхлэв. Өөрт таалагдах зүйлийг англиар үзэж бай. Stranger Things үзэж нэмэрчлэгдсэн — миний үзэж байсан хамгийн шилдэг АНУ-ын цуврал байсан (та бүхэнд ч санал болгож байна). Мөн маш олон подкаст сонссон, энэ их тусалсан. Өөрт таалагдах сэдвийг сонгоод сонс. Жинхэнэ шалгалтанд 8 авсан.",

    readingLabel: "Унших",
    readingScore: "Band 6.5",
    pReading: "Унших хэсэг надад хамгийн хэцүү байсан. Англи хэлийг ойлгох чадвар маш чухал гэдгийг мэдэж байсан ч тэр үед их унших дургүй байсан — энэ маш буруу шийдвэр байлаа. Гэвч олон стратеги суралцаж, унших дадлага маш их хийсэн ч оноо тийм их нэмэгдэлгүй байлаа. Жинхэнэ шалгалтанд 6.5 авсан.",

    writingLabel: "Бичих",
    writingScore: "",
    pWriting: "Бичих хэсэг надад хамгийн хэцүү байлаа. Параграф хэрхэн эхлүүлэхийг мэдэхгүй, ямар ч санаа ордоггүй байсан. Тэгж эхэлсэн... Хэлэхэд, өдөр бүрийн дадлага төгс болгодог. Нийт оноогоор Band 7 авсан — нэгэн цагт авч чадахгүй гэж бодож байсан. Чадна гэдэгт өөрт итгэ. Хүссэн орчин байхгүй бол — өөрт зохиогоорой.",
  },
};

const skills = (t: typeof T.en) => [
  { label: t.speakingLabel, score: t.speakingScore, text: t.pSpeaking, icon: "🗣", color: "sky" },
  { label: t.listeningLabel, score: t.listeningScore, text: t.pListening, icon: "🎧", color: "indigo" },
  { label: t.readingLabel, score: t.readingScore, text: t.pReading, icon: "📖", color: "violet" },
  { label: t.writingLabel, score: t.writingScore, text: t.pWriting, icon: "✍️", color: "teal" },
];

export default function IELTSAdvicePage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;

  return (
    <main className="min-h-screen bg-[#F6F7FB] text-slate-950 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:opacity-30"
      />

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10">
        <a href="/ielts" className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← IELTS</a>
        {/* HEADER */}
        <header className="mb-8 sm:mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
              {t.badge}
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              {t.subbadge}
            </span>
          </div>

          <h1 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.04em] text-slate-950 dark:text-zinc-50 sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-zinc-400 sm:text-[15px] sm:leading-7">
            {t.subtitle}
          </p>
        </header>

        {/* SECTION 1 — FULL STORY */}
        <section className="mb-10 sm:mb-14">
          <div className="mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">
              {t.label1}
            </div>
            <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">
              {t.section1}
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-[1.5rem] sm:p-7">
            <div className="space-y-4 text-[15px] leading-7 text-slate-700 dark:text-zinc-300 sm:text-[16px] sm:leading-8">
              <p>{t.p1}</p>
              <p>{t.p2}</p>

              {/* Score snapshot */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                  {t.finalLabel}
                </p>
                <p className="mt-3 text-3xl font-bold tracking-[-0.03em] text-sky-700 dark:text-sky-400 sm:text-4xl">
                  Band 7
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">{t.finalNote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — SKILL BREAKDOWN */}
        <section className="mb-10 sm:mb-14">
          <div className="mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">
              {t.label2}
            </div>
            <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">
              {t.section2}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {skills(t).map((skill) => (
              <div
                key={skill.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-5"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-lg dark:bg-sky-900/30">
                    {skill.icon}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-base font-bold tracking-[-0.025em] text-slate-950 dark:text-zinc-100 sm:text-lg">
                      {skill.label}
                    </h3>
                    {skill.score && (
                      <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-bold text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                        {skill.score}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-zinc-400 sm:text-[15px] sm:leading-7">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-6 rounded-xl border-l-4 border-sky-500 bg-sky-50/60 px-4 py-3 dark:bg-sky-900/20">
            <p className="text-base font-semibold leading-7 tracking-[-0.02em] text-slate-800 dark:text-zinc-100 sm:text-lg">
              {lang === "mn"
                ? "Өдөр бүрийн дадлага төгс болгодог. Чадна гэдэгт өөрт итгэ."
                : "Everyday's practice makes perfect. Believe in yourself that you can do it."}
            </p>
          </blockquote>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">{t.footer}</p>
        </footer>
      </div>
    </main>
  );
}
