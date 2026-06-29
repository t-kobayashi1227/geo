import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NewsRow } from "@/components/NewsRow";
import { RecruitSection } from "@/components/RecruitSection";
import { getNewsItems } from "@/lib/news";

export default async function NewsListPage() {
  const newsItems = await getNewsItems();

  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-[linear-gradient(170deg,#eef7fe_0%,#dcecfb_100%)] px-4 py-12 text-center md:px-10 md:py-20">
          <h1 className="text-2xl font-bold text-[#16202b] md:text-[32px]">お知らせ</h1>
          <p className="mt-1 text-[11px] tracking-[4px] text-[#88a0b3] md:text-xs">NEWS</p>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <div className="mx-auto max-w-[960px]">
              {newsItems.length === 0 ? (
                <p className="text-center text-sm md:text-base">お知らせはまだありません。</p>
              ) : (
                newsItems.map((item) => <NewsRow key={item.id} item={item} />)
              )}
            </div>
          </div>
        </section>

        <RecruitSection />
      </main>
      <Footer />
    </div>
  );
}
