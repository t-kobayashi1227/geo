import Image from "next/image";
import type { ReactNode } from "react";
import { HeroLabels } from "./HeroLabels";

export function Hero({
  showLabels = true,
  bottomGap = false,
  textTop = "7%",
  textLeft = "8%",
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
            src="/images/illustrations/top_Mobile6.jpg"
            alt=""
            width={10667}
            height={6000}
            className="block md:hidden h-auto w-full"
            priority
          />
          <Image
            src="/images/illustrations/top_PC.png"
            alt=""
            width={10667}
            height={6000}
            className="hidden md:block h-auto w-full"
            priority
          />
          <div
            className="absolute inset-x-0 z-10 text-center md:inset-x-auto md:w-fit md:px-0 md:text-left md:[left:var(--hero-left)]"
            style={{ top: textTop, "--hero-left": textLeft } as React.CSSProperties}
          >
            <p className="font-display text-[24px] leading-tight sm:text-3xl lg:text-[40px] [-webkit-text-stroke:2px_black] [paint-order:stroke_fill]">
              &ldquo;地球を探る&rdquo;
            </p>
            <p className="text-[15px] text-base md:text-xl lg:text-2xl [-webkit-text-stroke:2px_black] [paint-order:stroke_fill]">私たちは過去をみつめ未来を創造します。</p>
          </div>
          {showLabels && <HeroLabels />}
          {children}
        </div>
      </section>
    </div>
  );
}
