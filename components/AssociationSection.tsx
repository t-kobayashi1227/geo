import Link from "next/link";
import { ArrowCircle } from "./ArrowCircle";
import { SectionTitle } from "./SectionTitle";
import { ChairmanIllustration } from "./illustrations/ChairmanIllustration";
import { FolderKunIllustration } from "./illustrations/FolderKunIllustration";
import { ResearchIllustration } from "./illustrations/ResearchIllustration";
import { LocationBookIllustration } from "./illustrations/LocationBookIllustration";

const description =
  "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。";

const cards = [
  {
    title: "理事挨拶",
    href: "/greeting",
    description,
    Illustration: ChairmanIllustration,
  },
  {
    title: "事業内容・取り組み",
    href: "/business",
    description,
    Illustration: ResearchIllustration,
  },
  {
    title: "組織・役員・委員会",
    href: "/organization",
    description,
    Illustration: FolderKunIllustration,
  },
  {
    title: "会員名簿",
    href: "/members",
    description,
    Illustration: LocationBookIllustration,
  },
];

export function AssociationSection() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <SectionTitle>協会案内</SectionTitle>

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-16 md:gap-8">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="group flex flex-col">
              <div className="flex flex-1 flex-col items-center justify-between gap-4 rounded-[20px] bg-brand-blue px-4 pt-6 pb-4 md:rounded-[32px] md:px-8 md:pb-6 md:pt-10">
                <card.Illustration className="h-24 w-auto sm:h-28 md:h-[200px]" />
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-sm font-medium sm:text-base md:text-xl">{card.title}</span>
                  <ArrowCircle className="size-6 text-base md:size-[33px] md:text-2xl" />
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed sm:text-sm md:text-base">{card.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-16">
          <Link
            href="/about"
            className="flex items-center gap-3 rounded-full bg-brand-blue px-8 py-3 text-base font-medium md:gap-4 md:px-12 md:py-4 md:text-xl"
          >
            詳しく見る
            <ArrowCircle className="size-6 text-base md:size-[33px] md:text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
