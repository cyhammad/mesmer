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
import ScheduleTipDialog from "./ScheduleTipDialog";

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

const CategoryChip = ({ name, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "px-3 py-1.5 rounded-[10px] text-[12px] font-medium transition-all flex items-center gap-1.5",
      isSelected
        ? "bg-white text-[#111827] border border-[#8F00FF]"
        : "bg-[#F3E8FF] text-[#6B7280] border border-transparent hover:border-[#8F00FF]/30"
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

const EditTipDialog = ({ children, tip }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    tip.category || "Stress"
  );

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
        className="fixed inset-0 translate-x-0 translate-y-0 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-[460px] w-full p-0 gap-0 sm:h-auto h-full flex flex-col bg-white sm:rounded-[12px] rounded-none overflow-hidden border-none outline-none shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-5 border-b border-[#F3F4F6] shrink-0">
          <DialogTitle className="text-[20px] sm:text-[22px] font-bold text-[#111827]">
            Edit Tip
          </DialogTitle>
          <DialogClose className="outline-none hover:bg-gray-100 rounded-full p-1 transition-colors">
            <X className="w-5 h-5 text-[#111827]" />
          </DialogClose>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex-1 sm:flex-none overflow-y-auto flex flex-col gap-3">
          <div>
            <Label>Enter your tip</Label>
            <TextArea placeholder="Brief description" value={tip.content} />
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
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#F3F4F6] flex flex-col sm:flex-row items-center sm:justify-between gap-3 bg-white shrink-0">
          <ScheduleTipDialog>
            <button className="text-[#8F00FF] text-[12px] font-bold hover:underline whitespace-nowrap order-2 sm:order-1">
              Reschedule
            </button>
          </ScheduleTipDialog>

          <div className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="flex-1 sm:flex-none h-[42px] sm:w-[80px] rounded-full border-[#8F00FF] text-[#8F00FF] hover:bg-[#F3E8FF] hover:text-[#8F00FF] text-[14px] font-bold"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button className="flex-[2] sm:flex-none h-[42px] px-6 rounded-full bg-[#8F00FF] hover:bg-[#7a00d9] text-white text-[14px] font-bold whitespace-nowrap">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditTipDialog;
