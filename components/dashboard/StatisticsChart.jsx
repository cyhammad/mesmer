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

const yTicks = [0, 50, 100, 500, 1000];
const mapValue = (val) => {
  if (val <= 0) return 0;
  if (val <= 50) return (val / 50) * 1;
  if (val <= 100) return 1 + ((val - 50) / 50) * 1;
  if (val <= 500) return 2 + ((val - 100) / 400) * 1;
  if (val <= 1000) return 3 + ((val - 500) / 500) * 1;
  return 4;
};

const transformedData = data.map((d) => ({
  ...d,
  usersMapped: mapValue(d.users),
  earningsMapped: mapValue(d.earnings),
}));

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
    const monthName = monthNames[monthIdx] || "March";
    const originalPayload = payload[0].payload;

    return (
      <div className="bg-[#1A1C1E] text-white p-3 rounded-[12px] shadow-xl border-none text-xs">
        <p className="font-semibold mb-2">{monthName} 2025</p>
        <div className=" flex flex-col gap-1 text-[11px]">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#FF5C35]" />
            <span className="text-[12px]">New Users:</span>
            <span className="font-medium text-[12px]">{originalPayload.users}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#8F00FF]" />
            <span className="text-[12px]">Earnings:</span>
            <span className="font-medium text-[12px]">
              ${originalPayload.earnings}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function StatisticsChart() {
  return (
    <div className="bg-white p-4 rounded-[16px] border border-[#EED9FF] w-full h-[377px] flex flex-col gap-[16px]">
      <div className="flex justify-between items-center">
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
      <div className="flex-1 w-full min-h-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            data={transformedData}
            margin={{ top: 25, right: 10, left: 0, bottom: 20 }}
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
              tick={{ fill: "#A0A0A0", fontSize: 12, textAnchor: "start" }}
              ticks={[0, 1, 2, 3, 4]}
              tickFormatter={(v) => yTicks[v]}
              domain={[0, 4]}
              interval={0}
              dx={-45}
              dy={14}
            />
            <ChartTooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="usersMapped"
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
              dataKey="earningsMapped"
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
