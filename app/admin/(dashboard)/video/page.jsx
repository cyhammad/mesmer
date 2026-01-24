"use client";

import React from "react";
import PageHeader from "./_components/PageHeader";
import VideoCard from "./_components/VideoCard";

const VideoContentPage = () => {
  const videoItems = [
    {
      title: "Anchoring",
      description: "Trigger Peace Anytime, Anywhere",
      duration: "02:24",
      categories: "School & Exams - Social Media",
      moods: "Confident - Calm",
      thumbnail: "/audio-thumb-1.png",
    },
    {
      title: "Anchoring",
      description: "Trigger Peace Anytime, Anywhere",
      duration: "02:24",
      categories: "School & Exams - Social Media",
      moods: "Confident - Calm",
      thumbnail: "/audio-thumb-1.png",
    },
    {
      title: "Anchoring",
      description: "Trigger Peace Anytime, Anywhere",
      duration: "02:24",
      categories: "School & Exams - Social Media",
      moods: "Confident - Calm",
      thumbnail: "/audio-thumb-1.png",
    },
    {
      title: "Anchoring",
      description: "Trigger Peace Anytime, Anywhere",
      duration: "02:24",
      categories: "School & Exams - Social Media",
      moods: "Confident - Calm",
      thumbnail: "/audio-thumb-1.png",
    },
    {
      title: "Anchoring",
      description: "Trigger Peace Anytime, Anywhere",
      duration: "02:24",
      categories: "School & Exams - Social Media",
      moods: "Confident - Calm",
      thumbnail: "/audio-thumb-1.png",
    },
    {
      title: "Anchoring",
      description: "Trigger Peace Anytime, Anywhere",
      duration: "02:24",
      categories: "School & Exams - Social Media",
      moods: "Confident - Calm",
      thumbnail: "/audio-thumb-1.png",
    },
  ];

  return (
    <div className="p-4 md:p-6 flex flex-col gap-6 sm:gap-8 min-h-screen">
      <PageHeader
        title="Manage Video Files"
        subtitle="Create and manage tips for different mood categories"
      />

      {/* Video Grid - responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
        {videoItems.map((video, idx) => (
          <VideoCard key={idx} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoContentPage;
