import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CheckmarkIcon } from "./Icons";
import { cn } from "@/lib/utils";

const Label = ({ children, required }) => (
  <label className="text-[12px] font-medium text-[#717171] mb-1.5 block font-medium">
    {children}
    {required && <span className="text-[#8F00FF] ml-1">*</span>}
  </label>
);

const TextArea = ({ value, placeholder }) => (
  <textarea
    defaultValue={value}
    placeholder={placeholder}
    className="w-full h-[144px] rounded-[10px] border border-[#E5E7EB] p-3 text-[14px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors resize-none placeholder:text-[#9CA3AF]"
  />
);

const Input = ({ value, placeholder, type = "text" }) => (
  <div className="relative">
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className="w-full h-[42px] rounded-[10px] border border-[#E5E7EB] px-3 text-[14px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
    />
  </div>
);

const CategoryChip = ({ name, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "px-3 py-1.5 rounded-[10px] text-[12px] font-medium transition-all flex items-center gap-1.5",
      isSelected
        ? "bg-white text-[#111827] border border-[#8F00FF]"
        : "bg-[#F3E8FF] text-[#6B7280] border border-transparent hover:border-[#8F00FF]/30",
    )}
  >
    {name}
    {isSelected && (
      <div className="w-3.5 h-3.5 rounded-full bg-[#8F00FF] flex items-center justify-center">
        <CheckmarkIcon className="w-2 h-2" />
      </div>
    )}
  </button>
);

const ScheduleStoryDialog = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("School & Exams");

  const categories = [
    "School & Exams",
    "Friendships & Relationships",
    "Sleep",
    "Social Media",
    "Self-Esteem & Body Image",
    "Stress & Overthinking",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[460px] w-[90%] p-0 gap-0 h-auto max-h-[90vh] flex flex-col bg-white rounded-[12px] overflow-hidden border-none outline-none shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-5 border-b border-[#F3F4F6] shrink-0">
          <DialogTitle className="text-[28px] font-semibold text-[#111827]">
            Schedule Story
          </DialogTitle>
          <DialogClose className="outline-none hover:bg-gray-100 rounded-full p-1 transition-colors">
            <X className="w-5 h-5 text-[#111827]" />
          </DialogClose>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex-1 sm:flex-none overflow-y-auto flex flex-col">
          <div>
            <Label>Enter your story</Label>
            <TextArea placeholder="Brief description" />
          </div>

          <div>
            <Label required>Category</Label>
            <div className="flex flex-wrap gap-2 mt-1.5">
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
            <Label>Add Date</Label>
            <Input placeholder="DD/MM/YYYY" />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#F3F4F6] flex flex-col sm:flex-row items-center sm:justify-end gap-3 bg-white shrink-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="w-full sm:w-[80px] h-[42px] rounded-full border-[#8F00FF] text-[#8F00FF] hover:bg-[#F3E8FF] hover:text-[#8F00FF] text-[14px] font-bold"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button className="w-full sm:w-auto h-[42px] px-6 rounded-full bg-[#8F00FF] hover:bg-[#7a00d9] text-white text-[14px] font-bold whitespace-nowrap">
              Schedule Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleStoryDialog;
