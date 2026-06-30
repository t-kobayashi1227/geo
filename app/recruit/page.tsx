import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RecruitDownload } from "@/components/RecruitDownload";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowBigDown } from 'lucide-react';
import { ImArrowDown } from "react-icons/im";

const categories = [
  {
    title: "社会資本整備",
    description: "道路・橋・ダム・河川・\nトンネル　鉄道・空港",
    color: "bg-[#FFC8C9]",
  },
  {
    title: "住環境整備・都市開発",
    description: "住宅・高層建築物・\n大規模建築物・鉄塔",
    color: "bg-[#FFD68A]",
  },
  {
    title: "地盤・斜面防災",
    description: "土砂災害・液状化",
    color: "bg-[#D3E2FF]",
  },
  {
    title: "環境保全",
    description: "地下水汚染・土壌汚染等",
    color: "bg-[#CAFF8A]",
  },
  {
    title: "社会資本の維持管理点検\n・長寿命化",
    description: "各種施設点検及び長寿命化検討",
    color: "bg-[#92D1F7]",
  },
  {
    title: "地盤図・\nハザードマップの作成",
    description: "土砂災害危険区域マップ\n液状化しやすさマップなど",
    color: "bg-[#E5BAFD]",
  },
  {
    title: "地下資源開発・学術調査等\n（活断層・学術調査等）",
    description: "石炭・石油・鉱物資源・\n地熱地中熱・地下空間を利用した\n資源開発 地震における活断層分野",
    color: "bg-[#FFA5BE]",
    full: true,
  },
];

const fieldWorkTypes = [
  {
    no: "01",
    title: "地質踏査・\n調査計画立案",
    description:
      "既存資料の確認や現地調査を行い、地形・地質の問題点を把握したうえで、必要な調査計画を立案。",
  },
  {
    no: "02",
    title: "ボーリング調査",
    description: "地中に孔を掘って土や岩を採取し、地盤の状態や硬さを調べる調査。",
  },
  {
    no: "03",
    title: "サウンディング調査",
    description: "地面に棒を回しながら押し込み、その抵抗から軟らかい地盤の硬さを調べる簡易調査。",
  },
  {
    no: "04",
    title: "物理探査",
    description: "地震波や電気などを利用して、地中の構造や断層・空洞の有無を調べる調査。",
  },
  {
    no: "05",
    title: "土質試験",
    description: "採取した土や岩を詳しく調べ、強度や性質などを確認する試験。",
  },
];

const officeWorkTypes = [
  { no: "01", title: "地盤図（災害ハザード）マップの作成" },
  { no: "02", title: "地盤の評価とリスク" },
  { no: "03", title: "3D地質モデルの作成" },
];

const fields = [
  "学術調査・\n研究",
  "地下水・\n土壌保全",
  "安心・安全な\n住宅や\n街づくり",
  "インフラ整備\n管理",
  "災害復旧",
];

function DashedBorder({
  rx = 40,
  dashLength = 8,
  gapLength = 6,
  strokeWidth = 2,
}: {
  rx?: number;
  dashLength?: number;
  gapLength?: number;
  strokeWidth?: number;
}) {
  const sw = strokeWidth;
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={sw / 2}
        y={sw / 2}
        width={`calc(100% - ${sw}px)`}
        height={`calc(100% - ${sw}px)`}
        rx={rx}
        fill="none"
        stroke="currentColor"
        strokeWidth={sw}
        strokeDasharray={`${dashLength} ${gapLength}`}
      />
    </svg>
  );
}

function DashedLine({
  dashLength = 6,
  gapLength = 4,
  strokeWidth = 2,
}: {
  dashLength?: number;
  gapLength?: number;
  strokeWidth?: number;
}) {
  return (
    <svg className="block w-full" height={strokeWidth} xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0"
        y1={strokeWidth / 2}
        x2="100%"
        y2={strokeWidth / 2}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={`${dashLength} ${gapLength}`}
      />
    </svg>
  );
}

function DownArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`h-16 w-16 md:h-24 md:w-24 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="30,0 70,0 70,45 100,45 50,100 0,45 30,45"
        fill="#FDF9E4"
        stroke="black"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CategoryDot() {
  return (
    <span
      aria-hidden="true"
      className="inline-block size-5 shrink-0 rounded-full border border-foreground bg-white md:size-6"
    />
  );
}

function TypeCard({
  no,
  title,
  description,
  theme,
}: {
  no: string;
  title: string;
  description?: string;
  theme: "green" | "blue";
}) {
  const pill = theme === "green" ? "/images/decorative/Union.png" : "/images/decorative/Union_blue.png";

  return (
    <div className="h-[335px] border-2 relative flex flex-col rounded-[20px] bg-[#FFF2B1] pb-3 pt-6 md:h-[620px] lg:rounded-[24px] lg:pb-4 lg:pt-8">
      <div className="mx-auto size-6 shrink-0 rounded-full border border-foreground bg-background lg:size-10" />
      <div className="relative mx-4 flex flex-col justify-center rounded-[12px] border-2 border-foreground bg-[#FDF9E4] h-[180px] px-3 pb-3 pt-6 mt-8 lg:mx-6 lg:mt-10 lg:rounded-[16px] lg:px-4 lg:pb-4 lg:pt-8">
        <div className="absolute -top-5 left-0 right-0 flex justify-center lg:-top-[26px]">
          <div className="relative w-[200px] lg:w-[240px]">
            <Image src={pill} alt="" width={317} height={79} className="h-auto w-full" />
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white lg:text-2xl">
              TYPE.{no}
            </span>
          </div>
        </div>
        <p className="whitespace-pre-line text-center text-lg font-black leading-snug text-[#FFFA94] [-webkit-text-stroke:2px_black] [paint-order:stroke_fill] lg:text-3xl">
          {title}
        </p>
      </div>
      {description && (
        <>
          <div className="mx-4 mt-4 lg:mt-10">
            <DashedLine dashLength={8} gapLength={10} strokeWidth={2} />
          </div>
          <p className="h-[135px] mx-3 flex flex-col justify-center text-center text-sm leading-relaxed lg:my-6 lg:mx-7 lg:text-2xl">
            {description}
          </p>
          <div className="mx-4">
            <DashedLine dashLength={8} gapLength={10} strokeWidth={2} />
          </div>
        </>
      )}
    </div>
  );
}

function TypeCardOfficeWork({
  no,
  title,
  description,
  theme,
}: {
  no: string;
  title: string;
  description?: string;
  theme: "green" | "blue";
}) {
  const pill = theme === "green" ? "/images/decorative/Union.png" : "/images/decorative/Union_blue.png";

  return (
    <div className="h-[235px] border-2 relative flex flex-col rounded-[20px] bg-[#E2DEDC] pb-3 pt-6 md:h-[420px] md:rounded-[24px] md:pb-4 md:pt-8">
      <div className="mx-auto size-6 shrink-0 rounded-full border border-foreground bg-background lg:size-10" />
      <div className="relative mx-4 flex flex-col justify-center rounded-[12px] border-2 border-foreground bg-[#FDF9E4] h-[180px] px-3 pb-3 pt-6 mt-8 lg:mx-6 lg:mt-10 lg:rounded-[16px] lg:px-4 lg:pb-4 lg:pt-8">
        <div className="absolute -top-5 left-0 right-0 flex justify-center lg:-top-[26px]">
          <div className="relative w-[200px] lg:w-[240px]">
            <Image src={pill} alt="" width={317} height={79} className="h-auto w-full" />
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white lg:text-2xl">
              TYPE.{no}
            </span>
          </div>
        </div>
        <p className="whitespace-pre-line text-center text-lg font-black leading-snug text-[#FFFA94] [-webkit-text-stroke:2px_black] [paint-order:stroke_fill] lg:text-3xl">
          {title}
        </p>
      </div>
      {description && (
        <>
          <div className="mx-4 mt-4 lg:mt-10">
            <DashedLine dashLength={8} gapLength={10} strokeWidth={2} />
          </div>
          <p className="h-[135px] mx-3 flex flex-col justify-center text-center text-sm leading-relaxed lg:my-6 lg:mx-7 lg:text-2xl">
            {description}
          </p>
          <div className="mx-4">
            <DashedLine dashLength={8} gapLength={10} strokeWidth={2} />
          </div>
        </>
      )}
    </div>
  );
}


export default function RecruitPage() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero />

        <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="flex flex-col md:flex-row mx-auto max-w-[1280px] px-4 md:px-10">
            <div className="flex  items-center justify-center gap-4 md:basis-2/5 md:gap-6 md:flex-col">
              <div className="flex items-end justify-center">
                <Image
                  src="/images/illustrations/human_woods.png"
                  alt=""
                  width={416}
                  height={279}
                  className="h-35 w-auto md:h-75"
                />
              </div>
              <h2 className="text-left tracking-[0.5em] text-2xl font-bold leading-snug [writing-mode:vertical-rl] md:text-4xl">
                地質エンジニアって
                <br />
                どんな仕事？
              </h2>
            </div>

            <div>
              <div className="mx-auto mt-8 max-w-2xl space-y-6 text-left font-medium text-sm leading-loose md:mt-12 md:text-2xl">
                <p>
                  さまざまな分野で活躍する<br />「地質エンジニア」
                </p>
                <p>
                  例えば田んぼのような軟らかい土地の上に家を建てた場合、家が傾いたり沈んだりすることがあります。
                </p>
                <p>
                  これは田んぼのような土の重さに負けて、土が破壊されたり、または圧縮されたりすることが原因です。
                </p>
                <p>
                  このように構造物を「安全に保つためには何をしなければならないか」を考えるために地質調査をおこない、地中の状態を「分析・診断」します。
                </p>
                <p>
                  また、地すべりや崖崩れなどの自然災害対策、地下水・鉱泉・温泉などの地下資源開発、土壌汚染調査、近年では多くの地域のハザードマップ作成などにもその技術力を発揮しています。
                </p>
                <p>
                  「地質エンジニア」はみなさんが安全・安心に生活するための地質・地盤調査のスペシャリストです。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] md:px-10">
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/work_introduce.png"
                alt=""
                width={1280}
                height={1919}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <div className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-6">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className={`relative flex flex-col justify-center mx-auto max-w-[535px] h-[286px] w-full rounded-[45px] px-4 py-4 md:px-6 md:py-5 ${category.color} ${category.full ? "sm:col-span-2" : "max-w-[535px]"
                    }`}
                >
                  <DashedBorder dashLength={8} gapLength={12} strokeWidth={3} />
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <CategoryDot />
                    <h3 className="whitespace-pre-line text-sm font-bold leading-snug md:text-3xl">
                      {category.title}
                    </h3>
                  </div>
                  <p className="mt-2 whitespace-pre-line text-center text-xs leading-relaxed md:mt-3 md:text-3xl">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <h2 className="flex w-full items-center justify-center text-left tracking-[0.5em] text-2xl font-bold leading-snug [writing-mode:vertical-rl] md:text-4xl">
              実際に
              <br />
              どんなことをするの？
            </h2>
            <div className="flex justify-center mt-5">
              <Image
                src="/images/illustrations/fieldwork.png"
                alt=""
                width={758}
                height={524}
                className="h-52 w-auto md:h-75"
              />
            </div>
            <div className="mt-4 md:mt-6">
              <SectionTitle>①フィールドワーク</SectionTitle>
            </div>
            {/* <p className="mt-2 text-center text-xs leading-relaxed md:mt-3 md:text-2xl">
              (地質・地盤の診断を行うための地中情報を取得します)
            </p> */}

            <div className="mx-auto mt-10 max-w-[1070px] md:mt-16">
              <div className="grid grid-cols-[repeat(auto-fit,290px)] justify-center gap-4 lg:grid-cols-2 lg:justify-stretch lg:gap-6">
                {fieldWorkTypes.slice(0, 4).map((type) => (
                  <TypeCard key={type.no} theme="green" {...type} />
                ))}
              </div>
              <div className="mt-4 flex justify-center lg:mt-6">
                <div className="w-[290px] lg:w-[calc(50%-0.75rem)]">
                  <TypeCard theme="green" {...fieldWorkTypes[4]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/officework.png"
                alt=""
                width={473}
                height={465}
                className="h-52 w-auto md:h-75"
              />
            </div>
            <div className="mt-4 md:mt-6">
              <SectionTitle>②オフィスワーク</SectionTitle>
            </div>
            {/* <p className="mt-2 text-center text-xs leading-relaxed md:mt-3 md:text-2xl">
              (得られた地中情報を分析・診断して工事などに役立てる地質エンジニア！)
            </p> */}

            <div className="mx-auto mt-10 max-w-[1070px] md:mt-16">
              <div className="grid grid-cols-[repeat(auto-fit,290px)] justify-center gap-4 lg:grid-cols-2 lg:justify-stretch lg:gap-6">
                {officeWorkTypes.slice(0, 2).map((type) => (
                  <TypeCardOfficeWork key={type.no} theme="blue" {...type} />
                ))}
              </div>
              <div className="mt-4 flex justify-center lg:mt-6">
                <div className="w-[290px] lg:w-[calc(50%-0.75rem)]">
                  <TypeCardOfficeWork theme="blue" {...officeWorkTypes[2]} />
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center gap-6 md:mt-16 md:gap-10">
              <ArrowBigDown
                size={150}
                strokeWidth={0.3}
                fill="#FFE69B"
                className="text-neutral-900"
              />
              <ArrowBigDown
                size={150}
                strokeWidth={0.3}
                fill="#FFE69B"
                className="text-neutral-900"
              />
              <ArrowBigDown
                size={150}
                strokeWidth={0.3}
                fill="#FFE69B"
                className="text-neutral-900"
              />
            </div>

            <div className="mx-auto mt-6 flex max-w-[1280px] items-center justify-center sm:mt-8 md:mt-10 md:mb-10 lg:mb-16 xl:mb-30">
              {fields.map((field, index) => (
                <div
                  key={field}
                  className={`relative flex size-20 shrink-0 items-center justify-center rounded-full border border-foreground bg-brand-cream text-center text-[10px] font-bold leading-tight sm:size-24 sm:text-xs md:size-32 md:text-sm lg:size-52 lg:text-xl xl:size-60 xl:text-3xl ${index === 0 ? "" : "-ml-5 sm:-ml-6 md:-ml-8 lg:-ml-12 xl:-ml-15"
                    } ${index % 2 === 1 ? "translate-y-4 sm:translate-y-5 md:translate-y-8 lg:translate-y-16 xl:translate-y-30" : ""}`}
                  style={{ zIndex: index }}
                >
                  <span className="relative whitespace-pre-line px-3 text-white [-webkit-text-stroke:2px_black] [paint-order:stroke_fill]">
                    {field}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RecruitDownload
          href="#"
          heading={
            <>
              <span className="text-lg md:text-[40px]">詳しくはこちらから資料を<br />ダウンロードしてね！</span>
            </>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
