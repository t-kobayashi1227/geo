import Image from "next/image";
import type { ReactNode } from "react";
import { HeroLabels } from "./HeroLabels";

export function Hero({
  showLabels = true,
  bottomGap = false,
  children,
}: {
  showLabels?: boolean;
  bottomGap?: boolean;
  children?: ReactNode;
} = {}) {
  return (
    <div className={bottomGap ? "mb-[60px] md:mb-[64px]" : undefined}>
      <section className="relative text-white">
        <div className="bg-[#52a6f9] px-5 py-4 text-left md:px-[5%] md:pt-10 md:pb-5">
          <p className="font-display text-lg leading-tight md:text-3xl lg:text-[40px]">
            &ldquo;地球を探る&rdquo;
          </p>
          <p className="text-sm md:text-xl lg:text-2xl">私たちは過去をみつめ未来を創造します。</p>
        </div>
        <div className="relative w-full">
          <Image
            src="/images/illustrations/top_Mobile7.jpg"
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
          {showLabels && <HeroLabels />}
          {children}
        </div>
      </section>
    </div>
  );
}
