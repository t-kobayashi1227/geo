import Image from "next/image";
import type { ReactNode } from "react";
import { HeroLabels } from "./HeroLabels";

export function Hero({
  showLabels = true,
  bottomGap = false,
  textTop = "10%",
  textLeft = "2rem",
  children,
}: {
  showLabels?: boolean;
  bottomGap?: boolean;
  textTop?: string;
  textLeft?: string;
  children?: ReactNode;
} = {}) {
  return (
    <div className={bottomGap ? "mb-[60px] md:mb-[64px]" : undefined}>
      <section className="relative text-white">
        <div className="relative w-full">
          <Image
            src="/images/illustrations/20260629-1.jpg"
            alt=""
            width={10667}
            height={6000}
            className="block md:hidden h-auto w-full"
            priority
          />
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
          {showLabels && <HeroLabels />}
          {children}
        </div>
      </section>
    </div>
  );
}
