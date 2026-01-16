"use client";

import React from "react";
import PageHeader from "./_components/PageHeader";
import AudioCard from "./_components/AudioCard";

const AudioContentPage = () => {
  const audioItems = [
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
    {
      title: "Self-Love Confidence",
      categories: "Self Esteem, Stress",
      duration: "6 min",
      thumbnail: "/audio-placeholder.png",
    },
  ];

  return (
    <div className="p-6 lg:p-6 flex flex-col gap-8 min-h-screen">
      <PageHeader
        title="Manage Audio Files"
        subtitle="Create and manage tips for different mood categories"
      />

      {/* Audio Grid - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {audioItems.map((audio, idx) => (
          <AudioCard key={idx} audio={audio} />
        ))}
      </div>
    </div>
  );
};

export default AudioContentPage;
