import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

const videos = [
  { no: "1", title: "社会を守るジオ・アドバイザー地質調査技術者", href: "https://youtu.be/IkVjAKpbyUU?si=BsQ9RyXghLSWeQwy" },
  { no: "2", title: "災害大国日本を知ろう！！日本の国土は脆弱です", href: "https://youtu.be/b5jeA28TxOQ?si=WP2ZsQSnpxcEPIpW" },
  { no: "3", title: "災害大国に暮らしているからこそ「地質リスク」をよく知ろう", href: "https://youtu.be/Up0hHmDRbiI?si=d39sdRwOXm_I3E2h" },
  { no: "4", title: "地質調査は「インフラのインフラ」なんだ！", href: "https://youtu.be/whZd_UBuZj4?si=BFxpaBs_oAB2K4y3" },
  { no: "5", title: "構造物と軟弱地盤", href: "https://youtu.be/62ytcoXvYA0?si=wRX2VOlTk3XKM1OX" },
  { no: "6", title: "「動く大地」地すべりとの上手つきあい方", href: "https://youtu.be/gfC11euEQm8?si=zOoCq3tzCw7ALES8" },
  { no: "7", title: "白クマを救え！再生可能エネルギーとは？", href: "https://youtu.be/j_qXkKJ-YWw?si=qcsjAwAKuY01BcyO" },
  { no: "8", title: "～想像力の世界～地学について知ろう！", href: "https://youtu.be/Mc0eB-DtZIg?si=VvnHT1-4SqzOGTho" },
];

function getYoutubeVideoId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([^?&]+)/);
  return match?.[1];
}

export function VideoSection() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <h2 className="text-2xl font-bold md:text-[32px]">地質調査の世界へようこそ</h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 mt-10 md:mt-16 md:gap-x-10 md:gap-y-8">
          {videos.map((video) => {
            const videoId = getYoutubeVideoId(video.href);
            return (
              <Link
                key={video.no}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 md:gap-3"
              >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[12px] bg-brand-gray md:rounded-[16px]">
                  {videoId && (
                    <Image
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt=""
                      fill
                      sizes="(min-width: 896px) 440px, 50vw"
                      className="object-cover"
                    />
                  )}
                  <span className="relative flex size-10 items-center justify-center rounded-full bg-white/90 text-brand-gray transition-transform group-hover:scale-110 md:size-14">
                    <FaPlay className="ml-0.5 text-base md:text-xl" />
                  </span>
                </div>
                <p className="text-xs leading-snug md:text-base">
                  <span className="font-bold">【第{video.no}弾】</span>
                  {video.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
