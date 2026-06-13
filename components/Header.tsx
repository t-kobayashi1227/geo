"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "理事挨拶", href: "/greeting" },
  { label: "事業内容・取り組み", href: "/business" },
  { label: "組織・役員・委員会", href: "/organization" },
  { label: "会員名簿", href: "/members" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-background">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 md:h-[86px] md:px-10">
        <Link href="/" className="text-base font-bold md:text-2xl">
          ロゴが入ります
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium md:flex lg:gap-10 lg:text-lg">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-70">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-8 flex-col items-center justify-center gap-[7px] md:hidden"
        >
          <span
            className={`h-1 w-7 rounded-full bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-1 w-7 rounded-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-1 w-7 rounded-full bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-background px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
