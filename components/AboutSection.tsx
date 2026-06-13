export function AboutSection() {
  return (
    <section className="relative -mt-10 overflow-hidden rounded-t-[40px] bg-brand-brown pt-16 pb-16 text-white md:-mt-16 md:rounded-t-[61px] md:pt-24 md:pb-24">
      <div className="pointer-events-none absolute left-1/2 top-0 w-[55%] max-w-[700px] -translate-x-1/2 -translate-y-[55%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="w-full rotate-180" src="/images/decorative/wave-divider.svg" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="relative z-10 mx-auto mb-8 w-[160px] sm:w-[200px] md:absolute md:left-0 md:top-0 md:mx-0 md:mb-0 md:w-[250px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="w-full" src="/images/decorative/speech-bubble.svg" />
          <div className="absolute inset-0 flex flex-col items-center justify-center pb-3 text-center font-bold leading-snug">
            <p className="text-lg sm:text-2xl md:text-3xl">実は</p>
            <p className="text-lg sm:text-2xl md:text-3xl">とっても大切！</p>
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold md:text-5xl">地質調査って何？</h2>

        <div className="mx-auto mt-6 max-w-3xl space-y-6 text-center text-base leading-loose md:mt-10 md:text-2xl">
          <p>
            地質調査は住宅やビルなどの建築構造物、
            <br />
            道路や堤防などの土木構造物を造る時に地中内部の
            <br className="hidden md:block" />
            性質(物理的、化学的、力学的など)を
            <br />
            把握するために実施します。
          </p>
          <p>
            この調査を行うことにより安全で安心な
            <br />
            構造物を造ることや、自然斜面の安定性
            <br className="hidden md:block" />
            （地盤が強いのか弱いのか）を知ることができます。
          </p>
        </div>
      </div>
    </section>
  );
}
