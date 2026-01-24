"use client";

import React, { useState } from "react";
import PageHeader from "./_components/PageHeader";
import Tabs from "./_components/Tabs";
import CategoryFilter from "./_components/CategoryFilter";
import ExerciseCard from "./_components/ExerciseCard";

const MoodExercisesPage = () => {
  const [activeTab, setActiveTab] = useState("My Exercises");
  const [activeCategory, setActiveCategory] = useState("Confident");

  const categories = [
    { name: "Confident", count: "04" },
    { name: "Calm", count: "04" },
    { name: "Motivated", count: "04" },
    { name: "Self Love", count: "04" },
    { name: "Focused", count: "04" },
    { name: "Free", count: "04" },
    { name: "School & Exams", count: "04" },
    { name: "Friendships", count: "04" },
    { name: "Social", count: "04" },
  ];

  const exercises = Array(6).fill({
    order: "Order 01",
    subtitle: "Power Poses",
    title: "Replace limiting patterns with empowering ones",
    duration: "10 mins",
    steps: "04 steps",
  });

  return (
    <div className="p-4 md:p-6 flex flex-col gap-4 min-h-screen">
      <PageHeader
        title="Manage Exercises"
        subtitle="Create and manage exercises for different mood categories"
        onAddClick={() => console.log("Add Exercise clicked")}
      />

      <Tabs
        tabs={["My Exercises", "Drafts"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:justify-items-start">
        {exercises.map((exercise, idx) => (
          <ExerciseCard
            key={idx}
            exercise={exercise}
            isDraft={activeTab === "Drafts"}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodExercisesPage;
