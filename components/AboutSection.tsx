import Image from "next/image";

export function AboutSection() {
  return (
    <section className="relative -mt-15 overflow-hidden bg-brand-brown pt-16 pb-16 text-white 
        mt-[-70px] rounded-[20px] pt-12 pb-24 [clip-path:polygon(0_0,20%_0,50%_2%,80%_0,100%_0,100%_100%,0_100%)] 
        md:mt-[-90px] md:rounded-[30px] md:pt-12 md:pb-24 md:[clip-path:polygon(0_0,20%_0,50%_20px,80%_0,100%_0,100%_100%,0_100%)] 
        lg:mt-[-100px] lg:rounded-[40px] lg:pt-24 lg:[clip-path:polygon(0_0,20%_0,50%_3%,80%_0,100%_0,100%_100%,0_100%)]
        xl:mt-[-115px] xl:rounded-[50px] xl:pt-36 xl:[clip-path:polygon(0_0,20%_0,50%_4%,80%_0,100%_0,100%_100%,0_100%)]
        ">

      <div className="relative mx-auto flex max-w-[1280px] flex-col px-4 md:px-10 mt-10">
        <div className="absolute z-10 mx-auto mb-8 w-[160px] sm:w-[200px] md:w-[220px] lg:left-[calc(50%-380px)] lg:top-[-28px] lg:mx-0 lg:mb-0 lg:w-[250px]">
          <Image
            alt=""
            className="w-full"
            src="/images/decorative/Vector1.png"
            width={251}
            height={224}
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center pb-8 text-center font-bold leading-snug">
            <p className="text-lg sm:text-2xl md:text-3xl">実は</p>
            <p className="text-lg sm:text-2xl md:text-3xl">とっても</p>
            <p className="text-lg sm:text-2xl md:text-3xl">大切！</p>
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold md:text-5xl mt-[145px]">地質調査って何？</h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-6 text-center text-base leading-loose md:mt-10 md:text-3xl font-bold">
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
