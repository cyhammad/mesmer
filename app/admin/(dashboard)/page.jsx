"use client";

import React from "react";
import KPICard from "@/components/dashboard/KPICard";
import { StatisticsChart } from "@/components/dashboard/StatisticsChart";
import { NewUsersTable } from "@/components/dashboard/NewUsersTable";
import {
  UserIDIcon,
  SubscriptionsIcon,
  RevenueIcon,
} from "@/components/icons/icons";

const DashboardPage = () => {
  return (
    <div className="p-4 lg:p-6 space-y-6 bg-[#FDFCFD] min-h-full">
      <div className="flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-nunito-sans)" }}
        >
          Dashboard
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard
          title="Total Users"
          value="500+"
          percentage="+ 20%"
          icon={UserIDIcon}
          iconBgColor="bg-[#FFF1EE]"
          iconColor="text-[#FF5C35]"
        />
        <KPICard
          title="Total Subscriptions"
          value="120"
          percentage="+ 20%"
          icon={SubscriptionsIcon}
          iconBgColor="bg-[#F6E9FF]"
          iconColor="text-[#8F00FF]"
        />
        <KPICard
          title="Monthly Revenue"
          value="$500+"
          percentage="+ 20%"
          icon={RevenueIcon}
          iconBgColor="bg-[#E7F9F8]"
          iconColor="text-[#00B8AC]"
        />
      </div>

      {/* Statistics Chart Section */}
      <StatisticsChart />

      {/* New Users Table Section */}
      <NewUsersTable />
    </div>
  );
};

export default DashboardPage;
