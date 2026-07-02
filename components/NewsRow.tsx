import Link from "next/link";
import { categoryColor, formatNewsDate, type NewsItem } from "@/lib/news";

export function NewsRow({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.id}`}
      className="flex items-center gap-3 border-b border-[#e5eef5] py-4 md:gap-6 md:py-[22px]"
    >
      <span className="w-[72px] shrink-0 text-[11px] font-bold text-[#3d9be0] md:w-[88px] md:text-[15px]">
        {formatNewsDate(item.data)}
      </span>
      {item.category && (
        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold text-white md:px-3 md:text-[11px]"
          style={{ backgroundColor: categoryColor(item.category.name) }}
        >
          {item.category.name}
        </span>
      )}
      <span className="min-w-0 flex-1 truncate text-[13px] text-[#2c3e4d] md:text-[16px]">{item.title}</span>
      <span className="shrink-0 text-[14px] text-[#9bb6cb] md:text-[18px]">›</span>
    </Link>
  );
}
