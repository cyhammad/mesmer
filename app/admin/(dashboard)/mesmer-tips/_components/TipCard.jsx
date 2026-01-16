import React from "react";
import { EditIcon, TrashIcon, CalendarIcon } from "./Icons";
import EditTipDialog from "./EditTipDialog";
import DeleteTipDialog from "./DeleteTipDialog";

const TipCard = ({ tip }) => {
  return (
    <div className="bg-white w-full h-full min-h-[350px] p-5 flex flex-col gap-5 rounded-[24px] border-[1.5px] border-[#EED9FF] hover:shadow-md transition-shadow cursor-pointer text-left">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <span className="bg-[#F3E8FF] text-[#8F00FF] text-[14px] font-bold py-1.5 px-4 rounded-full">
          {tip.category}
        </span>
        <div className="flex items-center gap-2">
          <EditTipDialog tip={tip}>
            <button
              className="p-1 hover:bg-gray-50 rounded-full transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <EditIcon className="w-6 h-6" />
            </button>
          </EditTipDialog>
          <DeleteTipDialog onConfirm={() => console.log("Deleting tip...")}>
            <button
              className="p-1 hover:bg-red-50 rounded-full transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <TrashIcon className="w-6 h-6" />
            </button>
          </DeleteTipDialog>
        </div>
      </div>

      {/* Content Box */}
      <div className="bg-[#F3E8FF] h-fit rounded-[16px] p-3 flex-1 flex flex-col items-start justify-start overflow-hidden">
        <p className="text-[#6C6C6C] text-[16px] leading-tight">
          {tip.content}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center gap-2 text-[#6C6C6C] text-[14px] font-medium mt-1">
        <CalendarIcon className="w-5 h-5" />
        <span>{tip.date}</span>
      </div>
    </div>
  );
};

export default TipCard;
