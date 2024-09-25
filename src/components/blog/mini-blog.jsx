import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

const MiniBlog = ({ articles }) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`); 
  };

  return (
    <div className="flex flex-col space-y-6 bg-[#272933]">
      {articles.map((article) => (
        <div
          key={article.id}
          className="flex flex-col md:flex-row p-6 rounded-lg"
        >
          <div className="w-full md:w-1/3">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-lg mb-4 md:mb-0"
            />
          </div>
          <div className="md:ml-6 flex flex-col justify-between w-full">
            <div>
              <h2 className="text-lg md:text-2xl font-bold">{article.title}</h2>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                {article.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500 text-xs md:text-sm">{article.date}</p>
              <button
                onClick={() => handleReadMore(article.id)} 
                className="p-2 bg-gray-700 rounded-full transition-transform duration-300 ease-in-out hover:translate-x-2"
              >
                <span className="sr-only">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniBlog;
