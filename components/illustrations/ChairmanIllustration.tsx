export function ChairmanIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[247/245] ${className}`} aria-hidden="true">
      <div className="absolute inset-[49.97%_0.12%_0_0.12%]">
        <div className="absolute inset-[-0.41%_-0.2%_-0.16%_-0.2%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="block size-full max-w-none" src="/images/illustrations/chairman-clothes.svg" />
        </div>
      </div>
      <div className="absolute inset-[11.63%_37.56%_34.64%_28.11%]">
        <div className="absolute inset-[-0.38%_-0.59%_-0.41%_-0.59%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="block size-full max-w-none" src="/images/illustrations/chairman-head.svg" />
        </div>
      </div>
      <div className="absolute inset-[0.12%_35.07%_61.87%_24.16%]">
        <div className="absolute inset-[-0.54%_-0.5%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="block size-full max-w-none" src="/images/illustrations/chairman-arm.svg" />
        </div>
      </div>
      <div className="absolute inset-[23.96%_32.95%_48.09%_25.06%]">
        <div className="absolute inset-[0_-0.48%_-0.73%_-0.48%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="block size-full max-w-none" src="/images/illustrations/chairman-hand.svg" />
        </div>
      </div>
    </div>
  );
}
