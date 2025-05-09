// components/NewsMarqueeVertical.tsx
"use client";


import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const headlines = [
  {
    id: 1,
    title: "India logs record monsoon rainfall in two decades",
    summary: "IMD reports highest rainfall in 20 years, triggering floods in multiple states.",
  },
  {
    id: 2,
    title: "RBI likely to keep repo rate unchanged",
    summary: "With inflation under control, analysts expect status quo in upcoming policy.",
  },
  {
    id: 3,
    title: "NASA's Artemis mission delayed to 2026",
    summary: "Technical glitches force another delay in Moon return program.",
  },
  {
    id: 4,
    title: "Stock markets end flat amid global uncertainty",
    summary: "Sensex and Nifty closed marginally higher as investors await US inflation data.",
  },
];

const firstHalf = headlines.slice(0, Math.ceil(headlines.length / 2));
const secondHalf = headlines.slice(Math.ceil(headlines.length / 2));

const HeadlineCard = ({
    title,
    summary,
  }: {
    title: string;
    summary: string;
  }) => {
    return (
      <div
        className={cn(
          "w-full max-w-sm", // ensures it never overflows the parent
          "cursor-pointer p-4 rounded-xl border border-gray-300 dark:border-gray-700",
          "bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800",
          "transition-shadow shadow-sm hover:shadow-md", // sleek hover effect
          "mb-3"
        )}
      >
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-snug">
          {summary}
        </p>
      </div>
    );
  };
  

export function NewsMarqueeVertical() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:25s]">
        {firstHalf.map((item) => (
          <HeadlineCard key={item.id} {...item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
        {secondHalf.map((item) => (
          <HeadlineCard key={item.id} {...item} />
        ))}
      </Marquee>

      {/* Top and bottom fade overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white dark:from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
    </div>
  );
}
