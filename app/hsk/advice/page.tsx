"use client";

import { useSite } from "@/app/context";

type Item = { number: string; title: string; body: React.ReactNode; highlight?: boolean };
type Res = { name: string; descEn: string; descMn: string; tag: string; url: string; highlight?: boolean };

const enStory: React.ReactNode[] = [
  <>I have been learning Chinese for nearly ten years. I started at age six. I passed HSK 6 with a score of <strong className="font-semibold text-slate-950 dark:text-zinc-100">246/300</strong>. But I should be clear — it was not because I studied for ten years. It was because I listened to, read, and spoke Chinese every single day without stopping.</>,
  <>When I first started learning Chinese, it felt incredibly difficult. There are so many characters, and you have to memorise them to understand the meaning of any text.</>,
  <>I began with pinyin (拼音) and basic Chinese characters when I was young. It was hard at first, but I was able to speak and read as time went on.</>,
  <>However, my Chinese comprehension was stuck at around HSK 3 level and would not improve. Then I heard an expert say: &ldquo;If you are learning a language, bring it into your daily life.&rdquo;</>,
  <>I decided to scroll Chinese TikTok (抖音) and Kwai (快手) to immerse my brain in the language — it helped enormously. I also started reading fairy tales in Chinese. At first I could not understand everything, so I used a translator to mark unfamiliar words and worked through them one by one.</>,
  <>I then made Chinese fully part of my daily life. As my reading comprehension improved, I started reading more complex books to train my brain on harder passages. It worked extremely well.</>,
  <>For speaking — just like my IELTS preparation — I spoke to myself in Chinese every single day.</>,
  <>In 2024, I had the chance to study in China for one month. I immersed myself deeply in Chinese culture and strengthened my language significantly.</>,
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
  { number: "01", title: "Memorise new words — constantly", highlight: true,
    body: <>Most importantly, memorise new words constantly. This single habit will solve most problems on the exam.</> },
  { number: "02", title: "Immerse yourself in the language",
    body: <>Read Chinese books, watch Chinese videos — including Chinese TikTok, which is genuinely addictive. Immerse yourself fully in the language and let it become second nature.</> },
  { number: "03", title: "Do many mock tests — and review every one",
    body: <>Before the HSK exam, I completed a large number of mock tests. Each time I finished one, I reviewed every single answer carefully to understand my mistakes.</> },
  { number: "04", title: "Take the computer-based HSK",
    body: <>I recommend taking the computer-based HSK. For the writing section, you can use a keyboard with pinyin to type Chinese characters — which is far easier than writing by hand.</> },
  { number: "05", title: "Make it a daily habit",
    body: <>Read, read, read. Watch, watch, watch. Consistency over months is what actually moves the needle.</> },
];

const mnItems: Item[] = [
  { number: "01", title: "Шинэ үгсийг тасралтгүй цээжил", highlight: true,
    body: <>Хамгийн чухал нь — шинэ үгсийг тасралтгүй цээжлэх нь ихэнх асуудлыг шийднэ.</> },
  { number: "02", title: "Өөрийгөө хэлэнд нь ууст",
    body: <>Та хятад ном унш, хятад видео — маш донтуулдаг хятад TikTok зэргийг үзэж сонс. Өөрийгөө хэлэнд нь оруулж сур.</> },
  { number: "03", title: "Олон загвар шалгалт өг — бүрийг нь дүгнэ",
    body: <>HSK шалгалтын өмнө би маш олон загвар шалгалт өгсөн. Бүтэн загвар шалгалт дуусгах бүрдээ алдаагаа ойлгохын тулд хариултаа тал бүрээс нь шалгадаг.</> },
  { number: "04", title: "Компьютерт суурилсан HSK өг",
    body: <>Мөн би компьютерт суурилсан HSK өгөхийг зөвлөе. Учир нь бичих хэсэгт гар (пиньин) ашиглан ханз бичиж болно — гараар бичихээс хамаагүй хялбар.</> },
  { number: "05", title: "Өдөр тутмын зуршил болго",
    body: <>Унш, унш, унш. Үз, үз, үз. Сарууд дахь тогтмол байдал л үнэхээр үр дүн өгдөг.</> },
];

