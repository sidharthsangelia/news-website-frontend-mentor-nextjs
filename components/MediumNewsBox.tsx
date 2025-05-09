// components/MediumNewsBox.tsx
import React from "react";
import { NewsMarqueeVertical } from "./NewsMarqueeVerticle";
import { cn } from "@/lib/utils";
import LeftNewsCard from "./LeftNewsCard";

const newsItems = [
  {
    thumbnail: "https://source.unsplash.com/400x300/?news",
    title: "India logs record monsoon rainfall in two decades",
    description:
      "IMD reports highest rainfall in 20 years, triggering floods in multiple states.",
  },
  {
    thumbnail: "https://source.unsplash.com/400x300/?finance",
    title: "RBI likely to keep repo rate unchanged",
    description:
      "With inflation under control, analysts expect status quo in upcoming policy.",
  },
];

const NewsCard = ({
  thumbnail,
  title,
  description,
}: {
  thumbnail: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-4xl items-start gap-4 rounded-xl border p-4",
        "border-gray-300 dark:border-gray-700",
        "bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800",
        "transition-shadow shadow-sm hover:shadow-md"
      )}
    >
      <img
        src={thumbnail}
        alt={title}
        className="h-28 w-40 object-cover rounded-lg"
      />

      <div className="flex flex-col">
        <h2 className="text-base font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};



function MediumNewsBox() {
  return (
    <main className=" grid grid-cols-[70%_30%] ">
      {/* Left Side - Featured News */}
      <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
      <LeftNewsCard
        image="/images/image-web-3-desktop.jpg"
        title="The strongest and sweetest songs yet remain to be sung"
        author="Awa Melvine"
        date="Mar 11, 2019"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem optio possimus a inventore maxime laborum."
      />
      <LeftNewsCard
        image="/images/climate-summit.jpg"
        title="Another inspiring headline goes here"
        author="John Doe"
        date="Apr 5, 2024"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      />
    </div>
      {/* Right Side - Vertical Marquee */}

      <div className="border-l border-gray-300 pl-2">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          🔥 Latest Headlines
        </h2>
        <NewsMarqueeVertical />
      </div>
    </main>
  );
}

export default MediumNewsBox;
