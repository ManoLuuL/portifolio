"use client";

import { ThemeToggler } from "./components";
import { twMerge } from "tailwind-merge";

const TopBar = () => {
  return (
    <section
      className={twMerge(
        "flex items-center justify-center overflow-hidden w-full h-full overflow-x-auto overflow-y-auto z-[1]",
        "bg-gray-300 dark:bg-gray-800 border-b-2 border-blue-400 dark:border-blue-400 border-solid px-3 h-14"
      )}
    >
      <div className={twMerge("grid-cols-12 grid gap-4 p-1 w-full")}>
        <div
          className={twMerge(
            "text-2xl dark:text-gray-200 text-gray-700 font-bold col-span-8 flex items-center justify-start"
          )}
        ></div>

        <div className={twMerge("col-span-2")} />
        <div className={twMerge("col-span-2 flex justify-end")}>
          <ThemeToggler />
        </div>
      </div>
    </section>
  );
};

export default TopBar;
