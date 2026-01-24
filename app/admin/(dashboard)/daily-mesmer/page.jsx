"use client";

import React, { useState } from "react";
import PageHeader from "./_components/PageHeader";
import CategoryFilter from "./_components/CategoryFilter";
import StoryCard from "./_components/StoryCard";
import ScheduleStoryDialog from "./_components/ScheduleStoryDialog";

const DailyMesmerPage = () => {
  const [activeCategory, setActiveCategory] = useState("Scheduled");

  const categories = [{ name: "Scheduled", count: "06" }];

  const stories = [
    {
      category: "Stress",
      content:
        "I remember once getting home after a long day and forgetting to take my bag off straight away. Just wandered round the kitchen with it still on my back. Took me a few minutes to even realise why I felt so tired. Sometimes you don't even notice the weight you're carrying until you finally let it drop.",
      date: "May 12, 2025",
    },
    {
      category: "Sleep",
      content:
        "I used to try racing the tide at the beach — running ahead of it, trying to beat it back. Never worked. The water always moved in its own time, no matter what I did. After a while, I stopped fighting it. Just stood there and let the waves wash around my ankles. It's strange how much calmer things get when you stop pushing.",
      date: "May 12, 2025",
    },
    {
      category: "Sleep",
      content:
        "There's this old light in my room that doesn't switch off properly — it's got a dimmer you have to turn slowly. If you just yank it, it flickers and buzzes. But if you twist it gently, it fades out soft and easy. Like some part of you needs permission to slow down instead of snapping off.",
      date: "May 12, 2025",
    },
    {
      category: "Stress",
      content:
        "When I was little, someone gave me a snow globe. Every time I shook it, it would take ages for all the flakes to settle. The more I shook it, the longer it took. But if I just left it alone, it always cleared on its own. Sleep's a bit like that sometimes. It comes when you stop trying to chase it.",
      date: "May 12, 2025",
    },
    {
      category: "Sleep",
      content:
        "One night I made a cup of tea and forgot about it. When I finally picked it up, it was the perfect temperature. Not because I did anything — just because I left it alone long enough for it to settle. Some things just take their own time.",
      date: "May 12, 2025",
    },
    {
      category: "Sleep",
      content:
        "I found an old pair of wired headphones the other day, all knotted up. I sat there for ages trying to pull them apart by yanking and twisting, but it just made the knots tighter. Ended up doing nothing until I slowed down, loosened one tiny knot at a time. It's weird how sometimes the faster you try to fix things, the more stuck they get.",
      date: "May 12, 2025",
    },
  ];

  return (
    <div className="p-4 md:p-6 flex flex-col gap-4 min-h-screen">
      <PageHeader
        title="Manage Daily Mesmer Stories"
        subtitle="Create and manage exercises for different mood categories"
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, idx) => (
          <StoryCard key={idx} story={story} />
        ))}
      </div>
    </div>
  );
};

export default DailyMesmerPage;
