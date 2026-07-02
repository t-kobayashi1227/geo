import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NewsRow } from "@/components/NewsRow";
import { RecruitSection } from "@/components/RecruitSection";
import { getNewsItems } from "@/lib/news";

const PAGE_SIZE = 6;

export default async function NewsListPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageStr } = await searchParams;
  const page = Math.max(1, Number(pageStr) || 1);
  const offset = (page - 1) * PAGE_SIZE;

  const { contents: newsItems, totalCount } = await getNewsItems(PAGE_SIZE, offset);
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-[linear-gradient(170deg,#eef7fe_0%,#dcecfb_100%)] px-4 py-12 text-center md:px-10 md:py-[46px]">
          <h1 className="text-[22px] font-bold tracking-[1px] text-[#16202b] md:text-[32px] md:tracking-[2px]">お知らせ</h1>
          <p className="mt-2 text-[9px] tracking-[3px] text-[#88a0b3] md:text-[11px] md:tracking-[5px]">NEWS</p>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <div className="mx-auto max-w-[960px]">
              {newsItems.length === 0 ? (
                <p className="text-center text-sm text-[#2c3e4d] md:text-base">お知らせはまだありません。</p>
              ) : (
                newsItems.map((item) => <NewsRow key={item.id} item={item} />)
              )}

              {totalPages > 1 && (
                <div className="mt-10 flex justify-center gap-2 md:mt-12 md:gap-[10px]">
                  {page > 1 && (
                    <Link
                      href={page === 2 ? "/news" : `/news?page=${page - 1}`}
                      className="flex size-9 items-center justify-center rounded-full border-[1.5px] border-[#d3e5f4] bg-white text-[#3d9be0] transition-colors hover:bg-[#eef7fe] md:size-[42px]"
                    >
                      <FaChevronLeft size={12} />
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={p === 1 ? "/news" : `/news?page=${p}`}
                      className={`flex size-9 items-center justify-center rounded-full border-[1.5px] border-[#d3e5f4] text-[13px] font-bold transition-colors md:size-[42px] md:text-[14px] ${
                        p === page
                          ? "bg-[#5bb0ee] text-white"
                          : "bg-white text-[#3d9be0] hover:bg-[#eef7fe]"
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                  {page < totalPages && (
                    <Link
                      href={`/news?page=${page + 1}`}
                      className="flex size-9 items-center justify-center rounded-full border-[1.5px] border-[#d3e5f4] bg-white text-[#3d9be0] transition-colors hover:bg-[#eef7fe] md:size-[42px]"
                    >
                      <FaChevronRight size={12} />
                    </Link>
                  )}
                </div>
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
