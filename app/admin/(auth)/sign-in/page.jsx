"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignInPage = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      {/* Heading */}
      <h1 className="text-[40px] font-bold text-[#24282E] mb-8 tracking-tight text-center">
        Sign In
      </h1>

      <h2 className="text-xl font-[500] mb-3 text-left">Enter your details</h2>

      <form className="flex flex-col gap-1">
        {/* Email Input */}
        <div className="flex flex-col gap-1">
          <label className="text-[#717171] text-[15px]">Email</label>
          <input
            type="email"
            placeholder="Enter"
            className="w-full h-[50px] bg-white border border-[#EDEDED] rounded-[10px] px-5 py-4 text-gray-900 placeholder:text-gray-300 focus:ring-purple-500 outline-none text-[15px]"
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-1">
          <label className="text-[#717171] text-[15px]">Password</label>
          <input
            type="password"
            placeholder="Enter"
            className="w-full h-[50px] bg-white border border-[#EDEDED] rounded-[10px] px-5 py-4 text-gray-900 placeholder:text-gray-300 focus:ring-purple-500 outline-none text-[15px]"
          />
        </div>

        {/* Forgot Password Link */}
        <Link
          href="/admin/forget-password"
          className="text-[#9D28F0] pl-[14px] mt-1 font-medium text-[14px] hover:text-[#8b2ef0] transition-colors"
        >
          Forgot Password?
        </Link>

        {/* Continue Button */}
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="w-full mt-9 bg-[#8F00FF] hover:bg-[#8b2ef0] text-white font-normal text-[16px] py-4 rounded-2xl transition-all shadow-[0_4px_14px_0_rgba(157,40,240,0.39)] hover:shadow-[0_6px_20px_rgba(157,40,240,0.23)]"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
