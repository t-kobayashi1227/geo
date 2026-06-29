import Link from "next/link";
import { categoryColor, formatNewsDate, type NewsItem } from "@/lib/news";

export function NewsRow({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.id}`}
      className="flex items-center gap-2 border-b border-[#e2ebf2] py-3 md:gap-5 md:py-5"
    >
      <span className="w-[58px] shrink-0 text-xs font-bold text-[#3d9be0] md:w-[78px] md:text-sm">
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
      <span className="min-w-0 flex-1 truncate text-xs text-[#2c3e4d] md:text-[15px]">{item.title}</span>
      <span className="hidden shrink-0 text-base text-[#9bb6cb] md:inline">›</span>
    </Link>
  );
}
