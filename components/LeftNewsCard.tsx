import React from "react";

interface NewsCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

const LeftNewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  author,
  date,
  description,
}) => {
  return (
    <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 max-w-4xl hover:shadow-md transition">
      {/* Left image */}
      <img
        src={image}
        alt={title}
        className="w-60 h-auto object-cover"
      />

      {/* Right content */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <h2 className="text-xl font-bold text-gray-800 leading-tight">
            {title}
          </h2>
         
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        <button className="mt-3 w-max px-4 py-1 text-sm border border-teal-600 text-teal-700 rounded hover:bg-teal-50 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default LeftNewsCard;
