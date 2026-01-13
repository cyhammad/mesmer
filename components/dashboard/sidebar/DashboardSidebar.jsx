"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  DashboardIcon,
  MoodExercisesIcon,
  DailyMesmerIcon,
  MesmerTipsIcon,
  AudioContentIcon,
  VideoContentIcon,
  SettingsIcon,
  LogoutIcon,
} from "@/components/icons/icons";

const menuItems = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    href: "/admin",
  },
  {
    title: "Mood Exercises",
    icon: MoodExercisesIcon,
    href: "/admin/mood-exercises",
  },
  {
    title: "Daily Mesmer",
    icon: DailyMesmerIcon,
    href: "/admin/daily-mesmer",
  },
  {
    title: "Mesmer Tips",
    icon: MesmerTipsIcon,
    href: "/admin/tips",
  },
  {
    title: "Audio Content",
    icon: AudioContentIcon,
    href: "/admin/audio",
  },
  {
    title: "Video Content",
    icon: VideoContentIcon,
    href: "/admin/video",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    href: "/admin/settings",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // Normalize current path for comparison
  const currentPath = pathname;

  return (
    <aside className="hidden lg:flex flex-col w-[320px] h-full bg-white p-6 justify-between shrink-0">
      <div className="flex flex-col w-full">
        <div className="mb-13 flex items-center justify-center">
          <Image
            src="/mesmer.png"
            alt="MESMER"
            width={292}
            height={95}
            className="object-contain"
            priority
          />
        </div>

        <nav className="flex flex-col gap-[4px] w-full">
          {menuItems.map((item) => {
            const Icon = item.icon;
            // Exact match for dashboard root, startsWith for others to handle subpaths if needed
            const isActive =
              item.href === "/admin"
                ? currentPath === "/admin"
                : currentPath.startsWith(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 w-full max-w-[292px] h-[48px] rounded-[12px] px-4 transition-all duration-200 ${
                  isActive
                    ? "bg-[#8F00FF] text-white"
                    : "text-[#757575] hover:bg-gray-50"
                }`}
              >
                <Icon
                  className={`w-[22px] h-[22px] ${
                    isActive ? "text-white" : "text-[#757575]"
                  }`}
                />
                <span className="font-medium text-[15px]">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="w-full">
        <button
          onClick={() => router.push("/admin/sign-in")}
          className="flex items-center justify-center gap-3 w-full h-[52px] text-[#757575] hover:text-[#8F00FF] hover:bg-gray-50 rounded-2xl transition-all duration-200"
        >
          <LogoutIcon className="w-5 h-5" />
          <span className="font-medium text-[15px]">Logout</span>
        </button>
      </div>
    </aside>
  );
}
