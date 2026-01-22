import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CloseCircleIcon } from "./Icons";

const DeleteStoryDialog = ({ children, onConfirm, storyContent }) => {
  const storySnippet = storyContent
    ? storyContent.substring(0, 30) + (storyContent.length > 30 ? "..." : "")
    : null;

  return (
    <Dialog>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {children}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="w-[90%] sm:max-w-[562px] p-5 sm:p-6 flex flex-col gap-5 sm:gap-6 bg-white rounded-[20px] sm:rounded-[24px] overflow-hidden border-none outline-none shadow-xl h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <DialogTitle className="text-[18px] sm:text-[20px] font-bold text-[#111827]">
              Delete Story
            </DialogTitle>
            <p className="text-[14px] sm:text-[16px] text-[#6B7280]">
              Are you sure you want to delete{" "}
              {storySnippet ? <strong>"{storySnippet}"</strong> : "this story"}?
            </p>
          </div>
          <DialogClose className="outline-none">
            <CloseCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          </DialogClose>
        </div>

        {/* Footer / Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-auto w-full">
          <DialogClose asChild className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-[110px] h-[44px] sm:h-[52px] rounded-full border-[#8F00FF] text-[#8F00FF] hover:bg-[#F3E8FF] hover:text-[#8F00FF] text-[14px] sm:text-[16px] font-bold"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="w-full sm:flex-1 h-[44px] sm:h-[52px] rounded-full bg-[#8F00FF] hover:bg-[#7a00d9] text-white text-[14px] sm:text-[16px] font-bold"
            onClick={() => {
              if (onConfirm) onConfirm();
            }}
          >
            Yes Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteStoryDialog;
