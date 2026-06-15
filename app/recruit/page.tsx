import Image from "next/image";
import { ArrowCircle } from "@/components/ArrowCircle";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RecruitSection } from "@/components/RecruitSection";

const categories = [
  {
    title: "社会資本整備",
    description: "道路・橋・ダム・河川・トンネル　鉄道・空港",
    color: "bg-brand-peach",
  },
  {
    title: "住環境整備・都市開発",
    description: "住宅・高層建築物・大規模建築物・鉄塔",
    color: "bg-brand-blue",
  },
  {
    title: "地盤・斜面防災",
    description: "土砂災害・液状化",
    color: "bg-brand-orange",
  },
  {
    title: "環境保全",
    description: "地下水汚染・土壌汚染等",
    color: "bg-brand-green",
  },
  {
    title: "社会資本の維持管理\n点検・長寿命化",
    description: "各種施設点検及び長寿命化検討",
    color: "bg-brand-peach",
  },
  {
    title: "地盤図・ハザードマップの作成",
    description: "土砂災害危険区域マップ\n液状化しやすさマップなど",
    color: "bg-brand-green",
  },
  {
    title: "地下資源開発・学術調査等\n（活断層・学術調査等）",
    description: "石油・石炭・鉱物資源・地熱地中熱などの地下資源開発、地震における活断層調査など",
    color: "bg-brand-orange",
    full: true,
  },
];

const fieldWorkTypes = [
  {
    no: "01",
    title: "地質踏査・電気探査機器分析",
    description:
      "既存資料の確認や現地調査を行い、地形・地質の問題点を把握したうえで、必要な調査計画を立案。",
  },
  {
    no: "02",
    title: "ボーリング調査",
    description: "地中に孔を掘って土や岩を採取し、地層や地質の状態を確認する。",
  },
  {
    no: "03",
    title: "サウンディング調査",
    description: "地面に棒を貫入させたり、その抵抗から軟らかい地盤の硬さ等を調べる簡易調査。",
  },
  {
    no: "04",
    title: "物理探査",
    description: "地震波や電気などを利用して、地中の構造や形状、性状の有無を調べる方法。",
  },
  {
    no: "05",
    title: "土質試験",
    description: "採取した土や岩を詳しく調べ、強度や性状などを確認する試験。",
  },
];

const officeWorkTypes = [
  { no: "01", title: "地盤図（土質・ハザード）マップの作成" },
  { no: "02", title: "地盤の状態（評価）とリスク" },
  { no: "03", title: "各種構造物の設計の対応" },
];

const fields = ["学校・公共施設", "道路・トンネル", "河川・ダム", "住宅・建築物", "上水道・下水道"];

function CategoryDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-foreground md:size-6 ${className}`}
    >
      <span className="size-2 rounded-full border border-foreground bg-white md:size-2.5" />
    </span>
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
  const pillTextColor = theme === "green" ? "text-[#00A32B]" : "text-[#005AA3]";

  return (
    <div className="flex flex-col">
      <div
        className="relative z-10 mx-2 flex min-h-[40px] items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-center sm:mx-3 md:min-h-[52px] md:gap-2 md:px-4"
        style={{ backgroundImage: `url('${pill}')`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
      >
        <span
          className={`shrink-0 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold sm:text-xs md:text-sm ${pillTextColor}`}
        >
          TYPE.{no}
        </span>
        {description && (
          <span className="text-[10px] leading-tight font-bold text-white sm:text-xs md:text-sm">{title}</span>
        )}
      </div>
      <div className="-mt-4 flex min-h-[110px] flex-1 items-center rounded-[18px] bg-brand-cream px-3 pt-7 pb-4 text-xs leading-relaxed sm:rounded-[24px] md:min-h-[140px] md:px-5 md:pt-9 md:pb-6 md:text-sm">
        {description ?? (
          <span className="block w-full text-center text-sm font-bold md:text-lg">{title}</span>
        )}
      </div>
    </div>
  );
}

export default function RecruitPage() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero illustration="イラストor写真" />

        <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <h2 className="text-center text-xl font-bold leading-snug md:text-3xl">
              さまざまな分野で活躍する
              <br />
              「地質エンジニア」
            </h2>

            <div className="mx-auto mt-8 max-w-2xl space-y-6 text-center text-sm leading-loose md:mt-12 md:text-lg">
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
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <div className="flex items-end justify-center">
                <Image
                  src="/images/illustrations/ChatGPT Image 2026年5月19日 13_49_05 2.png"
                  alt=""
                  width={296}
                  height={249}
                  className="h-24 w-auto md:h-36"
                />
                <Image
                  src="/images/illustrations/ChatGPT Image 2026年5月19日 13_41_13 1.png"
                  alt=""
                  width={279}
                  height={279}
                  className="-ml-6 h-28 w-auto md:-ml-10 md:h-44"
                />
              </div>
              <h2 className="text-center text-2xl font-bold leading-snug md:text-4xl">
                地質エンジニアって
                <br />
                どんな仕事？
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-6">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className={`rounded-[16px] bg-white px-4 py-4 md:rounded-[20px] md:px-6 md:py-5 ${
                    category.full ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <CategoryDot className={category.color} />
                    <h3 className="whitespace-pre-line text-sm font-bold leading-snug md:text-lg">
                      {category.title}
                    </h3>
                  </div>
                  <p className="mt-2 whitespace-pre-line text-xs leading-relaxed md:mt-3 md:text-sm">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/ChatGPT Image 2026年5月19日 13_45_37 1.png"
                alt=""
                width={327}
                height={327}
                className="h-28 w-auto md:h-40"
              />
              <Image
                src="/images/illustrations/house.png"
                alt=""
                width={402}
                height={309}
                className="-ml-4 h-24 w-auto self-end md:-ml-6 md:h-32"
              />
            </div>
            <h2 className="mt-4 text-center text-2xl font-bold md:mt-6 md:text-4xl">フィールドワーク</h2>
            <p className="mt-2 text-center text-xs leading-relaxed md:mt-3 md:text-lg">
              (地質・地盤の診断を行うための地中情報を取得します)
            </p>

            <div className="mx-auto mt-10 max-w-3xl md:mt-16">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {fieldWorkTypes.slice(0, 4).map((type) => (
                  <TypeCard key={type.no} theme="green" {...type} />
                ))}
              </div>
              <div className="mt-4 flex justify-center md:mt-6">
                <div className="w-[calc(50%-0.5rem)] md:w-[calc(50%-0.75rem)]">
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
                src="/images/illustrations/ChatGPT Image 2026年5月19日 14_46_26 1.png"
                alt=""
                width={269}
                height={269}
                className="h-28 w-auto md:h-40"
              />
            </div>
            <h2 className="mt-4 text-center text-2xl font-bold md:mt-6 md:text-4xl">オフィスワーク</h2>
            <p className="mt-2 text-center text-xs leading-relaxed md:mt-3 md:text-lg">
              (得られた地中情報を分析・診断して工事などに役立てる地質エンジニア！)
            </p>

            <div className="mx-auto mt-10 max-w-3xl md:mt-16">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {officeWorkTypes.slice(0, 2).map((type) => (
                  <TypeCard key={type.no} theme="blue" {...type} />
                ))}
              </div>
              <div className="mt-4 flex justify-center md:mt-6">
                <div className="w-[calc(50%-0.5rem)] md:w-[calc(50%-0.75rem)]">
                  <TypeCard theme="blue" {...officeWorkTypes[2]} />
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center gap-3 md:mt-16">
              <ArrowCircle className="rotate-90" />
              <ArrowCircle className="rotate-90" />
            </div>

            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3 md:mt-10 md:gap-6">
              {fields.map((field) => (
                <div
                  key={field}
                  className="relative flex size-24 shrink-0 items-center justify-center text-center text-[11px] font-bold leading-tight sm:size-28 sm:text-xs md:size-36 md:text-base"
                >
                  <Image src="/images/decorative/Ellipse 48.png" alt="" fill className="object-contain" />
                  <span className="relative px-3">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RecruitSection
          href="#"
          heading={
            <>
              詳しくはこちらから資料を
              <br />
              <span className="text-lg md:text-[40px]">ダウンロードしてね！</span>
            </>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
