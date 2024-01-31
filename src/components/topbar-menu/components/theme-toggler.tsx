"use client";

import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={twMerge(
        "whitespace-nowrap rounded-md text-sm font-medium ring-offset-background",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2",
        "focus-visible:ring-offset-2 bg-gray-300 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-500"
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      🌓
    </button>
  );
};
