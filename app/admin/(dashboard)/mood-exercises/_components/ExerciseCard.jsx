import React from "react";
import { EditIcon, TrashIcon, ClockIcon, StepsIcon } from "./Icons";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-white w-[334.6px] h-full min-h-[226px] p-5 flex flex-col gap-6 rounded-[16px] border-[1.5px] border-[#EED9FF]">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-0.5">
        <span className="bg-[#F3E8FF] text-[#8F00FF] text-[18px] font-medium py-2 px-5 rounded-full">
          {exercise.order}
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-50 rounded-full transition-colors">
            <EditIcon />
          </button>
          <button className="p-1 hover:bg-red-50 rounded-full transition-colors">
            <TrashIcon />
          </button>
        </div>
      </div>

      {/* Inner Content Box */}
      <div className="bg-[#F3E8FF] rounded-[12px] p-4 flex-1 flex flex-col justify-center">
        <p className="text-[14px] font-normal text-[#6C6C6C] mb-2 flex items-center gap-2">
          <span className="w-4 h-[1px] bg-[#6C6C6C]" /> {exercise.subtitle}
        </p>
        <h3 className="text-black text-[18px] font-medium leading-[1.2] line-clamp-2">
          {exercise.title}
        </h3>
      </div>

      {/* Card Footer */}
      <div className="flex items-center gap-4 text-[#6C6C6C] text-[16px] font-normal px-1">
        <div className="flex items-center gap-2">
          <ClockIcon />
          {exercise.duration}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-[#6C6C6C] rounded-full" />
          <StepsIcon />
          {exercise.steps}
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
