"use client";

import { BadgeProps } from "./types";
import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";

export const Badge = (props: BadgeProps) => {
  const { badgeText, containerClassName, endCountNum, endCountText, icon } =
    props;

  return (
    <div
      className={twMerge(
        "z-10 w-[200px] bg-gray-300 dark:bg-gray-200 dark:backdrop-blur-[44px] shadow-2xl dark:shadow-gray-600 h-[68px] p-4 rounded-[10px] flex items-center gap-x-4",
        containerClassName
      )}
    >
      <div className="text-3xl text-blue-500">{icon}</div>
      <div className="flex items-center justify-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-blue-500">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-blue-500 mt-1">
          {badgeText}
        </div>
      </div>
    </div>
  );
};
