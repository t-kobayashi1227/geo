import { AssociationLinks } from "@/components/AssociationLinks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecruitSection } from "@/components/RecruitSection";
import { SectionTitle } from "@/components/SectionTitle";

export default function GreetingPage() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />

        <section className="relative bg-background pt-16 pb-16 md:pt-24 md:pb-24 mt-[-10%] md:mt-[-3%]">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>協会案内</SectionTitle>
            <div className="mt-10 md:mt-16">
              <AssociationLinks current="/greeting" />
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-0">
          <div className="mx-auto max-w-[1280px] px-5 md:px-10">
            <SectionTitle>理事挨拶</SectionTitle>

            <p className="mx-auto mt-10 text-center text-lg font-medium leading-relaxed md:mt-16 md:text-3xl">
              地質調査業は、地質や地盤、地下水など、普段は見ることのできない地下の様子を調べる仕事です。踏査や物理探査、ボーリング調査などを通じて、土地の状態を把握し、安全なものづくりを支えています。
            </p>

            <div className="mx-auto text-center mt-10 space-y-8 text-sm leading-relaxed md:mt-16 md:text-lg md:leading-loose">
              <p>
                私たちが普段歩いている道路や橋、建物は、しっかりとした地盤の上に造られています。
              </p>
              <p>
                地質調査の仕事は、その土台となる「地面の中」を調べること。<br />地質や地盤、地下水など、目に見えない地下の状態をさまざまな調査で明らかにし、<br />安全なまちづくりを支えています。
              </p>
              <p>
                新潟県は地震や豪雨、地すべりなど自然災害の多い地域です。<br />そのため、地質調査の技術は防災・減災にも欠かせません。<br />近年では、インフラの維持管理や環境保全など、活躍の場はさらに広がっています。
              </p>
              <p>
                一般社団法人新潟県地質調査業協会は、県内の地質調査会社が集まり、<br />技術力の向上や情報共有に取り組んでいます。地域の地形や地質を熟知した技術者たちが、<br />それぞれの専門性を活かしながら、新潟の安全・安心な暮らしを支えています。
              </p>
              <p>
                普段は見ることのできない地下の世界を探り、その成果を社会に役立てる。<br />地質調査は、未来のまちづくりを支える重要な仕事です。
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