const hskResources: Res[] = [
  {
    name: "Pleco",
    descEn: "The definitive Chinese dictionary app. Tap any character for stroke order, audio, example sentences, and HSK level. Install this first — everything else builds on it.",
    descMn: "Хамгийн сайн хятад толь бичгийн апп. Дурын ханзыг дарахад зурах дараалал, дуу, жишээ өгүүлбэр, HSK түвшин харагдана. Эхлээд энийг татаж авч суулга.",
    tag: "Dictionary · iOS & Android",
    url: "https://www.pleco.com",
    highlight: true,
  },
  {
    name: "HSK Academy",
    descEn: "Free HSK mock tests for all levels (1–6 and New HSK). Timed exams with answer explanations — essential for practising before the real thing.",
    descMn: "Бүх түвшний (1–6 болон Шинэ HSK) үнэгүй загвар шалгалтууд. Тайлбартай хариулттай цагтай шалгалтууд — бодит шалгалтаас өмнө дадлага хийхэд зайлшгүй шаардлагатай.",
    tag: "Practice Tests · All levels",
    url: "https://www.hsk.academy",
  },
  {
    name: "Chinese Grammar Wiki",
    descEn: "AllSet Learning's grammar reference — every pattern categorised by HSK level with clear explanations and examples. Bookmark this and use it every time you hit a grammar gap.",
    descMn: "AllSet Learning-ийн дүрмийн лавлах — HSK түвшнээр ангилагдсан бүх загвар тод тайлбар, жишээтэй. Дүрмийн цоорхой олдох бүрд нь хэрэглэ.",
    tag: "Grammar · HSK 1–6",
    url: "https://resources.allsetlearning.com/chinese/grammar",
  },
  {
    name: "HelloChinese",
    descEn: "A gamified beginner app that covers HSK 1–4 vocabulary and grammar. Good for building a daily reading and vocabulary habit in the early stages.",
    descMn: "HSK 1–4-ийн үгс, дүрмийг хамарсан тоглоомчилсон анхан шатны апп. Эхэн үед өдөр тутмын уншлага, үгийн санг бий болгоход тохиромжтой.",
    tag: "App · Beginner–Intermediate",
    url: "https://www.hellochinese.cc",
  },
  {
    name: "ChinesePod",
    descEn: "Podcast-style lessons covering everyday topics from beginner to advanced. Great for building listening comprehension and picking up natural spoken patterns.",
    descMn: "Анхан шатнаас дэвшилтэт хүртэл өдөр тутмын сэдвүүдийг хамарсан подкаст хичээлүүд. Сонсох чадварыг хөгжүүлж, байгалийн яриаг олж авахад тохиромжтой.",
    tag: "Listening · All levels",
    url: "https://www.chinesepod.com",
  },
  {
    name: "Mandarin Corner",
    descEn: "YouTube channel with slow, clearly-spoken interview videos subtitled in both Chinese and English. Perfect for HSK 4–6 listening practice — real conversations, real vocabulary.",
    descMn: "Хятад болон англи хэлний хадмал орчуулгатай удаан, тод ярьсан ярилцлагын видеотой YouTube суваг. HSK 4–6-ийн сонсох дадлагад тохиромжтой — бодит харилцаа, бодит үгс.",
    tag: "YouTube · Intermediate–Advanced",
    url: "https://www.youtube.com/@MandarinCorner",
  },
  {
    name: "Douyin (抖音)",
    descEn: "The Chinese TikTok — the single best immersion tool once you reach HSK 3+. Short videos on every topic spoken at natural speed. This is what moved my comprehension from HSK 3 to HSK 6.",
    descMn: "Хятад TikTok — HSK 3+ түвшинд хүрсний дараа хамгийн сайн умбалтын хэрэгсэл. Байгалийн хурдаар ярьсан бүх сэдвийн богино видеонууд. Минийг HSK 3-аас HSK 6 болгосон зүйл яг энэ.",
    tag: "Immersion · HSK 3+",
    url: "https://www.douyin.com",
  },
  {
    name: "Anki",
    descEn: "Spaced-repetition flashcard app. Build your own HSK vocabulary deck or download a pre-made one. Use it for 10–15 minutes every day — the best way to cement new characters.",
    descMn: "Завсарласан давталтын флэшкарт апп. Өөрийн HSK үгийн сантай тараг үүсгэ эсвэл бэлэн тарагийг татаж ав. Өдөр бүр 10–15 минут хэрэглэ — шинэ ханзыг бэхжүүлэх хамгийн сайн арга.",
    tag: "Vocabulary · All levels",
    url: "https://apps.ankiweb.net",
  },
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
    pull: "IF YOU DON'T HAVE THE ENVIRONMENT — CREATE IT.",
    closing: "If you are stuck at HSK 1–4 and want to push to HSK 5 or even HSK 6 — it is absolutely possible. Put in the effort, and everything will become available to you.",
    resourceLabel: "03 · Tools", resourceTitle: "Resources",
    resourceNote: "The tools I actually used — and still recommend.",
    recommended: "Recommended",
    footer: "Read, read, read. Watch, watch, watch. Make it a habit.",
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
    closing: "Хэрэв та HSK 1–4-т тээглээд HSK 5+, бүр HSK 6 руу ахихыг хүсэж байвал — энэ огт боломжгүй зүйл биш. Хичээл зүтгэл гаргавал бүх зүйл боломжтой болно.",
    resourceLabel: "03 · Хэрэгслүүд", resourceTitle: "Нөөцүүд",
    resourceNote: "Би өөрөө хэрэглэсэн — одоо ч санал болгодог хэрэгслүүд.",
    recommended: "Зөвлөмж",
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

      {/* RESOURCES */}
      <section className="mb-10 sm:mb-14">
        <div className="mb-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:text-[11px]">{t.resourceLabel}</div>
          <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-zinc-50 sm:text-3xl">{t.resourceTitle}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400">{t.resourceNote}</p>
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          {hskResources.map((res) => (
            <a
              key={res.name}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className={["group flex items-start gap-4 rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:shadow-md sm:p-5", res.highlight ? "border-red-200 bg-red-50/80 dark:border-red-800 dark:bg-red-900/20" : "border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"].join(" ")}
            >
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-bold tracking-[-0.03em] text-slate-950 dark:text-zinc-100 sm:text-lg">{res.name}</span>
                  {res.highlight && (
                    <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{t.recommended}</span>
                  )}
                  <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">{res.tag}</span>
                </div>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-zinc-400 sm:text-[15px] sm:leading-7">
                  {lang === "mn" ? res.descMn : res.descEn}
                </p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white dark:bg-red-900/30 dark:text-red-400 dark:group-hover:bg-red-600 dark:group-hover:text-white">→</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">{t.footer}</p>
      </footer>
    </div>
  );
}
