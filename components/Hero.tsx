export function Hero() {
  return (
    <section className="bg-brand-gray text-white">
      <div className="mx-auto max-w-[1280px] px-4 pt-10 pb-24 md:px-10 md:pt-14 md:pb-40">
        <p className="font-display text-3xl leading-tight sm:text-4xl md:text-[40px]">
          &ldquo;地球を探る&rdquo;
        </p>
        <p className="mt-4 max-w-xl text-base md:text-2xl">私たちは過去をみつめ未来を創造します。</p>

        <div className="mt-16 text-center md:mt-24">
          <p className="text-3xl sm:text-5xl md:text-[64px]">イラストが入ります</p>
          <p className="mt-4 text-lg leading-snug md:text-[36px]">
            ※イラストデザインに合わせて
            <br />
            背景色を調整します。
          </p>
        </div>
      </div>
    </section>
  );
}
