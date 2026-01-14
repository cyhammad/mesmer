"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "01", users: 300, earnings: 100 },
  { month: "02", users: 150, earnings: 450 },
  { month: "03", users: 600, earnings: 500 },
  { month: "04", users: 300, earnings: 250 },
  { month: "05", users: 850, earnings: 400 },
  { month: "06", users: 450, earnings: 250 },
  { month: "07", users: 700, earnings: 600 },
  { month: "08", users: 500, earnings: 300 },
  { month: "09", users: 550, earnings: 200 },
  { month: "10", users: 900, earnings: 450 },
  { month: "11", users: 700, earnings: 100 },
  { month: "12", users: 200, earnings: 200 },
];

const chartConfig = {
  users: {
    label: "New Users",
    color: "#FF5C35",
  },
  earnings: {
    label: "Earnings",
    color: "#8F00FF",
  },
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIdx = parseInt(label) - 1;
    const monthName = monthNames[monthIdx] || "March"; // Fallback for screenshot look

    return (
      <div className="bg-[#1A1C1E] text-white p-3 rounded-[12px] shadow-xl border-none text-xs min-w-[140px]">
        <p className="font-semibold mb-2">{monthName} 2025</p>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#FF5C35]" />
            <span className="text-gray-400">New Users:</span>
            <span className="font-medium ml-auto">{payload[0].value}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#8F00FF]" />
            <span className="text-gray-400">Earnings:</span>
            <span className="font-medium ml-auto">${payload[1].value}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function StatisticsChart() {
  return (
    <div className="bg-white p-6 lg:p-5 rounded-[20px] border border-[#EED9FF]">
      <div className="flex justify-between items-center mb-8">
        <h3
          className="text-xl font-semibold text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-nunito-sans)" }}
        >
          My Statistics
        </h3>
        <button className="text-sm border-2 border-[#EFEFEF] rounded-[10px] px-4 py-2 flex items-center gap-2 text-[#757575] font-medium hover:bg-gray-50 transition-colors">
          Year 2025 <span className="text-[10px]">▼</span>
        </button>
      </div>
      <div className="h-[350px] w-full">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#F2F2F2"
              strokeDasharray="0"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0A0A0", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0A0A0", fontSize: 12 }}
              ticks={[0, 50, 100, 500, 1000]}
              domain={[0, 1000]}
              dx={-10}
            />
            <ChartTooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="users"
              stroke="var(--color-users)"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#1A1C1E",
                strokeWidth: 2,
                stroke: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="earnings"
              stroke="var(--color-earnings)"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#1A1C1E",
                strokeWidth: 2,
                stroke: "#fff",
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
