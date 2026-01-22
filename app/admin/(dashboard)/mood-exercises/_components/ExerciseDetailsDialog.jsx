import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon,
  BackArrow,
  ReadIcon,
  ListenIcon,
  WatchIcon,
} from "./Icons"; // Assuming I fix the icons file or inline it

const Label = ({ children }) => (
  <label className="text-[14px] font-medium text-[#717171] mb-2 block">
    {children}
  </label>
);

const Input = ({ value, placeholder, suffix }) => (
  <div className="relative">
    <input
      type="text"
      defaultValue={value}
      placeholder={placeholder}
      className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors"
    />
    {suffix && (
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
        {suffix}
      </span>
    )}
  </div>
);

const TextArea = ({ value, placeholder, rows = 4 }) => (
  <textarea
    defaultValue={value}
    placeholder={placeholder}
    rows={rows}
    className="w-full rounded-[12px] border border-[#E5E7EB] p-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors resize-none"
  />
);

const MediaPlaceholder = ({ label, icon }) => (
  <div className="flex flex-col gap-1   ">
    <Label>{label}</Label>
    <div className="w-full h-[56px] bg-[#EED9FF] rounded-[8px] flex items-center px-4 justify-between">
      <span className="text-[#999DA0] text-[14px]">
        Let the sound waves calibrate your inner compass
      </span>
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#8F00FF]">
        {/* Placeholder for media icon */}
        {icon}
      </div>
    </div>
  </div>
);

const ExerciseDetailsDialog = ({ children, exercise }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="fixed right-6 left-auto top-1/2 -translate-y-1/2 translate-x-0 sm:max-w-[562px] w-full p-0 gap-0 h-[calc(100vh-48px)] flex flex-col bg-white rounded-[24px] overflow-hidden border-none outline-none shadow-2xl max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2 max-sm:w-[90vw] max-sm:h-[80vh] max-sm:rounded-[20px]"
      >
        {/* Header */}
        <div className="flex flex-col  gap-2 p-6 border-b border-[#8F00FF] shrink-0">
          <DialogClose className="outline-none">
            <BackArrow className="flex justify-start w-6 h-6 cursor-pointer" />
          </DialogClose>
          <DialogTitle className="flex justify-start text-[24px] font-bold text-[#111827]">
            Exercise details
          </DialogTitle>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[18px] font-bold text-[#111827]">Basics</h3>

            <div>
              <Label>Title</Label>
              <Input value={exercise.title} placeholder="Enter title" />
            </div>

            <div>
              <Label>Description</Label>
              <TextArea
                value={exercise.subtitle}
                placeholder="Enter description"
                rows={4}
              />
            </div>

            <div>
              <Label>Category</Label>
              <Input value="School & Exams" />
            </div>

            <div>
              <Label>Order Number</Label>
              <Input value={exercise.order?.replace("Order ", "") || "01"} />
            </div>

            <div>
              <Label>Add Time</Label>
              <Input
                value={exercise.duration?.replace(" mins", "") || "10"}
                suffix="mins"
              />
            </div>

            <div>
              <Label>The Science</Label>
              <Input value="Before presentations, social situations, difficult conversations" />
            </div>

            <div>
              <Label>Mesmer Fact</Label>
              <Input value="Create an imaginary circle, fill it with confidence, step in when you need it" />
            </div>

            <div>
              <Label>What it is</Label>
              <Input placeholder="e.g. Athletes use this to access peak performance on demand" />
            </div>

            <div>
              <Label>What you do</Label>
              <Input placeholder="e.g. Create an imaginary circle, fill it with confidence, step in when you need it" />
            </div>

            <div>
              <Label>When to use</Label>
              <Input placeholder="e.g: Before presentations, social situations, difficult conversations" />
            </div>

            <div>
              <Label>WHY</Label>
              <Input value="Create an imaginary circle, fill it with confidence, step in when you need it" />
            </div>

            <MediaPlaceholder
              label="Read"
              icon={<ReadIcon className="w-5 h-5" />}
            />
            <MediaPlaceholder
              label="Listen"
              icon={<ListenIcon className="w-5 h-5" />}
            />
            <MediaPlaceholder
              label="Watch"
              icon={<WatchIcon className="w-5 h-5" />}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#F3F4F6] shrink-0 flex gap-4 bg-white">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="w-[96px] h-[52px] rounded-full border-[#8F00FF] text-[#8F00FF] hover:bg-[#F3E8FF] hover:text-[#8F00FF] text-[16px] font-bold"
            >
              Close
            </Button>
          </DialogClose>
          <Button className="flex-1 h-[52px] rounded-full bg-[#8F00FF] hover:bg-[#7a00d9] text-white text-[16px] font-bold">
            Edit Exercise
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseDetailsDialog;
