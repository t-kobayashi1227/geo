"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa6";

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

// スマホの横スクロールを「1弾↔8弾」でループさせるため、両端に1枚ずつ複製を差し込む。
// 例: [8(複製), 1, 2, ..., 8, 1(複製)] とすることで、常に実データの動画が左右に隣接して見える。
const extendedVideos = [videos[videos.length - 1], ...videos, videos[0]];

const SETTLE_DELAY = 120;

function getYoutubeVideoId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([^?&]+)/);
  return match?.[1];
}

export function VideoSection() {
  const [playingNo, setPlayingNo] = useState<string | null>(null);
  // extendedVideos 上のインデックス。1〜8 が実データ、0 と 9 が複製（先頭・末尾用）。
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const settleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = videos.length;

  const getSlideStep = () => {
    const slider = sliderRef.current;
    const slide = slider?.children[0] as HTMLElement | undefined;
    if (!slider || !slide) return 0;
    const gap = parseFloat(getComputedStyle(slider).columnGap || "0");
    return slide.offsetWidth + gap;
  };

  const scrollToExtendedIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    const slider = sliderRef.current;
    const step = getSlideStep();
    if (!slider || !step) return;
    slider.scrollTo({ left: index * step, behavior });
  };

  useEffect(() => {
    scrollToExtendedIndex(1, "auto");
    return () => {
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const slider = sliderRef.current;
    const step = getSlideStep();
    if (!slider || !step) return;
    const rawIndex = Math.round(slider.scrollLeft / step);
    setActiveIndex(rawIndex);

    if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    settleTimeoutRef.current = setTimeout(() => {
      // スクロールが複製スライドで止まったら、見た目を変えずに実データ側へ瞬間移動しておく。
      if (rawIndex === 0) {
        setActiveIndex(total);
        scrollToExtendedIndex(total, "auto");
      } else if (rawIndex === total + 1) {
        setActiveIndex(1);
        scrollToExtendedIndex(1, "auto");
      }
    }, SETTLE_DELAY);
  };

  const goToStep = (direction: 1 | -1) => {
    scrollToExtendedIndex(activeIndex + direction);
  };

  const goToRealIndex = (realIndex: number) => {
    scrollToExtendedIndex(realIndex + 1);
  };

  const realActiveIndex = ((activeIndex - 1) % total + total) % total;

  return (
    <section className="bg-background pb-14 md:pb-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <h2 className="text-2xl font-bold md:text-[32px]">地質調査の世界へようこそ</h2>
        </div>

        <div className="relative mt-10 md:mx-auto md:max-w-[1120px]">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[11vw] [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:[scrollbar-width:auto] [&::-webkit-scrollbar]:hidden"
          >
            {extendedVideos.map((video, i) => {
              const videoId = getYoutubeVideoId(video.href);
              const isPlaying = playingNo === video.no;
              const isClone = i === 0 || i === extendedVideos.length - 1;
              return (
                <div
                  key={`${video.no}-${i}`}
                  aria-hidden={isClone}
                  className={`group flex w-[78vw] shrink-0 snap-center flex-col overflow-hidden rounded-sm border border-black/10 bg-white transition-opacity hover:opacity-90 md:w-auto md:shrink ${
                    isClone ? "md:hidden" : ""
                  }`}
                >
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-brand-gray">
                    {isPlaying && videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 size-full"
                      />
                    ) : (
                      <button
                        type="button"
                        tabIndex={isClone ? -1 : undefined}
                        onClick={() => setPlayingNo(video.no)}
                        className="absolute inset-0 flex size-full items-center justify-center"
                        aria-label={`${video.title} を再生`}
                      >
                        {videoId && (
                          <Image
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt=""
                            fill
                            sizes="(min-width: 768px) 270px, 78vw"
                            className="object-cover"
                          />
                        )}
                        <span className="relative flex size-10 items-center justify-center rounded-full bg-[#2c3e4d]/85 text-white transition-transform group-hover:scale-110 md:size-12">
                          <FaPlay className="ml-0.5 text-base md:text-lg" />
                        </span>
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 px-3 py-2.5 md:gap-1.5 md:px-4 md:py-3">
                    <span className="-ml-1.5 text-[11px] font-bold text-[#B5603F] md:text-xs">【第{video.no}弾】</span>
                    <p className="text-xs font-medium leading-snug text-foreground md:text-sm">
                      {video.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => goToStep(-1)}
            aria-label="前の動画"
            className="absolute left-1 top-[38%] flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md md:hidden"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            type="button"
            onClick={() => goToStep(1)}
            aria-label="次の動画"
            className="absolute right-1 top-[38%] flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md md:hidden"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {videos.map((video, index) => (
            <button
              key={video.no}
              type="button"
              onClick={() => goToRealIndex(index)}
              aria-label={`${index + 1}枚目のスライドを表示`}
              className={`size-2 rounded-full transition-colors ${
                index === realActiveIndex ? "bg-brand-blue" : "bg-brand-gray/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
