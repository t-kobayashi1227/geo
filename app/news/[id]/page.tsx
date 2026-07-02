import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RecruitSection } from "@/components/RecruitSection";
import { ArrowCircle } from "@/components/ArrowCircle";
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
        <section className="bg-background py-16 md:py-[52px]">
          <div className="mx-auto max-w-[960px] px-4 md:px-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[12px] font-bold text-[#3d9be0] md:text-[15px]">{formatNewsDate(item.data)}</span>
              {item.category && (
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-bold text-white md:text-[11px]"
                  style={{ backgroundColor: categoryColor(item.category.name) }}
                >
                  {item.category.name}
                </span>
              )}
            </div>

            <h1 className="mt-3 text-[20px] font-bold leading-snug text-[#16202b] md:mt-[18px] md:text-[30px]">{item.title}</h1>

            <div className="mt-6 border-t border-[#e5eef5] pt-8 md:mt-8 md:pt-10">
              <div
                className="text-[13px] leading-[2.1] text-[#2c3e4d] md:text-[15px] [&_a]:underline [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#16202b] [&_h2]:md:text-xl [&_img]:rounded-[12px] [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>

            <div className="mt-5 rounded-2xl bg-[#f2f8fd] px-[18px] py-4 md:mt-5 md:rounded-[16px] md:px-[30px] md:py-[26px]">
              <div className="text-[12px] font-bold text-[#3d9be0] md:text-[14px]">お問い合わせ先</div>
              <div className="mt-2 text-[11px] leading-[1.9] text-[#46607a] md:text-[13px]">
                一般社団法人新潟県地質調査業協会 ／ TEL（025）225-8360
              </div>
            </div>

            <div className="mt-10 flex justify-center md:mt-[44px]">
              <Link
                href="/news"
                className="inline-flex h-[42px] items-center gap-2 rounded-full border-[1.5px] border-[#5bb0ee] bg-white px-8 text-sm font-bold text-[#3d9be0] transition-opacity hover:opacity-80 md:h-[50px] md:gap-3 md:px-10 md:text-base"
              >
                <ArrowCircle bgColor="bg-[#5bb0ee]" iconColor="text-white" size="size-7" className="rotate-180" />
                一覧へ戻る
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
