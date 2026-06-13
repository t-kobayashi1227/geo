export function ResearchIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[217/231] ${className}`} aria-hidden="true">
      <div className="absolute inset-[0.12%_0.13%_0.12%_13.39%]">
        <div className="absolute inset-[-0.22%_-0.27%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="block size-full max-w-none" src="/images/illustrations/research-loupe.svg" />
        </div>
      </div>
      <div className="absolute inset-[46.39%_54.01%_18.42%_0.13%]">
        <div className="absolute inset-[-0.63%_-0.5%_-0.61%_-0.53%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="block size-full max-w-none" src="/images/illustrations/research-rock.svg" />
        </div>
      </div>
    </div>
  );
}
