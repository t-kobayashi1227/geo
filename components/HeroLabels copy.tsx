"use client";

import { useState } from "react";

const DESCRIPTION = "今後説明文を追加します";

const labels = [
  { id: "kobutsu", label: "鉱物資源", x: 6, y: 32 },
  { id: "dam", label: "ダム", x: 25, y: 26 },
  { id: "douro-bou", label: "道路防災点検", x: 36, y: 25 },
  { id: "shamen", label: "斜面防災", x: 42, y: 20 },
  { id: "kazan", label: "火山防災", x: 46, y: 9 },
  { id: "dosya", label: "土砂災害", x: 50, y: 24 },
  { id: "saisei", label: "再生可能エネルギー", x: 64, y: 29 },
  { id: "tunnel", label: "トンネル", x: 72, y: 23 },
  { id: "kiridome", label: "切土", x: 90, y: 26 },
  { id: "tameike", label: "ため池点検", x: 82, y: 37 },
  { id: "douro-mori", label: "道路・盛土", x: 70, y: 48 },
  { id: "jisuberi", label: "地すべり施設点検", x: 52, y: 43 },
  { id: "yoheki", label: "擁壁", x: 32, y: 39 },
  { id: "katsudan", label: "活断層", x: 27, y: 45 },
  { id: "kuko", label: "空港", x: 16, y: 58 },
  { id: "hazard", label: "ハザードマップ", x: 38, y: 48 },
  { id: "kyoryo", label: "橋梁", x: 43, y: 63 },
  { id: "kasen", label: "河川", x: 42, y: 74 },
  { id: "chikasui-o", label: "地下水汚染", x: 38, y: 78 },
  { id: "koman", label: "港湾", x: 20.5, y: 81.5 },
  { id: "chikasui-r", label: "地下水利用・土壌汚染対策", x: 35, y: 90 },
  { id: "ekijoka", label: "地盤の液状化", x: 66, y: 90 },
  { id: "jutaku", label: "住宅", x: 72.5, y: 77.5 },
  { id: "daikibo", label: "大規模建築物", x: 78, y: 56 },
  { id: "kosou", label: "高層建築物", x: 93, y: 73 },
  { id: "kankyo", label: "環境・地下水保全", x: 92, y: 53.5 },
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
            className="cursor-pointer whitespace-nowrap rounded-full border-[clamp(2px,0.2vw,4px)] border-white bg-[#eba371] px-3 py-1 text-xs font-bold text-white shadow-sm [transform:rotateY(0deg)] transition-transform duration-500 hover:[transform:rotateY(360deg)] md:text-[clamp(10px,1.1vw,18px)]"
          >
            {item.label}
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
