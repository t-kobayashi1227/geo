import Link from "next/link";
import { getNewsItems } from "@/lib/news";
import { NewsRow } from "./NewsRow";
import { SectionTitle } from "./SectionTitle";

export async function NewsSection() {
  const newsItems = await getNewsItems(3);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <SectionTitle>お知らせ</SectionTitle>

        <div className="mx-auto mt-10 max-w-[960px] md:mt-16">
          {newsItems.map((item) => (
            <NewsRow key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-12">
          <Link
            href="/news"
            className="inline-flex h-[42px] items-center gap-2 rounded-full border-[1.5px] border-[#5bb0ee] bg-white px-8 text-sm font-bold text-[#3d9be0] shadow-[0_4px_12px_rgba(91,176,238,0.18)] transition-opacity hover:opacity-80 md:h-[50px] md:gap-3 md:px-10 md:text-base"
          >
            お知らせ一覧
            <span className="flex size-6 items-center justify-center rounded-full bg-[#5bb0ee] text-xs text-white md:size-7">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
