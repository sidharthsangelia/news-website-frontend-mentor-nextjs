
import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <main className="h-[90vh] mt-5 flex">
      <div className=" w-[65%] h-[45vh] mr-5">
        <img src="/images/image-web-3-desktop.jpg" className="" alt="" />
        <div className="grid grid-cols-2 pt-5">
          <h1 className="text-6xl font-bold ">The bright future of Web 3.0?</h1>
          <div className="flex  flex-col items-start justify-center ml-2 space-y-5">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae nobis magni reiciendis harum enim quibusdam sunt,
              sequi soluta et accusantium?
            </p>
            <Button className="bg-[#fbbf24] cursor-pointer text-black font-semibold hover:bg-yellow-400 transition-colors px-6 py-2 rounded-lg shadow-md">
              Click to read more
            </Button>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="bg-[#0a0a23] w-full md:w-[35%] p-6 text-white space-y-6">
        <h1 className="text-3xl font-bold text-[#fbbf24]">New</h1>

        <div className="space-y-6 divide-y divide-gray-700">
          {[
            {
              title: "Hydrogen Vs Electric Cars",
              desc: "Will hydrogen cars ever catch up to EVs?",
            },
            {
              title: "The Downsides of AI Artistry",
              desc: "What are the possible adverse effects of AI-generated art?",
            },
            {
              title: "Is VC Funding Drying Up?",
              desc: "Private funding by VC firms is down 50% YOY.",
            },
            {
              title: "The Downsides of AI Artistry",
              desc: "What are the possible adverse effects of AI-generated art?",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="pt-6 first:pt-0 group cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <h2 className="text-lg font-semibold text-gray-100 group-hover:text-[#fbbf24] transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Hero;
