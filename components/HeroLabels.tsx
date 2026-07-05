"use client";

import Image from "next/image";
import { useState } from "react";

const DESCRIPTION = "今後説明文を追加します";

type ImageLabel = {
  id: string;
  label: string;
  x: number;
  y: number;
  image: string;
  imgWidth: number;
  imgHeight: number;
  size?: string;
};

const labels: ImageLabel[] = [
  {
    id: "kuko",
    label: "空港",
    x: 13,
    y: 52,
    image: "/images/illustrations/airport_transparent.png",
    imgWidth: 1500,
    imgHeight: 972,
    size: "15%",
  },
  {
    id: "building",
    label: "高層建築物・大規模建築物",
    x: 82.5,
    y: 53,
    image: "/images/illustrations/building_transparent.png",
    imgWidth: 1373,
    imgHeight: 1120,
    size: "12%",
  },
  {
    id: "dosya",
    label: "土砂災害",
    x: 47.5,
    y: 31.5,
    image: "/images/illustrations/disaster_transparent.png",
    imgWidth: 1095,
    imgHeight: 1172,
    size: "10%",
  },
  {
    id: "tunnel",
    label: "トンネル",
    x: 76.5,
    y: 30.5,
    image: "/images/illustrations/tunnel_transparent_padded50.png",
    imgWidth: 176,
    imgHeight: 252,
    size: "3.5%",
  },
  {
    id: "mineral",
    label: "鉱物資源",
    x: 8.5,
    y: 27,
    image: "/images/illustrations/mineral_transparent_padded50.png",
    imgWidth: 176,
    imgHeight: 252,
    size: "3.5%",
  },
  {
    id: "house",
    label: "住宅",
    x: 56,
    y: 56.5,
    image: "/images/illustrations/house_transparent.png",
    imgWidth: 798,
    imgHeight: 594,
    size: "7.8%",
  },
  {
    id: "pollution",
    label: "地下水汚染・土壌汚染",
    x: 39.9,
    y: 83,
    image: "/images/illustrations/pollution_transparent.png",
    imgWidth: 757,
    imgHeight: 344,
    size: "8%",
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setActiveId(null)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-orange-500">{activeLabel.label}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{DESCRIPTION}</p>
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="mt-5 w-full rounded-full bg-orange-400 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-500"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
