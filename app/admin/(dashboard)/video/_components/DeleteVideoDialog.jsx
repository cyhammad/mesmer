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

const DeleteVideoDialog = ({ children, onConfirm }) => {
  return (
    <Dialog>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {children}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-[562px] w-full p-6 flex flex-col gap-6 bg-white rounded-[24px] overflow-hidden border-none outline-none shadow-xl"
        style={{ height: "216px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <DialogTitle className="text-[20px] font-bold text-[#111827]">
              Delete Video Content
            </DialogTitle>
            <p className="text-[16px] text-[#6B7280]">
              Are you sure you want to delete this video file?
            </p>
          </div>
          <DialogClose className="outline-none">
            <CloseCircleIcon className="w-6 h-6 cursor-pointer" />
          </DialogClose>
        </div>

        {/* Footer / Actions */}
        <div className="flex items-center gap-4 mt-auto">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="w-[110px] h-[52px] rounded-full border-[#8F00FF] text-[#8F00FF] hover:bg-[#F3E8FF] hover:text-[#8F00FF] text-[16px] font-bold"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="flex-1 h-[52px] rounded-full bg-[#8F00FF] hover:bg-[#7a00d9] text-white text-[16px] font-bold"
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

export default DeleteVideoDialog;
