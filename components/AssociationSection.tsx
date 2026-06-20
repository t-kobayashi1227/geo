import Image from "next/image";
import Link from "next/link";
import { ArrowCircle } from "./ArrowCircle";
import { SectionTitle } from "./SectionTitle";

const description =
  "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。";

const cards = [
  {
    title: "理事挨拶",
    href: "/greeting",
    description,
    image: "/images/illustrations/chair_man.png",
    width: 247,
    height: 245,
  },
  {
    title: "事業内容・取り組み",
    href: "/business",
    description,
    image: "/images/illustrations/Research.png",
    width: 217,
    height: 231,
  },
  {
    title: "組織・役員・委員会",
    href: "/organization",
    description,
    image: "/images/illustrations/folder_kun.png",
    width: 267,
    height: 258,
  },
  {
    title: "会員名簿",
    href: "/members",
    description,
    image: "/images/illustrations/Location_book.png",
    width: 297,
    height: 258,
  },
];

export function AssociationSection() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <SectionTitle>協会案内</SectionTitle>

        <div className="mx-auto mt-10 grid grid-cols-2 gap-4 justify-items-center md:mt-16 max-w-[390px] md:max-w-[818px] md:gap-x-[42px] md:gap-y-12">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="group flex max-w-[220px] flex-col md:max-w-[388px]">
              <div className="flex h-[220px] flex-col items-center justify-between gap-4 rounded-[20px] bg-brand-blue px-4 pt-6 pb-4 md:h-[423px] md:rounded-[32px] md:px-8 md:pb-6 md:pt-15">
                <Image
                  src={card.image}
                  alt=""
                  width={card.width}
                  height={card.height}
                  className="h-24 w-auto md:h-[200px]"
                />
                <div className="flex flex-col items-center gap-1 pb-1 md:gap-2 md:pb-2">
                  <span className="text-sm font-medium md:text-xl">{card.title}</span>
                  <ArrowCircle className="mt-2 size-3 text-base md:size-[33px] md:text-2xl" />
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed md:text-base">{card.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-16">
          <Link
            href="/about"
            className="relative flex w-[390px] items-center justify-center rounded-full bg-brand-blue py-3 text-base font-medium md:py-4 md:text-xl"
          >
            詳しく見る
            <ArrowCircle className="absolute right-4 size-6 text-base md:right-6 md:size-[33px] md:text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
