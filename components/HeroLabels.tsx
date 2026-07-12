"use client";

import Image from "next/image";
import { useState } from "react";

type ImageLabel = {
  id: string;
  label: string;
  x: number;
  y: number;
  image: string;
  imgWidth: number;
  imgHeight: number;
  size?: string;
  description: string;
};

const labels: ImageLabel[] = [
  {
    id: "kuko",
    label: "社会資本整備",
    x: 13,
    y: 52,
    image: "/images/illustrations/airport_transparent.png",
    imgWidth: 1500,
    imgHeight: 972,
    size: "15%",
    description: "道路・橋・ダム・河川・トンネル・鉄道・空港",
  },
  {
    id: "building",
    label: "住環境整備・都市開発",
    x: 82.5,
    y: 53,
    image: "/images/illustrations/building_transparent.png",
    imgWidth: 1373,
    imgHeight: 1120,
    size: "12%",
    description: "住宅・高層建築物・大規模建築物・鉄塔",
  },
  {
    id: "dosya",
    label: "地盤・斜面防災",
    x: 47.5,
    y: 31.5,
    image: "/images/illustrations/disaster_transparent.png",
    imgWidth: 1095,
    imgHeight: 1172,
    size: "10%",
    description: "土砂災害・液状化",
  },
  {
    id: "tunnel",
    label: "社会資本の維持管理・点検・長寿命化",
    x: 76.5,
    y: 30.5,
    image: "/images/illustrations/tunnel_transparent_padded50.png",
    imgWidth: 176,
    imgHeight: 252,
    size: "3.5%",
    description: "各種施設点検及び長寿命化検討",
  },
  {
    id: "mineral",
    label: "地下資源開発・学術調査等",
    x: 8.5,
    y: 27,
    image: "/images/illustrations/mineral_transparent_padded50.png",
    imgWidth: 176,
    imgHeight: 252,
    size: "3.5%",
    description: "石炭・石油・鉱物資源・地熱地中熱・地下空間を利用した資源開発・地震における活断層分野",
  },
  {
    id: "house",
    label: "地盤図・ハザードマップの作成",
    x: 56,
    y: 56.5,
    image: "/images/illustrations/house_transparent.png",
    imgWidth: 798,
    imgHeight: 594,
    size: "7.8%",
    description: "土砂災害危険区域マップ・液状化しやすさマップなど",
  },
  {
    id: "pollution",
    label: "環境保全",
    x: 39.9,
    y: 83,
    image: "/images/illustrations/pollution_transparent.png",
    imgWidth: 757,
    imgHeight: 344,
    size: "8%",
    description: "地下水汚染・土壌汚染等",
  },
];

export function HeroLabels() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeLabel = labels.find((l) => l.id === activeId);

  return (
    <div className="hidden md:contents">
      {labels.map((item) => (
        <div
          key={item.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 [perspective:400px]"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: item.size ?? "clamp(100px,11%,180px)",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveId(item.id)}
            className="block w-full cursor-pointer [transform:rotateY(0deg)] transition-transform duration-1200 hover:[transform:rotateY(360deg)]"
          >
            <Image
              src={item.image}
              alt={item.label}
              width={item.imgWidth}
              height={item.imgHeight}
              className="h-auto w-full"
              draggable={false}
            />
          </button>
        </div>
      ))}

      {activeLabel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 [animation:ov-fade_0.2s_ease-out]"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative flex w-full max-w-xl items-center gap-6 rounded-[28px] bg-white p-8 shadow-2xl [animation:item-in_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              aria-label="閉じる"
              className="absolute right-4 top-4 flex size-9 cursor-pointer items-center justify-center rounded-lg bg-[#3d9be0] text-white shadow-lg transition-transform hover:scale-110"
            >
              ✕
            </button>

            <div className="flex size-36 shrink-0 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-100 sm:size-44">
              <Image
                src={activeLabel.image}
                alt=""
                width={activeLabel.imgWidth}
                height={activeLabel.imgHeight}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold tracking-wide text-[#3d9be0] sm:text-2xl">
                {activeLabel.label}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-black">
                {activeLabel.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
