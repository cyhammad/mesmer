"use client";

import React from "react";
import Image from "next/image";

const AdminAuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full min-w-[464.15px] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#F9EBFF]">
      {/* --- Static Logo Section --- */}
      <div className="my-3">
        <Image
          src="/mesmer.png"
          alt="MESMER"
          width={280}
          height={100}
          className="mx-auto"
          priority
        />
      </div>

      {/* --- Dynamic Content Section --- */}
      <div className="w-full max-w-[464.15px]">{children}</div>
    </div>
  );
};

export default AdminAuthLayout;
