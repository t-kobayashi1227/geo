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
    x: 10,
    y: 55,
    image: "/images/illustrations/airport_transparent.png",
    imgWidth: 1500,
    imgHeight: 972,

  },
  {
    id: "building",
    label: "高層建築物・大規模建築物",
    x: 79,
    y: 47,
    image: "/images/illustrations/building_transparent.png",
    imgWidth: 1373,
    imgHeight: 1120,
    size: "clamp(110px,12vw,200px)",
  },
  {
    id: "dosya",
    label: "土砂災害",
    x: 50,
    y: 25,
    image: "/images/illustrations/disaster_transparent.png",
    imgWidth: 1095,
    imgHeight: 1172,
    size: "clamp(90px,9vw,150px)",
  },
  {
    id: "tunnel",
    label: "トンネル",
    x: 73,
    y: 23,
    image: "/images/illustrations/tunnel_transparent.png",
    imgWidth: 176,
    imgHeight: 252,
    size: "clamp(35px,3.5vw,60px)",
  },
  {
    id: "mineral",
    label: "鉱物資源",
    x: 27,
    y: 29,
    image: "/images/illustrations/mineral_transparent.png",
    imgWidth: 176,
    imgHeight: 252,
    size: "clamp(35px,3.5vw,60px)",
  },
  {
    id: "house",
    label: "住宅",
    x: 50,
    y: 52,
    image: "/images/illustrations/house_transparent.png",
    imgWidth: 798,
    imgHeight: 594,
    size: "clamp(90px,9vw,150px)",
  },
  {
    id: "pollution",
    label: "地下水汚染・土壌汚染",
    x: 57,
    y: 64,
    image: "/images/illustrations/pollution_transparent.png",
    imgWidth: 757,
    imgHeight: 344,
    size: "clamp(90px,9vw,150px)",
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
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
        >
          <button
            type="button"
            onClick={() => setActiveId(item.id)}
            className="block cursor-pointer [transform:rotateY(0deg)] transition-transform duration-500 hover:[transform:rotateY(360deg)]"
            style={{ width: item.size ?? "clamp(100px,11vw,180px)" }}
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
