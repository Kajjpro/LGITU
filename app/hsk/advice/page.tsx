"use client";

import { useSite } from "@/app/context";

type Item = { number: string; title: string; body: React.ReactNode; highlight?: boolean };

const enStory: React.ReactNode[] = [
  <>I have been learning chinese for nearly 10 years. I started at 6 years old. I got my hsk 6 passed with <strong className="font-semibold text-slate-950 dark:text-zinc-100">246/300</strong>. But i&apos;m gonna say that is not because i learned it for 10 years, it is because i listen, reading and speaking chinese everyday with non-stop.</>,
  <>When i first start learning chinese, it feels so hard. They have a lot of characters. You have to memorize them all in order to understand the meaning of the passages or texts.</>,
  <>First, i started to learning pin yin (拼音) when i was young, and learning basic chinese characters. It was hard on the beginning, but i can speak and read as time goes.</>,
  <>However, my chinese comprehension still can&apos;t improve and stuck at around hsk3 level. I listened to an expert, he said: &ldquo;if you are learning a language, make it in your daily life&rdquo;.</>,
  <>I decided to scroll chinese TikTok (抖音) or Kwai (快手) in order to make chinese adapt into my brain. it helped a lot. Start reading a fairy tales in chinese. First i cannot understand them all, i try to use translator to highlight the words i dont know and try to understand them all.</>,
  <>Then i make chinese fully integrated into my life. As my reading comprehension increased, i try to read hard complex books in order to train my brain to hard passages. It worked very well.</>,
  <>For speaking, Like the preparation for IELTS speaking, i speak with myself in chinese everyday.</>,
  <>In 2024, i have a chance to study in China for 1 month. I learned Chinese culture deeply, and strengthned my language.</>,
];

const mnStory: React.ReactNode[] = [
  <>Би хятад хэлийг бараг 10 жил сурсан. 6 настайгаасаа эхэлсэн. HSK 6-г <strong className="font-semibold text-slate-950 dark:text-zinc-100">246/300</strong> оноотой тэнцсэн. Гэхдээ энэ нь 10 жил сурсных биш, харин өдөр бүр зогсолтгүй хятадаар сонсож, уншиж, ярьсных юм.</>,
  <>Анх хятад хэл сурж эхлэхэд маш хэцүү санагдсан. Маш олон ханз бий. Өгүүлбэр, текстийн утгыг ойлгохын тулд тэдгээрийг бүгдийг цээжлэх ёстой.</>,
  <>Эхлээд би бага байхдаа пиньин (拼音), үндсэн ханзуудыг сурч эхэлсэн. Эхэндээ хэцүү байсан ч цаг хугацаа өнгөрөх тусам ярьж, унших чадвартай болсон.</>,
  <>Гэвч миний ойлгох чадвар сайжрахгүй HSK3 түвшинд тогтож байлаа. Нэгэн мэргэжилтэн: &ldquo;Хэл сурч байгаа бол түүнийг өдөр тутмын амьдралдаа оруул&rdquo; гэснийг сонссон.</>,
  <>Би хятадыг тархиндаа шингээхийн тулд хятад TikTok (抖音), Kwai (快手) үзэж эхэлсэн. Энэ их тус болсон. Хятадаар үлгэр унших эхэлсэн. Эхэндээ бүгдийг нь ойлгож чадахгүй, мэдэхгүй үгсээ орчуулагчаар тэмдэглэж, ойлгохыг хичээсэн.</>,
  <>Дараа нь би хятад хэлийг амьдралдаа бүрэн нэгтгэсэн. Уншиж ойлгох чадвар нэмэгдэх тусам тархиа хүнд өгүүлбэрт сургахын тулд хүнд, нийлмэл ном уншихыг хичээсэн. Энэ маш сайн үр дүн өгсөн.</>,
  <>Ярианы хувьд, IELTS-ийн ярианы бэлтгэл шиг өдөр бүр өөртэйгөө хятадаар ярьдаг.</>,
  <>2024 онд би Хятадад 1 сар суралцах боломж олдсон. Хятадын соёлыг гүн судалж, хэлээ улам бэхжүүлсэн.</>,
];

const enItems: Item[] = [
  { number: "01", title: "Memorize new words — constantly", highlight: true,
    body: <>Most importantly, Memorize New Words constantly that will solve most problems.</> },
  { number: "02", title: "Make yourself into the language",
    body: <>You should read chinese books, listen and watch chinese videos including Chinese Tiktok, which is extremely addictive. Make yourself into the language and learn it.</> },
  { number: "03", title: "Do tons of mock tests — and review every one",
    body: <>Before the HSK exam, i did tons of mock tests. When i finish a full mock test, i review my answers every single time.</> },
  { number: "04", title: "Take the computer-based HSK",
    body: <>Also, i suggest give a computer-based HSK. Because for the writing, you can use keyboard (pin yin) to type chinese characters.</> },
  { number: "05", title: "Make it a habit",
    body: <>Read, read, read. Watch, watch and watch. Make it a habit.</> },
];

