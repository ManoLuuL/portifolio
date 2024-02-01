"use client";

import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Button = (props: ButtonProps) => {
  const { text, onClick, className, icon } = props;

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
        "h-10 px-4 py-2 bg-gray-200 dark:bg-gray-800 border-blue-400 border-2",
        "dark:hover:bg-blue-400 hover:bg-blue-300 text-gray-700 dark:text-white select-none",
        className
      )}
    >
      {text} {icon}
    </button>
  );
};
