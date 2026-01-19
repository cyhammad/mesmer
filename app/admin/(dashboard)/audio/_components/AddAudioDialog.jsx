import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BackArrow, CloudUploadIcon, CheckmarkIcon } from "./Icons";
import { cn } from "@/lib/utils";

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
    <div className="w-full h-[56px] bg-white rounded-[12px] flex items-center px-4 justify-between border border-[#E5E7EB] cursor-pointer hover:border-[#8F00FF]/30 transition-all">
      <span className="text-[#999DA0] text-[14px]">{placeholder}</span>
      <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
    </div>
  </div>
);

const AddAudioDialog = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("School & Exams");
  const [selectedMood, setSelectedMood] = useState("Confident");

  const categories = [
    "School & Exams",
    "Friendships & Relationships",
    "Sleep",
    "Social Media",
    "Self-Esteem & Body Image",
    "Stress & Overthinking",
  ];

  const moods = [
    "Confident",
    "Calm",
    "Motivated",
    "Self-Love",
    "Focused",
    "Free",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="fixed right-6 left-auto top-1/2 -translate-y-1/2 translate-x-0 max-w-[562px] w-full p-0 gap-0 h-[calc(100vh-48px)] flex flex-col bg-white rounded-[24px] overflow-hidden border-none outline-none shadow-2xl max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2 max-sm:w-[90%] max-sm:max-w-[400px] max-sm:h-[80vh] max-sm:rounded-[20px]"
      >
        {/* Header */}
        <div className="flex flex-col gap-2 p-6 border-b border-[#EED9FF] shrink-0">
          <DialogClose className="outline-none">
            <BackArrow className="flex justify-start w-6 h-6 cursor-pointer" />
          </DialogClose>
          <DialogTitle className="flex justify-start text-[24px] font-bold text-[#111827]">
            Add New Audio
          </DialogTitle>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <div className="flex flex-col gap-6">
            <div>
              <Label>Title</Label>
              <Input placeholder="Enter" />
            </div>

            <div>
              <Label>
                Description{" "}
                <span className="text-[#9CA3AF] font-normal">(Optional)</span>
              </Label>
              <TextArea
                placeholder="Brief description of the exercise"
                rows={4}
              />
            </div>

            <MediaPlaceholder
              label="Thumbnail Image"
              icon={<CloudUploadIcon className="w-6 h-6" />}
            />

            <MediaPlaceholder
              label="Audio File (.mp3)"
              icon={<CloudUploadIcon className="w-6 h-6" />}
            />

            <div>
              <Label>Category</Label>
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
              <Label>Mood</Label>
              <div className="flex flex-wrap gap-3 mt-2">
                {moods.map((mood) => (
                  <CategoryChip
                    key={mood}
                    name={mood}
                    isSelected={selectedMood === mood}
                    onClick={() => setSelectedMood(mood)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#F3F4F6] shrink-0 flex gap-4 bg-white">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="w-[110px] h-[52px] rounded-full border-[#8F00FF] text-[#8F00FF] hover:bg-[#F3E8FF] hover:text-[#8F00FF] text-[16px] font-bold"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button className="flex-1 h-[52px] rounded-full bg-[#8F00FF] hover:bg-[#7a00d9] text-white text-[16px] font-bold">
            Create Audio
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddAudioDialog;
