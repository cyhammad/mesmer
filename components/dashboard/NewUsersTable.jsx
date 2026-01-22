"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const users = [
  {
    name: "Martin Lu",
    email: "Lu.martin@mail.com",
    lastMood: "Happy",
    onboardingDate: "26 September 2024",
    subscription: "Monthly - $30",
  },
  {
    name: "Martin Lu",
    email: "Lu.martin@mail.com",
    lastMood: "Confused",
    onboardingDate: "27 September 2024",
    subscription: "Monthly - $30",
  },
  {
    name: "Martin Lu",
    email: "Lu.martin@mail.com",
    lastMood: "Sad",
    onboardingDate: "28 September 2024",
    subscription: "Monthly - $30",
  },
];

export function NewUsersTable() {
  return (
    <div className="bg-white p-6 lg:p-5 rounded-[20px] border border-[#EED9FF]">
      <h3
        className="text-[24px] font-semibold text-[#1A1A1A] mb-4"
        style={{ fontFamily: "var(--font-nunito-sans)" }}
      >
        New Users
      </h3>
      <div className="overflow-hidden rounded-[16px] border border-transparent">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#FCEDF8] hover:bg-[#FCEDF8] border-none">
              <TableHead className="py-4 px-6 text-sm font-medium text-[#1A1A1A] h-auto rounded-tl-[12px]">
                Name
              </TableHead>
              <TableHead className="py-4 px-6 text-sm font-medium text-[#1A1A1A] h-auto">
                Email
              </TableHead>
              <TableHead className="py-4 px-6 text-sm font-medium text-[#1A1A1A] h-auto">
                Last Mood
              </TableHead>
              <TableHead className="py-4 px-6 text-sm font-medium text-[#1A1A1A] h-auto">
                Onboarding Date
              </TableHead>
              <TableHead className="py-4 px-6 text-sm font-medium text-[#1A1A1A] h-auto rounded-tr-[12px]">
                Subscription
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={index}
                className="group hover:bg-[#FDFCFD] transition-colors border-b border-[#F2F2F2] last:border-0"
              >
                <TableCell className="py-5 px-6 text-sm font-bold text-[#1A1A1A]">
                  {user.name}
                </TableCell>
                <TableCell className="py-5 px-6 text-sm text-[#757575]">
                  {user.email}
                </TableCell>
                <TableCell className="py-5 px-6 text-sm text-[#757575]">
                  {user.lastMood}
                </TableCell>
                <TableCell className="py-5 px-6 text-sm text-[#757575]">
                  {user.onboardingDate}
                </TableCell>
                <TableCell className="py-5 px-6 text-sm text-[#757575]">
                  {user.subscription}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
