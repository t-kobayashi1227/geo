import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowCircle } from "./ArrowCircle";

const defaultHeading = (
  <>
    さまざまな分野で活躍する
    <br />
    <span className="text-lg md:text-[40px]">地質エンジニアになりませんか？</span>
  </>
);

export function RecruitSection({
  heading = defaultHeading,
  href = "/recruit",
}: {
  heading?: ReactNode;
  href?: string;
}) {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <Link
          href={href}
          className="block rounded-[24px] bg-brand-green px-6 py-8 text-center text-white transition-opacity hover:opacity-90 md:rounded-[44px] md:px-12 md:py-14"
        >
          <p className="font-doodle text-xl tracking-wide md:text-[32px]">RECRUIT</p>
          <p className="mt-3 text-lg font-bold leading-snug md:mt-4 md:text-[32px]">{heading}</p>
          <p className="mt-3 text-sm font-bold md:mt-6 md:text-xl">担い手育成・キャリア支援</p>
          <div className="mt-4 flex justify-center md:mt-8">
            <ArrowCircle />
          </div>
        </Link>
      </div>
    </section>
  );
}
