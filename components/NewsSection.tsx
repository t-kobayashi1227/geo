import { client } from "@/lib/microcms";
import { SectionTitle } from "./SectionTitle";

type NewsItem = {
  id: string;
  data: string;
  title: string;
  content: string;
};

async function getNewsItems() {
  const { contents } = await client.getList<NewsItem>({ endpoint: "news" });
  return contents;
}

function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

export async function NewsSection() {
  const newsItems = await getNewsItems();

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <SectionTitle>お知らせ</SectionTitle>

        <div className="mx-auto mt-10 max-w-[960px] border-t border-black md:mt-16">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-1 border-b border-black py-4 md:flex-row md:items-baseline md:gap-8 md:py-5"
            >
              <span className="text-sm px-3 md:text-base">{formatDate(item.data)}</span>
              <span className="text-sm px-3 md:text-base">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
