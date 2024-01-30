"use client";

import { twMerge } from "tailwind-merge";
import useAppData from "@/globals/hooks/use-app-data";

const TopBar = () => {
  const { changeTheme } = useAppData();

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
          <button
            className={twMerge(
              "whitespace-nowrap rounded-md text-sm font-medium ring-offset-background",
              "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2",
              "focus-visible:ring-offset-2 bg-gray-300 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-500"
            )}
            onClick={changeTheme}
          >
            🌓
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
