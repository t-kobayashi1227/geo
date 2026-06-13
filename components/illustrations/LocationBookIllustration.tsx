export function LocationBookIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[297/176] ${className}`} aria-hidden="true">
      <div className="absolute inset-[0.21%_0.14%_0.21%_0.12%]">
        <div className="absolute inset-[-0.29%_-0.17%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="block size-full max-w-none" src="/images/illustrations/locationbook-base.svg" />
        </div>
      </div>
      <div className="absolute inset-[13.14%_0.12%_17.48%_9.02%]">
        <div className="absolute inset-[0_-0.19%_0_0]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="block size-full max-w-none" src="/images/illustrations/locationbook-pin.svg" />
        </div>
      </div>
    </div>
  );
}
