import React from "react";

const PageHeader = ({ title, subtitle, onAddClick }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
      <div className="space-y-1">
        <h1 className="text-[28px] font-bold text-[#1A1A1A]">{title}</h1>
        <p className="text-[#6C6C6C] font-normal text-[20px]">{subtitle}</p>
      </div>
      <button
        onClick={onAddClick}
        className="bg-[#8F00FF] w-[143px] h-[50px] hover:bg-[#7B00DB] text-white px-6 py-3 rounded-[17px] font-normal text-[15px] transition-all shadow-sm"
      >
        Add Exercise
      </button>
    </div>
  );
};

export default PageHeader;
