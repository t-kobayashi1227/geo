"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowCircle } from "./ArrowCircle";

const navItems = [
  { num: "01", label: "理事挨拶", en: "GREETING", href: "/greeting" },
  { num: "02", label: "事業内容・取り組み", en: "BUSINESS", href: "/business" },
  { num: "03", label: "組織・役員・委員会", en: "ORGANIZATION", href: "/organization" },
  { num: "04", label: "会員名簿", en: "MEMBERS", href: "/members" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 md:h-[86px] md:px-10">
        <Link href="/">
          <Image
            src="/images/illustrations/logo_geo.png"
            alt="新潟県地質調査業協会"
            width={1800}
            height={330}
            className="h-9 w-auto md:h-15"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 text-lg font-medium lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-70">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative flex size-[46px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-[14px] shadow-[0_3px_9px_rgba(61,155,224,0.4)] transition-colors duration-200 lg:hidden ${open ? "bg-[#3d9be0]" : "bg-[#5bb0ee]"
            }`}
        >
          <span
            className={`h-[2.5px] w-[22px] rounded-full bg-white transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""
              }`}
          />
          <span
            className={`h-[2.5px] w-[22px] rounded-full bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-[2.5px] w-[22px] rounded-full bg-white transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-x-0 top-[72px] bottom-0 z-40 flex flex-col overflow-y-auto bg-[linear-gradient(170deg,#eef7fe_0%,#dcecfb_100%)] lg:hidden md:top-[86px]"
          style={{ animation: "ov-fade 0.25s ease" }}
        >
          <div className="px-6 pb-4 pt-6">
            <p className="text-2xl font-display tracking-wide text-[#16202b]">&ldquo;地球を探る&rdquo;</p>
            <p className="mt-2 text-xs tracking-wide ">私たちは過去をみつめ未来を創造します。</p>
          </div>

          <nav className="px-6">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 border-b border-[rgba(61,155,224,0.2)] py-[17px]"
                style={{ animation: `item-in 0.3s ease backwards`, animationDelay: `${0.08 + i * 0.06}s` }}
              >
                <span className="w-[26px] text-sm font-bold text-[#5bb0ee]">{item.num}</span>
                <span className="flex-1">
                  <span className="block text-lg font-bold text-[#16202b]">{item.label}</span>
                  <span className="mt-0.5 block text-[9px] tracking-[2px] text-[#88a0b3]">{item.en}</span>
                </span>
                <span className="text-lg text-[#3d9be0]">→</span>
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-10 px-6 pb-8 pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex h-[50px] items-center justify-center gap-2 rounded-[14px] border-[1.5px] border-[#5bb0ee] bg-white text-sm font-bold text-[#3d9be0] shadow-[0_3px_10px_rgba(91,176,238,0.16)]"
            >
              <Image src="/images/illustrations/email.png" alt="" width={65} height={43} className="h-4 w-auto" />
              お問い合わせ
            </Link>
            <Link
              href="/recruit"
              onClick={() => setOpen(false)}
              className="flex h-16 items-center justify-between rounded-2xl bg-[#45BB00] px-[22px] shadow-[0_6px_16px_rgba(94,178,46,0.32)]"
            >
              <span>
                <span className="font-doodle block text-[11px] font-bold tracking-[3px] text-white/85">RECRUIT</span>
                <span className="mt-0.5 block text-sm font-bold text-white">地質エンジニアになりませんか？</span>
              </span>
              <ArrowCircle className="size-[30px]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
