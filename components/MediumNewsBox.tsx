
import React from "react";
import { NewsMarqueeVertical } from "./NewsMarqueeVerticle";

import LeftNewsCard from "./LeftNewsCard";





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
