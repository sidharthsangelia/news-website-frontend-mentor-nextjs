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
          <p className="text-sm text-gray-500 mt-1">
            <span className="inline-flex items-center gap-1">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 15c2.486 0 4.805.676 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {author}
            </span>
            &nbsp;&middot;&nbsp;{date}
          </p>
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
