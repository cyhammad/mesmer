import React from "react";
import Image from "next/image";
import { EditIcon, TrashIcon, PlayIcon } from "./Icons";
import EditAudioDialog from "./EditAudioDialog";
import DeleteAudioDialog from "./DeleteAudioDialog";

const AudioCard = ({ audio }) => {
  return (
    <div className="bg-white w-full max-w-[514px] h-[118px] p-4 flex items-center gap-[12px] rounded-[16px] border-[1.5px] border-[#EED9FF] opacity-100 rotate-0">
      {/* Thumbnail - 86x86px to fit within 118px height with 16px padding (118 - 32 = 86) */}
      <div className="min-w-[86px] h-[86px] rounded-[12px] overflow-hidden flex-shrink-0 bg-[#0F172A] relative">
        {audio.thumbnail ? (
          <Image
            src={audio.thumbnail}
            alt={audio.title}
            width={86}
            height={86}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-[#8F00FF]/30 rounded-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 border-2 border-[#8F00FF]/20 rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 h-full">
        <div>
          <h3 className="text-[#1A1A1A] text-[18px] font-bold leading-tight truncate">
            {audio.title}
          </h3>
          <p className="text-[#717171] text-[14px] mt-0.5">{audio.duration}</p>
        </div>
        <p className="text-[#717171] text-[14px]">— {audio.categories}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col justify-between items-end h-full flex-shrink-0">
        {/* Play Button - Light circle background */}
        <button className="w-10 h-10 rounded-full bg-[#FDF4FF] flex items-center justify-center hover:bg-[#F5E1FF] transition-colors">
          <PlayIcon />
        </button>

        {/* Edit/Delete Icons */}
        <div className="flex items-center gap-2">
          <EditAudioDialog audio={audio}>
            <button
              className="hover:scale-105 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <EditIcon className="w-6 h-6" />
            </button>
          </EditAudioDialog>

          <DeleteAudioDialog onConfirm={() => console.log("Deleting audio...")}>
            <button
              className="hover:scale-105 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <TrashIcon className="w-6 h-6" />
            </button>
          </DeleteAudioDialog>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
