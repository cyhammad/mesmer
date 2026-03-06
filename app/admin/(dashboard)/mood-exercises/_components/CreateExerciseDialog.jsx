import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BackArrow, CloudUploadIcon, ReadIcon, CheckmarkIcon, TrashIconWhite } from "./Icons";
import { cn } from "@/lib/utils";

const Label = ({ children, required }) => (
  <label
    className="text-[14px] font-medium text-[#717171] mb-2 block"
    style={{ fontFamily: "'Inter Display', var(--font-inter), sans-serif" }}
  >
    {children}
    {required && <span className="text-[#8F00FF] ml-1">*</span>}
  </label>
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

const StepCard = ({ index, step, onChange, onDelete }) => {
  const stepNumber = String(index + 1).padStart(2, "0");
  return (
    <div className="bg-[#F3E8FF] rounded-[24px] p-6 relative flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h4 className="text-[18px] font-bold text-[#111827]">
          Step {stepNumber}
        </h4>
        <button
          onClick={onDelete}
          className="w-10 h-10 bg-[#FF4B4B] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <TrashIconWhite className="w-5 h-5" />
        </button>
      </div>

      <div>
        <Label required>Step Title</Label>
        <input
          type="text"
          value={step.title || ""}
          onChange={(e) => onChange(index, "title", e.target.value)}
          placeholder="Enter step title"
          className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
        />
      </div>

      <div>
        <Label required>Description</Label>
        <textarea
          value={step.description || ""}
          onChange={(e) => onChange(index, "description", e.target.value)}
          placeholder="Brief description of the step"
          rows={3}
          className="w-full rounded-[12px] border border-[#E5E7EB] bg-white p-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors resize-none placeholder:text-[#9CA3AF]"
        />
      </div>
    </div>
  );
};

const CreateExerciseDialog = ({ children, onCreate }) => {
  const initialForm = {
    title: "",
    description: "",
    category: "",
    duration: "",
    theScience: "",
    mesmerFact: "",
    whatItIs: "",
    whatYouDo: "",
    whenToUse: "",
    read: "",
    listen: "",
    watch: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [steps, setSteps] = useState([{ title: "", description: "" }]);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);

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

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStepChange = (index, field, value) => {
    setSteps((prev) => {
      const newSteps = [...prev];
      newSteps[index] = { ...newSteps[index], [field]: value };
      return newSteps;
    });
  };

  const addStep = () => {
    setSteps([...steps, { title: "", description: "" }]);
  };

  const deleteStep = (index) => {
    if (steps.length > 1) {
      setSteps(steps.filter((_, i) => i !== index));
    }
  };

  const handleCreate = async () => {
    if (!onCreate) return;
    setSaving(true);
    try {
      await onCreate({
        ...formData,
        categoryName: formData.category,
        duration: Number(formData.duration) || 0,
        isMood: true,
        steps: steps.filter((s) => s.title || s.description),
      });
      // Reset form
      setFormData(initialForm);
      setSteps([{ title: "", description: "" }]);
      setOpen(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="fixed right-6 left-auto top-1/2 -translate-y-1/2 translate-x-0 sm:max-w-[562px] w-full p-0 gap-0 h-[calc(100vh-48px)] flex flex-col bg-white rounded-[24px] overflow-hidden border-none outline-none shadow-2xl max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2 max-sm:w-[90vw] max-sm:h-[80vh] max-sm:rounded-[20px]"
      >
        {/* Header */}
        <div className="flex flex-col gap-2 p-6 border-b border-[#8F00FF] shrink-0">
          <DialogClose className="outline-none">
            <BackArrow className="flex justify-start w-6 h-6 cursor-pointer" />
          </DialogClose>
          <DialogTitle className="flex justify-start text-[24px] font-bold text-[#111827]">
            Create New Exercise
          </DialogTitle>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <div className="flex flex-col gap-2">
            <h3 className="text-[18px] font-bold text-[#111827]">Basics</h3>

            <div>
              <Label required>Title</Label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter"
                className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label>Description</Label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Brief description of the exercise"
                rows={4}
                className="w-full rounded-[12px] border border-[#E5E7EB] p-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors resize-none placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label required>Category</Label>
              <div className="flex flex-wrap gap-3 mt-2">
                {categories.map((cat) => (
                  <CategoryChip
                    key={cat}
                    name={cat}
                    isSelected={formData.category === cat}
                    onClick={() => handleChange("category", cat)}
                  />
                ))}
              </div>
            </div>

            <div>
              <Label>Duration</Label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => handleChange("duration", e.target.value)}
                  placeholder="10"
                  className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                  mins
                </span>
              </div>
            </div>

            <div>
              <Label>The Science</Label>
              <input
                type="text"
                value={formData.theScience}
                onChange={(e) => handleChange("theScience", e.target.value)}
                placeholder="Enter"
                className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label>Mesmer Fact</Label>
              <input
                type="text"
                value={formData.mesmerFact}
                onChange={(e) => handleChange("mesmerFact", e.target.value)}
                placeholder="Enter"
                className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label>What It Is</Label>
              <input
                type="text"
                value={formData.whatItIs}
                onChange={(e) => handleChange("whatItIs", e.target.value)}
                placeholder="e.g: Athletes use this to access peak performance on demand"
                className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label>What You Do</Label>
              <input
                type="text"
                value={formData.whatYouDo}
                onChange={(e) => handleChange("whatYouDo", e.target.value)}
                placeholder="e.g: Create an imaginary circle, fill it with confidence, step in when you need it"
                className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label>When To Use</Label>
              <input
                type="text"
                value={formData.whenToUse}
                onChange={(e) => handleChange("whenToUse", e.target.value)}
                placeholder="e.g: Before presentations, social situations, difficult conversations"
                className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label>Read</Label>
              <textarea
                value={formData.read}
                onChange={(e) => handleChange("read", e.target.value)}
                placeholder="Enter reading content"
                rows={3}
                className="w-full rounded-[12px] border border-[#E5E7EB] p-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors resize-none placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label>Listen URL (.mp3)</Label>
              <input
                type="text"
                value={formData.listen}
                onChange={(e) => handleChange("listen", e.target.value)}
                placeholder="https://example.com/audio.mp3"
                className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <Label>Watch URL (.mp4)</Label>
              <input
                type="text"
                value={formData.watch}
                onChange={(e) => handleChange("watch", e.target.value)}
                placeholder="https://example.com/video.mp4"
                className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] px-4 text-[16px] text-[#111827] focus:outline-none focus:border-[#8F00FF] transition-colors placeholder:text-[#9CA3AF]"
              />
            </div>

            {/* Steps Section */}
            <h3 className="text-[18px] font-bold text-[#111827] mt-4">
              Exercise Steps <span className="text-[#8F00FF] ml-1">*</span>
            </h3>

            <div className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <StepCard
                  key={index}
                  index={index}
                  step={step}
                  onChange={handleStepChange}
                  onDelete={() => deleteStep(index)}
                />
              ))}
            </div>

            <button
              onClick={addStep}
              className="w-max px-6 py-2 rounded-full border border-[#8F00FF] text-[#8F00FF] text-[14px] font-medium hover:bg-[#F3E8FF] transition-colors"
            >
              Add Step
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#F3F4F6] shrink-0 flex gap-4 bg-white">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="w-[110px] h-[52px] rounded-full border-[#8F00FF] text-[#8F00FF] hover:bg-[#F3E8FF] hover:text-[#8F00FF] text-[16px] font-bold"
              style={{
                fontFamily: "'Inter Display', var(--font-inter), sans-serif",
              }}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="flex-1 h-[52px] rounded-full bg-[#8F00FF] hover:bg-[#7a00d9] text-white text-[16px] font-bold disabled:opacity-50"
            onClick={handleCreate}
            disabled={saving || !formData.title}
            style={{
              fontFamily: "'Inter Display', var(--font-inter), sans-serif",
            }}
          >
            {saving ? "Creating..." : "Create Exercise"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateExerciseDialog;
