import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BackArrow, CloudUploadIcon, ReadIcon, CheckmarkIcon } from "./Icons";
import { cn } from "@/lib/utils";
import EditExerciseStepsDialog from "./EditExerciseStepsDialog";

const Label = ({ children, required }) => (
  <label className="text-[14px] font-medium text-[#717171] mb-2 block">
    {children}
    {required && <span className="text-[#8F00FF] ml-1">*</span>}
  </label>
);

const Input = ({ value, placeholder, suffix, type = "text" }) => (
  <div className="relative">
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
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
    className="w-full rounded-[12px] border border-[#E5E7EB] p-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors resize-none placeholder:text-[#9CA3AF]"
  />
);

const CategoryChip = ({ name, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "px-4 py-2 rounded-[12px] text-[14px] font-medium transition-all flex items-center gap-2",
      isSelected
        ? "bg-[#F3E8FF] text-[#8F00FF] border border-[#8F00FF]"
        : "bg-[#F3E8FF] text-[#6B7280] border border-transparent hover:border-[#8F00FF]/30",
    )}
  >
    {name}
    {isSelected && (
      <div className="w-4 h-4 rounded-full bg-[#8F00FF] flex items-center justify-center">
        <CheckmarkIcon className="w-2.5 h-2.5" />
      </div>
    )}
  </button>
);

const MediaPlaceholder = ({ label, icon, placeholder = "Choose File" }) => (
  <div className="flex flex-col gap-1">
    <Label>{label}</Label>
    <div className="w-full h-[56px] bg-[#F3E8FF] rounded-[8px] flex items-center px-4 justify-between border border-transparent cursor-pointer hover:border-[#8F00FF]/30 transition-all">
      <span className="text-[#999DA0] text-[14px]">{placeholder}</span>
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
  </div>
);

const EditExerciseDialog = ({ children, exercise }) => {
  const [selectedCategory, setSelectedCategory] = useState("School & Exams");

  const categories = [
    "School & Exams",
    "Friendships & Relationships",
    "Sleep",
    "Social Media",
    "Self-Esteem & Body Image",
    "Confident",
    "Stress & Overthinking",
    "Calm",
    "Motivated",
    "Self-Love",
    "Focused",
    "Free",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {children}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="fixed right-6 left-auto top-1/2 -translate-y-1/2 translate-x-0 max-w-[562px] w-full p-0 gap-0 h-[calc(100vh-48px)] flex flex-col bg-white rounded-[24px] overflow-hidden border-none outline-none shadow-2xl max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2 max-sm:w-[90%] max-sm:max-w-[400px] max-sm:h-[80vh] max-sm:rounded-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col gap-2 p-4 sm:p-6 border-b border-[#8F00FF] shrink-0">
          <DialogClose className="outline-none">
            <BackArrow className="flex justify-start w-6 h-6 cursor-pointer" />
          </DialogClose>
          <DialogTitle className="flex justify-start text-[20px] sm:text-[24px] font-bold text-[#111827]">
            Edit Exercise
          </DialogTitle>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-hide">
          <div className="flex flex-col gap-6">
            <h3 className="text-[18px] font-bold text-[#111827]">Basics</h3>

            <div>
              <Label required>Title</Label>
              <Input value={exercise.title} placeholder="Enter" />
            </div>

            <div>
              <Label>Description</Label>
              <TextArea
                value={exercise.subtitle}
                placeholder="Brief description of the exercise"
                rows={4}
              />
            </div>

            <div>
              <Label required>Category</Label>
              <div className="flex flex-wrap gap-3 mt-2">
                {categories.map((cat) => (
                  <CategoryChip
                    key={cat}
                    name={cat}
                    isSelected={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                  />
                ))}
              </div>
            </div>

            <div>
              <Label>Order Number</Label>
              <Input
                type="number"
                value={exercise.order?.replace("Order ", "") || "1"}
              />
            </div>

            <div>
              <Label>Add Time</Label>
              <Input
                value={exercise.duration?.replace(" mins", "") || "10"}
                placeholder="10"
                suffix="mins"
              />
            </div>

            <div>
              <Label>The Science</Label>
              <Input placeholder="Enter" />
            </div>

            <div>
              <Label>Mesmer Fact</Label>
              <Input placeholder="Enter" />
            </div>

            <div>
              <Label>What it is</Label>
              <Input
                value="Athletes use this to access peak performance on demand"
                placeholder="e.g: Athletes use this to access peak performance on demand"
              />
            </div>

            <div>
              <Label>What you do</Label>
              <Input
                value="Create an imaginary circle, fill it with confidence, step in when you need it"
                placeholder="e.g: Create an imaginary circle, fill it with confidence, step in when you need it"
              />
            </div>

            <div>
              <Label>When to use</Label>
              <Input
                value="Before presentations, social situations, difficult conversations"
                placeholder="e.g: Before presentations, social situations, difficult conversations"
              />
            </div>

            <div>
              <Label>WHY</Label>
              <Input placeholder="e.g: Before presentations, social situations, difficult conversations" />
            </div>

            <MediaPlaceholder
              label="Read"
              placeholder="Let the sound waves calibrate your inner compass"
              icon={<ReadIcon className="w-5 h-5" />}
            />
            <MediaPlaceholder
              label="Listen (.mp3)"
              icon={<CloudUploadIcon className="w-5 h-5" />}
            />
            <MediaPlaceholder
              label="Watch (.mp4)"
              icon={<CloudUploadIcon className="w-5 h-5" />}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#F3F4F6] shrink-0 flex gap-3 sm:gap-4 bg-white">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="w-full sm:w-[110px] h-[44px] sm:h-[52px] rounded-full border-[#8F00FF] text-[#8F00FF] hover:bg-[#F3E8FF] hover:text-[#8F00FF] text-[14px] sm:text-[16px] font-bold"
            >
              Cancel
            </Button>
          </DialogClose>
          <EditExerciseStepsDialog exercise={exercise}>
            <Button
              className="flex-1 h-[44px] sm:h-[52px] rounded-full bg-[#8F00FF] hover:bg-[#7a00d9] text-white text-[14px] sm:text-[16px] font-bold"
              onClick={(e) => e.stopPropagation()}
            >
              Save & Next
            </Button>
          </EditExerciseStepsDialog>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditExerciseDialog;
