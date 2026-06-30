import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RecruitSection } from "@/components/RecruitSection";
import { categoryColor, formatNewsDate, getNewsItem } from "@/lib/news";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getNewsItem(id);
  return { title: item ? `${item.title} | 新潟県地質調査業協会` : "お知らせ" };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getNewsItem(id);

  if (!item) {
    notFound();
  }

  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-[linear-gradient(170deg,#eef7fe_0%,#dcecfb_100%)] px-4 py-12 text-center md:px-10 md:py-20">
          <h1 className="text-2xl font-bold text-[#16202b] md:text-[32px]">お知らせ</h1>
          <p className="mt-1 text-[11px] tracking-[4px] text-[#88a0b3] md:text-xs">NEWS</p>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-[960px] px-4 md:px-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-bold text-[#3d9be0] md:text-base">{formatNewsDate(item.data)}</span>
              {item.category && (
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-bold text-white"
                  style={{ backgroundColor: categoryColor(item.category.name) }}
                >
                  {item.category.name}
                </span>
              )}
            </div>

            <h2 className="mt-4 text-lg font-bold leading-snug text-[#16202b] md:text-2xl">{item.title}</h2>

            <div className="mt-6 border-t border-[#e2ebf2] pt-8 md:mt-8 md:pt-10">
              <div
                className="text-sm leading-relaxed text-[#2c3e4d] md:text-base [&_a]:underline [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#16202b] [&_h2]:md:text-xl [&_img]:rounded-[12px] [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>

            <div className="mt-10 flex justify-center md:mt-16">
              <Link
                href="/news"
                className="inline-flex h-[42px] items-center gap-2 rounded-full border-[1.5px] border-[#5bb0ee] bg-white px-8 text-sm font-bold text-[#3d9be0] shadow-[0_4px_12px_rgba(91,176,238,0.18)] transition-opacity hover:opacity-80 md:h-[50px] md:px-10 md:text-base"
              >
                お知らせ一覧へ戻る
              </Link>
            </div>
          </div>
        </section>

        <RecruitSection />
      </main>
      <Footer />
    </div>
  );
}
