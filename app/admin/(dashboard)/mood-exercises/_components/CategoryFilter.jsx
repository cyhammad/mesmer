import React from "react";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex justify-start gap-4 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onCategoryChange(cat.name)}
              className={`flex min-w-fit h-[38px] items-center gap-2 px-4 py-2 rounded-[12px] border text-[15px] font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-[#F3E8FF] border-[#8F00FF] text-[#8F00FF]"
                  : "bg-white border-gray-200 text-black hover:border-gray-300"
              }`}
            >
              {cat.name}
              <span
                className={`flex items-center justify-center min-w-[25px] h-[25px] rounded-md text-[14px] font-medium ${
                  isActive ? "bg-[#8F00FF] text-white" : " text-black"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
