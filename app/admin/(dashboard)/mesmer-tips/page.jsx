"use client";

import React, { useState } from "react";
import PageHeader from "./_components/PageHeader";
import CategoryFilter from "./_components/CategoryFilter";
import TipCard from "./_components/TipCard";

const MesmerTipsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Scheduled");

  const categories = [{ name: "Scheduled", count: "06" }];

  const tips = [
    {
      category: "Stress",
      content:
        "When feeling overwhelmed, shift your focus to your peripheral vision. It activates your parasympathetic nervous system and helps calm your mind within seconds.",
      date: "May 12, 2025",
    },
    {
      category: "Stress",
      content:
        "Try box breathing when stressed: inhale for 4 seconds, hold for 4, exhale for 4, hold for 4, and repeat. This pattern regulates your nervous system quickly.",
      date: "May 12, 2025",
    },
    {
      category: "Stress",
      content:
        "If you catch yourself in a negative thought loop, pause and name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
      date: "May 12, 2025",
    },
    {
      category: "Stress",
      content:
        "To improve focus, try the Pomodoro Technique: work intensely for 25 minutes, then take a 5-minute break. After four cycles, take a longer 15-30 minute break.",
      date: "May 12, 2025",
    },
    {
      category: "Stress",
      content:
        "Before bed, write down three things you're grateful for. This simple practice can improve sleep quality and reduce stress hormones.",
      date: "May 12, 2025",
    },
    {
      category: "Stress",
      content:
        "When feeling self-doubt, adopt a power pose for just two minutes. Research shows this can increase confidence and reduce stress hormones.",
      date: "May 12, 2025",
    },
    {
      category: "Stress",
      content:
        "To defuse relationship tension, try speaking in the third person when explaining your feelings. This creates psychological distance and reduces defensive responses.",
      date: "May 12, 2025",
    },
    {
      category: "Stress",
      content:
        "Set a 20-minute timer before checking social media. Often, the urge passes and you'll find yourself engaged in more fulfilling activities.",
      date: "May 12, 2025",
    },
  ];

  return (
    <div className="p-6 lg:p-6 flex flex-col gap-8 min-h-screen">
      <PageHeader
        title="Manage Mesmer Tips"
        subtitle="Create and manage tips for different mood categories"
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, idx) => (
          <TipCard key={idx} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default MesmerTipsPage;
