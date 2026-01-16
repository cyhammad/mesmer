import React from "react";
import Image from "next/image";
import { EditIcon, TrashIcon, PlayIcon } from "./Icons";
import EditVideoDialog from "./EditVideoDialog";
import DeleteVideoDialog from "./DeleteVideoDialog";

const VideoCard = ({ video }) => {
  return (
    <div className="bg-white w-full max-w-[334.6px] min-h-[265px] h-auto rounded-[16px] border border-[#EED9FF] overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
      {/* Thumbnail Area - with Play Button Overlay */}
      <div className="relative w-full h-[154px] shrink-0">
        {video.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#1A1A1A]" />
        )}
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-12 h-12 rounded-full bg-[#8F00FF]/90 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
            <PlayIcon className="w-5 h-5 translate-x-0.5 text-white" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-3 flex flex-col gap-1.5 relative">
        <div className="flex justify-between items-start">
          <h3 className="text-[#1A1A1A] text-[18px] font-bold truncate pr-2">
            {video.title}
          </h3>
          <span className="text-[#8F00FF] text-[16px] font-medium shrink-0">
            {video.duration}
          </span>
        </div>

        <p className="text-[#717171] text-[14px] truncate">
          {video.description}
        </p>

        {/* Metadata section */}
        <div className="mt-auto space-y-1">
          <div className="flex items-center gap-1.5 text-[12px]">
            <span className="text-[#8F00FF] font-bold shrink-0">Category:</span>
            <span className="text-[#717171] truncate">{video.categories}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px]">
            <span className="text-[#8F00FF] font-bold shrink-0">Mood:</span>
            <span className="text-[#717171] truncate">{video.moods}</span>
          </div>
        </div>

        {/* Actions - Bottom Right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm pl-2 rounded-lg">
          <EditVideoDialog video={video}>
            <button
              className="p-1 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <EditIcon className="w-6 h-6" />
            </button>
          </EditVideoDialog>

          <DeleteVideoDialog onConfirm={() => console.log("Deleting video...")}>
            <button
              className="p-1 hover:bg-red-50 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <TrashIcon className="w-6 h-6" />
            </button>
          </DeleteVideoDialog>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
