import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-brand-brown pt-12 pb-10 text-white md:pt-12 md:pb-12">
      <a
        href="#top"
        aria-label="ページトップへ戻る"
        className="absolute -top-6 left-1/2 size-12 -translate-x-1/2 transition-opacity hover:opacity-80 md:left-auto md:right-10 md:top-0 md:size-[66px] md:-translate-x-0 md:-translate-y-1/2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="size-full" src="/images/decorative/back-to-top.svg" />
      </a>

      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-4 text-center md:flex-row md:items-center md:justify-between md:px-10 md:text-left">
        <div className="space-y-1 text-xs leading-relaxed md:text-base">
          <p className="text-sm font-light md:text-2xl">
            <span className="mr-2 text-xs md:text-base">一般社団法人</span>
            新潟県地質調査業協会
          </p>
          <p className="font-light">〒951-8051　新潟市中央区新島町通1ノ町1977番地2 ロイヤル礎406</p>
          <p className="font-light">TEL（025）225-8360　FAX（025）225-8361</p>
        </div>

        <Link href="/contact" className="flex flex-col items-center gap-2 text-sm md:text-base">
          <span className="flex h-[43px] w-[65px] items-center justify-center rounded-[10px] border-2 border-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="h-[7px] w-[31px]" src="/images/decorative/contact-arrow.svg" />
          </span>
          お問い合わせ
        </Link>
      </div>
    </footer>
  );
}
