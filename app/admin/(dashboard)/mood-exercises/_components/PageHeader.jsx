import React from "react";
import CreateExerciseDialog from "./CreateExerciseDialog";

const PageHeader = ({ title, subtitle, onAddClick }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="space-y-1 sm:space-y-3">
        <h1 className="text-[28px] tracking-tight font-bold text-[#1A1A1A]">
          {title}
        </h1>
        <p className="text-[#6C6C6C] font-normal text-[20px]">
          {subtitle}
        </p>
      </div>
      <CreateExerciseDialog>
        <button className="bg-[#8F00FF] w-full sm:w-[143px] h-[44px] sm:h-[50px] hover:bg-[#7B00DB] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[17px] font-normal text-[14px] sm:text-[15px] transition-all shadow-sm">
          Add Exercise
        </button>
      </CreateExerciseDialog>
    </div>
  );
};

export default PageHeader;
