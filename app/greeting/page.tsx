import { AssociationLinks } from "@/components/AssociationLinks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RecruitSection } from "@/components/RecruitSection";
import { SectionTitle } from "@/components/SectionTitle";

export default function GreetingPage() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero illustration="イラストor写真" />

        <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>協会案内</SectionTitle>
            <div className="mt-10 md:mt-16">
              <AssociationLinks current="/greeting" />
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>理事挨拶</SectionTitle>

            <p className="mx-auto mt-10 max-w-4xl text-center text-lg font-bold leading-relaxed md:mt-16 md:text-3xl">
              地質調査業は、地質・地盤・地下水など目に見えない地下の状態を、踏査・物理探査・ボーリング試験などを通じて調査・解析する仕事です。
            </p>

            <div className="mt-10 space-y-4 text-justify text-sm leading-relaxed md:mt-16 md:text-base md:leading-loose">
              <p>
                　（一社）新潟県地質調査業協会は、昭和37年11月に県内で地質調査を営む4社で技術の研鑽、情報交換を目的として設立されました。現在は、会員企業20社、平成24年に設立50周年を迎えました。また、本協会は、北陸地質調査業協会に所属し、北陸地質調査業協会は、全国10ブロックから構成される一般社団法人全国地質調査業協会連合会に所属する会員団体です。
              </p>
              <p>
                　地質調査業は、応用地質学や地盤工学を業の学術的基盤として、地質・地盤・地下水など地下の不可視部分について、地表地質踏査・物理探査・ボーリング・各種計測試験などの手法を用いて、調査の目的に応じて、その「形」・「質」・「量」を明らかにすることを生業としています。
              </p>
              <p>
                　関連する事業分野は建設分野がその大半を占めますが、黎明期からの学術的分野・資源分野に加えて、最近は自然災害を対象とした防災分野や環境分野が注目され、多岐にわたって事業展開しています。
              </p>
              <p>
                　本県の地質及び地盤は、古生代から新生代第四紀までを通して形成された多種・多様な地層・岩石から構成されていますが、平面的には、県東部の新発田－小出構造線と西端部の糸魚川－静岡構造線を境にして大きく区分されます。この地質分布の違いは、地形・地質構造・地下水状況等の違いとして現れますが、地すべり・崩壊・土石流や液状化等の災害に直結する要因ともなっています。新潟県は、日本で5番目の広さを有する自然災害が多い地域であり、平成16年の新潟・福島豪雨および中越地震、平成19年の中越沖地震、平成23年の新潟・長野県境地震に伴う水害・土砂災害・地盤災害等があげられます。地域の複雑な地形・地質性状に精通し、問題・課題に対して高度な判断ができる専門技術者を擁する地質調査業は、社会資本の整備・管理を含めて安全・安心な生活を守るためにも不可欠な存在と考えております。
              </p>
              <p>
                　当協会では、自然災害以外にも、昭和30年代から急速に整備された公共施設の老朽化対策や土壌・地下水汚染問題など、様々な課題に対して地質・地盤の専門家として対応できる企業が育っています。さらに、このたびの東日本大震災の復旧・復興のための物流拠点としての本県の役割を評価すると、これまで整備してきた鉄道・港湾・道路・空港ともその必要性が実証されていますし、まだまだ充分とは言えない本県の社会資本整備の実情も明白になってまいりました。
              </p>
              <p>
                　このように、私ども地質調査業者の必要性はこれまで以上に重要となってきています。会員企業には、本県の地質・地盤・環境・自然災害履歴などを熟知し、自然科学及び工学の両面から課題の解決にアプローチできる専門技術者を多数抱えています。また、当協会は半世紀にわたって地質調査業の技術力向上や経営改善などを行ってまいりました。今後とも、更なる研鑽に励んでまいりますので、会員企業の活用と皆様方のご指導・ご鞭撻をお願い申上げます。
              </p>
            </div>
          </div>
        </section>

        <RecruitSection />
      </main>
      <Footer />
    </div>
  );
}
