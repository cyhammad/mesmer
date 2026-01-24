import React from "react";
import { EditIcon, TrashIcon, ClockIcon, StepsIcon } from "./Icons";
import ExerciseDetailsDialog from "./ExerciseDetailsDialog";
import MakeLiveDialog from "./MakeLiveDialog";
import EditExerciseDialog from "./EditExerciseDialog";
import DeleteExerciseDialog from "./DeleteExerciseDialog";

const ExerciseCard = ({ exercise, isDraft }) => {
  return (
    <ExerciseDetailsDialog exercise={exercise}>
      <div className="bg-white w-full h-full min-h-[226px] p-4 flex flex-col gap-6 rounded-[16px] border-[1.5px] border-[#EED9FF] hover:shadow-md transition-shadow cursor-pointer text-left">
        {/* Card Header */}
        <div className="flex justify-between items-center mb-0.5">
          <span className="bg-[#F3E8FF] text-[#8F00FF] text-[15px] font-medium py-3 px-3 rounded-full">
            {exercise.order}
          </span>
          <div className="flex items-center gap-1">
            <EditExerciseDialog exercise={exercise}>
              <button
                className="p-1 hover:bg-gray-50 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <EditIcon />
              </button>
            </EditExerciseDialog>
            <DeleteExerciseDialog onConfirm={() => console.log("Deleting...")}>
              <button
                className="p-1 hover:bg-red-50 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <TrashIcon />
              </button>
            </DeleteExerciseDialog>
          </div>
        </div>

        {/* Inner Content Box */}
        <div className="bg-[#F3E8FF] rounded-[12px] p-4 flex-1 flex flex-col justify-center">
          <p
            className="text-[14px] font-normal text-[#6C6C6C] mb-2 flex items-center gap-2 tracking-tight"
            style={{
              fontFamily: "'Inter Display', var(--font-inter), sans-serif",
            }}
          >
            <span className="w-4 h-[1px] bg-[#6C6C6C]" /> {exercise.subtitle}
          </p>
          <h3
            className="text-black text-[18px] font-medium leading-[1.2] line-clamp-2 tracking-tight"
            style={{
              fontFamily: "'Inter Display', var(--font-inter), sans-serif",
            }}
          >
            {exercise.title}
          </h3>
        </div>

        {/* Card Footer */}
        <div className="flex items-center gap-4 text-[#6C6C6C] text-[14px] font-normal mt-2">
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

        {/* Draft Action Button */}
        {isDraft && (
          <MakeLiveDialog onConfirm={() => console.log("Going live!")}>
            <button
              className="w-full py-2.5 rounded-full border-[1.5px] border-[#8F00FF] text-[#8F00FF] text-[18px] font-bold hover:bg-[#F3E8FF] transition-colors mt-[-8px]"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Make it Live
            </button>
          </MakeLiveDialog>
        )}
      </div>
    </ExerciseDetailsDialog>
  );
};

export default ExerciseCard;
