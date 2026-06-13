import { SectionTitle } from "./SectionTitle";

const newsItems = [
  { date: "2026.1.1", description: "説明文が入ります。" },
  { date: "2026.1.1", description: "説明文が入ります。" },
  { date: "2026.1.1", description: "説明文が入ります。" },
];

export function NewsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <SectionTitle>お知らせ</SectionTitle>

        <div className="mx-auto mt-10 max-w-3xl border-t border-black/20 md:mt-16">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 border-b border-black/20 py-4 md:flex-row md:items-baseline md:gap-8 md:py-5"
            >
              <span className="text-sm md:text-base">{item.date}</span>
              <span className="text-sm md:text-base">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
