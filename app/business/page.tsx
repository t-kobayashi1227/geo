import { AssociationLinks } from "@/components/AssociationLinks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RecruitSection } from "@/components/RecruitSection";
import { SectionTitle } from "@/components/SectionTitle";

type ActivityItem = {
  label: string;
  href?: string;
};

type ActivityCategory = {
  title: string;
  items: ActivityItem[];
};

const activityCategories: ActivityCategory[] = [
  {
    title: "事業量の確保及び受注条件の改善に関する活動",
    items: [
      { label: "事業量の確保のための諸活動の展開" },
      { label: "業に係る諸制度の改革への対応" },
      { label: "コンプライアンスの向上に向けて" },
    ],
  },
  {
    title: "地質調査業の社会貢献の推進に関する活動",
    items: [
      { label: "業の独自性を堅持し、併せてその役割の推進" },
      { label: "一般社団法人としての公益事業活動の推進" },
      { label: "災害時における協力体制の推進" },
      { label: "関係機関の技術研修会への講師派遣" },
    ],
  },
  {
    title: "地質調査技術の向上と担い手の育成・確保に関する活動",
    items: [
      { label: "技術研修会、講習会の開催と支援" },
      { label: "関係機関及び学会との技術交流の推進" },
      { label: "担い手の育成・確保に向けた活動の推進" },
      { label: "技術資料の提供と技術情報等の交換" },
      { label: "関連する各種資格取得の奨励" },
    ],
  },
  {
    title: "地質調査業に関する広報活動",
    items: [
      { label: "会報誌の編集・発行とHP等の活用による広報" },
      { label: "一般県民への広報と関係機関への資料配付" },
    ],
  },
  {
    title: "福利厚生に関する活動",
    items: [{ label: "定款（PDFファイル／31KB）", href: "#" }],
  },
  {
    title: "財務諸表",
    items: [{ label: "財務諸表（PDFファイル／730KB）", href: "#" }],
  },
  {
    title: "事業計画・報告",
    items: [{ label: "事業計画・報告（PDFファイル／596KB）", href: "#" }],
  },
];

function CategoryMarker() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-brand-purple bg-background md:size-7"
    >
      <span className="size-2 rounded-full bg-white border-2 border-foreground md:size-2.5" />
    </span>
  );
}

function ItemMarker() {
  return (
    <span
      aria-hidden="true"
      className="inline-block size-2.5 shrink-0 rounded-full border border-foreground bg-brand-peach md:size-5"
    />
  );
}

export default function BusinessPage() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero />

        <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>協会案内</SectionTitle>
            <div className="mt-10 md:mt-16">
              <AssociationLinks current="/business" />
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>事業内容・取り組み</SectionTitle>

            <p className="mx-auto mt-10 text-sm leading-relaxed md:mt-16 md:text-3xl">
              協会は、県民の安全、安心の向上と県土の保全のため、地質調査の技術の向上及び普及・啓発とともに地質調査業経営の総合的な改善発達を図り、その経済的、社会的地位を向上させ、もって公共の福祉に寄与することを目的としております。
              <br />
              その目的を達成するため、次の事業活動を行っております。
            </p>

            <div className="mx-auto mt-10 max-w-4xl space-y-8 md:mt-16 md:space-y-10">
              {activityCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-3 md:gap-4">
                    <CategoryMarker />
                    <h3 className="text-sm font-bold leading-relaxed md:text-3xl">{category.title}</h3>
                  </div>

                  <ul className="mt-3 space-y-2 pl-7 md:mt-4 md:space-y-5 md:pl-[34px]">
                    {category.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-2 md:gap-3">
                        <ItemMarker />
                        {item.href ? (
                          <a href={item.href} className="text-xs underline md:text-lg">
                            {item.label}
                          </a>
                        ) : (
                          <span className="text-xs md:text-lg">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RecruitSection />
      </main>
      <Footer />
    </div>
  );
}
