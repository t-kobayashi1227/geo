"use client";

import { useState } from "react";
import { ArrowCircle } from "./ArrowCircle";

const inputClass =
  "h-[52px] w-full rounded-[12px] border-[1.5px] border-[#cfe2f2] bg-white px-4 text-sm text-[#16202b] outline-none focus:border-[#3d9be0] focus:shadow-[0_0_0_3px_rgba(61,155,224,0.15)] md:text-[15px]";

function RequiredBadge() {
  return (
    <span className="rounded-full bg-[#e0584f] px-[9px] py-[2px] text-[10px] font-bold text-white">必須</span>
  );
}

function OptionalBadge() {
  return (
    <span className="rounded-full bg-[#e2ebf2] px-[9px] py-[2px] text-[10px] font-bold text-[#7a8896]">任意</span>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[16px] border-[1.5px] border-[#cfe2f2] bg-white px-6 py-16 text-center">
        <p className="text-base font-bold text-[#16202b] md:text-lg">お問い合わせを受け付けました。</p>
        <p className="mt-3 text-sm text-[#46607a] md:text-base">
          ご入力いただいた内容を確認のうえ、担当者よりご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#16202b]">
            お名前 <RequiredBadge />
          </label>
          <input required name="name" placeholder="例：新潟 太郎" className={inputClass} />
        </div>

        <div>
          <label className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#16202b]">
            組織・所属名 <OptionalBadge />
          </label>
          <input name="organization" placeholder="例：〇〇株式会社" className={inputClass} />
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#16202b]">
          メールアドレス <RequiredBadge />
        </label>
        <input required type="email" name="email" placeholder="例：info@example.com" className={inputClass} />
      </div>

      <div className="mt-6">
        <label className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#16202b]">
          お問い合わせ内容 <RequiredBadge />
        </label>
        <textarea
          required
          name="message"
          placeholder="お問い合わせ内容をご記入ください。"
          className="h-[160px] w-full resize-none rounded-[12px] border-[1.5px] border-[#cfe2f2] bg-white px-4 py-[15px] text-sm leading-relaxed text-[#16202b] outline-none focus:border-[#3d9be0] focus:shadow-[0_0_0_3px_rgba(61,155,224,0.15)] md:text-[15px]"
        />
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-[#88a0b3]">
        ご入力いただいた個人情報は、お問い合わせへの対応のみに利用し、適切に管理いたします。
      </p>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="flex h-[58px] w-full max-w-[300px] items-center justify-center gap-2.5 rounded-[16px] bg-[linear-gradient(135deg,#3d9be0,#5bb0ee)] text-base font-bold text-white shadow-[0_6px_16px_rgba(61,155,224,0.34)] transition-opacity hover:opacity-90"
        >
          送信する
          <ArrowCircle className="size-[26px] text-base" />
        </button>
      </div>
    </form>
  );
}
