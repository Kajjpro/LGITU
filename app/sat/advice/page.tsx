"use client";

import { useSite } from "@/app/context";

const links = {
  bluebook: "https://bluebook.app.collegeboard.org/",
  bluebooky: "https://bluebooky.com",
  questionBank: "https://satsuitequestionbank.collegeboard.org/",
  onePrep: "https://www.oneprep.xyz/",
  desmos: "https://youtu.be/e-O4nwVHQ-Y?si=CWeoJ6LrIQiq2Sto",
  strategyVideo: "https://youtu.be/NBECQxDBQQs?si=HFkn3zRIjxaneDVi",
  collegePandaMath: "https://drive.google.com/file/d/1JyqiykL6cJuSm_vyzU6p59srffC6mrzo/view",
};

const RL = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="font-semibold text-indigo-600 underline decoration-indigo-300 underline-offset-4 transition hover:text-indigo-800 dark:text-indigo-400 dark:decoration-indigo-600 dark:hover:text-indigo-300">
    {children}
  </a>
);

const enItems = [
  { number: "01", title: "Find your weak area first", highlight: false,
    body: <><RL href={links.bluebook}>Bluebook mock exams</RL> are the best way to find where you're actually losing points. There are only a few available, so use them carefully — don't waste them on casual practice.</> },
  { number: "02", title: "Don't throw away easy grammar points", highlight: false,
    body: <>Grammar, transitions, and notes questions are the most controllable part of the test. Getting these nearly perfect is one of the fastest ways to raise your score.</> },
  { number: "03", title: "Do the easier questions first", highlight: false,
    body: <>In Reading and Writing, start with grammar and notes questions (usually around Q15–27), then go back to the passage-heavy ones. Don't burn time on hard reading early.</> },
  { number: "04", title: "When reviewing, ask why the wrong answers are wrong", highlight: false,
    body: <>Don't just confirm why the right answer is right. Go through each wrong choice and find the exact reason it doesn't work. That's how you stop falling for the same traps.</> },
  { number: "05", title: "If it's not 100% in the passage, don't pick it", highlight: false,
    body: <>Every correct answer can be pointed to directly in the passage. If you're choosing based on a feeling or inference, you're probably in a trap. The SAT is very literal.</> },
  { number: "06", title: "Read books — it's the slow fix that actually works", highlight: true,
    body: <>If your English comprehension is weak, no amount of strategy will fully fix Reading. Reading real books — even just 20 minutes a day — trains your brain to handle the kinds of sentences SAT uses. It's not quick, but it's real.</> },
  { number: "07", title: "Build math from the ground up", highlight: false,
    body: <>SAT Math isn't that advanced — it's mostly testing whether you know the basics solidly. The <RL href={links.collegePandaMath}>College Panda Math book</RL> is good for this. Get your foundation right before worrying about speed.</> },
  { number: "08", title: "Desmos is powerful — but learn it at the right time", highlight: false,
    body: <>Don't rely on Desmos before you understand the underlying math. Once you do, it can save a lot of time on hard algebra and graph questions. This <RL href={links.desmos}>Desmos tutorial</RL> shows the best tricks.</> },
  { number: "09", title: "Stick to official practice materials", highlight: false,
    body: <>The <RL href={links.questionBank}>College Board Question Bank</RL> and <RL href={links.onePrep}>OnePrep</RL> are the most reliable. Third-party materials often have different question styles that don't reflect the real test.</> },
  { number: "10", title: "Beware of answers that are only partly right", highlight: false,
    body: <>The most common trap is an answer that has one true detail and one wrong detail. Watch for extreme words like "always," "never," "must" — those are usually traps on a test this precise.</> },
];

const mnItems = [
  { number: "01", title: "Эхлээд сул талаа ол", highlight: false,
    body: <><RL href={links.bluebook}>Bluebook дадлагын шалгалт</RL> бол оноогоо хаана алдаж байгааг олж мэдэх хамгийн сайн арга. Тоо нь хязгаартай тул болгоомжтой ашигла — санамсаргүй дадлагад үрж болохгүй.</> },
  { number: "02", title: "Хялбар дүрмийн оноог алдаж болохгүй", highlight: false,
    body: <>Дүрэм, шилжилт, тэмдэглэлийн асуулт бол шалгалтын хамгийн тохирохуйц хэсэг. Эдгээрийг бараг 100% зөв хийх нь оноог хурдан өсгөх нэг арга.</> },
  { number: "03", title: "Хялбар асуултуудаас эхэл", highlight: false,
    body: <>Унших ба Бичихийн хувьд дүрэм, тэмдэглэлийн асуултуудаас (ихэвчлэн 15–27 дугаарт) эхэл, дараа нь уншлагатай асуулт руу буц. Хатуу асуулт дээр хэтэрхий эрт цаг үрэх хэрэггүй.</> },
  { number: "04", title: "Засахдаа буруу хариулт яагаад буруу болохыг асуу", highlight: false,
    body: <>Зөв хариулт яагаад зөв болохыг батлаад зогсохгүй, буруу хариулт бүрийн яагаад тийм болохыг олж мэд. Ингэх нь ижил шивэгчид дахин унахаас сэргийлдэг.</> },
  { number: "05", title: "Өгүүлбэрт 100% дэмжигдэхгүй бол сонгож болохгүй", highlight: false,
    body: <>Зөв хариулт бүр өгүүлбэрт шууд заагддаг. Мэдрэмж эсвэл таамаглалаар сонгож байвал шивэгчид унах магадлалтай. SAT бол маш шуурхай шалгалт.</> },
  { number: "06", title: "Ном унш — удаан боловч жинхэнэ тус болдог арга", highlight: true,
    body: <>Англи хэлний ойлголт сул байвал жодон стратеги уншлагыг бүрэн засаж чадахгүй. Өдөр бүр 20 минут ч гэсэн жинхэнэ ном унших нь SAT-ийн ашигладаг өгүүлбэрийн бүтцийг ойлгоход тархийг сургадаг. Хурдан биш, гэхдээ бодит үр дүнтэй.</> },
  { number: "07", title: "Математикийн суурийг эхлэн бүрдүүл", highlight: false,
    body: <>SAT-ийн Математик тийм ч ахисан биш — суурийг чинь хэр гүнзгий мэдэхийг шалгадаг. <RL href={links.collegePandaMath}>College Panda Математикийн ном</RL> үүнд сайн. Хурдны тухай санахаас өмнө суурийг зөв тавь.</> },
  { number: "08", title: "Desmos хүчтэй хэрэгсэл — гэхдээ зөв үед сур", highlight: false,
    body: <>Математикийн логикийг ойлгохоосоо өмнө Desmos-т хамаарч болохгүй. Ойлгосны дараа хатуу алгебр болон графикийн асуулт дээр маш их цаг хэмнэнэ. Энэ <RL href={links.desmos}>Desmos заавар</RL>-д хамгийн сайн аргуудыг заасан байгаа.</> },
  { number: "09", title: "Албан ёсны дадлагын материал ашигла", highlight: false,
    body: <><RL href={links.questionBank}>College Board-ийн Асуулт банк</RL> болон <RL href={links.onePrep}>OnePrep</RL> хамгийн найдвартай. Гуравдагч талын материалд жинхэнэ шалгалттай таарахгүй асуултын хэлбэр байдаг.</> },
  { number: "10", title: "Хэсэгчлэн зөв хариултаас болгоомж", highlight: false,
    body: <>Хамгийн нийтлэг шивэгч бол нэг үнэн, нэг буруу хэсэгтэй хариулт. "Үргэлж", "хэзээ ч", "заавал" гэх мэт хэт туйлшруулсан үгтэй хариулт бараг үргэлж шивэгч байдаг.</> },
];

const T = {
  en: {
    badge: "SAT Advice", subbadge: "Personal experience",
    title: "How I went from 1000 to 1350+ on the SAT",
    subtitle: "Things I learned the hard way — and what finally made a difference.",
    storyLabel: "01 · The journey", storyTitle: "Personal Story",
    adviceLabel: "02 · What worked", adviceTitle: "The Advice",
    scoreLabel: "Score progression", finalLabel: "Breakthrough",
    quote1: "I was studying hard, but I was studying the wrong things.",
    quote2: "Treat it like a game. Every correct answer scores a point. Collect as many as you can.",
    storyParas: [
      <>My first <RL href={links.bluebook}>Bluebook</RL> practice test came out to exactly <strong className="font-semibold text-slate-950 dark:text-zinc-100">1000</strong>.</>,
      <>I thought the fix was simple: study harder. So I watched videos, solved random questions, downloaded more resources, and kept switching methods.</>,
      <>Months later, I sat for another practice test. Still <strong className="font-semibold text-slate-950 dark:text-zinc-100">1000</strong>.</>,
      <>My first real SAT came out to <strong className="font-semibold text-slate-950 dark:text-zinc-100">1360</strong> — <strong className="font-semibold text-slate-950 dark:text-zinc-100">580</strong> Reading/Writing, <strong className="font-semibold text-slate-950 dark:text-zinc-100">780</strong> Math. I understood that my English comprehension wasn't where it needed to be. Bad sleep and nerves on test day didn't help either.</>,
      <>The problem wasn't the hours. I was practicing the things I already knew. The things I kept avoiding were exactly what was capping my score.</>,
    ],
    usefulLinksLabel: "Useful links",
    usefulLinks: [
      { label: "Bluebook mock tests", href: links.bluebook },
      { label: "★ Bluebooky — real SAT past papers", href: links.bluebooky },
      { label: "College Board Question Bank", href: links.questionBank },
      { label: "OnePrep practice", href: links.onePrep },
      { label: "Desmos SAT Math", href: links.desmos },
      { label: "College Panda Math", href: links.collegePandaMath },
      { label: "SAT strategy video", href: links.strategyVideo },
    ],
    footer: "It takes longer than it feels like it should. Keep going.",
  },
  mn: {
    badge: "SAT Зөвлөгөө", subbadge: "Хувийн туршлага",
    title: "Би 1000-аас 1350+ болж хэрхэн хүрсэн бэ",
    subtitle: "Хэцүүгээр суралцсан зүйлс — болон эцэстээ ялгаа гаргасан арга.",
    storyLabel: "01 · Замнал", storyTitle: "Хувийн Түүх",
    adviceLabel: "02 · Тус болсон зүйлс", adviceTitle: "Зөвлөгөө",
    scoreLabel: "Оноо дэвшил", finalLabel: "Эргэлтийн цэг",
    quote1: "Хатуу суралцаж байсан, гэхдээ буруу зүйлс дээр суралцаж байсан.",
    quote2: "Тоглоом шиг хий. Зөв хариулт бүр оноо өгдөг. Аль болох их оноо цуглуул.",
    storyParas: [
      <>Миний анхны <RL href={links.bluebook}>Bluebook</RL> дадлагын шалгалт яг <strong className="font-semibold text-slate-950 dark:text-zinc-100">1000</strong> гарсан.</>,
      <>Засах арга нь энгийн гэж бодлоо: илүү хатуу сур. Тиймд видео үзэж, санамсаргүй асуулт бодож, эх сурвалж татаж, аргаа байнга өөрчилж байлаа.</>,
      <>Хэдэн сарын дараа дахин дадлагын шалгалт өгсөн. Мөн л <strong className="font-semibold text-slate-950 dark:text-zinc-100">1000</strong>.</>,
      <>Жинхэнэ SAT шалгалтанд <strong className="font-semibold text-slate-950 dark:text-zinc-100">1360</strong> гарсан — Унших/Бичих <strong className="font-semibold text-slate-950 dark:text-zinc-100">580</strong>, Математик <strong className="font-semibold text-slate-950 dark:text-zinc-100">780</strong>. Англи хэлний ойлголт хангалтгүй байсан гэдгийг ойллоо. Шалгалтын өдрийн муу нойр, сандрах нь ч нөлөөлсөн.</>,
      <>Цаг хугацаа нь асуудал биш байсан. Аль хэдийн мэдэж байсан зүйлсдээ дадлага хийж байсан. Зайлсхийж байсан зүйлс маань оноог тогтоосон зүйл байлаа.</>,
    ],
    usefulLinksLabel: "Хэрэгтэй линкүүд",
    usefulLinks: [
      { label: "Bluebook дадлагын шалгалт", href: links.bluebook },
      { label: "★ Bluebooky — жинхэнэ SAT өнгөрсөн шалгалт", href: links.bluebooky },
      { label: "College Board Асуулт банк", href: links.questionBank },
      { label: "OnePrep дадлага", href: links.onePrep },
      { label: "Desmos SAT Математик", href: links.desmos },
      { label: "College Panda Математик", href: links.collegePandaMath },
      { label: "SAT стратегийн видео", href: links.strategyVideo },
    ],
    footer: "Мэдэгдэхээс удаан хугацаа шаарддаг. Үргэлжлүүл.",
  },
};

export default function SATAdvicePage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;
  const items = lang === "mn" ? mnItems : enItems;

  return (
    <main className="min-h-screen bg-white text-slate-950 antialiased dark:bg-zinc-950 dark:text-zinc-100">

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10">
        <a href="/sat" className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← SAT</a>

        {/* HEADER */}
        <header className="mb-8 sm:mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">{t.badge}</span>
            <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">{t.subbadge}</span>
          </div>
          <h1 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.04em] text-slate-950 dark:text-zinc-50 sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-zinc-400 sm:text-[15px] sm:leading-7">{t.subtitle}</p>
        </header>

        {/* STORY */}
        <section className="mb-10 sm:mb-14">
          <div className="mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">{t.storyLabel}</div>
            <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">{t.storyTitle}</h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-[1.5rem] sm:p-7">
            <div className="space-y-4 text-[15px] leading-7 text-slate-700 dark:text-zinc-300 sm:text-[16px] sm:leading-8">
              {t.storyParas.map((p, i) => <p key={i}>{p}</p>)}

              {/* Score card */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">{t.scoreLabel}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {[["1000", lang === "mn" ? "Анхны" : "First"], ["1000", lang === "mn" ? "Дараа нь" : "Later"], ["1350+", t.finalLabel]].map(([val, lbl], i) => (
                    <div key={i}>
                      <p className={`text-xl font-bold tracking-[-0.03em] sm:text-[28px] ${i === 2 ? "text-indigo-700 dark:text-indigo-400" : "text-slate-950 dark:text-zinc-100"}`}>{val}</p>
                      <p className={`mt-1 text-[10px] font-semibold uppercase tracking-wider ${i === 2 ? "text-indigo-600 dark:text-indigo-400" : "text-slate-500 dark:text-zinc-500"}`}>{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="rounded-xl border-l-4 border-indigo-500 bg-indigo-50/60 px-4 py-3 dark:bg-indigo-900/20">
                <p className="text-base font-semibold leading-7 tracking-[-0.02em] text-slate-800 dark:text-zinc-100 sm:text-lg">{t.quote1}</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ADVICE */}
        <section className="mb-10 sm:mb-14">
          <div className="mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">{t.adviceLabel}</div>
            <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">{t.adviceTitle}</h2>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3">
            {items.map((item) => (
              <div key={item.number} className={["rounded-2xl border p-4 sm:p-5", item.highlight ? "border-indigo-200 bg-indigo-50/80 dark:border-indigo-800 dark:bg-indigo-900/20" : "border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"].join(" ")}>
                <div className="flex gap-3">
                  <div className={["flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold", item.highlight ? "bg-indigo-600 text-white dark:bg-indigo-500" : "bg-zinc-100 text-indigo-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"].join(" ")}>
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-[-0.03em] text-slate-950 dark:text-zinc-100 sm:text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400 sm:text-[15px] sm:leading-7">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="my-6 rounded-xl border-l-4 border-indigo-500 bg-white p-4 shadow-sm dark:bg-zinc-900 sm:p-5">
            <p className="text-base font-semibold leading-7 tracking-[-0.02em] text-slate-800 dark:text-zinc-100 sm:text-lg">{t.quote2}</p>
          </blockquote>

          {/* Useful links */}
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 dark:border-indigo-900 dark:bg-indigo-900/20 sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400 sm:text-[11px]">{t.usefulLinksLabel}</p>
            <div className="mt-3 grid gap-2 text-sm leading-6 sm:grid-cols-2">
              {t.usefulLinks.map((l) => <RL key={l.href} href={l.href}>{l.label}</RL>)}
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">{t.footer}</p>
        </footer>
      </div>
    </main>
  );
}
