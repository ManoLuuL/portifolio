"use client";

import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={twMerge(
        "rounded-full bg-gray-300 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-500 h-10 px-2 py-2"
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      🌓
    </button>
  );
};
