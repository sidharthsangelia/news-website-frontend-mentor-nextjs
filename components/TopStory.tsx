import React from "react";
import topStories from "@/data/TopStoriesData";

function TopStory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
  {topStories.map((story) => (
    <div
      key={story.id}
      className="flex items-stretch gap-4 hover:scale-[1.015] transition-transform duration-200 ease-in-out"
    >
      <div className="min-w-[100px]">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover rounded-md shadow-sm"
        />
      </div>

      <div className="flex flex-col justify-between p-1 h-full hover:text-amber-500 transition-colors cursor-pointer">
        <h1 className="text-3xl font-extrabold text-black ">{story.id}</h1>
        <p className="text-lg font-semibold text-gray-900 hover:text-amber-500 transition-colors ">{story.title}</p>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
          {story.description}
        </p>
      </div>
    </div>
  ))}
</div>

  );
}

export default TopStory;
