import { client } from "./microcms";

export type NewsCategory = {
  id: string;
  name: string;
};

export type NewsItem = {
  id: string;
  data: string;
  title: string;
  content: string;
  category?: NewsCategory | null;
};

const categoryColors: Record<string, string> = {
  お知らせ: "#5bb0ee",
  イベント: "#6ec22f",
  "入札・公告": "#c2922e",
  研修: "#3d9be0",
};

export function categoryColor(name: string) {
  return categoryColors[name] ?? "#5bb0ee";
}

export function formatNewsDate(isoDate: string) {
  const date = new Date(isoDate);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

export async function getNewsItems(limit?: number) {
  const { contents } = await client.getList<NewsItem>({
    endpoint: "news",
    queries: { limit, orders: "-data" },
  });
  return contents;
}

export async function getNewsItem(id: string) {
  try {
    return await client.getListDetail<NewsItem>({ endpoint: "news", contentId: id });
  } catch {
    return null;
  }
}