const mnItems: Item[] = [
  { number: "01", title: "Шинэ үгсийг тасралтгүй цээжил", highlight: true,
    body: <>Хамгийн чухал нь — шинэ үгсийг тасралтгүй цээжлэх нь ихэнх асуудлыг шийднэ.</> },
  { number: "02", title: "Өөрийгөө хэлэнд нь ууст",
    body: <>Та хятад ном унш, хятад видео — маш донтуулдаг хятад TikTok зэргийг үзэж сонс. Өөрийгөө хэлэнд нь оруулж сур.</> },
  { number: "03", title: "Олон загвар шалгалт өг — бүрийг нь дүгнэ",
    body: <>HSK шалгалтын өмнө би маш олон загвар шалгалт өгсөн. Бүтэн загвар шалгалт дуусгах бүрдээ хариултаа тал бүрээс нь шалгадаг.</> },
  { number: "04", title: "Компьютерт суурилсан HSK өг",
    body: <>Мөн би компьютерт суурилсан HSK өгөхийг зөвлөе. Учир нь бичих хэсэгт гар (пиньин) ашиглан ханз бичиж болно.</> },
  { number: "05", title: "Үүнийг зуршил болго",
    body: <>Унш, унш, унш. Үз, үз, үз. Үүнийг зуршил болго.</> },
];

const T = {
  en: {
    badge: "HSK Advice", subbadge: "Personal experience",
    title: "How I passed HSK 6 with 246/300",
    subtitle: "Ten years of Chinese — but it was daily immersion, not the years, that actually worked.",
    storyLabel: "01 · The journey", storyTitle: "Personal Story",
    adviceLabel: "02 · What worked", adviceTitle: "Key Takeaways",
    scoreLabel: "HSK 6 result",
    scores: [["84", "Reading"], ["82", "Listening"], ["80", "Writing"], ["246", "Total"]] as [string, string][],
    pull: "IF YOU DON'T HAVE THE ENVIRONMENT, CREATE IT.",
    closing: "If you stuck at hsk 1~4 and want to push to hsk5+ even 6 — it is not impossible. If you make an effort, everything will be available to you!",
    footer: "Read, read, read. Watch, watch and watch. Make it a habit.",
  },
  mn: {
    badge: "HSK Зөвлөгөө", subbadge: "Хувийн туршлага",
    title: "HSK 6-г 246/300 оноотойгоор хэрхэн тэнцсэн бэ",
    subtitle: "10 жилийн хятад хэл — гэхдээ цаг хугацаа биш, өдөр тутмын умбалт л үнэхээр үр дүн өгсөн.",
    storyLabel: "01 · Замнал", storyTitle: "Хувийн түүх",
    adviceLabel: "02 · Тус болсон зүйлс", adviceTitle: "Гол зөвлөгөө",
    scoreLabel: "HSK 6 дүн",
    scores: [["84", "Унших"], ["82", "Сонсох"], ["80", "Бичих"], ["246", "Нийт"]] as [string, string][],
    pull: "ХЭРЭВ ОРЧИН БАЙХГҮЙ БОЛ — ТҮҮНИЙГ БҮТЭЭ.",
    closing: "Хэрэв та HSK 1~4-т тээглээд HSK5+, бүр 6 руу ахихыг хүсэж байвал — энэ боломжгүй зүйл биш. Хичээл зүтгэл гаргавал бүх зүйл боломжтой болно!",
    footer: "Унш, унш, унш. Үз, үз, үз. Үүнийг зуршил болго.",
  },
};

export default function HSKAdvicePage() {
  const { lang } = useSite();
  const t = lang === "mn" ? T.mn : T.en;
  const story = lang === "mn" ? mnStory : enStory;
  const items = lang === "mn" ? mnItems : enItems;

  return (
    <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10">
      <a href="/hsk" className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">← HSK</a>

      {/* HEADER */}
      <header className="mb-8 sm:mb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-red-700 dark:bg-red-900/40 dark:text-red-300">{t.badge}</span>
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

            {/* Score card */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50 sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">{t.scoreLabel}</p>
              <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                {t.scores.map(([val, lbl], i) => (
                  <div key={lbl}>
                    <p className={`text-xl font-bold tracking-[-0.03em] sm:text-[28px] ${i === 3 ? "text-red-700 dark:text-red-400" : "text-slate-950 dark:text-zinc-100"}`}>{val}</p>
                    <p className={`mt-1 text-[10px] font-semibold uppercase tracking-wider ${i === 3 ? "text-red-600 dark:text-red-400" : "text-slate-500 dark:text-zinc-500"}`}>{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {story.slice(0, 5).map((p, i) => <p key={i}>{p}</p>)}

            {/* Pull quote */}
            <blockquote className="rounded-xl border-l-4 border-red-500 bg-red-50/60 px-4 py-3 dark:bg-red-900/20">
              <p className="text-base font-bold leading-7 tracking-[-0.02em] text-slate-800 dark:text-zinc-100 sm:text-lg">{t.pull}</p>
            </blockquote>

            {story.slice(5).map((p, i) => <p key={i + 5}>{p}</p>)}
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
            <div key={item.number} className={["rounded-2xl border p-4 sm:p-5", item.highlight ? "border-red-200 bg-red-50/80 dark:border-red-800 dark:bg-red-900/20" : "border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"].join(" ")}>
              <div className="flex gap-3">
                <div className={["flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold", item.highlight ? "bg-red-600 text-white dark:bg-red-500" : "bg-zinc-100 text-red-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-red-400 dark:ring-zinc-700"].join(" ")}>
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

        <blockquote className="my-6 rounded-xl border-l-4 border-red-500 bg-white p-4 shadow-sm dark:bg-zinc-900 sm:p-5">
          <p className="text-base font-semibold leading-7 tracking-[-0.02em] text-slate-800 dark:text-zinc-100 sm:text-lg">{t.closing}</p>
        </blockquote>
      </section>

      <footer className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">{t.footer}</p>
      </footer>
    </div>
  );
}
