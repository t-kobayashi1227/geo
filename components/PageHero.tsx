import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  children,
  textTop = "10%",
  textLeft = "2rem",
}: {
  children?: ReactNode;
  textTop?: string;
  textLeft?: string;
}) {
  return (
    <section className="relative text-white">
      <div className="relative w-full">
        {/* タブレット以下 */}
        <Image
          src="/images/illustrations/20260629-1.jpg"
          alt=""
          width={10667}
          height={6000}
          className="block md:hidden h-auto w-full"
          priority
        />
        {/* デスクトップ */}
        <Image
          src="/images/illustrations/20260629.jpg"
          alt=""
          width={10667}
          height={6000}
          className="hidden md:block h-auto w-full"
          priority
        />
        <div className="absolute z-10 w-fit" style={{ top: textTop, left: textLeft }}>
          <p className="font-display text-3xl leading-tight sm:text-4xl md:text-[40px]">
            &ldquo;地球を探る&rdquo;
          </p>
          <p className="mt-4 text-base md:text-2xl">私たちは過去をみつめ未来を創造します。</p>
        </div>
        {children}
      </div>
    </section>
  );
}
