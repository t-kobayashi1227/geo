import Link from "next/link";
import { ArrowCircle } from "./ArrowCircle";

const allLinks = [
  { title: "理事挨拶", href: "/greeting" },
  { title: "事業内容・取り組み", href: "/business" },
  { title: "組織・役員・委員会", href: "/organization" },
  { title: "会員名簿", href: "/members" },
];

export function AssociationLinks({ current }: { current?: string }) {
  const links = allLinks.filter((link) => link.href !== current);

  return (
    <div className="mx-auto grid max-w-[270px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 md:max-w-[820px]">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex flex-col items-center gap-2 rounded-[20px] bg-brand-blue px-4 py-6 text-center transition-opacity hover:opacity-90 md:gap-4 md:rounded-[32px] md:py-10"
        >
          <span className="text-sm font-medium md:text-xl">{link.title}</span>
          <ArrowCircle className="size-6 text-base md:size-[33px] md:text-2xl" />
        </Link>
      ))}
    </div>
  );
}
